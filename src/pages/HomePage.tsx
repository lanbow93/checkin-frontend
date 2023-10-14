import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import url from '../router/url'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import { IAccount } from '../utils/sharedTypes'
import { determineUserStatus } from '../utils/sharedFunctions'
import { homeScreenButtons } from '../utils/dataObjects'

function HomePage() {
    const [isLoading, setIsLoading] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const [errorData, setErrorData] = useState({
        errorMessage: '',
        errorStatus: '',
        errorAdditional: '',
    })
    const navigate = useNavigate()
    // Used to set navigation upon first render of page

    const accountJSON = sessionStorage.getItem('account') || ''
    const account: IAccount = JSON.parse(accountJSON)
    console.log(account)

    const userStatus = determineUserStatus(account)
    return (
        <>
            <Navigation link={userStatus} />
            <div className="homePage">
                <div
                    className={`errorModal ${isModalActive ? 'showError' : ''}`}
                >
                    <ErrorScreen
                        message={errorData.errorMessage}
                        status={errorData.errorStatus}
                        error={errorData.errorAdditional}
                        closeModal={setIsModalActive}
                    />
                </div>

                <h1>Hello, {account.badgeName}!</h1>
                <h2>Welcome Back</h2>
                <div className="assignment">
                    <h2>Current Task:</h2>
                    <p className="spacer">{account.currentTask[0][0]}</p>
                    <h2>Assigned By:</h2>
                    <p>{account.currentTask[0][1]}</p>
                </div>
                <div className="imitationButtons">
                    {homeScreenButtons[userStatus].map((element) => (
                        <Link to={element.link}>{element.text}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage
