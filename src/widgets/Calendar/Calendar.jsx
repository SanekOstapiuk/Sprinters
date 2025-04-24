import classNames from 'classnames/bind'
import {DayPicker} from 'react-day-picker'
import {useState} from 'react'

import {calendar} from '../../constants/widgets'
import Icon from '../../components/Icon'

import 'react-day-picker/dist/style.css';
import styles from './Calendar.module.css';

const cx = classNames.bind(styles);

const Calendar = () => {
  const [selected, setSelected] = useState();
  const onOrderBtnClick = () => {
    alert(`Обрані дати: ${JSON.stringify(selected)}`)
  }

  return (
    <div className={cx('calendar')}>
      <h3 className={cx('title')}>{calendar.title}</h3>
      <div className={cx('calendar-wrapper')}>
        <button
          type='button'
          className={cx('calendar-btn')}
          onClick={onOrderBtnClick}
        >
          <Icon
            name={calendar.icon}
            color={calendar.iconColor}
            className={cx('icon')}
            size={20}
          />
          <span className={cx('btn-label')}>
            {calendar.btnText}
          </span>
        </button>
        <DayPicker
          mode="multiple"
          weekStartsOn={1}
          showOutsideDays
          selected={selected}
          onSelect={setSelected}
          modifiers={{
            disabled: (date) => date < new Date(new Date().setHours(0, 0, 0, 0))
          }}
          modifiersClassNames={{
            selected: cx('selected'),
            today: cx('today'),
          }}
          className={cx('dayPicker')}
          classNames={{nav: cx('nav')}}
        />
      </div>
    </div>
  )
}

export default Calendar
