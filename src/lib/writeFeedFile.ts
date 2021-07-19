import fs from 'fs';
import { dirname, resolve } from 'path';

import { Feed } from 'feed';

import { PROJECT_ROOT } from '@lib/constants';
import { WriteFeedFileFragment } from '@lib/generated/graphql';

interface WriteFeedFileProps {
	recordings: WriteFeedFileFragment[];
	title: string;
	projectRelativePath: string;
}

export default async function writeFeedFile({
	recordings,
	title,
	projectRelativePath,
}: WriteFeedFileProps): Promise<void> {
	// https://github.com/avorg/wp-avorg-plugin/blob/master/view/page-feed.twig
	// TODO: copyright
	// TODO: itunes:subtitle
	// TODO: id?
	// TODO: itunes:explicit
	// TODO: link
	// TODO: atom:link
	// TODO: itunes:author
	// TODO: image
	// TODO: categories
	const feed = new Feed({
		id: '',
		title,
		copyright: '',
	});

	recordings.map((r) => {
		const { audioFiles = [], feedVideoFiles = [] } = r;
		const files = [...audioFiles, ...feedVideoFiles];
		const file = files.length && files[0];

		if (!file) return;

		const url = file.url;
		const length = parseInt(file.filesize);

		if (!url) return;

		// https://github.com/avorg/wp-avorg-plugin/blob/master/view/page-feed.twig
		// TODO: Add image
		// TODO: Add itunes:subtitle
		// TODO: Add itunes:author
		// TODO: Add pubDate (?)
		// TODO: Add itunes:duration
		feed.addItem({
			title: r.title,
			description: r.description || undefined,
			link: r.canonicalUrl,
			date: new Date(r.recordingDate),
			enclosure: { url, length },
		});
	});

	const path = resolve(PROJECT_ROOT, projectRelativePath);

	if (!path.startsWith(PROJECT_ROOT)) {
		throw new Error('Path not within project');
	}

	fs.mkdirSync(dirname(path), { recursive: true });

	fs.writeFileSync(path, feed.rss2());
}
