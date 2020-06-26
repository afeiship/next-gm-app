/*!
 * name: @feizheng/next-fetch-with-timeout
 * description: Fetch with timeout options.
 * homepage: https://github.com/afeiship/next-fetch-with-timeout
 * version: 1.0.1
 * date: 2020-06-26T08:16:23.215Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { timeout: 30 * 1e3, AbortController: global.AbortController };

  nx.fetchWithTimeout = function (inFetch) {
    return function (inUrl, inOptions) {
      var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
      var AbortController = options.AbortController;
      var controller = new AbortController();
      options = nx.mix({ signal: controller.signal }, options);

      var timer = setTimeout(function () {
        controller.abort();
      }, options.timeout);

      return new Promise(function (resolve, reject) {
        inFetch(inUrl, options).
          then(function (res) {
            clearTimeout(timer);
            resolve(res);
          }).catch(function (err) {
            reject(err);
          });
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fetchWithTimeout;
  }
})();

//# sourceMappingURL=next-fetch-with-timeout.js.map
