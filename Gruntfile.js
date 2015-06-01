module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
			scripts: {
				files: ['client/app/**/*.jade'],
				tasks: ['jade'],
				options: {
					spawn: false,
				},
			},
		},
		jade: {
		    compile: {
		        options: {
		        	pretty: true,
		            data: {
		                debug: false
		            }
		        },
		        files: [
					{
						expand: true,     // Enable dynamic expansion.
						cwd: 'client/app/',      // Src matches are relative to this path.
						src: ['**/*.jade'], // Actual pattern(s) to match.
						dest: 'client/app/',   // Destination path prefix.
						ext: '.html',   // Dest filepaths will have this extension.
						extDot: 'first'   // Extensions in filenames begin after the first dot
					},
				]
		    }
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask("build", ["jade"]);
};