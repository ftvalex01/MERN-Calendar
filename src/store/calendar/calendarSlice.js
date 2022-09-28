import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';


const tempEvent = {
    _id:new Date().getTime(),
    title:'Cumpleaños del jefe',
    notes:'comprar pa',
    start:new Date(),
    end:addHours(new Date(),2),
    bgColor:'#fafafa',
    user:{
      _id:'1234',
      name:'Alex'
    }
  }
  

const initialState = {
    events :[
        tempEvent
    ],
    activeEvent:null
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onSetActiveEvent :(state,{payload})=>{
      state.activeEvent = payload
    },
    onAddNewEvent : (state,{payload})=>{
      state.events.push(payload);
      state.activeEvent = null ;
    }
  }
});

export const {onSetActiveEvent,onAddNewEvent} = calendarSlice.actions

