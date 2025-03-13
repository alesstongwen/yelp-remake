"use client";

import React from "react";
import BottomNav from "@/components/BottomNav";
import Image from "next/image";
import {
  Sparkles,
  Truck,
  Home,
  Wrench,
  Plug,
  Car,
  Hammer,
  MoreHorizontal,
} from "lucide-react";

const services = [
  { name: "Movers", icon: Truck, description: "Help moving" },
  { name: "Home Cleaning", icon: Home, description: "House cleaning" },
  { name: "Plumbers", icon: Wrench, description: "Fix pipes" },
  { name: "Appliance Repair", icon: Plug, description: "Fix appliances" },
  { name: "Electricians", icon: Plug, description: "Electrical work" },
  { name: "Auto Detailing", icon: Car, description: "Car cleaning" },
  { name: "Contractors", icon: Hammer, description: "Home projects" },
  { name: "More", icon: MoreHorizontal, description: "More services" },
];

const projects = [
  {
    title: "Upgrade Your Kitchen",
    image: "./kitchen.jpg",
    buttonText: "Find kitchen pros",
  },
  {
    title: "Spruce Up Your Curb Appeal",
    image: "./curbs.jpg",
    buttonText: "Find landscaping pros",
  },
];

const ProjectsPage = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen p-4 relative pb-20">
      {/* Header with Yelp Logo */}
      <div className="flex items-center gap-3 mb-4">
        <Image src="/yelp_logo.png" alt="Yelp Logo" width={40} height={40} />
        <h1 className="text-xl font-bold">Hire a local pro today</h1>
      </div>

      {/* Swipeable Services Row with Closer Icons */}
      <div className="overflow-x-auto whitespace-nowrap py-4">
        <div className="flex gap-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center min-w-[70px] text-center"
            >
              <service.icon size={28} className="text-gray-700 mb-1" />
              <span className="text-[10px] text-gray-500">
                {service.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Section */}
      <h2 className="text-lg font-bold mb-2">
        Make your home your happy place
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <button className="w-full bg-red-500 text-white py-2 rounded-lg mt-3">
                {project.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating AI Button - Positioned Above Nav */}
      <button className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center">
        <Sparkles className="mr-2" size={20} />
        Find the right pro with AI
      </button>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default ProjectsPage;
