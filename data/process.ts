export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    number: "01",
    title: "Choose Your Service",
    description: "Select the service you need from our range of plumbing, electrical, and HVAC solutions.",
    icon: "clipboard",
  },
  {
    id: "2",
    number: "02",
    title: "Tell Us What You Need",
    description: "Share the details of your project and we'll assess your requirements with a free, no-obligation consultation.",
    icon: "calendar",
  },
  {
    id: "3",
    number: "03",
    title: "Get Your Quote",
    description: "Receive a transparent, upfront quote with no hidden fees. We'll schedule the service at your convenience.",
    icon: "file-text",
  },
  {
    id: "4",
    number: "04",
    title: "Get the Job Done",
    description: "Our expert technicians complete the work professionally and on time, leaving your space clean and satisfied.",
    icon: "check-circle",
  },
];
