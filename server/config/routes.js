'use strict';

var walker = require('./walker');
module.exports = walker(__dirname, '../**/views/*.js');