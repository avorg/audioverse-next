import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// TODO: Ensure this page gets statically generated
// TODO: How will we translate this page?
export default function Give(): JSX.Element {
	return (
		<>
			<h1>Donate Now</h1>

			{/* WORKAROUND: https://stackoverflow.com/a/55322126/937377 */}
			<script
				src="https://donorbox.org/widget.js"
				async={true}
				{...{ paypalexpress: 'true' }}
			/>
			<iframe
				src="https://donorbox.org/embed/audioverse-give?hide_donation_meter=true&designation=Where%20Needed%20Most"
				height="685px"
				width="100%"
				style={{
					maxWidth: '400px',
					minWidth: '310px',
					maxHeight: 'none !important',
				}}
				seamless
				name="donorbox"
				frameBorder="0"
				scrolling="no"
				allow={'payment'}
			/>

			<p>
				If you would like to donate using Apple Pay{' '}
				<Link href="https://donorbox.org/audioverse-give">
					<a>
						click here{' '}
						<Image
							src="/img/Apple_Pay.svg"
							alt="Apple Pay"
							width={166}
							height={106}
						/>
					</a>
				</Link>
			</p>

			{/* TODO: Port old donation page or delete this link: */}
			<p>
				If for any reason you would like to give using the old donation page,
				please{' '}
				<Link href="https://www.audioverse.org/english/about/17/donation.html">
					<a>click here</a>
				</Link>
			</p>

			<p>
				If you would like to cancel your recurring donations from our previous
				system, please email us at: billing@audioverse.org
			</p>

			<Image
				src="/img/paypal.png"
				alt="Paypal Giving Fund"
				width={448}
				height={55}
			/>
			<h2>Give 100% of your donation to AudioVerse</h2>
			<p>
				Visit the <strong>AudioVerse PayPal Giving Fund</strong> page to
				initiate your donation to AudioVerse. 100% of your gift will go to the
				ministry with no processing fee. By giving through this channel, you
				will receive a tax-deductible receipt from Paypal Giving Fund and not
				from AudioVerse.
			</p>
			<Image src="/img/mail.png" alt="Check by Mail" width={195} height={220} />
			<h2>Check by Mail</h2>
			<p>Please make checks payable to AudioVerse.</p>

			<p>Our mailing address is:</p>

			<address>
				AudioVerse
				<br />
				PO Box 2288
				<br />
				Collegedale, TN 37315-2288
				<br />
				USA
			</address>
			<Image
				src="/img/amazon-smile.png"
				alt="Amazon Smile"
				width={701}
				height={156}
			/>
			<h2>Shop AmazonSmile, Support AudioVerse</h2>
			<p>With every purchase on AmazonSmile, AudioVerse receives 0.5%.</p>

			<p>How? Just click on the button.</p>

			<p>
				That&apos;s all there is to it! Just be sure to bookmark the new
				AmazonSmile website or else your browser will likely default back to the
				regular Amazon site.
			</p>

			<Image
				src="/img/giving-assistant.png"
				alt="Giving Assistant"
				width={700}
				height={148}
			/>
			<h2>Giving Assistant</h2>
			<p>
				Donate up to 30% of your purchase price to AudioVerse when you shop at
				1800+ popular online retailers using Giving Assistant! It’s easy. Giving
				Assistant pays you cash back, and you choose how much of it you’d like
				to donate to us. Try it now and find great deals like Macy&apos;s
				Coupons, as well as savings at great places like Home Depot and JC
				Penney!
			</p>

			<Image
				src="/img/estate-planning-legacy.png"
				alt="Estate Planning Legacy"
				width={366}
				height={359}
			/>
			<h2>Remember AudioVerse in Your Estate Plan</h2>

			<p>
				You can make an impact on AudioVerse today and tomorrow by making
				AudioVerse a recipient in your estate plan. The easiest way to do this
				is by making AudioVerse a beneficiary in your financial accounts or by
				including the ministry in your will or trust.
			</p>

			<p>
				For those who wish to leave a lasting legacy by giving to the
				Lord&apos;s work but still need the benefit of their assets, a
				charitable gift annuity may be a good option. This method of giving is
				designed to be beneficial for both the donor and recipient. AudioVerse
				is working with Western Adventist Foundation (WAF) to provide this
				option of giving to our supporters.
			</p>

			<p>
				<strong>
					If you wish to leave a gift via a charitable gift annuity to
					AudioVerse, please contact WAF directly either through their website
					or by phone.
				</strong>
			</p>

			<address>
				Western Adventist Foundation
				<br />
				Website: http://www.wafsda.org
				<br />
				Phone: 866-356-5595
			</address>

			<p>
				Charitable gift annuities are NOT AVAILABLE in the following states: AL,
				MD and WA; Annuities for CA and IL residents are provided by the Pacific
				Union Conference of Seventh-day Adventists; Annuities for HI residents
				are provided by the Hawaii Conference of Seventh-day Adventists; and
				Charitable gift annuities to benefit AudioVerse in all other states are
				provided by Western Adventist Foundation. Western Adventist Foundation
				provides no legal advice. Individuals should seek the advice of their
				own legal counsel.
			</p>
		</>
	);
}
