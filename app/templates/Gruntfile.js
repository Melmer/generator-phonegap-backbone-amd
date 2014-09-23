// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// configurable paths
		yeoman: {
			app: 'app',
			dist: 'dist',

            phonegap: 'phonegap',

            ios: 'ios',
            android: 'android',

            icons: '<%%= yeoman.app %>/icons/',
            icon_ios: '<%%= yeoman.icons %>/<%%= yeoman.ios %>',
            icon_android: '<%%= yeoman.icons %>/<%%= yeoman.android %>'
		},

        // icon config
        launch: <%=launchImages%>,
        icons: {

            android: {
                ldpi: '<%%= yeoman.android %>/drawable-ldpi/ic_launcher.png',
                mdpi: '<%%= yeoman.android %>/drawable-mdpi/ic_launcher.png',
                hdpi: '<%%= yeoman.android %>/drawable-hdpi/ic_launcher.png',
                xhdpi: '<%%= yeoman.android %>/drawable-xhdpi/ic_launcher.png',
                xxhdpi: '<%%= yeoman.android %>/drawable-xxhdpi/ic_launcher.png'
            },

            ios: {
                icon29: '<%%= yeoman.ios %>/icon-small.png',
                icon29x2: '<%%= yeoman.ios %>/icon-small@2x.png',
                icon40: '<%%= yeoman.ios %>/icon-40.png',
                icon40x2: '<%%= yeoman.ios %>/icon-40@2x.png',
                icon57: '<%%= yeoman.ios %>/icon-57.png',
                icon57x2: '<%%= yeoman.ios %>/icon-57@2x.png',
                icon60x2: '<%%= yeoman.ios %>/icon-60@2x.png',
                icon72: '<%%= yeoman.ios %>/icon-72.png',
                icon72x2: '<%%= yeoman.ios %>/icon-72@2x.png',
                icon76: '<%%= yeoman.ios %>/icon-76.png',
                icon76x2: '<%%= yeoman.ios %>/icon-76@2x.png'
            }

        },

		phonegap: {
			config: {
				root: 'dist',
				config: 'config.xml',
				cordova: '.cordova',
				path: 'phonegap',
				plugins: [],
				platforms: <%=buildForPlatforms%>,
				verbose: false,

                // Set an app icon at various sizes (optional)
                icons: {
                    android: {
                        ldpi: '<%%= yeoman.icons_android %>/<%%= icons.android.ldpi %>',
                        mdpi: '<%%= yeoman.icons_android %>/<%%= icons.android.mdpi %>',
                        hdpi: '<%%= yeoman.icons_android %>/<%%= icons.android.hdpi %>',
                        xhdpi: '<%%= yeoman.icons_android %>/<%%= icons.android.xhdpi %>',
                        xxhdpi: '<%%= yeoman.icons_android %>/<%%= icons.android.xxhdpi %>'
                    },
                    ios: {
                        icon29: '<%%= yeoman.icons %>/<%%= icons.ios.icon29 %>',
                        icon29x2: '<%%= yeoman.icons %>/<%%= icons.ios.icon29x2 %>',
                        icon40: '<%%= yeoman.icons %>/<%%= icons.ios.icon40 %>',
                        icon40x2: '<%%= yeoman.icons %>/<%%= icons.ios.icon40x2 %>',
                        icon57: '<%%= yeoman.icons %>/<%%= icons.ios.icon57 %>',
                        icon57x2: '<%%= yeoman.icons %>/<%%= icons.ios.icon57x2 %>',
                        icon60x2: '<%%= yeoman.icons %>/<%%= icons.ios.icon60x2 %>',
                        icon72: '<%%= yeoman.icons %>/<%%= icons.ios.icon72 %>',
                        icon72x2: '<%%= yeoman.icons %>/<%%= icons.ios.icon72x2 %>',
                        icon76: '<%%= yeoman.icons %>/<%%= icons.ios.icon76 %>',
                        icon76x2: '<%%= yeoman.icons %>/<%%= icons.ios.icon76x2 %>'
                    }
                },

                screens: {
                    android: {
                        ldpi: '<%%= yeoman.app %>/platforms/android/res/drawable-port-ldpi/screen.png',
                        mdpi: '<%%= yeoman.app %>/platforms/android/res/drawable-port-mdpi/screen.png',
                        hdpi: '<%%= yeoman.app %>/platforms/android/res/drawable-port-hdpi/screen.png',
                        xhdpi: '<%%= yeoman.app %>/platforms/android/res/drawable-port-xhdpi/screen.png'
                    },
                    ios: {
                        // iphone portrait
                        iphonePortraitx2: '<%%= yeoman.app %>/platforms/ios/Test/Resources/splash/Default@2x~iphone.png',
                        iphone568hx2: '<%%= yeoman.app %>/platforms/ios/Test/Resources/splash/Default-568h@2x~iphone.png'
                    }
                }
			}
		},

        phonegapsplash: {
            launch: {
              // Source file: the PNG.
              src: "<%%= yeoman.app %>/svg/base-launch.png",
              // Destination directory where are stored all splashscreens
              dest: "<%%= yeoman.app %>/",
              // Optionnal, it produces splashscreen and layout for all phonegap targets if not specified
              options: {
                // A list of layouts, it produces landscape and portrait if not specified
                layouts: <%=buildForLayouts%>,
                // A  list of phone targets, it produces android, bada, blackberry, ios, webos, windows-phone if not specified
                profiles: <%=buildForPlatforms%>
              }
            },
        },    

        vector2raster: {   // Task
            icons: {  // Target
                files:[
                    {
                        src: "<%%= yeoman.app %>/svg/base-icon.svg",
                        dest: "<%%= yeoman.app %>/icons/"
                    }
                ],
                options:{   // Options
                    dest:[

                        //android icons
                        {
                            name: "<%%= icons.android.ldpi %>",
                            size: { width: 36, height: 36 }
                        },
                        {
                            name: "<%%= icons.android.mdpi %>",
                            size: { width: 48, height: 48 }
                        },
                        {
                            name: "<%%= icons.android.hdpi %>",
                            size: { width: 72, height: 72 }
                        },
                        {
                            name: "<%%= icons.android.xhdpi %>",
                            size: { width: 96, height: 96 }
                        },
                        {
                            name: "<%%= icons.android.xxhdpi %>",
                            size: { width: 144, height: 144 }
                        },

                        //iOS icons
                        {
                            name: "<%%= icons.ios.icon29 %>",
                            size: { width: 29, height: 29 }
                        },
                        {
                            name: "<%%= icons.ios.icon29x2 %>",
                            size: { width: 58, height: 58 }
                        },

                        {
                            name: "<%%= icons.ios.icon40 %>",
                            size: { width: 40, height: 40 }
                        },
                        {
                            name: "<%%= icons.ios.icon40x2 %>",
                            size: { width: 80, height: 80 }
                        },

                        {
                            name: "<%%= icons.ios.icon57 %>",
                            size: { width: 57, height: 57 }
                        },
                        {
                            name: "<%%= icons.ios.icon57x2 %>",
                            size: { width: 114, height: 114 }
                        },

                        {
                            name: "<%%= icons.ios.icon60x2 %>",
                            size: { width: 120, height: 120 }
                        },
                        {
                            name: "<%%= icons.ios.icon72 %>",
                                size: { width: 72, height: 72 }
                        },
                        {
                            name: "<%%= icons.ios.icon72x2 %>",
                            size: { width: 144, height: 144 }
                        },
                        {
                            name: "<%%= icons.ios.icon76 %>",
                            size: { width: 76, height: 76 }
                        },
                        {
                            name: "<%%= icons.ios.icon76x2 %>",
                            size: { width: 152, height: 152 }
                        },
                        /* extra itunes art work*/
                        {
                            name: "<%%= yeoman.ios %>/iTunesArtwork.png",
                            size: { width: 512, height: 512 }
                        },
                        {
                            name: "<%%= yeoman.ios %>/iTunesArtwork@2x.png",
                            size: { width: 1024, height: 1024 }
                        }
                    ]
                }
            }
        },


        watch: {
            compass: {
                files: ['<%%= yeoman.app %>/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= yeoman.app %>/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%%= yeoman.dist %>'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%%= yeoman.dist %>/*',
                        '!<%%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
		karma: {
			options: {
				files: ['test/**/*.js']
			},
			continuous: {
			},
			dev: {
			}
		},<% if (testFramework === 'mocha') { %>
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%%= connect.test.options.hostname %>:<%%= connect.test.options.port %>/index.html']
                }
            }
        },<% } else if (testFramework === 'jasmine') { %>
        jasmine: {
            all: {
                options: {
                    specs: 'test/spec/{,*/}*.js'
                }
            }
        },<% } %>
        compass: {
            dist: {
                options: {
                    sassDir: '<%%= yeoman.app %>/sass',
                    cssDir: '<%%= yeoman.app %>/styles',
                    imagesDir: '<%%= yeoman.app %>/images'
                }
            },
            server: {
                options: {
                    sassDir: '<%%= yeoman.app %>/sass',
                    cssDir: '<%%= yeoman.app %>/styles',
                    imagesDir: '<%%= yeoman.app %>/images'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        'bower-install': {
            app: {
                html: '<%%= yeoman.app %>/index.html',
                ignorePath: '<%%= yeoman.app %>/'
            }
        },
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/

         requirejs: {
            compile: {
                options: {
                    name: 'main',
                    baseUrl: '<%%= yeoman.app %>/scripts',
                    mainConfigFile: '<%%= yeoman.app %>/scripts/main.js',
                    out: '<%%= yeoman.dist %>/scripts/main.js'
                }
            }
        },

        rev: {
            dist: {
                files: {
                    src: [
                        '<%%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%%= yeoman.dist %>'
            },
            html: '<%%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%%= yeoman.dist %>']
            },
            html: ['<%%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            //dist: {
            //     files: {
            //        '<%%= yeoman.dist %>/styles/main.css': [
            //             '.tmp/styles/{,*/}*.css',
            //             '<%%= yeoman.app %>/styles/{,*/}*.css'
            //        ]
            //     }
            //}
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%%= yeoman.app %>',
                    dest: '<%%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
						'res/**',
                        'styles/fonts/{,*/}*.*',
                        'launch/**',
                        'icons/**',
                        'fonts/{,*/}*.*',
                        'bower_components/requirejs/require.js'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',<% if (testFramework === 'mocha') { %>
        'mocha'<% } else if (testFramework === 'jasmine') { %>
        'jasmine'<% } %>
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'requirejs',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin'
    ]);

	grunt.registerTask('platform-build', [
        'vector2raster',
        'phonegapsplash',
		'default',
		'phonegap:build'
	]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};