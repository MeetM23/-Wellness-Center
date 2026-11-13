"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "default";
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ variant = "default", size = "md" }) => {
  const isDark = variant === "dark";

  const heightClasses = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-12",
    lg: "h-14 sm:h-16",
  };

  return (
    <Link href="/" className="inline-flex items-center select-none group focus:outline-none">
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
        <Image
          src={isDark ? "/images/brand/raa-logo-dark.png" : "/images/brand/raa-logo.png"}
          alt="રા વેલનેસ સેન્ટર"
          width={240}
          height={85}
          className={`${heightClasses[size]} w-auto object-contain`}
          priority
        />
      </div>
    </Link>
  );
};
