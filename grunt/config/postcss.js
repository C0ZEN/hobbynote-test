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
module.exports = function (grunt) {
	return {
		dev       : {
			options: {
				map       : true,
				processors: [
					require('pixrem')(),
					require('autoprefixer')({
						browsers: grunt.file.read('package.json').browserslist,
						cascade : true,
						add     : true,
						remove  : false,
						supports: true,
						flexbox : true,
						grid    : true
					})
				]
			},
			files  : [
				{
					expand: true,
					cwd   : '<%= paths.app %>/styles/css',
					src   : '*.css',
					dest  : '<%= paths.app %>/styles/css'
				}
			]
		},
		vendorsDev: {
			options: '<%= postcss.dev.options %>',
			files  : {
				'<%= paths.app %>/styles/css/vendors.min.css': '.tmp/vendors/vendors.css'
			}
		},
		vendors   : {
			options: '<%= postcss.dev.options %>',
			files  : {
				'<%= currentTarget %>/styles/vendors.min.css': '.tmp/vendors/vendors.css'
			}
		}
	};
};