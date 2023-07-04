import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs'
import styles from '../styles/pricing.module.scss'
import CustomButton from './custom-button'
import Carousel from './carousel/carousel'

const PricingContent = () => {
  const metaData = [
    {
      plan: 'Starter Pack',
      pricing: '$18.99',
      includes: [true, true, false, false, false],
      trial: '15 days free trial'
    },
    {
      plan: 'Premium Pack',
      pricing: '$29.99',
      includes: [true, true, true, true, false],
      trial: '30 days free trial',
      recommended: true
    },
    {
      plan: 'Custom Pack',
      pricing: '$23.99',
      includes: [true, true, true, true, false],
      trial: '30 days free trial'
    },
    {
      plan: 'Ultimate Pack',
      pricing: '$35.99',
      includes: [true, true, true, true, true],
      trial: '45 days free trial'
    }
  ]

  const features = [
    'Full Access Library',
    'Multiple users',
    'Refund Policy',
    'Google Analytics',
    '24/7 support'
  ]

  return (
    <div className={styles.contents}>
      <ul className={styles.unorderedList}>
        {features.map((item) => (
          <li key={item} className={styles.feature}>
            {item}
          </li>
        ))}
      </ul>

      <Carousel>
        <div className={styles.allPlans} style={{ pointerEvents: 'auto' }}>
          {metaData.map((item) => (
            <div
              key={item.plan}
              className={styles.planContainer}
              style={{
                boxShadow: item.recommended
                  ? '0px 15px 50px 0px rgba(91, 132, 193, 0.10)'
                  : '',
                borderRadius: item.recommended
                  ? '0 0 8px 8px'
                  : '8px 8px 8px 8px'
              }}
            >
              {item.recommended && (
                <span className={styles.recommended}>RECOMMENDED</span>
              )}
              <div>
                <p className={styles.plan}>{item.plan}</p>
                <h3 className={styles.pricing}>
                  {item.pricing}/
                  <span style={{ fontSize: 16, fontWeight: 400 }}>per mo.</span>
                </h3>
              </div>

              <div className={styles.planIncludes}>
                {item.includes.map((item, index) =>
                  item ? (
                    <span
                      key={`planIncludes__${index}`}
                      className={styles.icon}
                    >
                      <h4 className={styles.responsiveFeature}>
                        {features[index]}
                      </h4>
                      <BsFillCheckCircleFill size={20} color="#3CC68A" />
                    </span>
                  ) : (
                    <span
                      key={`planIncludes__${index}`}
                      className={styles.icon}
                    >
                      <h4 className={styles.responsiveFeature}>
                        {features[index]}
                      </h4>
                      <BsFillXCircleFill size={20} color="#CED7E1" />
                    </span>
                  )
                )}
              </div>

              <div>
                <CustomButton
                  title="Choose Plan"
                  isWhite={!item.recommended ? true : false}
                />
                <p className={styles.trial}>{item.trial}</p>
              </div>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  )
}

export default PricingContent
