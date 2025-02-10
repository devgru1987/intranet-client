/* https://www.npmjs.com/package/react-big-calendar */ 

import Navigation from "./Navigation"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const Calender = () => {
  const myEventsList = []

  return (
    <div>
      <section className="main-navigation">
        <Navigation />
      </section>

      <section className="flex-row justify-center">
        <div className="percentage-width-80 margin-top-btm-70">
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }} />
        </div>
      </section>
    </div>
  )
}

export default Calender