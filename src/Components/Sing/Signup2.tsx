import React from 'react'
import { Link } from 'react-router-dom'
import './Sing.css'

const Signup2 = () => {
  return (
    
    <div className='sigdiv'>
<div className="signo">
     <Link  className="gin" to="/demo" >Sign up</Link> <Link   className="gin" to='/Login' >login</Link>


   <div className="">

<div className="gignup">
<div className="gi"><input className='fing' type="text" name="uname" id="uname"  placeholder='User Name'/></div>
  <div className="gi"><input className='fing' type="text" name="name" id="name"  placeholder='First Name'/></div>
  
<div className="gi"> <input className='fing' type="text" name="Lname" id="Lname " placeholder='Last Name ' /></div>
 
<div className="gi"> <input className='fing' type="text" name="Mo" id="Mo" placeholder='Mobile'  /></div>
 
<div className="gi">  <input className='fing' type="text" name="Emial" id="Email " placeholder='Email Address'  />
</div>

<div className="gi"> <input className='fing' type="text" name="password" id="password" placeholder='Password' /></div>
 
</div>

<div className="signupntn">
  <button className='singbtn'> Register</button>
</div>
   </div>
   </div>
    </div>
  )
}

export default Signup2
