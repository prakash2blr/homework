module.exports = function(grunt) {

    var buildFiles = ['gruntfile.js'];

    var jsFiles = ['app/**/*.js','index.js','app/*.js'];

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Project configuration.
    grunt.initConfig({
            pkg: '<json:package.json>',
            jshint: {
                all: [buildFiles, jsFiles],
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: false, // suppress outer closure warning
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    boss: true,
                    eqnull: true,
                    node: true,
    		        esversion:6,
                    browser: true,
                    jquery: true,
                    smarttabs: true,
                    strict: false,
                    devel: true,
                    scripturl: true,
                    globals: {
                        ga: true,
                        exports: true,
                        Globalize: true,
                        d3: true,
                        Base64: true,
                        nicEditors: true,
                        nicEditor: true,
                        Galleria: true,
                        docCookies: true,
                        Handlebars: true,
                        charcoal: true,
                        _:true,
                        moment:true,
                        Chart:true,
                        io:true,
                        Notification:true
                    }
                }
            },
           concat:{
    		js:{
    		  src:[jsFiles],
                      dest:"public/dist/production.js"
    		}
    	},
           uglify:{
    		compress:{
    			options:{
    			  sourcemap:true,
    			},
    			files:{
    			  'public/dist/production.min.js':['public/dist/production.js']
    			}
    		}
    	},
        clean: {
                dist: ['public/dist/*.js']
            }
    });

    grunt.registerTask('default', ['clean','jshint','concat']);

    console.log('\nGrunt executed at: ' + new Date() + '.\n');
};

