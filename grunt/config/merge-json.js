/**
 * Generated header by Geoffrey TESTELIN for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey TESTELIN
 * Date: 27/02/2018
 * Time: 14:18
 * Version: 0.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	merge: {
		files: [
			{
				expand : true,
				flatten: false,
				cwd    : '<%= paths.app %>',
				src    : [
					'**/*.json',
					'!config/targets/*.json',
					'!languages/min/*.json'
				],
				dest   : '.tmp/languages',
				rename(dest, src) {
					const lang = src.match(/[^/]+(?=\/[^/]+\.json$)/gim);
					const ext  = src.match(/[^/]+(.json$)/gim);
					return dest + '/' + lang + '/' + ext;
				}
			},
			{
				expand : true,
				flatten: false,
				cwd    : 'bower_components/cozen-angular-lib/release/languages',
				src    : '*.json',
				dest   : '.tmp/languages',
				rename(dest, src) {
					const lang = src.replace('.min.json', '');
					const ext  = 'cozen-angular-lib.json';
					return dest + '/' + lang + '/' + ext;
				}
			}
		]
	},
	min  : {
		files: {
			'<%= paths.app %>/languages/min/fr.min.json': [
				'.tmp/languages/fr/*.json'
			],
			'<%= paths.app %>/languages/min/en.min.json': [
				'.tmp/languages/en/*.json'
			]
		}
	}
};