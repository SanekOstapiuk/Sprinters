import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Icon.module.css'

const cx = classNames.bind(styles)

const Icon = ({ name, size = 24, color = 'currentColor', className }) => (
  <svg width={size} height={size} color={color} className={cx(className)}>
    <use xlinkHref={`/sprite.svg#${name}`} />
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}

export default Icon
