// Localization:
// 	_strings: dictionary
// 	_lang: string
// 	_missing: dictionary
//
// 	construct:
// 		self._strings = api.getStrings()
//
// 	n(key, count, singular_default, plural_default):
// 		singular_key = f'{key}_singular'
// 		plural_key = f'{key}_plural'
// 		_key = (count == 1) ? singular_key : plural_key
// 		default = (count == 1) ? singular_default : plural_default
// 		string = self.t(_key, default)
// 		return string.format(count)
//
// 	t(key, default):
// 		if key not in self._strings[self._lang]:
// 			self._reportMissing(key, default)
// 			return default
// 		return self._strings[self._lang][key]
//
// 	_reportMissing(key, default)
// 		self._missing[self._lang][key] = default
//
// 	destruct:
// 		api.reportMissing(self._missing)

import { getStrings } from '@lib/api';
import _ from 'lodash';

export const t = async (key: string, fallback: string) => {
	const strings = await getStrings();

	return _.get(strings, ['en', key], fallback);
};

// TODO: bake out translation json blob to static files in
