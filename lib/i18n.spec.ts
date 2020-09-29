import { t } from './i18n';
import * as api from '@lib/api';
jest.mock('@lib/api');

describe('i18n', () => {
	it('returns fallback', async () => {
		const result = await t('key', 'default');

		expect(result).toBe('default');
	});

	it('returns translated value', async () => {
		jest.spyOn(api, 'getStrings').mockResolvedValue({
			en: {
				key: 'translated_value',
			},
		});

		const result = await t('key', 'default');

		expect(result).toBe('translated_value');
	});
});
