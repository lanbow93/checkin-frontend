import { useState } from "react"
import LoadingScreen from "../components/LoadingScreen"
import url from "../router/url"
import { json, redirect } from "react-router-dom"
import ErrorScreen from "../components/ErrorScreen"

function SignUp(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [verifypassword, setVerifyPassword] = useState("")
    const [email, setEmail] = useState("")
    const [badgeName, setBadgeName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isModalActive, setIsModalActive] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const [errorStatus, setErrorStatus] = useState("")
    const [errorAdditional, setErrorAdditional] = useState("")

    // Used to combine first and last name for form submission
    const handleNameChange = (name: string, isFirstName: boolean) => {
        if(isFirstName){
            setFirstName(name)
            setName(firstName + " " + lastName)
        } else {
            setLastName(name)
            setName(firstName + " " + lastName)
        }
    }
    // Fetch request that allows new user creation and loading screen to be ran until response recveived 
    const handleFormSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        const newUser = {
            name: name,
            username: username,
            password: password,
            email: email,
            badgeName: badgeName
        }
        try{
            const response = await fetch(url + "/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            
            if(response.ok){
                redirect(`/login`)
            } else {
                const data = await response.json()
                console.log(data)
                setErrorStatus(data.status)
                setErrorAdditional(data.error)
                setErrorMessage(data.message)
                setIsModalActive(true)
            }
        } catch(error){
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }
    return <div className="registration">
        <div className={`errorModal ${isModalActive ? "showError" : ""}`}>
            <ErrorScreen message={errorMessage} status={errorStatus} error={errorAdditional}  closeModal={setIsModalActive} />
        </div>
        {isLoading ? 
        <LoadingScreen /> :
        <form onSubmit={(event) => handleFormSubmission(event)}>
            <h2>Sign Up Page</h2>
            <p className="finePrint">* Username 15 Character Limit</p>
            <label >Username</label>
            <input type="text" name="username" value={username} onChange={(event) => event.target.value.length <= 14 ? setUserName(event.target.value) : ""  } />
            <label >Password</label>
            <input type="password" className="passwordRow" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <label >Verify Password</label>
            <input type="password" className={password !== verifypassword ? "different" : verifypassword && password ? "same" : ""} name="verifypassword" value={verifypassword} onChange={(event) => setVerifyPassword(event.target.value)} />
            <h2>Account Information</h2>
            <p className="finePrint">* Badge Name 15 Character Limit</p>
            <label>First Name</label>
            <input type="text" name="firstname" value={firstName} onChange={(event) => {handleNameChange(event.target.value, true)}} />
            <label>Last Name</label>
            <input type="text" name="firstname" value={lastName} onChange={(event) => {handleNameChange(event.target.value, false)}} />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}} />
            <label>Badge Name</label>
            <input type="text" name="badgeName" value={badgeName} onChange={(event) => event.target.value.length <= 14 ? setBadgeName(event.target.value) : ""}/>
            {firstName && lastName && password && password === verifypassword && username && email && badgeName? <button type="submit" className="activated" >Register</button> : <button type="submit" disabled>Register</button> }
            <input type="hidden" value={name} name="name" />
        </form>
        }

    </div>
}

export default SignUp