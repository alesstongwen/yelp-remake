import React from "react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-[#D9D9D9] shadow-md py-3 flex justify-around">
      {["Home", "Projects", "Profile", "Collection"].map((item) => (
        <button
          key={item}
          className="flex flex-col items-center text-gray-600 px-4"
        >
          <span className="text-sm">{item}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
