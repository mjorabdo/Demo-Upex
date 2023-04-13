module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'only-warn'],
	rules: {
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'linebreak-style': 0,
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
		'object-curly-spacing': ['warn', 'always'],
	},
	globals: {
		cy: true,
		it: true,
		describe: true,
		context: true,
		beforeEach: true,
		before: true,
		after: true,
		afterEach: true,
		expect: true,
		Cypress: true,
	},
};
