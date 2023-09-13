interface landingCardProps{
    cardTitle: string,
    cardContent: string
}
function LandingInformationCard(props: landingCardProps){
    
    return <div className="landingCard">
        <h2 className="cardTitle">{props.cardTitle}</h2>
        <p className="cardContent">{props.cardContent}</p>
    </div>
}

export default LandingInformationCard