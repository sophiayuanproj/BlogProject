import logo from './logo.svg';
import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from './CreateAcc';

export default function LoginPage(){

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const handleEmailChange = (event) =>{
    setUser(event.target.value)
  }

  const handlePassChange = (event) =>{
    setPass(event.target.value)
  }

  const handleLoginPressed = () =>{
    console.log(user)
    console.log(pass)
    //Communicate with backend, see if successful login
  }

  const createPress = () => {
    //Communicate with backend to create account
    console.log("create pressed")
  }

  return(
    <div className = "login">
      <div className = "content">
        <center>
        <h1>Welcome back!</h1>
        </center>
        <Login handleEmailChange={handleEmailChange} handlePassChange={handlePassChange} signInPress={handleLoginPressed} createPress={createPress}/>
      </div>
    </div>
  );
}

function Login(props){

  const {handleEmailChange, handlePassChange, signInPress, createPress} = props

  return(
    <div>
      <center>
        <form>
        <label>
          Email:
        <input type = "text" name = "email" onChange={handleEmailChange}/>
        <br></br>
        <br></br>
          Password:
        <input type = "text" name = "password" onChange={handlePassChange}/>
        <br></br>
        <br></br>
        </label>
        <SigninButton signInPress={signInPress}></SigninButton>
        <CreateButton createPress={createPress}></CreateButton>
      </form>
      </center>
    </div>
  );
}

function SigninButton(props) {

  const {signInPress} = props

  return(
    <div>
    <button type = "button" onClick={signInPress}>Sign in</button>
    </div>

  );
}

function CreateButton(props) {
  const { createPress } = props;

  const handleClick = () => {
    window.location.href = '/createaccount';
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Create Account
      </button>
    </div>
  );
}