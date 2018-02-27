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
/* eslint key-spacing:"off" */
module.exports = {
	html: {
		options: {
			pretty: true
		},
		files  : [
			{
				cwd   : '<%= paths.app %>',
				src   : '**/*.pug',
				dest  : '<%= paths.app %>',
				expand: true,
				rename: ($dest, $src) => {
					return ($dest + '/' + $src
					).replace('.pug', '.html');
				}
			}
		]
	}
};