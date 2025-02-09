import Navigation from "./Navigation"
import HeroUnit from "./HeroUnit"

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Sales = () => {
  const slideImages = [
    {
     image: shotOne,
     title: 'Sales',
     body: "The dynamic team of dataceneter operators working 24/7 to ensure 100% uptime of the Data center The dynamic team of dataceneter operators working 24/7 to ensure 100% uptime of the Data center The dynamic team of dataceneter operators working 24/7 to ensure 100% uptime of the Data center "
    }, 

    {
     image: shottwo,
     title: 'Sales Sales Sales !!!',
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

export default Sales