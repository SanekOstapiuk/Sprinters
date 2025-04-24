import classNames from 'classnames/bind'

import Container from '../../components/Container'
import serviceData from '../../constants/service'
import Icon from '../../components/Icon'

import styles from './Service.module.css'
const cx = classNames.bind(styles)

const Service = () => {
  const {title, description, comfort, iconsColor} = serviceData

  return (
    <Container className={cx('service')}>
      <h3 className={cx('title')}>{title}</h3>
      <p className={cx('description')}>{description}</p>
      <ul className={cx('list')}>
        {comfort?.map((item, index) => (
          <li className={cx('item')} key={index}>
            <Icon name={item.icon} size='48' color={iconsColor} className={cx('service-icon')}/>
            <h4 className={cx('label')}>{item.label}</h4>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Service
