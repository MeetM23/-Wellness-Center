import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata = {
  title: "Contact Us | રા Wellness Center",
  description:
    "Contact Coach Sarvaiya Shaktisinh Jashubha at Raa Wellness Center in Vataliya, Talaja, Bhavnagar. Phone: +91 95102 02526.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
      <FAQSection />
    </div>
  );
}

