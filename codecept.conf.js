require('ts-node/register');

exports.config = {
	tests: './*/*_test.ts',
	output: './output',
	helpers: {
		REST: {
			endpoint: 'https://swapi.dev',
			onRequest: () => {		
			}
		},
	},
	include: {
		I: './steps_file.ts'
	},
	bootstrap: null,
	mocha: {},
	name: 'desafioeasynvest',
	plugins: {
		allure: {
			outputDir: 'allure-results',
			enabled: true
		}
	}
};
