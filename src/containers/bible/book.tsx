import Link from 'next/link';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import withFailStates from '@components/HOCs/withFailStates';
import Player from '@components/molecules/player';
import {
	GetBibleBookDetailPageDataQuery,
	PlayerFragment,
} from '@lib/generated/graphql';

import styles from './book.module.scss';

export interface BookProps {
	data: NonNullable<GetBibleBookDetailPageDataQuery>;
}

function Book({ data }: BookProps): JSX.Element {
	const chapters = data.audiobible?.book.chapters || [];
	const [chapterId, setChapterId] = useState<string>(chapters[0].id);
	const chapter = chapters.find((c) => c.id === chapterId);
	const verses = chapter?.verses || [];

	// TODO: Remove this transformation when the API returns Recording type
	const recording: Partial<PlayerFragment> = {
		audioFiles: [
			{
				url: chapter?.url,
				mimeType: 'audio/mpeg',
				filesize: 'unknown',
			},
		],
	};

	return (
		<>
			<h1>{data.audiobible?.book.title}</h1>
			<h2>{data.audiobible?.title}</h2>
			{chapter?.url && <Player recording={recording as PlayerFragment} />}
			<label>
				<FormattedMessage
					id="bibleBook__chapterSelectLabel"
					defaultMessage="Chapter"
					description="Bible book detail page chapter select label"
				/>{' '}
				<select
					onChange={(e) => {
						setChapterId(e.target.value);
					}}
				>
					{data.audiobible?.book.chapters.map((c) => (
						<option key={c.id} value={c.id}>
							{c.title}
						</option>
					))}
				</select>
			</label>
			<h3>
				<FormattedMessage
					id="bibleBook__tabAbout"
					defaultMessage="About"
					description="Bible book detail page about tab title"
				/>
			</h3>
			<h4>{data.audiobible?.sponsor.name}</h4>
			<p>{data.audiobible?.sponsor.url}</p>
			<p>
				<FormattedMessage
					id="bibleBook__copyrightPrefix"
					defaultMessage="Copyright ⓒ"
					description="Bible book detail page copyright prefix"
				/>{' '}
				<span>{data.audiobible?.copyrightText}</span>
			</p>
			<h3>
				<FormattedMessage
					id="bibleBook__tabDownloads"
					defaultMessage="Downloads"
					description="Bible book detail page downloads tab title"
				/>
			</h3>
			<Link href={chapter?.url}>
				<a>
					<FormattedMessage
						id="bibleBook__mp3Label"
						defaultMessage="mp3:"
						description="Bible book detail page mp3 download link label"
					/>{' '}
					{chapter?.title}
				</a>
			</Link>
			<h3>
				<FormattedMessage
					id="bibleBook__tabTranscript"
					defaultMessage="Transcript"
					description="Bible book detail page transcript tab title"
				/>
			</h3>
			<div>
				{verses.map(({ number, text }) => (
					<span className={styles.verse} key={number}>
						<sup>{number}</sup>
						<span>{text}</span>
					</span>
				))}
			</div>
			<h3>
				<FormattedMessage
					id="bibleBook__tabShare"
					defaultMessage="Share"
					description="Bible book detail page share tab title"
				/>
			</h3>
			<h4>
				<FormattedMessage
					id="bibleBook__shortUrlLabel"
					defaultMessage="Short URL"
					description="Bible book detail page short url label"
				/>
			</h4>
			<p>{data.audiobible?.book.shareUrl}</p>
		</>
	);
}

const should404 = ({ data }: BookProps) => {
	return !data?.audiobible?.book.title;
};

export default withFailStates(Book, should404);
