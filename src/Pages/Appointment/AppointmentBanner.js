import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date,setDate}) => {
  return (
    <div class=" max-w-lg mx-auto">
      <div class="hero-content flex-col md:flex lg:flex-row-reverse ">
       <div className="md:shrink-0">
       <img
          src={chair}
         class="h-48 w-full md:h-full md:w-96" alt=""
        /> 
       </div>
        <div >
        <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
