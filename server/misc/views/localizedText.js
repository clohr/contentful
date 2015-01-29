'use strict';

var localizedTextCtrl = require('../controllers/localizedTextCtrl');

module.exports = [{
    method: 'GET',
    path: '/localized',
    handler: localizedTextCtrl
}];