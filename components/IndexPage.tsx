import AboutSection from 'components/AboutSection'
import Layout from 'components/BlogLayout'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import Container from 'components/PortfolioContainer'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Testimonials from 'components/Testimonials'
import * as demo from 'lib/demo.data'
import type { Settings } from 'lib/sanity.queries'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  //   posts: Post[]
  settings: Settings
}) {
  const { preview, loading, settings } = props
  //   const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <Navbar />
          <Header title={title} description={description} level={1} />
          <AboutSection />
          <Projects />
          <Skills />
          <Testimonials />
          <Footer />
        </Container>
      </Layout>
    </>
  )
}
