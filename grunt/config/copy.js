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
	styles      : {
		expand: true,
		cwd   : '.tmp/release/styles',
		src   : '*.css',
		dest  : '<%= currentTarget %>/styles/css'
	},
	languages   : {
		expand: true,
		cwd   : '<%= paths.app %>/languages/min',
		dest  : '<%= currentTarget %>/languages/',
		src   : '*.json'
	},
	other       : {
		files: [
			{
				expand: true,
				cwd   : '<%= paths.app %>/styles/css/',
				src   : 'reset.min.css',
				dest  : '<%= currentTarget %>/styles/css'
			}
		]
	},
	release     : {
		files: {
			'<%= currentTarget %>/styles/hobbynote-test-app.css'    : '<%= paths.app %>/styles/css/hobbynote-test-app.css',
			'<%= currentTarget %>/styles/hobbynote-test-app.min.css': '<%= paths.app %>/styles/css/hobbynote-test-app.min.css'
		}
	},
	components  : {
		files: [
			{
				expand: true,
				cwd   : 'bower_components',
				src   : [
					'**/*.js',
					'**/*.css',
					'**/*.less'
				],
				dest  : '<%= currentTarget %>/bower_components'
			}
		]
	},
	i18n        : {
		files: {
			'<%= currentTarget %>/languages/i18n/fr.js': 'bower_components/angular-i18n/angular-locale_fr.js'
		}
	},
	medias      : {
		files: [
			{
				expand: true,
				cwd   : '<%= paths.app %>/medias',
				src   : '**',
				dest  : '<%= currentTarget %>/medias'
			}
		]
	},
	vendors     : {
		src : '<%= paths.app %>/config/tpls/vendors.tpl.html',
		dest: '<%= paths.app %>/config/tpls/vendors-generated.tpl.html'
	},
	vendorsJsDev: {
		src : '.tmp/vendors/vendors.js',
		dest: '<%= paths.app %>/scripts/vendors.min.js'
	},
	vendorsJs   : {
		src : '.tmp/vendors/vendors.js',
		dest: '<%= currentTarget %>/scripts/vendors.min.js'
	},
	fonts       : {
		files: [
			{
				expand: true,
				cwd   : '<%= paths.app %>/fonts',
				src   : '**',
				dest  : '<%= currentTarget %>/fonts'
			}
		]
	}
};