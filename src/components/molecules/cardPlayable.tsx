import React from 'react';
import { useIntl } from 'react-intl';

import Icon from '@components/atoms/icon';
import ProgressBar from '@components/atoms/progressBar';
import ButtonPlay from '@components/molecules/buttonPlay';
import Card, { CardTheme } from '@components/molecules/card';
import styles from '@components/molecules/card.module.scss';
import SpeakerName from '@components/molecules/speakerName';
import {
	CardPlayableFragment,
	SpeakerNameFragment,
} from '@lib/generated/graphql';
import { useFormattedDuration } from '@lib/time';

export interface CardPlayableProps {
	recording: CardPlayableFragment;
	container?: {
		icon?: any;
		title: string;
		length?: number;
		index?: number;
	};
	title: string;
	url: string;
	persons?: SpeakerNameFragment[];
	duration?: number;
	progress?: number;
	theme?: CardTheme;
}

export default function CardPlayable({
	recording,
	container,
	title,
	url,
	persons = [],
	duration,
	theme,
	progress,
}: CardPlayableProps): JSX.Element {
	const intl = useIntl();
	const hasPartInfo = container?.length && container?.index;
	const partString = hasPartInfo
		? intl.formatMessage(
				{
					id: 'cardPlayable__partInfo',
					defaultMessage: 'Part {index} of {length}',
					description: '',
				},
				{ index: container?.index, length: container?.length }
		  )
		: undefined;
	return (
		<Card
			hat={
				container?.title
					? {
							icon: container?.icon,
							title: container?.title,
					  }
					: undefined
			}
			preTitle={partString}
			title={title}
			titleAdornment={<ButtonPlay recording={recording} />}
			url={url}
			theme={theme}
		>
			<div className={styles.speakers}>
				{persons.map((p) => (
					<SpeakerName person={p} key={p.id} />
				))}
			</div>
			<div className={styles.controls}>
				{duration && (
					<span className={styles.duration}>
						{useFormattedDuration(duration)}
					</span>
				)}
				{progress !== undefined && (
					<ProgressBar recording={recording} interactive={false} />
				)}
				<Icon icon={'bookmark'} size={24} />
			</div>
		</Card>
	);
}
