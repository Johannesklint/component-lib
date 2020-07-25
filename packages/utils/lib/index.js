/**
 * @param {function} value
 * @returns {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function'
}

module.exports = { isFunction }
