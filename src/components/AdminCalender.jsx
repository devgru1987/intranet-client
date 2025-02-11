
/* https://www.npmjs.com/package/react-big-calendar */ 
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const AdminCalender = () => {

 const myEventsList = []

 return (
   <section className="flex-column vertical-align-center ">
     <div className="percentage-width-90 margin-top-btm-70">
       <Calendar
         localizer={localizer}
         events={myEventsList}
         startAccessor="start"
         endAccessor="end"
         style={{ height: 600 }} />
     </div>

     <div className=" percentage-width-90 height-30 margin-btm-20 flex-row justify-space-btn">
     <input placeholder='Event Title' className="relative-width-50 pad-all-side event-input" />
     <div className="relative-width-15 dp-border">start date</div>
     <div className="relative-width-15 dp-border">end date</div>
     <div className="relative-width-10 dp-border">Save</div>
     </div>
    </section>
 )
}

export default AdminCalender
