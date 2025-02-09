import Navigation from "./Navigation"
import HeroUnit from "./HeroUnit"

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Marketing = () => {
 
  const slideImages = [
    {
      image: shotOne,
      title: 'Marketing',
      body: "Working tirelessly day & nyt to promote the national lottery among Ugandans"
    }, 

    {
      image: shottwo,
      title: 'Flagship game, POWERBALL',
      body: "MOnthly rolldowns are making millionaires countrywide."
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

export default Marketing