import { TransformationShowcase } from "@/components/sections/TransformationShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Transformation Archive | રા Wellness Center",
  description:
    "Explore authentic client transformations and lifestyle results achieved through 1-on-1 coaching with Coach Shaktisinh at Raa Wellness Center.",
};

export default function TransformationsPage() {
  return (
    <div className="pt-20">
      <TransformationShowcase />
      <Testimonials />
      <ContactSection />
    </div>
  );
}

