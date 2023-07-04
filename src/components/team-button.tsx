import Image from 'next/image'
import styles from '../styles/team.module.scss'

const TeamButton = () => {
  return (
    <div className={styles.teamButtonContainer}>
      <Image
        src="/assets/team/highlighters.svg"
        alt=""
        width={72}
        height={25}
        className={styles.firstImage}
      />
      <button className={styles.teamButton}>CONTACT US NOW</button>
      <Image
        src="/assets/team/highlighters.svg"
        alt=""
        width={72}
        height={25}
        className={styles.secondImage}
      />
    </div>
  )
}

export default TeamButton
