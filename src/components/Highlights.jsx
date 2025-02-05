import BullsEye from '../assets/bulls_eye.svg'
import ScrewSpanner from '../assets/screw_spanner.svg'
import CEO from '../assets/ceo.png'
import GM from '../assets/gm.png'
import NewsItem from '../assets/news.jpg'
import Documents from '../assets/documents.svg'
import Policies from '../assets/policies.svg'
import Departments from '../assets/Departments.svg'
import SharedFolder from '../assets/shared_folder.svg'

const Highlights = () => {
 return (
  <section className="flex-row justify-center padding-top-btm-30 thick-border-btm-lilac">
   <div className="percentage-width-90 flex-row justify-space-btn">

{/* 1/3 */}
    <div className="initial-width-35 "> 
     <h1 className="uppercase level-1-headings">from management</h1>

     <article className="flex-row exco-margin">
      <div className="profile">
       <img src={CEO} alt="charmain mabuza" className="full-space"/>
      </div>
      <div className="profile-message padding-lr-10">
       <h3 className="level-3-headings">Our CEO</h3>
       <p>am pleased to extend a warm welcome to each of you as we embark on an exciting journey together in ITHUBA. As the CEO, it is my great pleasure to welcome you to our dynamic team.</p>
       <p>Your skills, passion, and commitment are the driving force behind our success, and I am excited to witness the incredible accomplishments that lie ahead.</p>
      </div>
     </article>

     <article className="flex-row exco-margin">
       <div className="profile">
        <img src={GM} alt="charmain mabuza" className="full-space"/> 
       </div>

       <div className="profile-message padding-lr-10">
        <h3 className="level-3-headings">Our General Manager</h3>
        <p>am pleased to extend a warm welcome to each of you as we embark on an exciting journey together in ITHUBA. As the CEO, it is my great pleasure to welcome you to our dynamic team.</p>
        <p>Your skills, passion, and commitment are the driving force behind our success, and I am excited to witness the incredible accomplishments that lie ahead.</p>
       </div>
     </article>

     <button>
      Know More
     </button>
    </div>

{/* 2/3 */}
    <div className="initial-width-35 padding-lr-10">
     <h1 className="uppercase level-1-headings">news</h1>
     <div>
      <img src={NewsItem} alt="charmain mabuza" className="full-space" />
     </div>
     <div>
       <h2 className="level-2-headings">New Regional Office Jobs 2025</h2>
       <p>Please join us in congratulating Ronald Baluleeta, for coming on board as Our Content Specialist at Ithuba Uganda. May you be fruitful in every good work.</p>
     </div>

     <button>
      Know More
     </button>
    </div>

{/* 3/3 */}
    <div className="initial-width-30 padding-l-10">
     <h1 className="uppercase level-1-headings">about ithuba</h1>
     
     <div className="flex-row exco-margin">
      <div><img src={BullsEye} alt="bulls eye 1" className="inline-icons-level-1"/></div>
      <p><span>Our Vision</span> is to be a force for positive change and community empowerment, where innovation, responsibility, and inclusivity formhe bedrock of our operations</p>
     </div>

     <div className="flex-row exco-margin">
      <div><img src={ScrewSpanner} alt="screw driver and spanner" className="inline-icons-level-1" /></div>
      <p><span>Our Mission</span> is to play a vital role in the socio-economic development of Uganda through the ethical and efficient operation of the National Lottery.</p>
     </div>

     <div>
      <h1 className="uppercase level-1-headings">Resources</h1>
      <div className="flex-row wrap resources">
       <div className="kaki-bg">
        <img src={Documents} alt="documents" className="inline-icons-level-2" />
        <h4>Departments</h4>
       </div>

       <div className="torquise-bg">
        <img src={Policies} alt="policies" className="inline-icons-level-2" />
        <h4>Policies</h4>
       </div>

       <div className="pink-bg">
        <img src={Departments} alt="departments" className="inline-icons-level-2" />
        <h4>Departments</h4>
       </div>

       <div className="purple-bg">
        <img src={SharedFolder} alt="shared folder" className="inline-icons-level-2" />
        <h4>Shared Folders</h4>
        </div>
      </div>
     </div>

    </div>

   </div>
  </section>
 )
}

export default Highlights