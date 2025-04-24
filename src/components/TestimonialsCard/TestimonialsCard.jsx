import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Rating from '../Rating'
import {defaultPeoplePhoto} from '../../constants/data'

import styles from './TestimonialsCard.module.css'
const cx = classNames.bind(styles)

const TestimonialsCard = ({photo = defaultPeoplePhoto, name, city, date, text, rating = 0}) => {
  return (
    <div className={cx('card')}>
      <div className={cx('card-content')}>
        <img
          width={72}
          height={72}
          src={photo}
          alt={name}
          className={cx('photo')}
        />
        <div className={cx('people-info')}>
          <div className={cx('name')}>{name}</div>
          <p className={cx('city')}>{city}</p>
          <p className={cx('date')}>{date}</p>
        </div>
        <p className={cx('description')}>{text}</p>
      </div>
      <Rating rating={rating} />
    </div>
  )
}

export default TestimonialsCard

TestimonialsCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  city: PropTypes.number,
  date: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
}
