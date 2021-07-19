import React from 'react';
import { useIntl } from 'react-intl';

import { useIsRecordingFavorited } from '@lib/api';

import IconUnavorite from '../../../public/img/icon-fav-filled.svg';
import IconFavorite from '../../../public/img/icon-fav-outline.svg';

import styles from './buttonFavorite.module.scss';

export default function ButtonFavorite({ id }: { id: string }): JSX.Element {
	const { isRecordingFavorited, toggleFavorited } = useIsRecordingFavorited(id);
	const intl = useIntl();
	const label = isRecordingFavorited
		? intl.formatMessage({
				id: 'RecordingFavorite__unfavorite',
				defaultMessage: 'Unfavorite',
				description: 'Recording unfavorite button label',
		  })
		: intl.formatMessage({
				id: 'RecordingFavorite__favorite',
				defaultMessage: 'Favorite',
				description: 'Recording favorite button label',
		  });

	return (
		<button
			className={styles.button}
			aria-label={label}
			aria-pressed={isRecordingFavorited}
			onClick={() => toggleFavorited()}
		>
			{isRecordingFavorited ? (
				<IconUnavorite alt={'Favorite'} data-testid={'unfavorite-icon'} />
			) : (
				<IconFavorite alt={'Favorite'} data-testid={'favorite-icon'} />
			)}
		</button>
	);
}
