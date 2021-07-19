import React from 'react';

import { PlaybackTimesFragment } from '@lib/generated/graphql';
import { useFormattedTime } from '@lib/time';
import usePlaybackSession from '@lib/usePlaybackSession';

import styles from './playbackTimes.module.scss';

export default function PlaybackTimes({
	recording,
}: {
	recording: PlaybackTimesFragment;
}): JSX.Element {
	const session = usePlaybackSession(recording);
	return (
		<div className={styles.base}>
			<span>{useFormattedTime(session.time)}</span>
			<span>{useFormattedTime(session.duration)}</span>
		</div>
	);
}
