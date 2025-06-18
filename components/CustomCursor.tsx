"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer',
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true)
          setCursorVariant("hover")
        })
        el.addEventListener("mouseleave", () => {
          setIsHovering(false)
          setCursorVariant("default")
        })
      })

      // Special handling for project cards
      const projectCards = document.querySelectorAll("[data-cursor='view']")
      projectCards.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setCursorVariant("view")
          setIsHovering(true)
        })
        el.addEventListener("mouseleave", () => {
          setCursorVariant("default")
          setIsHovering(false)
        })
      })
    }

    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Add listeners after a short delay to ensure DOM is ready
    setTimeout(addHoverListeners, 100)

    // Re-add listeners when navigating (for SPA behavior)
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      observer.disconnect()
    }
  }, [])

  const getCursorClasses = () => {
    const classes = "fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ease-out"

    switch (cursorVariant) {
      case "hover":
        return `${classes} w-10 h-10 border-2 border-indigo-500/60 rounded-full backdrop-blur-sm`
      case "view":
        return `${classes} w-14 h-14 border border-indigo-400/50 rounded-full backdrop-blur-sm bg-indigo-500/5`
      default:
        return `${classes} w-3 h-3 bg-indigo-600 rounded-full shadow-sm`
    }
  }

  const getCursorStyle = () => {
    const baseStyle = {
      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    }

    switch (cursorVariant) {
      case "hover":
        return {
          ...baseStyle,
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px) ${
            isClicking ? "scale(0.8)" : "scale(1)"
          }`,
        }
      case "view":
        return {
          ...baseStyle,
          transform: `translate(${mousePosition.x - 28}px, ${mousePosition.y - 28}px) scale(${isClicking ? 0.9 : 1})`,
        }
      default:
        return {
          ...baseStyle,
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px) scale(${isClicking ? 0.8 : 1})`,
        }
    }
  }

  // Hide default cursor on desktop
  useEffect(() => {
    document.body.style.cursor = "none"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [])

  // Don't render on mobile devices
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <div className={getCursorClasses()} style={getCursorStyle()}>
        {cursorVariant === "view" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-indigo-600 bg-white/90 px-2 py-1 rounded-full shadow-sm">
              View
            </span>
          </div>
        )}
      </div>

      {/* Subtle trail effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-6 h-6 bg-indigo-400/20 rounded-full transition-all duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isHovering ? 1.2 : 0.8})`,
          opacity: isHovering ? 0.4 : 0.2,
        }}
      />
    </>
  )
}
