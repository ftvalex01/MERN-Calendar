import { useState } from 'react';
import { Calendar} from 'react-big-calendar';
import {addHours} from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'


import { NavBar,CalendarEvent,CalendarModal  } from "../";
import { localizer , getMessagesES  } from '../../helpers';



const  events = [{
  title:'Cumpleaños del jefe',
  note:'comprar pastel',
  start:new Date(),
  end:addHours(new Date(),2),
  bgColor:'#fafafa',
  user:{
    _id:'1234',
    name:'Alex'
  }
}]


export const CalendarPage = () => {

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month')
  const [lenguage,setLenguage] = useState(false);
  
  const onChangeLenguage = () =>{
    let idioma = document.getElementById('idioma')
    setLenguage(current =>!current)
    if(lenguage === true){
      idioma.innerHTML = 'Change Lenguage'
    }else{
      idioma.innerHTML = 'Cambiar idioma'
    }
  }

  const eventStyleGetter = (event,start,end,isSelected) => {
      const style ={
        backgroundColor:'#347CF7',
        borderRadius:'0px',
        opacity:0.8,
        color: 'white',
      }
      return {
        style
      }
  }

  const onDoubleClick = (event)=>{
    console.log({doubleClick:event})
  }
  const onSelect = (event)=>{
    console.log({click:event})
  }
  const onViewChange = (event)=>{
    localStorage.setItem('lastView',event)
  }
 
 
  return (
    <>
      <NavBar onChangeLenguage={onChangeLenguage}/>
      <Calendar
      culture={lenguage && 'es'}
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      messages={lenguage && getMessagesES()}
      eventPropGetter={eventStyleGetter}
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelect}
      onView={onViewChange}
    />

    <CalendarModal/>
    </>
  )
}
