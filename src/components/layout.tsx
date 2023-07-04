import Navbar from './navbar/navbar'
import Footer from './footer'
import { LayoutChildrenProps } from '@/types'

const Layout = ({ children }: LayoutChildrenProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
