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


      <footer>
        <div>
          <div>
            <div>
              <img src={ IthubaUganda } alt="ithuba ugabda logo" />
            </div>
            <div>
              <h3>Ithuba Uganda</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Products & Services</li>
                <li>News</li>
                <li>Career</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3>Products & Services</h3>
              <ul>
                <li>Bodas</li>
                <li>Special Hire Taxis</li>
                <li>Matatoo</li>
                <li>Boat Engines</li>
              </ul>
            </div>
            <div>
              <a>Here to change lives</a>
              <p> 
                We are a team dedicated to keeping you focused on your life goals. We provide you with a starting point in the acquisition of 
                revenue generating assets, to give you the power to not only visualize but have control over the shape of your future.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p>© Ithuba Uganda. 2025 All rights reserved</p>
            <div>
              <ul>
                <li>facebook</li>
                <li>instagram</li>
                <li>youtube</li>
                <li>twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default App
