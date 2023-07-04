import styles from '../../styles/pricing.module.scss'

interface CarouselIndexPointsProps {
  currentIndex: number
  emblaApi: any
}

const CarouselIndexPoints = ({
  currentIndex,
  emblaApi
}: CarouselIndexPointsProps) => {
  return (
    <div className={styles.carouselIndexContainer}>
      {[0, 1, 2, 3].map((index) => (
        <div
          key={`carousel-index-point__${index}`}
          onClick={() => emblaApi?.scrollTo(index)}
          className={styles.carouselBulletPoint}
          style={{
            background: currentIndex === index ? '#0e2137' : '#ced7e1'
          }}
        ></div>
      ))}
    </div>
  )
}

export default CarouselIndexPoints
