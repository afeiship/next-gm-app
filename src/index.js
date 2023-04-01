import nx from '@jswork/next';
const defaults = { context: global };

// global ctx from unsafeWindow;
const $ = window.$;
const gmsdk = window.gmsdk;

const NxGmApp = nx.declare('nx.GmApp', {
  statics: {
    tips: function (inMsg, inIcon) {
      $.toast({
        icon: inIcon || 'success',
        heading: '温馨提醒',
        text: inMsg,
        position: 'top-right',
        stack: true,
        hideAfter: 1000
      });
    },
    cp2tips: function (inText, inMsg) {
      gmsdk.setClipboard(inText);
      tips(inMsg || '已复制到剪贴板');
    }
  },
  properties: {
    domain: function () {
      return location.host;
    }
  },
  methods: {
    init: function () {
      this.initUI();
      this.initEvents();
    },
    initUI: function (inHtml) {
      $('body').append(inHtml);
    },
    initEvents: function () {
      this.registerActions();
    },
    /**
     * @private: reigster button actions
     */
    registerActions: function () {
      var self = this;
      $('body').on('click', '[data-action]', function () {
        const action = $(this).data('action');
        const method = nx.camelize(action);
        if (typeof self[method] === 'function') {
          self[method]();
        } else {
          console.warn('Not found method:', method);
        }
      });
    }
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NxGmApp;
}

export default NxGmApp;
