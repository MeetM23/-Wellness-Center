"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle2 } from "lucide-react";
import { ShapeRosetteMandala, ShapeCurvedStar } from "@/components/ui/ShapesGallery";

export const ContactSection: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    goal: "weight-loss",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const goalMap: Record<string, string> = {
      "weight-loss": isGujarati ? "વજન અને ફેટ લોસ" : "Weight & Fat Loss",
      "energy": isGujarati ? "દૈનિક સ્ફૂર્તિ અને સ્ટેમિના" : "Daily Energy & Stamina",
      "skin": isGujarati ? "ત્વચા અને આહાર સુધારો" : "Skin & Vitality",
      "lifestyle": isGujarati ? "કાયમી સ્વસ્થ જીવનશૈલી" : "Healthy Family Habits",
    };

    const text = isGujarati
      ? `નમસ્તે કોચ શક્તિસિંહ,\nહું રા વેલનેસ સેન્ટર પરથી ફ્રી કન્સલ્ટેશન માટે સંપર્ક કરી રહ્યો છું.\n\nનામ: ${formData.name}\nમોબાઈલ: ${formData.phone}\nગામ/શહેર: ${formData.city || "તળાજા / ભાવનગર"}\nલક્ષ્ય: ${goalMap[formData.goal] || formData.goal}\nવિગત: ${formData.note || "માર્ગદર્શન આપવા વિનંતી."}`
      : `Hello Coach Shaktisinh,\nI would like to book a 1-on-1 wellness consultation with રા Wellness Center.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city || "Not specified"}\nPrimary Goal: ${goalMap[formData.goal] || formData.goal}\nMessage: ${formData.note || "Looking forward to guidance."}`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encoded}`;
    setSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 right-6 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeRosetteMandala className="w-56 h-56 text-primary" opacity={0.04} />
      </div>
      <div className="absolute bottom-10 left-6 text-[#D4A373] pointer-events-none hidden sm:block" aria-hidden="true">
        <ShapeCurvedStar className="w-20 h-20 text-[#D4A373]" opacity={0.08} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-label text-terracotta">
            {isGujarati ? "સંપર્ક કરો" : "Get In Touch"}
          </span>
          <h2 className="heading-section mt-2">
            {isGujarati ? (
              <>
                તંદુરસ્ત જીવનની નવી શરૂઆત{" "}
                <span className="text-primary font-semibold">આજે જ કરો.</span>
              </>
            ) : (
              <>
                Take the First Step Toward{" "}
                <span className="text-primary font-semibold">Lifelong Vitality.</span>
              </>
            )}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "તમારા સ્વાસ્થ્ય લક્ષ્યોની ચર્ચા કરવા માટે કોચ શક્તિસિંહ સાથે સીધો સંપર્ક કરો. કોઈ દબાણ કે કડક દવાઓ વિના ૧-ઓન-૧ સાચું માર્ગદર્શન."
              : "Connect directly with Coach Shaktisinh to evaluate your lifestyle and discuss tailored wellness goals."}
          </p>
        </div>

        {/* 2-Column Content: Left Contact Cards, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                isGujarati ? siteConfig.whatsapp.defaultMessageGu : siteConfig.whatsapp.defaultMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex items-center gap-4 group hover:border-primary/50 hover:shadow-soft transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider block">
                  {isGujarati ? "વોટ્સએપ ચેટ" : "Direct WhatsApp"}
                </span>
                <span className="text-base sm:text-lg font-semibold text-charcoal font-sans block mt-0.5">
                  {siteConfig.phoneFormatted}
                </span>
                <span className="text-xs text-primary font-medium">
                  {isGujarati ? "તાત્કાલિક ઉત્તર મળશે" : "Fastest response within 2 hours"}
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-6 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex items-center gap-4 group hover:border-primary/50 hover:shadow-soft transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider block">
                  {isGujarati ? "ફોન કૉલ" : "Phone Call"}
                </span>
                <span className="text-base sm:text-lg font-semibold text-charcoal font-sans block mt-0.5">
                  {siteConfig.phoneFormatted}
                </span>
                <span className="text-xs text-charcoal-muted">
                  {isGujarati ? "સવારે ૮:૦૦ થી રાત્રે ૮:૦૦" : "8:00 AM to 8:00 PM"}
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider block">
                  {isGujarati ? "કેન્દ્રનું સરનામું" : "Center Location"}
                </span>
                <p className="text-[15px] font-sans font-medium text-charcoal mt-1 leading-snug">
                  {isGujarati ? siteConfig.location.addressGujarati : siteConfig.location.address}
                </p>
                <span className="text-xs text-charcoal-muted mt-1 block">
                  {isGujarati ? "તળાજા • ભાવનગર જિલ્લો, ગુજરાત" : "Talaja • Bhavnagar District, Gujarat"}
                </span>
              </div>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-6 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex items-center gap-4 group hover:border-primary/50 hover:shadow-soft transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-soft text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider block">
                  {isGujarati ? "ઈમેઇલ" : "Email"}
                </span>
                <span className="text-[15px] font-semibold text-charcoal font-sans block mt-0.5">
                  {siteConfig.email}
                </span>
              </div>
            </a>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-charcoal-border/80 shadow-soft">
              
              <h3 className="heading-subsection text-charcoal mb-2">
                {isGujarati ? "ફ્રી વેલનેસ કન્સલ્ટેશન ફોર્મ" : "Schedule Free Consultation"}
              </h3>
              <p className="text-sm text-charcoal-muted mb-6">
                {isGujarati
                  ? "તમારી વિગતો ભરો. કોચ શક્તિસિંહ તમારી સાથે વાત કરીને પર્સનલ હેલ્થ ગાઈડન્સ આપશે."
                  : "Fill in your details below. Coach Shaktisinh will contact you with personalized habit guidance."}
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
                  <h4 className="font-sans font-semibold text-lg text-charcoal">
                    {isGujarati ? "આભાર! વોટ્સએપ પર સંદેશ મોકલાયો છે." : "Thank You! Connecting via WhatsApp."}
                  </h4>
                  <p className="text-sm text-charcoal-muted">
                    {isGujarati
                      ? "કોચ શક્તિસિંહ ટૂંક સમયમાં તમને રિપ્લાય આપશે."
                      : "Coach Shaktisinh will reach out shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        {isGujarati ? "તમારું પૂરું નામ *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isGujarati ? "દા.ત. રમેશભાઈ પટેલ" : "e.g. Ramesh Patel"}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-border/80 bg-ivory/40 text-charcoal text-[15px] focus:outline-none focus:border-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        {isGujarati ? "મોબાઈલ નંબર *" : "Mobile Phone *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={isGujarati ? "૧૦ અંકનો મોબાઈલ નંબર" : "10-digit mobile number"}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-border/80 bg-ivory/40 text-charcoal text-[15px] focus:outline-none focus:border-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        {isGujarati ? "ગામ / શહેર" : "City / Village"}
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder={isGujarati ? "તળાજા / ભાવનગર" : "Talaja, Bhavnagar, etc."}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-border/80 bg-ivory/40 text-charcoal text-[15px] focus:outline-none focus:border-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        {isGujarati ? "મુખ્ય લક્ષ્ય" : "Primary Goal"}
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-border/80 bg-ivory/40 text-charcoal text-[15px] focus:outline-none focus:border-primary focus:bg-white transition-all"
                      >
                        <option value="weight-loss">{isGujarati ? "વજન અને ફેટ લોસ" : "Weight & Fat Loss"}</option>
                        <option value="energy">{isGujarati ? "દૈનિક સ્ફૂર્તિ અને સ્ટેમિના" : "Daily Energy & Stamina"}</option>
                        <option value="skin">{isGujarati ? "ત્વચા અને આંતરિક સંતુલન" : "Skin & Vitality"}</option>
                        <option value="lifestyle">{isGujarati ? "કાયમી સ્વસ્થ જીવનશૈલી" : "Healthy Family Habits"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      {isGujarati ? "કોઈ ચોક્કસ પ્રશ્ન કે નોંધ (વૈકલ્પિક)" : "Any Specific Question or Note (Optional)"}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder={isGujarati ? "તમારી હાલની મુશ્કેલી કે સવાલ અહીં લખો..." : "Share your routine, current weight, or any queries..."}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-border/80 bg-ivory/40 text-charcoal text-[15px] focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center !min-h-[50px] text-base gap-2 shadow-xs"
                  >
                    <span>{isGujarati ? "વોટ્સએપ પર કન્સલ્ટેશન મોકલો" : "Send Consultation Request via WhatsApp"}</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>

                  <p className="text-[12px] text-charcoal-muted text-center pt-1">
                    {isGujarati
                      ? "તમારી માહિતી સંપૂર્ણપણે ખાનગી રહેશે. કોઈ અનિચ્છનીય મેસેજ કે સ્પામ કરવામાં આવતો નથી."
                      : "Your personal details are strictly private. Zero spam guaranteed."}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

