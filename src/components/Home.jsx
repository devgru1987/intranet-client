import Navigation from './Navigation'
import Highlights from './Highlights'
import QuickAccess from './QuickAccess'
import WiseWords from './WiseWords'
import IVCSection from './IVCSection'
import SocialCorner from './SocialCorner'
import HeroUnit from './HeroUnit'

// test images
import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Home = () => {

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

 return (
   <div>
     <section className="carousel">
       <HeroUnit slideImages={slideImages}/>
     </section>

     <section className="main-navigation">
       <Navigation />
     </section>

     <div>
      <Highlights />
     </div>

     <div>
      <QuickAccess />
     </div>

     <section>
      <SocialCorner />
     </section>

     <section>
      <IVCSection />
     </section>

      <section>
       <WiseWords />
    </section>
  </div>
 )
}

export default Home;