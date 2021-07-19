import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PlaybackContext } from '@components/templates/andMiniplayer';
import { PlaylistFragment } from '@lib/generated/graphql';
import { readableBytes } from '@lib/readableBytes';

type Recording<R> = R & PlaylistFragment;

interface PlaylistProps<R> {
	children: (recording: Recording<R>) => JSX.Element;
	recordings: Recording<R>[];
	initial?: string;
}

export default function Playlist<R>({
	children,
	recordings = [],
	initial,
}: PlaylistProps<R>): JSX.Element {
	const playback = useContext(PlaybackContext);
	const getInitialId = () => {
		const ids = recordings.map((r) => r.id);
		return initial && ids.includes(initial) ? initial : recordings[0]?.id;
	};
	const [id, setId] = useState<string | undefined>(getInitialId);
	const recording = recordings.find((r) => r.id === id);
	const detail = recording && children(recording);

	useEffect(() => {
		if (id) return;
		setId(getInitialId());
	}, [recordings, initial]);

	// TODO: Add video download links
	return (
		<>
			{detail}
			{recordings.length > 1 && (
				<>
					<h2>
						<FormattedMessage
							id="playlist__heading"
							defaultMessage="Playlist"
							description="Playlist item selector main heading"
						/>
					</h2>
					<ul>
						{recordings.map((r) => (
							<li key={r.id}>
								<button
									onClick={() => {
										setId(r.id);
										playback.loadRecording(r);
									}}
								>
									{r.title}
								</button>
								{r.audioDownloads?.map((d) => (
									<Link key={d.url} href={d.url}>
										<a target={'_blank'} rel={'noreferrer noopener'}>
											{readableBytes(d.filesize)}
										</a>
									</Link>
								))}
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
}
