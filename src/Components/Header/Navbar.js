import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

export default function Navbar() {
  return (
    <div className='nav' >  
     



    <Link className='nav-bar-li' to='/Home' >HOME</Link> 
    <Link className='nav-bar-li' to="">COMPUTER GLASSES  </Link>
    <Link className='nav-bar-li' to="">CONTACT LENSES  </Link>
    <Link className='nav-bar-li' to='Contact' >CONTACT</Link>
    <Link className='nav-bar-li' to="ABOUT">ABOUT US  </Link>
   
     
     
   
    
   
   
     

    </div>
  )
}
