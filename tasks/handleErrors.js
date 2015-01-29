'use strict';

var gutil = require('gulp-util');
module.exports = function(err) {
    var error = gutil.colors.red;
    return gutil.log('Gulp error:', error(err.message));
};