import { Link, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'
interface confirmationState {
    header: string
    message: string
    link: string
    data: Object | string
}

function Confirmation() {
    const state: confirmationState = useLocation().state
    return (<>
        <Navigation />
        <div className="confirmation">
            <div className="confirmationBody">
                <h1>{state.header}</h1>
                <p>{state.message}</p>
                <Link to={`${state.link}`} state={state.data}>
                    Continue
                </Link>
            </div>
        </div>
    </>)
}

export default Confirmation
