import Header from './components/Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div id="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
