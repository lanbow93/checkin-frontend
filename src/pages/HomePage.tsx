import { useEffect, useState } from "react"
import Navigation from "../components/Navigation"
import { useNavigate } from "react-router-dom"
import url from "../router/url"
import ErrorScreen from "../components/ErrorScreen"
import LoadingScreen from "../components/LoadingScreen"
import { IAccount } from "../utils/sharedTypes"
import { determineUserStatus } from "../utils/sharedFunctions"

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

    const accountJSON = sessionStorage.getItem("account") || "";
    const account: IAccount = JSON.parse(accountJSON)


    const userStatus = determineUserStatus(account)
    return (<>
        <Navigation link={userStatus}/>
        
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
                {isLoading ? (
                    <LoadingScreen />
                ) : (
            <h1>Homepage</h1>
                )
                }
            </div>
        </>)
}

export default HomePage
