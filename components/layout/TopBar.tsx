import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-darkest text-light py-3 px-4 hidden sm:block">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="font-yantramanav font-medium">24/7 Home Services</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>hello@homeproservices.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
