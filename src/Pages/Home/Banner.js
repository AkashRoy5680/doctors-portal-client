import React from "react";
import { useNavigate } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  const navigate=useNavigate()
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smiles Starts Here!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton onClick={()=>navigate("/appointment")}>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
