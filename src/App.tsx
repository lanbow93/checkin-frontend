import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './pages/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App
