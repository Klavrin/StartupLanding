import Image from 'next/image'
import { Element } from 'react-scroll'
import styles from '../styles/team.module.scss'
import SectionHeader from '@/components/section-header'
import TeamButton from '@/components/team-button'

const Team = () => {
  const metaData = {
    title:
      'Meet our amazing super heroes who always work hardly behind the scenes',
    description:
      'You focus on the meaning, we take care of the design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor magna sed urna.'
  }

  return (
    <section>
      <Element className={styles.container} name="Our Team">
        <SectionHeader
          title={metaData.title}
          description={metaData.description}
          isVideoCall
        />

        <div className={styles.team}>
          <div>
            <Image
              src="/assets/team/team.svg"
              alt="Team"
              width={1000}
              height={580}
              className={styles.teamImage}
            />
          </div>
          <div className={styles.teamBanner}>
            <h2 className={styles.bannerTitle}>
              Do you have any questions? Feel free to contact us.
            </h2>
            <Image
              src="/assets/team/telegram.svg"
              alt=""
              width={250}
              height={120}
              className={styles.bannerButton}
            />
            <TeamButton />
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Team
