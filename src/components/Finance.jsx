import HeroUnit from "./HeroUnit"
import Navigation from "./Navigation"
 
import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Finance = () => {

const slideImages = [
    {
     image: shotOne,
     title: 'Finance!',
     body: 'Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new .'
    }, 
 
    {
     image: shottwo,
     title: 'Good news comes in the morning !!!',
     body: "Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change  ."
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
             <h1 className="level-1-headings text-align-cntr ">About Finance</h1>
             <article>
               <p className="justify-text margin-btm-5">The Finance Department is responsible for the sound financial management of Ithuba Uganda.</p>
               <p className="justify-text margin-btm-5">Corporate Finance is responsible for the financial management of the various Zamani companies, as well as the Procurement function for the Zamani Companies and Ithuba.</p>
               <p>Lottery Operations manages the financial aspects related to Ithuba’s Lottery operations in accordance with World Lottery Association practices.  This includes lottery sales by retailers and alternate channels as well as the payment of sales commission and prizes.    The department is also responsible to report to the National Lottery Commission on Ithuba’s financial status as required by the Lottery License.​​</p>
             </article>
           </div>

           <div className="width-40 padding-r-10">
            <h1 className="level-1-headings text-align-cntr ">Finance Organisational Structure</h1>
           </div>

           <div className="width-20">
            <h1 className="level-1-headings text-align-cntr ">Key personal in this department</h1>
           </div>
         </div>
       </section>

      
    </div>
  )
}

export default Finance