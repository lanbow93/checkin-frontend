import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
    const NavOptions = {
        landing: {},
    }

    return (
        <div className="App">
            <Outlet />
        </div>
    )
}

export default App
