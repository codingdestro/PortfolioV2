import { useState, useEffect, RefObject } from "react"

export const useView = (divRef: RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleScroll = () => {
    if (divRef.current == null) return
    const rect = divRef.current.getBoundingClientRect()!
    const height = window.innerHeight
    if (rect.top < height && rect.bottom >= 0) {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return { isVisible }
}
