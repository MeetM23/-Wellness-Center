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

  // Generous, prominent logo heights so Gujarati calligraphy is clearly legible
  const heightClasses = {
    sm: "h-10 sm:h-11 md:h-12",
    md: "h-13 sm:h-15 md:h-16 lg:h-[66px]",
    lg: "h-16 sm:h-20 md:h-24",
  };

  return (
    <Link href="/" className="inline-flex items-center select-none group focus:outline-none">
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
        <Image
          src={isDark ? "/images/brand/raa-logo-dark.png" : "/images/brand/raa-logo.png"}
          alt="રા વેલનેસ સેન્ટર"
          width={280}
          height={95}
          className={`${heightClasses[size]} w-auto object-contain`}
          priority
        />
      </div>
    </Link>
  );
};
