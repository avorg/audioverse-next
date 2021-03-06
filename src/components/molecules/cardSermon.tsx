import React from 'react';

import CardPlayable from '@components/molecules/cardPlayable';
import { CardSermonFragment } from '@lib/generated/graphql';

import ListIcon from '../../../public/img/icon-list-alt-solid.svg';

// TODO:
// Only show top hat of container exists
// Show speakers dynamically
// Dynamically render progress bar
// Dynamically render all content

interface CardSermonProps {
	recording: CardSermonFragment;
}

export default function CardSermon({
	recording,
}: CardSermonProps): JSX.Element {
	const container = recording.sequence
		? {
				icon: <ListIcon width={12} height={12} />,
				title: recording.sequence.title,
				length: recording.sequence.recordings.aggregate?.count,
				// TODO: set index dynamically
				index: 1,
		  }
		: undefined;

	return (
		<CardPlayable
			container={container}
			// TODO: set progress dynamically
			progress={0}
			theme={'sermon'}
			{...recording}
		/>
	);
}
