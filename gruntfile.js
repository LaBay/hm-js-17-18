module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/scriptmain.min.js'
      }
    },
    
    uglify: {
     
      dist: {
        src: ['js/dist/scriptmain.min.js'],
        dest: 'js/dist/scriptmain.min.js'
      }
    },


  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};