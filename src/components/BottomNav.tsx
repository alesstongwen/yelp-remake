import React from "react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-3">
      {["Home", "Projects", "Profile", "Collection"].map((item) => (
        <button key={item} className="flex flex-col items-center text-gray-600">
          <span className="text-sm">{item}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
