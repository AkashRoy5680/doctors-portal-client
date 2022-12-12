import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
import { useNavigate } from "react-router-dom";
const MakeAppointment = () => {
  const navigate=useNavigate();
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      class="flex justify-center items-center"
    >
      <div class="flex-1 hidden lg:block">
        <img class="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div class="flex-1 px-5">
        <h3 class="text-xl text-primary">Appointment</h3>
        <h2 class="text-3xl py-5 text-secondary">Make an appointment today</h2>
        <p class="text-white pb-5">
        At Mayo Clinic, our mission is to offer a more convenient way to find and access healthcare online. We make it easy to find a doctor, book an appointment, and see a doctor sooner.
        </p>
        <PrimaryButton onClick={()=>navigate('/appointment')}>Let Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
