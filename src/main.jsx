import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/", /* root route*/
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path:"/finance",
        element: "Hello Finacne"
      },
      {
       path:"/home",
       element: <Home />
     },
      {
        path:"/human resource",
        element: "Hello HR"
      },
      {
        path:"/marketing",
        element: "Hello Marketing"
      },
      {
       path:"/paytronix",
       element: "Hello paytronix"
     },
      {
        path:"/operations",
        element: "Hello Hello Operations"
      },
      {
        path:"/sales",
        element: "Hello Sales"
      },
      {
       path: "/Shared Folder",
       element: "Share folder"
      }
   ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
