import classNames from 'classnames/bind'

import { breadcrunbs } from '../../constants/data'

import styles from './Breadcrumbs.module.css'
const cx = classNames.bind(styles)

const Breadcrumbs = () => {
  return (
    <div className={cx('breadcrumbs')}>
      {breadcrunbs?.map((item, index) => (
        <span className={cx('item')} key={index}>{item}</span>
      ))}
    </div>
  )
}

export default Breadcrumbs
