"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Heart, MessageCircle, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

interface Message {
  timestamp: string
  name: string
  message: string
}

interface MessageWallDisplayProps {
  messages: Message[]
  loading: boolean
}

export default function MessageWallDisplay({ messages, loading }: MessageWallDisplayProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (messages.length > 0) {
      setIsAnimating(true)
      // Stagger the animation of messages
      const timer = setTimeout(() => {
        setVisibleMessages(messages)
        setIsAnimating(false)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setVisibleMessages([])
    }
  }, [messages])

  if (loading) {
    return (
      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border border-[#3C3C3C]/8 shadow-sm bg-white rounded-lg">
            <CardContent className="py-6 px-6 sm:py-7 sm:px-7 md:py-8 md:px-9">
              <Skeleton className="h-20 sm:h-24 md:h-28 w-full mb-5" />
              <div className="flex items-center gap-3 pt-4 border-t border-[#3C3C3C]/8">
                <Skeleton className="w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3.5 w-24 sm:w-28" />
                  <Skeleton className="h-3 w-20 sm:w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16 px-4">
        <div className="relative inline-block mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-[#3C3C3C]/10 rounded-full blur-xl scale-150"></div>
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#3C3C3C] rounded-full flex items-center justify-center mx-auto shadow-lg">
            <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 text-[#E8DCC8]" />
          </div>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-crimson)] font-normal text-[#3C3C3C] mb-3 sm:mb-4 uppercase tracking-wider">
          No Messages Yet
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-[#3C3C3C]/70 font-[family-name:var(--font-crimson)] font-light max-w-md mx-auto leading-relaxed tracking-wide">
          Be the first to share your heartfelt wishes for the happy couple!
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-[#3C3C3C]/50">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm font-[family-name:var(--font-crimson)] text-[#3C3C3C]/60">Your message will appear here</span>
            <Sparkles className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {visibleMessages.map((msg, index) => (
        <Card
          key={index}
          className={`relative border border-[#3C3C3C]/8 shadow-sm bg-white hover:shadow-lg hover:border-[#3C3C3C]/15 transition-all duration-300 group rounded-lg ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
            animation: isAnimating ? 'none' : 'fadeInUp 0.6s ease-out forwards'
          }}
        >
          {/* Elegant subtle background with warmth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8DCC8]/10 via-white to-[#E8DCC8]/5 rounded-lg"></div>
          
          <CardContent className="relative py-6 px-6 sm:py-7 sm:px-7 md:py-8 md:px-9">
            {/* Message content with elegant quotation marks */}
            <div className="relative mb-5 sm:mb-6">
              <span className="absolute -left-3 -top-4 sm:-left-4 sm:-top-5 md:-left-5 md:-top-6 text-6xl sm:text-7xl md:text-8xl text-[#3C3C3C]/8 font-[family-name:var(--font-crimson)] leading-none select-none group-hover:text-[#3C3C3C]/12 transition-colors">"</span>
              <div className="relative pl-8 sm:pl-10 md:pl-12 pr-6 sm:pr-8 md:pr-10 pt-3 sm:pt-4 pb-2 sm:pb-3">
                <p className="text-[#3C3C3C] text-base sm:text-lg md:text-xl leading-relaxed font-[family-name:var(--font-crimson)] font-light tracking-wide">{msg.message}</p>
              </div>
              <span className="absolute -right-3 -bottom-2 sm:-right-4 sm:-bottom-3 md:-right-5 md:-bottom-4 text-6xl sm:text-7xl md:text-8xl text-[#3C3C3C]/8 font-[family-name:var(--font-crimson)] leading-none select-none group-hover:text-[#3C3C3C]/12 transition-colors">"</span>
            </div>
            
            {/* Author info at bottom with elegant divider */}
            <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-[#3C3C3C]/8">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#3C3C3C] rounded-full flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
                    <span className="text-[#E8DCC8] font-[family-name:var(--font-crimson)] text-xs sm:text-sm font-semibold">
                      {msg.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-crimson)] text-[#3C3C3C] text-sm sm:text-base font-semibold leading-tight">{msg.name}</h4>
                  <span className="text-xs sm:text-sm text-[#3C3C3C]/50 font-[family-name:var(--font-crimson)] tracking-wide">
                    {new Date(msg.timestamp).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                </div>
              </div>
              <Heart className="flex-shrink-0 h-5 w-5 sm:h-5 sm:w-5 text-[#3C3C3C]/25 fill-[#3C3C3C]/0 group-hover:text-[#3C3C3C]/60 group-hover:fill-[#3C3C3C]/15 transition-all duration-300" />
            </div>
          </CardContent>
        </Card>
      ))}
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
