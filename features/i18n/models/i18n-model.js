'use strict';

module.exports = function() {

  DependencyInjection.service('$i18nService', function() {

    return new (function $i18nService() {

      this._ = function(text) {
        return text;
      };

    })();
  });

};
