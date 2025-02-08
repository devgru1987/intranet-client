import ShareFolder from '../assets/shared_folder.svg' 
import HelpDesk from '../assets/help_desk.svg' 
import Reports from '../assets/reports.svg' 
import Gallery from '../assets/gallery.svg'
import Training from '../assets/training.svg'  
import TimeOff from '../assets/time_off.svg'
import { NavLink, Link } from "react-router-dom"; 

function Navigation() {
  return (
    <nav className="purple-bg-color flex-row justify-center">
     <ul  className="flex-row justify-space-btn percentage-width-90 white-text bold-fonts">
      <li className="flex-row vertical-align-center"><NavLink to={'/sharefolder'}><img src={ShareFolder} alt='shared folder' className="nav-icons "/>Shared Folder</NavLink></li>
      <li className="flex-row vertical-align-center"><Link to="mailto:Servicedesk@ithubauganda.co.ug"><img src={HelpDesk} alt='help desk' className="nav-icons"/></Link>Help Desk</li>
      <li className="flex-row vertical-align-center"><img src={Reports} alt='reports' className="nav-icons"/>Reports</li>
      <li className="flex-row vertical-align-center"><NavLink to={'/gallery'}><img src={Gallery } alt='gallery' className="nav-icons"/>Gallery</NavLink></li>
      <li className="flex-row vertical-align-center"><img src={Training} alt='training'className="nav-icons"/>Training</li>
      <li className="flex-row vertical-align-center"><img src={TimeOff} alt='time off' className="nav-icons"/> Time Off</li>
     </ul>
    </nav>
  );
};

export default Navigation
