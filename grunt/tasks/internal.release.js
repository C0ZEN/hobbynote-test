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
	grunt.registerTask('internal.release', 'Create a new stable version', () => {
		grunt.task.run([
			'npm-command:test',
			'clean:release',
			'clean:devIndex',
			'pug:html',
			'preprocess:' + grunt.config.get('currentTarget'),
			'jsMin:release',
			'less:main',
			'languages:release',
			'postcss:dev',
			'cssmin:dev',
			'vendors',
			'postcss:vendors',
			'cssmin:vendors',
			'copy:vendorsJs',
			'htmlmin:release',
			'copy:release',
			'copy:i18n',
			'copy:medias',
			'copy:fonts',
			'imagemin:release',
			'string-replace:cssPaths',
			'notify:release'
		]);
	});
};