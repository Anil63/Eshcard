import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Sing.css'

interface sigdata {
  username:string
  firstname:string
  lastname:string
  mobile:string
  email:string
  password:string
  OTPs:string;
}

const defaultdata:sigdata  = {
  username:"",
  firstname:"",
  lastname:"",
  mobile:"",
  email:"",
  password:"",
  OTPs:''
}


const Signup2 = () => {
  const [signdata , setsig] = useState(defaultdata);
const { username,firstname,lastname, mobile,email,password} = signdata;
const navigate = useNavigate();

const [ OTP ,setopt] = useState(defaultdata);
    const {OTPs} = OTP;
   
    const params  = useParams();


    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/')
          }
  
    })
  

const OTPHandeler = (event:React.ChangeEvent<HTMLInputElement>) =>{
  setopt((preveState)=>({
      ...preveState,[event.target.id]:event.target.value,
    }));
    console.log(OTP)
}

const SigndataHandelr = (event:React.ChangeEvent<HTMLInputElement>) =>{
  setsig((preveState)=>({
    ...preveState,[event.target.id]:event.target.value,
  }));
  console.log(signdata)
}
const onSub = async (event:React.FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
        console.log(signdata);
        setsig(defaultdata);

        let signdat = await fetch('http://localhost:4000/signup',{
          method: 'POST',
          body:JSON.stringify(signdata),
          headers: { 'Content-Type': 'application/json' },
        })
        signdat = await signdat.json();
        console.log(signdat)
        localStorage.setItem("user",JSON.stringify(signdat));
       
}


const onOTP = async (event: React.FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  console.log(OTP);
  setopt(defaultdata);

//   let otp = await fetch(`http://localhost:4000/otp/${params.id}`);
//   otp = await otp.json();
// navigate('/')
}

const onSinup =async () =>{
  let login = await fetch('http://localhost:4000/login',{
    method: 'POST',
    body:JSON.stringify(defaultdata),
    headers: { 'Content-Type': 'application/json' }
  });
  login = await login.json();
  console.log(login);
  if(login){
    localStorage.setItem("user",JSON.stringify(login))
    navigate('/');
   }
   else{
    alert("please enter valid id password");
   }
}
  return (
    
    <div className='sigdiv'>
<div className="signo">
  <form onSubmit={onSub}>
     <Link  className="gin" to="/demo" >Sign up</Link> <Link   className="gin" to='/Login' >login</Link>


   <div className="">

<div className="gignup">
<div className="gi">
  
  <input className='fing' type="text" name="uname" id="username"  placeholder='User Name' onChange={SigndataHandelr} value={username}/></div>
  <div className="gi"><input className='fing' type="text" name="name" id="firstname"  placeholder='First Name' onChange={SigndataHandelr} value={firstname} /></div>
  
<div className="gi"> <input className='fing' type="text" name="lastname" id="lastname" placeholder='Last Name ' onChange={SigndataHandelr} value={lastname} /></div>
 
<div className="gi"> <input className='fing' type="text" name="Mo" id="mobile" placeholder='Mobile' onChange={SigndataHandelr} value={mobile}/></div>
 
<div className="gi">  <input className='fing' type="text" name="Emial" id="email" placeholder='Email Address'  onChange={SigndataHandelr} value={email} />
</div>

<div className="gi"> <input className='fing' type="text" name="password" id="password" placeholder='Password' onChange={SigndataHandelr} value={password} /></div>
 
</div>

<div className="signupntn">
  <button className='singbtn'> Register</button>
</div>
   </div>
   </form>
   </div>
   <div  className="signo">
        <div className="otpfrom">
            <form action="" onSubmit={onOTP}>
              <label htmlFor="otp">OTP</label>
            <div className="gi"><input className='fing' type="text" name="name" id="OTPs"  placeholder='Enter OTP' onChange={OTPHandeler} value={OTPs} /></div>
           <button className='singbtn'onClick={onSinup} >send</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup2
