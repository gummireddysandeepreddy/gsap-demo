'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Home from './home'

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      }
    )

    return () => {
      pin.kill()
    }
  }, [])


  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="relative h-screen w-[400vw] flex flex-row items-center justify-start">
          <div className="bg-blue-400 h-screen w-screen">
            <Home />
          </div>
          <div className="bg-red-400 h-screen w-screen">
            <Home />
          </div>
          <div className="bg-blue-400 h-screen w-screen">
            <Home />
          </div>
          <div className="bg-red-400 h-screen w-screen">
            <Home />
          </div>
        </div>
      </div>
    </section>
  )
}