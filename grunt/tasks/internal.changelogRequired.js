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

	const chalk = require('chalk');

	grunt.registerTask('internal.changelogRequired', 'Log about missing changelog update', () = > {
		grunt.log.writeln('\n' + chalk.yellow.bold('WARNING !'));
	grunt.log.writeln('Please consider updating the ' + chalk.cyan('CHANGELOG.md') + ' before creating a new release.');
})
	;
};