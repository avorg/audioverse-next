import { Button } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Icon from '@components/atoms/icon';
import LoadingIndicator from '@components/molecules/loadingIndicator';
import useLanguageRoute from '@lib/useLanguageRoute';

import styles from './header.module.scss';

// TODO: rename component (sidebar?)

const Header = (): JSX.Element => {
	const languageRoute = useLanguageRoute();
	const iconSize = 20;

	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>
				<a href={`/${languageRoute}`}>
					<img src="/img/logo.svg" alt="AudioVerse" width={161} height={23} />
				</a>
			</h1>
			<ul>
				<li>
					<Icon icon={'playlist'} size={iconSize} />{' '}
					<FormattedMessage
						id={`header__navItemPlaylist`}
						defaultMessage="Playlist"
						description={`Header nav link name: Playlist`}
					/>
				</li>
				<li>
					<Icon icon={'search'} size={iconSize} />{' '}
					<FormattedMessage
						id={`header__navItemDiscover`}
						defaultMessage="Discover"
						description={`Header nav link name: Discover`}
					/>
				</li>
				<li>
					<Icon icon={'bible'} size={iconSize} />{' '}
					<FormattedMessage
						id={`header__naveItemBible`}
						defaultMessage="Bible"
						description={`Header nav link name: Bible`}
					/>
				</li>
				<li>
					<Icon icon={'collections'} size={iconSize} />{' '}
					<FormattedMessage
						id={`header__navItemCollections`}
						defaultMessage="Collections"
						description={`Header nav link name: Collections`}
					/>
				</li>
				<li>
					<Icon icon={'collections'} size={iconSize} />{' '}
					<FormattedMessage
						id={`header__navItemBlog`}
						defaultMessage="Blog"
						description={`Header nav link name: Blog`}
					/>
				</li>
				<li>
					<Icon icon={'collections'} size={iconSize} />{' '}
					<FormattedMessage
						id={`header__navItemSettings`}
						defaultMessage="Settings"
						description={`Header nav link name: Settings`}
					/>
				</li>
				<li>
					<Icon icon={'collections'} size={iconSize} />{' '}
					<FormattedMessage
						id={`header__navItemMore`}
						defaultMessage="More"
						description={`Header nav link name: More`}
					/>
				</li>
				<li>
					<Button variant={'contained'} color={'primary'}>
						<FormattedMessage
							id={`header__donateButtonLabel`}
							defaultMessage="Donate"
							description={`Header nav donate button label`}
						/>
					</Button>
				</li>
			</ul>
			<div className={styles.user}>
				{/* TODO: Make dynamic; hide when user not logged in */}
				<img src="/img/ivan.png" width={16} height={16} />{' '}
				<FormattedMessage
					id={`header__userNamePlaceholder`}
					defaultMessage="User Name"
					description={`User name placeholder`}
				/>{' '}
				<Icon icon={'chevron-down'} />
			</div>
			<LoadingIndicator />
		</header>
	);
};

export default Header;
