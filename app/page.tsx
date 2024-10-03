'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Home from "./home"

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const horizontal = horizontalRef.current

    if (!container || !horizontal) return

    const getScrollWidth = () => {
      return horizontal.scrollWidth - window.innerWidth
    }

    gsap.set(horizontal, { x: () => 1000 })

    const tween = gsap.to(horizontal, {
      x: () => -getScrollWidth(),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${getScrollWidth()}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    const moveElements = gsap.utils.toArray('.move')

    moveElements.forEach((element) => {
      const e = element as Element;
      gsap.set(e, { scale:0 })
      gsap.timeline({
        scrollTrigger: {
          trigger: e,
          containerAnimation: tween,
          start: "center 70%",
          end: "center 30%",
          scrub: true,
        }
      })
      .to(e, {
        scale: 1,
        duration: 1,
      })
      .to(e, {
        scale: 0,
        duration: 1,
      })
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div>
      <div className="bg-red-400">
        <Home />
      </div>
      <div className="bg-blue-400">
        <Home />
      </div>
      <div ref={containerRef} className="h-screen scroll-smooth overflow-hidden m-auto">
        <div ref={horizontalRef} className="flex flex-row gap-52">
          <div className="bg-blue-400 move">
            <Home />
          </div>
          <div className="bg-red-400 move">
            <Home />
          </div>
          <div className="bg-blue-400 move">
            <Home />
          </div>
          <div className="bg-red-400 move">
            <Home />
          </div>
          <div className="bg-blue-400 move">
            <Home />
          </div>
          <div className="bg-red-400 move">
            <Home />
          </div>
          <div className="bg-blue-400 move">
            <Home />
          </div>
          <div className="bg-blue-400 move1">
            <Home />  
          </div>
        </div>
      </div>
      <div className="bg-red-400">
        <Home />
      </div>
    </div>
  )
}