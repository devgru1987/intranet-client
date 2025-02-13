import IthubaUganda from './assets/ithuba.svg'
import ListStyle from './assets/list_style.svg'

const Footer = () => (
  <footer className="padding-top-btm-20 purple-bg-color greyish-text">
    <div className="flex-row justify-center">
      <div className="flex-row percentage-width-90 justify-space-btn thick-boder-btm">
        <div className="relative-width-40">
          <img src={IthubaUganda} alt="ithuba ugabda logo" />
        </div>

        <div className="footer-navs flex-row relative-width-25 offset-top-space-40 space-around">
          <div>
            <h3 className="footer-title">Ithuba Uganda</h3>
            <ul className="offset-padding-10 footer-ul">
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />Home</li>
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />About Us</li>
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />Products & Services</li>
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />News</li>
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />Career</li>
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />FAQs</li>
            </ul>
          </div>
          <div>
            <h3  className="footer-title">Products & Services</h3>
            <ul className="offset-padding-10 footer-ul">
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />Bodas</li>
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />Special Hire Taxis</li>
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />Matatoo</li>
              <li className="flex-row"><img src={ListStyle} alt="list style icon" className="list-style" />Boat Engines</li>
            </ul>
          </div>
        </div>

        <div className="relative-width-20">
          <button  className="footer-title footer-btn cursor-pointer flex-row vertical-align-center bold-fonts percentage-width-100">
            <span>Here to Change Lives</span>
            <img src={ListStyle} className="list-style list-style-large" />
          </button>
          <p> 
            We are a team dedicated to keeping you focused on your life goals. We provide you with a starting point in the acquisition of 
            revenue generating assets, to give you the power to not only visualize but have control over the shape of your future.
          </p>
        </div>

      </div>
    </div>

    <div className="flex-row justify-center margin-top-10"> 
      <div className="flex-row percentage-width-90 justify-left">
        <div className="flex-row relative-width-50 justify-space-btn">
          <p className="relative-width-50">© Ithuba Uganda. 2025 All rights reserved</p>
          <div className="relative-width-40">
            {/* <ul className="flex-row">
              <li>facebook</li>
              <li>instagram</li>
              <li>youtube</li>
              <li>twitter</li>
            </ul> */}
          </div>
        </div>

      </div>
    </div>
  </footer>
)

export default Footer