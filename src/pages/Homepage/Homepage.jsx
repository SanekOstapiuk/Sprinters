import classNames from 'classnames/bind'

import Header from '../../components/Header'
import CompanyProfile from '../../components/CompanyProfile'

import styles from './Homepage.module.css'
const cx = classNames.bind(styles)

const Homepage = () => {
  return (
    <>
      <Header />
      <CompanyProfile />
    </>
  )
}

export default Homepage
