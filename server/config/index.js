'use strict';

exports.server = {
    debug: {
        log: ['implementation'],
        request: ['internal', 'error']
    },
    load: {
        sampleInterval: 0
    }
};

exports.connection = {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 9000,
    router: {
        isCaseSensitive: false // something like /pdp & /PDP are same source
    }
};