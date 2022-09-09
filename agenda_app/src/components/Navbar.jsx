import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { authContext } from '../context/AuthContext'
import LogoutButton from './LogoutButton'

const Nav = styled.nav`
    background-color: aqua;
`

const Li = styled.li`
    background-color: cadetblue;
`

export default function Navbar() {

    const {user,setUser} = useContext(authContext)
    const navigate = useNavigate()
    
    const logout = ()=>{
        setUser({
            type:"LOGOUT"
        })
        navigate("/")
    }
    return (
        <div>
            <Nav>
                <ul>
                    <Li><Link to="/login">Login</Link></Li>
                    <Li><Link to="/login_state">Login State</Link></Li>
                    <Li><Link to="/login_custom_hook">Login Custom Hook</Link></Li>
                    <Li><Link to="/calendar">Calendar</Link></Li>
                    <Li>{user.data?.email || "No auth"}</Li>
                    {/* Conditional rendering */}
                    {user.logged?<button onClick={logout}>Cerrar sesión</button>:null}
                    <LogoutButton logged={user.logged} logout={logout}/>

                    {/* Operador de corto-circuito */}
                    {user.logged&&<button onClick={logout}>Cerrar sesión</button>}
                </ul>
            </Nav>
        </div>
    )
}
