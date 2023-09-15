import { useActionData } from "react-router-dom"

function Register(){
    console.log(useActionData())
    return <div>
        <h1>Registration Processing Screen</h1>
    </div>
}

export default Register