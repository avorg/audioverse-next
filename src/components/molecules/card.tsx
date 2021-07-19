import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

import Icon from '@components/atoms/icon';
import styles from '@components/molecules/card.module.scss';

export type CardTheme = 'chapter' | 'sermon' | 'song' | 'story' | 'topic';

interface CardProps {
	hat?: {
		icon?: any;
		title: string;
	};
	hero?: string;
	preTitle?: string;
	title: string;
	url?: string;
	titleAdornment?: ReactNode;
	children?: ReactNode;
	theme?: CardTheme;
}

export default function Card({
	hat,
	hero,
	preTitle,
	title,
	url,
	titleAdornment,
	children,
	theme,
}: CardProps): JSX.Element {
	const heroImage = hero && (
		<Image
			className={styles.hero}
			src={hero}
			alt={title}
			width={500}
			height={260}
		/>
	);

	return (
		<div className={`${styles.card} ${theme && styles[theme]}`}>
			{hat && (
				// TODO: Link the hat
				<div className={styles.hat}>
					<span className={styles.hatIcon}>{hat.icon}</span>
					<span className={styles.hatTitle}>{hat.title}</span>
					<Icon icon={'chevron-down'} size={16} />
				</div>
			)}
			{hero &&
				(url ? (
					<Link href={url}>
						<a>{heroImage}</a>
					</Link>
				) : (
					heroImage
				))}
			<div className={styles.content}>
				{preTitle && <span className={styles.part}>{preTitle}</span>}
				<div className={styles.heading}>
					<h1 className={styles.title}>
						{url ? (
							<Link href={url}>
								<a>{title}</a>
							</Link>
						) : (
							title
						)}
					</h1>
					{titleAdornment}
				</div>
				{children}
			</div>
		</div>
	);
}
