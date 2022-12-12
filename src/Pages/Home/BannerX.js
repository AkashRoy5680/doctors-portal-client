import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const BannerX = () => {
  return (
    <div className=" min-h-screen my-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:ml-20">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care,on Your Terms
          </h1>
          <p className="py-6">
          We offer a full range of services for your whole family. You can feel confident that Grand Street Dental will meet all your dental needs. We are excited to have your family join ours!
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
          
        <img className="max-w-sm rounded-lg shadow-2xl w-48 lg:w-96 " src={treatment} alt="" />
  </div>
  

    </div>
  );
};

export default BannerX;
