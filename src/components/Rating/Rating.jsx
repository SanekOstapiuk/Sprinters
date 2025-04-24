import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './Rating.module.css'

const cx = classNames.bind(styles)

const Rating = ({rating}) => {
  const currentRating = (100 * rating) / 5

  return (
    <div className={cx('star-wrapper')}>
      <span className={cx('grey-stars')} />
      <span
        className={cx('blue-stars')}
        style={{ width: `${currentRating}%` }}
      />
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number
}

export default Rating
