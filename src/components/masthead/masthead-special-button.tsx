import { useState } from 'react'
import { SpecialButtonProps } from '@/types'
import EmbededVideo from './masthead-embeded-video'
import styles from '../../styles/masthead.module.scss'

const SpecialButton = ({ title }: SpecialButtonProps) => {
  const [visible, setVisible] = useState(false)

  return (
    <span className={styles.buttons}>
      <button className={styles.specialButton} onClick={() => setVisible(true)}>
        {title}
      </button>
      {visible && <EmbededVideo setVisible={setVisible} />}
    </span>
  )
}

export default SpecialButton
