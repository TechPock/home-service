export type Testimonial = {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  title: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Homeowner",
    image: "/images/team/testi1.jpg",
    rating: 5,
    title: "Excellent Service",
    text: "HomePro responded quickly and fixed our plumbing issue the same day. The technician was professional and explained everything clearly.",
  },
  {
    id: "t2",
    name: "Michael Rodriguez",
    role: "Homeowner",
    image: "/images/team/testi2.jpg",
    rating: 5,
    title: "Highly Recommended",
    text: "The electrical panel upgrade was completed on time and within budget. The team was clean, courteous, and left no mess behind.",
  },
  {
    id: "t3",
    name: "Jennifer Chen",
    role: "Homeowner",
    image: "/images/team/testi3.jpg",
    rating: 5,
    title: "Outstanding Work",
    text: "Our AC was making strange noises and they had it fixed in under an hour. The customer service was top-notch from start to finish.",
  },
];
