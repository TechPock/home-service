export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    id: "1",
    name: "James Morrison",
    role: "Founder & Master Plumber",
    image: "/images/team/team1.jpg",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    role: "Lead Electrician",
    image: "/images/team/team2.jpg",
  },
  {
    id: "3",
    name: "Carlos Rodriguez",
    role: "HVAC Specialist",
    image: "/images/team/team3.jpg",
  },
  {
    id: "4",
    name: "Emma Thompson",
    role: "Operations Manager",
    image: "/images/team/team4.jpg",
  },
];
