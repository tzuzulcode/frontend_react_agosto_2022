import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Nav = styled.nav`
    background-color: aqua;
`

const Li = styled.li`
    background-color: cadetblue;
`

export default function Navbar({user}) {
  return (
    <div>
        <Nav>
            <ul>
                <Li><Link to="/login">Login</Link></Li>
                <Li>Link</Li>
                <Li>Link</Li>
                <Li>Link</Li>
                <Li>{user.data?.email || "No auth"}</Li>
            </ul>
        </Nav>
    </div>
  )
}
