import React from 'react';
import { FormattedMessage } from 'react-intl';

import { AndMiniplayerFragment } from '@lib/generated/graphql';
import usePlaybackSession from '@lib/usePlaybackSession';

import styles from './buttonSpeed.module.scss';

export default function ButtonSpeed({
	recording,
}: {
	recording: AndMiniplayerFragment;
}): JSX.Element {
	const { setSpeed, speed } = usePlaybackSession(recording);
	const speeds = [1, 1.5, 1.75, 2];

	return (
		<button
			className={styles.button}
			onClick={() => {
				const newSpeed = speeds.find((s) => s > (speed || 0)) || 1;
				setSpeed(newSpeed);
			}}
		>
			<FormattedMessage
				id={'molecule-buttonSpeed__buttonLabel'}
				defaultMessage={'{speed}x'}
				description={'button speed button label'}
				values={{ speed }}
			/>
		</button>
	);
}
