#!/usr/bin/env node

'use strict';
var Hapi = require('hapi');
var defaults = require('./server/config');
var server = new Hapi.Server(defaults.server);
var routes = require('./server/config/routes');
var views = require('./server/config/views');
var plugins = require('./server/config/plugins');

// Connect to specified port and host
server.connection(defaults.connection);

// Requires plugins
server.register(plugins, function(err) {
    if (err) {
        throw err;
    }
});

// add routes to app
server.route(routes);

// Setup handlebars and its template locations
server.views(views);

//Start the server
server.start(function() {
    server.log(['internal'], 'Server started at: ' + server.info.uri);
});