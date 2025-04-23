import classNames from 'classnames/bind'

import { header } from '../../constants/data'
import Container from '../Container'
import Navigation from '../Navigation'
import Button from '../Button'

import styles from './Header.module.css'
const cx = classNames.bind(styles)

const Header = () => {
  const {
    logo,
    altText,
    createBtn,
    loginBtn,
    menu
  } = header

  return (
    <div className={cx('header')}>
      <Container className={cx('wrapper')}>
        <a href='/' className={cx('logo')}>
          <img className={cx('image')} src={logo} alt={altText}/>
        </a>
        <Navigation menu={menu}/>
        <div className={cx('action-btns')}>
          <Button theme='main-revert' className={cx('create-btn')}>
            {createBtn}
          </Button>
          <Button className={cx('login-btn')}>
            {loginBtn}
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Header
