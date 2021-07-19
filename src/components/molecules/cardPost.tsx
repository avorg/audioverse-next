import React from 'react';

import Card from '@components/molecules/card';
import { CardPostFragment } from '@lib/generated/graphql';
import { useFormattedDuration } from '@lib/time';

interface CardPostProps {
	post: CardPostFragment;
}

export default function CardPost({ post }: CardPostProps): JSX.Element {
	const d = new Date(post.publishDate);
	const dur = post.readingDuration;
	return (
		<Card
			hero={post.image?.url}
			title={post.title}
			url={post.canonicalUrl}
			preTitle={d.toLocaleString('default', {
				month: 'long',
				day: 'numeric',
				year: 'numeric',
			})}
		>
			<p>{post.teaser}</p>
			{dur && dur > 30 && <p>{useFormattedDuration(dur)}</p>}
		</Card>
	);
}
