

import {useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import { FaCity} from "react-icons/fa";

import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../Components/Config/Firebase';

 function Login (){

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState("");

  const btn = {
    width: '150px',
    height: '45px',
    marginTop:"20%"
  }

  let history = useNavigate();

  const login = (()=>{

    signInWithEmailAndPassword(auth,email,password).then(()=>{
      history.push("/home");

    }).catch((err)=>{
      console.log(err);

    })
   
  })

    return (

        <div className="box-login"> 


        <h1  style={{paddingLeft: "40%"}}><FaCity/>Login </h1>
        <h4>Luxury must be comfortable, otherwise it is not luxury</h4>

        <div  style={{marginTop: "15%"}}>
        <input type = "email"  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />  <br></br>
        <input type = "password"  placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />  <br></br> <small  id="forgot-password">Forgot-password</small> <br></br>
        
        <br></br>
        <small  style={{paddingLeft:'100px'}}>Dont you have an account </small>  <small>Create it here</small>
        </div>

        <div>
        <form onSubmit="console.log('You clicked submit.'); return false">
                <button type="submit">Submit</button>
            </form>
        </div>
        
         
         
         </div>
    )
    
 
  };
  export default Login;