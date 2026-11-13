"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const message = isGujarati
    ? siteConfig.whatsapp.defaultMessageGu
    : siteConfig.whatsapp.defaultMessageEn;

  const waUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;

  if (!visible) return null;

  return (
    <aside
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 group select-none animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Coach Shaktisinh on WhatsApp"
        className="relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lifted transition-all duration-300 hover:scale-105 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 fill-current" />
        
        <span className="font-sans font-medium text-xs sm:text-sm tracking-wide hidden sm:inline-block">
          {isGujarati ? "વોટ્સએપ પર વાત કરો" : "Chat on WhatsApp"}
        </span>
      </a>
    </aside>
  );
};

