import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import CardBibleChapter from '@components/molecules/cardBibleChapter';
import CardPost from '@components/molecules/cardPost';
import CardSermon from '@components/molecules/cardSermon';
import CardSong from '@components/molecules/cardSong';
import CardStory from '@components/molecules/cardStory';
import CardTopic from '@components/molecules/cardTopic';
import LanguageSwitcher from '@components/molecules/languageSwitcher';
import Section from '@components/organisms/section';
import Slider from '@components/organisms/slider';
import Testimonies from '@components/organisms/testimonies';
import useLanguageRoute from '@lib/useLanguageRoute';
import { HomeProps } from '@pages/[language]';

import styles from './home.module.scss';

export default function Home({ data }: HomeProps): JSX.Element {
	const route = useLanguageRoute();
	const song = data?.musicTracks.nodes && data.musicTracks.nodes[0];
	const chapter = data?.audiobible?.book.chapter;
	const story = data?.stories.nodes && data.stories.nodes[0];
	const topicRecording = data?.tag.nodes && data.tag.nodes[0];
	const recording = data?.sermons.nodes && data.sermons.nodes[0];
	const testimonies = data?.testimonies.nodes || [];
	const posts = data?.blogPosts.nodes || [];

	return (
		<div>
			<header className={styles.header}>
				<Image src="/img/logo.svg" width={161} height={23} />
				<nav className={styles.nav}>
					<LanguageSwitcher />
					<Link href={`/${route}/give`}>
						<a className={`${styles.button} ${styles.primary}`}>
							<FormattedMessage
								id={'homePage__donateButtonLabel'}
								defaultMessage={'Donate'}
								description={'home page donate button label'}
							/>
						</a>
					</Link>{' '}
					<Link href={`${route}/app`}>
						<a className={`${styles.button} ${styles.primary}`}>
							<FormattedMessage
								id={'homePage__downloadAppButtonLabel'}
								defaultMessage={'Download App'}
								description={'home page download app button label'}
							/>
						</a>
					</Link>
					<span>|</span>
					<Link href={`/${route}/account/login`}>
						<a>
							<FormattedMessage
								id={'homePage__loginButtonLabel'}
								defaultMessage={'Login'}
								description={'home page login button label'}
							/>
						</a>
					</Link>
					<Link href={`/${route}/account/register`}>
						<a>
							<FormattedMessage
								id={'srcContainersHomeTsx__signUp'}
								defaultMessage={'Sign Up'}
								description={'home: Sign up button label'}
							/>
						</a>
					</Link>
				</nav>
			</header>
			<Section
				text={
					<>
						<h2>
							<FormattedMessage
								id={'homePage__soundDoctrineTitle'}
								defaultMessage={'Sound Doctrine'}
								description={'home: Sound Doctrine section title'}
							/>
						</h2>
						<p>
							<FormattedMessage
								id={'homePage__soundDoctrineText'}
								defaultMessage={
									'AudioVerse is a platform curating the best in Adventist audio content. Be challenged and inspired to grow in your relationship with Jesus through songs, sermons, audiobooks, and Bible readings.'
								}
								description={'home page sound doctrine text'}
							/>
						</p>
						<Link href={`/${route}/account/register`}>
							<a className={`${styles.button} ${styles.primary}`}>
								<FormattedMessage
									id={'homePage__joinAudioVerseButtonLabel'}
									defaultMessage={'Join AudioVerse'}
									description={'home page join audioverse button label'}
								/>
							</a>
						</Link>
					</>
				}
				media={
					<Image
						src={'/img/unsplash-headphones.jpg'}
						width={4724}
						height={3072}
					/>
				}
				theme={'dark'}
				bleed={true}
			/>
			<Section
				text={
					<>
						<h2>
							<FormattedMessage
								id={'homePage__recentContentSectionTitle'}
								defaultMessage={'Recent content'}
								description={'home page recent content section title'}
							/>
						</h2>
						<p>
							<FormattedMessage
								id={'homePage__recentContentSectionText'}
								defaultMessage={
									'Explore a select few of our audio pieces. Then when you’re ready, <a>create an account</a> to view even more.'
								}
								description={'home page recent content section text'}
								values={{
									a: function a(chunks: string) {
										return (
											<Link href="#">
												<a>{chunks}</a>
											</Link>
										);
									},
								}}
							/>
						</p>
					</>
				}
				media={
					<Slider perSlide={3} clip={false}>
						{song && <CardSong song={song} />}
						{chapter && <CardBibleChapter chapter={chapter} />}
						{story && <CardStory story={story} />}
						{topicRecording && <CardTopic topicRecording={topicRecording} />}
						{recording && <CardSermon recording={recording} />}
					</Slider>
				}
				center={true}
				reverse={true}
			/>
			<Section
				text={
					<>
						<h2>
							<FormattedMessage
								id={'homePage__downloadAppSectionTitle'}
								defaultMessage={'Download the App'}
								description={'home page download app section title'}
							/>
						</h2>
						<p>
							<FormattedMessage
								id={'homePage__downloadAppSectionText'}
								defaultMessage={
									'If you have a smartphone, download the app to take AudioVerse with you wherever you go. Stream teachings from anywhere over your network connection or download before-hand to listen on-the-go without using your data.'
								}
								description={'home page download app section text'}
							/>
						</p>
						<Link href={`${route}/app`}>
							<a className={`${styles.button} ${styles.primary}`}>
								<FormattedMessage
									id={'homePage__downloadNowButtonLabel'}
									defaultMessage={'Download Now'}
									description={'home page download now button label'}
								/>
							</a>
						</Link>
					</>
				}
				media={<Image src={'/img/players.jpeg'} width={3564} height={1724} />}
				theme={'dark'}
			/>
			<Section
				text={
					<>
						<h2>
							<FormattedMessage
								id="home__testimoniesTitle"
								defaultMessage="Testimonies"
								description="Testimonies slider title"
							/>
						</h2>
						<p>
							<FormattedMessage
								id={'homePage__testimoniesSectionText'}
								defaultMessage={
									'Hear from some of the people who use AudioVerse.'
								}
								description={'home page testimonies section text'}
							/>
						</p>
					</>
				}
				media={<Testimonies testimonies={testimonies} />}
				center={true}
				reverse={true}
			/>
			<Section
				text={
					<>
						<h2>
							<FormattedMessage
								id={'homePage__recentPostsSectionTitle'}
								defaultMessage={'Recent blog posts'}
								description={'home page recent posts section title'}
							/>
						</h2>
						<p>
							<FormattedMessage
								id={'homePage__recentPostsSectionText'}
								defaultMessage={
									'Read through our blog to find articles about recent events, sermons, and conferences. It’s updated semi-regularly at least once a month.'
								}
								description={'home page recent posts section text'}
							/>
						</p>
						{/* TODO: Replace with relative link when blog page added */}
						<Link href="https://www.audioverse.org/english/blog">
							<a className={`${styles.button} ${styles.primary}`}>
								<FormattedMessage
									id={'homePage__recentPostsButtonLabel'}
									defaultMessage={'View all blog posts'}
									description={'home page recent posts button label'}
								/>
							</a>
						</Link>
					</>
				}
				media={
					<div className={styles.posts}>
						{posts.map((p) => (
							<CardPost key={p.title} post={p} />
						))}
					</div>
				}
				theme={'lightTone'}
			/>
			<Section
				text={
					<>
						<h2>
							<FormattedMessage
								id={'homePage__createAccountSectionTitle'}
								defaultMessage={'Create an account'}
								description={'home page create account section title'}
							/>
						</h2>
						<p>
							<FormattedMessage
								id={'homePage__createAccountSectionText'}
								defaultMessage={
									'Create an account to get the most of Audioverse. Download teachings, save series to your library, and subscribe to sponsors and speakers to always get the latest.'
								}
								description={'home page create account section text'}
							/>
						</p>
						<Link href="#">
							<a className={`${styles.button} ${styles.primary}`}>
								<FormattedMessage
									id={'homePage__createAccountSectionCTA'}
									defaultMessage={'Sign up now'}
									description={'home page create account section cta'}
								/>
							</a>
						</Link>
					</>
				}
				media={
					<>
						<div>
							<FormattedMessage
								id={'homePage__addToLibraryPlaceholder'}
								defaultMessage={'Add to Library'}
								description={'home page add to library placeholder'}
							/>
						</div>
						<div>
							<FormattedMessage
								id={'homePage__downloadQueuePlaceholder'}
								defaultMessage={'Download Queue'}
								description={'home page downloaed queue placeholder'}
							/>
						</div>
						<div>
							<FormattedMessage
								id={'homePage__followFunctionalityPlaceholder'}
								defaultMessage={'Follow Functionality'}
								description={'home page follow functionality placeholder'}
							/>
						</div>
					</>
				}
				reverse={true}
			/>
			<Section
				text={
					<>
						<h2>
							<FormattedMessage
								id={'homePage__supportSectionTitle'}
								defaultMessage={'Support free audio'}
								description={'home page support section title'}
							/>
						</h2>
						<p>
							<FormattedMessage
								id={'homePage__supportSectionText'}
								defaultMessage={
									'AudioVerse is a non-profit ministry that exists because of our supporters. Creating, maintaining, and improving a technology platform takes a lot of resources and we’re grateful to our generous group of donors. Consider contributing today, even if it’s just 5 dollars a month, and help ensure that we can continue providing sound doctrine.'
								}
								description={'home page support section text'}
							/>
						</p>
						<Link href="#">
							<a className={`${styles.button} ${styles.primary}`}>
								<FormattedMessage
									id={'homePage__supportSectionCTA'}
									defaultMessage={'Make a donation'}
									description={'home page support section cta'}
								/>
							</a>
						</Link>
					</>
				}
				media={
					<div>
						<FormattedMessage
							id={'homePage__supportSectionImagePlaceholder'}
							defaultMessage={'image'}
							description={'home page support section image placeholder'}
						/>
					</div>
				}
				theme={'cream'}
			/>
			<Section
				theme={'dark'}
				reverse={true}
				bleed={true}
				text={
					<>
						<h2>
							<FormattedMessage
								id={'homePage__newsletterSectionTitle'}
								defaultMessage={'Subscribe to Updates'}
								description={'home page newsletter section title'}
							/>
						</h2>
						<p>
							<FormattedMessage
								id={'homePage__newsletterSectionText'}
								defaultMessage={
									'Want to hear when we’re releasing new features, going to conferences, or releasing new AudioVerse Swag? Subscribe to our newsletter to get updates.'
								}
								description={'home page newsletter section text'}
							/>
						</p>
						<Button
							href={
								'https://audioverse.z2systems.com/np/clients/audioverse/subscribe.jsp?subscription=5'
							}
							target={'_blank'}
							variant="contained"
							color="primary"
						>
							<FormattedMessage
								id={'homePage__emailSignupButton'}
								defaultMessage={'Subscribe'}
								description={'homePage__emailSignupButton'}
							/>
						</Button>
					</>
				}
				media={
					// TODO: Replace with subscription widget
					<Image src={'/img/unsplash-notes.jpg'} width={5472} height={3648} />
				}
			/>
			<div className={styles.footer}>
				<Image src="/img/logo.svg" width={161} height={23} />
				<div className={styles.footerLinks}>
					<div>
						<h5>
							<FormattedMessage
								id={'homePage__footerSocialTitle'}
								defaultMessage={'Social'}
								description={'home page footer social title'}
							/>
						</h5>
						<ul>
							<li>
								<Link href="https://www.facebook.com/AudioVerse">
									<a target={'_blank'} rel={'noreferrer noopener'}>
										<FacebookIcon fontSize={'small'} />
										<FormattedMessage
											id={'homePage__footerFacebookLink'}
											defaultMessage={'Facebook'}
											description={'home page footer facebook link'}
										/>
									</a>
								</Link>
							</li>
							<li>
								<Link href="https://www.instagram.com/audioverse/">
									<a target={'_blank'} rel={'noreferrer noopener'}>
										<InstagramIcon fontSize={'small'} />
										<FormattedMessage
											id={'homePage__footerInstagramLink'}
											defaultMessage={'Instagram'}
											description={'home page footer instagram link'}
										/>
									</a>
								</Link>
							</li>
							<li>
								<Link href="https://twitter.com/audioverse">
									<a target={'_blank'} rel={'noreferrer noopener'}>
										<TwitterIcon fontSize={'small'} />
										<FormattedMessage
											id={'homePage__footerTwitterLink'}
											defaultMessage={'Twitter'}
											description={'home page footer twitter link'}
										/>
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h5>
							<FormattedMessage
								id={'homePage__footerLinksTitle'}
								defaultMessage={'Links'}
								description={'home page footer links title'}
							/>
						</h5>
						<ul>
							<li>
								<Link href={`${route}/app`}>
									<a>
										<FormattedMessage
											id={'homePage__footerDownloadAppButton'}
											defaultMessage={'Download app'}
											description={'home page footer download app button'}
										/>
									</a>
								</Link>
							</li>
							<li>
								<Link
									href={
										'https://audioverse.z2systems.com/np/clients/audioverse/subscribe.jsp?subscription=5'
									}
								>
									<a target={'_blank'} rel={'noreferrer noopener'}>
										<FormattedMessage
											id={'homePage__footerNewsletterSignup'}
											defaultMessage={'Sign up for newsletter'}
											description={'homePage__footerNewsletterSignup'}
										/>
									</a>
								</Link>
							</li>
							<li>
								<Link href={`/${route}/give`}>
									<a>
										<FormattedMessage
											id={'homePage__footerDonateLink'}
											defaultMessage={'Donate'}
											description={'home page footer donate link'}
										/>
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
