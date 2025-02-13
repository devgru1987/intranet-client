import Navigation from "./Navigation"
import HeroUnit from "./HeroUnit"

import shotOne from '../assets/testimgs/shot1.png'
import shottwo from '../assets/testimgs/shot2.png'

const Paytronix = () => {
  const slideImages = [
    {
     image: shotOne,
     title: 'DC Ops',
     body: "The dynamic team of dataceneter operators working 24/7 to ensure 100% uptime of the Data center "
    }, 

    {
     image: shottwo,
     title: 'Emos Kennedy',
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
             <h1 className="level-1-headings text-align-cntr ">About Paytronix</h1>
             <article>
               <p className="justify-text margin-btm-5">This is the nerve centre of Ithuba, as we provide services to all areas of the company business. Our primary function is to keep the lottery systems operational to maximise our sales and revenue. Alongside this we provide the Enterprise IT technology and user support to Ithuba and the other companies within the Zamani Group. We are a service driven department: all users are our customers and our goal is to provide first class service using trusted technology to ensure everyone has the tools to carry out their job functions efficiently, irrespective of where they are physically located.</p>
             </article>

            <div>
             <h2 className="kaki-text">Our sevices</h2>
               <ul>
                 <li> - Lottery System Operation</li>
                 <li> - Retailer Technical Support</li>
                 <li> - Configuration and monitoring of: Networks,   Servers, Storage</li>
                 <li> - Application Management</li>
                 <li> - Reporting</li>
                 <li> - Security</li>
                 <li> - IT Helpdesk</li>
               </ul>
            </div>

            <div>
             <h2 className="kaki-text">MIS Department </h2>
             <p>This section is responsible for:</p>
             <ul>
               <li>All the software applications used by the companies i.e. Enterprise Series, SAGE X3, CRM, VIP etc.</li>
               <li>All data reporting requirements</li>
               <li>IT Security Standards</li>
             </ul>
            </div>

            <div>
             <h2 className="kaki-text">Retailer Technology</h2>
             <ul>
              <li>- Ensures that the retailer network is able to communicate with the primary and secondary data centres to facilitate the sale of Lottery product.</li>
              <li> -Provides second line support to retailers for all technical problems</li>
              <li> -Dispatches engineers to the field to rectify faults.</li>
              <li> -The staff operates in shifts to cover the operating hours required.</li>
              <li> -The telephone system also falls under this section.</li>
             </ul>
            </div>

            <div>
              <h2 className="kaki-text">IT Departm​ent</h2>
              <p>This section is responsible for the connectivity and IT equipment within the group.</p>
              <p>This consists of servers, network equipment and PC's. Ensures that the links connecting the datacentres, regional offices, and third parties are fully operational 24/7 using the Vodacom MPLS network</p>
              <p>The IT helpdesk is run by this section.</p>
            </div>

            <div>
             <h2 className="kaki-text">Lottery Operations​  </h2>
              <p>The Lottery Operations section is responsible for the running of the Enterprise Series Lottery System 24 hours per day.</p>
              <p>The operators are currently employed by PLS.</p>
            </div>

           </div>

           

           <div className="width-40 padding-r-10">
            <h1 className="level-1-headings text-align-cntr ">ICT Organisational Structure</h1>
           </div>

           <div className="width-20">
            <h1 className="level-1-headings text-align-cntr ">Key personal in this department</h1>
           </div>
         </div>
       </section>

      
     
    </div>
  )
}

export default Paytronix