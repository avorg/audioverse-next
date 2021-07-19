import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { GetSongsListPageDataQuery } from '@lib/generated/graphql';
import {
	makeAlbumRoute,
	makeBibleMusicRoute,
	makeSponsorMusicRoute,
	makeTagMusicRoute,
} from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';

export interface SongsProps {
	data: GetSongsListPageDataQuery;
}

function SongList({ data }: SongsProps): JSX.Element {
	const languageRoute = useLanguageRoute();

	return (
		<>
			<h2>
				<FormattedMessage
					id="songsListPage__bookTabLabel"
					defaultMessage="Books"
					description="Songs list page book tab label"
				/>
			</h2>
			<ul>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Genesis')}>
						<a>
							<FormattedMessage
								id="songsListPage__GenesisLabel"
								defaultMessage="Genesis"
								description="Songs list page Genesis link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Exodus')}>
						<a>
							<FormattedMessage
								id="songsListPage__ExodusLabel"
								defaultMessage="Exodus"
								description="Songs list page Exodus link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Leviticus')}>
						<a>
							<FormattedMessage
								id="songsListPage__LeviticusLabel"
								defaultMessage="Leviticus"
								description="Songs list page Leviticus link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Numbers')}>
						<a>
							<FormattedMessage
								id="songsListPage__NumbersLabel"
								defaultMessage="Numbers"
								description="Songs list page Numbers link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Deuteronomy')}>
						<a>
							<FormattedMessage
								id="songsListPage__DeuteronomyLabel"
								defaultMessage="Deuteronomy"
								description="Songs list page Deuteronomy link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Joshua')}>
						<a>
							<FormattedMessage
								id="songsListPage__JoshuaLabel"
								defaultMessage="Joshua"
								description="Songs list page Joshua link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Judges')}>
						<a>
							<FormattedMessage
								id="songsListPage__JudgesLabel"
								defaultMessage="Judges"
								description="Songs list page Judges link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Ruth')}>
						<a>
							<FormattedMessage
								id="songsListPage__RuthLabel"
								defaultMessage="Ruth"
								description="Songs list page Ruth link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '1 Samuel')}>
						<a>
							<FormattedMessage
								id="songsListPage__1SamuelLabel"
								defaultMessage="1 Samuel"
								description="Songs list page 1 Samuel link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '2 Samuel')}>
						<a>
							<FormattedMessage
								id="songsListPage__2SamuelLabel"
								defaultMessage="2 Samuel"
								description="Songs list page 2 Samuel link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '1 Kings')}>
						<a>
							<FormattedMessage
								id="songsListPage__1KingsLabel"
								defaultMessage="1 Kings"
								description="Songs list page 1 Kings link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '2 Kings')}>
						<a>
							<FormattedMessage
								id="songsListPage__2KingsLabel"
								defaultMessage="2 Kings"
								description="Songs list page 2 Kings link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '1 Chronicles')}>
						<a>
							<FormattedMessage
								id="songsListPage__1ChroniclesLabel"
								defaultMessage="1 Chronicles"
								description="Songs list page 1 Chronicles link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '2 Chronicles')}>
						<a>
							<FormattedMessage
								id="songsListPage__2ChroniclesLabel"
								defaultMessage="2 Chronicles"
								description="Songs list page 2 Chronicles link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Ezra')}>
						<a>
							<FormattedMessage
								id="songsListPage__EzraLabel"
								defaultMessage="Ezra"
								description="Songs list page Ezra link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Nehemiah')}>
						<a>
							<FormattedMessage
								id="songsListPage__NehemiahLabel"
								defaultMessage="Nehemiah"
								description="Songs list page Nehemiah link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Esther')}>
						<a>
							<FormattedMessage
								id="songsListPage__EstherLabel"
								defaultMessage="Esther"
								description="Songs list page Esther link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Job')}>
						<a>
							<FormattedMessage
								id="songsListPage__JobLabel"
								defaultMessage="Job"
								description="Songs list page Job link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Psalms')}>
						<a>
							<FormattedMessage
								id="songsListPage__PsalmsLabel"
								defaultMessage="Psalms"
								description="Songs list page Psalms link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Proverbs')}>
						<a>
							<FormattedMessage
								id="songsListPage__ProverbsLabel"
								defaultMessage="Proverbs"
								description="Songs list page Proverbs link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Ecclesiastes')}>
						<a>
							<FormattedMessage
								id="songsListPage__EcclesiastesLabel"
								defaultMessage="Ecclesiastes"
								description="Songs list page Ecclesiastes link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Detail of Solomon')}>
						<a>
							<FormattedMessage
								id="songsListPage__Song of SolomonLabel"
								defaultMessage="Detail of Solomon"
								description="Songs list page Detail of Solomon link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Isaiah')}>
						<a>
							<FormattedMessage
								id="songsListPage__IsaiahLabel"
								defaultMessage="Isaiah"
								description="Songs list page Isaiah link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Jeremiah')}>
						<a>
							<FormattedMessage
								id="songsListPage__JeremiahLabel"
								defaultMessage="Jeremiah"
								description="Songs list page Jeremiah link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Lamentations')}>
						<a>
							<FormattedMessage
								id="songsListPage__LamentationsLabel"
								defaultMessage="Lamentations"
								description="Songs list page Lamentations link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Ezekiel')}>
						<a>
							<FormattedMessage
								id="songsListPage__EzekielLabel"
								defaultMessage="Ezekiel"
								description="Songs list page Ezekiel link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Daniel')}>
						<a>
							<FormattedMessage
								id="songsListPage__DanielLabel"
								defaultMessage="Daniel"
								description="Songs list page Daniel link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Hosea')}>
						<a>
							<FormattedMessage
								id="songsListPage__HoseaLabel"
								defaultMessage="Hosea"
								description="Songs list page Hosea link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Joel')}>
						<a>
							<FormattedMessage
								id="songsListPage__JoelLabel"
								defaultMessage="Joel"
								description="Songs list page Joel link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Amos')}>
						<a>
							<FormattedMessage
								id="songsListPage__AmosLabel"
								defaultMessage="Amos"
								description="Songs list page Amos link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Obadiah')}>
						<a>
							<FormattedMessage
								id="songsListPage__ObadiahLabel"
								defaultMessage="Obadiah"
								description="Songs list page Obadiah link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Jonah')}>
						<a>
							<FormattedMessage
								id="songsListPage__JonahLabel"
								defaultMessage="Jonah"
								description="Songs list page Jonah link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Micah')}>
						<a>
							<FormattedMessage
								id="songsListPage__MicahLabel"
								defaultMessage="Micah"
								description="Songs list page Micah link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Nahum')}>
						<a>
							<FormattedMessage
								id="songsListPage__NahumLabel"
								defaultMessage="Nahum"
								description="Songs list page Nahum link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Habakkuk')}>
						<a>
							<FormattedMessage
								id="songsListPage__HabakkukLabel"
								defaultMessage="Habakkuk"
								description="Songs list page Habakkuk link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Zephaniah')}>
						<a>
							<FormattedMessage
								id="songsListPage__ZephaniahLabel"
								defaultMessage="Zephaniah"
								description="Songs list page Zephaniah link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Haggai')}>
						<a>
							<FormattedMessage
								id="songsListPage__HaggaiLabel"
								defaultMessage="Haggai"
								description="Songs list page Haggai link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Zechariah')}>
						<a>
							<FormattedMessage
								id="songsListPage__ZechariahLabel"
								defaultMessage="Zechariah"
								description="Songs list page Zechariah link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Malachi')}>
						<a>
							<FormattedMessage
								id="songsListPage__MalachiLabel"
								defaultMessage="Malachi"
								description="Songs list page Malachi link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Matthew')}>
						<a>
							<FormattedMessage
								id="songsListPage__MatthewLabel"
								defaultMessage="Matthew"
								description="Songs list page Matthew link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Mark')}>
						<a>
							<FormattedMessage
								id="songsListPage__MarkLabel"
								defaultMessage="Mark"
								description="Songs list page Mark link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Luke')}>
						<a>
							<FormattedMessage
								id="songsListPage__LukeLabel"
								defaultMessage="Luke"
								description="Songs list page Luke link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'John')}>
						<a>
							<FormattedMessage
								id="songsListPage__JohnLabel"
								defaultMessage="John"
								description="Songs list page John link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Acts')}>
						<a>
							<FormattedMessage
								id="songsListPage__ActsLabel"
								defaultMessage="Acts"
								description="Songs list page Acts link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Romans')}>
						<a>
							<FormattedMessage
								id="songsListPage__RomansLabel"
								defaultMessage="Romans"
								description="Songs list page Romans link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '1 Corinthians')}>
						<a>
							<FormattedMessage
								id="songsListPage__1CorinthiansLabel"
								defaultMessage="1 Corinthians"
								description="Songs list page 1 Corinthians link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '2 Corinthians')}>
						<a>
							<FormattedMessage
								id="songsListPage__2CorinthiansLabel"
								defaultMessage="2 Corinthians"
								description="Songs list page 2 Corinthians link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Galatians')}>
						<a>
							<FormattedMessage
								id="songsListPage__GalatiansLabel"
								defaultMessage="Galatians"
								description="Songs list page Galatians link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Ephesians')}>
						<a>
							<FormattedMessage
								id="songsListPage__EphesiansLabel"
								defaultMessage="Ephesians"
								description="Songs list page Ephesians link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Philippians')}>
						<a>
							<FormattedMessage
								id="songsListPage__PhilippiansLabel"
								defaultMessage="Philippians"
								description="Songs list page Philippians link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Colossians')}>
						<a>
							<FormattedMessage
								id="songsListPage__ColossiansLabel"
								defaultMessage="Colossians"
								description="Songs list page Colossians link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '1 Thessalonians')}>
						<a>
							<FormattedMessage
								id="songsListPage__1ThessaloniansLabel"
								defaultMessage="1 Thessalonians"
								description="Songs list page 1 Thessalonians link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '2 Thessalonians')}>
						<a>
							<FormattedMessage
								id="songsListPage__2ThessaloniansLabel"
								defaultMessage="2 Thessalonians"
								description="Songs list page 2 Thessalonians link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '1 Timothy')}>
						<a>
							<FormattedMessage
								id="songsListPage__1TimothyLabel"
								defaultMessage="1 Timothy"
								description="Songs list page 1 Timothy link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '2 Timothy')}>
						<a>
							<FormattedMessage
								id="songsListPage__2TimothyLabel"
								defaultMessage="2 Timothy"
								description="Songs list page 2 Timothy link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Titus')}>
						<a>
							<FormattedMessage
								id="songsListPage__TitusLabel"
								defaultMessage="Titus"
								description="Songs list page Titus link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Philemon')}>
						<a>
							<FormattedMessage
								id="songsListPage__PhilemonLabel"
								defaultMessage="Philemon"
								description="Songs list page Philemon link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Hebrews')}>
						<a>
							<FormattedMessage
								id="songsListPage__HebrewsLabel"
								defaultMessage="Hebrews"
								description="Songs list page Hebrews link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'James')}>
						<a>
							<FormattedMessage
								id="songsListPage__JamesLabel"
								defaultMessage="James"
								description="Songs list page James link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '1 Peter')}>
						<a>
							<FormattedMessage
								id="songsListPage__1PeterLabel"
								defaultMessage="1 Peter"
								description="Songs list page 1 Peter link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '2 Peter')}>
						<a>
							<FormattedMessage
								id="songsListPage__2PeterLabel"
								defaultMessage="2 Peter"
								description="Songs list page 2 Peter link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '1 John')}>
						<a>
							<FormattedMessage
								id="songsListPage__1JohnLabel"
								defaultMessage="1 John"
								description="Songs list page 1 John link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '2 John')}>
						<a>
							<FormattedMessage
								id="songsListPage__2JohnLabel"
								defaultMessage="2 John"
								description="Songs list page 2 John link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, '3 John')}>
						<a>
							<FormattedMessage
								id="songsListPage__3JohnLabel"
								defaultMessage="3 John"
								description="Songs list page 3 John link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Jude')}>
						<a>
							<FormattedMessage
								id="songsListPage__JudeLabel"
								defaultMessage="Jude"
								description="Songs list page Jude link label"
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={makeBibleMusicRoute(languageRoute, 'Revelation')}>
						<a>
							<FormattedMessage
								id="songsListPage__RevelationLabel"
								defaultMessage="Revelation"
								description="Songs list page Revelation link label"
							/>
						</a>
					</Link>
				</li>
			</ul>
			<h2>
				<FormattedMessage
					id="songsListPage__albumTabLabel"
					defaultMessage="Albums"
					description="Songs list page album tab label"
				/>
			</h2>
			<ul>
				{data?.musicAlbums?.nodes?.map((n) => (
					<li key={n.id}>
						<Link href={makeAlbumRoute(languageRoute, n.id)}>
							<a>
								<Image
									src={n.imageWithFallback.url}
									alt={n.title}
									width={100}
									height={100}
								/>
								<span>{n.title}</span>
								<span>{n.sponsor?.title}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
			<h2>
				<FormattedMessage
					id="songsListPage__sponsorTabLabel"
					defaultMessage="Sponsors"
					description="Songs list page sponsor tab label"
				/>
			</h2>
			<ul>
				{data?.sponsors?.nodes?.map((n) => (
					<li key={n.id}>
						<Link href={makeSponsorMusicRoute(languageRoute, n.id)}>
							<a>
								<Image
									src={n.imageWithFallback.url}
									alt={n.title}
									width={100}
									height={100}
								/>
								{n.title}
							</a>
						</Link>
					</li>
				))}
			</ul>
			<h2>
				<FormattedMessage
					id="songsListPage__tagTabLabel"
					defaultMessage="Tags"
					description="Songs list page tag tab label"
				/>
			</h2>
			<ul>
				{data?.musicMoodTags?.nodes?.map((n) => (
					<li key={n.id}>
						<Link href={makeTagMusicRoute(languageRoute, n.name)}>
							<a>{n.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default SongList;
