import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import url from "../router/url"
import ErrorScreen from "../components/ErrorScreen"
import LoadingScreen from "../components/LoadingScreen"

function PasswordReset(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const [errorData, setErrorData] = useState({
        errorMessage: '',
        errorStatus: '',
        errorAdditional: '',
    })

    const [resetData, setResetData] = useState({
        username: "",
        password: ""
    })
    const [verifyPassword, setVerifyPassword] = useState("")

    const handleFormSubmission = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch(url + `/user/forgotpassword/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resetData),
            })
            console.log(response)
            if (response.ok) {
                navigate('/confirmation', {
                    state: {
                        header: 'Password Has Been Successfully Updated',
                        message: `Proceed To The Login Screen`,
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
    return(
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
                    <h2>Reset Password</h2>
                    <label>Username</label>
                    <input
                        required
                        type="text"
                        name="username"
                        value={resetData.username}
                        onChange={(event) => setResetData({...resetData, username: event.target.value })}
                    />
                    <label>New Password</label>
                    <input
                        required
                        name="password"
                        type="password"
                        onChange={(event) => setResetData({...resetData, password: event.target.value })}
                        onPaste={(event) => event.preventDefault()}
                    />
                    <label>Verify Password</label>
                    <input
                        required
                        name="verifypassword"
                        type="password"
                        className={
                            resetData.password !== verifyPassword
                                ? 'different'
                                : verifyPassword && resetData.password
                                ? 'same'
                                : ''
                        }
                        onChange={(event) => setVerifyPassword(event.target.value)}
                        onPaste={(event) => event.preventDefault()}
                    />
                    <button
                        className="activated"
                        disabled={resetData.password !== verifyPassword}
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    )
}

export default PasswordReset