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
	main: {
		options: {
			compress : false,
			sourceMap: true
		},
		files  : {
			'<%= paths.app %>/styles/css/hobbynote-test-app.css': '<%= paths.app %>/styles/less/hobbynote-test-app.less'
		}
	},
	tmp : {
		options: {
			compress : false,
			sourceMap: true
		},
		files  : {
			'.tmp/release/styles/hobbynote-test-app.css': '<%= paths.app %>/styles/less/hobbynote-test-app.less'
		}
	}
};