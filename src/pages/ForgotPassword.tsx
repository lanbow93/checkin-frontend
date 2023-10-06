import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import url from '../router/url'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import Navigation from '../components/Navigation'

function ForgotPassword() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const [errorData, setErrorData] = useState({
        errorMessage: '',
        errorStatus: '',
        errorAdditional: '',
    })
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    const handleFormSubmission = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch(url + '/user/forgotpassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
            console.log(response)
            if (response.ok) {
                navigate('/confirmation', {
                    state: {
                        header: 'Password Reset Email Sent',
                        message: `Email has been sent to ${email}. Check your email for further directions`,
                        link: '/login',
                        state: '',
                    },
                })
            } else {
                const data = await response.json()
                console.log(data)
                // Made to detect errors in backend format
                setErrorData({
                    errorStatus: data.error,
                    errorMessage: data.status,
                    errorAdditional: data.message,
                })
                setIsModalActive(true)
            }
        } catch (error) {
            console.log({ error })
        } finally {
            setIsLoading(false)
        }
    }
    return (<>
        <Navigation />
        <div className="forgotPassword">
            <div className={`errorModal ${isModalActive ? 'showError' : ''}`}>
                <ErrorScreen
                    message={errorData.errorMessage}
                    status={errorData.errorStatus}
                    error={errorData.errorAdditional}
                    closeModal={setIsModalActive}
                />
            </div>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <form onSubmit={handleFormSubmission}>
                    <h2>Forgot Password</h2>
                    <label>Email</label>
                    <input
                        required
                        type="text"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Confirm Email</label>
                    <input
                        required
                        name="confirmEmail"
                        type="text"
                        onChange={(event) =>
                            setConfirmEmail(event.target.value)
                        }
                        onPaste={(event) => event.preventDefault()}
                    />
                    <button
                        className="activated"
                        disabled={email !== confirmEmail}
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    </>)
}

export default ForgotPassword
