import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const [characters,setCharacters] = useState([])

    useEffect(()=>{
        fetch("https://finalspaceapi.com/api/v0/character")
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setCharacters(data)
        })
    },[]) //No olvidarse del arreglo (segundo parametro)
    // DependencyList: Si esta vacio, solo se ejecuta una vez (en desarrollo 2 veces)
    return (
        <div>
            <h1>Home</h1>
            <a href="https://facebook.com">Facebook</a> {/* Usar con vínculos externos */}
            <Link to="/introduction">Introduction link</Link>{/* Para rutas internas de la app */}
            {/* Reto: Mostrar la data de la API */}
        </div>
    )
}
