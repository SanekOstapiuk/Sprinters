import classNames from 'classnames/bind'

import { breadcrumbs } from '../../constants/data'

import styles from './Breadcrumbs.module.css'
const cx = classNames.bind(styles)

const Breadcrumbs = () => {
  return (
    <div className={cx('breadcrumbs')}>
      {breadcrumbs?.map((item, index) => (
        <span className={cx('item')} key={index}>{item}</span>
      ))}
    </div>
  )
}

export default Breadcrumbs
