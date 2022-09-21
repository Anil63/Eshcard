import React, { useState } from "react";





export default function SingUp(props) {


  

  const [newName, setNewname] = useState("");
  const [newFuname, setFuname] = useState("");
  const [newPass2, setNewPass] = useState("");
  const [newPass1, setNewPass1] = useState("");

  const onChanName = (event) => {
    setNewname(event.target.value);
  };

  const onCHanFname = (event) => {
    setFuname(event.target.value);
  };

  const onNewPass = (event) => {
    setNewPass(event.target.value);
  };

  const onNewPass1 = (event) => {
    setNewPass1(event.target.value);
  };


  

  



  const onSumbitsin = (event) => {
    event.preventDefault("");

   

    
   
    const rec =[{
      name1: newName,
      name2: newFuname,
      pass: newPass2,
      pass1: newPass1,
    }];


    console.log(rec);
  

   
    

    setNewname("");
    setFuname("");
    setNewPass("");
    setNewPass1("");

    //preventDefault
  };
  const  data = [ newName , newFuname , newPass1 , newPass2 ];
  

  return (
    <div>
      <div className="si">
        <div className="contaner">
          <div className="fom_sng">
              <h4>Sing up</h4>
            <form action="" onSubmit={onSumbitsin}>
              <div className="nam">
                <input
                  className="sing_up_d"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={newName}
                  onChange={onChanName}
                 required/>
              </div>

              <div className="user_name">
                <input
                  className="sing_up_d"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="User Name"
                  value={newFuname}
                  onChange={onCHanFname}
                 required/>
              </div>

              <div className="passw">
                <input
                  className="sing_up_d"
                  type="Password"
                  name="pas1"
                  id="pas1"
                  placeholder="Password"
                  value={newPass2}
                  onChange={onNewPass}
                required/>
              </div>

              <div className="conPass">
                <input
                  className="sing_up_d"
                  type="Password"
                  name="pas1"
                  id="pas2"
                  placeholder="Confrim Password"
                  value={newPass1}
                  onChange={onNewPass1}
                required/>
              </div>
              <div className="sing_byn">
                <button className="sing_byn_b">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="result">
        <h1>result:</h1>
       
        {data}
      
  


      
        <div className="results"></div>
      </div>
    </div>
  );
}



