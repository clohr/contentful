'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var evt = browserSync.emitter;
var handleErrors = require('../../tasks/handleErrors');

gulp.task('browser-sync', function() {
	evt.on('error', handleErrors);
    return browserSync({
        files: ['client/dist/**/*', '!client/dist/js/docs/**/*'],
        proxy: 'localhost:' + parseInt(process.env.PORT, 10) || 9000,
        open: false
    });
});
