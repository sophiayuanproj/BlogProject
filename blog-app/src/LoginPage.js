import logo from './logo.svg';
import React, { useState } from 'react';
// import './App.css';

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
        <input type = "password" name = "password" onChange={handlePassChange}/>
        <br></br>
        <br></br>
        </label>
        <SigninButton signInPress={signInPress}></SigninButton>
        <CreateAccount createPress={createPress}></CreateAccount>
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

function CreateAccount(props) {

  const {createPress} = props

  return(
    <div>
      <button type="button" onClick={createPress}>
        Create Account
      </button>
    </div>
  )
}