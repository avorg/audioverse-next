import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

import { useIsPersonFavorited } from '@lib/api/useIsPersonFavorited';
import { SpeakerNameFragment } from '@lib/generated/graphql';
import { makePersonRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';

import styles from './speakerName.module.scss';

export default function SpeakerName({
	person,
}: {
	person: SpeakerNameFragment;
}): JSX.Element {
	const {
		id,
		name,
		summary = '',
		imageWithFallback: image,
		viewerHasFavorited: initialIsFavorited,
		website = '',
	} = person;
	const lang = useLanguageRoute();
	const {
		isPersonFavorited: queryIsFavorited,
		toggleFavorited,
		isLoading,
	} = useIsPersonFavorited(id);
	const isPersonFavorited =
		queryIsFavorited === undefined ? initialIsFavorited : queryIsFavorited;
	const intl = useIntl();
	const img = image && (
		<Image width={32} height={32} alt={name} src={image.url} />
	);

	return (
		<>
			<Link href={makePersonRoute(lang, id)}>
				<a
					className={styles.link}
					data-tip={true}
					data-for={`person-${id}-speakerTip`}
				>
					{img}
					<span className={styles.name}>{name}</span>
				</a>
			</Link>
			<ReactTooltip
				id={`person-${id}-speakerTip`}
				uuid={`person-${id}-tooltipUuid`}
				effect={'solid'}
				clickable={true}
				className={styles.tooltip}
				delayHide={200}
				delayShow={500}
			>
				{img}
				<p dangerouslySetInnerHTML={{ __html: summary }} />
				{website && (
					<p>
						<Link href={website}>
							<a
								className={styles.speakerWebsite}
								target="_blank"
								rel="nofollow noreferrer"
							>
								{website}
							</a>
						</Link>
					</p>
				)}
				<button
					onClick={(e) => {
						e.preventDefault();
						if (isPersonFavorited === undefined && !isLoading) {
							toast(
								intl.formatMessage({
									id: 'speakerName__unauthenticated',
									defaultMessage: 'You must be logged in to do this',
									description: 'SpeakerName unauthenticated error',
								})
							);
						} else {
							toggleFavorited();
						}
					}}
				>
					{isPersonFavorited ? (
						<FormattedMessage
							id="speakerName__unfavorite"
							defaultMessage="Unfavorite"
							description="SpeakerName Unfavorite button label"
						/>
					) : (
						<FormattedMessage
							id="speakerName__favorite"
							defaultMessage="Favorite"
							description="SpeakerName Favorite button label"
						/>
					)}
				</button>
			</ReactTooltip>
		</>
	);
}
