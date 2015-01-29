'use strict';
var path = require('path');
var base = './templates/';
module.exports = {
    engines: {
        hbs: require('handlebars')
    },
    path: base,
    layoutPath: path.join(base, 'layout'),
    // if you add helpers or partials, just uncomment these
    //helpersPath: path.join(base, 'helpers'),
    //partialsPath: path.join(base, 'partials'),
    layout: true,
    isCached: false
};