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
          <li><NavLink to={'/home'} className="no-underline pading-main-nav-5-10">Home</NavLink></li>
          <li><NavLink to={'/finance'} className="no-underline pading-main-nav-5-10">Finance</NavLink></li>
          <li><NavLink to={'/human resource'} className="no-underline pading-main-nav-5-10">Human Resource</NavLink></li>
          <li><NavLink to={'/paytronix'} className="no-underline pading-main-nav-5-10">ICT</NavLink></li>
          <li><NavLink to={'/marketing'} className="no-underline pading-main-nav-5-10">Marketing</NavLink></li>
          <li><NavLink to={'/operations'} className="no-underline pading-main-nav-5-10">Operations</NavLink></li>
          <li><NavLink to={'/sales'} className="no-underline pading-main-nav-5-10">Sales</NavLink></li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header;