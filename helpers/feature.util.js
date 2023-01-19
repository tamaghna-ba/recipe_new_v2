/**
 * Related to All utility methods
 **/

exports.appRoot = require('app-root-path');
module.exports = {
    routerPrefixer: (prefix, route) => {
        route.path = prefix + route.path;
        return route;
    },
    removeEmpty: (obj) => {
        for (let propName in obj) {
            if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
                delete obj[propName];
            }
        }
        return obj;
    }
};
