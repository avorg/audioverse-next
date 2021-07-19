import React, { CSSProperties } from 'react';
import { useIntl } from 'react-intl';

import {
	AndMiniplayerFragment,
	ProgressBarFragment,
} from '@lib/generated/graphql';
import usePlaybackSession from '@lib/usePlaybackSession';

import styles from './progressBar.module.scss';

interface ProgressBarProps {
	recording: ProgressBarFragment & AndMiniplayerFragment;
	interactive?: boolean;
}

export default function ProgressBar({
	recording,
	interactive = true,
}: ProgressBarProps): JSX.Element {
	const intl = useIntl();
	const session = usePlaybackSession(recording);
	const progress = session.progress;
	const cssProps = { '--progress': `${progress * 100}%` } as CSSProperties;
	return (
		<span className={styles.progress} style={cssProps}>
			<input
				type="range"
				value={progress * 100}
				aria-label={intl.formatMessage({
					id: 'atom-progressBar__label',
					defaultMessage: 'progress',
					description: 'progress bar label',
				})}
				readOnly={true}
				onChange={(e) => session.setProgress(parseInt(e.target.value) / 100)}
				disabled={!interactive}
			/>
		</span>
	);
}
