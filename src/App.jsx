import { useState } from 'react'
import LogoBanner from './assets/header.svg'
import IthubaUganda from './assets/ithuba_uganda.svg'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <header>
        <div className="flex-row center-content-horizontal">
          <div className="flex-row percentage-width-85 admin-login">
            <a>Admin Login</a>
          </div>
        </div>

        <div id="main-logo" className="flex-row center-content-horizontal">
          <div id="ithuba-logo" className="percentage-width-80">
            <img src={LogoBanner} alt='banner' />
          </div>
        </div>

        <div className="flex-row center-content-horizontal">
          <div className="flex-row percentage-width-80 header-nav"> 
            <h3>Welcome to <span className="uppercase">ithuba uganda</span></h3>
            <ul className="flex-row nav-list">
              <li>Home</li>
              <li>Business Resources</li>
              <li>Employee center</li>
              <li>News</li>
              <li>Career</li>
              <li className="uppercase">faqs</li>
            </ul>
          </div>
        </div>
      </header>

      <section id="hero-unit">

      </section>


      
      
    </div>
  )
}

export default App
