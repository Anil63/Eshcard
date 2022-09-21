import React from 'react'
import { useState } from 'react';



import './Sing.css'
import { Link} from 'react-router-dom';



export default function Sing() {

    const [newuser, setUser] = useState('');
    const [newPass ,setPass] = useState('');


    const onChangeHanuser = (event) =>{
        console.log(newuser);
        setUser(event.target.value);
    }

    const onChangeHanpass = (event) =>{
        console.log(newPass);
        setPass(event.target.value);
    }

    const onSing =(event) =>{
        event.preventDefault();
        // preventDefault

        // removedata 

        setUser('');
        setPass('');

    }

    
   
  return (
    <div onSubmit={onSing}>
     <div className="conatainr">
         <div className="from_sing">
             <form action=""className='sing_d' autoComplete="off" >
                 <h2 className='hd'>  Login</h2>
                 <div className="user">
                     <input className='us' type="text" name="use" id="use" placeholder='user ' value={newuser} onChange={onChangeHanuser}  required autoComplete="off"/>
                 </div>
                 <div className="user">
                     <input className='pas' type='password' placeholder='Password' value={newPass} onChange={onChangeHanpass}  autoComplete="off" required/>
                 </div>

                

                 <div className="btn_sing">
                     <button className='sub' type="submit">Sing</button>
                 </div>
                    <div className="otherlog">
                        <button className='googl'><i class="fa-brands fa-google"></i> google</button>
                        <button className='face'><i class="fa-brands fa-facebook"></i> facebook</button>
                    </div>
                 <div className="other_link">
                    
                       
                <Link className='cre' to=''>Create account</Link>
                

                 </div>
             </form>

         </div>
     </div>
    </div>
  )
}
