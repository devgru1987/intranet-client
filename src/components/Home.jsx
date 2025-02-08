import Navigation from './Navigation'
import Highlights from './Highlights'
import QuickAccess from './QuickAccess'
import WiseWords from './WiseWords'
import IVCSection from './IVCSection'
import SocialCorner from './SocialCorner'
import HeroUnit from './HeroUnit'

const Home = () => {
 return (
   <div>
     <section className="carousel">
       <HeroUnit />
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