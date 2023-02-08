import React from 'react'
import './Header.css'
import Nav from './Nav'

const Header = (props) => {
  return (
    <header>
   <h1>{props.text}</h1>
   <Nav/>
   </header>
  )
}

export default Header