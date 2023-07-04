import { useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import CarouselIndexPoints from './carousel-index-points'
import { Z_BINARY } from 'zlib'

interface CarouselProps {
  children: React.ReactNode
}

const Carousel = ({ children }: CarouselProps) => {
  const [width, setWidth] = useState<number>(0)
  const [index, setIndex] = useState<number>(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    setWidth(window.innerWidth)

    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const onSelect = (emblaApi: EmblaCarouselType) => {
    setIndex(emblaApi?.selectedScrollSnap())
  }

  useEffect(() => {
    emblaApi?.on('select', onSelect)
  }, [emblaApi])

  return (
    <>
      {width > 950 ? (
        <>{children}</>
      ) : (
        <div
          ref={emblaRef}
          style={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {children}
          <CarouselIndexPoints currentIndex={index} emblaApi={emblaApi} />
        </div>
      )}
    </>
  )
}

export default Carousel
