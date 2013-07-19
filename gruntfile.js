module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['styl/ready.styl', 'css/style.css'],
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: ['styl/*.styl'],
        dest: 'styl/ready.styl'
      }
    },
    styl: {
      options: {
        // compress to remove comments
        compress: true
      },
      dist: {
        files: {
          'css/style.temp.css': 'styl/ready.styl'
        }
      }
    },
    // grunt-rework needs a rework! So run a script instead
    shell: {
      doRework: {
        command: 'node css/dorework.js'
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
        tasks: ['clean', 'concat', 'styl', 'shell', 'growl:css'],
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

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-styl');

  grunt.registerTask('default', ['clean', 'concat', 'styl', 'shell', 'uglify', 'growl:done']);
  grunt.registerTask('css', ['clean', 'concat', 'styl', 'shell', 'growl:css']);
  grunt.registerTask('js', ['uglify', 'growl:js']);
};