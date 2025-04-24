import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { hasFlag } from 'country-flag-icons'
import * as flags from 'country-flag-icons/react/3x2'

import CollapsedList from '../../components/CollapsedList'
import {supportedCountries} from '../../constants/widgets'

import styles from './SupportedCountries.module.css'

const cx = classnames.bind(styles);

const SupportedCountries = function ({className}) {
	const prepareItems = supportedCountries.listOfCountries.map(country => ({
		...country,
		icon: hasFlag(country.key) ? flags[country.key] : null,
	}))

	return (
		<div className={cx('root', className)}>
			<h3 className={cx('title')}>{supportedCountries.title}</h3>
			<CollapsedList
				data={prepareItems}
				showMoreLabel={supportedCountries.showMoreBtn}
				showLessLabel={supportedCountries.showLessBtn}
			>
				{({name, icon: IconFlag}) => (
					<span className={cx('item')}>
						<IconFlag className={cx('icon')} />
						{name}
					</span>
				)}
			</CollapsedList>
		</div>
	)
}

SupportedCountries.propTypes = {
	classNames: PropTypes.string
}

export default SupportedCountries;
