import Image from 'next/image'
import { Element } from 'react-scroll'
import styles from '../styles/service.module.scss'
import SectionHeader from '@/components/section-header'

const Service = () => {
  const metaData = [
    {
      icon: 'assets/features-section/single-avatar.svg',
      title: 'Simplify communications',
      description:
        'Get your info tests delivered athome collect a sample from your progress tests'
    },
    {
      icon: 'assets/features-section/multi-avatar.svg',
      title: 'Quick Response',
      description:
        'Get your info tests delivered athome collect a sample from your progress tests'
    },
    {
      icon: 'assets/features-section/building-avatar.svg',
      title: 'Ultimate Organization Support',
      description:
        'Get your info tests delivered athome collect a sample from your progress tests'
    }
  ]

  return (
    <section>
      <Element className={styles.container} name="Services">
        <SectionHeader
          slogan="Ideal solutions for you"
          title="Go beyond ultimate features"
        />

        <div className={styles.featuresContainer}>
          {metaData.map((item) => (
            <div key={item.title} className={styles.feature}>
              <Image
                src={item.icon}
                alt=""
                width={70}
                height={70}
                className={styles.featureImage}
              />

              <div>
                <h4 className={styles.featureTitle}>{item.title}</h4>
                <p className={styles.featureDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Element>
    </section>
  )
}

export default Service
