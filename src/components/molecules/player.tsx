import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';

// Source:
// https://github.com/vercel/next.js/blob/canary/examples/with-videojs/components/Player.js

// If this solution becomes unviable, for instance, due to needing to
// update more props than just sources, this alternative approach may work:
// https://github.com/videojs/video.js/issues/4970#issuecomment-520591504

const Player = (props: VideoJsPlayerOptions): JSX.Element => {
	// TODO: Fix poster disappearing after audio playback start
	const options = {
		poster: 'https://s.audioverse.org/images/template/player-bg4.jpg',
		controls: true,
		fluid: true,
		// TODO: Should this be set back to `auto` once streaming urls are fixed?
		// https://docs.videojs.com/docs/guides/options.html
		preload: 'metadata',
		...props,
	};

	const [videoEl, setVideoEl] = useState(null);
	const [player, setPlayer] = useState<VideoJsPlayer | null>(null);
	const onVideo = useCallback((el) => setVideoEl(el), []);

	useEffect(() => {
		if (videoEl == null) return;

		const sources = _.get(props, 'sources');

		if (!player) {
			setPlayer(videojs(videoEl, options));
		} else if (sources) {
			player.src(sources);
		}
	}, [props, videoEl]);

	return (
		<div data-vjs-player>
			<video ref={onVideo} className="video-js" playsInline />
		</div>
	);
};

export default Player;