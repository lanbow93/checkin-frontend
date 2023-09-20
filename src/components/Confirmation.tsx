import { Link } from "react-router-dom"
interface confirmationProps {
    heading: string,
    message: string,
    linkTo: string
}
function confirmation(props: confirmationProps){
    return <div className="confirmation">
        <h1>{props.heading}</h1>
        <p>{props.message}</p>
        <Link to={props.linkTo}>Continue</Link>
    </div>
}