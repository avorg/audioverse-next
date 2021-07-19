module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	ignorePatterns: ['fileMock.js'],
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'import',
		'formatjs',
		'testing-library',
		'jest-dom',
		'@mizdra/layout-shift',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'plugin:testing-library/recommended',
		'plugin:jest-dom/recommended',
		'plugin:@next/next/recommended',
	],
	root: true,
	env: {
		browser: true,
		jest: true,
	},
	rules: {
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true,
				ignoreCase: true,
			},
		],
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '(type|of|returns)',
			},
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'formatjs/no-offset': 'error',
		'@mizdra/layout-shift/require-size-attributes': 2,
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
};
