import Image from 'next/image'
import { Element } from 'react-scroll'
import News from '../components/masthead/masthead-news'
import Introduction from '../components/masthead/masthead-introduction'
import { Buttons } from '../components/masthead/masthead-buttons'
import styles from '../styles/masthead.module.scss'

const Masthead = () => {
  const metaData = {
    newsDescription: 'We have updated our term & condition policy',
    heading: 'Engage your website visitors using support management tools',
    description:
      'Explore 50+ integrations that make your day-to-day workflow more efficient and familiar. Our extensive developer tools might also strike your fancy website.',
    firstButtonTitle: 'Try free trial',
    secondButtonTitle: 'Discover in video'
  }

  return (
    <section className={styles.masthead}>
      <Element className={styles.container} name="Home">
        <div className={styles.contentContainer}>
          <News description={metaData.newsDescription} />
          <Introduction
            heading={metaData.heading}
            description={metaData.description}
          />
          <Buttons
            firstButtonTitle={metaData.firstButtonTitle}
            secondButtonTitle={metaData.secondButtonTitle}
          />
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/masthead-image.svg"
            alt=""
            width={700}
            height={635}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </Element>
    </section>
  )
}

export default Masthead
