import classNames from 'classnames/bind'

import Icon from '../Icon/index.js'
import { socialBlock } from '../../constants/data.js'

import styles from './SocialBlock.module.css'
const cx = classNames.bind(styles)

const SocialBlock = () => {
  const { facebook, twitter } = socialBlock

  return (
    <ul className={cx('social')}>
      <li>
        <a href={twitter.link} className={cx('social-link')}>
          <Icon name={twitter.icon} color={twitter.iconColor} className={cx('social-icon')} />
          <span className={cx('social-value')}>{twitter.value}</span>
        </a>
      </li>
      <li>
        <a href={facebook.link} className={cx('social-link')}>
          <Icon name={facebook.icon} color={facebook.iconColor} className={cx('social-icon')}/>
          <span className={cx('social-value')}>{facebook.value}</span>
        </a>
      </li>
    </ul>
  )
}

export default SocialBlock
