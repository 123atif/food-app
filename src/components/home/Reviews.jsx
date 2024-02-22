import React from "react";
import { reviewList } from "../../data";
import Heading from "../common/Heading";
import ReviewCard from "./cards/ReviewCard";

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="Reviews">
      <div className="m-5">
        <Heading Heading={"CUSTOMER'S  REVIEW"} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {reviewList.map((item) => (
          <ReviewCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
