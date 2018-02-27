/**
 * Generated header by Geoffrey TESTELIN for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey TESTELIN
 * Date: 27/02/2018
 * Time: 14:18
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerTask('serve', 'Compile then start a connect web server', () = > {
		grunt.task.run([
		'clean:server',
		'pug:html',
		'vendors',
		'postcss:vendorsDev',
		'cssmin:vendorsDev',
		'copy:vendorsJsDev',
		'preprocess:dev',
		'preprocess:devManifest',
		'preprocess:devStructuredData',
		'htmlmin:dev',
		'jsMin:dev',
		'less:main',
		'languages:dev',
		'concurrent:server',
		'postcss:dev',
		'cssmin:dev',
		'connect:livereload',
		'notify:serve',
		'watch'
	]);
})
	;
};