import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "winson henry",
      review: "",
      location: "Uganda",
      img: people1,
    },
    {
      _id: 2,
      name: "winson henry",
      review: "",
      location: "Uganda",
      img: people2,
    },
    {
      _id: 3,
      name: "winson henry",
      review: "",
      location: "Uganda",
      img: people3,
    },
  ];
  return (
    <section class="my-28">
      <div class="flex justify-between">
        <div>
          <h4 class="text-xl text-primary font-bold">Testimonials</h4>
          <div class="text-3xl">what our patients say</div>
        </div>
        <div>
          <img src={quote} alt="" class="w-24 lg:w-48" />
        </div>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
