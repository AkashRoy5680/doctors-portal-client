import React from "react";
import { useNavigate } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  const navigate=useNavigate()
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img className="max-w-sm rounded-lg shadow-2xl w-48 lg:w-96" src={chair} alt="" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smiles Starts Here!</h1>
          <p class="py-6">
          Treatment at Mayo Clinic is a truly human experience. You're cared for as a person first.All of our patient care, education and research are driven to make discoveries that can help heal you.
          </p>
          <PrimaryButton onClick={()=>navigate("/appointment")}>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
