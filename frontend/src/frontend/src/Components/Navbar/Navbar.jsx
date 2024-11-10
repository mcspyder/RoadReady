import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div class_name='navbar'>
        <div class_name='logo'>
            <img src={logo} alt='logo' />
        </div>
        <div class_name='cart'>
            <img src={cart_icon} alt='cart_icon' />
        </div>
    </div>
  )
}

export default Navbar