import Image from 'next/image'
import { Element } from 'react-scroll'
import styles from '../styles/video-call.module.scss'
import SectionHeader from '@/components/section-header'

const VideoCall = () => {
  const metaData = {
    title: 'Introducing video calling support',
    description:
      "Every email, web page, and social media post makes an impression on your customers. With our software you can be confident you'll get more."
  }

  return (
    <section>
      <Element className={styles.container} name="Video Call">
        <SectionHeader
          title={metaData.title}
          description={metaData.description}
          hasExploreDetails
          isVideoCall
        />

        <figure className={styles.figure}>
          <Image
            src="/assets/video-call.svg"
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

export default VideoCall
