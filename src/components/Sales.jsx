import Navigation from "./Navigation"
import HeroUnit from "./HeroUnit"

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Sales = () => {
  const slideImages = [
    {
     image: shotOne,
     title: 'Sales',
     body: "The dynamic team of dataceneter operators working 24/7 to ensure 100% uptime of the Data center The dynamic team of dataceneter operators working 24/7 to ensure 100% uptime of the Data center The dynamic team of dataceneter operators working 24/7 to ensure 100% uptime of the Data center "
    }, 

    {
     image: shottwo,
     title: 'Sales Sales Sales !!!',
     body: "Ithuba's Desktop Engineer, suporting all ITHUBA staff to ensure seemless operations ."
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
             <h1 className="level-1-headings text-align-cntr ">About Sales</h1>
             <article>
               <p className="justify-text margin-btm-5">The Sales Department is Ithuba’s most direct link to the retail trade and therefore our customer base.  The biggest department in Ithuba, Sales has almost 100 staff members servicing our 9000 strong accredited retailer estate.  Our proactive Regional Sales Force services these retailers on a predefined call cycle lasting 10 days twice every month.  Our dynamic Key Account Team manage all of the company’s chain retail groups representing 5000 retail outlets.</p>
               <p className="justify-text margin-btm-5">​The department is both Head Office and regionally deployed with one focus, one drive, and one purpose “Exceed the Target”.​​  ​</p>
               <p>Lottery Operations manages the financial aspects related to Ithuba’s Lottery operations in accordance with World Lottery Association practices.  This includes lottery sales by retailers and alternate channels as well as the payment of sales commission and prizes.    The department is also responsible to report to the National Lottery Commission on Ithuba’s financial status as required by the Lottery License.​​</p>
             </article>
           </div>

           <div className="width-40 padding-r-10">
            <h1 className="level-1-headings text-align-cntr ">Sales Organisational Structure</h1>
           </div>

           <div className="width-20">
            <h1 className="level-1-headings text-align-cntr ">Key personal in this department</h1>
           </div>
         </div>
       </section>

    </div>
  )
}

export default Sales