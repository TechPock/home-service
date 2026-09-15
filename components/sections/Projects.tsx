import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const Projects = () => {
  const directions: ("left" | "up" | "right")[] = ["left", "up", "up", "right"];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div>
            <SectionTitle
              smallTitle="Latest Projects"
              title="Our Recent Work"
              subtitle=""
            />
          </div>
          <Link
            href="/projects"
            className="text-primary font-yantramanav font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            View All Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7L7 7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              direction={directions[index % 4]}
              delay={index * 100}
            >
              <div className="project-card group relative bg-light shadow-xl overflow-hidden transition-all duration-500">
                <div className="absolute -inset-0.5 border-2 border-transparent group-hover:border-primary transition-all duration-500" />
                <div className="project-box-inner relative overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div
                    className="project-content absolute bottom-0 left-0 w-full bg-primary text-light px-8 pt-28 pb-10 opacity-0 transition-all duration-700"
                    style={{
                      clipPath:
                        "polygon(65% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 26%)",
                    }}
                  >
                    <h4 className="font-medium text-sm uppercase tracking-wider mb-3">
                      {project.category}
                    </h4>
                    <h3 className="font-yantramanav font-bold text-2xl mb-4">
                      {project.title}
                    </h3>
                    <Link
                      href={project.href}
                      className="flex items-center gap-2 text-sm font-yantramanav font-medium hover:gap-3 transition-all duration-300"
                    >
                      VIEW DETAILS
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
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
