/*
 * Panthor
 * https://github.com/voceconnect/panthor
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    hub: {
      all: {
        src: ['wp-content/themes/panthor/Gruntfile.js'],
        tasks: ['build']
      }
    },
    shell: {
      npmInstall: {
        options: {
          stdout: true
        },
        command: "cd wp-content/themes/panthor && npm install"
      }
    },
    build: {
      options: {
        default: "development"
      },
      production: [
        "shell:npmInstall",
        "hub",
        "composer:install:no-dev:optimize-autoloader"
      ],
      uat: [
        "shell:npmInstall",
        "hub",
        "composer:install:no-dev:optimize-autoloader"
      ],
      staging: [
        "shell:npmInstall",
        "hub",
        "composer:install"
      ],
      development: [
        "shell:npmInstall",
        "hub",
        "composer:install"
      ]
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks( 'grunt-peon-build' );
  grunt.loadNpmTasks( 'grunt-hub' );
  grunt.loadNpmTasks( 'grunt-shell' );
  grunt.loadNpmTasks( 'grunt-composer' );

  // Set the default task as the development build
  grunt.registerTask( 'default', ['build:development'] );
};