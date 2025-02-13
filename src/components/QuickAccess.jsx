//https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChainLink from '../assets/link.svg';
import { NavLink } from "react-router-dom";

import QA1 from '../assets/tests/qa-1.jpg'
import QA2 from '../assets/tests/qa-2.jpg'
import QA3 from '../assets/tests/qa-3.jpg'
import QA4 from '../assets/tests/qa-4.jpg'
import QA5 from '../assets/tests/qa-5.jpg'
import QA6 from '../assets/tests/qa-6.jpg'
import QA7 from '../assets/tests/qa-7.jpg'

const QuickAccess = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
   <section className=" flex-row justify-center">
    <div className="percentage-width-90 flex-row margin-top-btm-70">

     <div className="relative-width-70">
      <h1 className="uppercase level-1-headings">Quick Access</h1>
      <div style={{ paddingBottom: '30px', position: 'relative' }}>
        <Carousel responsive={responsive}  infinite={true} autoPlaySpeed={3000}   autoPlay={true} rtl={true} centerMode={false}>
          <div className="quick-access-carousel"><img src={QA1} /></div>
          <div className="quick-access-carousel"><img src={QA2} /></div>
          <div className="quick-access-carousel"><img src={QA3} /></div>
          <div className="quick-access-carousel"><img src={QA4} /></div>
          <div className="quick-access-carousel"><img src={QA5} /></div>
          <div className="quick-access-carousel"><img src={QA6} /></div>
          <div className="quick-access-carousel"><img src={QA7} /></div>
        </Carousel>
      </div>
     </div>

     <div className="relative-width-30 padding-l-20">
       <h1 className="uppercase level-1-headings">Admin Links</h1>
       <ul>
         <li className="flex-row vertical-align-center"><img src={ChainLink} alt="link icon" className="list-style-larger"/>HR Policies</li>
         <li className="flex-row vertical-align-center"><img src={ChainLink} alt="link icon" className="list-style-larger"/>News Updates</li>
         <li className="flex-row vertical-align-center"><img src={ChainLink} alt="link icon" className="list-style-larger"/>Employee Data</li>
         <li className="flex-row vertical-align-center"><NavLink to={'/calender'}><img src={ChainLink} alt="link icon" className="list-style-larger"/>Events Calender</NavLink></li>
         <li className="flex-row vertical-align-center"><NavLink to={'/gallery'}><img src={ChainLink} alt="link icon" className="list-style-larger"/>Gallery</NavLink></li>
       </ul>
       <button>
        Update
       </button>
     </div>

    </div>
   </section>
  )
}

export default QuickAccess