export type ServiceArea = {
  id: string;
  name: string;
  zipCode?: string;
};

export const serviceAreas: ServiceArea[] = [
  { id: "1", name: "Downtown", zipCode: "1001" },
  { id: "2", name: "Northside", zipCode: "1002" },
  { id: "3", name: "West End", zipCode: "1003" },
  { id: "4", name: "Riverside", zipCode: "1004" },
  { id: "5", name: "Brookfield", zipCode: "1005" },
  { id: "6", name: "East Valley", zipCode: "1006" },
];

export const serviceAreasText = {
  title: "Serving Your Local Area",
  subtitle: "Professional home services across the greater metropolitan area.",
  ctaText: "Check Service Availability",
};
