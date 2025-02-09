import Navigation from "./Navigation"
import HeroUnit from "./HeroUnit"

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Paytronix = () => {
  const slideImages = [
    {
     image: shotOne,
     title: 'DC Ops',
     body: "The dynamic team of dataceneter operators working 24/7 to ensure 100% uptime of the Data center "
    }, 

    {
     image: shottwo,
     title: 'Emos Kennedy',
     body: "Ithuba's Desktop Engineer, suporting all ITHUBA staff to ensure seemless operations ."
    }
 ]

  return (
    <div>
      <section className="carousel">
        <HeroUnit slideImages={slideImages}/>
       </section>

       <section className="main-navigation">
       <Navigation />
       </section>
     
    </div>
  )
}

export default Paytronix