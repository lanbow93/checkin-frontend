import { ChangeEvent, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import url from '../router/url'
import ErrorScreen from '../components/ErrorScreen'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({
        name: '',
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

    // Used to combine first and last name for form submission
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.name === 'firstName'
            ? setFirstName(event.target.value)
            : setLastName(event.target.value)
        setUserData({ ...userData, name: `${firstName} ${lastName}` })
    }

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
            const response = await fetch(url + '/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            if (response.ok) {
                navigate('/confirmation', {
                    state: {
                        header: 'User Created',
                        message: `${userData.username} has been successfully created`,
                        link: '/home',
                        state: '',
                    },
                })
            } else {
                const data = await response.json()
                // Made to detect errors in backend format
                if (typeof data.error === 'string') {
                    setErrorData({
                        errorStatus: data.error,
                        errorMessage: data.status,
                        errorAdditional: data.message,
                    })
                    setIsModalActive(true)
                } else {
                    // Catching Email and Username Duplicate Mongo Errors
                    setErrorData({
                        errorStatus: data.status,
                        errorMessage: data.message,
                        errorAdditional: '',
                    })
                    if (
                        data.error.error.code === 11000 &&
                        data.error.error.keyPattern.username
                    ) {
                        setErrorData({
                            ...errorData,
                            errorAdditional: 'Username Already Exists',
                        })
                    } else if (
                        data.error.error.code === 11000 &&
                        data.error.error.keyPattern.email
                    ) {
                        setErrorData({
                            ...errorData,
                            errorAdditional: 'Email Already Exists',
                        })
                    } else {
                        setErrorData({
                            ...errorData,
                            errorAdditional: 'Unknown',
                        })
                    }
                    setIsModalActive(true)
                }
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
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={(event) => handleInputChange(event)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        className="passwordRow"
                        name="password"
                        value={userData.password}
                        onChange={(event) => handleInputChange(event)}
                    />
                    <label>Verify Password</label>
                    <input
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
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(event) => handleNameChange(event)}
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(event) => handleNameChange(event)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={(event) => handleInputChange(event)}
                    />
                    <label>Badge Name</label>
                    <input
                        type="text"
                        name="badgeName"
                        value={userData.badgeName}
                        onChange={(event) => handleInputChange(event)}
                    />
                    {firstName &&
                    lastName &&
                    userData.password &&
                    userData.password === verifyPassword &&
                    userData.username &&
                    userData.email &&
                    userData.badgeName ? (
                        <button type="submit" className="activated">
                            Register
                        </button>
                    ) : (
                        <button type="submit" disabled>
                            Register
                        </button>
                    )}
                    <input type="hidden" value={userData.name} name="name" />
                </form>
            )}
        </div>
    )
}

export default SignUp
