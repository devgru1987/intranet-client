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

     {/* main content */}
     <section className="flex-row justify-center padding-top-btm-30">
         <div className="flex-row percentage-width-90">
           <div className="width-40 padding-r-10">
             <h1 className="level-1-headings text-align-cntr ">About Marketing</h1>
             <article>
               <p className="justify-text margin-btm-5">Ithuba strives to provide South Africa​n customers with the best entertainment experience available through its products. New games and game enhancements are constantly being developed to keep the National Lottery games innovative and exciting for SA players. The Marketing Department plays a key role in delivering world class lottery entertainment in line with the best trends in the world. </p>
             </article>

             <div className="margin-btm-5">
              <p className="bold-fonts kaki-text">The value of Marketing</p>
              <ul>
                <li className="margin-btm-5"> - Marketing helps us reach our target audience, boost our customer base, and ultimately increase our bottom line.</li> 
                <li className="margin-btm-5"> - Marketing is a strategic mix of business activities that work towards a bigger goal of building our brand and business.</li>
                <li className="margin-btm-5"> - Marketing is about identifying and understanding our customers and developing products and services that meet their needs.</li>
                <li className="margin-btm-5"> - Marketing is important across many areas of our business, including how our customers are greeted on the phone, our customer service procedures, what our staff wear, and our email signature.</li> 
                <li className="margin-btm-5"> - Good marketing helps us examine all aspects of our business, no matter how small, and think about how they affect the perception our customers' have of our business.  Although Marketing may be time consuming and require intensive research and analysis, successful marketing can help us increase our bottom line.</li>
              </ul>
             </div>

             <div>
              <p>Our activities are focused on assessing long-term market potential; helping drive sales, designing and launching new games, optimising current channels and creating new sales channels, creating marketing plans and budgets, implementing marketing plans, conducting ongoing advertising research and analysis and coordinating marketing activities with the NLC, all Ithuba's departments and multiple contracted agencies.</p>
             </div>
           </div>

           <div className="width-40 padding-r-10">
            <h1 className="level-1-headings text-align-cntr ">Marketing Organisational Structure</h1>
            <div></div>

            <div>
             <h2 className="kaki-text">Marketing campaigns</h2>
             <iframe width="420" height="315" src="https://www.youtube.com/embed/Wm-xBx90N7E"></iframe>
            </div>
           </div>

           <div className="width-20">
            <h1 className="level-1-headings text-align-cntr ">Key personal in this department</h1>
           </div>
         </div>
       </section>

   
   
  </div>
)
}

export default Marketing