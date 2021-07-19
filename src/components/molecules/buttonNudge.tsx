import React from 'react';
import { useIntl } from 'react-intl';

import { AndMiniplayerFragment } from '@lib/generated/graphql';
import usePlaybackSession from '@lib/usePlaybackSession';

import BackIcon from '../../../public/img/icon-nudge-left.svg';
import ForwardIcon from '../../../public/img/icon-nudge-right.svg';

import styles from './buttonNudge.module.scss';

export default function ButtonNudge({
	recording,
	reverse = false,
}: {
	recording: AndMiniplayerFragment;
	reverse?: boolean;
}): JSX.Element {
	const intl = useIntl();
	const session = usePlaybackSession(recording);

	const label = reverse
		? intl.formatMessage({
				id: 'player__nudgeBack',
				defaultMessage: 'back 15 seconds',
				description: 'player nudge-back label',
		  })
		: intl.formatMessage({
				id: 'player__nudgeForward',
				defaultMessage: 'forward 15 seconds',
				description: 'player nudge-forward label',
		  });

	return (
		<button
			className={styles.button}
			aria-label={label}
			onClick={() => session.shiftTime(reverse ? -15 : 15)}
		>
			{reverse ? <BackIcon /> : <ForwardIcon />}
		</button>
	);
}
