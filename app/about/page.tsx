import { WellnessApproach } from "@/components/sections/WellnessApproach";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "About Our Approach | રા Wellness Center",
  description:
    "Learn about the personalized lifestyle methodology at રા Wellness Center in Vataliya, Talaja, Bhavnagar.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <WellnessApproach />
      <ContactSection />
    </div>
  );
}
