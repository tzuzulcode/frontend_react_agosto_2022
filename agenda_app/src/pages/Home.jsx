import React from 'react'
import Navbar from '../components/Navbar'

export default function Home({user}) {
  return (
    <div>
        <Navbar user={user}/>
        <h1>Home</h1>
    </div>
  )
}
