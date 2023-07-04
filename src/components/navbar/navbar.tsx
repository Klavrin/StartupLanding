import Link from 'next/link'
import Image from 'next/image'
import { scroller, Link as ScrollLink } from 'react-scroll'
import styles from '../../styles/navbar.module.scss'
import CustomButton from '../custom-button'
import NavbarDrawer from './navbar-drawer'
import { BsList } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [drawerActive, setDrawerActive] = useState(false)

  const metaData = [
    'Home',
    'Services',
    'Video Call',
    'Pricing',
    'Our Clients',
    'Blog',
    'Faq',
    'Our Team'
  ]

  const handleScroll = () => {
    setIsSticky(window.scrollY === 0 ? false : true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={styles.navbar}
      style={{
        boxShadow: isSticky ? '0px 3px 7px -1px rgba(0, 0, 0, 0.05)' : 'initial'
      }}
    >
      <div
        className={styles.container}
        style={{
          background: isSticky ? 'white' : ''
        }}
      >
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="StartupLanding"
            width={154}
            height={45}
            className={styles.image}
          />
        </Link>

        <div className={styles.linksContainer}>
          {metaData.map((data) => (
            <ScrollLink
              activeStyle={{
                color: '#fabf62',
                transition: 'color 0.25s ease-in-out'
              }}
              to={data}
              key={data}
              spy
              href="/"
              offset={-82}
              className={styles.link}
              onClick={() => {
                scroller.scrollTo(data, {
                  duration: 500,
                  delay: 0,
                  smooth: 'easeInOut',
                  offset: -82
                })
              }}
            >
              {data}
            </ScrollLink>
          ))}
          <BsList
            size={24}
            color="#02073e"
            className={styles.hamburgerIcon}
            onClick={() => setDrawerActive(true)}
          />
        </div>

        <CustomButton title="Purchase Now" height={50} style={styles.button} />

        <NavbarDrawer
          active={drawerActive}
          setDrawerActive={setDrawerActive}
          metaData={metaData}
        />
      </div>
    </nav>
  )
}
export default Navbar
