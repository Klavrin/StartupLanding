import Image from 'next/image'
import Link from 'next/link'
import { Element } from 'react-scroll'
import styles from '../styles/blog.module.scss'
import SectionHeader from '@/components/section-header'

const Blog = () => {
  const sectionHeaderData = {
    slogan: 'Ideal solutions for you',
    title: 'Go beyond ultimate features'
  }

  const metaData = [
    {
      image: 'blog-1.svg',
      title: 'Introducing our newest team with great experience',
      description:
        'Brian Halligan knows that you need more than a great product to have a great brand.',
      hasLearnMore: true
    },
    {
      image: 'blog-2.svg',
      title:
        'New banking application has  developed and we are expecting good feedback',
      hasLearnMore: true
    },
    {
      image: 'blog-3.svg',
      title: 'Ui/UX industry are doing great job in previous year history'
    },
    {
      image: 'blog-4.svg',
      title: 'Develop you design experience with figma features.'
    }
  ]

  return (
    <section className={styles.blog}>
      <Element className={styles.container} name="Blog">
        <SectionHeader
          title={sectionHeaderData.title}
          slogan={sectionHeaderData.slogan}
          isBlog
        />

        <div className={styles.blogPosts}>
          {metaData.map((post, index) => (
            <div
              key={post.title}
              className={styles.post}
              style={{ gridRow: index < 2 ? 'span 2' : 'span 1' }}
            >
              <Image
                src={`assets/blog/${post.image}`}
                alt=""
                width={350}
                height={252}
                className={styles.postImage}
              />
              <h4>{post.title}</h4>
              {post.description && <p>{post.description}</p>}
              {post.hasLearnMore && <Link href="/">Learn more &gt;</Link>}
            </div>
          ))}
        </div>
      </Element>
    </section>
  )
}

export default Blog
