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
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
module.exports = {
	options      : {
		sourceMap: true,
		minified : false,
		compact  : false,
		comments : true,
		presets  : [
			'env'
		]
	},
	release      : {
		options: {
			minified: true,
			compact : true,
			comments: false
		},
		files  : {
			'<%= currentTarget %>/scripts/hobbynote-test-app.min.js': '<%= currentTarget %>/scripts/hobbynote-test-app.js'
		}
	},
	dev          : {
		options: {
			minified: true,
			compact : true,
			comments: false
		},
		files  : {
			'<%= paths.app %>/scripts/hobbynote-test-app.min.js': '<%= paths.app %>/scripts/hobbynote-test-app.js'
		}
	},
	concatScripts: {
		files: {
			'.tmp/release/scripts/hobbynote-test-app.min.js': '.tmp/release/scripts/hobbynote-test-app.min.js'
		}
	},
	concatJs     : {
		files: {
			'<%= paths.app %>/scripts/hobbynote-test-app.js': '<%= paths.app %>/scripts/hobbynote-test-app.js'
		}
	},
	concatRelease: {
		files: {
			'<%= currentTarget %>/scripts/hobbynote-test-app.js': '<%= currentTarget %>/scripts/hobbynote-test-app.js'
		}
	}
};