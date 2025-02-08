import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'
import HeroUnitSlide from "./HeroUnitSlide";

const HeroUnit = () => {

 const slideImages = [
   {
    image: shotOne,
    title: 'Congratulations, Ronald Baluleeta!',
    body: 'Please join us in congratulating Ronald Baluleeta, for coming on board as Our Content Specialist at Ithuba Uganda. May you be fruitful in every good work.'
   }, 

   {
    image: shottwo,
    title: 'Welcome our new B2B partner, Interswitch',
    body: 'Interswitch will boost our reach and bring the national lottery closer to all Ugandans.'
   }
 ]

  const responsive = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 3000 }, items: 1},
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section>
      <Carousel responsive={responsive}>
       { 
         slideImages.map(slide => 
           <HeroUnitSlide 
             image={slide.image} 
             title={slide.title}
             body={slide.body}/>
          )
       }
        {/* <div className="relative-position max-height">
          <img src={shotOne} alt="hero unit content" />
          <div className="absolute-position position-obj full-height-100 percentage-width-50 flex-column  padding-md-top white-text padding-lr-md-50">
           <h1 className="white-text capitalize bold-fonts font-sz-md margin-btm-10">Congratulations, Ronald Baluleeta!</h1>
           <p className="font-sz-small margin-btm-md ">Please join us in congratulating Ronald Baluleeta, for coming on board as Our Content Specialist at Ithuba Uganda. May you be fruitful in every good work.</p>
           <div>
            <button className="common-btn white-text bold-fonts ">Know More</button>
           </div>
          </div>
        </div> */}
     </Carousel>
    </section>
  )
}

export default HeroUnit