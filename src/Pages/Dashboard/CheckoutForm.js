import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({appointment}) => {
    const stripe=useStripe();
    const elements=useElements();
    const[cardError,setcardError]=useState("");
    const[success,setSuccess]=useState("");
    const[transactionId,setTransactionId]=useState("");
    const[clientSecret,setClientSecret]=useState("");
    const[processing,setProcessing]=useState(false);

    const{_id,price,patient,patientName}=appointment;

    useEffect( ()=>{
      fetch("http://localhost:5000/create-payment-intend",{
        method:"POST",
        headers:{
          "content-type":"application/json",
          authorization:`Bearer ${localStorage.getItem("accessToken")}`
        },
        body:JSON.stringify({price})
      })

      .then(res=>res.json())
      .then(data=>{
        if(data?.clientSecret){
          setClientSecret(data.clientSecret);
        }
      })

    },[price])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        
    if(!stripe||!elements){
        return;
    }

    const card = elements.getElement(CardElement);

    if(card==null){
        return;
    }

    const {error}=await stripe.createPaymentMethod({
        type:"card",
        card
    });

    setcardError(error?.message||"");
    setSuccess("")

    //confirm card payment
    const {paymentIntent, intendError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email:patient,
          },
        },
      },
    );
    if(intendError){
      setcardError(intendError?.message);
      setProcessing(false)
    }
    else{
      setcardError("");
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent)
      setSuccess("Congrats!Your payment is completed!");
      setProcessing(true);

      //store payment on database
      const payment={
        appointment:_id,
        transactionId:paymentIntent.id
      }
      fetch(`http://localhost:5000/booking/${_id}`,{
        method:"PATCH",
        headers:{
          "content-type":"application/json",
          authorization:`Bearer ${localStorage.getItem("accessToken")}`
        },
        body:JSON.stringify(payment)
      }).then(res=>res.json())
      .then(data=>{
        setProcessing(false)
      })
    }

}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement 
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-warning btn-sm" type="submit" disabled={!stripe||!clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className="text-red-500">{cardError}</p>
    }
    {
        success && <div className="text-green-500">
          <p>{success}</p>
          <p>Your transaction id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
          </div>
    }
    </>
    
  );
};

export default CheckoutForm;
