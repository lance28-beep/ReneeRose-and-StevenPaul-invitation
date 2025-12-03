"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/section";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "When and where is the wedding?",
    answer:
      "The wedding ceremony will be held on Saturday, March 21, 2026, at 2:00 PM at Santa Clara Chapel (Barangay Sang Birhen Parish Church), Santo Domingo Ave, Santa Clara Subdivision, Bacolod City, Negros Occidental.\n\nThe reception will follow at 5:00 PM at The Ruins, Talisay, Don Mariano L. Lacson Highway, Brgy. Zone 15, Talisay, Negros Occidental 6100.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Dress Code: Barong Tagalog or Any Formal Attire and Long Gown in shades of Champagne Gold or Neutral Colors.\n\nGentlemen: Barong Tagalog or Any Formal Attire\nLadies: Long Gown in shades of Champagne Gold or Neutral Colors\n\nPlease adhere to the dress code to maintain the elegance of our celebration.",
  },
  {
    question: "When is the RSVP deadline?",
    answer:
      "Please confirm by January 1, 2025. We have reserved seats for you, and we look forward to celebrating with you! Your response helps us finalize our guest list and seating arrangements.\n\n[RSVP_LINK]Click here to RSVP[/RSVP_LINK]",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "As we celebrate this moment with our closest loved ones, we kindly ask that attendance be limited to those named on the invitation. Thank you for your understanding!",
  },
  {
    question: "Are children allowed?",
    answer:
      "We love your little ones, but to keep the celebration intimate, we kindly request an adults-only event. (Children in our family and the entourage are the exception)",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please mention any dietary restrictions, allergies, or special meal requirements in the message field when you submit your RSVP or contact us at +639271655509 | +639665949009.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We'd love for everyone to be fully present. Please avoid posting photos during the celebration or ahead of time—our photographers will take care of the memories.",
  },
  {
    question: "Do you have a gift registry?",
    answer:
      "We kindly ask for no boxed gifts. Monetary gifts are welcome but never expected. Your presence is the greatest gift we could ask for!",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes! Both venues have parking facilities. We recommend arriving 15-20 minutes early to secure a spot and get settled comfortably.",
  },
  {
    question: "How do I get to the venue?",
    answer:
      "You can use the 'Get Directions' button in the Event Details section to open Google Maps for easy navigation to both the ceremony (Santa Clara Chapel) and reception (The Ruins, Talisay) venues.",
  },
  {
    question: "What should I do if I need to cancel my RSVP?",
    answer:
      "Please contact Renee & Steven at +639271655509 | +639665949009 as soon as possible if your plans change. You can also update your RSVP by searching for your name in the RSVP section.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      className="relative bg-[#E8DCC8]/80 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Section Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-normal text-white mb-4 sm:mb-6 uppercase tracking-[0.12em] sm:tracking-[0.15em]"
          style={{
            textShadow:
              "0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Frequently Asked Questions
        </h2>

        <p
          className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-white font-light max-w-xl mx-auto leading-relaxed tracking-wide px-4"
          style={{
            textShadow:
              "0 0 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Everything you need to know
        </p>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Main card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#1A1A1A]/20 to-[#1A1A1A]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          <div className="relative bg-white backdrop-blur-sm border-2 border-[#1A1A1A]/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#1A1A1A]/60 overflow-hidden">
            {/* FAQ items */}
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const contentId = `faq-item-${index}`;
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-[#1A1A1A]/20 bg-white hover:bg-[#E8DCC8]/10 transition-all duration-300 hover:shadow-md hover:border-[#1A1A1A]/30 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]/50 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className="font-[family-name:var(--font-crimson)] font-semibold text-[#1A1A1A] pr-3 sm:pr-4 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-[#3C3C3C] transition-colors duration-200">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#1A1A1A] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-[#E8DCC8]/20 border-t border-[#1A1A1A]/20">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className="text-[#1A1A1A]/80 leading-relaxed text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] whitespace-pre-line">
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a
                                href="#guest-list"
                                className="text-[#1A1A1A] underline font-semibold hover:text-[#3C3C3C] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  document
                                    .getElementById("guest-list")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                }}
                              >
                                {
                                  item.answer.match(
                                    /\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/,
                                  )?.[1]
                                }
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : (
                            <p className="text-[#1A1A1A]/80 leading-relaxed text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] whitespace-pre-line">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
