import HeroUnit from "./HeroUnit"
import Navigation from "./Navigation"
 
import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Finance = () => {

const slideImages = [
    {
     image: shotOne,
     title: 'Fiance, where the money is!',
     body: 'Please join us in congratulating Khumo upon his promaotion to board member.'
    }, 
 
    {
     image: shottwo,
     title: 'Good news comes in the morning !!!',
     body: "We are proud to announce a new partnership with Eco bank's quick cash platformfor quick ."
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

export default Finance