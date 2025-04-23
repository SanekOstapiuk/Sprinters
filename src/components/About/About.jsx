import classNames from 'classnames/bind'

import { about } from '../../constants/data'

import styles from './About.module.css'
const cx = classNames.bind(styles)

const About = () => {
  return (
    <>
      <h3 className={cx('title')}>{about.title}</h3>
      <p className={cx('description')}>{about.description}</p>
    </>
  )
}

export default About
