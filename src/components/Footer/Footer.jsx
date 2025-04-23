import classNames from 'classnames/bind'

import Container from '../Container'
import Input from '../Input/'
import Button from '../Button'
import Icon from '../Icon'
import footerData from '../../constants/footer'
import {sendBtn} from '../../constants/data'

import styles from './Footer.module.css'
const cx = classNames.bind(styles)

const Footer = () => {
  const {
    logo,
    title,
    clients,
    carriers,
    feedback,
    copyright,
    social,
    socialIconColor
  } = footerData

  return (
    <section className={cx('footer')}>
      <Container className={cx('footer-wrapper')}>
        <div className={cx('footer-top')}>
          <div className={cx('inform')}>
            <img
              src={logo}
              alt='sprinters logo'
              width={160}
              height={29}
              className={cx('image')}
            />
            <p className={cx('footer-title')}>{title}</p>
          </div>
          <div className={cx('links')}>
            <div className={cx('clients')}>
              <h5 className={cx('title')}>{clients.title}</h5>
              <ul>
                {clients.links?.map((link, index) => (
                  <li key={index}>
                    <a href={link?.link} className={cx('footer-link')}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx('carriers')}>
              <h5 className={cx('title')}>{carriers.title}</h5>
              <ul>
                {carriers.links?.map((link, index) => (
                  <li key={index}>
                    <a href={link?.link} className={cx('footer-link')}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cx('feedback')}>
            <h5 className={cx('title', 'feedback-title')}>{feedback.title}</h5>
            <p className={cx('feedback-description')}>{feedback.description}</p>
            <div className={cx('feedback-form')}>
              <Input placeholder={feedback.placeholder} />
              <Button>{sendBtn}</Button>
            </div>
            <a className={cx('phone', 'feedback-link')} href={`tel:${feedback.phone.link}`}>
              <Icon className={cx('phone-icon')} name={feedback.phone.icon} color={feedback.iconsColor}/>
              <span className={cx('phone-label')}>{feedback.phone.value}</span>
            </a>
            <a className={cx('email', 'feedback-link')} href={`mailto:${feedback.email.link}`}>
              <Icon className={cx('email-icon')} name={feedback.email.icon} color={feedback.iconsColor}/>
              <span className={cx('email-label')}>{feedback.email.value}</span>
            </a>
          </div>
        </div>
        <div className={cx('footer-bottom')}>
          <p className={cx('copyright')}>{copyright}</p>
          <ul className={cx('footer-social')}>
            {social.map((item, index) => (
              <li key={index}>
                <a className={cx('social-link')} href={item.link}>
                  <Icon name={item.icon} color={socialIconColor} size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Footer
