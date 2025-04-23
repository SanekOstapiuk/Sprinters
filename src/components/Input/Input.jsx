import classNames from 'classnames/bind'

import styles from './Input.module.css'
const cx = classNames.bind(styles)

const Input = ({placeholder, type = 'email'}) => {
  return (
    <input type={type} placeholder={placeholder} className={cx('input')}/>
  )
}

export default Input
