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

  // Responsive scaling: perfectly proportioned on mobile screens (42px) without crowding right controls, expanding on desktop (up to 62px)
  const heightClasses = {
    sm: "h-8 sm:h-9 md:h-10",
    md: "h-[42px] sm:h-[48px] md:h-[54px] lg:h-[62px]",
    lg: "h-14 sm:h-18 md:h-22",
  };

  return (
    <Link
      href="/"
      className="inline-flex items-center select-none group focus:outline-none shrink-0"
      aria-label="રા વેલનેસ સેન્ટર Home"
    >
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
        <Image
          src={isDark ? "/images/brand/raa-logo-dark.png" : "/images/brand/raa-logo.png"}
          alt="રા વેલનેસ સેન્ટર"
          width={280}
          height={100}
          className={`${heightClasses[size]} w-auto max-w-[170px] sm:max-w-[220px] md:max-w-none object-contain block`}
          priority
        />
      </div>
    </Link>
  );
};
