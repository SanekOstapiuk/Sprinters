import classNames from 'classnames/bind'

import Header from '../../components/Header'
import CompanyProfile from '../../components/CompanyProfile'
import Container from '../../components/Container'
import About from '../../components/About'
import SocialMedia from '../../components/SocialMedia'
import OurDrivers from '../../widgets/OurDrivers'
import Service from '../../widgets/Service'
import Testimonials from '../../widgets/Testimonials'

import styles from './Homepage.module.css'
const cx = classNames.bind(styles)

const Homepage = () => {
  return (
    <>
      <Header />
      <CompanyProfile />
      <Container className={cx('content-wrapper')}>
        <main className={cx('main')}>
          <About />
          <SocialMedia />
        </main>
        <aside className={cx('aside')}>
          Aside block will be soon
        </aside>
      </Container>
      <OurDrivers />
      <Service />
      <Testimonials />
    </>
  )
}

export default Homepage
