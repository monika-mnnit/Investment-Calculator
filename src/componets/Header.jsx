import React from 'react'
import componentsImage from '../assets/components.png';

function Header() {
  return (
    <div id='header'>
        <img src={componentsImage} alt = 'Investment' />
        <h1>Investment Calculater</h1>
    </div>
  )
}

export default Header
