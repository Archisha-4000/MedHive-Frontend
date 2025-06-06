//src/app/about/page.tsx

"use client";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Sparkles, Network } from "lucide-react";
import { PricingSection } from "@/components/pricing-section";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

  const TIERS = [
    {
      id: "free",
      name: "Free Tier",
      price: {
        monthly: "$0",
        yearly: "$0",
      },
      description: "For students, clinics, and hobby projects",
      features: [
        "2 models (e.g., Symptom Checker)",
        "100 predictions/month",
        "Basic analytics",
        "3-minute checks",
        "Community support",
      ],
      cta: "Get started",
    },
    {
      id: "payg",
      name: "Pay-As-You-Go",
      price: {
        monthly: 90,
        yearly: 75,
      },
      description: "For researchers & growing clinics",
      features: [
        "All MedHive models",
        "Predictions billed per use",
        "15-second checks",
        "Advanced analytics",
        "Priority support",
        "Up to 10 seats",
      ],
      cta: "Start scaling",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: {
        monthly: "Custom",
        yearly: "Custom",
      },
      description: "For healthtech companies & hospitals",
      features: [
        "Dedicated API integration",
        "Revenue sharing for contributors",
        "Unlimited predictions",
        "24/7 SLAs & support",
        "200+ integrations",
      ],
      cta: "Contact Us",
      highlighted: true,
    },
  ];

  const pricing = [
    {
      title: "Free Tier",
      description: "Explore 1-2 models with capped monthly usage",
    },
    {
      title: "Pay-As-You-Go",
      description: "Usage-based billing (API calls, compute, predictions)",
    },
    {
      title: "Enterprise",
      description: "Custom workflows, SLAs, and revenue sharing",
    },
  ];

  const mission = [
    {
      title: "Privacy-First Approach",
      description:
        "We believe that medical innovation shouldn't compromise patient privacy. Our federated learning platform keeps sensitive data where it belongs—within hospital walls.",
    },
    {
      title: "Collaborative Innovation",
      description:
        "By enabling hospitals to work together without sharing raw data, we're creating medical AI that's more accurate, more diverse, and more beneficial for all patients.",
    },
    {
      title: "Democratizing Medical AI",
      description:
        "We're building a future where every healthcare provider, regardless of size, can benefit from state-of-the-art AI diagnostics and predictions.",
    },
  ];

  return (
    <main
      className={`min-h-screen ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-5 pb-2 md:pt-5 md:pb-5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center pt-1">
            <motion.span
              className="inline-block px-6 py-2 bg-black/80 text-cyan-400 rounded-full
text-sm mb-6 font-['Poppins'] backdrop-blur-lg border border-cyan-400/30
shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
            >
              <Network className="inline-block w-4 h-4 mr-2" />
              About Medhive
            </motion.span>
            <h1
              className="text-4xl md:text-6xl font-['Kagitingan'] mb-6 bg-gradient-to-r
from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"
            >
              Our Mission and Vision
            </h1>
            <p
              className="text-xl text-gray-300 mb-10 font-['Poppins'] max-w-2xl mx-auto leading-relaxed"
              style={{ animationDelay: "200ms" }}
            >
              We're revolutionizing how healthcare institutions collaborate on
              AI development while preserving patient privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-0 md:py-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <h2
                className="text-4xl md:text-6xl font-['Kagitingan'] mb-6 bg-gradient-to-r
from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"
              >
                OUR STORY
              </h2>

              <ul className="space-y-6 mb-8">
                <li className="flex items-start">
                  <span className="mt-2 mr-4 text-cyan-400 text-3xl leading-none">
                    •
                  </span>
                  <p className="text-white text-lg md:text-xl font-['Poppins'] leading-snug">
                    Founded to bridge the gap between hospital data and medical
                    AI.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-4 text-cyan-400 text-3xl leading-none">
                    •
                  </span>
                  <p className="text-white text-lg md:text-xl font-['Poppins'] leading-snug">
                    2020: First federated‑learning prototype—two hospitals, zero
                    data exchange.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-4 text-cyan-400 text-3xl leading-none">
                    •
                  </span>
                  <p className="text-white text-lg md:text-xl font-['Poppins'] leading-snug">
                    Today: 25+ global institutions collaborating on secure AI
                    models.
                  </p>
                </li>
              </ul>

              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-medhive-500" />
                <div>
                  <h3 className="text-base text-white font-['Poppins']">
                    HIPAA Compliant & ISO 27001 Certified
                  </h3>
                  <p className="text-base text-white">
                    Enterprise‑grade security for healthcare data
                  </p>
                </div>
              </div>
            </div>

            <div
              className="animate-fade-in"
              style={{ animationDelay: "500ms" }}
            >
              <BlurContainer
                className="relative aspect-square max-w-[500px] mx-auto p-2 overflow-hidden"
                intensity="low"
                hoverable
              >
                <div className="absolute inset-0 bg-noise opacity-10" />
                <img
                  src="/feature1.jpg"
                  alt="Medical AI Team"
                  className="w-full h-full object-cover rounded-xl"
                />
              </BlurContainer>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <span className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-white rounded-full text-sm font-['Lilita_One'] mb-4">
              Our Principles
            </span>
            <h2
              className="text-4xl md:text-6xl font-['Kagitingan'] mb-6 bg-gradient-to-r
from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"
            >
              What Drives Our Innovation
            </h2>
            <p className="text-lg text-white font-['Poppins']">
              At MedHive, we're guided by a set of core principles that shape
              everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mission.map((item, index) => (
              <BlurContainer
                key={index}
                intensity="medium"
                className="relative
min-h-[340px]
px-6 py-8
bg-gray-900 bg-opacity-50
border border-cyan-500/30
rounded-2xl
hover:bg-opacity-70
hover:shadow-[0_0_20px_rgba(0,255,231,0.6)]
hover:cursor-pointer
transition-all duration-300
flex flex-col items-center justify-between
text-center space-y-4
animate-fade-up
"
                style={{ animationDelay: `${index * 100 + 600}ms` }}
                hoverable
              >
                <div
                  className="
h-20 w-20
flex items-center justify-center
rounded-full
bg-gray-800 bg-opacity-60
border border-cyan-500/40
shadow-[0_0_6px_rgba(0,255,231,0.4)]
"
                >
                  <div
                    className="
h-16 w-16
flex items-center justify-center
rounded-full
bg-gradient-to-r from-blue-600 to-cyan-500
text-white text-2xl font-bold
border border-cyan-300/20
"
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-4xl text-pink-400 font-['Kagitingan']">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white text-base leading-snug px-2 font-['Poppins']">
                  {item.description}
                </p>
              </BlurContainer>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" className="relative z-10 py-24 overflow-hidden text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-5 animate-fade-up">
            <span className="inline-block px-3 py-1 border border-cyan-400/20 text-white rounded-full text-sm font-['Lilita_One'] mb-4">
              Our Pricing Models
            </span>
            <h2 className="text-4xl md:text-6xl font-['Kagitingan'] mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Powering Progress Through Thoughtful Pricing
            </h2>
            <p className="text-lg text-white font-['Poppins']">
              Transparent, adaptable pricing that grows with your mission -
              thoughtfully structured to sustain both cutting-edge research and
              real-world impact
            </p>
          </div>

          <PricingSection
            title="Simple Pricing"
            subtitle="Choose the best plan for your needs"
            frequencies={PAYMENT_FREQUENCIES}
            tiers={TIERS}
          />
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" />
          <div className="absolute inset-0 opacity-10 mix-blend-overlay animate-pan" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative bg-black/50 backdrop-blur-2xl border border-cyan-400/20 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.4)] animate-fade-up transition-transform duration-300 ease-in-out transform hover:scale-105"
              style={{ animationDelay: `800ms` }}
            >
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl animate-[flicker_3s_linear_infinite]" />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-10 space-y-6">
                  <h2 className="font-['Kagitingan'] text-2xl md:text-3xl text-white mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-white font-['Poppins']">
                    Questions about MedHive? Want to join our federated learning
                    network? Drop us a line—our team is always listening.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-white mb-1 font-['Poppins']">
                        Email Us
                      </h3>
                      <a
                        href="mailto:info@medhive.ai"
                        className="inline-flex items-center text-cyan-300 hover:text-cyan-100 transition"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        info@medhive.ai
                      </a>
                    </div>
                  </div>

                  <Button className="relative inline-flex items-center px-6 py-3 font-['Lilita_One'] text-base bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.6)] transition-all duration-300">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="relative h-56 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="MedHive Office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes flicker {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.85;
            }
          }
          @keyframes pan {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 100% 100%;
            }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}
