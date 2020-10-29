import React from 'react';

export interface SermonListXmlProps {
	sermons: Sermon[];
}

// USE https://github.com/jpmonette/feed

export default function SermonListXml({
	sermons,
}: SermonListXmlProps): JSX.Element {
	console.log(sermons);

	return <div>hello world</div>;
}
