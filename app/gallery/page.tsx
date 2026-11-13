import { TransformationShowcase } from "@/components/sections/TransformationShowcase";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Results Gallery | રા Wellness Center",
  description:
    "Photo gallery and transformation archive of Raa Wellness Center in Vataliya, Talaja, Bhavnagar.",
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <TransformationShowcase />
      <ContactSection />
    </div>
  );
}

