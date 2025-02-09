import Navigation from "./Navigation"
import HeroUnit from "./HeroUnit"

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Operations = () => {
  const slideImages = [
    {
     image: shotOne,
     title: "Godwin, heads ithuba Uganda's Operations",
     body: "Operations is Ithuba's cutting edge, interacting with retailers on a daily basis to support them in their daily operations"
    }, 

    {
     image: shottwo,
     title: 'Field Agents',
     body: "These carry ithuba's brand image to the nation."
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

export default Operations