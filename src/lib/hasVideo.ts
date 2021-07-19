export default function hasVideo(recording: Record<string, any>): boolean {
	const { videoStreams = [], videoFiles = [] } = recording;

	return videoStreams.length > 0 || videoFiles.length > 0;
}
