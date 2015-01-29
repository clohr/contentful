'use strict';
// current location of static files
module.exports = [{
    // static files
    method: 'GET',
    path: '/client/{filename*}',
    handler: {
        directory: {
            path: './client',
            index: true
        }
    }
}];