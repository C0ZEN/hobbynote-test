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
	grunt.registerTask('vendors', 'Process the vendors', () => {
		grunt.task.run([
			'wiredep',
			'copy:vendors',
			'string-replace:vendors',
			'useminPrepare',
			'usemin',
			'concat:generated'
		]);
	});
};