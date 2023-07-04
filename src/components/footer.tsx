import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  const metaData = [
    {
      title: 'About Us',
      links: ['Support Center', 'Customer Support', 'About Us', 'Copyright']
    },
    {
      title: 'Our Information',
      links: [
        'Return Policy',
        'Privacy Policy',
        'Terms & Conditions',
        'Site Map'
      ]
    },
    {
      title: 'My Account',
      links: [
        'Press inquiries',
        'Social Media',
        'Directories',
        'Images & B-roll'
      ]
    },
    { title: 'Connect', links: ['Facebook', 'Twitter', 'Github', 'Dribbble'] }
  ]

  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.generalInfo}>
          <Image
            src="/assets/logo.svg"
            alt="StartupLanding"
            width={195}
            height={40}
          />
          <div className={styles.termsAndPrivacy}>
            <Link href="/" className={styles.link}>
              Terms of use
            </Link>
            <span style={{ marginInline: 4 }}> | </span>
            <Link href="/" className={styles.link}>
              Privacy
            </Link>
          </div>
          <p className={styles.copyright}>Copyright by 2019 Redq, Inc</p>
        </div>

        <div className={styles.footerMenu}>
          {metaData.map((item, index) => (
            <div key={item.title} className={styles.footerLinks}>
              <h4 className={styles.title}>{item.title}</h4>
              <ul className={styles.list}>
                {item.links.map((link) => (
                  <li key={link} className={styles.footerLink}>
                    {index === 3 && (
                      <Image
                        src={`/assets/footer/${link}.svg`}
                        alt=""
                        width={20}
                        height={20}
                      />
                    )}
                    <Link href="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
