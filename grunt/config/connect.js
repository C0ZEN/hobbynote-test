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
	options   : {
		port      : 9889,
		hostname  : 'localhost',
		livereload: 35789
	},
	livereload: {
		options: {
			open: true,
			middleware(connect) {
				return [
					connect.static('.tmp'),
					connect().use(
						'/bower_components',
						connect.static('./bower_components')
					),
					connect().use(
						'/app/styles',
						connect.static('./app/styles')
					),
					connect.static('app')
				];
			}
		}
	},
	test      : {
		options: {
			port: 9001,
			middleware(connect) {
				return [
					connect.static('.tmp'),
					connect.static('test'),
					connect().use(
						'/bower_components',
						connect.static('./bower_components')
					),
					connect.static('app')
				];
			}
		}
	}
};