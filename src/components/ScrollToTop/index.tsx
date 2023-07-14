import { useEffect, useState } from 'react'
import { RxArrowUp } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  
  return (
    <div className="fixed bottom-2 right-2 z-5">
      <button
        type="button"
        onClick={scrollToTop}
        className={twMerge(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-zinc-800 hover:bg-zinc-600 focus:ring-zinc-900 border border-black/20 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring focus:ring-offset-2',
        )}
      >
        <RxArrowUp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}