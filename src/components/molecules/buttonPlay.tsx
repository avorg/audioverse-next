import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React, { CSSProperties } from 'react';
import { useIntl } from 'react-intl';

import { ButtonPlayFragment } from '@lib/generated/graphql';
import usePlaybackSession from '@lib/usePlaybackSession';

import styles from './buttonPlay.module.scss';

export default function ButtonPlay({
	recording,
	size,
}: {
	recording: ButtonPlayFragment;
	size?: number;
}): JSX.Element {
	const { isPaused, play, pause } = usePlaybackSession(recording);
	const intl = useIntl();

	const label = isPaused
		? intl.formatMessage({
				id: 'playButton__playLabel',
				defaultMessage: 'play',
				description: 'play button play label',
		  })
		: intl.formatMessage({
				id: 'playButton__pauseLabel',
				defaultMessage: 'pause',
				description: 'play button pause label',
		  });

	return (
		<button
			className={styles.button}
			style={{ '--size': size ? `${size}px` : undefined } as CSSProperties}
			aria-label={label}
			onClick={() => (isPaused ? play() : pause())}
		>
			{isPaused ? <PlayArrowIcon /> : <PauseIcon />}
		</button>
	);
}
