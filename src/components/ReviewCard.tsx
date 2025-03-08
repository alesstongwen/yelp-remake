import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center gap-2">
        <span className="font-bold">{review.user}</span>
        <span className="text-gray-500 text-sm">{review.caption}</span>
      </div>
      <div
        className={`mt-2 rounded-lg overflow-hidden border-2 ${
          review.highlight ? "border-purple-500" : "border-transparent"
        }`}
      >
        <img src={review.image} alt={review.restaurant} className="w-full" />
      </div>
      <h3 className="font-bold mt-2">{review.restaurant}</h3>
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < review.rating ? "text-yellow-400" : "text-gray-300"
            }
          />
        ))}
        <span className="text-sm text-gray-500">
          ({review.totalReviews} reviews)
        </span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
        <span className="text-green-600 font-bold">{review.status}</span>
        <span>Closes {review.closingTime}</span>
        <span>{review.price}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
