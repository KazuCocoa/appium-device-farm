(this['webpackJsonpappium-device-farm-web'] =
  this['webpackJsonpappium-device-farm-web'] || []).push([
  [0],
  {
    50: function (e, t, c) {},
    51: function (e, t, c) {},
    59: function (e, t, c) {
      'use strict';
      c.r(t);
      var n = c(0),
        i = c.n(n),
        s = c(9),
        r = c.n(s),
        j = (c(50), c(10)),
        a = (c(51), c(11)),
        d = c(13),
        o = c(66),
        l = c(64),
        b = (c(57), c(42)),
        h = c(4),
        O = function (e) {
          var t = e.device,
            c = t.platform,
            n = t.name,
            i = t.udid,
            s = t.busy,
            r = t.sdk,
            j = t.realDevice;
          return Object(h.jsxs)('div', {
            children: [
              Object(h.jsx)('div', {
                children:
                  'android' === c
                    ? Object(h.jsx)(a.a, { icon: b.a })
                    : Object(h.jsx)(a.a, { icon: b.b }),
              }),
              Object(h.jsx)('div', {
                children: Object(h.jsx)(o.a, {
                  placement: 'bottom',
                  overlay: Object(h.jsx)(l.a, { id: 'tooltip-bottom', children: i }),
                  children: Object(h.jsx)('div', {
                    class: 'names',
                    children: n
                      ? ''.concat(n, ' (SDK - ').concat(r, ')')
                      : ''.concat(i, ' (SDK - ').concat(r, ')'),
                  }),
                }),
              }),
              Object(h.jsx)('div', {
                children: j
                  ? Object(h.jsxs)('div', {
                      children: [
                        Object(h.jsx)(a.a, { icon: d.b, color: 'black' }),
                        Object(h.jsx)('span', { children: '\xa0Mobile' }),
                      ],
                    })
                  : Object(h.jsxs)('div', {
                      children: [
                        Object(h.jsx)(a.a, { icon: d.a, color: 'black' }),
                        Object(h.jsx)('span', { children: '\xa0Emulated' }),
                      ],
                    }),
              }),
              Object(h.jsx)('div', {
                children: s
                  ? Object(h.jsxs)('div', {
                      children: [
                        Object(h.jsx)(a.a, { icon: d.b, color: 'red' }),
                        Object(h.jsx)('span', { className: 'text-danger', children: '\xa0Busy' }),
                      ],
                    })
                  : Object(h.jsxs)('div', {
                      children: [
                        Object(h.jsx)(a.a, { icon: d.b, color: 'green' }),
                        Object(h.jsx)('span', { className: 'text-success', children: '\xa0Free' }),
                      ],
                    }),
              }),
            ],
          });
        },
        u = function (e) {
          var t = e.devices,
            c = e.platform;
          return Object(h.jsx)('section', {
            class: 'grid-container',
            children: t
              .filter(function (e) {
                return 'android' === c.toLowerCase() || 'iOS' === c
                  ? e.platform.toLowerCase() === c.toLowerCase()
                  : e;
              })
              .map(function (e) {
                return Object(h.jsx)(O, { device: e });
              }),
          });
        },
        x = function (e) {
          var t = e.platform,
            c = Object(n.useState)(!0),
            i = Object(j.a)(c, 2),
            s = i[0],
            r = i[1],
            o = Object(n.useState)([]),
            l = Object(j.a)(o, 2),
            b = l[0],
            O = l[1],
            x = Object(n.useState)(''),
            v = Object(j.a)(x, 2),
            f = v[0],
            m = v[1];
          return (
            Object(n.useEffect)(function () {
              fetch('/device-farm/api/devices')
                .then(function (e) {
                  return e.json();
                })
                .then(
                  function (e) {
                    r(!1), O(e);
                  },
                  function (e) {
                    r(!1), m(!0);
                  }
                );
            }, []),
            s
              ? Object(h.jsxs)('div', {
                  class: 'd-flex flex-column bd-highlight mt-4 text-center',
                  children: [
                    Object(h.jsx)('div', {
                      class: 'p-2 bd-highlight',
                      children: Object(h.jsx)(a.a, { icon: d.d, size: '9x', color: 'green' }),
                    }),
                    Object(h.jsx)('div', {
                      class: 'p-2 bd-highlight',
                      children: 'Loading your devices',
                    }),
                  ],
                })
              : f
              ? Object(h.jsxs)('div', {
                  class: 'd-flex flex-column bd-highlight mb-4 text-center',
                  children: [
                    Object(h.jsx)('div', {
                      class: 'p-2 bd-highlight',
                      children: Object(h.jsx)(a.a, { icon: d.c, size: '9x', color: 'red' }),
                    }),
                    Object(h.jsx)('div', {
                      class: 'p-2 bd-highlight',
                      children: 'Muhahahah Something went wrong',
                    }),
                  ],
                })
              : Object(h.jsx)(u, { devices: b, platform: t })
          );
        },
        v = c(65),
        f = c(20),
        m = function (e) {
          var t = e.children,
            c = Object(n.useState)(''),
            i = Object(j.a)(c, 2),
            s = i[0],
            r = i[1],
            a = Object(n.useState)(!0),
            d = Object(j.a)(a, 2),
            o = d[0],
            l = d[1],
            b = Object(n.useState)(''),
            O = Object(j.a)(b, 2),
            u = O[0],
            x = O[1];
          return (
            Object(n.useEffect)(function () {
              var e = setInterval(function () {
                fetch('/device-farm/api/queue')
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      l(!1), r(e);
                    },
                    function (e) {
                      l(!1), x(e);
                    }
                  );
              }, 1e4);
              return function () {
                clearInterval(e);
              };
            }, []),
            o
              ? Object(h.jsx)('div', { children: 'Loading pending tests' })
              : u
              ? Object(h.jsx)('div', { children: 'Something went wrong' })
              : Object(h.jsxs)('div', {
                  className: 'pending-tests',
                  children: [t, 'Queued Tests : ', s, '  '],
                })
          );
        },
        p = function () {
          var e = Object(n.useState)('Platform'),
            t = Object(j.a)(e, 2),
            c = t[0],
            i = t[1];
          return Object(h.jsxs)('div', {
            children: [
              Object(h.jsx)('div', {
                className: 'header',
                children: Object(h.jsx)('h1', { children: 'Appium Device Farm' }),
              }),
              Object(h.jsxs)('div', {
                className: 'box',
                children: [
                  Object(h.jsx)(m, {}),
                  Object(h.jsxs)(v.a, {
                    id: 'dropdown',
                    title: c,
                    onSelect: function (e) {
                      i(e);
                    },
                    children: [
                      Object(h.jsx)(f.a.Item, { eventKey: 'All', children: 'All' }),
                      Object(h.jsx)(f.a.Item, { eventKey: 'Android', children: 'Android' }),
                      Object(h.jsx)(f.a.Item, { eventKey: 'iOS', children: 'iOS' }),
                    ],
                  }),
                ],
              }),
              Object(h.jsx)(x, { platform: c }),
            ],
          });
        },
        g = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 67))
              .then(function (t) {
                var c = t.getCLS,
                  n = t.getFID,
                  i = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                c(e), n(e), i(e), s(e), r(e);
              });
        };
      r.a.render(
        Object(h.jsx)(i.a.StrictMode, { children: Object(h.jsx)(p, {}) }),
        document.getElementById('root')
      ),
        g();
    },
  },
  [[59, 1, 2]],
]);
//# sourceMappingURL=main.c21aef27.chunk.js.map
