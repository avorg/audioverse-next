import React from 'react';

import { MediaFormatSwitcherFragment } from '@lib/generated/graphql';
import hasVideo from '@lib/hasVideo';
import usePlaybackSession from '@lib/usePlaybackSession';

import styles from './mediaFormatSwitcher.module.scss';

export default function MediaFormatSwitcher({
	recording,
}: {
	recording: MediaFormatSwitcherFragment;
}): JSX.Element | null {
	const session = usePlaybackSession(recording);

	if (!hasVideo(recording)) return null;

	return (
		<>
			<button
				className={styles.button}
				onClick={() => session.setPrefersAudio(true)}
				aria-pressed={session.prefersAudio}
			>
				Audio
			</button>
			<button
				className={styles.button}
				onClick={() => session.setPrefersAudio(false)}
				aria-pressed={!session.prefersAudio}
			>
				Video
			</button>
		</>
	);
}
