if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
  (function () {
    const bp = document.createElement('script');
    const curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bp, s);
  })();
}
