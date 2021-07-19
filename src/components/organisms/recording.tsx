import { Button } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import LineHeading from '@components/atoms/lineHeading';
import CopyrightInfo from '@components/molecules/copyrightInfo';
import MediaFormatSwitcher from '@components/molecules/mediaFormatSwitcher';
import Player from '@components/molecules/player';
import SpeakerName from '@components/molecules/speakerName';
import SponsorInfo from '@components/molecules/sponsorInfo';
import TeaseRecording from '@components/molecules/teaseRecording';
import Transcript from '@components/molecules/transcript';
import { RecordingFragment } from '@lib/generated/graphql';
import { makeSeriesDetailRoute, makeSermonRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';

import ArrowLeft from '../../../public/img/icon-arrow-left.svg';
import ArrowRight from '../../../public/img/icon-arrow-right.svg';
import ListIcon from '../../../public/img/icon-list-alt-solid.svg';

import styles from './recording.module.scss';

interface RecordingProps {
	recording: RecordingFragment;
}

function getSiblingByIndexOffset(recording: RecordingFragment, offset: number) {
	const nodes = recording.sequence?.recordings?.nodes;

	if (!nodes || recording.sequenceIndex === null) return;

	const zeroBasedIndex = recording.sequenceIndex - 1;
	const targetIndex = zeroBasedIndex + offset;

	return nodes[targetIndex];
}

export function Recording({ recording }: RecordingProps): JSX.Element {
	const langRoute = useLanguageRoute();

	const speakers = recording?.persons || [];
	const tags = recording?.recordingTags?.nodes || [];
	const { sponsor } = recording;
	const recordingDateString = new Date(recording.recordingDate).toLocaleString(
		[],
		{
			hour: 'numeric',
			minute: 'numeric',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}
	);
	const previousRecording = getSiblingByIndexOffset(recording, -1);
	const nextRecording = getSiblingByIndexOffset(recording, 1);
	const seriesItems = recording?.sequence?.recordings?.nodes;

	// TODO: Switch embed link to new site when route is implemented
	// language=HTML
	// noinspection HtmlDeprecatedAttribute
	const embedCode = `<iframe src="https://www.audioverse.org/english/embed/media/${recording.id}" width="500" height="309" scrolling="no" frameBorder="0" ></iframe>`;

	return (
		<div className={styles.base}>
			{/*TODO: use next/link for sequence link*/}
			{recording?.sequence && (
				<a
					href={makeSeriesDetailRoute(langRoute, recording?.sequence?.id)}
					className={styles.hat}
				>
					<div className={styles.hatType}>
						<ListIcon width={13} height={13} />
						<FormattedMessage
							id="sermonDetailPage__seriesTitle"
							defaultMessage="Series"
							description="Sermon detail series title"
						/>
					</div>
					<h4>{recording?.sequence?.title}</h4>
				</a>
			)}
			<div className={styles.content}>
				<div>
					<div className={styles.meta}>
						{recording.sequenceIndex && (
							<span className={styles.part}>
								Part {recording.sequenceIndex}
							</span>
						)}
						<h1>{recording.title}</h1>
						<ul className={styles.speakers}>
							{speakers.map((speaker) => (
								<li key={speaker.id}>
									<SpeakerName person={speaker} />
								</li>
							))}
						</ul>
					</div>
					<MediaFormatSwitcher recording={recording} />
					<div className={styles.sequenceNav}>
						{previousRecording && (
							<Link
								href={makeSermonRoute(langRoute, previousRecording.id)}
								passHref
							>
								<Button
									aria-label={'Previous'}
									className={styles.previous}
									variant={'outlined'}
									startIcon={<ArrowLeft />}
								>
									Previous
								</Button>
							</Link>
						)}
						{nextRecording && (
							<Link
								href={makeSermonRoute(langRoute, nextRecording.id)}
								passHref
							>
								<Button
									aria-label={'Next'}
									className={styles.next}
									variant={'outlined'}
									endIcon={<ArrowRight />}
								>
									Next
								</Button>
							</Link>
						)}
					</div>

					<Player recording={recording} />

					{recording.description && (
						<>
							<h6>
								<FormattedMessage
									id="sermonDetailPage__descriptionTitle"
									defaultMessage="Description"
									description="Sermon detail description title"
								/>
							</h6>
							<div
								dangerouslySetInnerHTML={{ __html: recording.description }}
							/>
						</>
					)}
					{tags.length > 0 && (
						<>
							<h6>
								<FormattedMessage
									id="sermonDetailPage__tagsTitle"
									defaultMessage="Tags"
									description="Sermon detail tags title"
								/>
							</h6>
							<ul>
								{tags.map((t) => (
									<li key={t.tag.id}>
										{/* TODO: link tags */}
										<Link href="#">
											<a>{t.tag.name}</a>
										</Link>
									</li>
								))}
							</ul>
						</>
					)}
					{/*TODO: Add related sermons*/}
					{sponsor && (
						<>
							<h6>
								<FormattedMessage
									id="sermonDetailPage__sponsorInfoTitle"
									defaultMessage="Sponsor"
									description="Sermon detail sponsor info title"
								/>
							</h6>
							<SponsorInfo sponsor={sponsor} />
						</>
					)}
					{recording.recordingDate ? (
						<>
							<h6>
								<FormattedMessage
									id="sermonDetailPage__recordedTitle"
									defaultMessage="Recorded"
									description="Sermon detail recorded date title"
								/>
							</h6>
							<p>{recordingDateString}</p>
						</>
					) : null}
					<h6>
						<FormattedMessage
							id="sermonDetailPage__shareTitle"
							defaultMessage="Share"
							description="Sermon detail share section title"
						/>
					</h6>
					<h6>
						<FormattedMessage
							id="sermonDetailPage__shortUrlLabel"
							defaultMessage="Short URL"
							description="Sermon detail short url label"
						/>
					</h6>
					<p>{recording.shareUrl}</p>
					<label>
						<FormattedMessage
							id="sermonDetailPage__embedCodeLabel"
							defaultMessage="Embed Code"
							description="Sermon detail embed code label"
						/>{' '}
						<input readOnly={true} value={embedCode} />
					</label>
					{recording.transcript?.text && (
						<>
							<h6>
								<FormattedMessage
									id="sermonDetailPage__transcriptTitle"
									defaultMessage="Transcript"
									description="Sermon detail transcript title"
								/>
							</h6>
							<Transcript text={recording.transcript.text} />
						</>
					)}
					<CopyrightInfo recording={recording} />
				</div>
				{seriesItems && (
					<div className={styles.series} aria-label={'series list'}>
						<LineHeading size={12}>Other Teachings in Series</LineHeading>
						{seriesItems.map((r) => (
							<TeaseRecording key={r.id} recording={r} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
