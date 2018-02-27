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
		options: {
			inline: true
		},
		dev    : {
			options: {
				context: {
					config    : grunt.file.read('app/config/targets/config.dev.json'),
					configJson: grunt.file.readJSON('app/config/targets/config.dev.json'),
					target    : 'dev'
				}
			},
			files  : {
				'<%= paths.app %>/config/target.config.js': '<%= paths.app %>/config/tpls/target.config.tpl.js',
				'<%= paths.app %>/index.html'             : '<%= paths.app %>/config/tpls/index.tpl.html'
			}
		},
		test   : {
			options: {
				context: {
					config    : grunt.file.read('app/config/targets/config.test.json'),
					configJson: grunt.file.readJSON('app/config/targets/config.test.json'),
					target    : 'test'
				}
			},
			files  : {
				'<%= paths.app %>/config/target.config.js': '<%= paths.app %>/config/tpls/target.config.tpl.js',
				'<%= currentTarget %>/index.html'         : '<%= paths.app %>/config/tpls/index.tpl.html'
			}
		},
		preprod: {
			options: {
				context: {
					config    : grunt.file.read('app/config/targets/config.preprod.json'),
					configJson: grunt.file.readJSON('app/config/targets/config.preprod.json'),
					target    : 'preprod'
				}
			},
			files  : {
				'<%= paths.app %>/config/target.config.js': '<%= paths.app %>/config/tpls/target.config.tpl.js',
				'<%= currentTarget %>/index.html'         : '<%= paths.app %>/config/tpls/index.tpl.html'
			}
		},
		prod   : {
			options: {
				context: {
					config    : grunt.file.read('app/config/targets/config.prod.json'),
					configJson: grunt.file.readJSON('app/config/targets/config.prod.json'),
					target    : 'prod'
				}
			},
			files  : {
				'<%= paths.app %>/config/target.config.js': '<%= paths.app %>/config/tpls/target.config.tpl.js',
				'<%= currentTarget %>/index.html'         : '<%= paths.app %>/config/tpls/index.tpl.html'
			}
		},
		manifest   : {
            options: {
                context: {
                    config: grunt.file.readJSON('package.json')
                }
            },
            src    : '<%= paths.app %>/config/tpls/manifest.tpl.json',
            dest   : '<%= currentTarget %>/manifest.json'
        },
        devManifest: {
            options: {
                context: {
                    config: grunt.file.readJSON('package.json')
                }
            },
            src    : '<%= paths.app %>/config/tpls/manifest.tpl.json',
            dest   : '<%= paths.app %>/manifest.json'
        },
        structuredData   : {
            options: {
                context: {
                    config: grunt.file.readJSON('app/config/targets/config.dev.json')
                }
            },
            src    : '<%= paths.app %>/config/tpls/structured-data.tpl.json',
            dest   : '<%= currentTarget %>/structured-data.json'
        },
        devStructuredData: {
            options: {
                context: {
                    config: grunt.file.readJSON('app/config/targets/config.dev.json')
                }
            },
            src    : '<%= paths.app %>/config/tpls/structured-data.tpl.json',
            dest   : '<%= paths.app %>/structured-data.json'
        }
	};
};