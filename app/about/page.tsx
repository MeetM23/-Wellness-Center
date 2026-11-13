import { AboutFounder } from "@/components/sections/AboutFounder";
import { WellnessApproach } from "@/components/sections/WellnessApproach";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "About Coach Sarvaiya Shaktisinh Jashubha | રા Wellness Center",
  description:
    "Learn about Coach Sarvaiya Shaktisinh Jashubha, certified wellness mentor and founder of Raa Wellness Center in Vataliya, Talaja, Bhavnagar.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutFounder />
      <WellnessApproach />
      <ContactSection />
    </div>
  );
}

