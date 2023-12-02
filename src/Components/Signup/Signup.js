import React, {  useState } from "react";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { useFirebase } from "../../store/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [input, setInput] = useState({});
  const {signUp,updateDisplayName,addUser} =useFirebase()
  const navigate=useNavigate()
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
       signUp(input.email,input.password)
       .then(async result=>{
       await updateDisplayName(input.name)
       await addUser(result.user.uid,input.name,input.phone)
       navigate('/login')

       })
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="olx logo"></img>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            value={input.name || ""}
            className="input"
            type="text"
            id="name"
            name="name"
            defaultValue="John"
            onChange={(e)=>handleChange(e)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={input.email || ""}
            className="input"
            type="email"
            id="email"
            name="email"
            defaultValue="John"
            onChange={(e)=>handleChange(e)}

          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
          value={input.phone || ""}
            className="input"
            type="number"
            id="phone"
            name="phone"
            defaultValue="Doe"
            onChange={(e)=>handleChange(e)}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          value={input.password || ""}
            className="input"
            type="password"
            id="password"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>handleChange(e)}

          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
