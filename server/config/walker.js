'use strict';

module.exports = function(directory, lookUp) {
    var glob = require('glob');
    var path = require('path');
    var foundPaths = [];
    var getPaths = glob.sync(path.join(directory, lookUp));
    var requirePaths = function(paths) {
        require(paths).forEach(function(required) {
            foundPaths.push(required);
        });
    };

    getPaths.forEach(requirePaths);
    return foundPaths;
};
