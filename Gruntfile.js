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
      "composer:install:no-dev:optimize-autoloader",
        "shell:npmInstall",
        "hub"
      ],
      uat: [
        "composer:install:no-dev:optimize-autoloader",
        "shell:npmInstall",
        "hub"
      ],
      staging: [
        "composer:install",
        "shell:npmInstall",
        "hub"
      ],
      development: [
        "composer:install",
        "shell:npmInstall",
        "hub"
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