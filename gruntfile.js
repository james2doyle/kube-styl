var rework = require('rework'),
vars = require('rework-vars'),
math = require('rework-math'),
shade = require('rework-shade');
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    styl: {
      options: {
        // compress to remove comments
        compress: false,
        configure: function (styl) {
          styl.use(vars());
          styl.use(math());
          styl.use(shade());
        }
      },
      dist: {
        files: {
          'css/style.css': 'styl/**/*.styl'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/style.min.css': ['css/style.css', '!css/style.min.css']
        }
      }
    },
    uglify: {
      main: {
        files: {
          'js/scripts.min.js': ['js/kube.buttons.js', 'js/kube.tabs.js']
        }
      }
    },
    growl: {
      css: {
        title: 'REWORK BUILT',
        message: 'CSS files have been compiled.'
      },
      js: {
        title: 'JAVASCRIPT BUILT',
        message: 'JS files have been compiled.'
      },
      done: {
        title: 'PROJECT BUILT',
        message: 'all tasks have been completed.'
      }
    },
    watch: {
      styles: {
        files: ['styl/*.styl'],
        tasks: ['styl', 'growl:css'],
        options: {
          nospawn: true
        },
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify', 'growl:js'],
        options: {
          nospawn: true
        },
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-styl');

  grunt.registerTask('default', ['styl', 'cssmin', 'uglify', 'growl:done']);
  grunt.registerTask('css', ['styl', 'cssmin', 'growl:css']);
  grunt.registerTask('js', ['uglify', 'growl:js']);
};