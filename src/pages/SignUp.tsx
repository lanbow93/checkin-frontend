import { ChangeEvent, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import url from '../router/url'
import ErrorScreen from '../components/ErrorScreen'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        badgeName: '',
    })
    const [verifyPassword, setVerifyPassword] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)

    const [errorData, setErrorData] = useState({
        errorMessage: '',
        errorStatus: '',
        errorAdditional: '',
    })
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    // Fetch request that allows new user creation and loading screen to be ran until response recveived
    const handleFormSubmission = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const user = {
                name: userData.firstName + ' ' + userData.lastName,
                username: userData.username,
                email: userData.email,
                password: userData.password,
                badgeName: userData.badgeName,
            }
            const response = await fetch(url + '/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            if (response.ok) {
                navigate('/confirmation', {
                    state: {
                        header: 'User Created',
                        message: `${userData.username} has been successfully created`,
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
    return (
        <div className="registration">
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
                    <h2>Sign Up Page</h2>
                    <p className="finePrint">* Username 15 Character Limit</p>
                    <label>Username</label>
                    <input
                        required
                        type="text"
                        name="username"
                        value={userData.username}
                        maxLength={15}
                        onChange={handleInputChange}
                    />
                    <label>Password</label>
                    <input
                        required
                        type="password"
                        className="passwordRow"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                    <label>Verify Password</label>
                    <input
                        required
                        type="password"
                        className={
                            userData.password !== verifyPassword
                                ? 'different'
                                : verifyPassword && userData.password
                                ? 'same'
                                : ''
                        }
                        name="verifypassword"
                        value={verifyPassword}
                        onChange={(event) =>
                            setVerifyPassword(event.target.value)
                        }
                    />
                    <h2>Account Information</h2>
                    <p className="finePrint">* Badge Name 15 Character Limit</p>
                    <label>First Name</label>
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                    />
                    <label>Last Name</label>
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                    />
                    <label>Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    <label>Badge Name</label>
                    <input
                        required
                        type="text"
                        name="badgeName"
                        value={userData.badgeName}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="activated" disabled={userData.password === verifyPassword ? false : true}>
                        Register
                    </button>
                </form>
            )}
        </div>
    )
}

export default SignUp
