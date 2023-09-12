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
        <div>
            <ul id="navbar">
                <li><Link to={"/"}>Sign Up</Link></li>
                <li><Link to={"/"}>Login</Link></li>
                <li><Link to={"/"}>About</Link></li>
            </ul>
        </div>
        <div className="mobile">
            <i className={`hamburgerIcon ${isEnabled ? "hidden" : ""}`} onClick={handleMenuChange}>≡</i>
            <i className={`closeIcon ${isEnabled ? "" : "hidden"}`} onClick={handleMenuChange}>X</i>
        </div>

    </nav>
}

export default Navigation