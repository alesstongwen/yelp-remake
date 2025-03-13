"use client";

import React from "react";
import BottomNav from "@/components/BottomNav";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import ReviewCard from "@/components/ReviewCard";

const reviews = [
  {
    user: "Micheal W.",
    userAvatar: "/avatar-michael.svg",
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
    userAvatar: "/avatar-natalie.svg",
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
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen p-4 relative pb-20">
      {/* Header with Yelp Logo */}
      <div className="flex items-center gap-3 mb-4">
        <Image src="/yelp_logo.png" alt="Yelp Logo" width={40} height={40} />
        <h1 className="text-xl font-bold">Find the best local places</h1>
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default HomePage;
