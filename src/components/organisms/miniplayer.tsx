import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import React, { useContext } from 'react';

import ProgressBar from '@components/atoms/progressBar';
import ButtonNudge from '@components/molecules/buttonNudge';
import ButtonPlay from '@components/molecules/buttonPlay';
import { PlaybackContext } from '@components/templates/andMiniplayer';

import ListIcon from '../../../public/img/icon-list-alt-solid.svg';

import styles from './miniplayer.module.scss';

export default function Miniplayer(): JSX.Element | null {
	const playback = useContext(PlaybackContext);
	const recording = playback.getRecording();
	const isShowingVideo = playback.getVideoLocation() === 'miniplayer';

	// TODO: Move this guard into andMiniplayer
	if (!recording) return null;

	return (
		<div className={styles.miniplayer} aria-label={'miniplayer'}>
			<div className={styles.player}>
				{/*TODO: Get rid of ID; use ref instead*/}
				<div id="mini-player" className={styles.pane} />
				<div
					className={`${styles.controls} ${isShowingVideo && styles.hidden}`}
				>
					<ButtonNudge recording={recording} reverse={true} />
					<ButtonPlay recording={recording} />
					<ButtonNudge recording={recording} />
				</div>
			</div>
			<div className={styles.meta}>
				{recording.sequence && (
					<div aria-label={'series'}>
						<ListIcon width={16} height={16} />
						{recording.sequence.title}
					</div>
				)}
				<div>{recording.title}</div>
				<ProgressBar recording={recording} />
			</div>
			<div className={styles.volume}>
				<VolumeDown />
				{/*TODO: Localize*/}
				<Slider
					value={playback.getVolume()}
					onChange={(e, val) => playback.setVolume(val as number)}
					aria-label={'volume'}
				/>
				<VolumeUp />
			</div>
		</div>
	);
}
