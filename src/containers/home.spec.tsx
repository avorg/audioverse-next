import { waitFor } from '@testing-library/react';

import {
	GetHomeStaticPropsDocument,
	GetHomeStaticPropsQuery,
} from '@lib/generated/graphql';
import {
	buildLoader,
	buildStaticRenderer,
	loadQuery,
	mockedFetchApi,
} from '@lib/test/helpers';
import Home, { getStaticPaths, getStaticProps } from '@pages/[language]';

jest.mock('next/router');

const renderPage = buildStaticRenderer(Home, getStaticProps, {
	language: 'en',
});

const song = {
	title: 'the_song_title',
	persons: [{ id: 'the_song_person_id', name: 'the_song_person_name' }],
	duration: 5 * 60,
	sequence: {
		id: 'the_song_collection_id',
		title: 'the_song_collection_title',
	},
};

const story = {
	title: 'the_story_title',
	duration: 21 * 60,
	persons: [{ id: 'the_story_person_id', name: 'the_story_person_name' }],
	sequence: {
		title: 'the_story_sequence_title',
		recordings: {
			aggregate: {
				count: 7,
			},
		},
	},
};

const taggedRecording = {
	title: 'the_tagged_recording_title',
	persons: [
		{
			id: 'the_tagged_recording_person_id',
			name: 'the_tagged_recording_person_name',
		},
	],
	duration: 27 * 60,
};

const recording = {
	title: 'the_recording_title',
	persons: [
		{
			id: 'the_recording_person_id',
			name: 'the_recording_person_name',
		},
	],
	duration: 33 * 60,
	sequence: {
		title: 'the_recording_sequence_title',
		recordings: {
			aggregate: {
				count: 15,
			},
		},
	},
};

const testimony = {
	id: 'the_testimony_id',
	body: 'the_testimony_body',
};

const post = {
	image: {
		url: 'the_post_image_url',
	},
	publishDate: '2019-12-03T09:54:33Z',
	title: 'the_post_title',
	teaser: 'the_post_teaser',
	canonicalUrl: 'the_post_url',
	readingDuration: 9 * 60,
};

const loadData = buildLoader<GetHomeStaticPropsQuery>(
	GetHomeStaticPropsDocument,
	{
		musicTracks: {
			nodes: [song],
		},
		audiobible: {
			book: {
				chapter: {
					title: 'the_chapter_title',
				},
			},
		},
		stories: { nodes: [story] },
		tag: {
			nodes: [taggedRecording],
		},
		sermons: {
			nodes: [recording],
		},
		testimonies: {
			nodes: [testimony],
		},
		blogPosts: {
			nodes: [post],
		},
	}
);

describe('home page', () => {
	beforeEach(() => {
		jest.resetAllMocks();
		loadData();
	});

	it('revalidates static copy every 10s', async () => {
		const { revalidate } = await getStaticProps({ params: { language: 'en' } });

		expect(revalidate).toBe(10);
	});

	it('generates static paths', async () => {
		const { paths } = await getStaticPaths();

		expect(paths).toContain('/en');
	});

	it('sets proper fallback strategy', async () => {
		const { fallback } = await getStaticPaths();

		expect(fallback).toBe(true);
	});

	it('generates static paths for all languages', async () => {
		const { paths } = await getStaticPaths();

		expect(paths).toContain('/es');
	});

	it('queries with language', async () => {
		await renderPage({ params: { language: 'es' } });

		await waitFor(() =>
			expect(mockedFetchApi).toBeCalledWith(GetHomeStaticPropsDocument, {
				variables: {
					language: 'SPANISH',
				},
			})
		);
	});

	it('includes testimonies', async () => {
		const { getByText } = await renderPage();

		expect(getByText('Testimonies')).toBeInTheDocument();
	});

	it('falls back to English', async () => {
		loadQuery({ language: 'ak' });

		const { getByText } = await renderPage();

		expect(getByText('Testimonies')).toBeInTheDocument();
	});

	it('disables sidebar', async () => {
		const { props } = await getStaticProps({
			params: {
				language: 'en',
			},
		});

		expect(props.disableSidebar).toBeTruthy();
	});

	it('renders song title', async () => {
		const { getByText } = await renderPage();

		await waitFor(() => {
			expect(getByText('the_song_title')).toBeInTheDocument();
		});
	});

	it('renders song person', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_song_person_name')).toBeInTheDocument();
	});

	it('renders song duration', async () => {
		const { getByText } = await renderPage();

		expect(getByText('5m')).toBeInTheDocument();
	});

	it('renders song collection title', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_song_collection_title')).toBeInTheDocument();
	});

	it('renders chapter title', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_chapter_title')).toBeInTheDocument();
	});

	it('renders story title', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_story_title')).toBeInTheDocument();
	});

	it('renders story duration', async () => {
		const { getByText } = await renderPage();

		expect(getByText('21m')).toBeInTheDocument();
	});

	it('renders story parts total', async () => {
		const { getByText } = await renderPage();

		expect(getByText('Part 1 of 7')).toBeInTheDocument();
	});

	it('renders story sequence title', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_story_sequence_title')).toBeInTheDocument();
	});

	it('renders tagged recording title', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_tagged_recording_title')).toBeInTheDocument();
	});

	it('renders recording title', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_recording_title')).toBeInTheDocument();
	});

	it('renders recording sequence title', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_recording_sequence_title')).toBeInTheDocument();
	});

	it('renders recording sequence part info', async () => {
		const { getByText } = await renderPage();

		expect(getByText('Part 1 of 15')).toBeInTheDocument();
	});

	it('renders post titles', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_post_title')).toBeInTheDocument();
	});

	it('renders post date', async () => {
		const { getByText } = await renderPage();

		expect(getByText('December 3, 2019')).toBeInTheDocument();
	});

	it('renders post teaser', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_post_teaser')).toBeInTheDocument();
	});

	it('renders read time', async () => {
		const { getByText } = await renderPage();

		expect(getByText('9m')).toBeInTheDocument();
	});

	it('renders post image', async () => {
		const { getByAltText } = await renderPage();

		expect(getByAltText('the_post_title')).toHaveAttribute(
			'src',
			'the_post_image_url'
		);
	});

	it('links post title', async () => {
		const { getByText } = await renderPage();

		expect(getByText('the_post_title')).toHaveAttribute(
			'href',
			'/the_post_url'
		);
	});
});

// TODO:
// render Bible chapter duration
// render Bible chapter progress
// render Bible chapter container title (book and version)
// render song progress
// shows marketing header
// includes language switcher
// includes login and signup links
// language switcher opens
// language switcher closes
// localize all text
// displays 404 on getStaticProps fetch errors
