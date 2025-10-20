import React, { useState, useEffect } from "react";
import Hero1 from "../assets/Hero1.png";
import Hero2 from "../assets/Hero2.jpeg";
import Hero3 from "../assets/Hero3.jpeg";

const images = [Hero1, Hero2, Hero3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-40 md:h-50 relative overflow-hidden shadow-md">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

     
    </div>
  );
}
