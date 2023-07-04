import { Element } from 'react-scroll'
import styles from '../styles/pricing.module.scss'
import SectionHeader from '@/components/section-header'
import PricingContent from '@/components/pricing-content'

const Pricing = () => {
  return (
    <section>
      <Element className={styles.container} name="Pricing">
        <SectionHeader
          slogan="Deal for your business"
          title="Meet our pricing plans that suit you"
        />

        <PricingContent />
      </Element>
    </section>
  )
}

export default Pricing
