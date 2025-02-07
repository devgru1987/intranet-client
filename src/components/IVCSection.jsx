import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Peninah from '../assets/Peninah-IVC.png'



const IVCSection = () => {

 const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

 return (
  <section>
   <h1 className="uppercase level-1-headings text-align-cntr">Know your ivc</h1>
   <div>
    <Carousel responsive={responsive}  infinite={true} arrows={false}  showDots={true}>
     <div className="flex-row">

      <div className="relative-width-40 flex-row justify-center flex-cntr-vtcl-align">
       <img src={Peninah} alt="peninah" className="x-space"/>
      </div>

      <div className="relative-width-60 padding-l-10 flex-row justify-center flex-cntr-vtcl-align">
        <div>
         <div className="flex-row">
          <h3 className="margin-r purple-text">Peninah Wanyange Operations<br />UBUNTU-IVC</h3> 
          <h3 className="border-left-purple purple-text">Operations<br />MBALE Region</h3>
         </div>

         <p className="bold-fonts margin-top-10">What do you enjoy most about your job?</p>
         <p>At my job, I enjoy sharing what Ithuba Uganda has to offer and explaining its benefits to the community. I also love talking to winners, learning about their experiences and the stories behind their lives.</p>

         <p className="bold-fonts margin-top-10">What are your hobbies or interests outside work? Any hidden talent or fun fact you would like to share? </p>
         <ul>
          <li>• I have a deep love for worshiping the Lord</li>
          <li>• Meeting new people to share experiences with</li>
          <li>• I enjoy traveling and exploring new places</li>
          <li>• I’m passionate about educating and chatting with children.</li>
         </ul>

         <p className="bold-fonts margin-top-10">What is your life Mantra? How has this mantra shaped your personal or professional life.</p>
         <p>I can do all things through Christ who strengthens me. (Philippians 4:13)</p>

         <p className="bold-fonts margin-top-10">Message to your IVC members:</p>
         <p>I’m so thankful for each of you, and I can’t wait to see what we can achieve together as we share ideas and support one another </p>
        </div>
      </div>

     </div>

     <div></div>
     <div></div>
     <div></div>
    </Carousel>
   </div>
  </section>
 )


}

export default IVCSection
