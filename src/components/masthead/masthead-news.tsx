import Link from 'next/link'
import { NewsProps } from '@/types'
import { BsChevronRight } from 'react-icons/bs'
import styles from '../../styles/masthead.module.scss'

const News = ({ description }: NewsProps) => {
  return (
    <Link href="/" className={styles.news}>
      <div className={styles.newsIcon}>NEWS</div>
      <p className={styles.newsDescription}>{description}</p>
      <BsChevronRight className={styles.newsArrow} color="#02073e" size={12} />
    </Link>
  )
}

export default News
