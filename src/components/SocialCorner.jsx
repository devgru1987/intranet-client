import Profile1 from '../assets/loremPicsum.jpg'
import SocialArticle from './SocialArticle'
import Loss from '../assets/loss.jpg'
import Baby from '../assets/baby.jpg'

const SocialCorner = () => {
  return (
   <section className="flex-row justify-center">
    <div className="percentage-width-90 margin-btm-20 ">
     <h1 className="uppercase level-1-headings text-align-cntr">Social Corner</h1>

     <div className="flex-row">
      <div className="percentage-width-20 ">
       <p className="kaki-text bold-fonts margin-btm-10 ">Birthdays</p>
       <div>
        {/* birthday panel */}
        <div className="flex-row vertical-align-center margin-btm-10 ">
         <div className="profile-width-50 margin-r-10">
          <img src={Profile1} alt="" className="full-space rounded-50"/>
         </div>
         <div>
          <p className="bold-fonts">John Doe</p>
          <p>Birth on 9 sept 2025</p>
         </div>
        </div>

        <div className="flex-row vertical-align-center margin-btm-10 ">
         <div className="profile-width-50 margin-r-10">
          <img src={Profile1} alt="" className="full-space rounded-50"/>
         </div>
         <div>
          <p className="bold-fonts">John Doe</p>
          <p>Birth on 9 sept 2025</p>
         </div>
        </div>

        <div className="flex-row vertical-align-center margin-btm-10 ">
         <div className="profile-width-50 margin-r-10">
          <img src={Profile1} alt="" className="full-space rounded-50"/>
         </div>
         <div>
          <p className="bold-fonts">John Doe</p>
          <p>Birth on 9 sept 2025</p>
         </div>
        </div>

       </div>
      </div>

      <div className="percentage-width-80">
       <input type="text" />

       <div className="flex-row margin-top-10 justify-space-btn gap-10">
        <SocialArticle 
         title="Congrats Moses on the New Born!"
         desc="Please join us in congratulating Ronald Baluleeta, for coming on board as Our Content Specialist at Ithuba Uganda. May you be fruitful in every good work."
         image={Loss}
         />
         <SocialArticle 
         title="Congrats Moses on the New Born!"
         desc="Please join us in congratulating Ronald Baluleeta, for coming on board as Our Content Specialist at Ithuba Uganda. May you be fruitful in every good work."
         image={Baby}
         />
         <SocialArticle 
         title="Congrats Moses on the New Born!"
         desc="Please join us in congratulating Ronald Baluleeta, for coming on board as Our Content Specialist at Ithuba Uganda. May you be fruitful in every good work."
         image={Baby}
         />
       </div>
        
      </div>

     </div>
    </div>
   </section>
  )
}

export default SocialCorner