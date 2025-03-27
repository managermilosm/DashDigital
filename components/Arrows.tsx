import { AnimatedLAProps, ArrowProps } from "@/types";
import React from "react";

const AnimatedArrowLarge = ({ className, strokeWidth }: ArrowProps) => {
  return (
    <svg
      className="arrow transition-all duration-200 ease-in-out"
      width="50"
      height="50"
      viewBox="0 0 50 11.15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="arrow-path transition-all duration-200 ease-in-out"
        d="M1 5.5H35 L30 2.5L32 1L40 5.5L32 10L30 8.5L35 5.5H1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="34 50"
        strokeDashoffset="0"
      />
      <path
        className="transition-all duration-200 ease-in-out"
        d="M32 0 L38 5.5 L32 11"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default function ButtonWithArrow() {
  return (
    <button className="relative flex items-center gap-2 px-4 py-2 border border-black transition-all duration-200 group">
      Hover Me
      <div className="group-hover:translate-x-2 transition-all duration-200">
        <AnimatedArrowLarge />
      </div>
    </button>
  );
}

export { AnimatedArrowLarge, ButtonWithArrow };
