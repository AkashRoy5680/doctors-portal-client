import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
          voluptas obcaecati officia velit asperiores ducimus.
        </p>
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 class="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
