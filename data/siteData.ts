export interface SiteConfig {
  name: string;
  nameGujarati: string;
  brandMonogram: string;
  coachName: string;
  coachNameGujarati: string;
  coachTitle: string;
  coachTitleGujarati: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  location: {
    address: string;
    addressGujarati: string;
    landmark: string;
    landmarkGujarati: string;
    city: string;
    cityGujarati: string;
    taluka: string;
    talukaGujarati: string;
    district: string;
    districtGujarati: string;
    pincode: string;
    state: string;
    stateGujarati: string;
  };
  whatsapp: {
    number: string;
    defaultMessageGu: string;
    defaultMessageEn: string;
  };
  stats: {
    personalFatLoss: string;
    personalFatLossGu: string;
    hoursResponse: string;
    coachingModel: string;
    coachingModelGu: string;
  };
  navigation: {
    label: string;
    gujaratiLabel: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "રા Wellness Center",
  nameGujarati: "રા વેલનેસ સેન્ટર",
  brandMonogram: "રા",
  coachName: "Sarvaiya Shaktisinh Jashubha",
  coachNameGujarati: "સરવૈયા શક્તિસિંહ જશુભા",
  coachTitle: "Certified Wellness Coach & Lifestyle Mentor",
  coachTitleGujarati: "પ્રમાણિત વેલનેસ કોચ અને લાઇફસ્ટાઇલ મેન્ટર",
  phone: "+919510202526",
  phoneFormatted: "+91 95102 02526",
  email: "sshaktisinh43@gmail.com",
  location: {
    address: "At. Vataliya, Talaja, Bhavnagar - 364130, Gujarat",
    addressGujarati: "મુ. વાતળિયા, તળાજા, ભાવનગર - ૩૬૪૧૩૦, ગુજરાત",
    landmark: "Near Talaja Bhavnagar Highway",
    landmarkGujarati: "તળાજા-ભાવનગર રોડ નજીક",
    city: "Vataliya",
    cityGujarati: "વાતળિયા",
    taluka: "Talaja",
    talukaGujarati: "તળાજા",
    district: "Bhavnagar",
    districtGujarati: "ભાવનગર",
    pincode: "364130",
    state: "Gujarat",
    stateGujarati: "ગુજરાત",
  },
  whatsapp: {
    number: "919510202526",
    defaultMessageGu: "નમસ્તે કોચ શક્તિસિંહ, હું રા વેલનેસ સેન્ટર પરથી ફ્રી વેલનેસ અને પોષણ કન્સલ્ટેશન માટે સંપર્ક કરી રહ્યો છું.",
    defaultMessageEn: "Hello Coach Shaktisinh, I would like to book a 1-on-1 personalized wellness consultation with રા Wellness Center.",
  },
  stats: {
    personalFatLoss: "13 kg",
    personalFatLossGu: "૧૩ કિલો",
    hoursResponse: "Within 2 Hours",
    coachingModel: "1-on-1 Dedicated Mentorship",
    coachingModelGu: "૧-ઓન-૧ અંગત માર્ગદર્શન",
  },
  navigation: [
    { label: "Home", gujaratiLabel: "મુખ્ય પૃષ્ઠ", href: "#hero" },
    { label: "Our Approach", gujaratiLabel: "અમારી પદ્ધતિ", href: "#approach" },
    { label: "Results", gujaratiLabel: "પરિણામો", href: "#archive" },
    { label: "Testimonials", gujaratiLabel: "પ્રતિસાદ", href: "#testimonials" },
    { label: "FAQ", gujaratiLabel: "પ્રશ્નોત્તરી", href: "#faq" },
    { label: "Contact", gujaratiLabel: "સંપર્ક", href: "#contact" },
  ],
};

