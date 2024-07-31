import React from 'react'
import './navbar.css'
import burger from '../assets/burger.png'
import ttlogo from '../assets/ttlogo.png'

const NavBar = () => {
  return (
    <div className='mainnav'>

      <img src={burger} alt='burger' className='burger' />

      <img src={ttlogo} alt='ttlogo' className='logo' />

      <div className='qwert'>
        KONTAKT
      </div>
    </div>
  )
}

export default NavBar