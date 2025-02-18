"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/adph-logo.png";
import Cover from "../../../public/assets/hero-section-cover.png";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const tiltX =
    ((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 45;
  const tiltY =
    ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * -45;

  const moveX = (mousePosition.x - window.innerWidth / 2) * 0.05;
  const moveY = (mousePosition.y - window.innerHeight / 2) * 0.05;

  return (
    <div className="flex flex-col items-start justify-center gap-4 container">
      {/* Header Logo */}
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center relative min-h-80 w-full overflow-hidden">
          <div className="absolute inset-0 z-[-1] rounded-sm">
            <Image
              src={Cover}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div
            className=""
            style={{
              transform: `perspective(500px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateX(${moveX}px) translateY(${moveY}px)`,
              transition: "transform 0.1s ease-out",
              pointerEvents: "none",
            }}
          >
            <Image src={Logo} alt="Logo" className="w-60 md:w-80" />
          </div>
        </div>
      </div>

      {/* Header Texts */}
      <div className="uppercase flex flex-col items-start leading-none">
        <h1 className="text-[65px] sm:text-[126px] flex gap-x-4 flex-wrap">
          <span className="font-bold text-[#00878F]">Arduino</span>{" "}
          <span className="font-bold text-[#E47128]">Day</span>{" "}
          <span className="text-[#00878F]">2025</span>
        </h1>
        <h1 className="font-bold text-[50px] sm:text-[96px] text-accent">
          Philippines
        </h1>
      </div>
    </div>
  );
};
