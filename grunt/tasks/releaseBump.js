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
/* eslint no-magic-numbers:"off" */
module.exports = function (grunt) {
	grunt.registerTask('releaseBump', 'Create a new version for git with auto tagging', () = > {
		const radix = 10;

	// Get the old version from package.json
	const oldVersion      = grunt.file.readJSON('package.json').version;
	const splitOldVersion = oldVersion.split('.');
	grunt.config.set('oldVersion', oldVersion);

	// Patch
	let newPathVersion = splitOldVersion;
	newPathVersion[2]  = parseInt(newPathVersion[2], radix) + 1;
	newPathVersion     = newPathVersion.join('.');
	grunt.config.set('newPatchVersion', newPathVersion);

	// Minor
	let newMinorVersion = splitOldVersion;
	newMinorVersion[1]  = parseInt(newMinorVersion[1], radix) + 1;
	newMinorVersion[2]  = 0;
	newMinorVersion     = newMinorVersion.join('.');
	grunt.config.set('newMinorVersion', newMinorVersion);

	// Major
	let newMajorVersion = splitOldVersion;
	newMajorVersion[0]  = parseInt(newMajorVersion[0], radix) + 1;
	newMajorVersion[1]  = 0;
	newMajorVersion[2]  = 0;
	newMajorVersion     = newMajorVersion.join('.');
	grunt.config.set('newMajorVersion', newMajorVersion);

	// Execute the grunt tasks
	grunt.task.run([
		'npm-command:test',
		'prompt:isChangelogUpdated',
		'if:isChangelogUpdated'
	]);
})
	;
};