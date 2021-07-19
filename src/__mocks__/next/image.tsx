import { ImageProps } from 'next/image';
import React from 'react';

function Image(props: ImageProps): JSX.Element {
	/* eslint-disable @next/next/no-img-element */
	return <img {...props} width={props.width} height={props.height} />;
}

export default Image;
