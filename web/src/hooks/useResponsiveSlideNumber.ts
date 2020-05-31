import { useEffect, useState } from 'react'

export default (ref: any) => {
  const [showingSlides, setShowingSlides] = useState<number>(5)

  const calcVisibleSlideNumber: Function = () => {
    if (ref && ref.current) {
      const { width } = ref.current.getBoundingClientRect()
      if (width >= 1800) {
        return 6
      }
      if (width >= 1024) {
        return 5
      }
      if (width >= 800) {
        return 3
      }
      if (width >= 516) {
        return 2
      }
      return 1
    }
    return 5
  }

  useEffect(() => {
    function handleResize() {
      let slideNumber = calcVisibleSlideNumber()
      setShowingSlides(slideNumber)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return showingSlides
}
