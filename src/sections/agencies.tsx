import Image from 'next/image'
import { Element } from 'react-scroll'
import styles from '../styles/video-call.module.scss'
import SectionHeader from '@/components/section-header'

const Agencies = () => {
  const metaData = {
    title: 'Agencies who worked with us',
    description:
      'Every email, web page, and social media post makes an impression on your customers. With our software you can be confident you make an impression on others.'
  }

  return (
    <section>
      <Element className={styles.container} name="Our Clients">
        <SectionHeader
          title={metaData.title}
          description={metaData.description}
          hasExploreDetails
          isVideoCall
        />

        <figure className={styles.figure}>
          <Image
            src="/assets/agencies.svg"
            alt=""
            width={1250}
            height={650}
            className={styles.image}
          />
        </figure>
      </Element>
    </section>
  )
}

export default Agencies
