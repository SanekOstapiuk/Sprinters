import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

import Icon from '../../components/Icon'

import styles from './CollapsedList.module.css'

const cx = classnames.bind(styles);

const CollapsedList = function ({
  data,
  previewCount = 5,
  showMoreLabel = 'Показати більше',
  showLessLabel = 'Показати менше',
  className,
  children,
}) {
  const [showAll, setShowAll] = React.useState(data.length <= previewCount);

  const isShowBtnNeeded = useMemo(() => {
    return data.length > previewCount;
  }, [data, previewCount])

  const items = useMemo(() => {
    return showAll
      ? data
      : data.slice(0, 5);
  }, [showAll])

  const onShowMoreClick = () => {
    setShowAll(prev =>!prev);
  }

	return (
    <div className={cx('root', className)}>
      <ul className={cx('list')}>
        {items.map((item, index) => (
          <li className={cx('item')} key={index}>{children(item)}</li>
        ))}
      </ul>
      {isShowBtnNeeded && (
        <button
          type='button'
          className={cx('show-more')}
          onClick={onShowMoreClick}
        >
          {showAll? showLessLabel : showMoreLabel}
          <Icon name="arrow" className={cx('show-more-arrow', {up: showAll})} />
        </button>
      )}
    </div>
  )
}

CollapsedList.propTypes = {
	data: PropTypes.any,
  previewCount: PropTypes.number,
  showMoreLabel: PropTypes.string,
  showLessLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
}

export default CollapsedList;
