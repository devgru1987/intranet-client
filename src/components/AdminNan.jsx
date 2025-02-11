import { Link } from "react-router-dom"

const AdminNav = () => (
  <section>
    <div className="percentage-width-100 purple-bg ">
      <ul className="percentage-width-100 flex-row height-80 ">
        <li className="admin-nav "><Link to={'/admin/calender'}  className="no-underline white-text adm-link bold-fonts">Calender</Link></li>
        <li className="admin-nav"><Link to={'/admin/policies'}  className="no-underline adm-link white-text bold-fonts">Policies</Link></li>
        <li className="admin-nav"><Link to={'/admin/gallery'} className="no-underline adm-link white-text bold-fonts">Gallery</Link></li>
      </ul>
    </div>
  </section>
)

export default AdminNav