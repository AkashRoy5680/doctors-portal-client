import React from "react";

const Service = ({ service,setTreatment }) => {
    const{name,slots,price}=service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body  items-center">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>{
        slots.length
        ?<span>{slots[0]}</span>
        :<span class="text-red-500">No Slots Available !</span>
        }</p>
        <p>{slots.length} {slots.length >1 ? "spaces":"space"} available</p>
        <p><small>price:${price}</small></p>
        <div class="card-actions">
       <label 
        htmlFor="booking-modal"
        disabled={slots.length===0} 
        onClick={()=>setTreatment(service)}
       class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
