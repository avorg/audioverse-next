import React from 'react';
import { useIntl } from 'react-intl';

import IconShare from '../../../public/img/icon-share.svg';

export default function ButtonShare(): JSX.Element {
	const intl = useIntl();

	return (
		<button
			aria-label={intl.formatMessage({
				id: 'molecule-buttonShare__buttonLabel',
				defaultMessage: 'share',
				description: 'share button label',
			})}
			disabled
		>
			<IconShare />
		</button>
	);
}
