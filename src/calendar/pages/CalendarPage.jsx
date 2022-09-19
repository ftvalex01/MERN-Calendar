import { Calendar} from 'react-big-calendar';
import {addHours} from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react';


import { NavBar } from "../";
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
      console.log({event,start,end,isSelected})
  }

  return (
    <>
      <NavBar onChangeLenguage={onChangeLenguage}/>
      <Calendar
      culture={lenguage && 'es'}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      messages={lenguage && getMessagesES()}
      eventPropGetter={eventStyleGetter()}
    />
    </>
  )
}
