
import React from "react";
import banner from "../css/banner.css";
import { FaCity} from "react-icons/fa";


function Banner(){
    return(
        <div>

        <div  className="hero">

        <header>
                  <div className="container flex-space">
                    <div className='logo'>
                     <FaCity /><h1>Exotic</h1>
                    </div>

                  </div>
                  <div className="contact flex-space">
                    <div className="box flex_space">
                      <div className="icons">
                        <i className="fal fa-clock"></i>
                      </div>
                    </div>
                  </div>
                 </header>
        
        
        </div>
        
        
        </div>
    )
    }

    export default Banner;

