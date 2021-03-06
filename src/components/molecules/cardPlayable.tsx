import React, { CSSProperties } from 'react';
import { useIntl } from 'react-intl';

import Icon from '@components/atoms/icon';
import Card, { CardTheme } from '@components/molecules/card';
import styles from '@components/molecules/card.module.scss';
import SpeakerName from '@components/molecules/speakerName';
import { SpeakerNameFragment } from '@lib/generated/graphql';
import useFormattedDuration from '@lib/useFormattedDuration';

import PlayIcon from '../../../public/img/icon-play.svg';

interface CardPlayableProps {
	container?: {
		icon?: any;
		title: string;
		length?: number;
		index?: number;
	};
	title: string;
	persons?: SpeakerNameFragment[];
	duration?: number;
	progress?: number;
	theme?: CardTheme;
}

export default function CardPlayable({
	container,
	title,
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
			titleAdornment={<PlayIcon width={24} height={24} />}
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
					<span
						className={styles.progress}
						style={{ '--progress': `${progress * 100}%` } as CSSProperties}
					>
						<span />
					</span>
				)}
				<Icon icon={'bookmark'} size={24} />
			</div>
		</Card>
	);
}
