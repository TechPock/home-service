export type Service = {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  image: string;
  href: string;
  number: string;
  features: string[];
  subServices: { title: string; desc: string }[];
};

export const services: Service[] = [
  {
    id: "plumbing",
    title: "Plumbing",
    shortDesc: "From leaks and clogged drains to pipe repairs and installations, our plumbing experts keep your home running smoothly.",
    description:
      "From leaks and clogged drains to pipe repairs and installations, our plumbing experts keep your home running smoothly.",
    icon: "plumbing-icon",
    image: "/images/service-plumbing.jpg",
    href: "/services/plumbing",
    number: "01",
    features: [
      "Leak Detection & Repair",
      "Drain Cleaning & Unclogging",
      "Pipe Repair & Replacement",
      "Water Heater Installation & Repair",
      "Fixture Installation",
      "Emergency 24/7 Service",
    ],
    subServices: [
      {
        title: "Leak Repair",
        desc: "Fast detection and repair of leaks to prevent water damage to your home.",
      },
      {
        title: "Drain Cleaning",
        desc: "Professional drain cleaning using advanced equipment to clear blockages.",
      },
      {
        title: "Pipe Repair",
        desc: "Expert pipe repair and replacement for copper, PVC, and PEX piping.",
      },
      {
        title: "Water Heater Services",
        desc: "Installation, maintenance, and repair of all water heater types.",
      },
      {
        title: "Fixture Installation",
        desc: "Pro faucets, sinks, toilets, and bathroom fixture installations.",
      },
      {
        title: "Emergency Plumbing",
        desc: "24/7 emergency plumbing services when you need help most.",
      },
    ],
  },
  {
    id: "electrical",
    title: "Electrical",
    shortDesc:
      "Safe and dependable electrical repairs, installations and maintenance from experienced professionals.",
    description:
      "Safe and dependable electrical repairs, installations and maintenance from experienced professionals.",
    icon: "electrical-icon",
    image: "/images/service-electrical.jpg",
    href: "/services/electrical",
    number: "02",
    features: [
      "Electrical Panel Upgrades",
      "Wiring Installation & Repair",
      "Outlet & Switch Installation",
      "Lighting Installation",
      "Ceiling Fan Installation",
      "Emergency Electrical Service",
    ],
    subServices: [
      {
        title: "Panel Upgrade",
        desc: "Modernize your electrical panel to handle increased power demands.",
      },
      {
        title: "Wiring Repair",
        desc: "Safe and code-compliant wiring repairs and replacements.",
      },
      {
        title: "Outlet Installation",
        desc: "Professional installation of outlets, GFCI, and USB charging stations.",
      },
      {
        title: "Lighting Installation",
        desc: "Indoor and outdoor lighting installation, from fixtures to recessed lights.",
      },
      {
        title: "Ceiling Fans",
        desc: "Ceiling fan installation and repair for year-round comfort.",
      },
      {
        title: "Emergency Electrical",
        desc: "24/7 emergency electrical services for urgent situations.",
      },
    ],
  },
  {
    id: "hvac",
    title: "HVAC",
    shortDesc:
      "Keep your home comfortable year-round with reliable heating, cooling and HVAC maintenance.",
    description:
      "Keep your home comfortable year-round with reliable heating, cooling and HVAC maintenance.",
    icon: "hvac-icon",
    image: "/images/service-hvac.jpg",
    href: "/services/hvac",
    number: "03",
    features: [
      "AC Installation & Repair",
      "Heating System Services",
      "HVAC Maintenance & Tune-ups",
      "Ductwork Installation & Repair",
      "Furnace Repair & Installation",
      "Indoor Air Quality Solutions",
    ],
    subServices: [
      {
        title: "AC Installation",
        desc: "Professional air conditioning installation and replacement services.",
      },
      {
        title: "Heating Services",
        desc: "Complete heating system installation, repair, and maintenance.",
      },
      {
        title: "HVAC Maintenance",
        desc: "Regular maintenance to keep your systems running efficiently year-round.",
      },
      {
        title: "Ductwork Services",
        desc: "Duct installation, sealing, and repair for optimal airflow.",
      },
      {
        title: "Furnace Services",
        desc: "Furnace repair and installation for reliable winter warmth.",
      },
      {
        title: "Air Quality",
        desc: "Indoor air quality solutions including ventilation and filtration systems.",
      },
    ],
  },
];

export const getServiceById = (id: string): Service | undefined =>
  services.find((s) => s.id === id);
