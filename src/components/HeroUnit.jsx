import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroUnitSlide from "./HeroUnitSlide";

const HeroUnit = ({slideImages}) => {

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
     </Carousel>
    </section>
  )
}

export default HeroUnit