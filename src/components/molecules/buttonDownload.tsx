import { Menu, MenuItem } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ButtonDownloadFragment } from '@lib/generated/graphql';
import { readableBytes } from '@lib/readableBytes';

import IconDownload from '../../../public/img/icon-download.svg';

import styles from './buttonDownload.module.scss';

/* TODO: Disable if downloads not allowed */
export default function ButtonDownload({
	recording,
}: {
	recording: ButtonDownloadFragment;
}): JSX.Element {
	const { audioDownloads = [], videoDownloads = [] } = recording;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const intl = useIntl();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<button
				onClick={handleClick}
				aria-label={intl.formatMessage({
					id: 'molecule-buttonDownload__buttonLabel',
					defaultMessage: 'downloads',
					description: 'download button label',
				})}
				aria-controls="downloads"
				aria-haspopup="true"
				className={styles.button}
			>
				<IconDownload />
			</button>
			<Menu
				id="downloads"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem disabled>
					<FormattedMessage
						id={'molecule-buttonDownload__menuAudioHeading'}
						defaultMessage={'Audio Downloads'}
						description={'download button menu audio heading'}
					/>
				</MenuItem>
				{audioDownloads.map((file) => (
					<MenuItem key={file.url} onClick={handleClose}>
						<Link href={file.url}>
							<a>{readableBytes(file.filesize)}</a>
						</Link>
					</MenuItem>
				))}
				<MenuItem disabled>
					<FormattedMessage
						id={'molecule-buttonDownload__menuVideoHeading'}
						defaultMessage={'Video Downloads'}
						description={'download button menu video heading'}
					/>
				</MenuItem>
				{videoDownloads.map((file) => (
					<MenuItem key={file.url} onClick={handleClose}>
						<Link href={file.url}>
							<a>{readableBytes(file.filesize)}</a>
						</Link>
					</MenuItem>
				))}
			</Menu>
		</>
	);
}
