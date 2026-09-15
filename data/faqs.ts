export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What areas do you service?",
    answer:
      "We serve Downtown, Northside, West End, Riverside, Brookfield, and East Valley, plus surrounding suburbs. Contact us to confirm service availability in your area.",
  },
  {
    id: "2",
    question: "Do you offer emergency services?",
    answer:
      "Yes, we offer 24/7 emergency plumbing, electrical, and HVAC services. Call our emergency line and we'll dispatch a technician as quickly as possible.",
  },
  {
    id: "3",
    question: "How quickly can a technician arrive?",
    answer:
      "Our standard response time is within 2 hours during business hours. Emergency calls are prioritized and typically arrive within 60 minutes.",
  },
  {
    id: "4",
    question: "Do you provide free estimates?",
    answer:
      "Yes, we provide free, no-obligation estimates for all services. Our technicians will assess your needs and provide a transparent quote before any work begins.",
  },
  {
    id: "5",
    question: "Are your technicians licensed?",
    answer:
      "All our technicians are fully licensed, insured, and bonded. We maintain the highest industry certifications for plumbing, electrical, and HVAC work.",
  },
  {
    id: "6",
    question: "What services do you provide?",
    answer:
      "We provide comprehensive plumbing, electrical, and HVAC services for both residential and commercial properties, including repairs, installations, and maintenance.",
  },
  {
    id: "7",
    question: "Do you provide maintenance services?",
    answer:
      "Yes, we offer annual maintenance plans for HVAC systems, plumbing inspections, and electrical safety checks to keep your home running efficiently year-round.",
  },
];
