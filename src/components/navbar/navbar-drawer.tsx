import Image from 'next/image'
import Link from 'next/link'
import { scroller } from 'react-scroll'
import styles from '../../styles/navbar.module.scss'
import button from '../../styles/custom-button.module.scss'
import { BsXLg } from 'react-icons/bs'

interface NavbarDrawerProps {
  active: boolean
  setDrawerActive: Function
  metaData: string[]
}

const NavbarDrawer = ({
  active,
  setDrawerActive,
  metaData
}: NavbarDrawerProps) => {
  return (
    <div
      className={styles.drawerContainer}
      style={{
        display: active ? 'block' : 'none'
      }}
    >
      <div
        className={styles.drawer}
        style={{
          display: active ? 'block' : 'none'
        }}
      >
        <div className={styles.drawerHeader}>
          <Image src="/assets/logo.svg" alt="" width={200} height={50} />
          <BsXLg size={24} onClick={() => setDrawerActive(false)} />
        </div>

        <div className={styles.drawerInnerContainer}>
          <ul className={styles.drawerLinksContainer}>
            {metaData.map((item) => (
              <li key={item} className={styles.drawerLink}>
                <Link
                  href="/"
                  style={{ color: '#0f2137' }}
                  onClick={() => {
                    scroller.scrollTo(item, {
                      duration: 500,
                      delay: 0,
                      smooth: 'easeInOut',
                      offset: -82
                    })
                    setDrawerActive(false)
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.drawerButtonContainer}>
            <button
              className={button.buttonDefault}
              style={{ width: '100%', height: 45 }}
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarDrawer
