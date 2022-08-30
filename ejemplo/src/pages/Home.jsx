import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const [characters,setCharacters] = useState([])
    const [clicks,setClicks] = useState(0)

    useEffect(()=>{
        fetch("https://finalspaceapi.com/api/v0/character")
        .then(response=>response.json())
        .then(data=>{
            setCharacters(data)
        })
    },[]) //No olvidarse del arreglo (segundo parametro)
    // DependencyList: Si esta vacio, solo se ejecuta una vez (en desarrollo 2 veces)

    useEffect(()=>{
        console.log("Hola")
    },[]) // El efecto se ejecuta como resultado en el cambio de la información

    const incrementClicks = ()=>{
        setClicks(clicks+1)
    }

    return (
        <div>
            <h1>Home</h1>
            <a href="https://facebook.com">Facebook</a> {/* Usar con vínculos externos */}
            <Link to="/introduction">Introduction link</Link>{/* Para rutas internas de la app */}
            <button onClick={incrementClicks}>Click: {clicks}</button>
            {characters.map((character)=>{
                return <p key={character.id}>{character.name}</p>
            })}
        </div>
    )
}
