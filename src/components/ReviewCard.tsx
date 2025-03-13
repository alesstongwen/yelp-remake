import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Review {
  user: string;
  userAvatar: string;
  caption: string;
  image: string;
  restaurant: string;
  rating: number;
  totalReviews: number;
  status: string;
  closingTime: string;
  price: string;
  highlight: boolean;
}

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-4 border border-gray-200">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={review.userAvatar}
          alt={review.user}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <span className="font-bold text-black">{review.user}</span>
          <span className="text-gray-500 text-sm block">{review.caption}</span>
        </div>
      </div>

      {/* Image with Border Highlight */}
      <div
        className={`rounded-lg overflow-hidden border-2 ${
          review.highlight ? "border-purple-500" : "border-transparent"
        }`}
      >
        <Image
          src={review.image}
          alt={review.restaurant}
          width={400}
          height={300}
          className="w-full h-auto"
        />
      </div>

      {/* Title + Status/Closing Time/Price (Now Right Below Title) */}
      <div className="flex justify-between items-start mt-3">
        {/* Restaurant Name */}
        <h3 className="font-bold text-lg">{review.restaurant}</h3>

        {/* Status, Closing Time, and Price - Now Moved Up */}
        <div className="flex flex-col items-end text-right text-sm">
          <span className="font-bold" style={{ color: "#4B8C23 !important" }}>
            Open
          </span>
          <span className="text-gray-600">Closes {review.closingTime}</span>
          <span className="text-black font-medium">{review.price}</span>
        </div>
      </div>

      {/* Star Ratings (Now Below Title Section) */}
      <div className="flex items-center gap-2 mt-2">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < review.rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill={index < review.rating ? "#FACC15" : "none"}
          />
        ))}
        <span className="text-sm text-gray-500">
          ({review.totalReviews} reviews)
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
