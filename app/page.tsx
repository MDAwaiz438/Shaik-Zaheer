"use client"
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from '@/components/home/Hero'
import TrustBadges from '@/components/home/TrustBadges'
import Brands from '@/components/home/Brands'
import FeaturedServices from '@/components/home/FeaturedServices'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const appRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Hero animations
    gsap.from('.hero-text h1', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
    gsap.from('.hero-text p', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 })
    gsap.from('.hero-text .btn', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.6, stagger: 0.1 })
    
    // Feature cards scroll animation
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    })



    // Featured products scroll animation
    gsap.from('.product-card', {
      scrollTrigger: {
        trigger: '.featured',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    })
  }, { scope: appRef })

  return (
    <div className="app-wrapper" ref={appRef}>
      <div className="noise-overlay"></div>
      <main>
        <Hero />
        <TrustBadges />
        <Brands />
        <FeaturedServices />
      </main>
    </div>
  )
}