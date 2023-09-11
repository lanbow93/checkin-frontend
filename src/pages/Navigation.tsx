import { useState } from "react"

function Navigation(props: any){
    const [viewSubMenu, setViewSubMenu] = useState(false)

    const handleSubMenu = () => {
        if(viewSubMenu){
            setViewSubMenu(false)
        }else{
            setViewSubMenu(true)
        }
    }
    return <nav>
        <div className="banner">
            <div id="navLogo">
                <p>LOGO</p>
            </div>
            <h1>Speedy Check-In</h1>
            <button onClick={handleSubMenu}>≡</button>
        </div>
        <div className={`navOptions ${viewSubMenu ? "showMenu" : ""}`}>
            <h1>Hidden Options</h1>
        </div>
    </nav>
}

export default Navigation