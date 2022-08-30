import React from 'react'
import styled from "styled-components"

const Nav = styled.nav`
    background-color: aqua;
`

const Li = styled.li`
    background-color: cadetblue;
`

export default function Navbar() {
  return (
    <div>
        <Nav>
            <ul>
                <Li>Link</Li>
                <Li>Link</Li>
                <Li>Link</Li>
                <Li>Link</Li>
                <Li>Link</Li>
            </ul>
        </Nav>
    </div>
  )
}
