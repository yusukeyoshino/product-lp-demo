export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  detailsSection: { title: string; description: string; imageAlt: string };
  buyNowSection: {
      price: string;
      unit: string;
      processingParams: string[];
      deliveryPromise: string;
      returnPolicy: string;
  };
}

export const products: Product[] = [
  {
    id: "formula-one",
    name: "Formula One",
    subName: "Blue Urethane",
    price: "$45.00",
    description: "The smoothest, fastest, and most durable wheel ever poured. Experience the next generation of uncompromised speed, grip, and flatspot resistance.",
    folderPath: "/images/",
    themeColor: "#38BDF8", // Bright Sky Blue
    gradient: "from-[#38BDF8] to-[#EFF0FA]",
    features: ["Resists Flatspots", "Unmatched Control", "High Rebound"],
    stats: [
      { label: "Durometer", val: "101A" },
      { label: "Size", val: "54mm" },
      { label: "Shape", val: "Radial Full" }
    ],
    section1: { title: "PURE FORMULA.", subtitle: "A leap forward in true urethane technology." },
    section2: { title: "UNCOMPROMISED SPEED.", subtitle: "Engineered for maximum velocity on rough concrete." },
    section3: { title: "UNMATCHED GRIP.", subtitle: "Holding the line in the bowl or the streets." },
    section4: { title: "NEVER FLAT.", subtitle: "A ride that stays smooth, session after session." },
    detailsSection: { 
      title: "Built To Burn", 
      description: "Every wheel is poured with our proprietary high-rebound compound, rigorously tested by the world's best skaters to completely eliminate flatspots and chunking.", 
      imageAlt: "Spitfire Radial Details" 
    },
    buyNowSection: {
      price: "$45.00",
      unit: "Set of 4",
      processingParams: ["101A Durometer", "Radial Full Shape", "Fastest Urethane"],
      deliveryPromise: "Free Shipping on orders over $50",
      returnPolicy: "30-Day Ride Guarantee"
    }
  }
];
