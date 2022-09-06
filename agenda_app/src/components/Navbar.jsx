import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { authContext } from '../context/AuthContext'

const Nav = styled.nav`
    background-color: aqua;
`

const Li = styled.li`
    background-color: cadetblue;
`

export default function Navbar() {

    const {user} = useContext(authContext)
    

  return (
    <div>
        <Nav>
            <ul>
                <Li><Link to="/login">Login</Link></Li>
                <Li><Link to="/login_state">Login State</Link></Li>
                <Li>Link</Li>
                <Li>Link</Li>
                <Li>Link</Li>
                <Li>{user.data?.email || "No auth"}</Li>
            </ul>
        </Nav>
    </div>
  )
}
