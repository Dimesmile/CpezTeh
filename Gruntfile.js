module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			with_banner: {
				options: {
					banner: '/* My minified css */'
				},

				files: {
					'www/style.min.css' : ['src/css/style.css', 'bower_components/normalize-css/normalize.css']
				}
			}
		},

		htmlmin: {
			dist: {                        
      			options: {                                
        			removeComments: true,
        			collapseWhitespace: true
      			},
      			files: {                     
        			'www/index.min.html': 'src/html/index.html', 
        			'www/catalog-main.min.html': 'src/html/catalog-main.html',
        			'www/catalog2.min.html': 'src/html/catalog2.html',
        			'www/contacts.min.html': 'src/html/contacts.html',
        			'www/portfolio.min.html': 'src/html/portfolio.html'
      			}
			}
		},

		watch: {
			css: {
				files: ['src/css/*.css'],
				tasks: ['cssmin']
			},
			html: {
				files: ['src/html/*.html'],
				tasks: ['htmlmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['cssmin', 'htmlmin', 'watch']);
};