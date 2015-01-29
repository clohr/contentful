'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
    return gulp.src([
            'gulpfile.js',
            'tasks/**/*.js',
            'client/src/**/*.js',
            '!test/coverage/**/*',
            'test/**/*.js',
            'node_modules/fp/**/*.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format('stylish', process.stdout));
});