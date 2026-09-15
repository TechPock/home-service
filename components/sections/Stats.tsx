import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { stats } from "@/data/stats";

const Stats = () => {
  const extractNumeric = (val: string): number => {
    if (val === "24/7") return 24;
    const num = parseFloat(val.replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const extractSuffix = (val: string): string => {
    if (val === "24/7") return "/7";
    const match = val.match(/[^0-9.]+$/);
    return match ? match[0] : "";
  };

  return (
    <section className="relative z-10 -mt-20 mb-20 px-4">
      <div className="container mx-auto">
        <div className="bg-primary rounded-sm py-12 px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const numeric = extractNumeric(stat.value);
              const suffix = extractSuffix(stat.value);

              const directions = ["left", "up", "down", "right"] as const;
              const direction = directions[index % 4];

              return (
                <ScrollAnimation
                  key={stat.id}
                  direction={direction}
                  delay={index * 100}
                >
                  <div className="counter-content flex items-center">
                    <div className="counter-text pr-4">
                      <h1 className="text-5xl font-yantramanav font-black text-light">
                        <span ref={null}>
                          <AnimatedCounter
                            value={numeric.toString()}
                            suffix={suffix}
                            duration={2500}
                          />
                        </span>
                      </h1>
                    </div>
                    <div className="counter-title relative pl-8">
                      <div className="absolute left-0 top-0 w-px h-16 bg-light/30"></div>
                      <h3 className="font-bold text-xl text-light">
                        {stat.description}
                      </h3>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
