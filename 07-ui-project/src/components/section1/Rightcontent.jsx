import React, { useEffect, useRef } from 'react'
import Rightcard from './Rightcard'

function Rightcontent({ users = [] }) {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return undefined
    }

    const cards = Array.from(scroller.querySelectorAll('[data-right-card]'))
    let frameId = 0

    const updateCards = () => {
      frameId = 0

      const scrollerRect = scroller.getBoundingClientRect()
      const scrollerCenter = scrollerRect.left + scrollerRect.width / 2

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const distance = Math.abs(scrollerCenter - cardCenter)
        const maxDistance = scrollerRect.width / 2 + cardRect.width / 2
        const progress = Math.max(0, 1 - distance / maxDistance)

        card.style.setProperty('--card-progress', progress.toFixed(3))
      })
    }

    const requestUpdate = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(updateCards)
    }

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return
      }

      event.preventDefault()
      scroller.scrollBy({
        left: event.deltaY,
        behavior: 'smooth',
      })
    }

    requestUpdate()

    scroller.addEventListener('scroll', requestUpdate, { passive: true })
    scroller.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      scroller.removeEventListener('scroll', requestUpdate)
      scroller.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [users])

  return (
    <div
      id="right"
      ref={scrollerRef}
      className='right-content-scroll h-full w-3/5 overflow-x-auto overflow-y-hidden px-8 py-10'
    >
      <div className='flex h-full w-max flex-nowrap gap-10 pr-8'>
        {users.map(function (elem, idx) {
          return <Rightcard elem={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color} key={idx} id={idx}  />
        })}
      </div>
    </div>
  )
}
    
export default Rightcontent
