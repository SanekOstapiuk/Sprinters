import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import styles from './AchievementCard.module.css'
const cx = classNames.bind(styles)

const AchievementCard = ({icon, label, value, iconColor}) => {
  return (
    <li className={cx('card')}>
      <div className={cx('icon-wrapper')}>
        <Icon name={icon} color={iconColor} />
      </div>
      <div className={cx('content-wrapper')}>
        <h6>{label}</h6>
        <span className={cx('card-value')}>{value}</span>
      </div>
    </li>
  )
}

export default AchievementCard

AchievementCard.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  iconColor: PropTypes.string
}
