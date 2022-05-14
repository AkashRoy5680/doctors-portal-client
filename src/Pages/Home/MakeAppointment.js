import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const MakeAppointment = () => {
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
        <h2 class="text-3xl py-5">Make an appointment today</h2>
        <p class="text-white pb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          modi explicabo repellat, perferendis odio architecto dignissimos
          repudiandae ipsam perspiciatis et dolorem qui tempora blanditiis ab
          rem a, sint ullam exercitationem.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
