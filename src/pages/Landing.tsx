import LandingInformationCard from "../components/LandingInformationCards"

function Landing(){
    return <div className="landing">
    <h1>Revolutionize Workforce Management with<br /> <span className="title">Speedy Check-In</span></h1>

    <div className="landingDescription">
        <LandingInformationCard cardTitle="" cardContent="Welcome to Speedy Check-In, your comprehensive solution for efficient workforce management!" />
        <LandingInformationCard cardTitle="About" cardContent="Our web application simplifies the entire process, allowing managers to effortlessly create, enroll, assign groups, and set schedules."/>
        <LandingInformationCard cardTitle="How" cardContent="With the ability to generate QR codes, managers can streamline check-in procedures."/>
        <LandingInformationCard cardTitle="Breakdown" cardContent="When users scan the QR code, it not only validates their presence but also records their punch-in and out times, ensuring precise attendance tracking."/>
        <LandingInformationCard cardTitle="More Info" cardContent="Additionally, users can conveniently access their schedules and view assigned tasks, along with the responsible manager's details. Experience the future of workforce management with Speedy Check-In today!"/>
    </div>

    </div>
}

export default Landing