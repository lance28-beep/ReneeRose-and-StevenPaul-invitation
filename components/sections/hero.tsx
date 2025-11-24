"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import { Heart } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center justify-center min-h-screen py-16 sm:py-20">
        {/* Elegant Card Container */}
        <div className={`w-full max-w-4xl elegant-card rounded-lg p-8 sm:p-12 md:p-16 lg:p-20 text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 transition-all duration-1000 ease-out premium-shadow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Monogram - Center */}
          <div className="w-full mt-6 sm:mt-8">
            <div className="relative w-full aspect-[4/1] sm:aspect-[5/1] md:aspect-[6/1] min-h-[110px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
              <Image
                src="/monogram/image.png"
                alt="Steven & Renee Monogram"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Gold decorative line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C9A55F] to-transparent" />
          </div>

          {/* Opening Text */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] font-normal text-[#4A4442] tracking-wide px-4">
            Together with our families, we,
          </p>

          {/* Bride Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-crimson)] font-normal text-[#4A4442] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-tight px-2 elegant-text-shadow">
            RENEE ROSE TORRES
          </h1>

          {/* And - Script Style with gold accent */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-ephesis)] text-[#C9A55F] my-4 sm:my-6 md:my-8">
            and
          </p>

          {/* Groom Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-crimson)] font-normal text-[#4A4442] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-tight px-2 elegant-text-shadow">
            STEVEN PAUL MORAÑA
          </h1>

          {/* Gold decorative line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C9A55F] to-transparent" />
          </div>

          {/* Request Text */}
          <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-normal text-[#4A4442] tracking-wide max-w-xl mx-auto px-6 sm:px-8 leading-relaxed">
            request the honor of your presence as we are unified in marriage before our Lord God.
          </p>

          {/* Date Display with elegant gold accents */}
          <div className="space-y-3 pt-4 sm:pt-6 px-4">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-[#C9A55F] to-[#C9A55F]" />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-[#C9A55F] tracking-wider">
                March
              </p>
              <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent via-[#C9A55F] to-[#C9A55F]" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[#4A4442]">
              <span className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] uppercase tracking-wider text-[#C9A55F]">SATURDAY</span>
              <span className="text-6xl sm:text-7xl md:text-8xl font-[family-name:var(--font-crimson)] font-light my-2 sm:my-0 elegant-text-shadow">21</span>
              <span className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] uppercase tracking-wider text-[#C9A55F]">3:00 PM</span>
            </div>
            
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-light text-[#4A4442]">
              2026
            </p>
          </div>

          {/* Ceremony with gold accent */}
          <div className="pt-4 sm:pt-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C9A55F] to-transparent" />
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-ephesis)] text-[#C9A55F] px-4">
              Ceremony
            </p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C9A55F] to-transparent" />
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-2 pb-4 sm:pb-6 px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#C9A55F] uppercase tracking-wider">
              SANTA CLARA CHAPEL
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] font-normal text-[#4A4442] leading-relaxed">
              Barangay Sang Birhen Parish Church
            </p>
            <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-normal text-[#4A4442]/80">
              Santo Domingo Ave, Santa Clara Subdivision, Bacolod City
            </p>
          </div>

          {/* Elegant CTA Button with gold gradient */}
          <div className="pt-6 sm:pt-8">
            <a
              href="#guest-list"
              className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-3.5 md:py-4 lg:py-4.5 font-[family-name:var(--font-crimson)] font-semibold text-sm sm:text-base md:text-lg text-white bg-gradient-to-r from-[#C9A55F] to-[#D4AF7A] hover:from-[#B8944E] hover:to-[#C9A55F] transition-all duration-300 tracking-wider uppercase border border-[#C9A55F] hover:scale-105 active:scale-100 premium-shadow rounded-sm"
            >
              <Heart size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              RSVP
            </a>
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#C9A55F] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
