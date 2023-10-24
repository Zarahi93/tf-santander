import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
  // View,
} from "react-big-calendar";
import moment from "moment";
import YearView from "./YearView";
import { useState } from "react";
const localizer = momentLocalizer(moment);
const events = [
  {
    start: moment("2023-10-10T10:00:00").toDate(),
    end: moment("2023-10-10T12:00:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2023-01-10T10:00:00").toDate(),
    end: moment("2023-01-10T11:00:00").toDate(),
    title: "ENT Appointment",
  },
  {
    start: moment("2023-06-10T10:00:00").toDate(),
    end: moment("2023-06-10T11:00:00").toDate(),
    title: "Plastic Surgery",
  },
];


export default function Calendar({theme}) {
  console.log(theme);
  const [view, setView] = useState(Views.YEAR); // Set the default view to YEAR
  const [date, setDate] = useState(new Date());
  const views = {
    month: true,
    year: YearView,
  };
  
  const handleViewChange = (newView) => {
    if (views[newView]) {
      setView(newView);
    }
  };
  
  return (
    <BigCalendar
      localizer={localizer}
      defaultView={Views.YEAR} // Set the default view to YEAR
      view={view}
      date={date}
      onView={handleViewChange}
      onNavigate={(newDate) => setDate(newDate)}
      events={events}
      views={views}
      messages={{ year: "Year" }}
      theme = {theme}
    />
  );
}
