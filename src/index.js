(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { timeout: 0 };

  nx.fetchWithTimeout = function (inFetch) {
    return function (inUrl, inOptions) {
      var controller = new AbortController();
      var options = nx.mix(null, { signal: controller.signal }, DEFAULT_OPTIONS, inOptions);

      if (options.timeout) {
        setTimeout(function () {
          controller.abort();
        }, options.timeout);
      }

      return inFetch(inUrl, options);
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fetchWithTimeout;
  }
})();
