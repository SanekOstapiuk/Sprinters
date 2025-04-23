import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'

import TestimonialsCard from '../TestimonialsCard'

import styles from './TestimonialSlider.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
const cx = classNames.bind(styles)

const TestimonialSlider = ({peoples}) => {
  return (
    <div className={cx('slider')}>
      <Swiper
        modules={[Mousewheel, Pagination]}
        spaceBetween={16}
        slidesPerView={2}
        pagination={{ clickable: true }}
        grabCursor={true}
        mousewheel={true}
      >
        {peoples.map((people, index) => (
          <SwiperSlide key={index}>
            <TestimonialsCard
              photo={people.photo}
              name={people.name}
              city={people.city}
              date={people.date}
              text={people.text}
              rating={people.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
