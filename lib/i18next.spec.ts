import getI18next from './i18next';
import NextI18Next from 'next-i18next';

jest.mock('next-i18next');

describe('i18next', () => {
	it('includes all languages', () => {
		getI18next();

		expect(NextI18Next).toBeCalledWith(
			expect.objectContaining({
				otherLanguages: expect.arrayContaining(['es']),
			})
		);
	});
});
