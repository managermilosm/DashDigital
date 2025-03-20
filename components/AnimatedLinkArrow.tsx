import { AnimatedLAProps } from "@/types";
import React from "react";

const AnimatedLinkArrow = ({ title }: AnimatedLAProps) => {
  return (
    <button className="flex flex-row items-center gap-[5px] relative white hover:text-projectblue transition-all transform duration-300 ease-in-out font-bold after:content-[''] after:absolute after:bg-projectblue after:h-[4px] after:w-[0%] after:left-0 after:-bottom-[7px] after:-skew-x-6 hover:after:w-[100%] after:ease-out after:transform after:transition-all hover:after:duration-700">
      {title}{" "}
      <img
        className="arrow-horizontal w-[16px] h-[12px]"
        src="arrow_right_alt.svg"
        alt="#"
      />
    </button>
  );
};

export default AnimatedLinkArrow;
