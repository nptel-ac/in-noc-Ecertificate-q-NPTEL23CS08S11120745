(() => {
  "use strict";
  var e,
    v = {},
    m = {};
  function t(e) {
    var n = m[e];
    if (void 0 !== n) return n.exports;
    var r = (m[e] = { exports: {} });
    return v[e](r, r.exports, t), r.exports;
  }
  (t.m = v),
    (e = []),
    (t.O = (n, r, d, i) => {
      if (!r) {
        var a = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [r, d, i] = e[f], l = !0, c = 0; c < r.length; c++)
            (!1 & i || a >= i) && Object.keys(t.O).every((p) => t.O[p](r[c]))
              ? r.splice(c--, 1)
              : ((l = !1), i < a && (a = i));
          if (l) {
            e.splice(f--, 1);
            var u = d();
            void 0 !== u && (n = u);
          }
        }
        return n;
      }
      i = i || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > i; f--) e[f] = e[f - 1];
      e[f] = [r, d, i];
    }),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.f = {}),
    (t.e = (e) =>
      Promise.all(Object.keys(t.f).reduce((n, r) => (t.f[r](e, n), n), []))),
    (t.u = (e) =>
      (592 === e ? "common" : e) +
      "." +
      {
        5: "701957dbca2dd06d",
        156: "5a8afa35dc7d531b",
        202: "ce93a2287cfaf989",
        213: "51bb63982fae1842",
        247: "52d557662948d1f6",
        265: "e54e6ddd4d315ca0",
        360: "a5c0bbd0ff383431",
        447: "96552f85c1f6aaa9",
        456: "31352aa10fe9b0e3",
        513: "5d7316a0d9ec5267",
        523: "bef819bded13befa",
        592: "7439f78db44ba5c2",
        599: "3d697f40260bda76",
        601: "b105e1db8e0a842e",
        625: "f8506563384d31f0",
        714: "186d74f33407943f",
        740: "47e1a41b6e21bf1a",
        781: "3e2c8511a1e66469",
        818: "94b996e0e5fea9f0",
        884: "40c5c97e161e6e22",
        919: "99f9a015d33ef224",
      }[e] +
      ".js"),
    (t.miniCssF = (e) => {}),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = {},
        n = "nptel-iitm:";
      t.l = (r, d, i, f) => {
        if (e[r]) e[r].push(d);
        else {
          var a, l;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var o = c[u];
              if (
                o.getAttribute("src") == r ||
                o.getAttribute("data-webpack") == n + i
              ) {
                a = o;
                break;
              }
            }
          a ||
            ((l = !0),
            ((a = document.createElement("script")).type = "module"),
            (a.charset = "utf-8"),
            (a.timeout = 120),
            t.nc && a.setAttribute("nonce", t.nc),
            a.setAttribute("data-webpack", n + i),
            (a.src = t.tu(r))),
            (e[r] = [d]);
          var b = (g, p) => {
              (a.onerror = a.onload = null), clearTimeout(s);
              var _ = e[r];
              if (
                (delete e[r],
                a.parentNode && a.parentNode.removeChild(a),
                _ && _.forEach((h) => h(p)),
                g)
              )
                return g(p);
            },
            s = setTimeout(
              b.bind(null, void 0, { type: "timeout", target: a }),
              12e4
            );
          (a.onerror = b.bind(null, a.onerror)),
            (a.onload = b.bind(null, a.onload)),
            l && document.head.appendChild(a);
        }
      };
    })(),
    (t.r = (e) => {
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      t.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (n) => n }),
          typeof trustedTypes < "u" &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("angular#bundler", e))),
        e
      );
    })(),
    (t.tu = (e) => t.tt().createScriptURL(e)),
    (t.p = ""),
    (() => {
      var e = { 666: 0 };
      (t.f.j = (d, i) => {
        var f = t.o(e, d) ? e[d] : void 0;
        if (0 !== f)
          if (f) i.push(f[2]);
          else if (666 != d) {
            var a = new Promise((o, b) => (f = e[d] = [o, b]));
            i.push((f[2] = a));
            var l = t.p + t.u(d),
              c = new Error();
            t.l(
              l,
              (o) => {
                if (t.o(e, d) && (0 !== (f = e[d]) && (e[d] = void 0), f)) {
                  var b = o && ("load" === o.type ? "missing" : o.type),
                    s = o && o.target && o.target.src;
                  (c.message =
                    "Loading chunk " + d + " failed.\n(" + b + ": " + s + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = b),
                    (c.request = s),
                    f[1](c);
                }
              },
              "chunk-" + d,
              d
            );
          } else e[d] = 0;
      }),
        (t.O.j = (d) => 0 === e[d]);
      var n = (d, i) => {
          var c,
            u,
            [f, a, l] = i,
            o = 0;
          if (f.some((s) => 0 !== e[s])) {
            for (c in a) t.o(a, c) && (t.m[c] = a[c]);
            if (l) var b = l(t);
          }
          for (d && d(i); o < f.length; o++)
            t.o(e, (u = f[o])) && e[u] && e[u][0](), (e[u] = 0);
          return t.O(b);
        },
        r = (self.webpackChunknptel_iitm = self.webpackChunknptel_iitm || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })();
})();
