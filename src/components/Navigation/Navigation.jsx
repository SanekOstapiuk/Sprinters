import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './Navigation.module.css'
const cx = classNames.bind(styles)

const Navigation = ({menu}) => {
  return (
    <nav>
      <ul className={cx('menu')}>
        {menu?.map((item, index) => (
          <li className={cx('menu-item')} key={index}>
            <a href={item.link} className={cx('menu-link', item.active ? 'active' : null)}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      active: PropTypes.bool
    })
  ).isRequired
}

export default Navigation
