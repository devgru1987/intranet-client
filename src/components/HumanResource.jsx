import Navigation from "./Navigation"
import HeroUnit from "./HeroUnit"

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const HumanResource = () => {

  const slideImages = [
    {
     image: shotOne,
     title: 'Doreen!',
     body: "ITHUBA Uganda's HR"
    }, 

    {
     image: shottwo,
     title: 'Carol',
     body: "Works together with Doreen to handle all our employee needs ."
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
             <h1 className="level-1-headings text-align-cntr ">About Human Resource</h1>
             <article>
               <p className="justify-text margin-btm-5">Overseen by the Head Human Resources, the Human Resources Department is responsible for the recruitment, development, adding value and retaining the most competent and skilled staff necessary to achieve Ithuba's mission..</p>
               <p className="justify-text margin-btm-5">The HR's overall objective is to enhance the company's reputation, making an emphasis on the importance of the staff experience and their employability. The HR department acknowledges fully that this can only be achieved through the recruitment and retention of high quality, motivated staff that are managed appropriately and equipped to play their part in the Lottery Operations</p>
               <p>With a staff compliment of five passionate individuals, the HR Department is able to cover all human related issues from recruitment, learning and development, compensation, staff discipline, performance management, legal compliance and all related administration </p>
               <p>Our comprehensive Human Resource Strategy plays a vital role in the achievement of Ithuba's overall strategic objective and visibly illustrates that the human resources within the company fully understand and support the direction in which the organization is moving​</p>
               <p>Human Resource involves estimating the quantity and quality of employees required for the business. The estimate revolves around the specification of each portfolio in conjunction with each department objective.​​</p>
             </article>
           </div>

           <div className="width-40 padding-r-10">
            <h1 className="level-1-headings text-align-cntr ">Human Resousrce Organisational Structure</h1>
           </div>

           <div className="width-20">
            <h1 className="level-1-headings text-align-cntr ">Key personal in this department</h1>
           </div>
         </div>
       </section>

     
     
    </div>
  )

}

export default HumanResource