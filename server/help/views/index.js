'use strict';

var helpCtrl = require('../controllers/helpCtrl');

module.exports = [{
	// help and info test page
    method: 'GET',
    path: '/',
    handler: helpCtrl
}];