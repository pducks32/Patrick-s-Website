module.exports = function(grunt) {
    
	
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}, sass/modules/*.{sass, scss}'],
                tasks: ['compass:dev']
            },
            livereload: {
                files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
		compass: {
		      dev: {
		        options: {
		          config: 'config.rb',
				  quiet: true,
		          force: true,
		        }
		      }
		    }
    });
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};