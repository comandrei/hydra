module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'js/*.js'],
	    options: {
		globals: {
		    jQuery: true,
		    console: true,
		    module: true
		}
	    }
        }
    });
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', []);
};
