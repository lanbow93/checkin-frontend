import { useState } from "react"

function SignUp(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [verifypassword, setVerifyPassword] = useState("")
    const [email, setEmail] = useState("")
    const [badgeName, setBadgeName] = useState("")

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
    return <div className="registration">
        
        <form action="/register" method="POST">
            <h2>Sign Up Page</h2>
            <p className="finePrint">* Username 15 Character Limit</p>
            <label >Username</label>
            <input type="text" name="username" value={username} onChange={(event) => event.target.value.length <= 14 ? setUserName(event.target.value) : ""  } />
            <label >Password</label>
            <input type="password" className="passwordRow" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <label >Verify Password</label>
            <input type="password" name="verifypassword" value={verifypassword} onChange={(event) => setVerifyPassword(event.target.value)} />
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
            {firstName && lastName && password && password === verifypassword && username && email ? <button type="submit" className="activated" >Register</button> : <button type="submit" disabled>Register</button> }
            <input type="hidden" value={name} name="name" />
        </form>
    </div>
}

export default SignUp