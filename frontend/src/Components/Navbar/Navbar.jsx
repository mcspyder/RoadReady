import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import favs from '../Assets/favs.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
             <img src={logo} alt='logo' />
             <p>RoadReady</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("workshops")}}>Workshops{menu==="workshops"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("services")}}>Services{menu==="services"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("car_brands")}}>Car Brands{menu==="car_brands"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("about_us")}}>About Us{menu==="about_us"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("contact_us")}}>Contact Us{menu==="contact_us"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("log_in")}}>Log In{menu==="log_in"?<h/>:<></>}</li>
        </ul>
        <div className='nav-login-favs'>
            <button>Log In</button>
            <img src={favs} alt='favs' />
        </div>
    </div>
  )
}

export default Navbar  