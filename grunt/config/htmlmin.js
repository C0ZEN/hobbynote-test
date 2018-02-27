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
	options: {
		minifyCSS                  : true,
		minifyJS                   : true,
		removeComments             : true,
		useShortDoctype            : true,
		sortAttributes             : true,
		sortClassName              : true,
		decodeEntities             : true,
		collapseWhitespace         : true,
		removeAttributeQuotes      : true,
		collapseInlineTagWhitespace: true
	},
	dev    : {
		files: [
			{
				expand: true,
				cwd   : '<%= paths.app %>',
				src   : 'index.html',
				dest  : '<%= paths.app %>'
			}
		]
	},
	release: {
		files: [
			{
				expand: true,
				cwd   : '<%= currentTarget %>',
				src   : 'index.html',
				dest  : '<%= currentTarget %>'
			}
		]
	}
};