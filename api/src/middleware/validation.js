module.exports = function validation(request, response, next) {
  if (typeof next === 'function') {
    next();
  }
};
