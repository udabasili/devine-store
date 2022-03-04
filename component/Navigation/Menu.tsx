import React from 'react'
import { Input, MenuContainer, MenuIcon } from './Menu.style'

const Menu = () => {
  return (
    <>
        <Input id="menu-input"  type="checkbox"/>
        <MenuContainer className="menu" htmlFor="menu-input">
            <MenuIcon className="menu-icon">&nbsp;</MenuIcon>
        </MenuContainer>
    </>
  )
}

export default Menu