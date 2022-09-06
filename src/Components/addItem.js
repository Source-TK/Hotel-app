
import { useNavigate } from "react-router-dom";
import React,{useState} from "react"
import "../css/add.css"

import {auth} from '../Components/Config/Firebase';

import {db} from '../Components/Config/Firebase';

import {addDoc ,collection} from 'firebase/firestore'

function AddItem (props){

    const[checkin, setCheckin] = useState('')
    const[checkout, setCheckout] =useState ("");
    const[firstname, setfirstname] = useState ("");
    const[lastname, setlastname] = useState ("");

    const add = (()=>{

        const collectionRef = collection(db,"reservations");

        const transaction = {
            checkin:checkin ,
            checkout:checkout ,
            firstname:firstname ,
            lastname:lastname ,
        };

        addDoc(collectionRef, transaction).then(()=>{
            alert("Added successfully")
        }).catch((err)=>{
            console.log(err) ;
        })
        
    
    })
    
    return (

        <div>

            <h1 style={{paddingLeft:"30%"}}>Reservations</h1>

            <input type="date" placeholder="Checkin" onChange={(e)=>setCheckin(e.target.value)} ></input>
            <input type="date" placeholder="Checkout"  onChange={(e)=>setCheckout(e.target.value)}></input>
            <input type="text" placeholder="firstname" onChange={(e)=>setfirstname(e.target.value)}></input>
            <input type="text" placeholder="lastname" onChange={(e)=>setlastname(e.target.value)}></input>

            <button  onClick={add}>Bookings</button>


        </div>

    )

    };

    export default AddItem;