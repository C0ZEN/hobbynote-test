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
	vendors  : {
		options: {
			replacements: [
				{
					pattern    : /(..\/..\/)/gmi,
					replacement: '../../../'
				}
			]
		},
		src    : '<%= paths.app %>/config/tpls/vendors-generated.tpl.html',
		dest   : '<%= paths.app %>/config/tpls/vendors-generated.tpl.html'
	},
	cssPaths : {
		options: {
			replacements: [
				{
					pattern    : /(\.\.\/)+/gmi,
					replacement: '../'
				}
			]
		},
		files  : {
			'<%= currentTarget %>/styles/hobbynote-test-app.css'    : '<%= currentTarget %>/styles/hobbynote-test-app.css',
			'<%= currentTarget %>/styles/hobbynote-test-app.min.css': '<%= currentTarget %>/styles/hobbynote-test-app.min.css'
		}
	},
	changelog: {
		src    : 'CHANGELOG.md',
		dest   : 'CHANGELOG.md',
		options: {
			replacements: [
				{
					pattern    : /(\#\# \[Unreleased\])/g, // eslint-disable-line
					replacement: '## [Unreleased]\n\n## [<%= newVersion %>]'
				}
			]
		}
	}
};