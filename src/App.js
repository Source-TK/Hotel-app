import React,{useState, useEffect} from 'react';
import About from './Components/About';
import Home from './Components/Home';
import { Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Img from './Components/img';
import signup from './css/signup.css';
import login from './css/login.css';
import navbar from './css/navbar.css';
import Reservations from './Components/Reservations';
import Surroundings from './Components/Surroundings';

import AddItem from './Components/addItem';



import {collection,getDocs} from 'firebase/firestore';


  

function App() {

  const [transaction, setTransaction] = useState([]);

  useEffect(()=>{


  })

  const addBookings = ((firstname, checkin, checkout, )=>{

    setTransaction((item)=>[...item, {
    firstname: firstname,
    checkin: checkin,
    checkout: checkout,


    }])


    
  })


  return (
    <div className="App">
      <navbar/>

      <Routes>
      <Route path="/img" element={<Img />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="reservation" element={<Reservations />} />
        <Route path="" element={<Surroundings/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
