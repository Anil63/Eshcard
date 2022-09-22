import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

interface opt{
    OTPs:string;
}
const dopt: opt ={
    OTPs:''
}

const Otp = () => {
    const [ OTP ,setopt] = useState(dopt);
    const {OTPs} = OTP;
    const navigate = useNavigate();
    const params  = useParams();


    const OTPHandeler = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setopt((preveState)=>({
            ...preveState,[event.target.id]:event.target.value,
          }));
          console.log(OTP)
    }

    const onOTP = async (event: React.FormEvent<HTMLFormElement>) =>{
       event.preventDefault();
       console.log(OTP);
       setopt(dopt);

       let otp = await fetch(`http://localhost:4000/otp/${params.id}`);
       otp = await otp.json();
    
  
    console.log(otp);
    localStorage.setItem("user",JSON.stringify(otp))
    navigate('/')
    }
  return (
    <div>
      <div  className="signo">
        <div className="otpfrom">
            <form action="" onSubmit={onOTP}>
            <div className="gi"><input className='fing' type="text" name="name" id="OTP"  placeholder='First Name' onChange={OTPHandeler} value={OTPs} /></div>
            </form>
        </div>
      </div>
    
    </div>
  )
}

export default Otp
