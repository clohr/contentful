'use strict';

module.exports = [{
    register: require('good'),
    options: {
        reporters: [{
                reporter: require('good-console'),
                args: [{
                    log: '*',
                    response: '*'
            }]
        }, {
                reporter: require('good-file'),
                args: ['../hapi_log.log', {
                    log: '*',
                    response: '*',
                    error: '*'
                }]
        }
        ]
    }
}];