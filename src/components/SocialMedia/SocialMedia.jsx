import classNames from 'classnames/bind'

import { socialMedia } from '../../constants/data'
import SocialBlock from '../SocialBlock'

import styles from './SocialMedia.module.css'
const cx = classNames.bind(styles)

const SocialMedia = () => {
  return (
    <>
      <h3 className={cx('title')}>{socialMedia.title}</h3>
      <SocialBlock />
      <div className={cx('gallery')}>
        {socialMedia?.images?.map((img, index) => (
          <img
            alt='bus'
            key={index}
            src={img}
            className={cx('gallery-image')}
          />
        ))}
      </div>
    </>
  )
}

export default SocialMedia
