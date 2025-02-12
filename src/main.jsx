import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import Finance from './components/Finance.jsx';
import HumanResource from './components/HumanResource.jsx';
import Paytronix from './components/Paytronix.jsx';
import Marketing from './components/Marketing.jsx';
import Operations from './components/Operations.jsx';
import Sales from './components/Sales.jsx';
import SharedFolder from './components/SharedFolder.jsx';
import Gallery from './components/Gallery.jsx';
import Calender from './components/Calender.jsx';
import Admin from './components/Admin.jsx';
import AdminCalender from './components/AdminCalender'
import DocumentUpload from './components/DocumentUpload.jsx'
import AdminGallery from './components/AdminGallery'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path:"/finance",
        element: <Finance />
      },
      {
       path:"/home",
       element: <Home />
     },
      {
        path:"/human resource",
        element: <HumanResource />
      },
      {
        path:"/marketing",
        element: <Marketing />
      },
      {
       path:"/paytronix",
       element: <Paytronix />
     },
      {
        path:"/operations",
        element: <Operations />
      },
      {
        path:"/sales",
        element: <Sales />
      },
      {
       path: "/shared folder",
       element: <SharedFolder />
      },
      {
       path: "/gallery",
       element: <Gallery />
      },
      {
       path: "/calender",
       element: <Calender />
      },
      {
       path: "/admin",
       element: <Admin />,
       children: [
         { index: true, element: <AdminCalender /> },
         {
           path: "calender",
           element: <AdminCalender />
         }, 
         {
           path: 'policies',
           element: <DocumentUpload />
         },
         {
          path: 'gallery',
          element: <AdminGallery />
        }

       ]
      }
   ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
