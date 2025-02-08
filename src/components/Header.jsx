import LogoBanner from '../assets/header.svg'

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
          <li>Home</li>
          <li>Finance</li>
          <li>Human Resource</li>
          <li>ICT</li>
          <li>Marketing</li>
          <li>Operations</li>
          <li>Sales</li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header;