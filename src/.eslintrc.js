module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/jsx-filename-extension': [0],
		'import/extensions': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 0,
		indent: ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-closing-bracket-location': [0, 'line-aligned'],
		'no-tabs': 0,
	},
};
