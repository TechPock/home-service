export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "kitchen-plumbing",
    title: "Kitchen Plumbing Repair",
    category: "PLUMBING",
    image: "/images/project1.jpg",
    href: "/projects/kitchen-plumbing-repair",
  },
  {
    id: "electrical-panel",
    title: "Electrical Panel Upgrade",
    category: "ELECTRICAL",
    image: "/images/project2.jpg",
    href: "/projects/electrical-panel-upgrade",
  },
  {
    id: "ac-installation",
    title: "Central AC Installation",
    category: "HVAC",
    image: "/images/project3.jpg",
    href: "/projects/central-ac-installation",
  },
  {
    id: "hvac-maintenance",
    title: "HVAC Maintenance",
    category: "MAINTENANCE",
    image: "/images/project4.jpg",
    href: "/projects/hvac-maintenance",
  },
];
