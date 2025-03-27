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
  const selectedColor = colorMap[color] || colorMap.blue;
  return (
    <button
      className={`relative z-100 -skew-x-6 text-white overflow-hidden bg-transparent px-3 h-[24px] w-auto transition-all  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0  before:h-full before:w-[4px] before:transition-all  before:duration-500 before:ease-in-out hover:before:w-full  hover:text-white hover:before:left-0 ${selectedColor.hover} ${selectedColor.border}`}
    >
      <span className="relative z-10">
        <p className="text-[16px] z-1 skew-x-6">{title}</p>
      </span>
    </button>
  );
};

export default AnimatedButton;

//dodat je px-3 na button, znaci padding na vertikalnoj osi, obratiti paznju!
