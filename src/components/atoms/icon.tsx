import Image from 'next/image';
import React from 'react';

export default function Icon({
	icon,
	size = 16,
}: {
	icon: string;
	size?: number;
}): JSX.Element {
	return <Image src={`/img/icon-${icon}.svg`} height={size} width={size} />;
}
