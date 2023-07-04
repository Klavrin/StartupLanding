import { EmbededVideoProps } from '@/types'
import styles from '../../styles/masthead.module.scss'

const EmbededVideo = ({ setVisible }: EmbededVideoProps) => {
  return (
    <div className={styles.embededVideo} onClick={() => setVisible(false)}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/a3ICNMQW7Ok`}
        style={{ border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

export default EmbededVideo
