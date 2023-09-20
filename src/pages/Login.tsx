import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorScreen from "../components/ErrorScreen"
import LoadingScreen from "../components/LoadingScreen"
import url from "../router/url"

function Login(){
    const [isLoading, setIsLoading] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [errorStatus, setErrorStatus] = useState("")
    const [errorAdditional, setErrorAdditional] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const user = {
            username: username,
            password: password
        }
        try{
            const response = await fetch(url + "/user/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(user)
            })

            if(response.ok){
                navigate("/home")
            } else {
                const data = await response.json()
                console.log(data)
                setErrorStatus(data.error)
                setErrorAdditional(data.message)
                setErrorMessage(data.status)
                setIsModalActive(true)
            }
        }catch(error){
            console.log(error)
        } finally{
            setIsLoading(false)
        }

    }

    return <div className="loginPage">
        <div className={`errorModal ${isModalActive ? "showError" : ""}`}>
            <ErrorScreen message={errorMessage} status={errorStatus} error={errorAdditional}  closeModal={setIsModalActive} />
        </div>

        {isLoading ? <LoadingScreen /> :
            <form onSubmit={(event) => handleSubmission(event)}>
            <h2>Speedy Login</h2>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={(event) => setUserName(event.target.value)} />
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value) }/>
            {username && password ?  <button type="submit" className="activated">Submit</button> : <button type="submit" className="deactivated" disabled>Submit</button>}
            </form>
        }

    </div>
}

export default Login