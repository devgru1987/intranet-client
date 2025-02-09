import Navigation from "./Navigation"
import HeroUnit from "./HeroUnit"

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const HumanResource = () => {

  const slideImages = [
    {
     image: shotOne,
     title: 'Doreen!',
     body: "ITHUBA Uganda's HR"
    }, 

    {
     image: shottwo,
     title: 'Carol',
     body: "Works together with Doreen to handle all our employee needs ."
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

export default HumanResource