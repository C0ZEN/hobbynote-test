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
module.exports = {
	options: {
		files             : [
			'package.json',
			'bower.json'
		],
		commit            : true,
		commitMessage     : 'Release <%= newVersionTarget %> <%= newVersion %>',
		commitFiles       : [
			'-a'
		],
		createTag         : false,
		tagName           : '<%= newVersion %>',
		tagMessage        : 'Version <%= newVersion %>',
		push              : false,
		pushTo            : 'origin',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
		globalReplace     : false,
		prereleaseName    : false,
		metadata          : '',
		regExp            : false
	}
};