module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        mangle: {
          except: ['hijra']
        }
      },
      my_target: {
        files: {
          'dist/hijra.min.js': ['src/index.js']
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};