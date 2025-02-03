import ShareFolder from '../assets/shared_folder.svg' 
import HelpDesk from '../assets/help_desk.svg' 
import Reports from '../assets/reports.svg' 
import Gallery from '../assets/gallery.svg'
import Training from '../assets/training.svg'  
import TimeOff from '../assets/time_off.svg' 

function Navigation() {
  return (
    <nav className="purple-bg-color flex-row justify-center">
     <ul  className="flex-row justify-space-btn percentage-width-90 white-text bold-fonts">
      <li className="flex-row vertical-align-center"><img src={ShareFolder} alt='shared folder' className="nav-icons "/>Shared Folder</li>
      <li className="flex-row vertical-align-center"><img src={HelpDesk} alt='help desk' className="nav-icons"/>Help Desk</li>
      <li className="flex-row vertical-align-center"><img src={Reports} alt='reports' className="nav-icons"/>Reports</li>
      <li className="flex-row vertical-align-center"><img src={Gallery } alt='gallery' className="nav-icons"/>Gallery</li>
      <li className="flex-row vertical-align-center"><img src={Training} alt='training'className="nav-icons"/>Training</li>
      <li className="flex-row vertical-align-center"><img src={TimeOff} alt='time off' className="nav-icons"/> Time Off</li>
     </ul>
    </nav>
  );
};

export default Navigation
