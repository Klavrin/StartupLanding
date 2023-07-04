import styles from '../../styles/masthead.module.scss'
import CustomButton from '@/components/custom-button'
import SpecialButton from './masthead-special-button'
import { ButtonsProps } from '@/types'

export const Buttons = ({
  firstButtonTitle,
  secondButtonTitle
}: ButtonsProps) => {
  return (
    <div className={styles.buttons}>
      <CustomButton title={firstButtonTitle} />
      <SpecialButton title={secondButtonTitle} />
    </div>
  )
}

export default Buttons
