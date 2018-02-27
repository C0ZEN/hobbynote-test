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
	scripts: {
		src : [
			'.tmp/release/scripts/app.min.js',
			'.tmp/release/scripts/main.min.js'
		],
		dest: '.tmp/release/scripts/hobbynote-test-app.min.js'
	},
	js     : {
		src : [
			'<%= paths.app %>/**/*.js',
			'!<%= paths.app %>/**/*.tpl.js',
			'!<%= paths.app %>/scripts/hobbynote-test-app.js',
			'!<%= paths.app %>/scripts/hobbynote-test-app.min.js',
			'!<%= paths.app %>/scripts/vendors.min.js'
		],
		dest: '<%= paths.app %>/scripts/hobbynote-test-app.js'
	},
	release: {
		src : [
			'<%= paths.app %>/**/*.js',
			'.tmp/release/template-cache.js',
			'!<%= paths.app %>/**/*.tpl.js',
			'!<%= paths.app %>/scripts/hobbynote-test-app.js',
			'!<%= paths.app %>/scripts/hobbynote-test-app.min.js',
			'!<%= paths.app %>/scripts/vendors.min.js'
		],
		dest: '<%= currentTarget %>/scripts/hobbynote-test-app.js'
	}
};