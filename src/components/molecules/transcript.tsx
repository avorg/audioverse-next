import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import IconChevron from '../../../public/img/icon-chevron-down.svg';

import styles from './transcript.module.scss';

export default function Transcript({ text }: { text: string }): JSX.Element {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={`${styles.base} ${isOpen ? styles.open : ''}`}>
			<Button
				variant={'outlined'}
				startIcon={<IconChevron />}
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? 'Hide Transcript' : 'Read Transcript'}
			</Button>
			{isOpen && (
				<>
					<p>
						<FormattedMessage
							id="sermonDetailPage__transcriptDisclaimer"
							defaultMessage="This transcript may be automatically generated."
							description="Sermon detail transcript disclaimer"
						/>
					</p>
					<p>
						<FormattedMessage
							id="sermonDetailPage__transcriptHelp"
							defaultMessage="Our auto-generated transcripts need your help. Feel free to e-mail us your edited text of this transcript for your benefit and others. media@audioverse.org"
							description="Sermon detail transcript assistance request"
						/>
					</p>
					<p>{text}</p>
				</>
			)}
		</div>
	);
}
