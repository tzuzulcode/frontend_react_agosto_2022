import React from 'react'
import EventButton from './EventButton'
import Hour from './Hour'

const horario = Array.from(Array(24).keys())

const CreateHours = ({hour})=><>
    <Hour key={hour}>{hour}</Hour>
    <EventButton hour={hour}></EventButton>
    <EventButton hour={hour}></EventButton>
    <EventButton hour={hour}></EventButton>
    <EventButton hour={hour}></EventButton>
    <EventButton hour={hour}></EventButton>
    <EventButton hour={hour}></EventButton>
    <EventButton hour={hour}></EventButton>
</>

export default function Hours() {

    return (
        <>
            {horario.map(hour=><CreateHours hour={hour} key={hour}/>)}
        </>
    )
}
