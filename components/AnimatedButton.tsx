"use client";

import { AnimatedButtonProps } from "@/types";

const colorMap = {
  blue: {
    border: "before:bg-projectblue",
    hover: "hover:before:bg-projectblue",
  },
  orange: {
    border: "before:bg-projectorange",
    hover: "hover:before:bg-projectorange",
  },
  purple: {
    border: "before:bg-projectpurple",
    hover: "hover:before:bg-projectpurple",
  },
};

const AnimatedButton = ({ title, color }: AnimatedButtonProps) => {
  const selectedColor = colorMap[color] || colorMap.blue; // Default to blue if no valid color is provided
  return (
    <button
      className={`-skew-x-6 text-white ${selectedColor.hover} relative h-[24px] w-auto overflow-hidden bg-transparent px-3  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-[4px] ${selectedColor.border} before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full`}
    >
      <span className="relative z-10 transform-none">
        <p className="text-[16px] skew-x-6">{title}</p>
      </span>
    </button>
  );
};

export default AnimatedButton;

//dodat je px-3 na button, znaci padding na vertikalnoj osi, obratiti paznju!
