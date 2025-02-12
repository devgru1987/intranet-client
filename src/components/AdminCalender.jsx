
/* https://www.npmjs.com/package/react-big-calendar */ 
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
//https://www.npmjs.com/package/react-date-picker
import DatePicker from 'react-date-picker'

const localizer = momentLocalizer(moment)

const AdminCalender = () => {

 const startDate = (e) => {
   console.log(e.target.value)
 }

 const startEnd = (e) => {
  console.log(e.target.value)
}

const saveEvent = () => {

}

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

     <div className=" percentage-width-90 height-40 margin-btm-20 flex-row justify-space-btn">
       <input placeholder='Event Title' className="relative-width-50 pad-all-side event-input" />
       <div className="relative-width-15">Start: <input aria-label="Date" type="date" className="height-40" onChange={(e) =>  startDate(e) }/></div>
       <div className="relative-width-15">End: <input aria-label="Date" type="date" className="height-40" onChange={(e) =>  startEnd(e)}/></div>
       <div className="relative-width-10"><button className="cal-btn" onClick={() => saveEvent()}>Save</button></div>
     </div>
    </section>
 )
}

export default AdminCalender
