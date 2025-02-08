import LogoBanner from '../assets/header.svg'
import { NavLink } from "react-router-dom";


const Header = () => (
  <header>
    <div className="flex-row justify-center">
      <div className="flex-row percentage-width-85 admin-login">
        <a>Admin Login</a>
      </div>
    </div>

    <div id="main-logo" className="flex-row justify-center">
      <div id="ithuba-logo" className="percentage-width-80">
        <img src={LogoBanner} alt='banner' />
      </div>
    </div>

    <div className="flex-row justify-center">
      <div className="flex-row percentage-width-80 header-nav"> 
        <h3 className="kaki-text">Welcome to <span className="uppercase">ithuba uganda</span></h3>
        <ul className="flex-row nav-list">
          <li><NavLink to={'/home'}>Home</NavLink></li>
          <li><NavLink to={'/finance'}>Finance</NavLink></li>
          <li><NavLink to={'/human resource'}>Human Resource</NavLink></li>
          <li><NavLink to={'/paytronix'}>ICT</NavLink></li>
          <li><NavLink to={'/marketing'}>Marketing</NavLink></li>
          <li><NavLink to={'/operations'}>Operations</NavLink></li>
          <li><NavLink to={'/sales'}>Sales</NavLink></li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header;