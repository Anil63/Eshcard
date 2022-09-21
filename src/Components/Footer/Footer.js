import React from 'react'
import './Footer.css'
import logo2 from '../Header/l.svg'




export default function Footer() {
  return (
      <>
    <div className='Fotter' >
      
      <div className="d1">
          <img className='logo2' src={logo2} alt="" />

<p></p>
<ul className='icon'>
    
<span className='ins'><i className="fa-brands fa-facebook"></i></span>
<span className='ins'><i className="fa-brands fa-twitter"></i></span> 
<span className='ins'><i className="fa-brands fa-instagram"></i></span>
<span className='ins'><i className="fa-brands fa-whatsapp"></i></span>


<p></p>


</ul>
      </div>
     
      <div className="d2"></div>
      <i className="fa-solid fa-envelope"></i>  
      <span> lenkart@gmail.com</span> 
     
<div className='nober'>
<i className="fa-solid fa-phone"></i>
      <span>+91 12345 12546</span>   
      </div>   
    </div>
    <div className='fothead' > Copyrigth &copy; 2022 Mr.Alb  </div>
    </>
  )
}
