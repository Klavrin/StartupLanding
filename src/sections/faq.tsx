import { Element } from 'react-scroll'
import styles from '../styles/faq.module.scss'
import SectionHeader from '@/components/section-header'

const Faq = () => {
  const questions = [
    {
      title: 'Which domain should I purchase?',
      description:
        "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result."
    },
    {
      title: 'What are some tips when choosing a name?',
      description:
        'Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.'
    },
    {
      title: 'What if I need help choosing the right domain?',
      description:
        'Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates.'
    },
    {
      title: 'Can I upgrade or downgrade my web hosting plan?',
      description:
        'The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine.'
    },
    {
      title: 'How do I upgrade the storage capacity of my hosting plan?',
      description:
        'Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.'
    },
    {
      title: 'What is in InMotion Hosting’s uptime rate?',
      description:
        'Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install'
    },
    {
      title: 'Learn from community on Brandwagon',
      description:
        'Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.'
    }
  ]

  return (
    <section>
      <Element className={styles.container} name="Faq">
        <SectionHeader
          slogan="Get yours question answered"
          title="Frequently asked question"
        />

        <div className={styles.questionsContainer}>
          <div className={styles.questionChild}>
            {questions
              .filter((item, index) => index < 3)
              .map((item) => (
                <article key={item.title} className={styles.question}>
                  <h4 className={styles.questionTitle}>{item.title}</h4>
                  <p className={styles.questionDescription}>
                    {item.description}
                  </p>
                </article>
              ))}
          </div>
          <div className={styles.questionChild}>
            {questions
              .filter((item, index) => index >= 3)
              .map((item) => (
                <article key={item.title} className={styles.question}>
                  <h4 className={styles.questionTitle}>{item.title}</h4>
                  <p className={styles.questionDescription}>
                    {item.description}
                  </p>
                </article>
              ))}
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Faq
