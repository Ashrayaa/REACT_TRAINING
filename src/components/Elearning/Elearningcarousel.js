import Image from "next/image";
import Carousel1 from "/public/carousel1.png";
import Carousel2 from "/public/carousel2.png";
import Carousel3 from "/public/carousel3.png";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Elearningcarousel = () => {
  return (
    <div className="flex ml-72 p-10 mr-12">
      <Carousel autoPlay>
        <div>
          <Image src={Carousel1} />
        </div>
        <div>
          <Image src={Carousel2} />
        </div>
        <div>
          <Image src={Carousel3} />
        </div>
      </Carousel>
    </div>
  );
};
