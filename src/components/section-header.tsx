import Link from 'next/link'
import styles from '../styles/section-header.module.scss'
import { BsChevronRight } from 'react-icons/bs'

interface SectionHeaderProps {
  title: string
  slogan?: string
  description?: string
  isVideoCall?: boolean
  isBlog?: boolean
  hasExploreDetails?: boolean
}

const SectionHeader = ({
  title,
  slogan,
  description,
  isVideoCall,
  isBlog,
  hasExploreDetails
}: SectionHeaderProps) => {
  return (
    <div className={styles.container}>
      {slogan && <p className={styles.slogan}>{slogan}</p>}
      <h2
        className={isVideoCall ? styles.titleVideoCall : styles.title}
        style={{ color: isBlog ? 'white' : '' }}
      >
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
      {hasExploreDetails && (
        <Link href="/" className={styles.exploreDetails}>
          Explore Details
          <BsChevronRight size={14} />
        </Link>
      )}
    </div>
  )
}

export default SectionHeader
