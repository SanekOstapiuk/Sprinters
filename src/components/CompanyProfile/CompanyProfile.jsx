import classNames from 'classnames/bind'

import Container from '../Container'
import Breadcrumbs from '../Breadcrumbs'
import AchievementCard from '../AchievementCard'
import { companyProfile } from '../../constants/data'
import Icon from '../Icon'

import styles from './CompanyProfile.module.css'
const cx = classNames.bind(styles)

const CompanyProfile = () => {
  const {
    logoSrc,
    title,
    countTrips,
    tripsLabel,
    contacts,
    achievement
  } = companyProfile
  
  return (
    <section className={cx('company-profile')}>
      <Container>
        <Breadcrumbs />
        <img className={cx('stripe-logo')} src={logoSrc} alt={title}/>
        <div className={cx('main-content')}>
          <h1 className={cx('title')}>
            {title}
            <span className={cx('trips')}>{countTrips} {tripsLabel}</span>
          </h1>
          <div className={cx('contacts')}>
            <a href={contacts.mail.link} target='_blank' className={cx('mail')}>
              <Icon name={contacts.mail.icon} />
              <span className={cx('contact-value')}>{contacts.mail.value}</span>
            </a>
            <a href={`tel:${contacts.phone.link}`}>
              <Icon name={contacts.phone.icon} />
              <span className={cx('contact-value')}>{contacts.phone.value}</span>
            </a>
          </div>
          <ul>
            {achievement?.map((item, index) => (
              <AchievementCard
                key={index}
                label={item.label}
                icon={item.icon}
                iconColor={item.iconColor}
                value={item.value}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default CompanyProfile
