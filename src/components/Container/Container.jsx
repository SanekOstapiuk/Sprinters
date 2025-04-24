import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './Container.module.css'
const cx = classNames.bind(styles)

const Container = ({ children, className }) => {
  return (
    <div className={cx('container', className)}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Container
