import classNames from 'classnames/bind'
import {useState} from 'react'

import {ourDrivers} from '../../constants/drivers'
import Container from '../../components/Container'
import DriverCard from '../../components/DriverCard'

import styles from './OurDrivers.module.css'
const cx = classNames.bind(styles)

const OurDrivers = () => {
  const [showAll, setShowAll] = useState(false)
  const firstDrivers = ourDrivers.drivers.slice(0, 5)
  const showDrivers = showAll ? ourDrivers.drivers : firstDrivers

  return (
    <Container>
      <div className={cx('drivers')}>
        <h3 className={cx('title')}>{ourDrivers.title}</h3>
        <button
          type='button'
          className={cx('all-drivers')}
          onClick={() => setShowAll(prev => !prev)}
        >
          {ourDrivers.allDriversLabel} ({ourDrivers.drivers.length})
        </button>
        <ul className={cx('drivers-list')}>
          {showDrivers.map((driver, index) => (
            <DriverCard
              key={index}
              photo={driver?.image}
              name={driver?.name}
              experience={driver?.experience}
              social={driver?.social}
              iconsColor={ourDrivers.iconsColor}
            />
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default OurDrivers
