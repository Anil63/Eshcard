import { Link } from "react-router-dom"


const login = () => {
  return (
    <div className="logins">
    <div className="loginsa">
      <div className="loginlink"> <Link className="gin" to="/demo" >Sign up</Link> <Link  className="gin" to='/Login' >login</Link></div>

      <div className="login">
        <input className="loinp" type="text" name="E/M" id="E/M" placeholder='Mobile / Email' />
      </div>
     
      <div className="loginbrn"> 
        <button className="lbtn">Proceed</button></div>
      <div className="other_login">
       
        <li>Google</li>
        <li>Facebook</li>
      </div>
    </div>
    </div>
  )
}

export default login
