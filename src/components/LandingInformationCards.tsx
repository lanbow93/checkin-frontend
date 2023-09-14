import { useState } from "react"

interface landingCardProps{
    cardTitle: string,
    cardContent: string
}


function LandingInformationCard(props: landingCardProps){
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        if(isActive){
            setIsActive(false)
        } else{
            setIsActive(true)
        }
    }
    return <div className={`landingCard `}  >
        <h2 className="cardTitle" onClick={handleClick}>{props.cardTitle}</h2>
        <p className={`cardContent ${isActive ? "cardActivated" : "cardDeactivated"}`}>{props.cardContent}</p>
    </div>
}

export default LandingInformationCard