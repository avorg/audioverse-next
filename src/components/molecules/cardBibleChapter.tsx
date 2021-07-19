import React from 'react';

import CardPlayable from '@components/molecules/cardPlayable';
import { CardBibleChapterFragment } from '@lib/generated/graphql';

import BibleIcon from '../../../public/img/icon-bible-solid.svg';

interface CardBibleChapterProps {
	chapter: CardBibleChapterFragment;
}

export default function CardBibleChapter({
	chapter,
}: CardBibleChapterProps): JSX.Element {
	return (
		<CardPlayable
			recording={{
				id: chapter.id,
				title: chapter.title,
				duration: 0,
				sequence: null,
				audioFiles: [],
				videoFiles: [],
				videoStreams: [],
			}}
			container={{
				icon: <BibleIcon width={12} height={12} />,
				title: 'Genesis (KJV)',
			}}
			duration={2520}
			progress={0.3}
			theme={'chapter'}
			// TODO: Generate URL
			url={'#'}
			title={chapter.title}
		/>
	);
}
