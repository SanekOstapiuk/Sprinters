import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import {defaultPeoplePhoto} from '../../constants/data'

import styles from './DriverCard.module.css'
const cx = classNames.bind(styles)

const DriverCard = ({ photo = defaultPeoplePhoto, name, experience, social, iconsColor }) => {
  return (
    <div className={cx('driver-card')}>
      <div className={cx('card-content')}>
        <img src={photo} alt={name} className={cx('photo')}/>
        <div className={cx('name')}>{name}</div>
        <span className={cx('experience')}>{experience}</span>
      </div>
      <div className={cx('social')}>
        <a href={social.instagram.link} className={cx('social-link')}>
          <Icon name={social.instagram.icon} color={iconsColor} className={cx('social-icon')}/>
        </a>
        <a href={social.linkedin.link} className={cx('social-link')}>
          <Icon name={social.linkedin.icon} color={iconsColor} className={cx('social-icon')}/>
        </a>
      </div>
    </div>
  )
}

export default DriverCard

DriverCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  exp: PropTypes.string,
  social: PropTypes.object
}
