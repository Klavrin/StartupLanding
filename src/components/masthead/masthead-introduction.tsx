import { IntroductionProps } from '@/types'
import styles from '../../styles/masthead.module.scss'

const Introduction = ({ heading, description }: IntroductionProps) => {
  return (
    <div className={styles.introduction}>
      <h1 className={styles.introHeading}>{heading}</h1>
      <p className={styles.introDescription}>{description}</p>
    </div>
  )
}

export default Introduction
