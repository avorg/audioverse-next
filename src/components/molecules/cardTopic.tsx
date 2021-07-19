import React from 'react';

import CardPlayable from '@components/molecules/cardPlayable';
import { CardTopicFragment } from '@lib/generated/graphql';

import HatIcon from '../../../public/img/icon-layer-group-solid.svg';

interface CardTopicProps {
	topicRecording: CardTopicFragment;
}

export default function CardTopic({
	topicRecording,
}: CardTopicProps): JSX.Element {
	return (
		<CardPlayable
			recording={topicRecording}
			theme={'topic'}
			container={{
				icon: <HatIcon width={12} height={12} />,
				// TODO: Replace hard-coded tag name (also hard-coded in home.graphql)
				title: 'Family',
			}}
			// TODO: Set progress dynamically
			progress={0.3}
			// TODO: Generate URL
			url={'#'}
			{...topicRecording}
		/>
	);
}
