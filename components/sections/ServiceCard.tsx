import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  href: string;
}

const ServiceCard = ({
  number,
  title,
  description,
  icon,
  image,
  href,
}: ServiceCardProps) => {
  return (
    <div className="service-card group bg-light shadow-lg mb-6 relative z-10 text-center border-t-2 border-primary transition-all duration-500">
      <div className="service-icon relative -bottom-10 mb-0 flex justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
          <div className="w-16 h-16 flex items-center justify-center text-primary group-hover:text-light transition-all duration-500">
            {icon}
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-light rounded-full flex items-center justify-center font-yantramanav font-black text-sm shadow-lg">
          {number}
        </div>
      </div>

      <div className="service-content px-6 pb-8">
        <h3 className="font-yantramanav font-bold text-xl text-secondary mb-4 group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>
        <p className="text-sm text-muted mb-6 leading-relaxed">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-yantramanav font-medium text-sm group/link"
        >
          Learn More
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="serivce-thumb relative overflow-hidden">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-secondary/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="service-share-icn absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Link
              href={href}
              className="w-14 h-14 bg-primary text-light rounded-full flex items-center justify-center text-xl hover:bg-primary-dark transition-colors duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7L7 7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;