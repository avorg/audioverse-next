import _ from 'lodash';
import { useIntl } from 'react-intl';

// TODO: use more robust localization strategy
// https://github.com/formatjs/formatjs/issues/77
// https://github.com/tc39/ecma402/issues/47
// https://github.com/younies/proposal-intl-duration-format

const divideWithRunoff = (
	total: number,
	divisors: number[],
	results: number[] = []
): number[] => {
	if (!divisors.length) {
		return [...results, total];
	}

	const result = Math.floor(total / divisors[0]);
	const newTotal = total % divisors[0];

	return divideWithRunoff(newTotal, divisors.slice(1), [...results, result]);
};

export const useFormattedDuration = (seconds: number): string => {
	const intl = useIntl();
	const [h, m] = divideWithRunoff(Math.round(seconds), [3600, 60]);

	if (h) {
		return intl.formatMessage(
			{
				id: 'duration__hoursAndMinutes',
				defaultMessage: '{h}h {m}m',
				description: 'duration hours and minutes',
			},
			{ h, m }
		);
	}

	return intl.formatMessage(
		{
			id: 'duration__minutes',
			defaultMessage: '{m}m',
			description: 'duration minutes',
		},
		{ m }
	);
};

// TODO: support hours
export const useFormattedTime = (seconds: number): string => {
	const intl = useIntl();
	const [, m, s] = divideWithRunoff(Math.round(seconds), [3600, 60]);

	return intl.formatMessage(
		{
			id: 'time__minutesAndSeconds',
			defaultMessage: '{m}:{s}',
			description: 'time minutes and seconds',
		},
		{ m, s: _.padStart(s.toString(), 2, '0') }
	);
};
