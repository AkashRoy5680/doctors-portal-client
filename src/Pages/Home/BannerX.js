import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const BannerX = () => {
  return (
    <div class="hero min-h-screen my-28">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care,on Your Terms
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default BannerX;
