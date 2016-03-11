module.exports = function(grunt){
    grunt.registerTask('watch');
    grunt.registerTask('sass');
    grunt.registerTask('concat');
    grunt.registerTask('autoprefixer');
    grunt.registerTask('cssdev', ['sass:dev', 'autoprefixer']);
    grunt.registerTask('jsdev', ['concat']);
    grunt.registerTask('cssdist', ['sass:dist', 'autoprefixer']);
    grunt.registerTask('jsdist', ['concat:devjs', 'uglify']);
    grunt.registerTask('dev', ['cssdev', 'jsdev']);
    grunt.registerTask('dist', ['cssdist' ,'jsdist']);
    grunt.registerTask('default', ['dev','watch' ]);

    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'nested'
                },
                files: [{ // C'est ici que l'on définit le dossier que l'on souhaite importer
                    "expand": true,
                    "cwd": "sass",
                    "src": ["*.scss"],
                    "dest": "static/css",
                    "ext": ".css"
                }]
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{ // C'est ici que l'on définit le dossier que l'on souhaite importer
                    "expand": true,
                    "cwd": "sass",
                    "src": ["*.scss"],
                    "dest": "static/css",
                    "ext": ".css"
                }]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            devjs: {
                src: ['bower_components/jquery/dist/jquery.min.js','bower_components/wow/dist/wow.min.js','bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js','static/js/Modernizr.js','static/js/ajax.js','static/js/Ancre.js','static/js/AnimMain.js','static/js/MainScroll.js','static/js/MainTabMob.js','static/js/SlideAnim.js','static/js/SlideText.js','static/js/Pourcent.js','static/js/Formulaire.js'],
                dest: 'static/js/JavaScript-Dev.js'
            }
        },
       watch: {
            styles: {
                files: ['sass/*.scss'],
                tasks: ['cssdev']
            },
            scripts: {
                files: ['static/js*//*.js'],
                tasks: ['jsdev']
            }
        },
        autoprefixer: {
            options: {

            },
            your_target: {
                browsers: ['last 2 version', 'ie 9']
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            dist: {
                files: {
                    'static/js/JavaScript-Dev.js': ['static/js/JavaScript-Dev.js']
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
};
