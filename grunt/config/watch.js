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
	targets   : {
		files: [
			'<%= paths.app %>/config/targets/*.json'
		],
		tasks: [
			'preprocess:dev'
		]
	},
	languages : {
		files: [
			'<%= paths.app %>/languages/**/*.json',
			'<%= paths.app %>/scripts/**/*.json',
			'<%= paths.app %>/views/**/*.json',
			'!<%= paths.app %>/languages/min/*.json'
		],
		tasks: [
			'languages:dev'
		]
	},
	js        : {
		files: [
			'<%= paths.app %>/**/*.js',
			'Gruntfile.js',
			'!<%= paths.app %>/scripts/hobbynote-test-app.js',
			'!<%= paths.app %>/scripts/hobbynote-test-app.min.js',
			'!<%= paths.app %>/scripts/vendors.min.js'
		],
		tasks: [
			'jsMin:dev',
			'notify:buildReady'
		]
	},
	less      : {
		files: [
			'<%= paths.app %>/**/*.less'
		],
		tasks: [
			'less:main',
			'postcss:dev',
			'cssmin:dev',
			'notify:less'
		]
	},
	pug       : {
		files: [
			'<%= paths.app %>/**/*.pug'
		],
		tasks: [
			'pug:html'
		]
	},
	index: {
		files: [
			'<%= paths.app %>/config/tpls/index.tpl.pug'
		],
		tasks: [
			'pug:html',
			'preprocess:dev',
			'htmlmin:dev'
		]
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files  : [
			'<%= paths.app %>/scripts/hobbynote-test-app.min.js',
			'<%= paths.app %>/styles/css/*.css',
			'<%= paths.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg,ico}',
			'<%= paths.app %>/**/*.html'
		]
	}
};