import { Link, useLocation } from "react-router-dom"
interface confirmationProps {
    heading: string,
    message: string,
    linkTo: string,
    data: Object
}



function Confirmation(){
    const location = useLocation()
    console.log(location)
    return <div className="confirmation">
        <h1>Heading</h1>
        <p>Message</p>
        <Link to={`/home`} state={"Hello"} >Continue</Link>
    </div>
}

export default Confirmation