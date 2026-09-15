import Image from "next/image";
import { team } from "@/data/team";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const Team = () => {
  return (
    <section className="py-24 px-4 bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle
            smallTitle="Our Team"
            title="Meet Our Professionals"
            subtitle="Our team of experienced technicians is dedicated to providing you with the highest quality service."
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const directions = ["left", "up", "down", "right"] as const;
            return (
              <ScrollAnimation
                key={member.id}
                direction={directions[index % 4]}
                delay={index * 150}
              >
                <div className="group bg-light rounded-lg shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-yantramanav font-bold text-xl text-secondary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;