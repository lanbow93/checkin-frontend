import LandingInformationCard from "../components/LandingInformationCards"
import speedyLogo from "../assets/speedyLogo.png"
import { useState } from "react"
import { Link } from "react-router-dom"
function Landing(){

    const [currentActivePanel, setCurrentActivePanel] = useState("about")
    type targetObject = {
        innerText: string
    }
    const changeFocus = (target: targetObject) => {
        setCurrentActivePanel(target.innerText)
    }

    return <div className="landing">
    <h1>Revolutionize Workforce Management with<br /><span className="title">Speedy Check-In</span></h1>

    <div className="landingDescription">
        <div className="greeting">
            <p>Welcome to Speedy Check-In, your comprehensive solution for efficient workforce management!</p>
            <div className="actionLinks">
                <Link to="/login"><button>Login</button></Link>
                <Link to={"/signup"}><button>Sign-Up</button></Link>
            </div>
        </div>
        <div className="logoSection">
            <img src={speedyLogo} alt="Speedy Checkin Logo" />
        </div>
        <LandingInformationCard cardTitle="About" cardContent="Our web application simplifies the entire process, allowing managers to effortlessly create, enroll, assign groups, and set schedules." isActive={currentActivePanel === "About"} changeFocus={changeFocus} />
        <LandingInformationCard cardTitle="How" cardContent="With the ability to generate QR codes, managers can streamline check-in procedures." isActive={currentActivePanel === "How"} changeFocus={changeFocus}/>
        <LandingInformationCard cardTitle="Breakdown" cardContent="When users scan the QR code, it not only validates their presence but also records their punch-in and out times, ensuring precise attendance tracking." isActive={currentActivePanel === "Breakdown"} changeFocus={changeFocus}/>
        <LandingInformationCard cardTitle="More Info" cardContent="Additionally, users can conveniently access their schedules and view assigned tasks, along with the responsible manager's details. Experience the future of workforce management with Speedy Check-In today!" isActive={currentActivePanel === "More Info"} changeFocus={changeFocus}/>
    </div>

    </div>
}

export default Landing