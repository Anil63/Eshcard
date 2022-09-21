import React, { useState } from 'react'


import './Contact.css';



export default function Contact() {

  
  const [newName , setNewName] = useState('');
  const [newMo , setNewMo] = useState('');
  const [newEmail , setNewEmail] = useState('');
  const [newComment , setNewComment] = useState('');


  const newNameHandler = (event) =>{

    console.log(newName);
    setNewName(event.target.value)
  };

  const newMoHandler = (event) =>{
    console.log(newMo);
    setNewMo(event.target.value)
  };

  const newEmailHandler = (event) =>{
    console.log(newEmail);
    setNewEmail(event.target.value)
  };
  const newCommentHandler = (event) =>{
    console.log(newComment);
    setNewComment(event.target.value)
  };

  const SubmitHend =(event) =>
   {
     event.preventDefault();

     const reciv = {
       namee:newName,
       mo:newMo,
       Email:newEmail,
       Comm:newComment,
      

     }

     console.log(reciv);

      // remove data onsubmit//
      setNewName('');
      setNewMo('');
      setNewEmail('');
      setNewComment('');

     
      alert ("you are submition successfully "+ newName);
    
     
   }
 


  return (
    <div className='co_p' onSubmit={SubmitHend}>
      <div className="con_img">
        <img className='co_ing' src="https://institute.careerguide.com/wp-content/uploads/2020/09/Cover_UIUX_4.gif" alt="" />
      </div>
      <span className='alt' alt={alert} ></span>
      <div className="contc">
        <div className="container">
          <form action="">
            <h3 > Contact Details</h3>

            <input className='con_t' type="text" name="name" id="nm" placeholder='Full Name  ' onChange={newNameHandler}  value={newName}/>
            <br />
            <br />
            <input className='con_t' type="text" name="mo" id="mo"  placeholder='phone ' onChange={newMoHandler} value={newMo}/>
            <br />
            <br />
            <input className='con_t' type="text" name="em" id="em" placeholder='xyz@email.com' onChange={newEmailHandler} value={newEmail} required/>
            <br />
            <br />
            <textarea className='con_t_comment' name="" id="" cols="30" rows="10" placeholder='Commnet' onChange={newCommentHandler} value={newComment}></textarea>

            <div className="con_b">
              <button className='con_b_b'><i className="fa-solid fa-paper-plane"></i> Send</button>
            </div>
          </form>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}
