import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getServiceById, services } from "@/data/services";
import PrimaryButton from "@/components/ui/Buttons";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

const icons: Record<string, React.ReactElement> = {
  plumbing: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  electrical: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  hvac: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v20m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

interface Props {
  params: Promise<{ slug: string }>;
}

const ServiceDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 relative">
        <div className="relative h-64 sm:h-80">
          <Image
            src="/images/team/breadcumb.jpg"
            alt="Service hero background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 -mt-24">
          <div className="bg-light rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                {icons[service.id] || icons.plumbing}
              </div>
              <div>
                <span className="text-primary font-yantramanav font-bold text-sm">
                  SERVICE 0{service.number}
                </span>
                <h1 className="font-yantramanav font-black text-3xl md:text-4xl text-secondary">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-secondary font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <PrimaryButton href="/contact" className="px-8 py-3">
              Request a Free Quote
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="font-yantramanav font-bold text-2xl text-secondary mb-8">
            Our {service.title} Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((sub) => (
              <div
                key={sub.title}
                className="bg-light p-8 rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-1"
              >
                <h3 className="font-yantramanav font-bold text-lg text-secondary mb-3">
                  {sub.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <FAQ />

      <section className="py-20 px-4 bg-section">
        <div className="container mx-auto text-center">
          <h2 className="font-yantramanav font-black text-3xl text-secondary mb-6">
            Ready for {service.title} Service?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. Our team of
            experienced technicians is ready to help.
          </p>
          <div className="flex gap-4 justify-center">
            <PrimaryButton href="/contact">Get a Free Quote</PrimaryButton>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-primary text-primary font-yantramanav font-medium rounded hover:bg-primary hover:text-light transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;