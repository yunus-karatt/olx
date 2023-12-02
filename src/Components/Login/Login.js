import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebase } from '../../store/FirebaseContext';

function Login() {

  const [input,setInput]=useState('')
  const {logIn}=useFirebase()
  const navigate=useNavigate()
  const handleChange=(e)=>{
    setInput(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    try{
      logIn(input.email,input.password)
      .then(()=>navigate('/'))
      .catch(err=>alert(err.message))
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e)=>handleLogin(e)}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={input.email}
            onChange={(e)=>handleChange(e)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={input.password}
            onChange={(e)=>handleChange(e)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
