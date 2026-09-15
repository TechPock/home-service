"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "plumbing", label: "Plumbing" },
  { value: "electrical", label: "Electrical" },
  { value: "hvac", label: "HVAC" },
  { value: "maintenance", label: "General Maintenance" },
];

const serviceAreaOptions = [
  { value: "", label: "Select an area" },
  { value: "downtown", label: "Downtown" },
  { value: "northside", label: "Northside" },
  { value: "west-end", label: "West End" },
  { value: "riverside", label: "Riverside" },
  { value: "brookfield", label: "Brookfield" },
  { value: "east-valley", label: "East Valley" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  serviceArea: string;
  date: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  serviceArea?: string;
  date?: string;
  message?: string;
};

const QuoteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    serviceArea: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.serviceArea)
      newErrors.serviceArea = "Please select a service area";
    if (!formData.date) newErrors.date = "Please select a preferred date";
    if (!formData.message.trim())
      newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center bg-section py-20 px-12 rounded shadow-lg">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Send size={36} className="text-primary" />
              </div>
              <h2 className="font-yantramanav font-bold text-3xl text-secondary mb-6">
                Thank You!
              </h2>
              <p className="text-lg leading-relaxed max-w-md mx-auto" style={{ color: '#FFFFFF' }}>
                Your quote request has been submitted successfully. Our team
                will contact you within 24 hours to discuss your service needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <SectionTitle
            smallTitle="Request a Quote"
            title="Request a Free Quote"
            subtitle="Fill out the form below and we'll get back to you with a transparent, upfront quote."
            centered
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded focus:outline-none focus:border-primary transition-colors ${
                    errors.name ? "border-red-500" : "border-border"
                  }`}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded focus:outline-none focus:border-primary transition-colors ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded focus:outline-none focus:border-primary transition-colors ${
                    errors.phone ? "border-red-500" : "border-border"
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded focus:outline-none focus:border-primary transition-colors appearance-none ${
                    errors.service ? "border-red-500" : "border-border"
                  }`}
                  required
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <select
                  name="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded focus:outline-none focus:border-primary transition-colors appearance-none ${
                    errors.serviceArea ? "border-red-500" : "border-border"
                  }`}
                  required
                >
                  {serviceAreaOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.serviceArea && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.serviceArea}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded focus:outline-none focus:border-primary transition-colors ${
                    errors.date ? "border-red-500" : "border-border"
                  }`}
                  required
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Describe your service needs"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded focus:outline-none focus:border-primary transition-colors resize-none ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-primary text-light font-yantramanav font-medium text-lg rounded hover:bg-primary-dark transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Request Quote"}
                {!isSubmitting && <Send size={18} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
