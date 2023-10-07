import { Link } from 'react-router-dom'
import { useState } from 'react'
import checkLogo from '../assets/checkmark.png'
import { navigationOptions } from '../utils/dataObjects'

interface navigationProps {
    link: string
}
function Navigation(props: navigationProps) {
    const [isEnabled, setIsEnabled] = useState(false)
    const handleMenuChange = () => {
        if (isEnabled) {
            setIsEnabled(false)
        } else {
            setIsEnabled(true)
        }
    }
    return (
        <nav>
            <Link to={'/'}>
                <img src={checkLogo} alt="" className="logo" />
            </Link>
            <h1>
                <Link to="/">Speedy Check-In</Link>
            </h1>
            <div>
                <ul
                    id="navbar"
                    className={`${isEnabled ? 'onScreen' : 'offScreen'}`}
                >
                    {navigationOptions[props.link].map(
                        (linkPair: [string, string]) => (
                            <li>
                                <Link to={linkPair[0]}>{linkPair[1]}</Link>
                            </li>
                        )
                    )}
                </ul>
                <div className="mobile">
                    <button
                        className={`hamburgerIcon ${isEnabled ? 'hidden' : ''}`}
                        onClick={handleMenuChange}
                    >
                        ≡
                    </button>
                    <button
                        className={`closeIcon ${isEnabled ? '' : 'hidden'}`}
                        onClick={handleMenuChange}
                    >
                        X
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
