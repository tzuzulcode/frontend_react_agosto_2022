import React from 'react'
import Hours from '../components/calendar/Hours'
import Layout from '../components/calendar/Layout'
import WeekDays from '../components/calendar/WeekDays'

export default function Calendar() {
  return (
    <Layout>
        <WeekDays/>
        <Hours/>
    </Layout>
  )
}
