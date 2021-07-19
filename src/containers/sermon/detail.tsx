import React from 'react';

import withFailStates from '@components/HOCs/withFailStates';
import { Recording } from '@components/organisms/recording';
import { GetSermonDetailDataQuery } from '@lib/generated/graphql';

export type Sermon = NonNullable<GetSermonDetailDataQuery['sermon']>;

export interface SermonDetailProps {
	sermon: Sermon | null;
	title: string | null;
}

function SermonDetail({ sermon }: SermonDetailProps) {
	return sermon ? <Recording recording={sermon} /> : null;
}

export default withFailStates(SermonDetail, (props) => !props.sermon);
