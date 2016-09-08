var type = require('component-type');
/**
 * Merge object `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */

exports.merge = function merge(a, b) {
  for (var key in b) {
    if (exports.has.call(b, key) && b[key]) {
      if ('object' === type(b[key])) {
        if ('undefined' === type(a[key])) a[key] = {};
        exports.merge(a[key], b[key]);
      } else {
        a[key] = b[key];
      }
    }
  }
  return a;
};

/**
 * HOP 
 */

exports.has = Object.prototype.hasOwnProperty;