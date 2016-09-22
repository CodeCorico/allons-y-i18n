'use strict';

module.exports = function($done) {
  var path = require('path');

  require(path.resolve(__dirname, 'models/i18n-service.js'))();

  $done();
};
