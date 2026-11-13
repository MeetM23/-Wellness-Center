export interface TransformationItem {
  id: string;
  title: string;
  gujaratiTitle: string;
  category: "weight-loss" | "weight-management" | "lifestyle" | "vitality";
  categoryLabel: string;
  gujaratiCategoryLabel: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  startingMeasurement?: {
    labelEn: string;
    labelGu: string;
    valueEn: string;
    valueGu: string;
  };
  achievedMeasurement?: {
    labelEn: string;
    labelGu: string;
    valueEn: string;
    valueGu: string;
  };
  highlightResult: {
    en: string;
    gu: string;
  };
  featured: boolean;
  description: string;
  gujaratiDescription: string;
}

export const transformations: TransformationItem[] = [
  {
    id: "journey-01-shaktisinh-fatloss-13kg",
    title: "13 kg Personal Fat Loss: 85 kg to 72 kg",
    gujaratiTitle: "૮૫ કિલો થી ૭૨ કિલો – ૧૩ કિલો અંગત વજન અને ફેટ લોસ",
    category: "weight-loss",
    categoryLabel: "Weight Loss & Energy",
    gujaratiCategoryLabel: "વજન ઘટાડો અને ઊર્જા",
    image: "/images/transformations/transformation-1-shaktisinh-fatloss-13kg.jpg",
    beforeImage: "/images/transformations/split/transformation-1-shaktisinh-fatloss-13kg-before.jpg",
    afterImage: "/images/transformations/split/transformation-1-shaktisinh-fatloss-13kg-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "85 kg",
      valueGu: "૮૫ કિલો",
    },
    achievedMeasurement: {
      labelEn: "Achieved Weight",
      labelGu: "મેળવેલ વજન",
      valueEn: "72 kg",
      valueGu: "૭૨ કિલો",
    },
    highlightResult: {
      en: "-13 kg Personal Fat Loss",
      gu: "-૧૩ કિલો અંગત ફેટ લોસ",
    },
    featured: true,
    description:
      "Coach Sarvaiya Shaktisinh's own lifestyle transformation. Overcoming daily lethargy and excess weight through structured hydration, balanced home nutrition, and consistent daily movement.",
    gujaratiDescription:
      "કોચ સરવૈયા શક્તિસિંહની પોતાની અંગત સફર. કોઈ ભૂખમરા વિના યોગ્ય પોષણ, નિયમિત પાણી અને સંતુલિત દિનચર્યાથી ૮૫ કિલોથી ૭૨ કિલો પહોંચીને ઊર્જાવાન જીવન મેળવ્યું.",
  },
  {
    id: "journey-02-weightloss-20kg",
    title: "20 kg Milestone: 78 kg to 58 kg Transformation",
    gujaratiTitle: "૭૮ કિલો થી ૫૮ કિલો – ૨૦ કિલો વજન ઘટાડાની સફર",
    category: "weight-loss",
    categoryLabel: "Weight Loss Journeys",
    gujaratiCategoryLabel: "વજન ઘટાડાની સફર",
    image: "/images/transformations/transformation-2-weightloss-20kg.jpg",
    beforeImage: "/images/transformations/split/transformation-2-weightloss-20kg-before.jpg",
    afterImage: "/images/transformations/split/transformation-2-weightloss-20kg-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "78 kg",
      valueGu: "૭૮ કિલો",
    },
    achievedMeasurement: {
      labelEn: "Achieved Weight",
      labelGu: "મેળવેલ વજન",
      valueEn: "58 kg",
      valueGu: "૫૮ કિલો",
    },
    highlightResult: {
      en: "-20 kg Sustainable Reduction",
      gu: "-૨૦ કિલો સફળ ઘટાડો",
    },
    featured: true,
    description:
      "A complete wellness transition from 78 kg down to 58 kg. Achieved with clean dietary rhythm, balanced hydration, and 1-on-1 mentorship without harsh crash diets.",
    gujaratiDescription:
      "૭૮ કિલોથી ૫૮ કિલો સુધીનું પ્રેરણાદાયી પરિવર્તન. ઘરના સાત્વિક ભોજન સાથે યોગ્ય પોષણ અને નિયમિત માર્ગદર્શન દ્વારા ૨૦ કિલો વજન ઘટાડીને સ્ફૂર્તિ પાછી મેળવી.",
  },
  {
    id: "journey-03-mens-fatloss-12kg",
    title: "12 kg Reduction: 86 kg to 74 kg Fitness Journey",
    gujaratiTitle: "૮૬ કિલો થી ૭૪ કિલો – ૧૨ કિલો ફિટનેસ અને વજન નિયંત્રણ",
    category: "weight-loss",
    categoryLabel: "Men's Wellness",
    gujaratiCategoryLabel: "પુરુષોની ફિટનેસ",
    image: "/images/transformations/transformation-3-mens-fatloss-12kg.jpg",
    beforeImage: "/images/transformations/split/transformation-3-mens-fatloss-12kg-before.jpg",
    afterImage: "/images/transformations/split/transformation-3-mens-fatloss-12kg-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "86 kg",
      valueGu: "૮૬ કિલો",
    },
    achievedMeasurement: {
      labelEn: "Achieved Weight",
      labelGu: "મેળવેલ વજન",
      valueEn: "74 kg",
      valueGu: "૭૪ કિલો",
    },
    highlightResult: {
      en: "-12 kg Waistline Trimming",
      gu: "-૧૨ કિલો કમરની ચરબી ઘટાડો",
    },
    featured: true,
    description:
      "Targeted abdominal fat reduction and endurance revival. Moving from 86 kg to a lean 74 kg with simple daily walking and mindful protein-carbohydrate balance.",
    gujaratiDescription:
      "પેટની વધારાની ચરબી અને વજનમાં ૧૨ કિલોનો ઉત્તમ ઘટાડો. સરળ દૈનિક વૉકિંગ અને સંતુલિત આહાર શૈલીથી આખો દિવસ ઉર્જાવાન રહેવાની નવી ટેવ વિકસી.",
  },
  {
    id: "journey-04-facial-vitality-skin",
    title: "Skin Clarity & Natural Cellular Rejuvenation",
    gujaratiTitle: "ત્વચાની કુદરતી તાજગી અને ખીલની સમસ્યામાં સુધારો",
    category: "vitality",
    categoryLabel: "Skin & Vitality",
    gujaratiCategoryLabel: "ત્વચા અને આંતરિક ઊર્જા",
    image: "/images/transformations/transformation-4-facial-vitality-skin.jpg",
    beforeImage: "/images/transformations/transformation-4-facial-vitality-skin.jpg",
    afterImage: "/images/transformations/transformation-4-facial-vitality-skin.jpg",
    startingMeasurement: {
      labelEn: "Skin State",
      labelGu: "શરૂઆતની સ્થિતિ",
      valueEn: "Acne & Dullness",
      valueGu: "ખીલ અને નિસ્તેજ ત્વચા",
    },
    achievedMeasurement: {
      labelEn: "Achieved State",
      labelGu: "હાલની સ્થિતિ",
      valueEn: "Clear & Vibrant",
      valueGu: "સ્વચ્છ અને તેજસ્વી",
    },
    highlightResult: {
      en: "Visible Clarity & Freshness",
      gu: "ત્વચામાં કુદરતી નિખાર",
    },
    featured: false,
    description:
      "Addressing skin breakout triggers from within through optimal cellular hydration, antioxidant-rich nutrition, and digestive balance.",
    gujaratiDescription:
      "આંતરિક પાચન શુદ્ધિ અને પર્યાપ્ત હાઇડ્રેશન દ્વારા ચહેરા પરના ખીલ અને ડાઘમાં સુંદર સુધારો તથા ત્વચામાં કુદરતી ચમક.",
  },
];

