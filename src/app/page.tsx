import React from "react";
import ReviewCard from "@/components/ReviewCard";
import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";

const reviews = [
  {
    user: "Micheal W.",
    caption: "Snapped a photo",
    image: "/burger.jpg",
    restaurant: "Fatburger",
    rating: 3,
    totalReviews: 7,
    status: "Open",
    closingTime: "10 pm",
    price: "CA$10-20",
    highlight: true,
  },
  {
    user: "Natalie W.",
    caption: "Snapped a photo",
    image: "/starbucks.jpg",
    restaurant: "Starbucks",
    rating: 4,
    totalReviews: 15,
    status: "Open",
    closingTime: "11 pm",
    price: "CA$0-10",
    highlight: false,
  },
];

const HomePage = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen p-4">
      <SearchBar />
      <div className="mt-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;
