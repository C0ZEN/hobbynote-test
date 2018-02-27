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
	dev       : {
		options: {
			keepSpecialComments: 0,
			sourceMap          : true
		},
		files  : [
			{
				'<%= paths.app %>/styles/css/hobbynote-test-app.min.css': '<%= paths.app %>/styles/css/hobbynote-test-app.css',
				'<%= paths.app %>/styles/css/init-loader.min.css'       : '<%= paths.app %>/styles/css/init-loader.css'
			}
		]
	},
	vendorsDev: {
		options: {
			keepSpecialComments: 0,
			sourceMap          : false
		},
		files  : [
			{
				'<%= paths.app %>/styles/css/vendors.min.css': '<%= paths.app %>/styles/css/vendors.min.css'
			}
		]
	},
	vendors   : {
		options: {
			keepSpecialComments: 0,
			sourceMap          : false
		},
		files  : [
			{
				'<%= currentTarget %>/styles/vendors.min.css': '<%= currentTarget %>/styles/vendors.min.css'
			}
		]
	}
};