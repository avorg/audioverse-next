import Image from 'next/image';
import React, { CSSProperties } from 'react';
import { useIntl } from 'react-intl';

import ProgressBar from '@components/atoms/progressBar';
import ButtonDownload from '@components/molecules/buttonDownload';
import ButtonFavorite from '@components/molecules/buttonFavorite';
import ButtonNudge from '@components/molecules/buttonNudge';
import ButtonPlay from '@components/molecules/buttonPlay';
import ButtonShare from '@components/molecules/buttonShare';
import ButtonSpeed from '@components/molecules/buttonSpeed';
import PlaybackTimes from '@components/molecules/playbackTimes';
import { PlayerFragment } from '@lib/generated/graphql';
import hasVideo from '@lib/hasVideo';
import usePlaybackSession from '@lib/usePlaybackSession';

import IconFullscreen from '../../../public/img/icon-fullscreen.svg';

import styles from './player.module.scss';

export interface PlayerProps {
	recording: PlayerFragment;
}

const Player = ({ recording }: PlayerProps): JSX.Element => {
	if (!recording) return <p>loading ...</p>;

	const intl = useIntl();
	const session = usePlaybackSession(recording);
	const shouldShowPoster = !session.isLoaded && hasVideo(recording);
	const shouldShowAudioControls = !hasVideo(recording) || session.isAudioLoaded;
	const shouldShowVideoControls = !shouldShowAudioControls;
	const video = session.getVideo();

	return (
		<div
			data-testid={recording.id}
			aria-label={intl.formatMessage({
				id: 'player__playerLabel',
				defaultMessage: 'player',
				description: 'player label',
			})}
		>
			{shouldShowPoster && (
				<button className={styles.poster} onClick={() => session.play()}>
					<Image
						src="/img/poster.jpg"
						alt={recording.title}
						width={1500}
						height={500}
					/>
				</button>
			)}

			{session.isVideoLoaded && video}

			{shouldShowVideoControls && (
				<div className={styles.videoProgress}>
					<ProgressBar recording={recording} />
					<PlaybackTimes recording={recording} />
				</div>
			)}

			{shouldShowAudioControls && (
				<div className={styles.controls}>
					<ButtonPlay recording={recording} />
					<div>
						<div
							className={styles.waves}
							style={
								{ '--progress': `${session.progress * 100}%` } as CSSProperties
							}
						>
							<input
								type="range"
								aria-label={intl.formatMessage({
									id: 'player__progressLabel',
									defaultMessage: 'progress',
									description: 'player progress label',
								})}
								value={session.progress * 100}
								onChange={(e) => {
									const percent = parseInt(e.target.value) / 100;
									session.setProgress(percent);
								}}
							/>
						</div>
						<PlaybackTimes recording={recording} />
					</div>
				</div>
			)}

			<div className={styles.buttons}>
				<div>
					<ButtonNudge recording={recording} reverse={true} />
					<ButtonNudge recording={recording} />
					<ButtonSpeed recording={recording} />
				</div>
				<div>
					<ButtonDownload recording={recording} />
					<ButtonShare />
					<ButtonFavorite id={recording.id} />
					{shouldShowVideoControls && (
						<button
							aria-label={intl.formatMessage({
								id: 'player__fullscreenButtonLabel',
								defaultMessage: 'fullscreen',
								description: 'player fullscreen button label',
							})}
							onClick={() => session.requestFullscreen()}
						>
							<IconFullscreen />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Player;
