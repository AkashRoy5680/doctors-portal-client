import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1LltCEg6UekNPEfJLameF1ypM1r5CQmxPIGxBOLz7Zbrjir7qugab9yhSfQM21I7KTGkvW01qqBYSvBBQx9SBw00SIvAh7nw"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://doctors-portal-server-afgw.onrender.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 class="card-title">pay for {appointment.treatment}</h2>
          <p>
            Your appointment{" "}
            <span className="text-orange-700"> {appointment.date}</span> at{" "}
            {appointment.slot}{" "}
          </p>
          <p>please pay for ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <div class="card-body"></div>
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
