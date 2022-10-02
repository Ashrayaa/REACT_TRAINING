import React from "react";
import Image from "next/image";
import { Elearningtopnav } from "./Elearningtopnav";
import { Elearningcarousel } from "./Elearningcarousel";
import { Elearningsubjects } from "./Elearningsubjects";
import { Elearningliveclasses } from "./Elearningliveclasses";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Rightpart = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        {/* navigationbar */}
        <Elearningtopnav />
      </div>
      <div>
        <Elearningcarousel />
        {/* carousel */}
      </div>
      <div>{/* subjects */}
      <Elearningsubjects />
      </div>
      <div>{/* liveclasses */}
      <Elearningliveclasses />
      </div>
    </div>
  );
};
