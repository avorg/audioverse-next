import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';
import { resetAllWhenMocks } from 'jest-when';

jest.mock('@lib/api/fetchApi');
jest.mock('fs');
jest.mock('video.js');

beforeEach(() => {
	jest.resetAllMocks();
	resetAllWhenMocks();
});
