import { BrowserRouter as Router} from 'react-router-dom'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function CreateAcc(){
    const [nUser, setNUser] = useState("")
    const [nPass, setNPass] = useState("")

    const handleAddEmail = (event) =>{
        setNUser(event.target.value)
    }

    const handleAddPass = (event) =>{
        setNPass(event.target.value)
    }

    const createAccPress = () =>{
        console.log("account created")
    }

    return(
        <div className="create acc">
            <div className = "content">
                <center>
                    <AddUser handleAddEmail={handleAddEmail} handleAddPass={handleAddPass} createAccPress={createAccPress}/>
                </center>
            </div>

        </div>
    );
}

function AddUser(props){
    const {handleAddEmail, handleAddPass, createAccPress} = props
    
    return(
        <div>
            <center>
                <form>
                    <label>
                        Set email:
                        <input type = "text" name = "email" onChange={handleAddEmail}/>
                        <br></br>
                        <br></br>
                        Set password:
                        <input type = "text" name = "password" onChange={handleAddPass}/>
                    </label>
                    <CreateAccSuccess createPress = {createAccPress}></CreateAccSuccess>
                </form>
            </center>

        </div>
    )
}

function CreateAccSuccess(props){
    const {createPress} = props
    
    return(
        <div>
            <button type = "button" onClick={createPress}>Create Account</button>
        </div>
    );
}