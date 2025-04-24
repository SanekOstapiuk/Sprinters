import classNames from 'classnames/bind'

import testimonials from '../../constants/testimonials'
import Container from '../../components/Container'
import TestimonialSlider from '../../components/TestimonialSlider'
import Button from '../../components/Button'

import styles from './Testimonials.module.css'
const cx = classNames.bind(styles)

const Testimonials = () => {
  const {
    title,
    highlightedText,
    description,
    btnText,
    peoples
  } = testimonials

  return (
    <section className={cx('people-say')}>
      <Container className={cx('wrapper')}>
        <div className={cx('about')}>
          <h2 className={cx('title')}>
            {title}
            <span className={cx('highlighted-text')}>
              {highlightedText}
            </span>
          </h2>
          <p className={cx('description')}>{description}</p>
          <Button className={cx('review-btn')}>{btnText}</Button>
        </div>
        <TestimonialSlider peoples={peoples}/>
      </Container>
    </section>
  )
}

export default Testimonials
