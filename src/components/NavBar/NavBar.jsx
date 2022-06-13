import React, {useState} from "react";
import {
    Nav,
    Title
} from './Styled'
import Toggle from '../Toggle'
const NavBar = ({themeToggler,theme}) => {

    return(
        <Nav>

            <Title>LIVESCORE</Title>
            <Toggle
                themeToggler={themeToggler}
                theme={theme}
            />

        </Nav>
    )
}
export default NavBar
