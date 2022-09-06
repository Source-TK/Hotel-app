
import React from "react";
import Navbar from '../Components/Navbar';
import Banner from "../Components/banner"
import { FaCity } from "react-icons/fa";

import Rooms from '../Components/img';
import Surroundings from "./Surroundings";


const Home = () => {

    return (
    
    <div className="element">
    
                 <Navbar />
                 <Banner/>
                 <Rooms />
                 <Surroundings />



     </div>


     )
       


  };
  export default Home;