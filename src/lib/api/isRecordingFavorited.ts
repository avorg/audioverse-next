import { fetchApi } from '@lib/api/fetchApi';

const query = `
query isFavorited($id: ID!) {
	sermon(id: $id) {
		viewerHasFavorited
	}
}
`;

export async function isRecordingFavorited(
	id: number | string
): Promise<boolean> {
	const variables = { id },
		data = await fetchApi(query, { variables });

	return !!data?.sermon?.viewerHasFavorited;
}
