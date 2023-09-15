import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './pages/Navigation'

function App() {

  const NavOptions = {
    landing: {
      
    }
  }

  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App
