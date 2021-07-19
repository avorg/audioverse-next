import React, { CSSProperties, ReactNode } from 'react';

import styles from './lineHeading.module.scss';

export default function LineHeading({
	children,
	size,
}: {
	children: ReactNode;
	size?: number;
}): JSX.Element {
	return (
		<h5
			className={styles.heading}
			style={
				{
					'--fontSize': `${size}px`,
				} as CSSProperties
			}
		>
			{children}
		</h5>
	);
}
