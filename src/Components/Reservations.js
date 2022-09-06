
import Rooms from "./img";
import React from "react";

function Reservations (){
    return (
        <div className="form">

            <h1 style={{paddingLeft:"30%"}}>Reservations-Form</h1>  <br></br>

            <div className="box-form"/>

        <label style={{paddingLeft:"3%",}}>Check-in:</label>

            <input   type="date"   placeholder="Check-in"/>
            <br></br>
            <label>Check-out:</label>
            <input   type="date"   placeholder="Check-out"/> 
            <input   type="text "  placeholder="Enter first-name"/>
            <input   type="text "  placeholder="Enter last-name"/>


            
            <button style={{marginTop: "25px"}}>Bookings</button>


        </div>
    )
}

export default Reservations;