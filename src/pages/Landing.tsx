import LandingInformationCard from '../components/LandingInformationCards'
import speedyLogo from '../assets/speedyLogo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { landingInformationCards } from '../utils/dataObjects'
function Landing() {
    const [currentActivePanel, setCurrentActivePanel] = useState('about')
    const changeFocus = ({ innerText }: { innerText: string }) => {
        setCurrentActivePanel(innerText)
    }

    return (
        <div className="landing">
            <h1>
                Revolutionize Workforce Management with
                <br />
                <span className="title">Speedy Check-In</span>
            </h1>

            <div className="landingDescription">
                <div className="logoSection">
                    <img src={speedyLogo} alt="Speedy Checkin Logo" />
                </div>
                <div className="greeting">
                    <p>
                        Welcome to Speedy Check-In, your comprehensive solution
                        for efficient workforce management!
                    </p>
                    <div className="actionLinks">
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        <Link to={'/signup'}>
                            <button>Sign-Up</button>
                        </Link>
                    </div>
                </div>

                {landingInformationCards.map(card => (
                    <LandingInformationCard
                    key={card.panelKey}
                    cardTitle={card.cardTitle}
                    cardContent={card.cardContent}
                    isActive={currentActivePanel === card.panelKey}
                    changeFocus={changeFocus}
                    />
                ))}
            </div>
        </div>
    )
}

export default Landing
