export interface Service {
  num: string;
  title: string;
  desc: string;
  price: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Full detail",
    desc: "Inside and out, cars to 4WDs",
    price: "$180 / $200",
  },
  {
    num: "02",
    title: "Paint polishing",
    desc: "Gloss restored, swirls reduced",
    price: "+$80 / +$100",
  },
  {
    num: "03",
    title: "Interior deep clean",
    desc: "Vacuum, seats, trim, deodorise",
    price: "From $120",
  },
  {
    num: "04",
    title: "Wash & maintain",
    desc: "Regular upkeep between details",
    price: "From $60",
  },
];

/* Edge-to-edge image tiles for the services strip */
export interface Tile {
  num: string;
  title: string;
  line: string;
  tone: string; // css background for the "photo"
  sheen: number;
  src?: string; // optional photo for the tile
}

export const tiles: Tile[] = [
  {
    num: "01",
    title: "Basic Clean",
    line: "Afforable interior & exterior detail",
    tone: "radial-gradient(130% 100% at 25% 0%, #2b3d50 0%, #131c27 48%, #0b1017 78%)",
    sheen: 118,
    src: "/basic.jpeg",
  },
  {
    num: "02",
    title: "Paint polishing",
    line: "Cut, refine, protect the clear coat",
    tone: "radial-gradient(130% 100% at 78% 8%, #1d4a76 0%, #12263b 46%, #0a0f16 80%)",
    sheen: 96,
    src: "/badge.jpeg",
  },
  {
    num: "03",
    title: "full detail",
    line: "Full interior & exterior detail",
    tone: "radial-gradient(130% 100% at 35% 100%, #3a2c25 0%, #1a1512 46%, #0b0b0e 80%)",
    sheen: 74,
    src: "/interior.jpeg",
  },
  {
    num: "04",
    title: "Wheels & tyres",
    line: "Barrels, faces, arches, dressed",
    tone: "radial-gradient(130% 100% at 68% 18%, #1c3646 0%, #121f29 46%, #0a0e13 80%)",
    sheen: 130,
    src: "/tyre.jpg",
  },
];

export const exterior: string[] = [
  "Full hand wash",
  "Wheel & tyre deep clean",
  "Tyre shine dressing",
  "Door jamb cleaning",
  "Fuel cap area cleaned",
  "Exterior windows cleaned",
  "Spray wax protection",
];

export const interior: string[] = [
  "Full interior vacuum",
  "Floor mats cleaned & washed",
  "Dashboard & trim cleaned",
  "Centre console deep clean",
  "Cup holders scrubbed",
  "Door panels cleaned",
  "Seat surfaces cleaned",
  "Interior windows cleaned",
  "Deodoriser treatment",
  "All surface protectant",
];

export interface ServicePackage {
  name: string;
  tagline: string;
  carPrice: string;
  suvPrice: string;
  exterior: string[];
  interior: string[];
}

export const servicePackages: ServicePackage[] = [
  {
    name: "Full Detail",
    tagline: "Complete care. Inside & out.",
    carPrice: "$180",
    suvPrice: "$200",
    exterior: [
      "Full hand wash",
      "Wheel & tyre deep clean",
      "Tyre shine dressing",
      "Door jamb cleaning",
      "Fuel cap area cleaned",
      "Exterior windows cleaned",
      "Spray wax protection (avg 4 weeks)",
    ],
    interior: [
      "Full interior vacuum",
      "Floor mats cleaned & washed",
      "Dashboard & trim surfaces cleaned",
      "Centre console deep clean",
      "Cup holders scrubbed",
      "Door panels cleaned",
      "Seat surfaces cleaned",
      "Interior windows cleaned",
      "Deodoriser treatment",
      "All surface protectant (avg 4 weeks)",
    ],
  },
  {
    name: "Basic Clean",
    tagline: "Affordable maintenance clean to keep your vehicle fresh and tidy.",
    carPrice: "$60",
    suvPrice: "$80",
    exterior: [
      "Simple hand wash",
      "Rinse & dry",
      "Light wheel clean",
      "Exterior windows cleaned",
    ],
    interior: [
      "Quick vacuum",
      "Light wipe-down of surfaces",
      "Cup holders cleaned",
      "Interior windows cleaned",
      "All rubbish removed",
    ],
  },
];

export interface Feature {
  title: string;
  line: string;
}

export const features: Feature[] = [
  { title: "same standard", line: "Same high quality finish every booking" },
  { title: "Mobile service", line: "We come to you, Auckland-wide" },
  { title: "Same-day", line: "full detail in a day" },
];

export interface Stat {
  n: number;
  label: string;
}

export const stats: Stat[] = [
  { n: 1400, label: "Cars detailed" },
  { n: 6, label: "Years detailing" },
  { n: 480, label: "Repeat clients" },
  { n: 5, label: "Star rating" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Picked it up looking better than the day I bought it. Booked the next one before I left.",
    name: "Marcus T.",
    role: "Full detail + polish",
  },
  {
    quote:
      "They came to the house, worked out of the van, and the interior looks brand new.",
    name: "Priya S.",
    role: "Interior deep clean",
  },
  {
    quote:
      "Six months on and the paint still beads. Worth every dollar of the polish add-on.",
    name: "Dan W.",
    role: "Full detail + polish",
  },
];

export interface Article {
  tag: string;
  date: string;
  title: string;
}

export const articles: Article[] = [
  {
    tag: "Care",
    date: "Aug 2026",
    title: "How often a daily driver actually needs a full detail",
  },
  {
    tag: "Paint",
    date: "Jul 2026",
    title: "Swirl marks: what causes them and what a polish can fix",
  },
  {
    tag: "Interior",
    date: "Jun 2026",
    title: "Getting pet hair out of upholstery without wrecking it",
  },
];
