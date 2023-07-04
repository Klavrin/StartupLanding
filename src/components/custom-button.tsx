import { CustomButtonProps } from '@/types'
import Link from 'next/link'
import styles from '../styles/custom-button.module.scss'

const CustomButton = ({
  title,
  isWhite,
  height = 45,
  style
}: CustomButtonProps) => {
  return (
    <Link href="/" className={style}>
      <button
        style={{ height: height }}
        className={isWhite ? styles.buttonWhite : styles.buttonDefault}
      >
        {title}
      </button>
    </Link>
  )
}

export default CustomButton
