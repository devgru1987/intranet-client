import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNan";

const Admin = () => {


  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  )
}

export default Admin