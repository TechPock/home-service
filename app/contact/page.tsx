import { Phone, Mail, Clock, MapPin } from "lucide-react";
import QuoteForm from "@/components/sections/QuoteForm";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-4 relative text-light">
        <Image
          src="/images/team/breadcumb.jpg"
          alt="Contact hero background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 style={{ color: '#FFFFFF' }} className="font-yantramanav font-black text-4xl md:text-5xl text-light mb-6 animate-fade-in-up">
              Request a <span className="text-primary">Free Quote</span>
            </h2>
            <p style={{ color: '#FFFFFF' }} className="text-light/80 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay">
              Have a <span className="text-primary">plumbing, electrical, or HVAC</span> emergency? Need a quote for
              your home? Fill out the form and our team will contact you within
              24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="font-yantramanav font-bold text-xl text-secondary mb-4">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-yantramanav font-medium text-secondary">
                        Phone
                      </p>
                      <p className="text-dark">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-yantramanav font-medium text-secondary">
                        Email
                      </p>
                      <p className="text-dark">
                        hello@homeproservices.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-yantramanav font-medium text-secondary">
                        Working Hours
                      </p>
                      <p className="text-dark">
                        Mon - Sat: 8:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-yantramanav font-medium text-secondary">
                        Service Area
                      </p>
                      <p className="text-dark">
                        Downtown, Northside, West End, Riverside,
                        Brookfield, East Valley
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-section p-8 rounded-lg shadow-xl">
                <h4 className="font-yantramanav font-bold text-lg text-secondary mb-4">
                  Emergency Service
                </h4>
                <p className="text-muted mb-4">
                  For urgent requests outside normal business hours, call our
                  24/7 emergency line.
                </p>
                <p className="text-primary font-yantramanav font-bold text-2xl">
                  (555) 123-4567
                </p>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;