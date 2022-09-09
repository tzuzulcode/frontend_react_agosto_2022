import React from 'react'

export default function LogoutButton({logged,logout}) {
  if(logged){
    return <button onClick={logout}>Cerrar sesión</button>
  }
}
