import { Link } from "react-router-dom"
import { useState } from "react"
import checkLogo from "../assets/checkmark.png"
function Navigation(props: any){
    const [isEnabled, setIsEnabled] = useState(false)
    const handleMenuChange = () => {
        if(isEnabled){
            setIsEnabled(false)
        }else{
            setIsEnabled(true)
        }
    }
    return <nav>
        <Link to={"/"}>
            <img src={checkLogo} alt="" className="logo"/>
        </Link>
        <h1><Link to="/">Speedy Check-In</Link></h1>
        <div>
            <ul id="navbar" className={`${isEnabled ? "onScreen" : "offScreen"}`}>
                <li><Link to={"/signup"}>Sign Up</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
                <li><Link to={"/"}>About</Link></li>
            </ul>
            <div className="mobile">
            <button className={`hamburgerIcon ${isEnabled ? "hidden" : ""}`} onClick={handleMenuChange}>≡</button>
            <button className={`closeIcon ${isEnabled ? "" : "hidden"}`} onClick={handleMenuChange}>X</button>
        </div>
        </div>
        

    </nav>
}

export default Navigation