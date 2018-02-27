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
	release: {
		options: {
			optimizationLevel: 5,
			progressive      : true,
			interlaced       : true
		},
		files  : [
			{
				expand: true,
				cwd   : '<%= paths.app %>/images',
				src   : '**/*.{png,jpg,jpeg,gif,svg,ico}',
				dest  : '<%= currentTarget %>/images'
			}
		]
	}
};