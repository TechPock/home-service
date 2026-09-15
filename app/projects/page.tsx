import Image from "next/image";
import { projects } from "@/data/projects";
import CTA from "@/components/sections/CTA";

const ProjectsPage = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-4 relative text-light">
        <Image
          src="/images/team/breadcumb.jpg"
          alt="Projects hero background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 style={{ color: '#FFFFFF' }} className="font-yantramanav font-black text-4xl md:text-5xl text-light mb-6 animate-fade-in-up">
              Our Recent <span className="text-primary">Projects</span>
            </h2>
            <p style={{ color: '#FFFFFF' }} className="text-light/80 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay">
              Browse through some of our recent <span className="text-primary">home service projects</span> across
              plumbing, electrical, and HVAC.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-light shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <h4 className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
                    {project.category}
                  </h4>
                  <h3 className="font-yantramanav font-bold text-2xl text-secondary mb-3">
                    {project.title}
                  </h3>
                  <a
                    href={project.href}
                    className="text-primary font-yantramanav font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    View Details
                    <svg
                      width="16"
                      height="16"
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default ProjectsPage;