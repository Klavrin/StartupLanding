import Layout from '@/components/layout'
import Masthead from '@/sections/masthead'
import Service from '@/sections/service'
import VideoCall from '@/sections/video-call'
import Pricing from '@/sections/pricing'
import Agencies from '@/sections/agencies'
import Blog from '@/sections/blog'
import Faq from '@/sections/faq'
import Team from '@/sections/team'

const Main = () => {
  return (
    <Layout>
      <Masthead />
      <Service />
      <VideoCall />
      <Pricing />
      <Agencies />
      <Blog />
      <Faq />
      <Team />
    </Layout>
  )
}

export default Main
