

import {useNavigate} from "react-router-dom";
import React ,{useState} from "react";

import {createUserWithEmailAndPassword} from 'firebase/auth'

import {auth} from '../Components/Config/Firebase'
function Signup (){

    const  [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    let history = useNavigate ();

    const Register = () => {
        alert("clicked")

        createUserWithEmailAndPassword (auth, email ,password).then(()=>{
            history("/home");  
        }).catch((error)=>{
            console.log(error);
        })

    };


    return (

        <div className="box-signup">
            <h1 style={{paddingLeft: "10%"}}>Register Account Here</h1>
            <div style={{marginTop: "15%"}}>
            <input type="email"  placeholder="Enter email" onChange= {(e)=>setEmail(e.target.value)}/> <br></br>
            <input type="password"  placeholder="Enter password" onChange= {(e)=>setPassword(e.target.value)}/> <br></br> <small id ="Enter-password">Signup</small> <br></br>


            <button onClick={Register}>Submit</button>
            <br></br>
            <small style={{padding:100}}>Create an password with at least 6 characters</small>
            </div>

            <div>
           
            </div>
        </div>
    )
};

export default Signup;
