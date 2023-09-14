interface landingCardProps{
    cardTitle: string,
    cardContent: string,
    isActive: boolean,
    changeFocus: Function
}

function LandingInformationCard(props: landingCardProps){
    return <div className="landingCard">
        <h2 className="cardTitle" onClick={(event) => props.changeFocus(event.target)}>{props.cardTitle}</h2>
        <p className={`cardContent ${props.isActive ? "cardActivated" : "cardDeactivated"}`}>{props.cardContent}</p>
    </div>
}

export default LandingInformationCard