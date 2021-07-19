import React, { useContext, useEffect, useRef, useState } from 'react';

import {
	PlaybackContext,
	PlaybackContextType,
} from '@components/templates/andMiniplayer';
import { AndMiniplayerFragment } from '@lib/generated/graphql';

interface PlaybackSessionInfo {
	shiftTime: (delta: number) => void;
	setProgress: (percent: number) => void;
	pause: () => void;
	play: () => void;
	requestFullscreen: () => void;
	setPrefersAudio: (prefersAudio: boolean) => void;
	setSpeed: (speed: number) => void;
	isLoaded: boolean;
	progress: number;
	prefersAudio: boolean;
	isAudioLoaded: boolean;
	isVideoLoaded: boolean;
	isPaused: boolean;
	speed: number;
	time: number;
	duration: number;
	getVideo: () => JSX.Element;
	supportsFullscreen: boolean;
}

export default function usePlaybackSession(
	recording: AndMiniplayerFragment | null
): PlaybackSessionInfo {
	const context = useContext(PlaybackContext);
	const loadedRecording = context.getRecording();
	const isLoaded =
		!!recording && !!loadedRecording && loadedRecording.id === recording.id;
	const progress = isLoaded ? context.getProgress() : 0;
	const isAudioLoaded = isLoaded && !context.isShowingVideo();
	const isVideoLoaded = isLoaded && context.isShowingVideo();
	const prefersAudio = context.getPrefersAudio();
	const supportsFullscreen = context.supportsFullscreen();
	const speed = context.getSpeed();
	// TODO: return 0 if !isLoaded
	const time = context.getTime();
	// TODO: return duration according to current media file
	const duration = isLoaded ? context.getDuration() : recording?.duration || 0;
	const [, setSpeedFingerprint] = useState<number>(speed);
	const isPaused = !isLoaded || context.paused();
	const [isPortalActive, setIsPortalActive] = useState<boolean>(false);
	const portalContainerRef = useRef<HTMLDivElement>(null);
	const [video] = useState<JSX.Element>(
		<div ref={portalContainerRef} data-testid={'portal'} />
	);

	useEffect(() => {
		if (!recording || !isLoaded || !isPortalActive) return;

		console.log({ m: 'usePlaybackSession effect', id: recording.id });

		context.setVideoHandler(recording.id, (el) => {
			console.log('running handler');
			if (!el) return;
			portalContainerRef.current?.appendChild(el);
		});
	}, [recording, isLoaded, isPortalActive]);

	useEffect(
		() => () => {
			if (!isPortalActive || !recording) return;
			console.log({ m: 'teardown', context });
			// TODO: provide recording ID when unloading?
			context.unsetVideoHandler(recording.id);
		},
		[]
	);

	function afterLoad(func: (c: PlaybackContextType) => void) {
		if (!recording) return;

		if (isLoaded) {
			func(context);
			return;
		}

		context.loadRecording(recording, {
			onLoad: (c: PlaybackContextType) => {
				func(c);
			},
		});
	}

	function shiftTime(delta: number) {
		afterLoad((c) => {
			c.setTime(c.getTime() + delta);
		});
	}

	function setProgress(percent: number) {
		afterLoad((c) => c.setProgress(percent));
	}

	function pause() {
		// TODO: Maybe only if `isLoaded` is true
		// Or perhaps throw an exception, since the user should never be presented
		// with a pause button for a recording that isn't loaded.
		context.pause();
	}

	function play() {
		afterLoad((c) => c.play());
	}

	function setPrefersAudio(prefersAudio: boolean) {
		afterLoad((c) => c.setPrefersAudio(prefersAudio));
	}

	function setSpeed(speed: number) {
		afterLoad((c) => c.setSpeed(speed));
		setSpeedFingerprint(speed);
	}

	function requestFullscreen() {
		afterLoad((c) => c.requestFullscreen());
	}

	function getVideo() {
		if (!isPortalActive) setIsPortalActive(true);
		return video;
	}

	// TODO: Consider not returning isLoaded
	return {
		shiftTime,
		setProgress,
		pause,
		play,
		setPrefersAudio,
		setSpeed,
		requestFullscreen,
		isLoaded,
		progress,
		time,
		duration,
		isAudioLoaded,
		isVideoLoaded,
		isPaused,
		prefersAudio,
		getVideo,
		speed,
		supportsFullscreen,
	};
}
