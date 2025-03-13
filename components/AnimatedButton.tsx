"use client";

import { AnimatedButtonProps } from "@/types";

const AnimatedButton = ({ title, color }: AnimatedButtonProps) => {
  return (
    <button
      className={`text-white hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full`}
    >
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default AnimatedButton;
