import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './Button.module.css'
const cx = classNames.bind(styles)

const Button = ({theme = 'main', className, children}) => {
  return (
    <button
      type='button'
      className={cx('button', theme, className)}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  theme: PropTypes.oneOf(['main', 'main-revert']),
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button
