'use strict';

var gulp = require('gulp');
var nodemon = require('nodemon');
var chalk = require('chalk');
var info = chalk.blue;
var warn = chalk.yellow;

gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js',
        ext: 'scss hbs js',
        verbose: true,
        ignore: [
          ".gitignore",
          ".eslintrc",
          "README.md",
          ".git/*",
          ".idea/*",
          ".sass-cache/*",
          "./src/node_modules",
          "newrelic_agent.log",
          "process.js",
          "client/*"
        ],
        watch: [
            'server.js',
            './server',
            './tasks'
         ]
    })
        .on('log', function(log) {
            console.log('[gulp]', '[nodemon]', info(log.message));
        })
        .on('restart', function(files) {
            var message = files ? 'changes to: ' + files : 'manual';
            console.log(warn(message, 'restarting'));
        });
});