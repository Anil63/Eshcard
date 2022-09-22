import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

interface login {
 username:string
  password:string
}

const defaultdat:login = {
  username: "",
  password: ""
}

const Login = () => {

  const [log, setlog] = useState(defaultdat);
  const {username ,password}  = log
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate("/");
    }
  },[])
  

  const onloginhander =(event:React.ChangeEvent<HTMLInputElement>) =>{
    setlog((preveState)=>({
      ...preveState,[event.target.id]:event.target.value,
    }));
    console.log(log)
  }

  const onlogind = async (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log(log);
    setlog(defaultdat)

    let login = await fetch('http://localhost:4000/login',{
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'}
    });
    login = await login.json();
    console.log(login)
   
 
   
   if(login){
    localStorage.setItem("user",JSON.stringify(login))
    navigate('/');
   }
   else{
    alert("please enter valid id password");
   }
    
  }

  return (
    <div className="logins">
    <div className="loginsa">
    <form action="" onSubmit={onlogind}>
      <div className="loginlink"> <Link className="gin" to="/demo" >Sign up</Link> <Link  className="gin" to='/Login' >login</Link></div>

      <div className="login">
        <input className="loinp" type="text" name="E/M" id="username" placeholder='Mobile / Email' value={username} onChange={onloginhander} />
      </div>
      <div className="login">
        <input className="loinp" type="text" name="password" id="password" placeholder='Mobile / Email' value={password} onChange={onloginhander}/>
      </div>
     
      <div className="loginbrn"> 
        <button className="lbtn">Proceed</button></div>
      <div className="other_login">
       
        <li>Google</li>
        <li>Facebook</li>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Login
