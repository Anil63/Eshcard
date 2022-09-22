import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Logins = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div>
 
 { auth ?   <Link  className='nav_bar_link' to="/signup" onClick={logout} >Logout</Link> : <> <Link className="nav-bar-lis" to='/Login' >Sign In & Sign Up </Link> </>}
    </div>
  )
}

export default Logins;

  