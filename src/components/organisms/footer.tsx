import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import useLanguageRoute from '@lib/useLanguageRoute';

import styles from './footer.module.scss';

// TODO: Finish linking all entries
// TODO: Delete this component and migrate functionality according to T&S design

export default function Footer(): JSX.Element {
	const languageRoute = useLanguageRoute();
	const intl = useIntl();

	return (
		<div className={styles.footer}>
			<ul>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemAboutUs`}
								defaultMessage="About Us"
								description={`Footer nav link name: About Us`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemMeetTheTeam`}
								defaultMessage="Meet the Team"
								description={`Footer nav link name: Meet the Team`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemSpiritOfAudioVerse`}
								defaultMessage="Spirit of AudioVerse"
								description={`Footer nav link name: Spirit of AudioVerse`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemFAQ`}
								defaultMessage="FAQ"
								description={`Footer nav link name: FAQ`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemContactUs`}
								defaultMessage="Contact Us"
								description={`Footer nav link name: Contact Us`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={`/${languageRoute}/sermons/all/page/1`}>
						<a>
							<FormattedMessage
								id={`footer__NavItemPresentations`}
								defaultMessage="Presentations"
								description={`Footer nav link name: Presentations`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemBibles`}
								defaultMessage="Bibles"
								description={`Footer nav link name: Bibles`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemBooks`}
								defaultMessage="Books"
								description={`Footer nav link name: Books`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemStories`}
								defaultMessage="Stories"
								description={`Footer nav link name: Stories`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemScriptureSongs`}
								defaultMessage="Scripture Songs"
								description={`Footer nav link name: Scripture Songs`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemConferences`}
								defaultMessage="Conferences"
								description={`Footer nav link name: Conferences`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemPresenters`}
								defaultMessage="Presenters"
								description={`Footer nav link name: Presenters`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={`/${languageRoute}/tags/page/1`}>
						<a>
							<FormattedMessage
								id={`footer__NavItemTags`}
								defaultMessage="Tags"
								description={`Footer nav link name: Tags`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemSponsors`}
								defaultMessage="Sponsors"
								description={`Footer nav link name: Sponsors`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemSeries`}
								defaultMessage="Series"
								description={`Footer nav link name: Series`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href={`/${languageRoute}/testimonies/page/1`}>
						<a>
							<FormattedMessage
								id={`footer__NavItemTestimonials`}
								defaultMessage="Testimonials"
								description={`Footer nav link name: Testimonials`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemPlaylists`}
								defaultMessage="Playlists"
								description={`Footer nav link name: Playlists`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<FormattedMessage
								id={`footer__NavItemBlog`}
								defaultMessage="Blog"
								description={`Footer nav link name: Blog`}
							/>
						</a>
					</Link>
				</li>
				<li>
					<a
						href="https://audioversestore.org/"
						target={'_blank'}
						rel={'noreferrer noopener'}
					>
						<FormattedMessage
							id={`footer__NavItemAudioVerseStore`}
							defaultMessage="AudioVerse Store"
							description={`Footer nav link name: AudioVerse Store`}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.journeysunscripted.com/"
						target={'_blank'}
						rel={'noreferrer noopener'}
					>
						<FormattedMessage
							id={`footer__NavItemJourneysUnscripted`}
							defaultMessage="Journeys Unscripted"
							description={`Footer nav link name: Journeys Unscripted`}
						/>
					</a>
				</li>
				<li>
					<Link href="/de">
						<a>Deutsch</a>
					</Link>
				</li>
				<li>
					<Link href="/en">
						<a>English</a>
					</Link>
				</li>
				<li>
					<Link href="/es">
						<a>Español</a>
					</Link>
				</li>
				<li>
					<Link href="/fr">
						<a>Français</a>
					</Link>
				</li>
				<li>
					<Link href="/ja">
						<a>日本語</a>
					</Link>
				</li>
				<li>
					<Link href="/zh">
						<a>中文</a>
					</Link>
				</li>
				<li>
					<Link href="/ru">
						<a>Русский</a>
					</Link>
				</li>
			</ul>

			<Link href="https://itunes.apple.com/us/app/audioverse/id726998810?mt=8">
				<a target={'_blank'} rel={'noreferrer noopener'}>
					<Image
						src="/img/app-apple.png"
						alt={intl.formatMessage({
							id: 'footer__iosAppImageAlt',
							defaultMessage: 'iOS App',
							description: 'iOS app link image alt text',
						})}
						width={230}
						height={80}
					/>
				</a>
			</Link>

			<Link href="https://play.google.com/store/apps/details?id=org.audioverse.exodus">
				<a target={'_blank'} rel={'noreferrer noopener'}>
					<Image
						src="/img/app-android.png"
						alt={intl.formatMessage({
							id: 'footer__androidAppImageAlt',
							defaultMessage: 'Android App',
							description: 'Android app link image alt text',
						})}
						width={230}
						height={80}
					/>
				</a>
			</Link>

			<p>
				<FormattedMessage
					id={`footer__copyright`}
					defaultMessage="AudioVerse © {year} All Rights Reserved."
					description={`Footer copyright`}
					values={{ year: new Date().getFullYear() }}
				/>
				{/*<span>{`AudioVerse © ${new Date().getFullYear()} All Rights Reserved.`}</span>{' '}*/}
				{/* TODO: Update links when pages exist */}
				<Link href="#">
					<a>
						<FormattedMessage
							id={`footer__legalInfoLink`}
							defaultMessage="Legal Info"
							description={`Footer legal info link text`}
						/>
					</a>
				</Link>
				,{' '}
				<Link href="#">
					<a>
						<FormattedMessage
							id={`footer__termsLink`}
							defaultMessage="Terms of Use"
							description={`Footer terms of use link text`}
						/>
					</a>
				</Link>
				,{' '}
				<Link href="#">
					<a>
						<FormattedMessage
							id={`footer__privacyPolicyLink`}
							defaultMessage="Privacy Policy"
							description={`Footer privacy policy link text`}
						/>
					</a>
				</Link>
				.{' '}
				<FormattedMessage
					id={`footer__designedBy`}
					defaultMessage="Designed by"
					description={`Footer designed by prefix`}
				/>{' '}
				<Link href="https://typesandsymbols.com/">
					<a>Types & Symbols</a>
				</Link>
				.
			</p>
		</div>
	);
}
