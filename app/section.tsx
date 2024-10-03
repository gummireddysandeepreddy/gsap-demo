import { useState, useEffect } from 'react'
import Home from './home'

export default function Section() {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true)
        } else {
          setIsExpanded(false)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    )

    const element = document.querySelector('.home-component')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <div className={`transition-all duration-500 ${isExpanded ? 'w-full h-full' : 'w-16 h-16'}`}>
      {isExpanded ? (
        <div className="p-4 rounded-lg w-full h-full flex items-center justify-center">
            <Home />
        </div>
      ) : (
        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold">H</span>
        </div>
      )}
    </div>
  )
}