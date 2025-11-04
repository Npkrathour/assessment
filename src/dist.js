var So =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  bu = { exports: {} };
(function (s, e) {
  (function (i, r) {
    s.exports = r();
  })(So, function () {
    return (function (i) {
      function r(u) {
        if (o[u]) return o[u].exports;
        var p = (o[u] = { exports: {}, id: u, loaded: !1 });
        return (
          i[u].call(p.exports, p, p.exports, r), (p.loaded = !0), p.exports
        );
      }
      var o = {};
      return (r.m = i), (r.c = o), (r.p = "dist/"), r(0);
    })([
      function (i, r, o) {
        function u(W) {
          return W && W.__esModule ? W : { default: W };
        }
        var p =
            Object.assign ||
            function (W) {
              for (var ce = 1; ce < arguments.length; ce++) {
                var ie = arguments[ce];
                for (var de in ie)
                  Object.prototype.hasOwnProperty.call(ie, de) &&
                    (W[de] = ie[de]);
              }
              return W;
            },
          d = o(1),
          y = (u(d), o(6)),
          g = u(y),
          C = o(7),
          x = u(C),
          P = o(8),
          T = u(P),
          E = o(9),
          F = u(E),
          X = o(10),
          G = u(X),
          b = o(11),
          S = u(b),
          A = o(14),
          H = u(A),
          q = [],
          N = !1,
          j = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          re = function () {
            var W =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((W && (N = !0), N))
              return (q = (0, S.default)(q, j)), (0, G.default)(q, j.once), q;
          },
          R = function () {
            (q = (0, H.default)()), re();
          },
          z = function () {
            q.forEach(function (W, ce) {
              W.node.removeAttribute("data-aos"),
                W.node.removeAttribute("data-aos-easing"),
                W.node.removeAttribute("data-aos-duration"),
                W.node.removeAttribute("data-aos-delay");
            });
          },
          L = function (W) {
            return (
              W === !0 ||
              (W === "mobile" && F.default.mobile()) ||
              (W === "phone" && F.default.phone()) ||
              (W === "tablet" && F.default.tablet()) ||
              (typeof W == "function" && W() === !0)
            );
          },
          Q = function (W) {
            (j = p(j, W)), (q = (0, H.default)());
            var ce = document.all && !window.atob;
            return L(j.disable) || ce
              ? z()
              : (j.disableMutationObserver ||
                  T.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (j.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", j.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", j.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", j.delay),
                j.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? re(!0)
                  : j.startEvent === "load"
                  ? window.addEventListener(j.startEvent, function () {
                      re(!0);
                    })
                  : document.addEventListener(j.startEvent, function () {
                      re(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, x.default)(re, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, x.default)(re, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, g.default)(function () {
                    (0, G.default)(q, j.once);
                  }, j.throttleDelay)
                ),
                j.disableMutationObserver || T.default.ready("[data-aos]", R),
                q);
          };
        i.exports = { init: Q, refresh: re, refreshHard: R };
      },
      function (i, r) {},
      ,
      ,
      ,
      ,
      function (i, r) {
        (function (o) {
          function u(L, Q, W) {
            function ce(he) {
              var Ee = Re,
                Ue = nt;
              return (Re = nt = void 0), (st = he), (we = L.apply(Ue, Ee));
            }
            function ie(he) {
              return (st = he), (xe = setTimeout(se, Q)), je ? ce(he) : we;
            }
            function de(he) {
              var Ee = he - De,
                Ue = he - st,
                B = Q - Ee;
              return Ve ? R(B, Fe - Ue) : B;
            }
            function ne(he) {
              var Ee = he - De,
                Ue = he - st;
              return De === void 0 || Ee >= Q || Ee < 0 || (Ve && Ue >= Fe);
            }
            function se() {
              var he = z();
              return ne(he) ? M(he) : void (xe = setTimeout(se, de(he)));
            }
            function M(he) {
              return (
                (xe = void 0), fe && Re ? ce(he) : ((Re = nt = void 0), we)
              );
            }
            function Me() {
              xe !== void 0 && clearTimeout(xe),
                (st = 0),
                (Re = De = nt = xe = void 0);
            }
            function ct() {
              return xe === void 0 ? we : M(z());
            }
            function Le() {
              var he = z(),
                Ee = ne(he);
              if (((Re = arguments), (nt = this), (De = he), Ee)) {
                if (xe === void 0) return ie(De);
                if (Ve) return (xe = setTimeout(se, Q)), ce(De);
              }
              return xe === void 0 && (xe = setTimeout(se, Q)), we;
            }
            var Re,
              nt,
              Fe,
              we,
              xe,
              De,
              st = 0,
              je = !1,
              Ve = !1,
              fe = !0;
            if (typeof L != "function") throw new TypeError(P);
            return (
              (Q = C(Q) || 0),
              d(W) &&
                ((je = !!W.leading),
                (Ve = "maxWait" in W),
                (Fe = Ve ? re(C(W.maxWait) || 0, Q) : Fe),
                (fe = "trailing" in W ? !!W.trailing : fe)),
              (Le.cancel = Me),
              (Le.flush = ct),
              Le
            );
          }
          function p(L, Q, W) {
            var ce = !0,
              ie = !0;
            if (typeof L != "function") throw new TypeError(P);
            return (
              d(W) &&
                ((ce = "leading" in W ? !!W.leading : ce),
                (ie = "trailing" in W ? !!W.trailing : ie)),
              u(L, Q, { leading: ce, maxWait: Q, trailing: ie })
            );
          }
          function d(L) {
            var Q = typeof L == "undefined" ? "undefined" : x(L);
            return !!L && (Q == "object" || Q == "function");
          }
          function y(L) {
            return (
              !!L && (typeof L == "undefined" ? "undefined" : x(L)) == "object"
            );
          }
          function g(L) {
            return (
              (typeof L == "undefined" ? "undefined" : x(L)) == "symbol" ||
              (y(L) && j.call(L) == E)
            );
          }
          function C(L) {
            if (typeof L == "number") return L;
            if (g(L)) return T;
            if (d(L)) {
              var Q = typeof L.valueOf == "function" ? L.valueOf() : L;
              L = d(Q) ? Q + "" : Q;
            }
            if (typeof L != "string") return L === 0 ? L : +L;
            L = L.replace(F, "");
            var W = G.test(L);
            return W || b.test(L)
              ? S(L.slice(2), W ? 2 : 8)
              : X.test(L)
              ? T
              : +L;
          }
          var x =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (L) {
                    return typeof L;
                  }
                : function (L) {
                    return L &&
                      typeof Symbol == "function" &&
                      L.constructor === Symbol &&
                      L !== Symbol.prototype
                      ? "symbol"
                      : typeof L;
                  },
            P = "Expected a function",
            T = NaN,
            E = "[object Symbol]",
            F = /^\s+|\s+$/g,
            X = /^[-+]0x[0-9a-f]+$/i,
            G = /^0b[01]+$/i,
            b = /^0o[0-7]+$/i,
            S = parseInt,
            A =
              (typeof o == "undefined" ? "undefined" : x(o)) == "object" &&
              o &&
              o.Object === Object &&
              o,
            H =
              (typeof self == "undefined" ? "undefined" : x(self)) ==
                "object" &&
              self &&
              self.Object === Object &&
              self,
            q = A || H || Function("return this")(),
            N = Object.prototype,
            j = N.toString,
            re = Math.max,
            R = Math.min,
            z = function () {
              return q.Date.now();
            };
          i.exports = p;
        }).call(
          r,
          (function () {
            return this;
          })()
        );
      },
      function (i, r) {
        (function (o) {
          function u(z, L, Q) {
            function W(fe) {
              var he = Le,
                Ee = Re;
              return (Le = Re = void 0), (De = fe), (Fe = z.apply(Ee, he));
            }
            function ce(fe) {
              return (De = fe), (we = setTimeout(ne, L)), st ? W(fe) : Fe;
            }
            function ie(fe) {
              var he = fe - xe,
                Ee = fe - De,
                Ue = L - he;
              return je ? re(Ue, nt - Ee) : Ue;
            }
            function de(fe) {
              var he = fe - xe,
                Ee = fe - De;
              return xe === void 0 || he >= L || he < 0 || (je && Ee >= nt);
            }
            function ne() {
              var fe = R();
              return de(fe) ? se(fe) : void (we = setTimeout(ne, ie(fe)));
            }
            function se(fe) {
              return (we = void 0), Ve && Le ? W(fe) : ((Le = Re = void 0), Fe);
            }
            function M() {
              we !== void 0 && clearTimeout(we),
                (De = 0),
                (Le = xe = Re = we = void 0);
            }
            function Me() {
              return we === void 0 ? Fe : se(R());
            }
            function ct() {
              var fe = R(),
                he = de(fe);
              if (((Le = arguments), (Re = this), (xe = fe), he)) {
                if (we === void 0) return ce(xe);
                if (je) return (we = setTimeout(ne, L)), W(xe);
              }
              return we === void 0 && (we = setTimeout(ne, L)), Fe;
            }
            var Le,
              Re,
              nt,
              Fe,
              we,
              xe,
              De = 0,
              st = !1,
              je = !1,
              Ve = !0;
            if (typeof z != "function") throw new TypeError(x);
            return (
              (L = g(L) || 0),
              p(Q) &&
                ((st = !!Q.leading),
                (je = "maxWait" in Q),
                (nt = je ? j(g(Q.maxWait) || 0, L) : nt),
                (Ve = "trailing" in Q ? !!Q.trailing : Ve)),
              (ct.cancel = M),
              (ct.flush = Me),
              ct
            );
          }
          function p(z) {
            var L = typeof z == "undefined" ? "undefined" : C(z);
            return !!z && (L == "object" || L == "function");
          }
          function d(z) {
            return (
              !!z && (typeof z == "undefined" ? "undefined" : C(z)) == "object"
            );
          }
          function y(z) {
            return (
              (typeof z == "undefined" ? "undefined" : C(z)) == "symbol" ||
              (d(z) && N.call(z) == T)
            );
          }
          function g(z) {
            if (typeof z == "number") return z;
            if (y(z)) return P;
            if (p(z)) {
              var L = typeof z.valueOf == "function" ? z.valueOf() : z;
              z = p(L) ? L + "" : L;
            }
            if (typeof z != "string") return z === 0 ? z : +z;
            z = z.replace(E, "");
            var Q = X.test(z);
            return Q || G.test(z)
              ? b(z.slice(2), Q ? 2 : 8)
              : F.test(z)
              ? P
              : +z;
          }
          var C =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (z) {
                    return typeof z;
                  }
                : function (z) {
                    return z &&
                      typeof Symbol == "function" &&
                      z.constructor === Symbol &&
                      z !== Symbol.prototype
                      ? "symbol"
                      : typeof z;
                  },
            x = "Expected a function",
            P = NaN,
            T = "[object Symbol]",
            E = /^\s+|\s+$/g,
            F = /^[-+]0x[0-9a-f]+$/i,
            X = /^0b[01]+$/i,
            G = /^0o[0-7]+$/i,
            b = parseInt,
            S =
              (typeof o == "undefined" ? "undefined" : C(o)) == "object" &&
              o &&
              o.Object === Object &&
              o,
            A =
              (typeof self == "undefined" ? "undefined" : C(self)) ==
                "object" &&
              self &&
              self.Object === Object &&
              self,
            H = S || A || Function("return this")(),
            q = Object.prototype,
            N = q.toString,
            j = Math.max,
            re = Math.min,
            R = function () {
              return H.Date.now();
            };
          i.exports = u;
        }).call(
          r,
          (function () {
            return this;
          })()
        );
      },
      function (i, r) {
        function o(C) {
          var x = void 0,
            P = void 0;
          for (x = 0; x < C.length; x += 1)
            if (
              ((P = C[x]),
              (P.dataset && P.dataset.aos) || (P.children && o(P.children)))
            )
              return !0;
          return !1;
        }
        function u() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function p() {
          return !!u();
        }
        function d(C, x) {
          var P = window.document,
            T = u(),
            E = new T(y);
          (g = x),
            E.observe(P.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function y(C) {
          C &&
            C.forEach(function (x) {
              var P = Array.prototype.slice.call(x.addedNodes),
                T = Array.prototype.slice.call(x.removedNodes),
                E = P.concat(T);
              if (o(E)) return g();
            });
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var g = function () {};
        r.default = { isSupported: p, ready: d };
      },
      function (i, r) {
        function o(P, T) {
          if (!(P instanceof T))
            throw new TypeError("Cannot call a class as a function");
        }
        function u() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var p = (function () {
            function P(T, E) {
              for (var F = 0; F < E.length; F++) {
                var X = E[F];
                (X.enumerable = X.enumerable || !1),
                  (X.configurable = !0),
                  "value" in X && (X.writable = !0),
                  Object.defineProperty(T, X.key, X);
              }
            }
            return function (T, E, F) {
              return E && P(T.prototype, E), F && P(T, F), T;
            };
          })(),
          d =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          y =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          g =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          C =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          x = (function () {
            function P() {
              o(this, P);
            }
            return (
              p(P, [
                {
                  key: "phone",
                  value: function () {
                    var T = u();
                    return !(!d.test(T) && !y.test(T.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var T = u();
                    return !(!g.test(T) && !C.test(T.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              P
            );
          })();
        r.default = new x();
      },
      function (i, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = function (p, d, y) {
            var g = p.node.getAttribute("data-aos-once");
            d > p.position
              ? p.node.classList.add("aos-animate")
              : typeof g != "undefined" &&
                (g === "false" || (!y && g !== "true")) &&
                p.node.classList.remove("aos-animate");
          },
          u = function (p, d) {
            var y = window.pageYOffset,
              g = window.innerHeight;
            p.forEach(function (C, x) {
              o(C, g + y, d);
            });
          };
        r.default = u;
      },
      function (i, r, o) {
        function u(g) {
          return g && g.__esModule ? g : { default: g };
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var p = o(12),
          d = u(p),
          y = function (g, C) {
            return (
              g.forEach(function (x, P) {
                x.node.classList.add("aos-init"),
                  (x.position = (0, d.default)(x.node, C.offset));
              }),
              g
            );
          };
        r.default = y;
      },
      function (i, r, o) {
        function u(g) {
          return g && g.__esModule ? g : { default: g };
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var p = o(13),
          d = u(p),
          y = function (g, C) {
            var x = 0,
              P = 0,
              T = window.innerHeight,
              E = {
                offset: g.getAttribute("data-aos-offset"),
                anchor: g.getAttribute("data-aos-anchor"),
                anchorPlacement: g.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (E.offset && !isNaN(E.offset) && (P = parseInt(E.offset)),
              E.anchor &&
                document.querySelectorAll(E.anchor) &&
                (g = document.querySelectorAll(E.anchor)[0]),
              (x = (0, d.default)(g).top),
              E.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                x += g.offsetHeight / 2;
                break;
              case "bottom-bottom":
                x += g.offsetHeight;
                break;
              case "top-center":
                x += T / 2;
                break;
              case "bottom-center":
                x += T / 2 + g.offsetHeight;
                break;
              case "center-center":
                x += T / 2 + g.offsetHeight / 2;
                break;
              case "top-top":
                x += T;
                break;
              case "bottom-top":
                x += g.offsetHeight + T;
                break;
              case "center-top":
                x += g.offsetHeight / 2 + T;
            }
            return E.anchorPlacement || E.offset || isNaN(C) || (P = C), x + P;
          };
        r.default = y;
      },
      function (i, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = function (u) {
          for (
            var p = 0, d = 0;
            u && !isNaN(u.offsetLeft) && !isNaN(u.offsetTop);

          )
            (p += u.offsetLeft - (u.tagName != "BODY" ? u.scrollLeft : 0)),
              (d += u.offsetTop - (u.tagName != "BODY" ? u.scrollTop : 0)),
              (u = u.offsetParent);
          return { top: d, left: p };
        };
        r.default = o;
      },
      function (i, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = function (u) {
          return (
            (u = u || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(u, function (p) {
              return { node: p };
            })
          );
        };
        r.default = o;
      },
    ]);
  });
})(bu);
function Ka(s) {
  return (
    s !== null &&
    typeof s == "object" &&
    "constructor" in s &&
    s.constructor === Object
  );
}
function Qs(s, e) {
  s === void 0 && (s = {}), e === void 0 && (e = {});
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((r) => i.indexOf(r) < 0)
    .forEach((r) => {
      typeof s[r] == "undefined"
        ? (s[r] = e[r])
        : Ka(e[r]) &&
          Ka(s[r]) &&
          Object.keys(e[r]).length > 0 &&
          Qs(s[r], e[r]);
    });
}
const Co = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function zr() {
  const s = typeof document != "undefined" ? document : {};
  return Qs(s, Co), s;
}
const yu = {
  document: Co,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(s) {
    return typeof setTimeout == "undefined" ? (s(), null) : setTimeout(s, 0);
  },
  cancelAnimationFrame(s) {
    typeof setTimeout != "undefined" && clearTimeout(s);
  },
};
function jt() {
  const s = typeof window != "undefined" ? window : {};
  return Qs(s, yu), s;
}
function wu(s) {
  return (
    s === void 0 && (s = ""),
    s
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function xu(s) {
  const e = s;
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null;
    } catch (r) {}
    try {
      delete e[i];
    } catch (r) {}
  });
}
function Bs(s, e) {
  return e === void 0 && (e = 0), setTimeout(s, e);
}
function qn() {
  return Date.now();
}
function Tu(s) {
  const e = jt();
  let i;
  return (
    e.getComputedStyle && (i = e.getComputedStyle(s, null)),
    !i && s.currentStyle && (i = s.currentStyle),
    i || (i = s.style),
    i
  );
}
function Su(s, e) {
  e === void 0 && (e = "x");
  const i = jt();
  let r, o, u;
  const p = Tu(s);
  return (
    i.WebKitCSSMatrix
      ? ((o = p.transform || p.webkitTransform),
        o.split(",").length > 6 &&
          (o = o
            .split(", ")
            .map((d) => d.replace(",", "."))
            .join(", ")),
        (u = new i.WebKitCSSMatrix(o === "none" ? "" : o)))
      : ((u =
          p.MozTransform ||
          p.OTransform ||
          p.MsTransform ||
          p.msTransform ||
          p.transform ||
          p
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = u.toString().split(","))),
    e === "x" &&
      (i.WebKitCSSMatrix
        ? (o = u.m41)
        : r.length === 16
        ? (o = parseFloat(r[12]))
        : (o = parseFloat(r[4]))),
    e === "y" &&
      (i.WebKitCSSMatrix
        ? (o = u.m42)
        : r.length === 16
        ? (o = parseFloat(r[13]))
        : (o = parseFloat(r[5]))),
    o || 0
  );
}
function Tn(s) {
  return (
    typeof s == "object" &&
    s !== null &&
    s.constructor &&
    Object.prototype.toString.call(s).slice(8, -1) === "Object"
  );
}
function Cu(s) {
  return typeof window != "undefined" &&
    typeof window.HTMLElement != "undefined"
    ? s instanceof HTMLElement
    : s && (s.nodeType === 1 || s.nodeType === 11);
}
function dr() {
  const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (r != null && !Cu(r)) {
      const o = Object.keys(Object(r)).filter((u) => e.indexOf(u) < 0);
      for (let u = 0, p = o.length; u < p; u += 1) {
        const d = o[u],
          y = Object.getOwnPropertyDescriptor(r, d);
        y !== void 0 &&
          y.enumerable &&
          (Tn(s[d]) && Tn(r[d])
            ? r[d].__swiper__
              ? (s[d] = r[d])
              : dr(s[d], r[d])
            : !Tn(s[d]) && Tn(r[d])
            ? ((s[d] = {}), r[d].__swiper__ ? (s[d] = r[d]) : dr(s[d], r[d]))
            : (s[d] = r[d]));
      }
    }
  }
  return s;
}
function Sn(s, e, i) {
  s.style.setProperty(e, i);
}
function Eo(s) {
  let { swiper: e, targetPosition: i, side: r } = s;
  const o = jt(),
    u = -e.translate;
  let p = null,
    d;
  const y = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    o.cancelAnimationFrame(e.cssModeFrameID);
  const g = i > u ? "next" : "prev",
    C = (P, T) => (g === "next" && P >= T) || (g === "prev" && P <= T),
    x = () => {
      (d = new Date().getTime()), p === null && (p = d);
      const P = Math.max(Math.min((d - p) / y, 1), 0),
        T = 0.5 - Math.cos(P * Math.PI) / 2;
      let E = u + T * (i - u);
      if ((C(E, i) && (E = i), e.wrapperEl.scrollTo({ [r]: E }), C(E, i))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [r]: E });
          }),
          o.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = o.requestAnimationFrame(x);
    };
  x();
}
function Dr(s, e) {
  e === void 0 && (e = "");
  const i = jt(),
    r = [...s.children];
  return (
    i.HTMLSlotElement &&
      s instanceof HTMLSlotElement &&
      r.push(...s.assignedElements()),
    e ? r.filter((o) => o.matches(e)) : r
  );
}
function Eu(s, e) {
  const i = [e];
  for (; i.length > 0; ) {
    const r = i.shift();
    if (s === r) return !0;
    i.push(
      ...r.children,
      ...(r.shadowRoot ? r.shadowRoot.children : []),
      ...(r.assignedElements ? r.assignedElements() : [])
    );
  }
}
function Pu(s, e) {
  const i = jt();
  let r = e.contains(s);
  return (
    !r &&
      i.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      ((r = [...e.assignedElements()].includes(s)), r || (r = Eu(s, e))),
    r
  );
}
function Xn(s) {
  try {
    console.warn(s);
    return;
  } catch (e) {}
}
function Wn(s, e) {
  e === void 0 && (e = []);
  const i = document.createElement(s);
  return i.classList.add(...(Array.isArray(e) ? e : wu(e))), i;
}
function ku(s, e) {
  const i = [];
  for (; s.previousElementSibling; ) {
    const r = s.previousElementSibling;
    e ? r.matches(e) && i.push(r) : i.push(r), (s = r);
  }
  return i;
}
function Mu(s, e) {
  const i = [];
  for (; s.nextElementSibling; ) {
    const r = s.nextElementSibling;
    e ? r.matches(e) && i.push(r) : i.push(r), (s = r);
  }
  return i;
}
function Jr(s, e) {
  return jt().getComputedStyle(s, null).getPropertyValue(e);
}
function $n(s) {
  let e = s,
    i;
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (i += 1);
    return i;
  }
}
function Po(s, e) {
  const i = [];
  let r = s.parentElement;
  for (; r; ) e ? r.matches(e) && i.push(r) : i.push(r), (r = r.parentElement);
  return i;
}
function Ns(s, e, i) {
  const r = jt();
  return i
    ? s[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(s, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(s, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
        )
    : s.offsetWidth;
}
function kt(s) {
  return (Array.isArray(s) ? s : [s]).filter((e) => !!e);
}
function Qa(s, e) {
  e === void 0 && (e = ""),
    typeof trustedTypes != "undefined"
      ? (s.innerHTML = trustedTypes
          .createPolicy("html", { createHTML: (i) => i })
          .createHTML(e))
      : (s.innerHTML = e);
}
let Ts;
function Ou() {
  const s = jt(),
    e = zr();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in s ||
      (s.DocumentTouch && e instanceof s.DocumentTouch)
    ),
  };
}
function ko() {
  return Ts || (Ts = Ou()), Ts;
}
let Ss;
function Au(s) {
  let { userAgent: e } = s === void 0 ? {} : s;
  const i = ko(),
    r = jt(),
    o = r.navigator.platform,
    u = e || r.navigator.userAgent,
    p = { ios: !1, android: !1 },
    d = r.screen.width,
    y = r.screen.height,
    g = u.match(/(Android);?[\s\/]+([\d.]+)?/);
  let C = u.match(/(iPad).*OS\s([\d_]+)/);
  const x = u.match(/(iPod)(.*OS\s([\d_]+))?/),
    P = !C && u.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    T = o === "Win32";
  let E = o === "MacIntel";
  const F = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !C &&
      E &&
      i.touch &&
      F.indexOf(`${d}x${y}`) >= 0 &&
      ((C = u.match(/(Version)\/([\d.]+)/)),
      C || (C = [0, 1, "13_0_0"]),
      (E = !1)),
    g && !T && ((p.os = "android"), (p.android = !0)),
    (C || P || x) && ((p.os = "ios"), (p.ios = !0)),
    p
  );
}
function Mo(s) {
  return s === void 0 && (s = {}), Ss || (Ss = Au(s)), Ss;
}
let Cs;
function Lu() {
  const s = jt(),
    e = Mo();
  let i = !1;
  function r() {
    const d = s.navigator.userAgent.toLowerCase();
    return (
      d.indexOf("safari") >= 0 &&
      d.indexOf("chrome") < 0 &&
      d.indexOf("android") < 0
    );
  }
  if (r()) {
    const d = String(s.navigator.userAgent);
    if (d.includes("Version/")) {
      const [y, g] = d
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((C) => Number(C));
      i = y < 16 || (y === 16 && g < 2);
    }
  }
  const o = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      s.navigator.userAgent
    ),
    u = r(),
    p = u || (o && e.ios);
  return {
    isSafari: i || u,
    needPerspectiveFix: i,
    need3dFix: p,
    isWebView: o,
  };
}
function Oo() {
  return Cs || (Cs = Lu()), Cs;
}
function Du(s) {
  let { swiper: e, on: i, emit: r } = s;
  const o = jt();
  let u = null,
    p = null;
  const d = () => {
      !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
    },
    y = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((u = new ResizeObserver((x) => {
          p = o.requestAnimationFrame(() => {
            const { width: P, height: T } = e;
            let E = P,
              F = T;
            x.forEach((X) => {
              let { contentBoxSize: G, contentRect: b, target: S } = X;
              (S && S !== e.el) ||
                ((E = b ? b.width : (G[0] || G).inlineSize),
                (F = b ? b.height : (G[0] || G).blockSize));
            }),
              (E !== P || F !== T) && d();
          });
        })),
        u.observe(e.el));
    },
    g = () => {
      p && o.cancelAnimationFrame(p),
        u && u.unobserve && e.el && (u.unobserve(e.el), (u = null));
    },
    C = () => {
      !e || e.destroyed || !e.initialized || r("orientationchange");
    };
  i("init", () => {
    if (e.params.resizeObserver && typeof o.ResizeObserver != "undefined") {
      y();
      return;
    }
    o.addEventListener("resize", d), o.addEventListener("orientationchange", C);
  }),
    i("destroy", () => {
      g(),
        o.removeEventListener("resize", d),
        o.removeEventListener("orientationchange", C);
    });
}
function Iu(s) {
  let { swiper: e, extendParams: i, on: r, emit: o } = s;
  const u = [],
    p = jt(),
    d = function (C, x) {
      x === void 0 && (x = {});
      const P = p.MutationObserver || p.WebkitMutationObserver,
        T = new P((E) => {
          if (e.__preventObserver__) return;
          if (E.length === 1) {
            o("observerUpdate", E[0]);
            return;
          }
          const F = function () {
            o("observerUpdate", E[0]);
          };
          p.requestAnimationFrame
            ? p.requestAnimationFrame(F)
            : p.setTimeout(F, 0);
        });
      T.observe(C, {
        attributes: typeof x.attributes == "undefined" ? !0 : x.attributes,
        childList:
          e.isElement || (typeof x.childList == "undefined" ? !0 : x).childList,
        characterData:
          typeof x.characterData == "undefined" ? !0 : x.characterData,
      }),
        u.push(T);
    },
    y = () => {
      if (!!e.params.observer) {
        if (e.params.observeParents) {
          const C = Po(e.hostEl);
          for (let x = 0; x < C.length; x += 1) d(C[x]);
        }
        d(e.hostEl, { childList: e.params.observeSlideChildren }),
          d(e.wrapperEl, { attributes: !1 });
      }
    },
    g = () => {
      u.forEach((C) => {
        C.disconnect();
      }),
        u.splice(0, u.length);
    };
  i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", y),
    r("destroy", g);
}
var zu = {
  on(s, e, i) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
    const o = i ? "unshift" : "push";
    return (
      s.split(" ").forEach((u) => {
        r.eventsListeners[u] || (r.eventsListeners[u] = []),
          r.eventsListeners[u][o](e);
      }),
      r
    );
  },
  once(s, e, i) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
    function o() {
      r.off(s, o), o.__emitterProxy && delete o.__emitterProxy;
      for (var u = arguments.length, p = new Array(u), d = 0; d < u; d++)
        p[d] = arguments[d];
      e.apply(r, p);
    }
    return (o.__emitterProxy = e), r.on(s, o, i);
  },
  onAny(s, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof s != "function") return i;
    const r = e ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(s) < 0 && i.eventsAnyListeners[r](s), i;
  },
  offAny(s) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const i = e.eventsAnyListeners.indexOf(s);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
  },
  off(s, e) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        s.split(" ").forEach((r) => {
          typeof e == "undefined"
            ? (i.eventsListeners[r] = [])
            : i.eventsListeners[r] &&
              i.eventsListeners[r].forEach((o, u) => {
                (o === e || (o.__emitterProxy && o.__emitterProxy === e)) &&
                  i.eventsListeners[r].splice(u, 1);
              });
        }),
      i
    );
  },
  emit() {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
    let e, i, r;
    for (var o = arguments.length, u = new Array(o), p = 0; p < o; p++)
      u[p] = arguments[p];
    return (
      typeof u[0] == "string" || Array.isArray(u[0])
        ? ((e = u[0]), (i = u.slice(1, u.length)), (r = s))
        : ((e = u[0].events), (i = u[0].data), (r = u[0].context || s)),
      i.unshift(r),
      (Array.isArray(e) ? e : e.split(" ")).forEach((y) => {
        s.eventsAnyListeners &&
          s.eventsAnyListeners.length &&
          s.eventsAnyListeners.forEach((g) => {
            g.apply(r, [y, ...i]);
          }),
          s.eventsListeners &&
            s.eventsListeners[y] &&
            s.eventsListeners[y].forEach((g) => {
              g.apply(r, i);
            });
      }),
      s
    );
  },
};
function Ru() {
  const s = this;
  let e, i;
  const r = s.el;
  typeof s.params.width != "undefined" && s.params.width !== null
    ? (e = s.params.width)
    : (e = r.clientWidth),
    typeof s.params.height != "undefined" && s.params.height !== null
      ? (i = s.params.height)
      : (i = r.clientHeight),
    !((e === 0 && s.isHorizontal()) || (i === 0 && s.isVertical())) &&
      ((e =
        e -
        parseInt(Jr(r, "padding-left") || 0, 10) -
        parseInt(Jr(r, "padding-right") || 0, 10)),
      (i =
        i -
        parseInt(Jr(r, "padding-top") || 0, 10) -
        parseInt(Jr(r, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(s, {
        width: e,
        height: i,
        size: s.isHorizontal() ? e : i,
      }));
}
function Fu() {
  const s = this;
  function e(R, z) {
    return parseFloat(R.getPropertyValue(s.getDirectionLabel(z)) || 0);
  }
  const i = s.params,
    { wrapperEl: r, slidesEl: o, size: u, rtlTranslate: p, wrongRTL: d } = s,
    y = s.virtual && i.virtual.enabled,
    g = y ? s.virtual.slides.length : s.slides.length,
    C = Dr(o, `.${s.params.slideClass}, swiper-slide`),
    x = y ? s.virtual.slides.length : C.length;
  let P = [];
  const T = [],
    E = [];
  let F = i.slidesOffsetBefore;
  typeof F == "function" && (F = i.slidesOffsetBefore.call(s));
  let X = i.slidesOffsetAfter;
  typeof X == "function" && (X = i.slidesOffsetAfter.call(s));
  const G = s.snapGrid.length,
    b = s.slidesGrid.length;
  let S = i.spaceBetween,
    A = -F,
    H = 0,
    q = 0;
  if (typeof u == "undefined") return;
  typeof S == "string" && S.indexOf("%") >= 0
    ? (S = (parseFloat(S.replace("%", "")) / 100) * u)
    : typeof S == "string" && (S = parseFloat(S)),
    (s.virtualSize = -S),
    C.forEach((R) => {
      p ? (R.style.marginLeft = "") : (R.style.marginRight = ""),
        (R.style.marginBottom = ""),
        (R.style.marginTop = "");
    }),
    i.centeredSlides &&
      i.cssMode &&
      (Sn(r, "--swiper-centered-offset-before", ""),
      Sn(r, "--swiper-centered-offset-after", ""));
  const N = i.grid && i.grid.rows > 1 && s.grid;
  N ? s.grid.initSlides(C) : s.grid && s.grid.unsetSlides();
  let j;
  const re =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (R) => typeof i.breakpoints[R].slidesPerView != "undefined"
    ).length > 0;
  for (let R = 0; R < x; R += 1) {
    j = 0;
    let z;
    if (
      (C[R] && (z = C[R]),
      N && s.grid.updateSlide(R, z, C),
      !(C[R] && Jr(z, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        re && (C[R].style[s.getDirectionLabel("width")] = "");
        const L = getComputedStyle(z),
          Q = z.style.transform,
          W = z.style.webkitTransform;
        if (
          (Q && (z.style.transform = "none"),
          W && (z.style.webkitTransform = "none"),
          i.roundLengths)
        )
          j = s.isHorizontal() ? Ns(z, "width", !0) : Ns(z, "height", !0);
        else {
          const ce = e(L, "width"),
            ie = e(L, "padding-left"),
            de = e(L, "padding-right"),
            ne = e(L, "margin-left"),
            se = e(L, "margin-right"),
            M = L.getPropertyValue("box-sizing");
          if (M && M === "border-box") j = ce + ne + se;
          else {
            const { clientWidth: Me, offsetWidth: ct } = z;
            j = ce + ie + de + ne + se + (ct - Me);
          }
        }
        Q && (z.style.transform = Q),
          W && (z.style.webkitTransform = W),
          i.roundLengths && (j = Math.floor(j));
      } else
        (j = (u - (i.slidesPerView - 1) * S) / i.slidesPerView),
          i.roundLengths && (j = Math.floor(j)),
          C[R] && (C[R].style[s.getDirectionLabel("width")] = `${j}px`);
      C[R] && (C[R].swiperSlideSize = j),
        E.push(j),
        i.centeredSlides
          ? ((A = A + j / 2 + H / 2 + S),
            H === 0 && R !== 0 && (A = A - u / 2 - S),
            R === 0 && (A = A - u / 2 - S),
            Math.abs(A) < 1 / 1e3 && (A = 0),
            i.roundLengths && (A = Math.floor(A)),
            q % i.slidesPerGroup === 0 && P.push(A),
            T.push(A))
          : (i.roundLengths && (A = Math.floor(A)),
            (q - Math.min(s.params.slidesPerGroupSkip, q)) %
              s.params.slidesPerGroup ===
              0 && P.push(A),
            T.push(A),
            (A = A + j + S)),
        (s.virtualSize += j + S),
        (H = j),
        (q += 1);
    }
  }
  if (
    ((s.virtualSize = Math.max(s.virtualSize, u) + X),
    p &&
      d &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (r.style.width = `${s.virtualSize + S}px`),
    i.setWrapperSize &&
      (r.style[s.getDirectionLabel("width")] = `${s.virtualSize + S}px`),
    N && s.grid.updateWrapperSize(j, P),
    !i.centeredSlides)
  ) {
    const R = [];
    for (let z = 0; z < P.length; z += 1) {
      let L = P[z];
      i.roundLengths && (L = Math.floor(L)),
        P[z] <= s.virtualSize - u && R.push(L);
    }
    (P = R),
      Math.floor(s.virtualSize - u) - Math.floor(P[P.length - 1]) > 1 &&
        P.push(s.virtualSize - u);
  }
  if (y && i.loop) {
    const R = E[0] + S;
    if (i.slidesPerGroup > 1) {
      const z = Math.ceil(
          (s.virtual.slidesBefore + s.virtual.slidesAfter) / i.slidesPerGroup
        ),
        L = R * i.slidesPerGroup;
      for (let Q = 0; Q < z; Q += 1) P.push(P[P.length - 1] + L);
    }
    for (let z = 0; z < s.virtual.slidesBefore + s.virtual.slidesAfter; z += 1)
      i.slidesPerGroup === 1 && P.push(P[P.length - 1] + R),
        T.push(T[T.length - 1] + R),
        (s.virtualSize += R);
  }
  if ((P.length === 0 && (P = [0]), S !== 0)) {
    const R =
      s.isHorizontal() && p ? "marginLeft" : s.getDirectionLabel("marginRight");
    C.filter((z, L) =>
      !i.cssMode || i.loop ? !0 : L !== C.length - 1
    ).forEach((z) => {
      z.style[R] = `${S}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let R = 0;
    E.forEach((L) => {
      R += L + (S || 0);
    }),
      (R -= S);
    const z = R > u ? R - u : 0;
    P = P.map((L) => (L <= 0 ? -F : L > z ? z + X : L));
  }
  if (i.centerInsufficientSlides) {
    let R = 0;
    E.forEach((L) => {
      R += L + (S || 0);
    }),
      (R -= S);
    const z = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
    if (R + z < u) {
      const L = (u - R - z) / 2;
      P.forEach((Q, W) => {
        P[W] = Q - L;
      }),
        T.forEach((Q, W) => {
          T[W] = Q + L;
        });
    }
  }
  if (
    (Object.assign(s, {
      slides: C,
      snapGrid: P,
      slidesGrid: T,
      slidesSizesGrid: E,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    Sn(r, "--swiper-centered-offset-before", `${-P[0]}px`),
      Sn(
        r,
        "--swiper-centered-offset-after",
        `${s.size / 2 - E[E.length - 1] / 2}px`
      );
    const R = -s.snapGrid[0],
      z = -s.slidesGrid[0];
    (s.snapGrid = s.snapGrid.map((L) => L + R)),
      (s.slidesGrid = s.slidesGrid.map((L) => L + z));
  }
  if (
    (x !== g && s.emit("slidesLengthChange"),
    P.length !== G &&
      (s.params.watchOverflow && s.checkOverflow(),
      s.emit("snapGridLengthChange")),
    T.length !== b && s.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && s.updateSlidesOffset(),
    s.emit("slidesUpdated"),
    !y && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const R = `${i.containerModifierClass}backface-hidden`,
      z = s.el.classList.contains(R);
    x <= i.maxBackfaceHiddenSlides
      ? z || s.el.classList.add(R)
      : z && s.el.classList.remove(R);
  }
}
function Bu(s) {
  const e = this,
    i = [],
    r = e.virtual && e.params.virtual.enabled;
  let o = 0,
    u;
  typeof s == "number"
    ? e.setTransition(s)
    : s === !0 && e.setTransition(e.params.speed);
  const p = (d) => (r ? e.slides[e.getSlideIndexByData(d)] : e.slides[d]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((d) => {
        i.push(d);
      });
    else
      for (u = 0; u < Math.ceil(e.params.slidesPerView); u += 1) {
        const d = e.activeIndex + u;
        if (d > e.slides.length && !r) break;
        i.push(p(d));
      }
  else i.push(p(e.activeIndex));
  for (u = 0; u < i.length; u += 1)
    if (typeof i[u] != "undefined") {
      const d = i[u].offsetHeight;
      o = d > o ? d : o;
    }
  (o || o === 0) && (e.wrapperEl.style.height = `${o}px`);
}
function Nu() {
  const s = this,
    e = s.slides,
    i = s.isElement
      ? s.isHorizontal()
        ? s.wrapperEl.offsetLeft
        : s.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < e.length; r += 1)
    e[r].swiperSlideOffset =
      (s.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) -
      i -
      s.cssOverflowAdjustment();
}
const Za = (s, e, i) => {
  e && !s.classList.contains(i)
    ? s.classList.add(i)
    : !e && s.classList.contains(i) && s.classList.remove(i);
};
function Gu(s) {
  s === void 0 && (s = (this && this.translate) || 0);
  const e = this,
    i = e.params,
    { slides: r, rtlTranslate: o, snapGrid: u } = e;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
  let p = -s;
  o && (p = s), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
  let d = i.spaceBetween;
  typeof d == "string" && d.indexOf("%") >= 0
    ? (d = (parseFloat(d.replace("%", "")) / 100) * e.size)
    : typeof d == "string" && (d = parseFloat(d));
  for (let y = 0; y < r.length; y += 1) {
    const g = r[y];
    let C = g.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (C -= r[0].swiperSlideOffset);
    const x =
        (p + (i.centeredSlides ? e.minTranslate() : 0) - C) /
        (g.swiperSlideSize + d),
      P =
        (p - u[0] + (i.centeredSlides ? e.minTranslate() : 0) - C) /
        (g.swiperSlideSize + d),
      T = -(p - C),
      E = T + e.slidesSizesGrid[y],
      F = T >= 0 && T <= e.size - e.slidesSizesGrid[y],
      X =
        (T >= 0 && T < e.size - 1) ||
        (E > 1 && E <= e.size) ||
        (T <= 0 && E >= e.size);
    X && (e.visibleSlides.push(g), e.visibleSlidesIndexes.push(y)),
      Za(g, X, i.slideVisibleClass),
      Za(g, F, i.slideFullyVisibleClass),
      (g.progress = o ? -x : x),
      (g.originalProgress = o ? -P : P);
  }
}
function Vu(s) {
  const e = this;
  if (typeof s == "undefined") {
    const C = e.rtlTranslate ? -1 : 1;
    s = (e && e.translate && e.translate * C) || 0;
  }
  const i = e.params,
    r = e.maxTranslate() - e.minTranslate();
  let { progress: o, isBeginning: u, isEnd: p, progressLoop: d } = e;
  const y = u,
    g = p;
  if (r === 0) (o = 0), (u = !0), (p = !0);
  else {
    o = (s - e.minTranslate()) / r;
    const C = Math.abs(s - e.minTranslate()) < 1,
      x = Math.abs(s - e.maxTranslate()) < 1;
    (u = C || o <= 0), (p = x || o >= 1), C && (o = 0), x && (o = 1);
  }
  if (i.loop) {
    const C = e.getSlideIndexByData(0),
      x = e.getSlideIndexByData(e.slides.length - 1),
      P = e.slidesGrid[C],
      T = e.slidesGrid[x],
      E = e.slidesGrid[e.slidesGrid.length - 1],
      F = Math.abs(s);
    F >= P ? (d = (F - P) / E) : (d = (F + E - T) / E), d > 1 && (d -= 1);
  }
  Object.assign(e, { progress: o, progressLoop: d, isBeginning: u, isEnd: p }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      e.updateSlidesProgress(s),
    u && !y && e.emit("reachBeginning toEdge"),
    p && !g && e.emit("reachEnd toEdge"),
    ((y && !u) || (g && !p)) && e.emit("fromEdge"),
    e.emit("progress", o);
}
const Es = (s, e, i) => {
  e && !s.classList.contains(i)
    ? s.classList.add(i)
    : !e && s.classList.contains(i) && s.classList.remove(i);
};
function Hu() {
  const s = this,
    { slides: e, params: i, slidesEl: r, activeIndex: o } = s,
    u = s.virtual && i.virtual.enabled,
    p = s.grid && i.grid && i.grid.rows > 1,
    d = (x) => Dr(r, `.${i.slideClass}${x}, swiper-slide${x}`)[0];
  let y, g, C;
  if (u)
    if (i.loop) {
      let x = o - s.virtual.slidesBefore;
      x < 0 && (x = s.virtual.slides.length + x),
        x >= s.virtual.slides.length && (x -= s.virtual.slides.length),
        (y = d(`[data-swiper-slide-index="${x}"]`));
    } else y = d(`[data-swiper-slide-index="${o}"]`);
  else
    p
      ? ((y = e.find((x) => x.column === o)),
        (C = e.find((x) => x.column === o + 1)),
        (g = e.find((x) => x.column === o - 1)))
      : (y = e[o]);
  y &&
    (p ||
      ((C = Mu(y, `.${i.slideClass}, swiper-slide`)[0]),
      i.loop && !C && (C = e[0]),
      (g = ku(y, `.${i.slideClass}, swiper-slide`)[0]),
      i.loop && !g === 0 && (g = e[e.length - 1]))),
    e.forEach((x) => {
      Es(x, x === y, i.slideActiveClass),
        Es(x, x === C, i.slideNextClass),
        Es(x, x === g, i.slidePrevClass);
    }),
    s.emitSlidesClasses();
}
const Fn = (s, e) => {
    if (!s || s.destroyed || !s.params) return;
    const i = () => (s.isElement ? "swiper-slide" : `.${s.params.slideClass}`),
      r = e.closest(i());
    if (r) {
      let o = r.querySelector(`.${s.params.lazyPreloaderClass}`);
      !o &&
        s.isElement &&
        (r.shadowRoot
          ? (o = r.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((o = r.shadowRoot.querySelector(
                  `.${s.params.lazyPreloaderClass}`
                )),
                o && o.remove());
            })),
        o && o.remove();
    }
  },
  Ps = (s, e) => {
    if (!s.slides[e]) return;
    const i = s.slides[e].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading");
  },
  Gs = (s) => {
    if (!s || s.destroyed || !s.params) return;
    let e = s.params.lazyPreloadPrevNext;
    const i = s.slides.length;
    if (!i || !e || e < 0) return;
    e = Math.min(e, i);
    const r =
        s.params.slidesPerView === "auto"
          ? s.slidesPerViewDynamic()
          : Math.ceil(s.params.slidesPerView),
      o = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
      const p = o,
        d = [p - e];
      d.push(...Array.from({ length: e }).map((y, g) => p + r + g)),
        s.slides.forEach((y, g) => {
          d.includes(y.column) && Ps(s, g);
        });
      return;
    }
    const u = o + r - 1;
    if (s.params.rewind || s.params.loop)
      for (let p = o - e; p <= u + e; p += 1) {
        const d = ((p % i) + i) % i;
        (d < o || d > u) && Ps(s, d);
      }
    else
      for (let p = Math.max(o - e, 0); p <= Math.min(u + e, i - 1); p += 1)
        p !== o && (p > u || p < o) && Ps(s, p);
  };
function Yu(s) {
  const { slidesGrid: e, params: i } = s,
    r = s.rtlTranslate ? s.translate : -s.translate;
  let o;
  for (let u = 0; u < e.length; u += 1)
    typeof e[u + 1] != "undefined"
      ? r >= e[u] && r < e[u + 1] - (e[u + 1] - e[u]) / 2
        ? (o = u)
        : r >= e[u] && r < e[u + 1] && (o = u + 1)
      : r >= e[u] && (o = u);
  return (
    i.normalizeSlideIndex && (o < 0 || typeof o == "undefined") && (o = 0), o
  );
}
function qu(s) {
  const e = this,
    i = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: r, params: o, activeIndex: u, realIndex: p, snapIndex: d } = e;
  let y = s,
    g;
  const C = (T) => {
    let E = T - e.virtual.slidesBefore;
    return (
      E < 0 && (E = e.virtual.slides.length + E),
      E >= e.virtual.slides.length && (E -= e.virtual.slides.length),
      E
    );
  };
  if ((typeof y == "undefined" && (y = Yu(e)), r.indexOf(i) >= 0))
    g = r.indexOf(i);
  else {
    const T = Math.min(o.slidesPerGroupSkip, y);
    g = T + Math.floor((y - T) / o.slidesPerGroup);
  }
  if ((g >= r.length && (g = r.length - 1), y === u && !e.params.loop)) {
    g !== d && ((e.snapIndex = g), e.emit("snapIndexChange"));
    return;
  }
  if (y === u && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = C(y);
    return;
  }
  const x = e.grid && o.grid && o.grid.rows > 1;
  let P;
  if (e.virtual && o.virtual.enabled && o.loop) P = C(y);
  else if (x) {
    const T = e.slides.find((F) => F.column === y);
    let E = parseInt(T.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(E) && (E = Math.max(e.slides.indexOf(T), 0)),
      (P = Math.floor(E / o.grid.rows));
  } else if (e.slides[y]) {
    const T = e.slides[y].getAttribute("data-swiper-slide-index");
    T ? (P = parseInt(T, 10)) : (P = y);
  } else P = y;
  Object.assign(e, {
    previousSnapIndex: d,
    snapIndex: g,
    previousRealIndex: p,
    realIndex: P,
    previousIndex: u,
    activeIndex: y,
  }),
    e.initialized && Gs(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (p !== P && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Xu(s, e) {
  const i = this,
    r = i.params;
  let o = s.closest(`.${r.slideClass}, swiper-slide`);
  !o &&
    i.isElement &&
    e &&
    e.length > 1 &&
    e.includes(s) &&
    [...e.slice(e.indexOf(s) + 1, e.length)].forEach((d) => {
      !o && d.matches && d.matches(`.${r.slideClass}, swiper-slide`) && (o = d);
    });
  let u = !1,
    p;
  if (o) {
    for (let d = 0; d < i.slides.length; d += 1)
      if (i.slides[d] === o) {
        (u = !0), (p = d);
        break;
      }
  }
  if (o && u)
    (i.clickedSlide = o),
      i.virtual && i.params.virtual.enabled
        ? (i.clickedIndex = parseInt(
            o.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (i.clickedIndex = p);
  else {
    (i.clickedSlide = void 0), (i.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    i.clickedIndex !== void 0 &&
    i.clickedIndex !== i.activeIndex &&
    i.slideToClickedSlide();
}
var Wu = {
  updateSize: Ru,
  updateSlides: Fu,
  updateAutoHeight: Bu,
  updateSlidesOffset: Nu,
  updateSlidesProgress: Gu,
  updateProgress: Vu,
  updateSlidesClasses: Hu,
  updateActiveIndex: qu,
  updateClickedSlide: Xu,
};
function $u(s) {
  s === void 0 && (s = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: i, rtlTranslate: r, translate: o, wrapperEl: u } = e;
  if (i.virtualTranslate) return r ? -o : o;
  if (i.cssMode) return o;
  let p = Su(u, s);
  return (p += e.cssOverflowAdjustment()), r && (p = -p), p || 0;
}
function ju(s, e) {
  const i = this,
    { rtlTranslate: r, params: o, wrapperEl: u, progress: p } = i;
  let d = 0,
    y = 0;
  const g = 0;
  i.isHorizontal() ? (d = r ? -s : s) : (y = s),
    o.roundLengths && ((d = Math.floor(d)), (y = Math.floor(y))),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? d : y),
    o.cssMode
      ? (u[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
          ? -d
          : -y)
      : o.virtualTranslate ||
        (i.isHorizontal()
          ? (d -= i.cssOverflowAdjustment())
          : (y -= i.cssOverflowAdjustment()),
        (u.style.transform = `translate3d(${d}px, ${y}px, ${g}px)`));
  let C;
  const x = i.maxTranslate() - i.minTranslate();
  x === 0 ? (C = 0) : (C = (s - i.minTranslate()) / x),
    C !== p && i.updateProgress(s),
    i.emit("setTranslate", i.translate, e);
}
function Uu() {
  return -this.snapGrid[0];
}
function Ku() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Qu(s, e, i, r, o) {
  s === void 0 && (s = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    r === void 0 && (r = !0);
  const u = this,
    { params: p, wrapperEl: d } = u;
  if (u.animating && p.preventInteractionOnTransition) return !1;
  const y = u.minTranslate(),
    g = u.maxTranslate();
  let C;
  if (
    (r && s > y ? (C = y) : r && s < g ? (C = g) : (C = s),
    u.updateProgress(C),
    p.cssMode)
  ) {
    const x = u.isHorizontal();
    if (e === 0) d[x ? "scrollLeft" : "scrollTop"] = -C;
    else {
      if (!u.support.smoothScroll)
        return (
          Eo({ swiper: u, targetPosition: -C, side: x ? "left" : "top" }), !0
        );
      d.scrollTo({ [x ? "left" : "top"]: -C, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (u.setTransition(0),
        u.setTranslate(C),
        i && (u.emit("beforeTransitionStart", e, o), u.emit("transitionEnd")))
      : (u.setTransition(e),
        u.setTranslate(C),
        i && (u.emit("beforeTransitionStart", e, o), u.emit("transitionStart")),
        u.animating ||
          ((u.animating = !0),
          u.onTranslateToWrapperTransitionEnd ||
            (u.onTranslateToWrapperTransitionEnd = function (P) {
              !u ||
                u.destroyed ||
                (P.target === this &&
                  (u.wrapperEl.removeEventListener(
                    "transitionend",
                    u.onTranslateToWrapperTransitionEnd
                  ),
                  (u.onTranslateToWrapperTransitionEnd = null),
                  delete u.onTranslateToWrapperTransitionEnd,
                  (u.animating = !1),
                  i && u.emit("transitionEnd")));
            }),
          u.wrapperEl.addEventListener(
            "transitionend",
            u.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Zu = {
  getTranslate: $u,
  setTranslate: ju,
  minTranslate: Uu,
  maxTranslate: Ku,
  translateTo: Qu,
};
function Ju(s, e) {
  const i = this;
  i.params.cssMode ||
    ((i.wrapperEl.style.transitionDuration = `${s}ms`),
    (i.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
    i.emit("setTransition", s, e);
}
function Ao(s) {
  let { swiper: e, runCallbacks: i, direction: r, step: o } = s;
  const { activeIndex: u, previousIndex: p } = e;
  let d = r;
  d || (u > p ? (d = "next") : u < p ? (d = "prev") : (d = "reset")),
    e.emit(`transition${o}`),
    i && d === "reset"
      ? e.emit(`slideResetTransition${o}`)
      : i &&
        u !== p &&
        (e.emit(`slideChangeTransition${o}`),
        d === "next"
          ? e.emit(`slideNextTransition${o}`)
          : e.emit(`slidePrevTransition${o}`));
}
function ec(s, e) {
  s === void 0 && (s = !0);
  const i = this,
    { params: r } = i;
  r.cssMode ||
    (r.autoHeight && i.updateAutoHeight(),
    Ao({ swiper: i, runCallbacks: s, direction: e, step: "Start" }));
}
function tc(s, e) {
  s === void 0 && (s = !0);
  const i = this,
    { params: r } = i;
  (i.animating = !1),
    !r.cssMode &&
      (i.setTransition(0),
      Ao({ swiper: i, runCallbacks: s, direction: e, step: "End" }));
}
var rc = { setTransition: Ju, transitionStart: ec, transitionEnd: tc };
function ic(s, e, i, r, o) {
  s === void 0 && (s = 0),
    i === void 0 && (i = !0),
    typeof s == "string" && (s = parseInt(s, 10));
  const u = this;
  let p = s;
  p < 0 && (p = 0);
  const {
    params: d,
    snapGrid: y,
    slidesGrid: g,
    previousIndex: C,
    activeIndex: x,
    rtlTranslate: P,
    wrapperEl: T,
    enabled: E,
  } = u;
  if (
    (!E && !r && !o) ||
    u.destroyed ||
    (u.animating && d.preventInteractionOnTransition)
  )
    return !1;
  typeof e == "undefined" && (e = u.params.speed);
  const F = Math.min(u.params.slidesPerGroupSkip, p);
  let X = F + Math.floor((p - F) / u.params.slidesPerGroup);
  X >= y.length && (X = y.length - 1);
  const G = -y[X];
  if (d.normalizeSlideIndex)
    for (let N = 0; N < g.length; N += 1) {
      const j = -Math.floor(G * 100),
        re = Math.floor(g[N] * 100),
        R = Math.floor(g[N + 1] * 100);
      typeof g[N + 1] != "undefined"
        ? j >= re && j < R - (R - re) / 2
          ? (p = N)
          : j >= re && j < R && (p = N + 1)
        : j >= re && (p = N);
    }
  if (
    u.initialized &&
    p !== x &&
    ((!u.allowSlideNext &&
      (P
        ? G > u.translate && G > u.minTranslate()
        : G < u.translate && G < u.minTranslate())) ||
      (!u.allowSlidePrev &&
        G > u.translate &&
        G > u.maxTranslate() &&
        (x || 0) !== p))
  )
    return !1;
  p !== (C || 0) && i && u.emit("beforeSlideChangeStart"), u.updateProgress(G);
  let b;
  p > x ? (b = "next") : p < x ? (b = "prev") : (b = "reset");
  const S = u.virtual && u.params.virtual.enabled;
  if (!(S && o) && ((P && -G === u.translate) || (!P && G === u.translate)))
    return (
      u.updateActiveIndex(p),
      d.autoHeight && u.updateAutoHeight(),
      u.updateSlidesClasses(),
      d.effect !== "slide" && u.setTranslate(G),
      b !== "reset" && (u.transitionStart(i, b), u.transitionEnd(i, b)),
      !1
    );
  if (d.cssMode) {
    const N = u.isHorizontal(),
      j = P ? G : -G;
    if (e === 0)
      S &&
        ((u.wrapperEl.style.scrollSnapType = "none"),
        (u._immediateVirtual = !0)),
        S && !u._cssModeVirtualInitialSet && u.params.initialSlide > 0
          ? ((u._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              T[N ? "scrollLeft" : "scrollTop"] = j;
            }))
          : (T[N ? "scrollLeft" : "scrollTop"] = j),
        S &&
          requestAnimationFrame(() => {
            (u.wrapperEl.style.scrollSnapType = ""), (u._immediateVirtual = !1);
          });
    else {
      if (!u.support.smoothScroll)
        return (
          Eo({ swiper: u, targetPosition: j, side: N ? "left" : "top" }), !0
        );
      T.scrollTo({ [N ? "left" : "top"]: j, behavior: "smooth" });
    }
    return !0;
  }
  const q = Oo().isSafari;
  return (
    S && !o && q && u.isElement && u.virtual.update(!1, !1, p),
    u.setTransition(e),
    u.setTranslate(G),
    u.updateActiveIndex(p),
    u.updateSlidesClasses(),
    u.emit("beforeTransitionStart", e, r),
    u.transitionStart(i, b),
    e === 0
      ? u.transitionEnd(i, b)
      : u.animating ||
        ((u.animating = !0),
        u.onSlideToWrapperTransitionEnd ||
          (u.onSlideToWrapperTransitionEnd = function (j) {
            !u ||
              u.destroyed ||
              (j.target === this &&
                (u.wrapperEl.removeEventListener(
                  "transitionend",
                  u.onSlideToWrapperTransitionEnd
                ),
                (u.onSlideToWrapperTransitionEnd = null),
                delete u.onSlideToWrapperTransitionEnd,
                u.transitionEnd(i, b)));
          }),
        u.wrapperEl.addEventListener(
          "transitionend",
          u.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function nc(s, e, i, r) {
  s === void 0 && (s = 0),
    i === void 0 && (i = !0),
    typeof s == "string" && (s = parseInt(s, 10));
  const o = this;
  if (o.destroyed) return;
  typeof e == "undefined" && (e = o.params.speed);
  const u = o.grid && o.params.grid && o.params.grid.rows > 1;
  let p = s;
  if (o.params.loop)
    if (o.virtual && o.params.virtual.enabled) p = p + o.virtual.slidesBefore;
    else {
      let d;
      if (u) {
        const P = p * o.params.grid.rows;
        d = o.slides.find(
          (T) => T.getAttribute("data-swiper-slide-index") * 1 === P
        ).column;
      } else d = o.getSlideIndexByData(p);
      const y = u
          ? Math.ceil(o.slides.length / o.params.grid.rows)
          : o.slides.length,
        { centeredSlides: g } = o.params;
      let C = o.params.slidesPerView;
      C === "auto"
        ? (C = o.slidesPerViewDynamic())
        : ((C = Math.ceil(parseFloat(o.params.slidesPerView, 10))),
          g && C % 2 === 0 && (C = C + 1));
      let x = y - d < C;
      if (
        (g && (x = x || d < Math.ceil(C / 2)),
        r && g && o.params.slidesPerView !== "auto" && !u && (x = !1),
        x)
      ) {
        const P = g
          ? d < o.activeIndex
            ? "prev"
            : "next"
          : d - o.activeIndex - 1 < o.params.slidesPerView
          ? "next"
          : "prev";
        o.loopFix({
          direction: P,
          slideTo: !0,
          activeSlideIndex: P === "next" ? d + 1 : d - y + 1,
          slideRealIndex: P === "next" ? o.realIndex : void 0,
        });
      }
      if (u) {
        const P = p * o.params.grid.rows;
        p = o.slides.find(
          (T) => T.getAttribute("data-swiper-slide-index") * 1 === P
        ).column;
      } else p = o.getSlideIndexByData(p);
    }
  return (
    requestAnimationFrame(() => {
      o.slideTo(p, e, i, r);
    }),
    o
  );
}
function sc(s, e, i) {
  e === void 0 && (e = !0);
  const r = this,
    { enabled: o, params: u, animating: p } = r;
  if (!o || r.destroyed) return r;
  typeof s == "undefined" && (s = r.params.speed);
  let d = u.slidesPerGroup;
  u.slidesPerView === "auto" &&
    u.slidesPerGroup === 1 &&
    u.slidesPerGroupAuto &&
    (d = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const y = r.activeIndex < u.slidesPerGroupSkip ? 1 : d,
    g = r.virtual && u.virtual.enabled;
  if (u.loop) {
    if (p && !g && u.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && u.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + y, s, e, i);
        }),
        !0
      );
  }
  return u.rewind && r.isEnd
    ? r.slideTo(0, s, e, i)
    : r.slideTo(r.activeIndex + y, s, e, i);
}
function ac(s, e, i) {
  e === void 0 && (e = !0);
  const r = this,
    {
      params: o,
      snapGrid: u,
      slidesGrid: p,
      rtlTranslate: d,
      enabled: y,
      animating: g,
    } = r;
  if (!y || r.destroyed) return r;
  typeof s == "undefined" && (s = r.params.speed);
  const C = r.virtual && o.virtual.enabled;
  if (o.loop) {
    if (g && !C && o.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const x = d ? r.translate : -r.translate;
  function P(b) {
    return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
  }
  const T = P(x),
    E = u.map((b) => P(b)),
    F = o.freeMode && o.freeMode.enabled;
  let X = u[E.indexOf(T) - 1];
  if (typeof X == "undefined" && (o.cssMode || F)) {
    let b;
    u.forEach((S, A) => {
      T >= S && (b = A);
    }),
      typeof b != "undefined" && (X = F ? u[b] : u[b > 0 ? b - 1 : b]);
  }
  let G = 0;
  if (
    (typeof X != "undefined" &&
      ((G = p.indexOf(X)),
      G < 0 && (G = r.activeIndex - 1),
      o.slidesPerView === "auto" &&
        o.slidesPerGroup === 1 &&
        o.slidesPerGroupAuto &&
        ((G = G - r.slidesPerViewDynamic("previous", !0) + 1),
        (G = Math.max(G, 0)))),
    o.rewind && r.isBeginning)
  ) {
    const b =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(b, s, e, i);
  } else if (o.loop && r.activeIndex === 0 && o.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(G, s, e, i);
      }),
      !0
    );
  return r.slideTo(G, s, e, i);
}
function oc(s, e, i) {
  e === void 0 && (e = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof s == "undefined" && (s = r.params.speed),
      r.slideTo(r.activeIndex, s, e, i)
    );
}
function lc(s, e, i, r) {
  e === void 0 && (e = !0), r === void 0 && (r = 0.5);
  const o = this;
  if (o.destroyed) return;
  typeof s == "undefined" && (s = o.params.speed);
  let u = o.activeIndex;
  const p = Math.min(o.params.slidesPerGroupSkip, u),
    d = p + Math.floor((u - p) / o.params.slidesPerGroup),
    y = o.rtlTranslate ? o.translate : -o.translate;
  if (y >= o.snapGrid[d]) {
    const g = o.snapGrid[d],
      C = o.snapGrid[d + 1];
    y - g > (C - g) * r && (u += o.params.slidesPerGroup);
  } else {
    const g = o.snapGrid[d - 1],
      C = o.snapGrid[d];
    y - g <= (C - g) * r && (u -= o.params.slidesPerGroup);
  }
  return (
    (u = Math.max(u, 0)),
    (u = Math.min(u, o.slidesGrid.length - 1)),
    o.slideTo(u, s, e, i)
  );
}
function uc() {
  const s = this;
  if (s.destroyed) return;
  const { params: e, slidesEl: i } = s,
    r = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
  let o = s.clickedIndex,
    u;
  const p = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (s.animating) return;
    (u = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? o < s.loopedSlides - r / 2 ||
          o > s.slides.length - s.loopedSlides + r / 2
          ? (s.loopFix(),
            (o = s.getSlideIndex(
              Dr(i, `${p}[data-swiper-slide-index="${u}"]`)[0]
            )),
            Bs(() => {
              s.slideTo(o);
            }))
          : s.slideTo(o)
        : o > s.slides.length - r
        ? (s.loopFix(),
          (o = s.getSlideIndex(
            Dr(i, `${p}[data-swiper-slide-index="${u}"]`)[0]
          )),
          Bs(() => {
            s.slideTo(o);
          }))
        : s.slideTo(o);
  } else s.slideTo(o);
}
var cc = {
  slideTo: ic,
  slideToLoop: nc,
  slideNext: sc,
  slidePrev: ac,
  slideReset: oc,
  slideToClosest: lc,
  slideToClickedSlide: uc,
};
function fc(s, e) {
  const i = this,
    { params: r, slidesEl: o } = i;
  if (!r.loop || (i.virtual && i.params.virtual.enabled)) return;
  const u = () => {
      Dr(o, `.${r.slideClass}, swiper-slide`).forEach((P, T) => {
        P.setAttribute("data-swiper-slide-index", T);
      });
    },
    p = i.grid && r.grid && r.grid.rows > 1,
    d = r.slidesPerGroup * (p ? r.grid.rows : 1),
    y = i.slides.length % d !== 0,
    g = p && i.slides.length % r.grid.rows !== 0,
    C = (x) => {
      for (let P = 0; P < x; P += 1) {
        const T = i.isElement
          ? Wn("swiper-slide", [r.slideBlankClass])
          : Wn("div", [r.slideClass, r.slideBlankClass]);
        i.slidesEl.append(T);
      }
    };
  if (y) {
    if (r.loopAddBlankSlides) {
      const x = d - (i.slides.length % d);
      C(x), i.recalcSlides(), i.updateSlides();
    } else
      Xn(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    u();
  } else if (g) {
    if (r.loopAddBlankSlides) {
      const x = r.grid.rows - (i.slides.length % r.grid.rows);
      C(x), i.recalcSlides(), i.updateSlides();
    } else
      Xn(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    u();
  } else u();
  i.loopFix({
    slideRealIndex: s,
    direction: r.centeredSlides ? void 0 : "next",
    initial: e,
  });
}
function dc(s) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: r,
    setTranslate: o,
    activeSlideIndex: u,
    initial: p,
    byController: d,
    byMousewheel: y,
  } = s === void 0 ? {} : s;
  const g = this;
  if (!g.params.loop) return;
  g.emit("beforeLoopFix");
  const {
      slides: C,
      allowSlidePrev: x,
      allowSlideNext: P,
      slidesEl: T,
      params: E,
    } = g,
    { centeredSlides: F, initialSlide: X } = E;
  if (
    ((g.allowSlidePrev = !0),
    (g.allowSlideNext = !0),
    g.virtual && E.virtual.enabled)
  ) {
    i &&
      (!E.centeredSlides && g.snapIndex === 0
        ? g.slideTo(g.virtual.slides.length, 0, !1, !0)
        : E.centeredSlides && g.snapIndex < E.slidesPerView
        ? g.slideTo(g.virtual.slides.length + g.snapIndex, 0, !1, !0)
        : g.snapIndex === g.snapGrid.length - 1 &&
          g.slideTo(g.virtual.slidesBefore, 0, !1, !0)),
      (g.allowSlidePrev = x),
      (g.allowSlideNext = P),
      g.emit("loopFix");
    return;
  }
  let G = E.slidesPerView;
  G === "auto"
    ? (G = g.slidesPerViewDynamic())
    : ((G = Math.ceil(parseFloat(E.slidesPerView, 10))),
      F && G % 2 === 0 && (G = G + 1));
  const b = E.slidesPerGroupAuto ? G : E.slidesPerGroup;
  let S = b;
  S % b !== 0 && (S += b - (S % b)),
    (S += E.loopAdditionalSlides),
    (g.loopedSlides = S);
  const A = g.grid && E.grid && E.grid.rows > 1;
  C.length < G + S || (g.params.effect === "cards" && C.length < G + S * 2)
    ? Xn(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : A &&
      E.grid.fill === "row" &&
      Xn(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const H = [],
    q = [],
    N = A ? Math.ceil(C.length / E.grid.rows) : C.length,
    j = p && N - X < G && !F;
  let re = j ? X : g.activeIndex;
  typeof u == "undefined"
    ? (u = g.getSlideIndex(
        C.find((ie) => ie.classList.contains(E.slideActiveClass))
      ))
    : (re = u);
  const R = r === "next" || !r,
    z = r === "prev" || !r;
  let L = 0,
    Q = 0;
  const ce =
    (A ? C[u].column : u) + (F && typeof o == "undefined" ? -G / 2 + 0.5 : 0);
  if (ce < S) {
    L = Math.max(S - ce, b);
    for (let ie = 0; ie < S - ce; ie += 1) {
      const de = ie - Math.floor(ie / N) * N;
      if (A) {
        const ne = N - de - 1;
        for (let se = C.length - 1; se >= 0; se -= 1)
          C[se].column === ne && H.push(se);
      } else H.push(N - de - 1);
    }
  } else if (ce + G > N - S) {
    (Q = Math.max(ce - (N - S * 2), b)), j && (Q = Math.max(Q, G - N + X + 1));
    for (let ie = 0; ie < Q; ie += 1) {
      const de = ie - Math.floor(ie / N) * N;
      A
        ? C.forEach((ne, se) => {
            ne.column === de && q.push(se);
          })
        : q.push(de);
    }
  }
  if (
    ((g.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      g.__preventObserver__ = !1;
    }),
    g.params.effect === "cards" &&
      C.length < G + S * 2 &&
      (q.includes(u) && q.splice(q.indexOf(u), 1),
      H.includes(u) && H.splice(H.indexOf(u), 1)),
    z &&
      H.forEach((ie) => {
        (C[ie].swiperLoopMoveDOM = !0),
          T.prepend(C[ie]),
          (C[ie].swiperLoopMoveDOM = !1);
      }),
    R &&
      q.forEach((ie) => {
        (C[ie].swiperLoopMoveDOM = !0),
          T.append(C[ie]),
          (C[ie].swiperLoopMoveDOM = !1);
      }),
    g.recalcSlides(),
    E.slidesPerView === "auto"
      ? g.updateSlides()
      : A &&
        ((H.length > 0 && z) || (q.length > 0 && R)) &&
        g.slides.forEach((ie, de) => {
          g.grid.updateSlide(de, ie, g.slides);
        }),
    E.watchSlidesProgress && g.updateSlidesOffset(),
    i)
  ) {
    if (H.length > 0 && z) {
      if (typeof e == "undefined") {
        const ie = g.slidesGrid[re],
          ne = g.slidesGrid[re + L] - ie;
        y
          ? g.setTranslate(g.translate - ne)
          : (g.slideTo(re + Math.ceil(L), 0, !1, !0),
            o &&
              ((g.touchEventsData.startTranslate =
                g.touchEventsData.startTranslate - ne),
              (g.touchEventsData.currentTranslate =
                g.touchEventsData.currentTranslate - ne)));
      } else if (o) {
        const ie = A ? H.length / E.grid.rows : H.length;
        g.slideTo(g.activeIndex + ie, 0, !1, !0),
          (g.touchEventsData.currentTranslate = g.translate);
      }
    } else if (q.length > 0 && R)
      if (typeof e == "undefined") {
        const ie = g.slidesGrid[re],
          ne = g.slidesGrid[re - Q] - ie;
        y
          ? g.setTranslate(g.translate - ne)
          : (g.slideTo(re - Q, 0, !1, !0),
            o &&
              ((g.touchEventsData.startTranslate =
                g.touchEventsData.startTranslate - ne),
              (g.touchEventsData.currentTranslate =
                g.touchEventsData.currentTranslate - ne)));
      } else {
        const ie = A ? q.length / E.grid.rows : q.length;
        g.slideTo(g.activeIndex - ie, 0, !1, !0);
      }
  }
  if (
    ((g.allowSlidePrev = x),
    (g.allowSlideNext = P),
    g.controller && g.controller.control && !d)
  ) {
    const ie = {
      slideRealIndex: e,
      direction: r,
      setTranslate: o,
      activeSlideIndex: u,
      byController: !0,
    };
    Array.isArray(g.controller.control)
      ? g.controller.control.forEach((de) => {
          !de.destroyed &&
            de.params.loop &&
            de.loopFix({
              ...ie,
              slideTo: de.params.slidesPerView === E.slidesPerView ? i : !1,
            });
        })
      : g.controller.control instanceof g.constructor &&
        g.controller.control.params.loop &&
        g.controller.control.loopFix({
          ...ie,
          slideTo:
            g.controller.control.params.slidesPerView === E.slidesPerView
              ? i
              : !1,
        });
  }
  g.emit("loopFix");
}
function pc() {
  const s = this,
    { params: e, slidesEl: i } = s;
  if (!e.loop || !i || (s.virtual && s.params.virtual.enabled)) return;
  s.recalcSlides();
  const r = [];
  s.slides.forEach((o) => {
    const u =
      typeof o.swiperSlideIndex == "undefined"
        ? o.getAttribute("data-swiper-slide-index") * 1
        : o.swiperSlideIndex;
    r[u] = o;
  }),
    s.slides.forEach((o) => {
      o.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((o) => {
      i.append(o);
    }),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0);
}
var hc = { loopCreate: fc, loopFix: dc, loopDestroy: pc };
function gc(s) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (i.style.cursor = "move"),
    (i.style.cursor = s ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function mc() {
  const s = this;
  (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode ||
    (s.isElement && (s.__preventObserver__ = !0),
    (s[
      s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      }));
}
var _c = { setGrabCursor: gc, unsetGrabCursor: mc };
function vc(s, e) {
  e === void 0 && (e = this);
  function i(r) {
    if (!r || r === zr() || r === jt()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const o = r.closest(s);
    return !o && !r.getRootNode ? null : o || i(r.getRootNode().host);
  }
  return i(e);
}
function Ja(s, e, i) {
  const r = jt(),
    { params: o } = s,
    u = o.edgeSwipeDetection,
    p = o.edgeSwipeThreshold;
  return u && (i <= p || i >= r.innerWidth - p)
    ? u === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function bc(s) {
  const e = this,
    i = zr();
  let r = s;
  r.originalEvent && (r = r.originalEvent);
  const o = e.touchEventsData;
  if (r.type === "pointerdown") {
    if (o.pointerId !== null && o.pointerId !== r.pointerId) return;
    o.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (o.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Ja(e, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: u, touches: p, enabled: d } = e;
  if (
    !d ||
    (!u.simulateTouch && r.pointerType === "mouse") ||
    (e.animating && u.preventInteractionOnTransition)
  )
    return;
  !e.animating && u.cssMode && u.loop && e.loopFix();
  let y = r.target;
  if (
    (u.touchEventsTarget === "wrapper" && !Pu(y, e.wrapperEl)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (o.isTouched && o.isMoved)
  )
    return;
  const g = !!u.noSwipingClass && u.noSwipingClass !== "",
    C = r.composedPath ? r.composedPath() : r.path;
  g && r.target && r.target.shadowRoot && C && (y = C[0]);
  const x = u.noSwipingSelector ? u.noSwipingSelector : `.${u.noSwipingClass}`,
    P = !!(r.target && r.target.shadowRoot);
  if (u.noSwiping && (P ? vc(x, y) : y.closest(x))) {
    e.allowClick = !0;
    return;
  }
  if (u.swipeHandler && !y.closest(u.swipeHandler)) return;
  (p.currentX = r.pageX), (p.currentY = r.pageY);
  const T = p.currentX,
    E = p.currentY;
  if (!Ja(e, r, T)) return;
  Object.assign(o, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (p.startX = T),
    (p.startY = E),
    (o.touchStartTime = qn()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    u.threshold > 0 && (o.allowThresholdMove = !1);
  let F = !0;
  y.matches(o.focusableElements) &&
    ((F = !1), y.nodeName === "SELECT" && (o.isTouched = !1)),
    i.activeElement &&
      i.activeElement.matches(o.focusableElements) &&
      i.activeElement !== y &&
      (r.pointerType === "mouse" ||
        (r.pointerType !== "mouse" && !y.matches(o.focusableElements))) &&
      i.activeElement.blur();
  const X = F && e.allowTouchMove && u.touchStartPreventDefault;
  (u.touchStartForcePreventDefault || X) &&
    !y.isContentEditable &&
    r.preventDefault(),
    u.freeMode &&
      u.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !u.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", r);
}
function yc(s) {
  const e = zr(),
    i = this,
    r = i.touchEventsData,
    { params: o, touches: u, rtlTranslate: p, enabled: d } = i;
  if (!d || (!o.simulateTouch && s.pointerType === "mouse")) return;
  let y = s;
  if (
    (y.originalEvent && (y = y.originalEvent),
    y.type === "pointermove" &&
      (r.touchId !== null || y.pointerId !== r.pointerId))
  )
    return;
  let g;
  if (y.type === "touchmove") {
    if (
      ((g = [...y.changedTouches].find((q) => q.identifier === r.touchId)),
      !g || g.identifier !== r.touchId)
    )
      return;
  } else g = y;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", y);
    return;
  }
  const C = g.pageX,
    x = g.pageY;
  if (y.preventedByNestedSwiper) {
    (u.startX = C), (u.startY = x);
    return;
  }
  if (!i.allowTouchMove) {
    y.target.matches(r.focusableElements) || (i.allowClick = !1),
      r.isTouched &&
        (Object.assign(u, { startX: C, startY: x, currentX: C, currentY: x }),
        (r.touchStartTime = qn()));
    return;
  }
  if (o.touchReleaseOnEdges && !o.loop)
    if (i.isVertical()) {
      if (
        (x < u.startY && i.translate <= i.maxTranslate()) ||
        (x > u.startY && i.translate >= i.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else {
      if (
        p &&
        ((C > u.startX && -i.translate <= i.maxTranslate()) ||
          (C < u.startX && -i.translate >= i.minTranslate()))
      )
        return;
      if (
        !p &&
        ((C < u.startX && i.translate <= i.maxTranslate()) ||
          (C > u.startX && i.translate >= i.minTranslate()))
      )
        return;
    }
  if (
    (e.activeElement &&
      e.activeElement.matches(r.focusableElements) &&
      e.activeElement !== y.target &&
      y.pointerType !== "mouse" &&
      e.activeElement.blur(),
    e.activeElement &&
      y.target === e.activeElement &&
      y.target.matches(r.focusableElements))
  ) {
    (r.isMoved = !0), (i.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && i.emit("touchMove", y),
    (u.previousX = u.currentX),
    (u.previousY = u.currentY),
    (u.currentX = C),
    (u.currentY = x);
  const P = u.currentX - u.startX,
    T = u.currentY - u.startY;
  if (i.params.threshold && Math.sqrt(P ** 2 + T ** 2) < i.params.threshold)
    return;
  if (typeof r.isScrolling == "undefined") {
    let q;
    (i.isHorizontal() && u.currentY === u.startY) ||
    (i.isVertical() && u.currentX === u.startX)
      ? (r.isScrolling = !1)
      : P * P + T * T >= 25 &&
        ((q = (Math.atan2(Math.abs(T), Math.abs(P)) * 180) / Math.PI),
        (r.isScrolling = i.isHorizontal()
          ? q > o.touchAngle
          : 90 - q > o.touchAngle));
  }
  if (
    (r.isScrolling && i.emit("touchMoveOpposite", y),
    typeof r.startMoving == "undefined" &&
      (u.currentX !== u.startX || u.currentY !== u.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (y.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (i.allowClick = !1),
    !o.cssMode && y.cancelable && y.preventDefault(),
    o.touchMoveStopPropagation && !o.nested && y.stopPropagation();
  let E = i.isHorizontal() ? P : T,
    F = i.isHorizontal() ? u.currentX - u.previousX : u.currentY - u.previousY;
  o.oneWayMovement &&
    ((E = Math.abs(E) * (p ? 1 : -1)), (F = Math.abs(F) * (p ? 1 : -1))),
    (u.diff = E),
    (E *= o.touchRatio),
    p && ((E = -E), (F = -F));
  const X = i.touchesDirection;
  (i.swipeDirection = E > 0 ? "prev" : "next"),
    (i.touchesDirection = F > 0 ? "prev" : "next");
  const G = i.params.loop && !o.cssMode,
    b =
      (i.touchesDirection === "next" && i.allowSlideNext) ||
      (i.touchesDirection === "prev" && i.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (G && b && i.loopFix({ direction: i.swipeDirection }),
      (r.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating)
    ) {
      const q = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      i.wrapperEl.dispatchEvent(q);
    }
    (r.allowMomentumBounce = !1),
      o.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit("sliderFirstMove", y);
  }
  let S;
  if (
    (new Date().getTime(),
    o._loopSwapReset !== !1 &&
      r.isMoved &&
      r.allowThresholdMove &&
      X !== i.touchesDirection &&
      G &&
      b &&
      Math.abs(E) >= 1)
  ) {
    Object.assign(u, {
      startX: C,
      startY: x,
      currentX: C,
      currentY: x,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  i.emit("sliderMove", y),
    (r.isMoved = !0),
    (r.currentTranslate = E + r.startTranslate);
  let A = !0,
    H = o.resistanceRatio;
  if (
    (o.touchReleaseOnEdges && (H = 0),
    E > 0
      ? (G &&
          b &&
          !S &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (o.centeredSlides
              ? i.minTranslate() -
                i.slidesSizesGrid[i.activeIndex + 1] -
                (o.slidesPerView !== "auto" &&
                i.slides.length - o.slidesPerView >= 2
                  ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween
                  : 0) -
                i.params.spaceBetween
              : i.minTranslate()) &&
          i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > i.minTranslate() &&
          ((A = !1),
          o.resistance &&
            (r.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + r.startTranslate + E) ** H)))
      : E < 0 &&
        (G &&
          b &&
          !S &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (o.centeredSlides
              ? i.maxTranslate() +
                i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
                i.params.spaceBetween +
                (o.slidesPerView !== "auto" &&
                i.slides.length - o.slidesPerView >= 2
                  ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
                    i.params.spaceBetween
                  : 0)
              : i.maxTranslate()) &&
          i.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              i.slides.length -
              (o.slidesPerView === "auto"
                ? i.slidesPerViewDynamic()
                : Math.ceil(parseFloat(o.slidesPerView, 10))),
          }),
        r.currentTranslate < i.maxTranslate() &&
          ((A = !1),
          o.resistance &&
            (r.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - r.startTranslate - E) ** H))),
    A && (y.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !i.allowSlidePrev &&
      !i.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    o.threshold > 0)
  )
    if (Math.abs(E) > o.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (u.startX = u.currentX),
          (u.startY = u.currentY),
          (r.currentTranslate = r.startTranslate),
          (u.diff = i.isHorizontal()
            ? u.currentX - u.startX
            : u.currentY - u.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !o.followFinger ||
    o.cssMode ||
    (((o.freeMode && o.freeMode.enabled && i.freeMode) ||
      o.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    o.freeMode && o.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(r.currentTranslate),
    i.setTranslate(r.currentTranslate));
}
function wc(s) {
  const e = this,
    i = e.touchEventsData;
  let r = s;
  r.originalEvent && (r = r.originalEvent);
  let o;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((o = [...r.changedTouches].find((H) => H.identifier === i.touchId)),
      !o || o.identifier !== i.touchId)
    )
      return;
  } else {
    if (i.touchId !== null || r.pointerId !== i.pointerId) return;
    o = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  (i.pointerId = null), (i.touchId = null);
  const {
    params: p,
    touches: d,
    rtlTranslate: y,
    slidesGrid: g,
    enabled: C,
  } = e;
  if (!C || (!p.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (i.allowTouchCallbacks && e.emit("touchEnd", r),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && p.grabCursor && e.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1);
    return;
  }
  p.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const x = qn(),
    P = x - i.touchStartTime;
  if (e.allowClick) {
    const H = r.path || (r.composedPath && r.composedPath());
    e.updateClickedSlide((H && H[0]) || r.target, H),
      e.emit("tap click", r),
      P < 300 &&
        x - i.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", r);
  }
  if (
    ((i.lastClickTime = qn()),
    Bs(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !e.swipeDirection ||
      (d.diff === 0 && !i.loopSwapReset) ||
      (i.currentTranslate === i.startTranslate && !i.loopSwapReset))
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let T;
  if (
    (p.followFinger
      ? (T = y ? e.translate : -e.translate)
      : (T = -i.currentTranslate),
    p.cssMode)
  )
    return;
  if (p.freeMode && p.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: T });
    return;
  }
  const E = T >= -e.maxTranslate() && !e.params.loop;
  let F = 0,
    X = e.slidesSizesGrid[0];
  for (
    let H = 0;
    H < g.length;
    H += H < p.slidesPerGroupSkip ? 1 : p.slidesPerGroup
  ) {
    const q = H < p.slidesPerGroupSkip - 1 ? 1 : p.slidesPerGroup;
    typeof g[H + q] != "undefined"
      ? (E || (T >= g[H] && T < g[H + q])) && ((F = H), (X = g[H + q] - g[H]))
      : (E || T >= g[H]) && ((F = H), (X = g[g.length - 1] - g[g.length - 2]));
  }
  let G = null,
    b = null;
  p.rewind &&
    (e.isBeginning
      ? (b =
          p.virtual && p.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (G = 0));
  const S = (T - g[F]) / X,
    A = F < p.slidesPerGroupSkip - 1 ? 1 : p.slidesPerGroup;
  if (P > p.longSwipesMs) {
    if (!p.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (S >= p.longSwipesRatio
        ? e.slideTo(p.rewind && e.isEnd ? G : F + A)
        : e.slideTo(F)),
      e.swipeDirection === "prev" &&
        (S > 1 - p.longSwipesRatio
          ? e.slideTo(F + A)
          : b !== null && S < 0 && Math.abs(S) > p.longSwipesRatio
          ? e.slideTo(b)
          : e.slideTo(F));
  } else {
    if (!p.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (r.target === e.navigation.nextEl || r.target === e.navigation.prevEl)
      ? r.target === e.navigation.nextEl
        ? e.slideTo(F + A)
        : e.slideTo(F)
      : (e.swipeDirection === "next" && e.slideTo(G !== null ? G : F + A),
        e.swipeDirection === "prev" && e.slideTo(b !== null ? b : F));
  }
}
function eo() {
  const s = this,
    { params: e, el: i } = s;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && s.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: o, snapGrid: u } = s,
    p = s.virtual && s.params.virtual.enabled;
  (s.allowSlideNext = !0),
    (s.allowSlidePrev = !0),
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses();
  const d = p && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  s.isEnd &&
  !s.isBeginning &&
  !s.params.centeredSlides &&
  !d
    ? s.slideTo(s.slides.length - 1, 0, !1, !0)
    : s.params.loop && !p
    ? s.slideToLoop(s.realIndex, 0, !1, !0)
    : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay &&
      s.autoplay.running &&
      s.autoplay.paused &&
      (clearTimeout(s.autoplay.resizeTimeout),
      (s.autoplay.resizeTimeout = setTimeout(() => {
        s.autoplay &&
          s.autoplay.running &&
          s.autoplay.paused &&
          s.autoplay.resume();
      }, 500))),
    (s.allowSlidePrev = o),
    (s.allowSlideNext = r),
    s.params.watchOverflow && u !== s.snapGrid && s.checkOverflow();
}
function xc(s) {
  const e = this;
  !e.enabled ||
    e.allowClick ||
    (e.params.preventClicks && s.preventDefault(),
    e.params.preventClicksPropagation &&
      e.animating &&
      (s.stopPropagation(), s.stopImmediatePropagation()));
}
function Tc() {
  const s = this,
    { wrapperEl: e, rtlTranslate: i, enabled: r } = s;
  if (!r) return;
  (s.previousTranslate = s.translate),
    s.isHorizontal()
      ? (s.translate = -e.scrollLeft)
      : (s.translate = -e.scrollTop),
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
  let o;
  const u = s.maxTranslate() - s.minTranslate();
  u === 0 ? (o = 0) : (o = (s.translate - s.minTranslate()) / u),
    o !== s.progress && s.updateProgress(i ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1);
}
function Sc(s) {
  const e = this;
  Fn(e, s.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function Cc() {
  const s = this;
  s.documentTouchHandlerProceeded ||
    ((s.documentTouchHandlerProceeded = !0),
    s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
}
const Lo = (s, e) => {
  const i = zr(),
    { params: r, el: o, wrapperEl: u, device: p } = s,
    d = !!r.nested,
    y = e === "on" ? "addEventListener" : "removeEventListener",
    g = e;
  !o ||
    typeof o == "string" ||
    (i[y]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: d }),
    o[y]("touchstart", s.onTouchStart, { passive: !1 }),
    o[y]("pointerdown", s.onTouchStart, { passive: !1 }),
    i[y]("touchmove", s.onTouchMove, { passive: !1, capture: d }),
    i[y]("pointermove", s.onTouchMove, { passive: !1, capture: d }),
    i[y]("touchend", s.onTouchEnd, { passive: !0 }),
    i[y]("pointerup", s.onTouchEnd, { passive: !0 }),
    i[y]("pointercancel", s.onTouchEnd, { passive: !0 }),
    i[y]("touchcancel", s.onTouchEnd, { passive: !0 }),
    i[y]("pointerout", s.onTouchEnd, { passive: !0 }),
    i[y]("pointerleave", s.onTouchEnd, { passive: !0 }),
    i[y]("contextmenu", s.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      o[y]("click", s.onClick, !0),
    r.cssMode && u[y]("scroll", s.onScroll),
    r.updateOnWindowResize
      ? s[g](
          p.ios || p.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          eo,
          !0
        )
      : s[g]("observerUpdate", eo, !0),
    o[y]("load", s.onLoad, { capture: !0 }));
};
function Ec() {
  const s = this,
    { params: e } = s;
  (s.onTouchStart = bc.bind(s)),
    (s.onTouchMove = yc.bind(s)),
    (s.onTouchEnd = wc.bind(s)),
    (s.onDocumentTouchStart = Cc.bind(s)),
    e.cssMode && (s.onScroll = Tc.bind(s)),
    (s.onClick = xc.bind(s)),
    (s.onLoad = Sc.bind(s)),
    Lo(s, "on");
}
function Pc() {
  Lo(this, "off");
}
var kc = { attachEvents: Ec, detachEvents: Pc };
const to = (s, e) => s.grid && e.grid && e.grid.rows > 1;
function Mc() {
  const s = this,
    { realIndex: e, initialized: i, params: r, el: o } = s,
    u = r.breakpoints;
  if (!u || (u && Object.keys(u).length === 0)) return;
  const p = zr(),
    d =
      r.breakpointsBase === "window" || !r.breakpointsBase
        ? r.breakpointsBase
        : "container",
    y =
      ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase
        ? s.el
        : p.querySelector(r.breakpointsBase),
    g = s.getBreakpoint(u, d, y);
  if (!g || s.currentBreakpoint === g) return;
  const x = (g in u ? u[g] : void 0) || s.originalParams,
    P = to(s, r),
    T = to(s, x),
    E = s.params.grabCursor,
    F = x.grabCursor,
    X = r.enabled;
  P && !T
    ? (o.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      s.emitContainerClasses())
    : !P &&
      T &&
      (o.classList.add(`${r.containerModifierClass}grid`),
      ((x.grid.fill && x.grid.fill === "column") ||
        (!x.grid.fill && r.grid.fill === "column")) &&
        o.classList.add(`${r.containerModifierClass}grid-column`),
      s.emitContainerClasses()),
    E && !F ? s.unsetGrabCursor() : !E && F && s.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((q) => {
      if (typeof x[q] == "undefined") return;
      const N = r[q] && r[q].enabled,
        j = x[q] && x[q].enabled;
      N && !j && s[q].disable(), !N && j && s[q].enable();
    });
  const G = x.direction && x.direction !== r.direction,
    b = r.loop && (x.slidesPerView !== r.slidesPerView || G),
    S = r.loop;
  G && i && s.changeDirection(), dr(s.params, x);
  const A = s.params.enabled,
    H = s.params.loop;
  Object.assign(s, {
    allowTouchMove: s.params.allowTouchMove,
    allowSlideNext: s.params.allowSlideNext,
    allowSlidePrev: s.params.allowSlidePrev,
  }),
    X && !A ? s.disable() : !X && A && s.enable(),
    (s.currentBreakpoint = g),
    s.emit("_beforeBreakpoint", x),
    i &&
      (b
        ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
        : !S && H
        ? (s.loopCreate(e), s.updateSlides())
        : S && !H && s.loopDestroy()),
    s.emit("breakpoint", x);
}
function Oc(s, e, i) {
  if ((e === void 0 && (e = "window"), !s || (e === "container" && !i))) return;
  let r = !1;
  const o = jt(),
    u = e === "window" ? o.innerHeight : i.clientHeight,
    p = Object.keys(s).map((d) => {
      if (typeof d == "string" && d.indexOf("@") === 0) {
        const y = parseFloat(d.substr(1));
        return { value: u * y, point: d };
      }
      return { value: d, point: d };
    });
  p.sort((d, y) => parseInt(d.value, 10) - parseInt(y.value, 10));
  for (let d = 0; d < p.length; d += 1) {
    const { point: y, value: g } = p[d];
    e === "window"
      ? o.matchMedia(`(min-width: ${g}px)`).matches && (r = y)
      : g <= i.clientWidth && (r = y);
  }
  return r || "max";
}
var Ac = { setBreakpoint: Mc, getBreakpoint: Oc };
function Lc(s, e) {
  const i = [];
  return (
    s.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((o) => {
            r[o] && i.push(e + o);
          })
        : typeof r == "string" && i.push(e + r);
    }),
    i
  );
}
function Dc() {
  const s = this,
    { classNames: e, params: i, rtl: r, el: o, device: u } = s,
    p = Lc(
      [
        "initialized",
        i.direction,
        { "free-mode": s.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: r },
        { grid: i.grid && i.grid.rows > 1 },
        {
          "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column",
        },
        { android: u.android },
        { ios: u.ios },
        { "css-mode": i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { "watch-progress": i.watchSlidesProgress },
      ],
      i.containerModifierClass
    );
  e.push(...p), o.classList.add(...e), s.emitContainerClasses();
}
function Ic() {
  const s = this,
    { el: e, classNames: i } = s;
  !e ||
    typeof e == "string" ||
    (e.classList.remove(...i), s.emitContainerClasses());
}
var zc = { addClasses: Dc, removeClasses: Ic };
function Rc() {
  const s = this,
    { isLocked: e, params: i } = s,
    { slidesOffsetBefore: r } = i;
  if (r) {
    const o = s.slides.length - 1,
      u = s.slidesGrid[o] + s.slidesSizesGrid[o] + r * 2;
    s.isLocked = s.size > u;
  } else s.isLocked = s.snapGrid.length === 1;
  i.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    i.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    e && e !== s.isLocked && (s.isEnd = !1),
    e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
}
var Fc = { checkOverflow: Rc },
  ro = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Bc(s, e) {
  return function (r) {
    r === void 0 && (r = {});
    const o = Object.keys(r)[0],
      u = r[o];
    if (typeof u != "object" || u === null) {
      dr(e, r);
      return;
    }
    if (
      (s[o] === !0 && (s[o] = { enabled: !0 }),
      o === "navigation" &&
        s[o] &&
        s[o].enabled &&
        !s[o].prevEl &&
        !s[o].nextEl &&
        (s[o].auto = !0),
      ["pagination", "scrollbar"].indexOf(o) >= 0 &&
        s[o] &&
        s[o].enabled &&
        !s[o].el &&
        (s[o].auto = !0),
      !(o in s && "enabled" in u))
    ) {
      dr(e, r);
      return;
    }
    typeof s[o] == "object" && !("enabled" in s[o]) && (s[o].enabled = !0),
      s[o] || (s[o] = { enabled: !1 }),
      dr(e, r);
  };
}
const ks = {
    eventsEmitter: zu,
    update: Wu,
    translate: Zu,
    transition: rc,
    slide: cc,
    loop: hc,
    grabCursor: _c,
    events: kc,
    breakpoints: Ac,
    checkOverflow: Fc,
    classes: zc,
  },
  Ms = {};
class Wt {
  constructor() {
    let e, i;
    for (var r = arguments.length, o = new Array(r), u = 0; u < r; u++)
      o[u] = arguments[u];
    o.length === 1 &&
    o[0].constructor &&
    Object.prototype.toString.call(o[0]).slice(8, -1) === "Object"
      ? (i = o[0])
      : ([e, i] = o),
      i || (i = {}),
      (i = dr({}, i)),
      e && !i.el && (i.el = e);
    const p = zr();
    if (
      i.el &&
      typeof i.el == "string" &&
      p.querySelectorAll(i.el).length > 1
    ) {
      const C = [];
      return (
        p.querySelectorAll(i.el).forEach((x) => {
          const P = dr({}, i, { el: x });
          C.push(new Wt(P));
        }),
        C
      );
    }
    const d = this;
    (d.__swiper__ = !0),
      (d.support = ko()),
      (d.device = Mo({ userAgent: i.userAgent })),
      (d.browser = Oo()),
      (d.eventsListeners = {}),
      (d.eventsAnyListeners = []),
      (d.modules = [...d.__modules__]),
      i.modules && Array.isArray(i.modules) && d.modules.push(...i.modules);
    const y = {};
    d.modules.forEach((C) => {
      C({
        params: i,
        swiper: d,
        extendParams: Bc(i, y),
        on: d.on.bind(d),
        once: d.once.bind(d),
        off: d.off.bind(d),
        emit: d.emit.bind(d),
      });
    });
    const g = dr({}, ro, y);
    return (
      (d.params = dr({}, g, Ms, i)),
      (d.originalParams = dr({}, d.params)),
      (d.passedParams = dr({}, i)),
      d.params &&
        d.params.on &&
        Object.keys(d.params.on).forEach((C) => {
          d.on(C, d.params.on[C]);
        }),
      d.params && d.params.onAny && d.onAny(d.params.onAny),
      Object.assign(d, {
        enabled: d.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return d.params.direction === "horizontal";
        },
        isVertical() {
          return d.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: d.params.allowSlideNext,
        allowSlidePrev: d.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: d.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: d.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      d.emit("_swiper"),
      d.params.init && d.init(),
      d
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: i, params: r } = this,
      o = Dr(i, `.${r.slideClass}, swiper-slide`),
      u = $n(o[0]);
    return $n(e) - u;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.find(
        (i) => i.getAttribute("data-swiper-slide-index") * 1 === e
      )
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: i, params: r } = e;
    e.slides = Dr(i, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    !e.enabled ||
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, i) {
    const r = this;
    e = Math.min(Math.max(e, 0), 1);
    const o = r.minTranslate(),
      p = (r.maxTranslate() - o) * e + o;
    r.translateTo(p, typeof i == "undefined" ? 0 : i),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(i.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.forEach((r) => {
      const o = e.getSlideClasses(r);
      i.push({ slideEl: r, classNames: o }), e.emit("_slideClass", r, o);
    }),
      e.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = "current"), i === void 0 && (i = !1);
    const r = this,
      {
        params: o,
        slides: u,
        slidesGrid: p,
        slidesSizesGrid: d,
        size: y,
        activeIndex: g,
      } = r;
    let C = 1;
    if (typeof o.slidesPerView == "number") return o.slidesPerView;
    if (o.centeredSlides) {
      let x = u[g] ? Math.ceil(u[g].swiperSlideSize) : 0,
        P;
      for (let T = g + 1; T < u.length; T += 1)
        u[T] &&
          !P &&
          ((x += Math.ceil(u[T].swiperSlideSize)), (C += 1), x > y && (P = !0));
      for (let T = g - 1; T >= 0; T -= 1)
        u[T] &&
          !P &&
          ((x += u[T].swiperSlideSize), (C += 1), x > y && (P = !0));
    } else if (e === "current")
      for (let x = g + 1; x < u.length; x += 1)
        (i ? p[x] + d[x] - p[g] < y : p[x] - p[g] < y) && (C += 1);
    else for (let x = g - 1; x >= 0; x -= 1) p[g] - p[x] < y && (C += 1);
    return C;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: i, params: r } = e;
    r.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((p) => {
        p.complete && Fn(e, p);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function o() {
      const p = e.rtlTranslate ? e.translate * -1 : e.translate,
        d = Math.min(Math.max(p, e.maxTranslate()), e.minTranslate());
      e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let u;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      o(), r.autoHeight && e.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        e.isEnd &&
        !r.centeredSlides
      ) {
        const p = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
        u = e.slideTo(p.length - 1, 0, !1, !0);
      } else u = e.slideTo(e.activeIndex, 0, !1, !0);
      u || o();
    }
    r.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0);
    const r = this,
      o = r.params.direction;
    return (
      e || (e = o === "horizontal" ? "vertical" : "horizontal"),
      e === o ||
        (e !== "horizontal" && e !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${o}`),
        r.el.classList.add(`${r.params.containerModifierClass}${e}`),
        r.emitContainerClasses(),
        (r.params.direction = e),
        r.slides.forEach((u) => {
          e === "vertical" ? (u.style.width = "") : (u.style.height = "");
        }),
        r.emit("changeDirection"),
        i && r.update()),
      r
    );
  }
  changeLanguageDirection(e) {
    const i = this;
    (i.rtl && e === "rtl") ||
      (!i.rtl && e === "ltr") ||
      ((i.rtl = e === "rtl"),
      (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "rtl"))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "ltr")),
      i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted) return !0;
    let r = e || i.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = i),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          i.params.swiperElementNodeName.toUpperCase() &&
        (i.isElement = !0);
    const o = () =>
      `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let p = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(o())
        : Dr(r, o())[0])();
    return (
      !p &&
        i.params.createElements &&
        ((p = Wn("div", i.params.wrapperClass)),
        r.append(p),
        Dr(r, `.${i.params.slideClass}`).forEach((d) => {
          p.append(d);
        })),
      Object.assign(i, {
        el: r,
        wrapperEl: p,
        slidesEl:
          i.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : p,
        hostEl: i.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Jr(r, "direction") === "rtl",
        rtlTranslate:
          i.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Jr(r, "direction") === "rtl"),
        wrongRTL: Jr(p, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const i = this;
    if (i.initialized || i.mount(e) === !1) return i;
    i.emit("beforeInit"),
      i.params.breakpoints && i.setBreakpoint(),
      i.addClasses(),
      i.updateSize(),
      i.updateSlides(),
      i.params.watchOverflow && i.checkOverflow(),
      i.params.grabCursor && i.enabled && i.setGrabCursor(),
      i.params.loop && i.virtual && i.params.virtual.enabled
        ? i.slideTo(
            i.params.initialSlide + i.virtual.slidesBefore,
            0,
            i.params.runCallbacksOnInit,
            !1,
            !0
          )
        : i.slideTo(
            i.params.initialSlide,
            0,
            i.params.runCallbacksOnInit,
            !1,
            !0
          ),
      i.params.loop && i.loopCreate(void 0, !0),
      i.attachEvents();
    const o = [...i.el.querySelectorAll('[loading="lazy"]')];
    return (
      i.isElement && o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
      o.forEach((u) => {
        u.complete
          ? Fn(i, u)
          : u.addEventListener("load", (p) => {
              Fn(i, p.target);
            });
      }),
      Gs(i),
      (i.initialized = !0),
      Gs(i),
      i.emit("init"),
      i.emit("afterInit"),
      i
    );
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0);
    const r = this,
      { params: o, el: u, wrapperEl: p, slides: d } = r;
    return (
      typeof r.params == "undefined" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        o.loop && r.loopDestroy(),
        i &&
          (r.removeClasses(),
          u && typeof u != "string" && u.removeAttribute("style"),
          p && p.removeAttribute("style"),
          d &&
            d.length &&
            d.forEach((y) => {
              y.classList.remove(
                o.slideVisibleClass,
                o.slideFullyVisibleClass,
                o.slideActiveClass,
                o.slideNextClass,
                o.slidePrevClass
              ),
                y.removeAttribute("style"),
                y.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((y) => {
          r.off(y);
        }),
        e !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), xu(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    dr(Ms, e);
  }
  static get extendedDefaults() {
    return Ms;
  }
  static get defaults() {
    return ro;
  }
  static installModule(e) {
    Wt.prototype.__modules__ || (Wt.prototype.__modules__ = []);
    const i = Wt.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((i) => Wt.installModule(i)), Wt)
      : (Wt.installModule(e), Wt);
  }
}
Object.keys(ks).forEach((s) => {
  Object.keys(ks[s]).forEach((e) => {
    Wt.prototype[e] = ks[s][e];
  });
});
Wt.use([Du, Iu]);
function Do(s, e, i, r) {
  return (
    s.params.createElements &&
      Object.keys(r).forEach((o) => {
        if (!i[o] && i.auto === !0) {
          let u = Dr(s.el, `.${r[o]}`)[0];
          u || ((u = Wn("div", r[o])), (u.className = r[o]), s.el.append(u)),
            (i[o] = u),
            (e[o] = u);
        }
      }),
    i
  );
}
function io(s) {
  let { swiper: e, extendParams: i, on: r, emit: o } = s;
  i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  function u(E) {
    let F;
    return E &&
      typeof E == "string" &&
      e.isElement &&
      ((F = e.el.querySelector(E) || e.hostEl.querySelector(E)), F)
      ? F
      : (E &&
          (typeof E == "string" && (F = [...document.querySelectorAll(E)]),
          e.params.uniqueNavElements &&
          typeof E == "string" &&
          F &&
          F.length > 1 &&
          e.el.querySelectorAll(E).length === 1
            ? (F = e.el.querySelector(E))
            : F && F.length === 1 && (F = F[0])),
        E && !F ? E : F);
  }
  function p(E, F) {
    const X = e.params.navigation;
    (E = kt(E)),
      E.forEach((G) => {
        G &&
          (G.classList[F ? "add" : "remove"](...X.disabledClass.split(" ")),
          G.tagName === "BUTTON" && (G.disabled = F),
          e.params.watchOverflow &&
            e.enabled &&
            G.classList[e.isLocked ? "add" : "remove"](X.lockClass));
      });
  }
  function d() {
    const { nextEl: E, prevEl: F } = e.navigation;
    if (e.params.loop) {
      p(F, !1), p(E, !1);
      return;
    }
    p(F, e.isBeginning && !e.params.rewind), p(E, e.isEnd && !e.params.rewind);
  }
  function y(E) {
    E.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), o("navigationPrev"));
  }
  function g(E) {
    E.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), o("navigationNext"));
  }
  function C() {
    const E = e.params.navigation;
    if (
      ((e.params.navigation = Do(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(E.nextEl || E.prevEl))
    )
      return;
    let F = u(E.nextEl),
      X = u(E.prevEl);
    Object.assign(e.navigation, { nextEl: F, prevEl: X }),
      (F = kt(F)),
      (X = kt(X));
    const G = (b, S) => {
      b && b.addEventListener("click", S === "next" ? g : y),
        !e.enabled && b && b.classList.add(...E.lockClass.split(" "));
    };
    F.forEach((b) => G(b, "next")), X.forEach((b) => G(b, "prev"));
  }
  function x() {
    let { nextEl: E, prevEl: F } = e.navigation;
    (E = kt(E)), (F = kt(F));
    const X = (G, b) => {
      G.removeEventListener("click", b === "next" ? g : y),
        G.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    E.forEach((G) => X(G, "next")), F.forEach((G) => X(G, "prev"));
  }
  r("init", () => {
    e.params.navigation.enabled === !1 ? T() : (C(), d());
  }),
    r("toEdge fromEdge lock unlock", () => {
      d();
    }),
    r("destroy", () => {
      x();
    }),
    r("enable disable", () => {
      let { nextEl: E, prevEl: F } = e.navigation;
      if (((E = kt(E)), (F = kt(F)), e.enabled)) {
        d();
        return;
      }
      [...E, ...F]
        .filter((X) => !!X)
        .forEach((X) => X.classList.add(e.params.navigation.lockClass));
    }),
    r("click", (E, F) => {
      let { nextEl: X, prevEl: G } = e.navigation;
      (X = kt(X)), (G = kt(G));
      const b = F.target;
      let S = G.includes(b) || X.includes(b);
      if (e.isElement && !S) {
        const A = F.path || (F.composedPath && F.composedPath());
        A && (S = A.find((H) => X.includes(H) || G.includes(H)));
      }
      if (e.params.navigation.hideOnClick && !S) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === b || e.pagination.el.contains(b))
        )
          return;
        let A;
        X.length
          ? (A = X[0].classList.contains(e.params.navigation.hiddenClass))
          : G.length &&
            (A = G[0].classList.contains(e.params.navigation.hiddenClass)),
          o(A === !0 ? "navigationShow" : "navigationHide"),
          [...X, ...G]
            .filter((H) => !!H)
            .forEach((H) =>
              H.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const P = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        C(),
        d();
    },
    T = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        x();
    };
  Object.assign(e.navigation, {
    enable: P,
    disable: T,
    update: d,
    init: C,
    destroy: x,
  });
}
function Zi(s) {
  return (
    s === void 0 && (s = ""),
    `.${s
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Nc(s) {
  let { swiper: e, extendParams: i, on: r, emit: o } = s;
  const u = "swiper-pagination";
  i({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (b) => b,
      formatFractionTotal: (b) => b,
      bulletClass: `${u}-bullet`,
      bulletActiveClass: `${u}-bullet-active`,
      modifierClass: `${u}-`,
      currentClass: `${u}-current`,
      totalClass: `${u}-total`,
      hiddenClass: `${u}-hidden`,
      progressbarFillClass: `${u}-progressbar-fill`,
      progressbarOppositeClass: `${u}-progressbar-opposite`,
      clickableClass: `${u}-clickable`,
      lockClass: `${u}-lock`,
      horizontalClass: `${u}-horizontal`,
      verticalClass: `${u}-vertical`,
      paginationDisabledClass: `${u}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let p,
    d = 0;
  function y() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function g(b, S) {
    const { bulletActiveClass: A } = e.params.pagination;
    !b ||
      ((b = b[`${S === "prev" ? "previous" : "next"}ElementSibling`]),
      b &&
        (b.classList.add(`${A}-${S}`),
        (b = b[`${S === "prev" ? "previous" : "next"}ElementSibling`]),
        b && b.classList.add(`${A}-${S}-${S}`)));
  }
  function C(b, S, A) {
    if (((b = b % A), (S = S % A), S === b + 1)) return "next";
    if (S === b - 1) return "previous";
  }
  function x(b) {
    const S = b.target.closest(Zi(e.params.pagination.bulletClass));
    if (!S) return;
    b.preventDefault();
    const A = $n(S) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === A) return;
      const H = C(e.realIndex, A, e.slides.length);
      H === "next"
        ? e.slideNext()
        : H === "previous"
        ? e.slidePrev()
        : e.slideToLoop(A);
    } else e.slideTo(A);
  }
  function P() {
    const b = e.rtl,
      S = e.params.pagination;
    if (y()) return;
    let A = e.pagination.el;
    A = kt(A);
    let H, q;
    const N =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      j = e.params.loop
        ? Math.ceil(N / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((q = e.previousRealIndex || 0),
          (H =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex != "undefined"
        ? ((H = e.snapIndex), (q = e.previousSnapIndex))
        : ((q = e.previousIndex || 0), (H = e.activeIndex || 0)),
      S.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const re = e.pagination.bullets;
      let R, z, L;
      if (
        (S.dynamicBullets &&
          ((p = Ns(re[0], e.isHorizontal() ? "width" : "height", !0)),
          A.forEach((Q) => {
            Q.style[e.isHorizontal() ? "width" : "height"] = `${
              p * (S.dynamicMainBullets + 4)
            }px`;
          }),
          S.dynamicMainBullets > 1 &&
            q !== void 0 &&
            ((d += H - (q || 0)),
            d > S.dynamicMainBullets - 1
              ? (d = S.dynamicMainBullets - 1)
              : d < 0 && (d = 0)),
          (R = Math.max(H - d, 0)),
          (z = R + (Math.min(re.length, S.dynamicMainBullets) - 1)),
          (L = (z + R) / 2)),
        re.forEach((Q) => {
          const W = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (ce) => `${S.bulletActiveClass}${ce}`
            ),
          ]
            .map((ce) =>
              typeof ce == "string" && ce.includes(" ") ? ce.split(" ") : ce
            )
            .flat();
          Q.classList.remove(...W);
        }),
        A.length > 1)
      )
        re.forEach((Q) => {
          const W = $n(Q);
          W === H
            ? Q.classList.add(...S.bulletActiveClass.split(" "))
            : e.isElement && Q.setAttribute("part", "bullet"),
            S.dynamicBullets &&
              (W >= R &&
                W <= z &&
                Q.classList.add(...`${S.bulletActiveClass}-main`.split(" ")),
              W === R && g(Q, "prev"),
              W === z && g(Q, "next"));
        });
      else {
        const Q = re[H];
        if (
          (Q && Q.classList.add(...S.bulletActiveClass.split(" ")),
          e.isElement &&
            re.forEach((W, ce) => {
              W.setAttribute("part", ce === H ? "bullet-active" : "bullet");
            }),
          S.dynamicBullets)
        ) {
          const W = re[R],
            ce = re[z];
          for (let ie = R; ie <= z; ie += 1)
            re[ie] &&
              re[ie].classList.add(...`${S.bulletActiveClass}-main`.split(" "));
          g(W, "prev"), g(ce, "next");
        }
      }
      if (S.dynamicBullets) {
        const Q = Math.min(re.length, S.dynamicMainBullets + 4),
          W = (p * Q - p) / 2 - L * p,
          ce = b ? "right" : "left";
        re.forEach((ie) => {
          ie.style[e.isHorizontal() ? ce : "top"] = `${W}px`;
        });
      }
    }
    A.forEach((re, R) => {
      if (
        (S.type === "fraction" &&
          (re.querySelectorAll(Zi(S.currentClass)).forEach((z) => {
            z.textContent = S.formatFractionCurrent(H + 1);
          }),
          re.querySelectorAll(Zi(S.totalClass)).forEach((z) => {
            z.textContent = S.formatFractionTotal(j);
          })),
        S.type === "progressbar")
      ) {
        let z;
        S.progressbarOpposite
          ? (z = e.isHorizontal() ? "vertical" : "horizontal")
          : (z = e.isHorizontal() ? "horizontal" : "vertical");
        const L = (H + 1) / j;
        let Q = 1,
          W = 1;
        z === "horizontal" ? (Q = L) : (W = L),
          re.querySelectorAll(Zi(S.progressbarFillClass)).forEach((ce) => {
            (ce.style.transform = `translate3d(0,0,0) scaleX(${Q}) scaleY(${W})`),
              (ce.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      S.type === "custom" && S.renderCustom
        ? (Qa(re, S.renderCustom(e, H + 1, j)),
          R === 0 && o("paginationRender", re))
        : (R === 0 && o("paginationRender", re), o("paginationUpdate", re)),
        e.params.watchOverflow &&
          e.enabled &&
          re.classList[e.isLocked ? "add" : "remove"](S.lockClass);
    });
  }
  function T() {
    const b = e.params.pagination;
    if (y()) return;
    const S =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
        ? e.slides.length / Math.ceil(e.params.grid.rows)
        : e.slides.length;
    let A = e.pagination.el;
    A = kt(A);
    let H = "";
    if (b.type === "bullets") {
      let q = e.params.loop
        ? Math.ceil(S / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && q > S && (q = S);
      for (let N = 0; N < q; N += 1)
        b.renderBullet
          ? (H += b.renderBullet.call(e, N, b.bulletClass))
          : (H += `<${b.bulletElement} ${
              e.isElement ? 'part="bullet"' : ""
            } class="${b.bulletClass}"></${b.bulletElement}>`);
    }
    b.type === "fraction" &&
      (b.renderFraction
        ? (H = b.renderFraction.call(e, b.currentClass, b.totalClass))
        : (H = `<span class="${b.currentClass}"></span> / <span class="${b.totalClass}"></span>`)),
      b.type === "progressbar" &&
        (b.renderProgressbar
          ? (H = b.renderProgressbar.call(e, b.progressbarFillClass))
          : (H = `<span class="${b.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      A.forEach((q) => {
        b.type !== "custom" && Qa(q, H || ""),
          b.type === "bullets" &&
            e.pagination.bullets.push(...q.querySelectorAll(Zi(b.bulletClass)));
      }),
      b.type !== "custom" && o("paginationRender", A[0]);
  }
  function E() {
    e.params.pagination = Do(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const b = e.params.pagination;
    if (!b.el) return;
    let S;
    typeof b.el == "string" && e.isElement && (S = e.el.querySelector(b.el)),
      !S &&
        typeof b.el == "string" &&
        (S = [...document.querySelectorAll(b.el)]),
      S || (S = b.el),
      !(!S || S.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof b.el == "string" &&
          Array.isArray(S) &&
          S.length > 1 &&
          ((S = [...e.el.querySelectorAll(b.el)]),
          S.length > 1 && (S = S.find((A) => Po(A, ".swiper")[0] === e.el))),
        Array.isArray(S) && S.length === 1 && (S = S[0]),
        Object.assign(e.pagination, { el: S }),
        (S = kt(S)),
        S.forEach((A) => {
          b.type === "bullets" &&
            b.clickable &&
            A.classList.add(...(b.clickableClass || "").split(" ")),
            A.classList.add(b.modifierClass + b.type),
            A.classList.add(
              e.isHorizontal() ? b.horizontalClass : b.verticalClass
            ),
            b.type === "bullets" &&
              b.dynamicBullets &&
              (A.classList.add(`${b.modifierClass}${b.type}-dynamic`),
              (d = 0),
              b.dynamicMainBullets < 1 && (b.dynamicMainBullets = 1)),
            b.type === "progressbar" &&
              b.progressbarOpposite &&
              A.classList.add(b.progressbarOppositeClass),
            b.clickable && A.addEventListener("click", x),
            e.enabled || A.classList.add(b.lockClass);
        }));
  }
  function F() {
    const b = e.params.pagination;
    if (y()) return;
    let S = e.pagination.el;
    S &&
      ((S = kt(S)),
      S.forEach((A) => {
        A.classList.remove(b.hiddenClass),
          A.classList.remove(b.modifierClass + b.type),
          A.classList.remove(
            e.isHorizontal() ? b.horizontalClass : b.verticalClass
          ),
          b.clickable &&
            (A.classList.remove(...(b.clickableClass || "").split(" ")),
            A.removeEventListener("click", x));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((A) =>
          A.classList.remove(...b.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const b = e.params.pagination;
    let { el: S } = e.pagination;
    (S = kt(S)),
      S.forEach((A) => {
        A.classList.remove(b.horizontalClass, b.verticalClass),
          A.classList.add(
            e.isHorizontal() ? b.horizontalClass : b.verticalClass
          );
      });
  }),
    r("init", () => {
      e.params.pagination.enabled === !1 ? G() : (E(), T(), P());
    }),
    r("activeIndexChange", () => {
      typeof e.snapIndex == "undefined" && P();
    }),
    r("snapIndexChange", () => {
      P();
    }),
    r("snapGridLengthChange", () => {
      T(), P();
    }),
    r("destroy", () => {
      F();
    }),
    r("enable disable", () => {
      let { el: b } = e.pagination;
      b &&
        ((b = kt(b)),
        b.forEach((S) =>
          S.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      P();
    }),
    r("click", (b, S) => {
      const A = S.target,
        H = kt(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        H &&
        H.length > 0 &&
        !A.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && A === e.navigation.nextEl) ||
            (e.navigation.prevEl && A === e.navigation.prevEl))
        )
          return;
        const q = H[0].classList.contains(e.params.pagination.hiddenClass);
        o(q === !0 ? "paginationShow" : "paginationHide"),
          H.forEach((N) => N.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const X = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: b } = e.pagination;
      b &&
        ((b = kt(b)),
        b.forEach((S) =>
          S.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        E(),
        T(),
        P();
    },
    G = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: b } = e.pagination;
      b &&
        ((b = kt(b)),
        b.forEach((S) =>
          S.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        F();
    };
  Object.assign(e.pagination, {
    enable: X,
    disable: G,
    render: T,
    update: P,
    init: E,
    destroy: F,
  });
}
function Os(s) {
  let { swiper: e, extendParams: i, on: r, emit: o, params: u } = s;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let p,
    d,
    y = u && u.autoplay ? u.autoplay.delay : 3e3,
    g = u && u.autoplay ? u.autoplay.delay : 3e3,
    C,
    x = new Date().getTime(),
    P,
    T,
    E,
    F,
    X,
    G,
    b;
  function S(ne) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (ne.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", S),
        !(b || (ne.detail && ne.detail.bySwiperTouchMove)) && R()));
  }
  const A = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (P = !0) : P && ((g = C), (P = !1));
      const ne = e.autoplay.paused ? C : x + g - new Date().getTime();
      (e.autoplay.timeLeft = ne),
        o("autoplayTimeLeft", ne, ne / y),
        (d = requestAnimationFrame(() => {
          A();
        }));
    },
    H = () => {
      let ne;
      return (
        e.virtual && e.params.virtual.enabled
          ? (ne = e.slides.find((M) =>
              M.classList.contains("swiper-slide-active")
            ))
          : (ne = e.slides[e.activeIndex]),
        ne ? parseInt(ne.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    q = (ne) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(d), A();
      let se = typeof ne == "undefined" ? e.params.autoplay.delay : ne;
      (y = e.params.autoplay.delay), (g = e.params.autoplay.delay);
      const M = H();
      !Number.isNaN(M) &&
        M > 0 &&
        typeof ne == "undefined" &&
        ((se = M), (y = M), (g = M)),
        (C = se);
      const Me = e.params.speed,
        ct = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(Me, !0, !0), o("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, Me, !0, !0), o("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(Me, !0, !0), o("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, Me, !0, !0), o("autoplay")),
            e.params.cssMode &&
              ((x = new Date().getTime()),
              requestAnimationFrame(() => {
                q();
              })));
        };
      return (
        se > 0
          ? (clearTimeout(p),
            (p = setTimeout(() => {
              ct();
            }, se)))
          : requestAnimationFrame(() => {
              ct();
            }),
        se
      );
    },
    N = () => {
      (x = new Date().getTime()),
        (e.autoplay.running = !0),
        q(),
        o("autoplayStart");
    },
    j = () => {
      (e.autoplay.running = !1),
        clearTimeout(p),
        cancelAnimationFrame(d),
        o("autoplayStop");
    },
    re = (ne, se) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(p), ne || (G = !0);
      const M = () => {
        o("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", S)
            : R();
      };
      if (((e.autoplay.paused = !0), se)) {
        X && (C = e.params.autoplay.delay), (X = !1), M();
        return;
      }
      (C = (C || e.params.autoplay.delay) - (new Date().getTime() - x)),
        !(e.isEnd && C < 0 && !e.params.loop) && (C < 0 && (C = 0), M());
    },
    R = () => {
      (e.isEnd && C < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((x = new Date().getTime()),
        G ? ((G = !1), q(C)) : q(),
        (e.autoplay.paused = !1),
        o("autoplayResume"));
    },
    z = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const ne = zr();
      ne.visibilityState === "hidden" && ((G = !0), re(!0)),
        ne.visibilityState === "visible" && R();
    },
    L = (ne) => {
      ne.pointerType === "mouse" &&
        ((G = !0), (b = !0), !(e.animating || e.autoplay.paused) && re(!0));
    },
    Q = (ne) => {
      ne.pointerType === "mouse" && ((b = !1), e.autoplay.paused && R());
    },
    W = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", L),
        e.el.addEventListener("pointerleave", Q));
    },
    ce = () => {
      e.el &&
        typeof e.el != "string" &&
        (e.el.removeEventListener("pointerenter", L),
        e.el.removeEventListener("pointerleave", Q));
    },
    ie = () => {
      zr().addEventListener("visibilitychange", z);
    },
    de = () => {
      zr().removeEventListener("visibilitychange", z);
    };
  r("init", () => {
    e.params.autoplay.enabled && (W(), ie(), N());
  }),
    r("destroy", () => {
      ce(), de(), e.autoplay.running && j();
    }),
    r("_freeModeStaticRelease", () => {
      (E || G) && R();
    }),
    r("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? j() : re(!0, !0);
    }),
    r("beforeTransitionStart", (ne, se, M) => {
      e.destroyed ||
        !e.autoplay.running ||
        (M || !e.params.autoplay.disableOnInteraction ? re(!0, !0) : j());
    }),
    r("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          j();
          return;
        }
        (T = !0),
          (E = !1),
          (G = !1),
          (F = setTimeout(() => {
            (G = !0), (E = !0), re(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !T)) {
        if (
          (clearTimeout(F),
          clearTimeout(p),
          e.params.autoplay.disableOnInteraction)
        ) {
          (E = !1), (T = !1);
          return;
        }
        E && e.params.cssMode && R(), (E = !1), (T = !1);
      }
    }),
    r("slideChange", () => {
      e.destroyed || !e.autoplay.running || (X = !0);
    }),
    Object.assign(e.autoplay, { start: N, stop: j, pause: re, resume: R });
}
var qe = { exports: {} };
(function (s, e) {
  (function (i, r) {
    r(e);
  })(So, function (i) {
    function r(_, t) {
      (_.prototype = Object.create(t.prototype)),
        (_.prototype.constructor = _),
        (_.__proto__ = t);
    }
    function o(_) {
      if (_ === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return _;
    }
    /*!
     * GSAP 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var u = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      p = { duration: 0.5, overwrite: !1, delay: 0 },
      d,
      y,
      g,
      C = 1e8,
      x = 1 / C,
      P = Math.PI * 2,
      T = P / 4,
      E = 0,
      F = Math.sqrt,
      X = Math.cos,
      G = Math.sin,
      b = function (t) {
        return typeof t == "string";
      },
      S = function (t) {
        return typeof t == "function";
      },
      A = function (t) {
        return typeof t == "number";
      },
      H = function (t) {
        return typeof t == "undefined";
      },
      q = function (t) {
        return typeof t == "object";
      },
      N = function (t) {
        return t !== !1;
      },
      j = function () {
        return typeof window != "undefined";
      },
      re = function (t) {
        return S(t) || b(t);
      },
      R =
        (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
        function () {},
      z = Array.isArray,
      L = /(?:-?\.?\d|\.)+/gi,
      Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      W = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      ce = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      ie = /[+-]=-?[.\d]+/,
      de = /[^,'"\[\]\s]+/gi,
      ne = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      se,
      M,
      Me,
      ct,
      Le = {},
      Re = {},
      nt,
      Fe = function (t) {
        return (Re = Ut(t, Le)) && Zt;
      },
      we = function (t, n) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          n,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      xe = function (t, n) {
        return !n && console.warn(t);
      },
      De = function (t, n) {
        return (t && (Le[t] = n) && Re && (Re[t] = n)) || Le;
      },
      st = function () {
        return 0;
      },
      je = { suppressEvents: !0, isStart: !0, kill: !1 },
      Ve = { suppressEvents: !0, kill: !1 },
      fe = { suppressEvents: !0 },
      he = {},
      Ee = [],
      Ue = {},
      B,
      Xe = {},
      tr = {},
      Sr = 30,
      We = [],
      rr = "",
      gr = function (t) {
        var n = t[0],
          a,
          l;
        if ((q(n) || S(n) || (t = [t]), !(a = (n._gsap || {}).harness))) {
          for (l = We.length; l-- && !We[l].targetTest(n); );
          a = We[l];
        }
        for (l = t.length; l--; )
          (t[l] && (t[l]._gsap || (t[l]._gsap = new ba(t[l], a)))) ||
            t.splice(l, 1);
        return t;
      },
      Bt = function (t) {
        return t._gsap || gr(Gt(t))[0]._gsap;
      },
      ft = function (t, n, a) {
        return (a = t[n]) && S(a)
          ? t[n]()
          : (H(a) && t.getAttribute && t.getAttribute(n)) || a;
      },
      at = function (t, n) {
        return (t = t.split(",")).forEach(n) || t;
      },
      ye = function (t) {
        return Math.round(t * 1e5) / 1e5 || 0;
      },
      Ie = function (t) {
        return Math.round(t * 1e7) / 1e7 || 0;
      },
      bt = function (t, n) {
        var a = n.charAt(0),
          l = parseFloat(n.substr(2));
        return (
          (t = parseFloat(t)),
          a === "+" ? t + l : a === "-" ? t - l : a === "*" ? t * l : t / l
        );
      },
      Cr = function (t, n) {
        for (var a = n.length, l = 0; t.indexOf(n[l]) < 0 && ++l < a; );
        return l < a;
      },
      Mr = function () {
        var t = Ee.length,
          n = Ee.slice(0),
          a,
          l;
        for (Ue = {}, Ee.length = 0, a = 0; a < t; a++)
          (l = n[a]),
            l && l._lazy && (l.render(l._lazy[0], l._lazy[1], !0)._lazy = 0);
      },
      et = function (t) {
        return !!(t._initted || t._startAt || t.add);
      },
      ni = function (t, n, a, l) {
        Ee.length && !y && Mr(),
          t.render(n, a, l || !!(y && n < 0 && et(t))),
          Ee.length && !y && Mr();
      },
      mr = function (t) {
        var n = parseFloat(t);
        return (n || n === 0) && (t + "").match(de).length < 2
          ? n
          : b(t)
          ? t.trim()
          : t;
      },
      Fr = function (t) {
        return t;
      },
      mt = function (t, n) {
        for (var a in n) a in t || (t[a] = n[a]);
        return t;
      },
      Or = function (t) {
        return function (n, a) {
          for (var l in a)
            l in n || (l === "duration" && t) || l === "ease" || (n[l] = a[l]);
        };
      },
      Ut = function (t, n) {
        for (var a in n) t[a] = n[a];
        return t;
      },
      Te = function _(t, n) {
        for (var a in n)
          a !== "__proto__" &&
            a !== "constructor" &&
            a !== "prototype" &&
            (t[a] = q(n[a]) ? _(t[a] || (t[a] = {}), n[a]) : n[a]);
        return t;
      },
      _r = function (t, n) {
        var a = {},
          l;
        for (l in t) l in n || (a[l] = t[l]);
        return a;
      },
      Mt = function (t) {
        var n = t.parent || se,
          a = t.keyframes ? Or(z(t.keyframes)) : mt;
        if (N(t.inherit))
          for (; n; ) a(t, n.vars.defaults), (n = n.parent || n._dp);
        return t;
      },
      ir = function (t, n) {
        for (var a = t.length, l = a === n.length; l && a-- && t[a] === n[a]; );
        return a < 0;
      },
      Kt = function (t, n, a, l, c) {
        a === void 0 && (a = "_first"), l === void 0 && (l = "_last");
        var f = t[l],
          h;
        if (c) for (h = n[c]; f && f[c] > h; ) f = f._prev;
        return (
          f
            ? ((n._next = f._next), (f._next = n))
            : ((n._next = t[a]), (t[a] = n)),
          n._next ? (n._next._prev = n) : (t[l] = n),
          (n._prev = f),
          (n.parent = n._dp = t),
          n
        );
      },
      vr = function (t, n, a, l) {
        a === void 0 && (a = "_first"), l === void 0 && (l = "_last");
        var c = n._prev,
          f = n._next;
        c ? (c._next = f) : t[a] === n && (t[a] = f),
          f ? (f._prev = c) : t[l] === n && (t[l] = c),
          (n._next = n._prev = n.parent = null);
      },
      Nt = function (t, n) {
        t.parent &&
          (!n || t.parent.autoRemoveChildren) &&
          t.parent.remove &&
          t.parent.remove(t),
          (t._act = 0);
      },
      Ot = function (t, n) {
        if (t && (!n || n._end > t._dur || n._start < 0))
          for (var a = t; a; ) (a._dirty = 1), (a = a.parent);
        return t;
      },
      si = function (t) {
        for (var n = t.parent; n && n.parent; )
          (n._dirty = 1), n.totalDuration(), (n = n.parent);
        return t;
      },
      ve = function (t, n, a, l) {
        return (
          t._startAt &&
          (y
            ? t._startAt.revert(Ve)
            : (t.vars.immediateRender && !t.vars.autoRevert) ||
              t._startAt.render(n, !0, l))
        );
      },
      ge = function _(t) {
        return !t || (t._ts && _(t.parent));
      },
      Ae = function (t) {
        return t._repeat ? te(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      te = function (t, n) {
        var a = Math.floor((t = Ie(t / n)));
        return t && a === t ? a - 1 : a;
      },
      me = function (t, n) {
        return (
          (t - n._start) * n._ts +
          (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
        );
      },
      pe = function (t) {
        return (t._end = Ie(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || x) || 0)
        ));
      },
      _e = function (t, n) {
        var a = t._dp;
        return (
          a &&
            a.smoothChildTiming &&
            t._ts &&
            ((t._start = Ie(
              a._time -
                (t._ts > 0
                  ? n / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - n) / -t._ts)
            )),
            pe(t),
            a._dirty || Ot(a, t)),
          t
        );
      },
      dt = function (t, n) {
        var a;
        if (
          ((n._time ||
            (!n._dur && n._initted) ||
            (n._start < t._time && (n._dur || !n.add))) &&
            ((a = me(t.rawTime(), n)),
            (!n._dur || sr(0, n.totalDuration(), a) - n._tTime > x) &&
              n.render(a, !0)),
          Ot(t, n)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (a = t; a._dp; )
              a.rawTime() >= 0 && a.totalTime(a._tTime), (a = a._dp);
          t._zTime = -x;
        }
      },
      be = function (t, n, a, l) {
        return (
          n.parent && Nt(n),
          (n._start = Ie(
            (A(a) ? a : a || t !== se ? Ne(t, a, n) : t._time) + n._delay
          )),
          (n._end = Ie(
            n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
          )),
          Kt(t, n, "_first", "_last", t._sort ? "_start" : 0),
          Ye(n) || (t._recent = n),
          l || dt(t, n),
          t._ts < 0 && _e(t, t._tTime),
          t
        );
      },
      tt = function (t, n) {
        return (
          (Le.ScrollTrigger || we("scrollTrigger", n)) &&
          Le.ScrollTrigger.create(n, t)
        );
      },
      yt = function (t, n, a, l, c) {
        if ((ss(t, n, c), !t._initted)) return 1;
        if (
          !a &&
          t._pt &&
          !y &&
          ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
          B !== ur.frame
        )
          return Ee.push(t), (t._lazy = [c, l]), 1;
      },
      rt = function _(t) {
        var n = t.parent;
        return (
          n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || _(n))
        );
      },
      Ye = function (t) {
        var n = t.data;
        return n === "isFromStart" || n === "isStart";
      },
      He = function (t, n, a, l) {
        var c = t.ratio,
          f =
            n < 0 ||
            (!n &&
              ((!t._start && rt(t) && !(!t._initted && Ye(t))) ||
                ((t._ts < 0 || t._dp._ts < 0) && !Ye(t))))
              ? 0
              : 1,
          h = t._rDelay,
          m = 0,
          v,
          w,
          O;
        if (
          (h &&
            t._repeat &&
            ((m = sr(0, t._tDur, n)),
            (w = te(m, h)),
            t._yoyo && w & 1 && (f = 1 - f),
            w !== te(t._tTime, h) &&
              ((c = 1 - f),
              t.vars.repeatRefresh && t._initted && t.invalidate())),
          f !== c || y || l || t._zTime === x || (!n && t._zTime))
        ) {
          if (!t._initted && yt(t, n, l, a, m)) return;
          for (
            O = t._zTime,
              t._zTime = n || (a ? x : 0),
              a || (a = n && !O),
              t.ratio = f,
              t._from && (f = 1 - f),
              t._time = 0,
              t._tTime = m,
              v = t._pt;
            v;

          )
            v.r(f, v.d), (v = v._next);
          n < 0 && ve(t, n, a, !0),
            t._onUpdate && !a && lr(t, "onUpdate"),
            m && t._repeat && !a && t.parent && lr(t, "onRepeat"),
            (n >= t._tDur || n < 0) &&
              t.ratio === f &&
              (f && Nt(t, 1),
              !a &&
                !y &&
                (lr(t, f ? "onComplete" : "onReverseComplete", !0),
                t._prom && t._prom()));
        } else t._zTime || (t._zTime = n);
      },
      nr = function (t, n, a) {
        var l;
        if (a > n)
          for (l = t._first; l && l._start <= a; ) {
            if (l.data === "isPause" && l._start > n) return l;
            l = l._next;
          }
        else
          for (l = t._last; l && l._start >= a; ) {
            if (l.data === "isPause" && l._start < n) return l;
            l = l._prev;
          }
      },
      Be = function (t, n, a, l) {
        var c = t._repeat,
          f = Ie(n) || 0,
          h = t._tTime / t._tDur;
        return (
          h && !l && (t._time *= f / t._dur),
          (t._dur = f),
          (t._tDur = c ? (c < 0 ? 1e10 : Ie(f * (c + 1) + t._rDelay * c)) : f),
          h > 0 && !l && _e(t, (t._tTime = t._tDur * h)),
          t.parent && pe(t),
          a || Ot(t.parent, t),
          t
        );
      },
      It = function (t) {
        return t instanceof At ? Ot(t) : Be(t, t._dur);
      },
      br = { _start: 0, endTime: st, totalDuration: st },
      Ne = function _(t, n, a) {
        var l = t.labels,
          c = t._recent || br,
          f = t.duration() >= C ? c.endTime(!1) : t._dur,
          h,
          m,
          v;
        return b(n) && (isNaN(n) || n in l)
          ? ((m = n.charAt(0)),
            (v = n.substr(-1) === "%"),
            (h = n.indexOf("=")),
            m === "<" || m === ">"
              ? (h >= 0 && (n = n.replace(/=/, "")),
                (m === "<" ? c._start : c.endTime(c._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) *
                    (v ? (h < 0 ? c : a).totalDuration() / 100 : 1))
              : h < 0
              ? (n in l || (l[n] = f), l[n])
              : ((m = parseFloat(n.charAt(h - 1) + n.substr(h + 1))),
                v && a && (m = (m / 100) * (z(a) ? a[0] : a).totalDuration()),
                h > 1 ? _(t, n.substr(0, h - 1), a) + m : f + m))
          : n == null
          ? f
          : +n;
      },
      ot = function (t, n, a) {
        var l = A(n[1]),
          c = (l ? 2 : 1) + (t < 2 ? 0 : 1),
          f = n[c],
          h,
          m;
        if ((l && (f.duration = n[1]), (f.parent = a), t)) {
          for (h = f, m = a; m && !("immediateRender" in h); )
            (h = m.vars.defaults || {}), (m = N(m.vars.inherit) && m.parent);
          (f.immediateRender = N(h.immediateRender)),
            t < 2 ? (f.runBackwards = 1) : (f.startAt = n[c - 1]);
        }
        return new ht(n[0], f, n[c + 1]);
      },
      Je = function (t, n) {
        return t || t === 0 ? n(t) : n;
      },
      sr = function (t, n, a) {
        return a < t ? t : a > n ? n : a;
      },
      pt = function (t, n) {
        return !b(t) || !(n = ne.exec(t)) ? "" : n[1];
      },
      Tt = function (t, n, a) {
        return Je(a, function (l) {
          return sr(t, n, l);
        });
      },
      lt = [].slice,
      ar = function (t, n) {
        return (
          t &&
          q(t) &&
          "length" in t &&
          ((!n && !t.length) || (t.length - 1 in t && q(t[0]))) &&
          !t.nodeType &&
          t !== M
        );
      },
      Gi = function (t, n, a) {
        return (
          a === void 0 && (a = []),
          t.forEach(function (l) {
            var c;
            return (b(l) && !n) || ar(l, 1)
              ? (c = a).push.apply(c, Gt(l))
              : a.push(l);
          }) || a
        );
      },
      Gt = function (t, n, a) {
        return g && !n && g.selector
          ? g.selector(t)
          : b(t) && !a && (Me || !Ei())
          ? lt.call((n || ct).querySelectorAll(t), 0)
          : z(t)
          ? Gi(t, a)
          : ar(t)
          ? lt.call(t, 0)
          : t
          ? [t]
          : [];
      },
      Br = function (t) {
        return (
          (t = Gt(t)[0] || xe("Invalid scope") || {}),
          function (n) {
            var a = t.current || t.nativeElement || t;
            return Gt(
              n,
              a.querySelectorAll
                ? a
                : a === t
                ? xe("Invalid scope") || ct.createElement("div")
                : t
            );
          }
        );
      },
      or = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      Xr = function (t) {
        if (S(t)) return t;
        var n = q(t) ? t : { each: t },
          a = ai(n.ease),
          l = n.from || 0,
          c = parseFloat(n.base) || 0,
          f = {},
          h = l > 0 && l < 1,
          m = isNaN(l) || h,
          v = n.axis,
          w = l,
          O = l;
        return (
          b(l)
            ? (w = O = { center: 0.5, edges: 0.5, end: 1 }[l] || 0)
            : !h && m && ((w = l[0]), (O = l[1])),
          function (D, I, V) {
            var k = (V || n).length,
              Y = f[k],
              U,
              K,
              Z,
              J,
              $,
              ae,
              oe,
              le,
              ee;
            if (!Y) {
              if (((ee = n.grid === "auto" ? 0 : (n.grid || [1, C])[1]), !ee)) {
                for (
                  oe = -C;
                  oe < (oe = V[ee++].getBoundingClientRect().left) && ee < k;

                );
                ee < k && ee--;
              }
              for (
                Y = f[k] = [],
                  U = m ? Math.min(ee, k) * w - 0.5 : l % ee,
                  K = ee === C ? 0 : m ? (k * O) / ee - 0.5 : (l / ee) | 0,
                  oe = 0,
                  le = C,
                  ae = 0;
                ae < k;
                ae++
              )
                (Z = (ae % ee) - U),
                  (J = K - ((ae / ee) | 0)),
                  (Y[ae] = $ =
                    v ? Math.abs(v === "y" ? J : Z) : F(Z * Z + J * J)),
                  $ > oe && (oe = $),
                  $ < le && (le = $);
              l === "random" && or(Y),
                (Y.max = oe - le),
                (Y.min = le),
                (Y.v = k =
                  (parseFloat(n.amount) ||
                    parseFloat(n.each) *
                      (ee > k
                        ? k - 1
                        : v
                        ? v === "y"
                          ? k / ee
                          : ee
                        : Math.max(ee, k / ee)) ||
                    0) * (l === "edges" ? -1 : 1)),
                (Y.b = k < 0 ? c - k : c),
                (Y.u = pt(n.amount || n.each) || 0),
                (a = a && k < 0 ? ma(a) : a);
            }
            return (
              (k = (Y[D] - Y.min) / Y.max || 0),
              Ie(Y.b + (a ? a(k) : k) * Y.v) + Y.u
            );
          }
        );
      },
      Wr = function (t) {
        var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (a) {
          var l = Ie(Math.round(parseFloat(a) / t) * t * n);
          return (l - (l % 1)) / n + (A(a) ? 0 : pt(a));
        };
      },
      Er = function (t, n) {
        var a = z(t),
          l,
          c;
        return (
          !a &&
            q(t) &&
            ((l = a = t.radius || C),
            t.values
              ? ((t = Gt(t.values)), (c = !A(t[0])) && (l *= l))
              : (t = Wr(t.increment))),
          Je(
            n,
            a
              ? S(t)
                ? function (f) {
                    return (c = t(f)), Math.abs(c - f) <= l ? c : f;
                  }
                : function (f) {
                    for (
                      var h = parseFloat(c ? f.x : f),
                        m = parseFloat(c ? f.y : 0),
                        v = C,
                        w = 0,
                        O = t.length,
                        D,
                        I;
                      O--;

                    )
                      c
                        ? ((D = t[O].x - h),
                          (I = t[O].y - m),
                          (D = D * D + I * I))
                        : (D = Math.abs(t[O] - h)),
                        D < v && ((v = D), (w = O));
                    return (
                      (w = !l || v <= l ? t[w] : f),
                      c || w === f || A(f) ? w : w + pt(f)
                    );
                  }
              : Wr(t)
          )
        );
      },
      aa = function (t, n, a, l) {
        return Je(z(t) ? !n : a === !0 ? !!(a = 0) : !l, function () {
          return z(t)
            ? t[~~(Math.random() * t.length)]
            : (a = a || 1e-5) &&
                (l = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - a / 2 + Math.random() * (n - t + a * 0.99)) / a
                  ) *
                    a *
                    l
                ) / l;
        });
      },
      nl = function () {
        for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
          n[a] = arguments[a];
        return function (l) {
          return n.reduce(function (c, f) {
            return f(c);
          }, l);
        };
      },
      sl = function (t, n) {
        return function (a) {
          return t(parseFloat(a)) + (n || pt(a));
        };
      },
      al = function (t, n, a) {
        return la(t, n, 0, 1, a);
      },
      oa = function (t, n, a) {
        return Je(a, function (l) {
          return t[~~n(l)];
        });
      },
      ol = function _(t, n, a) {
        var l = n - t;
        return z(t)
          ? oa(t, _(0, t.length), n)
          : Je(a, function (c) {
              return ((l + ((c - t) % l)) % l) + t;
            });
      },
      ll = function _(t, n, a) {
        var l = n - t,
          c = l * 2;
        return z(t)
          ? oa(t, _(0, t.length - 1), n)
          : Je(a, function (f) {
              return (
                (f = (c + ((f - t) % c)) % c || 0), t + (f > l ? c - f : f)
              );
            });
      },
      Vi = function (t) {
        for (var n = 0, a = "", l, c, f, h; ~(l = t.indexOf("random(", n)); )
          (f = t.indexOf(")", l)),
            (h = t.charAt(l + 7) === "["),
            (c = t.substr(l + 7, f - l - 7).match(h ? de : L)),
            (a +=
              t.substr(n, l - n) +
              aa(h ? c : +c[0], h ? 0 : +c[1], +c[2] || 1e-5)),
            (n = f + 1);
        return a + t.substr(n, t.length - n);
      },
      la = function (t, n, a, l, c) {
        var f = n - t,
          h = l - a;
        return Je(c, function (m) {
          return a + (((m - t) / f) * h || 0);
        });
      },
      ul = function _(t, n, a, l) {
        var c = isNaN(t + n)
          ? 0
          : function (I) {
              return (1 - I) * t + I * n;
            };
        if (!c) {
          var f = b(t),
            h = {},
            m,
            v,
            w,
            O,
            D;
          if ((a === !0 && (l = 1) && (a = null), f))
            (t = { p: t }), (n = { p: n });
          else if (z(t) && !z(n)) {
            for (w = [], O = t.length, D = O - 2, v = 1; v < O; v++)
              w.push(_(t[v - 1], t[v]));
            O--,
              (c = function (V) {
                V *= O;
                var k = Math.min(D, ~~V);
                return w[k](V - k);
              }),
              (a = n);
          } else l || (t = Ut(z(t) ? [] : {}, t));
          if (!w) {
            for (m in n) is.call(h, t, m, "get", n[m]);
            c = function (V) {
              return ls(V, h) || (f ? t.p : t);
            };
          }
        }
        return Je(a, c);
      },
      ua = function (t, n, a) {
        var l = t.labels,
          c = C,
          f,
          h,
          m;
        for (f in l)
          (h = l[f] - n),
            h < 0 == !!a && h && c > (h = Math.abs(h)) && ((m = f), (c = h));
        return m;
      },
      lr = function (t, n, a) {
        var l = t.vars,
          c = l[n],
          f = g,
          h = t._ctx,
          m,
          v,
          w;
        if (!!c)
          return (
            (m = l[n + "Params"]),
            (v = l.callbackScope || t),
            a && Ee.length && Mr(),
            h && (g = h),
            (w = m ? c.apply(v, m) : c.call(v)),
            (g = f),
            w
          );
      },
      Hi = function (t) {
        return (
          Nt(t),
          t.scrollTrigger && t.scrollTrigger.kill(!!y),
          t.progress() < 1 && lr(t, "onInterrupt"),
          t
        );
      },
      Ci,
      ca = [],
      fa = function (t) {
        if (!!t)
          if (((t = (!t.name && t.default) || t), j() || t.headless)) {
            var n = t.name,
              a = S(t),
              l =
                n && !a && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              c = {
                init: st,
                render: ls,
                add: is,
                kill: Cl,
                modifier: Sl,
                rawVars: 0,
              },
              f = {
                targetTest: 0,
                get: 0,
                getSetter: os,
                aliases: {},
                register: 0,
              };
            if ((Ei(), t !== l)) {
              if (Xe[n]) return;
              mt(l, mt(_r(t, c), f)),
                Ut(l.prototype, Ut(c, _r(t, f))),
                (Xe[(l.prop = n)] = l),
                t.targetTest && (We.push(l), (he[n] = 1)),
                (n =
                  (n === "css"
                    ? "CSS"
                    : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin");
            }
            De(n, l), t.register && t.register(Zt, l, Qt);
          } else ca.push(t);
      },
      $e = 255,
      Yi = {
        aqua: [0, $e, $e],
        lime: [0, $e, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, $e],
        navy: [0, 0, 128],
        white: [$e, $e, $e],
        olive: [128, 128, 0],
        yellow: [$e, $e, 0],
        orange: [$e, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [$e, 0, 0],
        pink: [$e, 192, 203],
        cyan: [0, $e, $e],
        transparent: [$e, $e, $e, 0],
      },
      es = function (t, n, a) {
        return (
          (t += t < 0 ? 1 : t > 1 ? -1 : 0),
          ((t * 6 < 1
            ? n + (a - n) * t * 6
            : t < 0.5
            ? a
            : t * 3 < 2
            ? n + (a - n) * (2 / 3 - t) * 6
            : n) *
            $e +
            0.5) |
            0
        );
      },
      da = function (t, n, a) {
        var l = t ? (A(t) ? [t >> 16, (t >> 8) & $e, t & $e] : 0) : Yi.black,
          c,
          f,
          h,
          m,
          v,
          w,
          O,
          D,
          I,
          V;
        if (!l) {
          if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Yi[t]))
            l = Yi[t];
          else if (t.charAt(0) === "#") {
            if (
              (t.length < 6 &&
                ((c = t.charAt(1)),
                (f = t.charAt(2)),
                (h = t.charAt(3)),
                (t =
                  "#" +
                  c +
                  c +
                  f +
                  f +
                  h +
                  h +
                  (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
              t.length === 9)
            )
              return (
                (l = parseInt(t.substr(1, 6), 16)),
                [
                  l >> 16,
                  (l >> 8) & $e,
                  l & $e,
                  parseInt(t.substr(7), 16) / 255,
                ]
              );
            (t = parseInt(t.substr(1), 16)),
              (l = [t >> 16, (t >> 8) & $e, t & $e]);
          } else if (t.substr(0, 3) === "hsl") {
            if (((l = V = t.match(L)), !n))
              (m = (+l[0] % 360) / 360),
                (v = +l[1] / 100),
                (w = +l[2] / 100),
                (f = w <= 0.5 ? w * (v + 1) : w + v - w * v),
                (c = w * 2 - f),
                l.length > 3 && (l[3] *= 1),
                (l[0] = es(m + 1 / 3, c, f)),
                (l[1] = es(m, c, f)),
                (l[2] = es(m - 1 / 3, c, f));
            else if (~t.indexOf("="))
              return (l = t.match(Q)), a && l.length < 4 && (l[3] = 1), l;
          } else l = t.match(L) || Yi.transparent;
          l = l.map(Number);
        }
        return (
          n &&
            !V &&
            ((c = l[0] / $e),
            (f = l[1] / $e),
            (h = l[2] / $e),
            (O = Math.max(c, f, h)),
            (D = Math.min(c, f, h)),
            (w = (O + D) / 2),
            O === D
              ? (m = v = 0)
              : ((I = O - D),
                (v = w > 0.5 ? I / (2 - O - D) : I / (O + D)),
                (m =
                  O === c
                    ? (f - h) / I + (f < h ? 6 : 0)
                    : O === f
                    ? (h - c) / I + 2
                    : (c - f) / I + 4),
                (m *= 60)),
            (l[0] = ~~(m + 0.5)),
            (l[1] = ~~(v * 100 + 0.5)),
            (l[2] = ~~(w * 100 + 0.5))),
          a && l.length < 4 && (l[3] = 1),
          l
        );
      },
      pa = function (t) {
        var n = [],
          a = [],
          l = -1;
        return (
          t.split($r).forEach(function (c) {
            var f = c.match(W) || [];
            n.push.apply(n, f), a.push((l += f.length + 1));
          }),
          (n.c = a),
          n
        );
      },
      ha = function (t, n, a) {
        var l = "",
          c = (t + l).match($r),
          f = n ? "hsla(" : "rgba(",
          h = 0,
          m,
          v,
          w,
          O;
        if (!c) return t;
        if (
          ((c = c.map(function (D) {
            return (
              (D = da(D, n, 1)) &&
              f +
                (n
                  ? D[0] + "," + D[1] + "%," + D[2] + "%," + D[3]
                  : D.join(",")) +
                ")"
            );
          })),
          a && ((w = pa(t)), (m = a.c), m.join(l) !== w.c.join(l)))
        )
          for (v = t.replace($r, "1").split(W), O = v.length - 1; h < O; h++)
            l +=
              v[h] +
              (~m.indexOf(h)
                ? c.shift() || f + "0,0,0,0)"
                : (w.length ? w : c.length ? c : a).shift());
        if (!v)
          for (v = t.split($r), O = v.length - 1; h < O; h++) l += v[h] + c[h];
        return l + v[O];
      },
      $r = (function () {
        var _ =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
          t;
        for (t in Yi) _ += "|" + t + "\\b";
        return new RegExp(_ + ")", "gi");
      })(),
      cl = /hsl[a]?\(/,
      ga = function (t) {
        var n = t.join(" "),
          a;
        if ((($r.lastIndex = 0), $r.test(n)))
          return (
            (a = cl.test(n)),
            (t[1] = ha(t[1], a)),
            (t[0] = ha(t[0], a, pa(t[1]))),
            !0
          );
      },
      qi,
      ur = (function () {
        var _ = Date.now,
          t = 500,
          n = 33,
          a = _(),
          l = a,
          c = 1e3 / 240,
          f = c,
          h = [],
          m,
          v,
          w,
          O,
          D,
          I,
          V = function k(Y) {
            var U = _() - l,
              K = Y === !0,
              Z,
              J,
              $,
              ae;
            if (
              ((U > t || U < 0) && (a += U - n),
              (l += U),
              ($ = l - a),
              (Z = $ - f),
              (Z > 0 || K) &&
                ((ae = ++O.frame),
                (D = $ - O.time * 1e3),
                (O.time = $ = $ / 1e3),
                (f += Z + (Z >= c ? 4 : c - Z)),
                (J = 1)),
              K || (m = v(k)),
              J)
            )
              for (I = 0; I < h.length; I++) h[I]($, D, ae, Y);
          };
        return (
          (O = {
            time: 0,
            frame: 0,
            tick: function () {
              V(!0);
            },
            deltaRatio: function (Y) {
              return D / (1e3 / (Y || 60));
            },
            wake: function () {
              nt &&
                (!Me &&
                  j() &&
                  ((M = Me = window),
                  (ct = M.document || {}),
                  (Le.gsap = Zt),
                  (M.gsapVersions || (M.gsapVersions = [])).push(Zt.version),
                  Fe(Re || M.GreenSockGlobals || (!M.gsap && M) || {}),
                  ca.forEach(fa)),
                (w =
                  typeof requestAnimationFrame != "undefined" &&
                  requestAnimationFrame),
                m && O.sleep(),
                (v =
                  w ||
                  function (Y) {
                    return setTimeout(Y, (f - O.time * 1e3 + 1) | 0);
                  }),
                (qi = 1),
                V(2));
            },
            sleep: function () {
              (w ? cancelAnimationFrame : clearTimeout)(m), (qi = 0), (v = st);
            },
            lagSmoothing: function (Y, U) {
              (t = Y || 1 / 0), (n = Math.min(U || 33, t));
            },
            fps: function (Y) {
              (c = 1e3 / (Y || 240)), (f = O.time * 1e3 + c);
            },
            add: function (Y, U, K) {
              var Z = U
                ? function (J, $, ae, oe) {
                    Y(J, $, ae, oe), O.remove(Z);
                  }
                : Y;
              return O.remove(Y), h[K ? "unshift" : "push"](Z), Ei(), Z;
            },
            remove: function (Y, U) {
              ~(U = h.indexOf(Y)) && h.splice(U, 1) && I >= U && I--;
            },
            _listeners: h,
          }),
          O
        );
      })(),
      Ei = function () {
        return !qi && ur.wake();
      },
      Oe = {},
      fl = /^[\d.\-M][\d.\-,\s]/,
      dl = /["']/g,
      pl = function (t) {
        for (
          var n = {},
            a = t.substr(1, t.length - 3).split(":"),
            l = a[0],
            c = 1,
            f = a.length,
            h,
            m,
            v;
          c < f;
          c++
        )
          (m = a[c]),
            (h = c !== f - 1 ? m.lastIndexOf(",") : m.length),
            (v = m.substr(0, h)),
            (n[l] = isNaN(v) ? v.replace(dl, "").trim() : +v),
            (l = m.substr(h + 1).trim());
        return n;
      },
      hl = function (t) {
        var n = t.indexOf("(") + 1,
          a = t.indexOf(")"),
          l = t.indexOf("(", n);
        return t.substring(n, ~l && l < a ? t.indexOf(")", a + 1) : a);
      },
      gl = function (t) {
        var n = (t + "").split("("),
          a = Oe[n[0]];
        return a && n.length > 1 && a.config
          ? a.config.apply(
              null,
              ~t.indexOf("{") ? [pl(n[1])] : hl(t).split(",").map(mr)
            )
          : Oe._CE && fl.test(t)
          ? Oe._CE("", t)
          : a;
      },
      ma = function (t) {
        return function (n) {
          return 1 - t(1 - n);
        };
      },
      _a = function _(t, n) {
        for (var a = t._first, l; a; )
          a instanceof At
            ? _(a, n)
            : a.vars.yoyoEase &&
              (!a._yoyo || !a._repeat) &&
              a._yoyo !== n &&
              (a.timeline
                ? _(a.timeline, n)
                : ((l = a._ease),
                  (a._ease = a._yEase),
                  (a._yEase = l),
                  (a._yoyo = n))),
            (a = a._next);
      },
      ai = function (t, n) {
        return (t && (S(t) ? t : Oe[t] || gl(t))) || n;
      },
      oi = function (t, n, a, l) {
        a === void 0 &&
          (a = function (m) {
            return 1 - n(1 - m);
          }),
          l === void 0 &&
            (l = function (m) {
              return m < 0.5 ? n(m * 2) / 2 : 1 - n((1 - m) * 2) / 2;
            });
        var c = { easeIn: n, easeOut: a, easeInOut: l },
          f;
        return (
          at(t, function (h) {
            (Oe[h] = Le[h] = c), (Oe[(f = h.toLowerCase())] = a);
            for (var m in c)
              Oe[
                f +
                  (m === "easeIn" ? ".in" : m === "easeOut" ? ".out" : ".inOut")
              ] = Oe[h + "." + m] = c[m];
          }),
          c
        );
      },
      va = function (t) {
        return function (n) {
          return n < 0.5 ? (1 - t(1 - n * 2)) / 2 : 0.5 + t((n - 0.5) * 2) / 2;
        };
      },
      ts = function _(t, n, a) {
        var l = n >= 1 ? n : 1,
          c = (a || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          f = (c / P) * (Math.asin(1 / l) || 0),
          h = function (w) {
            return w === 1 ? 1 : l * Math.pow(2, -10 * w) * G((w - f) * c) + 1;
          },
          m =
            t === "out"
              ? h
              : t === "in"
              ? function (v) {
                  return 1 - h(1 - v);
                }
              : va(h);
        return (
          (c = P / c),
          (m.config = function (v, w) {
            return _(t, v, w);
          }),
          m
        );
      },
      rs = function _(t, n) {
        n === void 0 && (n = 1.70158);
        var a = function (f) {
            return f ? --f * f * ((n + 1) * f + n) + 1 : 0;
          },
          l =
            t === "out"
              ? a
              : t === "in"
              ? function (c) {
                  return 1 - a(1 - c);
                }
              : va(a);
        return (
          (l.config = function (c) {
            return _(t, c);
          }),
          l
        );
      };
    at("Linear,Quad,Cubic,Quart,Quint,Strong", function (_, t) {
      var n = t < 5 ? t + 1 : t;
      oi(
        _ + ",Power" + (n - 1),
        t
          ? function (a) {
              return Math.pow(a, n);
            }
          : function (a) {
              return a;
            },
        function (a) {
          return 1 - Math.pow(1 - a, n);
        },
        function (a) {
          return a < 0.5
            ? Math.pow(a * 2, n) / 2
            : 1 - Math.pow((1 - a) * 2, n) / 2;
        }
      );
    }),
      (Oe.Linear.easeNone = Oe.none = Oe.Linear.easeIn),
      oi("Elastic", ts("in"), ts("out"), ts()),
      (function (_, t) {
        var n = 1 / t,
          a = 2 * n,
          l = 2.5 * n,
          c = function (h) {
            return h < n
              ? _ * h * h
              : h < a
              ? _ * Math.pow(h - 1.5 / t, 2) + 0.75
              : h < l
              ? _ * (h -= 2.25 / t) * h + 0.9375
              : _ * Math.pow(h - 2.625 / t, 2) + 0.984375;
          };
        oi(
          "Bounce",
          function (f) {
            return 1 - c(1 - f);
          },
          c
        );
      })(7.5625, 2.75),
      oi("Expo", function (_) {
        return Math.pow(2, 10 * (_ - 1)) * _ + _ * _ * _ * _ * _ * _ * (1 - _);
      }),
      oi("Circ", function (_) {
        return -(F(1 - _ * _) - 1);
      }),
      oi("Sine", function (_) {
        return _ === 1 ? 1 : -X(_ * T) + 1;
      }),
      oi("Back", rs("in"), rs("out"), rs()),
      (Oe.SteppedEase =
        Oe.steps =
        Le.SteppedEase =
          {
            config: function (t, n) {
              t === void 0 && (t = 1);
              var a = 1 / t,
                l = t + (n ? 0 : 1),
                c = n ? 1 : 0,
                f = 1 - x;
              return function (h) {
                return (((l * sr(0, f, h)) | 0) + c) * a;
              };
            },
          }),
      (p.ease = Oe["quad.out"]),
      at(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (_) {
          return (rr += _ + "," + _ + "Params,");
        }
      );
    var ba = function (t, n) {
        (this.id = E++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = n),
          (this.get = n ? n.get : ft),
          (this.set = n ? n.getSetter : os);
      },
      Xi = (function () {
        function _(n) {
          (this.vars = n),
            (this._delay = +n.delay || 0),
            (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
              ((this._rDelay = n.repeatDelay || 0),
              (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
            (this._ts = 1),
            Be(this, +n.duration, 1, 1),
            (this.data = n.data),
            g && ((this._ctx = g), g.data.push(this)),
            qi || ur.wake();
        }
        var t = _.prototype;
        return (
          (t.delay = function (a) {
            return a || a === 0
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + a - this._delay),
                (this._delay = a),
                this)
              : this._delay;
          }),
          (t.duration = function (a) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a
                )
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (a) {
            return arguments.length
              ? ((this._dirty = 0),
                Be(
                  this,
                  this._repeat < 0
                    ? a
                    : (a - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (t.totalTime = function (a, l) {
            if ((Ei(), !arguments.length)) return this._tTime;
            var c = this._dp;
            if (c && c.smoothChildTiming && this._ts) {
              for (
                _e(this, a), !c._dp || c.parent || dt(c, this);
                c && c.parent;

              )
                c.parent._time !==
                  c._start +
                    (c._ts >= 0
                      ? c._tTime / c._ts
                      : (c.totalDuration() - c._tTime) / -c._ts) &&
                  c.totalTime(c._tTime, !0),
                  (c = c.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && a < this._tDur) ||
                  (this._ts < 0 && a > 0) ||
                  (!this._tDur && !a)) &&
                be(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== a ||
                (!this._dur && !l) ||
                (this._initted && Math.abs(this._zTime) === x) ||
                (!a && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = a), ni(this, a, l)),
              this
            );
          }),
          (t.time = function (a, l) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), a + Ae(this)) %
                    (this._dur + this._rDelay) || (a ? this._dur : 0),
                  l
                )
              : this._time;
          }),
          (t.totalProgress = function (a, l) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * a, l)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
          }),
          (t.progress = function (a, l) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) +
                    Ae(this),
                  l
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.rawTime() > 0
              ? 1
              : 0;
          }),
          (t.iteration = function (a, l) {
            var c = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (a - 1) * c, l)
              : this._repeat
              ? te(this._tTime, c) + 1
              : 1;
          }),
          (t.timeScale = function (a, l) {
            if (!arguments.length) return this._rts === -x ? 0 : this._rts;
            if (this._rts === a) return this;
            var c =
              this.parent && this._ts
                ? me(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +a || 0),
              (this._ts = this._ps || a === -x ? 0 : this._rts),
              this.totalTime(
                sr(-Math.abs(this._delay), this.totalDuration(), c),
                l !== !1
              ),
              pe(this),
              si(this)
            );
          }),
          (t.paused = function (a) {
            return arguments.length
              ? (this._ps !== a &&
                  ((this._ps = a),
                  a
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (Ei(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        this.progress() === 1 &&
                          Math.abs(this._zTime) !== x &&
                          (this._tTime -= x)
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (a) {
            if (arguments.length) {
              this._start = a;
              var l = this.parent || this._dp;
              return (
                l && (l._sort || !this.parent) && be(l, this, a - this._delay),
                this
              );
            }
            return this._start;
          }),
          (t.endTime = function (a) {
            return (
              this._start +
              (N(a) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (a) {
            var l = this.parent || this._dp;
            return l
              ? a &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? me(l.rawTime(a), this)
                : this._tTime
              : this._tTime;
          }),
          (t.revert = function (a) {
            a === void 0 && (a = fe);
            var l = y;
            return (
              (y = a),
              et(this) &&
                (this.timeline && this.timeline.revert(a),
                this.totalTime(-0.01, a.suppressEvents)),
              this.data !== "nested" && a.kill !== !1 && this.kill(),
              (y = l),
              this
            );
          }),
          (t.globalTime = function (a) {
            for (var l = this, c = arguments.length ? a : l.rawTime(); l; )
              (c = l._start + c / (Math.abs(l._ts) || 1)), (l = l._dp);
            return !this.parent && this._sat ? this._sat.globalTime(a) : c;
          }),
          (t.repeat = function (a) {
            return arguments.length
              ? ((this._repeat = a === 1 / 0 ? -2 : a), It(this))
              : this._repeat === -2
              ? 1 / 0
              : this._repeat;
          }),
          (t.repeatDelay = function (a) {
            if (arguments.length) {
              var l = this._time;
              return (this._rDelay = a), It(this), l ? this.time(l) : this;
            }
            return this._rDelay;
          }),
          (t.yoyo = function (a) {
            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
          }),
          (t.seek = function (a, l) {
            return this.totalTime(Ne(this, a), N(l));
          }),
          (t.restart = function (a, l) {
            return (
              this.play().totalTime(a ? -this._delay : 0, N(l)),
              this._dur || (this._zTime = -x),
              this
            );
          }),
          (t.play = function (a, l) {
            return a != null && this.seek(a, l), this.reversed(!1).paused(!1);
          }),
          (t.reverse = function (a, l) {
            return (
              a != null && this.seek(a || this.totalDuration(), l),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (a, l) {
            return a != null && this.seek(a, l), this.paused(!0);
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (a) {
            return arguments.length
              ? (!!a !== this.reversed() &&
                  this.timeScale(-this._rts || (a ? -x : 0)),
                this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -x), this;
          }),
          (t.isActive = function () {
            var a = this.parent || this._dp,
              l = this._start,
              c;
            return !!(
              !a ||
              (this._ts &&
                this._initted &&
                a.isActive() &&
                (c = a.rawTime(!0)) >= l &&
                c < this.endTime(!0) - x)
            );
          }),
          (t.eventCallback = function (a, l, c) {
            var f = this.vars;
            return arguments.length > 1
              ? (l
                  ? ((f[a] = l),
                    c && (f[a + "Params"] = c),
                    a === "onUpdate" && (this._onUpdate = l))
                  : delete f[a],
                this)
              : f[a];
          }),
          (t.then = function (a) {
            var l = this;
            return new Promise(function (c) {
              var f = S(a) ? a : Fr,
                h = function () {
                  var v = l.then;
                  (l.then = null),
                    S(f) && (f = f(l)) && (f.then || f === l) && (l.then = v),
                    c(f),
                    (l.then = v);
                };
              (l._initted && l.totalProgress() === 1 && l._ts >= 0) ||
              (!l._tTime && l._ts < 0)
                ? h()
                : (l._prom = h);
            });
          }),
          (t.kill = function () {
            Hi(this);
          }),
          _
        );
      })();
    mt(Xi.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -x,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var At = (function (_) {
      r(t, _);
      function t(a, l) {
        var c;
        return (
          a === void 0 && (a = {}),
          (c = _.call(this, a) || this),
          (c.labels = {}),
          (c.smoothChildTiming = !!a.smoothChildTiming),
          (c.autoRemoveChildren = !!a.autoRemoveChildren),
          (c._sort = N(a.sortChildren)),
          se && be(a.parent || se, o(c), l),
          a.reversed && c.reverse(),
          a.paused && c.paused(!0),
          a.scrollTrigger && tt(o(c), a.scrollTrigger),
          c
        );
      }
      var n = t.prototype;
      return (
        (n.to = function (l, c, f) {
          return ot(0, arguments, this), this;
        }),
        (n.from = function (l, c, f) {
          return ot(1, arguments, this), this;
        }),
        (n.fromTo = function (l, c, f, h) {
          return ot(2, arguments, this), this;
        }),
        (n.set = function (l, c, f) {
          return (
            (c.duration = 0),
            (c.parent = this),
            Mt(c).repeatDelay || (c.repeat = 0),
            (c.immediateRender = !!c.immediateRender),
            new ht(l, c, Ne(this, f), 1),
            this
          );
        }),
        (n.call = function (l, c, f) {
          return be(this, ht.delayedCall(0, l, c), f);
        }),
        (n.staggerTo = function (l, c, f, h, m, v, w) {
          return (
            (f.duration = c),
            (f.stagger = f.stagger || h),
            (f.onComplete = v),
            (f.onCompleteParams = w),
            (f.parent = this),
            new ht(l, f, Ne(this, m)),
            this
          );
        }),
        (n.staggerFrom = function (l, c, f, h, m, v, w) {
          return (
            (f.runBackwards = 1),
            (Mt(f).immediateRender = N(f.immediateRender)),
            this.staggerTo(l, c, f, h, m, v, w)
          );
        }),
        (n.staggerFromTo = function (l, c, f, h, m, v, w, O) {
          return (
            (h.startAt = f),
            (Mt(h).immediateRender = N(h.immediateRender)),
            this.staggerTo(l, c, h, m, v, w, O)
          );
        }),
        (n.render = function (l, c, f) {
          var h = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            w = l <= 0 ? 0 : Ie(l),
            O = this._zTime < 0 != l < 0 && (this._initted || !v),
            D,
            I,
            V,
            k,
            Y,
            U,
            K,
            Z,
            J,
            $,
            ae,
            oe;
          if (
            (this !== se && w > m && l >= 0 && (w = m),
            w !== this._tTime || f || O)
          ) {
            if (
              (h !== this._time &&
                v &&
                ((w += this._time - h), (l += this._time - h)),
              (D = w),
              (J = this._start),
              (Z = this._ts),
              (U = !Z),
              O && (v || (h = this._zTime), (l || !c) && (this._zTime = l)),
              this._repeat)
            ) {
              if (
                ((ae = this._yoyo),
                (Y = v + this._rDelay),
                this._repeat < -1 && l < 0)
              )
                return this.totalTime(Y * 100 + l, c, f);
              if (
                ((D = Ie(w % Y)),
                w === m
                  ? ((k = this._repeat), (D = v))
                  : (($ = Ie(w / Y)),
                    (k = ~~$),
                    k && k === $ && ((D = v), k--),
                    D > v && (D = v)),
                ($ = te(this._tTime, Y)),
                !h &&
                  this._tTime &&
                  $ !== k &&
                  this._tTime - $ * Y - this._dur <= 0 &&
                  ($ = k),
                ae && k & 1 && ((D = v - D), (oe = 1)),
                k !== $ && !this._lock)
              ) {
                var le = ae && $ & 1,
                  ee = le === (ae && k & 1);
                if (
                  (k < $ && (le = !le),
                  (h = le ? 0 : w % v ? v : w),
                  (this._lock = 1),
                  (this.render(h || (oe ? 0 : Ie(k * Y)), c, !v)._lock = 0),
                  (this._tTime = w),
                  !c && this.parent && lr(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !oe &&
                    (this.invalidate()._lock = 1),
                  (h && h !== this._time) ||
                    U !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((v = this._dur),
                  (m = this._tDur),
                  ee &&
                    ((this._lock = 2),
                    (h = le ? v : -1e-4),
                    this.render(h, !0),
                    this.vars.repeatRefresh && !oe && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !U)
                )
                  return this;
                _a(this, oe);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                ((K = nr(this, Ie(h), Ie(D))), K && (w -= D - (D = K._start))),
              (this._tTime = w),
              (this._time = D),
              (this._act = !Z),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = l),
                (h = 0)),
              !h && w && !c && !$ && (lr(this, "onStart"), this._tTime !== w))
            )
              return this;
            if (D >= h && l >= 0)
              for (I = this._first; I; ) {
                if (
                  ((V = I._next), (I._act || D >= I._start) && I._ts && K !== I)
                ) {
                  if (I.parent !== this) return this.render(l, c, f);
                  if (
                    (I.render(
                      I._ts > 0
                        ? (D - I._start) * I._ts
                        : (I._dirty ? I.totalDuration() : I._tDur) +
                            (D - I._start) * I._ts,
                      c,
                      f
                    ),
                    D !== this._time || (!this._ts && !U))
                  ) {
                    (K = 0), V && (w += this._zTime = -x);
                    break;
                  }
                }
                I = V;
              }
            else {
              I = this._last;
              for (var ze = l < 0 ? l : D; I; ) {
                if (
                  ((V = I._prev), (I._act || ze <= I._end) && I._ts && K !== I)
                ) {
                  if (I.parent !== this) return this.render(l, c, f);
                  if (
                    (I.render(
                      I._ts > 0
                        ? (ze - I._start) * I._ts
                        : (I._dirty ? I.totalDuration() : I._tDur) +
                            (ze - I._start) * I._ts,
                      c,
                      f || (y && et(I))
                    ),
                    D !== this._time || (!this._ts && !U))
                  ) {
                    (K = 0), V && (w += this._zTime = ze ? -x : x);
                    break;
                  }
                }
                I = V;
              }
            }
            if (
              K &&
              !c &&
              (this.pause(),
              (K.render(D >= h ? 0 : -x)._zTime = D >= h ? 1 : -1),
              this._ts)
            )
              return (this._start = J), pe(this), this.render(l, c, f);
            this._onUpdate && !c && lr(this, "onUpdate", !0),
              ((w === m && this._tTime >= this.totalDuration()) || (!w && h)) &&
                (J === this._start || Math.abs(Z) !== Math.abs(this._ts)) &&
                (this._lock ||
                  ((l || !v) &&
                    ((w === m && this._ts > 0) || (!w && this._ts < 0)) &&
                    Nt(this, 1),
                  !c &&
                    !(l < 0 && !h) &&
                    (w || h || !m) &&
                    (lr(
                      this,
                      w === m && l >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(w < m && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (n.add = function (l, c) {
          var f = this;
          if ((A(c) || (c = Ne(this, c, l)), !(l instanceof Xi))) {
            if (z(l))
              return (
                l.forEach(function (h) {
                  return f.add(h, c);
                }),
                this
              );
            if (b(l)) return this.addLabel(l, c);
            if (S(l)) l = ht.delayedCall(0, l);
            else return this;
          }
          return this !== l ? be(this, l, c) : this;
        }),
        (n.getChildren = function (l, c, f, h) {
          l === void 0 && (l = !0),
            c === void 0 && (c = !0),
            f === void 0 && (f = !0),
            h === void 0 && (h = -C);
          for (var m = [], v = this._first; v; )
            v._start >= h &&
              (v instanceof ht
                ? c && m.push(v)
                : (f && m.push(v),
                  l && m.push.apply(m, v.getChildren(!0, c, f)))),
              (v = v._next);
          return m;
        }),
        (n.getById = function (l) {
          for (var c = this.getChildren(1, 1, 1), f = c.length; f--; )
            if (c[f].vars.id === l) return c[f];
        }),
        (n.remove = function (l) {
          return b(l)
            ? this.removeLabel(l)
            : S(l)
            ? this.killTweensOf(l)
            : (l.parent === this && vr(this, l),
              l === this._recent && (this._recent = this._last),
              Ot(this));
        }),
        (n.totalTime = function (l, c) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = Ie(
                  ur.time -
                    (this._ts > 0
                      ? l / this._ts
                      : (this.totalDuration() - l) / -this._ts)
                )),
              _.prototype.totalTime.call(this, l, c),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (l, c) {
          return (this.labels[l] = Ne(this, c)), this;
        }),
        (n.removeLabel = function (l) {
          return delete this.labels[l], this;
        }),
        (n.addPause = function (l, c, f) {
          var h = ht.delayedCall(0, c || st, f);
          return (
            (h.data = "isPause"), (this._hasPause = 1), be(this, h, Ne(this, l))
          );
        }),
        (n.removePause = function (l) {
          var c = this._first;
          for (l = Ne(this, l); c; )
            c._start === l && c.data === "isPause" && Nt(c), (c = c._next);
        }),
        (n.killTweensOf = function (l, c, f) {
          for (var h = this.getTweensOf(l, f), m = h.length; m--; )
            jr !== h[m] && h[m].kill(l, c);
          return this;
        }),
        (n.getTweensOf = function (l, c) {
          for (var f = [], h = Gt(l), m = this._first, v = A(c), w; m; )
            m instanceof ht
              ? Cr(m._targets, h) &&
                (v
                  ? (!jr || (m._initted && m._ts)) &&
                    m.globalTime(0) <= c &&
                    m.globalTime(m.totalDuration()) > c
                  : !c || m.isActive()) &&
                f.push(m)
              : (w = m.getTweensOf(h, c)).length && f.push.apply(f, w),
              (m = m._next);
          return f;
        }),
        (n.tweenTo = function (l, c) {
          c = c || {};
          var f = this,
            h = Ne(f, l),
            m = c,
            v = m.startAt,
            w = m.onStart,
            O = m.onStartParams,
            D = m.immediateRender,
            I,
            V = ht.to(
              f,
              mt(
                {
                  ease: c.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: h,
                  overwrite: "auto",
                  duration:
                    c.duration ||
                    Math.abs(
                      (h - (v && "time" in v ? v.time : f._time)) /
                        f.timeScale()
                    ) ||
                    x,
                  onStart: function () {
                    if ((f.pause(), !I)) {
                      var Y =
                        c.duration ||
                        Math.abs(
                          (h - (v && "time" in v ? v.time : f._time)) /
                            f.timeScale()
                        );
                      V._dur !== Y && Be(V, Y, 0, 1).render(V._time, !0, !0),
                        (I = 1);
                    }
                    w && w.apply(V, O || []);
                  },
                },
                c
              )
            );
          return D ? V.render(0) : V;
        }),
        (n.tweenFromTo = function (l, c, f) {
          return this.tweenTo(c, mt({ startAt: { time: Ne(this, l) } }, f));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (l) {
          return l === void 0 && (l = this._time), ua(this, Ne(this, l));
        }),
        (n.previousLabel = function (l) {
          return l === void 0 && (l = this._time), ua(this, Ne(this, l), 1);
        }),
        (n.currentLabel = function (l) {
          return arguments.length
            ? this.seek(l, !0)
            : this.previousLabel(this._time + x);
        }),
        (n.shiftChildren = function (l, c, f) {
          f === void 0 && (f = 0);
          for (var h = this._first, m = this.labels, v; h; )
            h._start >= f && ((h._start += l), (h._end += l)), (h = h._next);
          if (c) for (v in m) m[v] >= f && (m[v] += l);
          return Ot(this);
        }),
        (n.invalidate = function (l) {
          var c = this._first;
          for (this._lock = 0; c; ) c.invalidate(l), (c = c._next);
          return _.prototype.invalidate.call(this, l);
        }),
        (n.clear = function (l) {
          l === void 0 && (l = !0);
          for (var c = this._first, f; c; )
            (f = c._next), this.remove(c), (c = f);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            l && (this.labels = {}),
            Ot(this)
          );
        }),
        (n.totalDuration = function (l) {
          var c = 0,
            f = this,
            h = f._last,
            m = C,
            v,
            w,
            O;
          if (arguments.length)
            return f.timeScale(
              (f._repeat < 0 ? f.duration() : f.totalDuration()) /
                (f.reversed() ? -l : l)
            );
          if (f._dirty) {
            for (O = f.parent; h; )
              (v = h._prev),
                h._dirty && h.totalDuration(),
                (w = h._start),
                w > m && f._sort && h._ts && !f._lock
                  ? ((f._lock = 1), (be(f, h, w - h._delay, 1)._lock = 0))
                  : (m = w),
                w < 0 &&
                  h._ts &&
                  ((c -= w),
                  ((!O && !f._dp) || (O && O.smoothChildTiming)) &&
                    ((f._start += w / f._ts), (f._time -= w), (f._tTime -= w)),
                  f.shiftChildren(-w, !1, -1 / 0),
                  (m = 0)),
                h._end > c && h._ts && (c = h._end),
                (h = v);
            Be(f, f === se && f._time > c ? f._time : c, 1, 1), (f._dirty = 0);
          }
          return f._tDur;
        }),
        (t.updateRoot = function (l) {
          if ((se._ts && (ni(se, me(l, se)), (B = ur.frame)), ur.frame >= Sr)) {
            Sr += u.autoSleep || 120;
            var c = se._first;
            if ((!c || !c._ts) && u.autoSleep && ur._listeners.length < 2) {
              for (; c && !c._ts; ) c = c._next;
              c || ur.sleep();
            }
          }
        }),
        t
      );
    })(Xi);
    mt(At.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var ml = function (t, n, a, l, c, f, h) {
        var m = new Qt(this._pt, t, n, 0, 1, Ca, null, c),
          v = 0,
          w = 0,
          O,
          D,
          I,
          V,
          k,
          Y,
          U,
          K;
        for (
          m.b = a,
            m.e = l,
            a += "",
            l += "",
            (U = ~l.indexOf("random(")) && (l = Vi(l)),
            f && ((K = [a, l]), f(K, t, n), (a = K[0]), (l = K[1])),
            D = a.match(ce) || [];
          (O = ce.exec(l));

        )
          (V = O[0]),
            (k = l.substring(v, O.index)),
            I ? (I = (I + 1) % 5) : k.substr(-5) === "rgba(" && (I = 1),
            V !== D[w++] &&
              ((Y = parseFloat(D[w - 1]) || 0),
              (m._pt = {
                _next: m._pt,
                p: k || w === 1 ? k : ",",
                s: Y,
                c: V.charAt(1) === "=" ? bt(Y, V) - Y : parseFloat(V) - Y,
                m: I && I < 4 ? Math.round : 0,
              }),
              (v = ce.lastIndex));
        return (
          (m.c = v < l.length ? l.substring(v, l.length) : ""),
          (m.fp = h),
          (ie.test(l) || U) && (m.e = 0),
          (this._pt = m),
          m
        );
      },
      is = function (t, n, a, l, c, f, h, m, v, w) {
        S(l) && (l = l(c || 0, t, f));
        var O = t[n],
          D =
            a !== "get"
              ? a
              : S(O)
              ? v
                ? t[
                    n.indexOf("set") || !S(t["get" + n.substr(3)])
                      ? n
                      : "get" + n.substr(3)
                  ](v)
                : t[n]()
              : O,
          I = S(O) ? (v ? wl : Ta) : as,
          V;
        if (
          (b(l) &&
            (~l.indexOf("random(") && (l = Vi(l)),
            l.charAt(1) === "=" &&
              ((V = bt(D, l) + (pt(D) || 0)), (V || V === 0) && (l = V))),
          !w || D !== l || ns)
        )
          return !isNaN(D * l) && l !== ""
            ? ((V = new Qt(
                this._pt,
                t,
                n,
                +D || 0,
                l - (D || 0),
                typeof O == "boolean" ? Tl : Sa,
                0,
                I
              )),
              v && (V.fp = v),
              h && V.modifier(h, this, t),
              (this._pt = V))
            : (!O && !(n in t) && we(n, l),
              ml.call(this, t, n, D, l, I, m || u.stringFilter, v));
      },
      _l = function (t, n, a, l, c) {
        if (
          (S(t) && (t = Wi(t, c, n, a, l)),
          !q(t) || (t.style && t.nodeType) || z(t) || R(t))
        )
          return b(t) ? Wi(t, c, n, a, l) : t;
        var f = {},
          h;
        for (h in t) f[h] = Wi(t[h], c, n, a, l);
        return f;
      },
      ya = function (t, n, a, l, c, f) {
        var h, m, v, w;
        if (
          Xe[t] &&
          (h = new Xe[t]()).init(
            c,
            h.rawVars ? n[t] : _l(n[t], l, c, f, a),
            a,
            l,
            f
          ) !== !1 &&
          ((a._pt = m = new Qt(a._pt, c, t, 0, 1, h.render, h, 0, h.priority)),
          a !== Ci)
        )
          for (
            v = a._ptLookup[a._targets.indexOf(c)], w = h._props.length;
            w--;

          )
            v[h._props[w]] = m;
        return h;
      },
      jr,
      ns,
      ss = function _(t, n, a) {
        var l = t.vars,
          c = l.ease,
          f = l.startAt,
          h = l.immediateRender,
          m = l.lazy,
          v = l.onUpdate,
          w = l.runBackwards,
          O = l.yoyoEase,
          D = l.keyframes,
          I = l.autoRevert,
          V = t._dur,
          k = t._startAt,
          Y = t._targets,
          U = t.parent,
          K = U && U.data === "nested" ? U.vars.targets : Y,
          Z = t._overwrite === "auto" && !d,
          J = t.timeline,
          $,
          ae,
          oe,
          le,
          ee,
          ze,
          it,
          Ke,
          Qe,
          Lt,
          St,
          _t,
          Ct;
        if (
          (J && (!D || !c) && (c = "none"),
          (t._ease = ai(c, p.ease)),
          (t._yEase = O ? ma(ai(O === !0 ? c : O, p.ease)) : 0),
          O &&
            t._yoyo &&
            !t._repeat &&
            ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
          (t._from = !J && !!l.runBackwards),
          !J || (D && !l.stagger))
        ) {
          if (
            ((Ke = Y[0] ? Bt(Y[0]).harness : 0),
            (_t = Ke && l[Ke.prop]),
            ($ = _r(l, he)),
            k &&
              (k._zTime < 0 && k.progress(1),
              n < 0 && w && h && !I
                ? k.render(-1, !0)
                : k.revert(w && V ? Ve : je),
              (k._lazy = 0)),
            f)
          ) {
            if (
              (Nt(
                (t._startAt = ht.set(
                  Y,
                  mt(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: U,
                      immediateRender: !0,
                      lazy: !k && N(m),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        v &&
                        function () {
                          return lr(t, "onUpdate");
                        },
                      stagger: 0,
                    },
                    f
                  )
                ))
              ),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              n < 0 && (y || (!h && !I)) && t._startAt.revert(Ve),
              h && V && n <= 0 && a <= 0)
            ) {
              n && (t._zTime = n);
              return;
            }
          } else if (w && V && !k) {
            if (
              (n && (h = !1),
              (oe = mt(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: h && !k && N(m),
                  immediateRender: h,
                  stagger: 0,
                  parent: U,
                },
                $
              )),
              _t && (oe[Ke.prop] = _t),
              Nt((t._startAt = ht.set(Y, oe))),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              n < 0 && (y ? t._startAt.revert(Ve) : t._startAt.render(-1, !0)),
              (t._zTime = n),
              !h)
            )
              _(t._startAt, x, x);
            else if (!n) return;
          }
          for (
            t._pt = t._ptCache = 0, m = (V && N(m)) || (m && !V), ae = 0;
            ae < Y.length;
            ae++
          ) {
            if (
              ((ee = Y[ae]),
              (it = ee._gsap || gr(Y)[ae]._gsap),
              (t._ptLookup[ae] = Lt = {}),
              Ue[it.id] && Ee.length && Mr(),
              (St = K === Y ? ae : K.indexOf(ee)),
              Ke &&
                (Qe = new Ke()).init(ee, _t || $, t, St, K) !== !1 &&
                ((t._pt = le =
                  new Qt(
                    t._pt,
                    ee,
                    Qe.name,
                    0,
                    1,
                    Qe.render,
                    Qe,
                    0,
                    Qe.priority
                  )),
                Qe._props.forEach(function (Pr) {
                  Lt[Pr] = le;
                }),
                Qe.priority && (ze = 1)),
              !Ke || _t)
            )
              for (oe in $)
                Xe[oe] && (Qe = ya(oe, $, t, St, ee, K))
                  ? Qe.priority && (ze = 1)
                  : (Lt[oe] = le =
                      is.call(
                        t,
                        ee,
                        oe,
                        "get",
                        $[oe],
                        St,
                        K,
                        0,
                        l.stringFilter
                      ));
            t._op && t._op[ae] && t.kill(ee, t._op[ae]),
              Z &&
                t._pt &&
                ((jr = t),
                se.killTweensOf(ee, Lt, t.globalTime(n)),
                (Ct = !t.parent),
                (jr = 0)),
              t._pt && m && (Ue[it.id] = 1);
          }
          ze && Ea(t), t._onInit && t._onInit(t);
        }
        (t._onUpdate = v),
          (t._initted = (!t._op || t._pt) && !Ct),
          D && n <= 0 && J.render(C, !0, !0);
      },
      vl = function (t, n, a, l, c, f, h, m) {
        var v = ((t._pt && t._ptCache) || (t._ptCache = {}))[n],
          w,
          O,
          D,
          I;
        if (!v)
          for (
            v = t._ptCache[n] = [], D = t._ptLookup, I = t._targets.length;
            I--;

          ) {
            if (((w = D[I][n]), w && w.d && w.d._pt))
              for (w = w.d._pt; w && w.p !== n && w.fp !== n; ) w = w._next;
            if (!w)
              return (
                (ns = 1),
                (t.vars[n] = "+=0"),
                ss(t, h),
                (ns = 0),
                m ? xe(n + " not eligible for reset") : 1
              );
            v.push(w);
          }
        for (I = v.length; I--; )
          (O = v[I]),
            (w = O._pt || O),
            (w.s = (l || l === 0) && !c ? l : w.s + (l || 0) + f * w.c),
            (w.c = a - w.s),
            O.e && (O.e = ye(a) + pt(O.e)),
            O.b && (O.b = w.s + pt(O.b));
      },
      bl = function (t, n) {
        var a = t[0] ? Bt(t[0]).harness : 0,
          l = a && a.aliases,
          c,
          f,
          h,
          m;
        if (!l) return n;
        c = Ut({}, n);
        for (f in l)
          if (f in c)
            for (m = l[f].split(","), h = m.length; h--; ) c[m[h]] = c[f];
        return c;
      },
      yl = function (t, n, a, l) {
        var c = n.ease || l || "power1.inOut",
          f,
          h;
        if (z(n))
          (h = a[t] || (a[t] = [])),
            n.forEach(function (m, v) {
              return h.push({ t: (v / (n.length - 1)) * 100, v: m, e: c });
            });
        else
          for (f in n)
            (h = a[f] || (a[f] = [])),
              f === "ease" || h.push({ t: parseFloat(t), v: n[f], e: c });
      },
      Wi = function (t, n, a, l, c) {
        return S(t)
          ? t.call(n, a, l, c)
          : b(t) && ~t.indexOf("random(")
          ? Vi(t)
          : t;
      },
      wa = rr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      xa = {};
    at(wa + ",id,stagger,delay,duration,paused,scrollTrigger", function (_) {
      return (xa[_] = 1);
    });
    var ht = (function (_) {
      r(t, _);
      function t(a, l, c, f) {
        var h;
        typeof l == "number" && ((c.duration = l), (l = c), (c = null)),
          (h = _.call(this, f ? l : Mt(l)) || this);
        var m = h.vars,
          v = m.duration,
          w = m.delay,
          O = m.immediateRender,
          D = m.stagger,
          I = m.overwrite,
          V = m.keyframes,
          k = m.defaults,
          Y = m.scrollTrigger,
          U = m.yoyoEase,
          K = l.parent || se,
          Z = (z(a) || R(a) ? A(a[0]) : "length" in l) ? [a] : Gt(a),
          J,
          $,
          ae,
          oe,
          le,
          ee,
          ze,
          it;
        if (
          ((h._targets = Z.length
            ? gr(Z)
            : xe(
                "GSAP target " + a + " not found. https://gsap.com",
                !u.nullTargetWarn
              ) || []),
          (h._ptLookup = []),
          (h._overwrite = I),
          V || D || re(v) || re(w))
        ) {
          if (
            ((l = h.vars),
            (J = h.timeline =
              new At({
                data: "nested",
                defaults: k || {},
                targets: K && K.data === "nested" ? K.vars.targets : Z,
              })),
            J.kill(),
            (J.parent = J._dp = o(h)),
            (J._start = 0),
            D || re(v) || re(w))
          ) {
            if (((oe = Z.length), (ze = D && Xr(D)), q(D)))
              for (le in D)
                ~wa.indexOf(le) && (it || (it = {}), (it[le] = D[le]));
            for ($ = 0; $ < oe; $++)
              (ae = _r(l, xa)),
                (ae.stagger = 0),
                U && (ae.yoyoEase = U),
                it && Ut(ae, it),
                (ee = Z[$]),
                (ae.duration = +Wi(v, o(h), $, ee, Z)),
                (ae.delay = (+Wi(w, o(h), $, ee, Z) || 0) - h._delay),
                !D &&
                  oe === 1 &&
                  ae.delay &&
                  ((h._delay = w = ae.delay), (h._start += w), (ae.delay = 0)),
                J.to(ee, ae, ze ? ze($, ee, Z) : 0),
                (J._ease = Oe.none);
            J.duration() ? (v = w = 0) : (h.timeline = 0);
          } else if (V) {
            Mt(mt(J.vars.defaults, { ease: "none" })),
              (J._ease = ai(V.ease || l.ease || "none"));
            var Ke = 0,
              Qe,
              Lt,
              St;
            if (z(V))
              V.forEach(function (_t) {
                return J.to(Z, _t, ">");
              }),
                J.duration();
            else {
              ae = {};
              for (le in V)
                le === "ease" ||
                  le === "easeEach" ||
                  yl(le, V[le], ae, V.easeEach);
              for (le in ae)
                for (
                  Qe = ae[le].sort(function (_t, Ct) {
                    return _t.t - Ct.t;
                  }),
                    Ke = 0,
                    $ = 0;
                  $ < Qe.length;
                  $++
                )
                  (Lt = Qe[$]),
                    (St = {
                      ease: Lt.e,
                      duration: ((Lt.t - ($ ? Qe[$ - 1].t : 0)) / 100) * v,
                    }),
                    (St[le] = Lt.v),
                    J.to(Z, St, Ke),
                    (Ke += St.duration);
              J.duration() < v && J.to({}, { duration: v - J.duration() });
            }
          }
          v || h.duration((v = J.duration()));
        } else h.timeline = 0;
        return (
          I === !0 && !d && ((jr = o(h)), se.killTweensOf(Z), (jr = 0)),
          be(K, o(h), c),
          l.reversed && h.reverse(),
          l.paused && h.paused(!0),
          (O ||
            (!v &&
              !V &&
              h._start === Ie(K._time) &&
              N(O) &&
              ge(o(h)) &&
              K.data !== "nested")) &&
            ((h._tTime = -x), h.render(Math.max(0, -w) || 0)),
          Y && tt(o(h), Y),
          h
        );
      }
      var n = t.prototype;
      return (
        (n.render = function (l, c, f) {
          var h = this._time,
            m = this._tDur,
            v = this._dur,
            w = l < 0,
            O = l > m - x && !w ? m : l < x ? 0 : l,
            D,
            I,
            V,
            k,
            Y,
            U,
            K,
            Z,
            J;
          if (!v) He(this, l, c, f);
          else if (
            O !== this._tTime ||
            !l ||
            f ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== w) ||
            this._lazy
          ) {
            if (((D = O), (Z = this.timeline), this._repeat)) {
              if (((k = v + this._rDelay), this._repeat < -1 && w))
                return this.totalTime(k * 100 + l, c, f);
              if (
                ((D = Ie(O % k)),
                O === m
                  ? ((V = this._repeat), (D = v))
                  : ((Y = Ie(O / k)),
                    (V = ~~Y),
                    V && V === Y ? ((D = v), V--) : D > v && (D = v)),
                (U = this._yoyo && V & 1),
                U && ((J = this._yEase), (D = v - D)),
                (Y = te(this._tTime, k)),
                D === h && !f && this._initted && V === Y)
              )
                return (this._tTime = O), this;
              V !== Y &&
                (Z && this._yEase && _a(Z, U),
                this.vars.repeatRefresh &&
                  !U &&
                  !this._lock &&
                  D !== k &&
                  this._initted &&
                  ((this._lock = f = 1),
                  (this.render(Ie(k * V), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (yt(this, w ? l : D, f, c, O)) return (this._tTime = 0), this;
              if (
                h !== this._time &&
                !(f && this.vars.repeatRefresh && V !== Y)
              )
                return this;
              if (v !== this._dur) return this.render(l, c, f);
            }
            if (
              ((this._tTime = O),
              (this._time = D),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = K = (J || this._ease)(D / v)),
              this._from && (this.ratio = K = 1 - K),
              !h && O && !c && !Y && (lr(this, "onStart"), this._tTime !== O))
            )
              return this;
            for (I = this._pt; I; ) I.r(K, I.d), (I = I._next);
            (Z &&
              Z.render(l < 0 ? l : Z._dur * Z._ease(D / this._dur), c, f)) ||
              (this._startAt && (this._zTime = l)),
              this._onUpdate &&
                !c &&
                (w && ve(this, l, c, f), lr(this, "onUpdate")),
              this._repeat &&
                V !== Y &&
                this.vars.onRepeat &&
                !c &&
                this.parent &&
                lr(this, "onRepeat"),
              (O === this._tDur || !O) &&
                this._tTime === O &&
                (w && !this._onUpdate && ve(this, l, !0, !0),
                (l || !v) &&
                  ((O === this._tDur && this._ts > 0) ||
                    (!O && this._ts < 0)) &&
                  Nt(this, 1),
                !c &&
                  !(w && !h) &&
                  (O || h || U) &&
                  (lr(this, O === m ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(O < m && this.timeScale() > 0) &&
                    this._prom()));
          }
          return this;
        }),
        (n.targets = function () {
          return this._targets;
        }),
        (n.invalidate = function (l) {
          return (
            (!l || !this.vars.runBackwards) && (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(l),
            _.prototype.invalidate.call(this, l)
          );
        }),
        (n.resetTo = function (l, c, f, h, m) {
          qi || ur.wake(), this._ts || this.play();
          var v = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            ),
            w;
          return (
            this._initted || ss(this, v),
            (w = this._ease(v / this._dur)),
            vl(this, l, c, f, h, w, v, m)
              ? this.resetTo(l, c, f, h, 1)
              : (_e(this, 0),
                this.parent ||
                  Kt(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0))
          );
        }),
        (n.kill = function (l, c) {
          if ((c === void 0 && (c = "all"), !l && (!c || c === "all")))
            return (
              (this._lazy = this._pt = 0),
              this.parent
                ? Hi(this)
                : this.scrollTrigger && this.scrollTrigger.kill(!!y),
              this
            );
          if (this.timeline) {
            var f = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(l, c, jr && jr.vars.overwrite !== !0)
                ._first || Hi(this),
              this.parent &&
                f !== this.timeline.totalDuration() &&
                Be(this, (this._dur * this.timeline._tDur) / f, 0, 1),
              this
            );
          }
          var h = this._targets,
            m = l ? Gt(l) : h,
            v = this._ptLookup,
            w = this._pt,
            O,
            D,
            I,
            V,
            k,
            Y,
            U;
          if ((!c || c === "all") && ir(h, m))
            return c === "all" && (this._pt = 0), Hi(this);
          for (
            O = this._op = this._op || [],
              c !== "all" &&
                (b(c) &&
                  ((k = {}),
                  at(c, function (K) {
                    return (k[K] = 1);
                  }),
                  (c = k)),
                (c = bl(h, c))),
              U = h.length;
            U--;

          )
            if (~m.indexOf(h[U])) {
              (D = v[U]),
                c === "all"
                  ? ((O[U] = c), (V = D), (I = {}))
                  : ((I = O[U] = O[U] || {}), (V = c));
              for (k in V)
                (Y = D && D[k]),
                  Y &&
                    ((!("kill" in Y.d) || Y.d.kill(k) === !0) &&
                      vr(this, Y, "_pt"),
                    delete D[k]),
                  I !== "all" && (I[k] = 1);
            }
          return this._initted && !this._pt && w && Hi(this), this;
        }),
        (t.to = function (l, c) {
          return new t(l, c, arguments[2]);
        }),
        (t.from = function (l, c) {
          return ot(1, arguments);
        }),
        (t.delayedCall = function (l, c, f, h) {
          return new t(c, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: l,
            onComplete: c,
            onReverseComplete: c,
            onCompleteParams: f,
            onReverseCompleteParams: f,
            callbackScope: h,
          });
        }),
        (t.fromTo = function (l, c, f) {
          return ot(2, arguments);
        }),
        (t.set = function (l, c) {
          return (c.duration = 0), c.repeatDelay || (c.repeat = 0), new t(l, c);
        }),
        (t.killTweensOf = function (l, c, f) {
          return se.killTweensOf(l, c, f);
        }),
        t
      );
    })(Xi);
    mt(ht.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      at("staggerTo,staggerFrom,staggerFromTo", function (_) {
        ht[_] = function () {
          var t = new At(),
            n = lt.call(arguments, 0);
          return (
            n.splice(_ === "staggerFromTo" ? 5 : 4, 0, 0), t[_].apply(t, n)
          );
        };
      });
    var as = function (t, n, a) {
        return (t[n] = a);
      },
      Ta = function (t, n, a) {
        return t[n](a);
      },
      wl = function (t, n, a, l) {
        return t[n](l.fp, a);
      },
      xl = function (t, n, a) {
        return t.setAttribute(n, a);
      },
      os = function (t, n) {
        return S(t[n]) ? Ta : H(t[n]) && t.setAttribute ? xl : as;
      },
      Sa = function (t, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n);
      },
      Tl = function (t, n) {
        return n.set(n.t, n.p, !!(n.s + n.c * t), n);
      },
      Ca = function (t, n) {
        var a = n._pt,
          l = "";
        if (!t && n.b) l = n.b;
        else if (t === 1 && n.e) l = n.e;
        else {
          for (; a; )
            (l =
              a.p +
              (a.m
                ? a.m(a.s + a.c * t)
                : Math.round((a.s + a.c * t) * 1e4) / 1e4) +
              l),
              (a = a._next);
          l += n.c;
        }
        n.set(n.t, n.p, l, n);
      },
      ls = function (t, n) {
        for (var a = n._pt; a; ) a.r(t, a.d), (a = a._next);
      },
      Sl = function (t, n, a, l) {
        for (var c = this._pt, f; c; )
          (f = c._next), c.p === l && c.modifier(t, n, a), (c = f);
      },
      Cl = function (t) {
        for (var n = this._pt, a, l; n; )
          (l = n._next),
            (n.p === t && !n.op) || n.op === t
              ? vr(this, n, "_pt")
              : n.dep || (a = 1),
            (n = l);
        return !a;
      },
      El = function (t, n, a, l) {
        l.mSet(t, n, l.m.call(l.tween, a, l.mt), l);
      },
      Ea = function (t) {
        for (var n = t._pt, a, l, c, f; n; ) {
          for (a = n._next, l = c; l && l.pr > n.pr; ) l = l._next;
          (n._prev = l ? l._prev : f) ? (n._prev._next = n) : (c = n),
            (n._next = l) ? (l._prev = n) : (f = n),
            (n = a);
        }
        t._pt = c;
      },
      Qt = (function () {
        function _(n, a, l, c, f, h, m, v, w) {
          (this.t = a),
            (this.s = c),
            (this.c = f),
            (this.p = l),
            (this.r = h || Sa),
            (this.d = m || this),
            (this.set = v || as),
            (this.pr = w || 0),
            (this._next = n),
            n && (n._prev = this);
        }
        var t = _.prototype;
        return (
          (t.modifier = function (a, l, c) {
            (this.mSet = this.mSet || this.set),
              (this.set = El),
              (this.m = a),
              (this.mt = c),
              (this.tween = l);
          }),
          _
        );
      })();
    at(
      rr +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (_) {
        return (he[_] = 1);
      }
    ),
      (Le.TweenMax = Le.TweenLite = ht),
      (Le.TimelineLite = Le.TimelineMax = At),
      (se = new At({
        sortChildren: !1,
        defaults: p,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (u.stringFilter = ga);
    var li = [],
      vn = {},
      Pl = [],
      Pa = 0,
      kl = 0,
      us = function (t) {
        return (vn[t] || Pl).map(function (n) {
          return n();
        });
      },
      cs = function () {
        var t = Date.now(),
          n = [];
        t - Pa > 2 &&
          (us("matchMediaInit"),
          li.forEach(function (a) {
            var l = a.queries,
              c = a.conditions,
              f,
              h,
              m,
              v;
            for (h in l)
              (f = M.matchMedia(l[h]).matches),
                f && (m = 1),
                f !== c[h] && ((c[h] = f), (v = 1));
            v && (a.revert(), m && n.push(a));
          }),
          us("matchMediaRevert"),
          n.forEach(function (a) {
            return a.onMatch(a, function (l) {
              return a.add(null, l);
            });
          }),
          (Pa = t),
          us("matchMedia"));
      },
      ka = (function () {
        function _(n, a) {
          (this.selector = a && Br(a)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = kl++),
            n && this.add(n);
        }
        var t = _.prototype;
        return (
          (t.add = function (a, l, c) {
            S(a) && ((c = l), (l = a), (a = S));
            var f = this,
              h = function () {
                var v = g,
                  w = f.selector,
                  O;
                return (
                  v && v !== f && v.data.push(f),
                  c && (f.selector = Br(c)),
                  (g = f),
                  (O = l.apply(f, arguments)),
                  S(O) && f._r.push(O),
                  (g = v),
                  (f.selector = w),
                  (f.isReverted = !1),
                  O
                );
              };
            return (
              (f.last = h),
              a === S
                ? h(f, function (m) {
                    return f.add(null, m);
                  })
                : a
                ? (f[a] = h)
                : h
            );
          }),
          (t.ignore = function (a) {
            var l = g;
            (g = null), a(this), (g = l);
          }),
          (t.getTweens = function () {
            var a = [];
            return (
              this.data.forEach(function (l) {
                return l instanceof _
                  ? a.push.apply(a, l.getTweens())
                  : l instanceof ht &&
                      !(l.parent && l.parent.data === "nested") &&
                      a.push(l);
              }),
              a
            );
          }),
          (t.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (t.kill = function (a, l) {
            var c = this;
            if (
              (a
                ? (function () {
                    for (var h = c.getTweens(), m = c.data.length, v; m--; )
                      (v = c.data[m]),
                        v.data === "isFlip" &&
                          (v.revert(),
                          v.getChildren(!0, !0, !1).forEach(function (w) {
                            return h.splice(h.indexOf(w), 1);
                          }));
                    for (
                      h
                        .map(function (w) {
                          return {
                            g:
                              w._dur ||
                              w._delay ||
                              (w._sat && !w._sat.vars.immediateRender)
                                ? w.globalTime(0)
                                : -1 / 0,
                            t: w,
                          };
                        })
                        .sort(function (w, O) {
                          return O.g - w.g || -1 / 0;
                        })
                        .forEach(function (w) {
                          return w.t.revert(a);
                        }),
                        m = c.data.length;
                      m--;

                    )
                      (v = c.data[m]),
                        v instanceof At
                          ? v.data !== "nested" &&
                            (v.scrollTrigger && v.scrollTrigger.revert(),
                            v.kill())
                          : !(v instanceof ht) && v.revert && v.revert(a);
                    c._r.forEach(function (w) {
                      return w(a, c);
                    }),
                      (c.isReverted = !0);
                  })()
                : this.data.forEach(function (h) {
                    return h.kill && h.kill();
                  }),
              this.clear(),
              l)
            )
              for (var f = li.length; f--; )
                li[f].id === this.id && li.splice(f, 1);
          }),
          (t.revert = function (a) {
            this.kill(a || {});
          }),
          _
        );
      })(),
      Ml = (function () {
        function _(n) {
          (this.contexts = []), (this.scope = n), g && g.data.push(this);
        }
        var t = _.prototype;
        return (
          (t.add = function (a, l, c) {
            q(a) || (a = { matches: a });
            var f = new ka(0, c || this.scope),
              h = (f.conditions = {}),
              m,
              v,
              w;
            g && !f.selector && (f.selector = g.selector),
              this.contexts.push(f),
              (l = f.add("onMatch", l)),
              (f.queries = a);
            for (v in a)
              v === "all"
                ? (w = 1)
                : ((m = M.matchMedia(a[v])),
                  m &&
                    (li.indexOf(f) < 0 && li.push(f),
                    (h[v] = m.matches) && (w = 1),
                    m.addListener
                      ? m.addListener(cs)
                      : m.addEventListener("change", cs)));
            return (
              w &&
                l(f, function (O) {
                  return f.add(null, O);
                }),
              this
            );
          }),
          (t.revert = function (a) {
            this.kill(a || {});
          }),
          (t.kill = function (a) {
            this.contexts.forEach(function (l) {
              return l.kill(a, !0);
            });
          }),
          _
        );
      })(),
      bn = {
        registerPlugin: function () {
          for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
            n[a] = arguments[a];
          n.forEach(function (l) {
            return fa(l);
          });
        },
        timeline: function (t) {
          return new At(t);
        },
        getTweensOf: function (t, n) {
          return se.getTweensOf(t, n);
        },
        getProperty: function (t, n, a, l) {
          b(t) && (t = Gt(t)[0]);
          var c = Bt(t || {}).get,
            f = a ? Fr : mr;
          return (
            a === "native" && (a = ""),
            t &&
              (n
                ? f(((Xe[n] && Xe[n].get) || c)(t, n, a, l))
                : function (h, m, v) {
                    return f(((Xe[h] && Xe[h].get) || c)(t, h, m, v));
                  })
          );
        },
        quickSetter: function (t, n, a) {
          if (((t = Gt(t)), t.length > 1)) {
            var l = t.map(function (w) {
                return Zt.quickSetter(w, n, a);
              }),
              c = l.length;
            return function (w) {
              for (var O = c; O--; ) l[O](w);
            };
          }
          t = t[0] || {};
          var f = Xe[n],
            h = Bt(t),
            m = (h.harness && (h.harness.aliases || {})[n]) || n,
            v = f
              ? function (w) {
                  var O = new f();
                  (Ci._pt = 0),
                    O.init(t, a ? w + a : w, Ci, 0, [t]),
                    O.render(1, O),
                    Ci._pt && ls(1, Ci);
                }
              : h.set(t, m);
          return f
            ? v
            : function (w) {
                return v(t, m, a ? w + a : w, h, 1);
              };
        },
        quickTo: function (t, n, a) {
          var l,
            c = Zt.to(
              t,
              mt(
                ((l = {}),
                (l[n] = "+=0.1"),
                (l.paused = !0),
                (l.stagger = 0),
                l),
                a || {}
              )
            ),
            f = function (m, v, w) {
              return c.resetTo(n, m, v, w);
            };
          return (f.tween = c), f;
        },
        isTweening: function (t) {
          return se.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = ai(t.ease, p.ease)), Te(p, t || {});
        },
        config: function (t) {
          return Te(u, t || {});
        },
        registerEffect: function (t) {
          var n = t.name,
            a = t.effect,
            l = t.plugins,
            c = t.defaults,
            f = t.extendTimeline;
          (l || "").split(",").forEach(function (h) {
            return (
              h &&
              !Xe[h] &&
              !Le[h] &&
              xe(n + " effect requires " + h + " plugin.")
            );
          }),
            (tr[n] = function (h, m, v) {
              return a(Gt(h), mt(m || {}, c), v);
            }),
            f &&
              (At.prototype[n] = function (h, m, v) {
                return this.add(tr[n](h, q(m) ? m : (v = m) && {}, this), v);
              });
        },
        registerEase: function (t, n) {
          Oe[t] = ai(n);
        },
        parseEase: function (t, n) {
          return arguments.length ? ai(t, n) : Oe;
        },
        getById: function (t) {
          return se.getById(t);
        },
        exportRoot: function (t, n) {
          t === void 0 && (t = {});
          var a = new At(t),
            l,
            c;
          for (
            a.smoothChildTiming = N(t.smoothChildTiming),
              se.remove(a),
              a._dp = 0,
              a._time = a._tTime = se._time,
              l = se._first;
            l;

          )
            (c = l._next),
              (n ||
                !(
                  !l._dur &&
                  l instanceof ht &&
                  l.vars.onComplete === l._targets[0]
                )) &&
                be(a, l, l._start - l._delay),
              (l = c);
          return be(se, a, 0), a;
        },
        context: function (t, n) {
          return t ? new ka(t, n) : g;
        },
        matchMedia: function (t) {
          return new Ml(t);
        },
        matchMediaRefresh: function () {
          return (
            li.forEach(function (t) {
              var n = t.conditions,
                a,
                l;
              for (l in n) n[l] && ((n[l] = !1), (a = 1));
              a && t.revert();
            }) || cs()
          );
        },
        addEventListener: function (t, n) {
          var a = vn[t] || (vn[t] = []);
          ~a.indexOf(n) || a.push(n);
        },
        removeEventListener: function (t, n) {
          var a = vn[t],
            l = a && a.indexOf(n);
          l >= 0 && a.splice(l, 1);
        },
        utils: {
          wrap: ol,
          wrapYoyo: ll,
          distribute: Xr,
          random: aa,
          snap: Er,
          normalize: al,
          getUnit: pt,
          clamp: Tt,
          splitColor: da,
          toArray: Gt,
          selector: Br,
          mapRange: la,
          pipe: nl,
          unitize: sl,
          interpolate: ul,
          shuffle: or,
        },
        install: Fe,
        effects: tr,
        ticker: ur,
        updateRoot: At.updateRoot,
        plugins: Xe,
        globalTimeline: se,
        core: {
          PropTween: Qt,
          globals: De,
          Tween: ht,
          Timeline: At,
          Animation: Xi,
          getCache: Bt,
          _removeLinkedListItem: vr,
          reverting: function () {
            return y;
          },
          context: function (t) {
            return t && g && (g.data.push(t), (t._ctx = g)), g;
          },
          suppressOverwrites: function (t) {
            return (d = t);
          },
        },
      };
    at("to,from,fromTo,delayedCall,set,killTweensOf", function (_) {
      return (bn[_] = ht[_]);
    }),
      ur.add(At.updateRoot),
      (Ci = bn.to({}, { duration: 0 }));
    var Ol = function (t, n) {
        for (var a = t._pt; a && a.p !== n && a.op !== n && a.fp !== n; )
          a = a._next;
        return a;
      },
      Al = function (t, n) {
        var a = t._targets,
          l,
          c,
          f;
        for (l in n)
          for (c = a.length; c--; )
            (f = t._ptLookup[c][l]),
              f &&
                (f = f.d) &&
                (f._pt && (f = Ol(f, l)),
                f && f.modifier && f.modifier(n[l], t, a[c], l));
      },
      fs = function (t, n) {
        return {
          name: t,
          headless: 1,
          rawVars: 1,
          init: function (l, c, f) {
            f._onInit = function (h) {
              var m, v;
              if (
                (b(c) &&
                  ((m = {}),
                  at(c, function (w) {
                    return (m[w] = 1);
                  }),
                  (c = m)),
                n)
              ) {
                m = {};
                for (v in c) m[v] = n(c[v]);
                c = m;
              }
              Al(h, c);
            };
          },
        };
      },
      Zt =
        bn.registerPlugin(
          {
            name: "attr",
            init: function (t, n, a, l, c) {
              var f, h, m;
              this.tween = a;
              for (f in n)
                (m = t.getAttribute(f) || ""),
                  (h = this.add(
                    t,
                    "setAttribute",
                    (m || 0) + "",
                    n[f],
                    l,
                    c,
                    0,
                    0,
                    f
                  )),
                  (h.op = f),
                  (h.b = m),
                  this._props.push(f);
            },
            render: function (t, n) {
              for (var a = n._pt; a; )
                y ? a.set(a.t, a.p, a.b, a) : a.r(t, a.d), (a = a._next);
            },
          },
          {
            name: "endArray",
            headless: 1,
            init: function (t, n) {
              for (var a = n.length; a--; )
                this.add(t, a, t[a] || 0, n[a], 0, 0, 0, 0, 0, 1);
            },
          },
          fs("roundProps", Wr),
          fs("modifiers"),
          fs("snap", Er)
        ) || bn;
    (ht.version = At.version = Zt.version = "3.13.0"), (nt = 1), j() && Ei();
    var Ll = Oe.Power0,
      Dl = Oe.Power1,
      Il = Oe.Power2,
      zl = Oe.Power3,
      Rl = Oe.Power4,
      Fl = Oe.Linear,
      Bl = Oe.Quad,
      Nl = Oe.Cubic,
      Gl = Oe.Quart,
      Vl = Oe.Quint,
      Hl = Oe.Strong,
      Yl = Oe.Elastic,
      ql = Oe.Back,
      Xl = Oe.SteppedEase,
      Wl = Oe.Bounce,
      $l = Oe.Sine,
      jl = Oe.Expo,
      Ul = Oe.Circ,
      Ma,
      Ur,
      Pi,
      ds,
      ui,
      Oa,
      ps,
      Kl = function () {
        return typeof window != "undefined";
      },
      Nr = {},
      ci = 180 / Math.PI,
      ki = Math.PI / 180,
      Mi = Math.atan2,
      Aa = 1e8,
      hs = /([A-Z])/g,
      Ql = /(left|right|width|margin|padding|x)/i,
      Zl = /[\s,\(]\S/,
      Ar = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      gs = function (t, n) {
        return n.set(
          n.t,
          n.p,
          Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u,
          n
        );
      },
      Jl = function (t, n) {
        return n.set(
          n.t,
          n.p,
          t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u,
          n
        );
      },
      eu = function (t, n) {
        return n.set(
          n.t,
          n.p,
          t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b,
          n
        );
      },
      tu = function (t, n) {
        var a = n.s + n.c * t;
        n.set(n.t, n.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + n.u, n);
      },
      La = function (t, n) {
        return n.set(n.t, n.p, t ? n.e : n.b, n);
      },
      Da = function (t, n) {
        return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n);
      },
      ru = function (t, n, a) {
        return (t.style[n] = a);
      },
      iu = function (t, n, a) {
        return t.style.setProperty(n, a);
      },
      nu = function (t, n, a) {
        return (t._gsap[n] = a);
      },
      su = function (t, n, a) {
        return (t._gsap.scaleX = t._gsap.scaleY = a);
      },
      au = function (t, n, a, l, c) {
        var f = t._gsap;
        (f.scaleX = f.scaleY = a), f.renderTransform(c, f);
      },
      ou = function (t, n, a, l, c) {
        var f = t._gsap;
        (f[n] = a), f.renderTransform(c, f);
      },
      ut = "transform",
      Jt = ut + "Origin",
      lu = function _(t, n) {
        var a = this,
          l = this.target,
          c = l.style,
          f = l._gsap;
        if (t in Nr && c) {
          if (((this.tfm = this.tfm || {}), t !== "transform"))
            (t = Ar[t] || t),
              ~t.indexOf(",")
                ? t.split(",").forEach(function (h) {
                    return (a.tfm[h] = Gr(l, h));
                  })
                : (this.tfm[t] = f.x ? f[t] : Gr(l, t)),
              t === Jt && (this.tfm.zOrigin = f.zOrigin);
          else
            return Ar.transform.split(",").forEach(function (h) {
              return _.call(a, h, n);
            });
          if (this.props.indexOf(ut) >= 0) return;
          f.svg &&
            ((this.svgo = l.getAttribute("data-svg-origin")),
            this.props.push(Jt, n, "")),
            (t = ut);
        }
        (c || n) && this.props.push(t, n, c[t]);
      },
      Ia = function (t) {
        t.translate &&
          (t.removeProperty("translate"),
          t.removeProperty("scale"),
          t.removeProperty("rotate"));
      },
      uu = function () {
        var t = this.props,
          n = this.target,
          a = n.style,
          l = n._gsap,
          c,
          f;
        for (c = 0; c < t.length; c += 3)
          t[c + 1]
            ? t[c + 1] === 2
              ? n[t[c]](t[c + 2])
              : (n[t[c]] = t[c + 2])
            : t[c + 2]
            ? (a[t[c]] = t[c + 2])
            : a.removeProperty(
                t[c].substr(0, 2) === "--"
                  ? t[c]
                  : t[c].replace(hs, "-$1").toLowerCase()
              );
        if (this.tfm) {
          for (f in this.tfm) l[f] = this.tfm[f];
          l.svg &&
            (l.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            (c = ps()),
            (!c || !c.isStart) &&
              !a[ut] &&
              (Ia(a),
              l.zOrigin &&
                a[Jt] &&
                ((a[Jt] += " " + l.zOrigin + "px"),
                (l.zOrigin = 0),
                l.renderTransform()),
              (l.uncache = 1));
        }
      },
      za = function (t, n) {
        var a = { target: t, props: [], revert: uu, save: lu };
        return (
          t._gsap || Zt.core.getCache(t),
          n &&
            t.style &&
            t.nodeType &&
            n.split(",").forEach(function (l) {
              return a.save(l);
            }),
          a
        );
      },
      Ra,
      ms = function (t, n) {
        var a = Ur.createElementNS
          ? Ur.createElementNS(
              (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t
            )
          : Ur.createElement(t);
        return a && a.style ? a : Ur.createElement(t);
      },
      yr = function _(t, n, a) {
        var l = getComputedStyle(t);
        return (
          l[n] ||
          l.getPropertyValue(n.replace(hs, "-$1").toLowerCase()) ||
          l.getPropertyValue(n) ||
          (!a && _(t, Oi(n) || n, 1)) ||
          ""
        );
      },
      Fa = "O,Moz,ms,Ms,Webkit".split(","),
      Oi = function (t, n, a) {
        var l = n || ui,
          c = l.style,
          f = 5;
        if (t in c && !a) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          f-- && !(Fa[f] + t in c);

        );
        return f < 0 ? null : (f === 3 ? "ms" : f >= 0 ? Fa[f] : "") + t;
      },
      _s = function () {
        Kl() &&
          window.document &&
          ((Ma = window),
          (Ur = Ma.document),
          (Pi = Ur.documentElement),
          (ui = ms("div") || { style: {} }),
          ms("div"),
          (ut = Oi(ut)),
          (Jt = ut + "Origin"),
          (ui.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (Ra = !!Oi("perspective")),
          (ps = Zt.core.reverting),
          (ds = 1));
      },
      Ba = function (t) {
        var n = t.ownerSVGElement,
          a = ms(
            "svg",
            (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
          ),
          l = t.cloneNode(!0),
          c;
        (l.style.display = "block"), a.appendChild(l), Pi.appendChild(a);
        try {
          c = l.getBBox();
        } catch (f) {}
        return a.removeChild(l), Pi.removeChild(a), c;
      },
      Na = function (t, n) {
        for (var a = n.length; a--; )
          if (t.hasAttribute(n[a])) return t.getAttribute(n[a]);
      },
      Ga = function (t) {
        var n, a;
        try {
          n = t.getBBox();
        } catch (l) {
          (n = Ba(t)), (a = 1);
        }
        return (
          (n && (n.width || n.height)) || a || (n = Ba(t)),
          n && !n.width && !n.x && !n.y
            ? {
                x: +Na(t, ["x", "cx", "x1"]) || 0,
                y: +Na(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
            : n
        );
      },
      Va = function (t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ga(t));
      },
      fi = function (t, n) {
        if (n) {
          var a = t.style,
            l;
          n in Nr && n !== Jt && (n = ut),
            a.removeProperty
              ? ((l = n.substr(0, 2)),
                (l === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
                a.removeProperty(
                  l === "--" ? n : n.replace(hs, "-$1").toLowerCase()
                ))
              : a.removeAttribute(n);
        }
      },
      Kr = function (t, n, a, l, c, f) {
        var h = new Qt(t._pt, n, a, 0, 1, f ? Da : La);
        return (t._pt = h), (h.b = l), (h.e = c), t._props.push(a), h;
      },
      Ha = { deg: 1, rad: 1, turn: 1 },
      cu = { grid: 1, flex: 1 },
      Qr = function _(t, n, a, l) {
        var c = parseFloat(a) || 0,
          f = (a + "").trim().substr((c + "").length) || "px",
          h = ui.style,
          m = Ql.test(n),
          v = t.tagName.toLowerCase() === "svg",
          w = (v ? "client" : "offset") + (m ? "Width" : "Height"),
          O = 100,
          D = l === "px",
          I = l === "%",
          V,
          k,
          Y,
          U;
        if (l === f || !c || Ha[l] || Ha[f]) return c;
        if (
          (f !== "px" && !D && (c = _(t, n, a, "px")),
          (U = t.getCTM && Va(t)),
          (I || f === "%") && (Nr[n] || ~n.indexOf("adius")))
        )
          return (
            (V = U ? t.getBBox()[m ? "width" : "height"] : t[w]),
            ye(I ? (c / V) * O : (c / 100) * V)
          );
        if (
          ((h[m ? "width" : "height"] = O + (D ? f : l)),
          (k =
            (l !== "rem" && ~n.indexOf("adius")) ||
            (l === "em" && t.appendChild && !v)
              ? t
              : t.parentNode),
          U && (k = (t.ownerSVGElement || {}).parentNode),
          (!k || k === Ur || !k.appendChild) && (k = Ur.body),
          (Y = k._gsap),
          Y && I && Y.width && m && Y.time === ur.time && !Y.uncache)
        )
          return ye((c / Y.width) * O);
        if (I && (n === "height" || n === "width")) {
          var K = t.style[n];
          (t.style[n] = O + l), (V = t[w]), K ? (t.style[n] = K) : fi(t, n);
        } else
          (I || f === "%") &&
            !cu[yr(k, "display")] &&
            (h.position = yr(t, "position")),
            k === t && (h.position = "static"),
            k.appendChild(ui),
            (V = ui[w]),
            k.removeChild(ui),
            (h.position = "absolute");
        return (
          m && I && ((Y = Bt(k)), (Y.time = ur.time), (Y.width = k[w])),
          ye(D ? (V * c) / O : V && c ? (O / V) * c : 0)
        );
      },
      Gr = function (t, n, a, l) {
        var c;
        return (
          ds || _s(),
          n in Ar &&
            n !== "transform" &&
            ((n = Ar[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
          Nr[n] && n !== "transform"
            ? ((c = ji(t, l)),
              (c =
                n !== "transformOrigin"
                  ? c[n]
                  : c.svg
                  ? c.origin
                  : wn(yr(t, Jt)) + " " + c.zOrigin + "px"))
            : ((c = t.style[n]),
              (!c || c === "auto" || l || ~(c + "").indexOf("calc(")) &&
                (c =
                  (yn[n] && yn[n](t, n, a)) ||
                  yr(t, n) ||
                  ft(t, n) ||
                  (n === "opacity" ? 1 : 0))),
          a && !~(c + "").trim().indexOf(" ") ? Qr(t, n, c, a) + a : c
        );
      },
      fu = function (t, n, a, l) {
        if (!a || a === "none") {
          var c = Oi(n, t, 1),
            f = c && yr(t, c, 1);
          f && f !== a
            ? ((n = c), (a = f))
            : n === "borderColor" && (a = yr(t, "borderTopColor"));
        }
        var h = new Qt(this._pt, t.style, n, 0, 1, Ca),
          m = 0,
          v = 0,
          w,
          O,
          D,
          I,
          V,
          k,
          Y,
          U,
          K,
          Z,
          J,
          $;
        if (
          ((h.b = a),
          (h.e = l),
          (a += ""),
          (l += ""),
          l.substring(0, 6) === "var(--" &&
            (l = yr(t, l.substring(4, l.indexOf(")")))),
          l === "auto" &&
            ((k = t.style[n]),
            (t.style[n] = l),
            (l = yr(t, n) || l),
            k ? (t.style[n] = k) : fi(t, n)),
          (w = [a, l]),
          ga(w),
          (a = w[0]),
          (l = w[1]),
          (D = a.match(W) || []),
          ($ = l.match(W) || []),
          $.length)
        ) {
          for (; (O = W.exec(l)); )
            (Y = O[0]),
              (K = l.substring(m, O.index)),
              V
                ? (V = (V + 1) % 5)
                : (K.substr(-5) === "rgba(" || K.substr(-5) === "hsla(") &&
                  (V = 1),
              Y !== (k = D[v++] || "") &&
                ((I = parseFloat(k) || 0),
                (J = k.substr((I + "").length)),
                Y.charAt(1) === "=" && (Y = bt(I, Y) + J),
                (U = parseFloat(Y)),
                (Z = Y.substr((U + "").length)),
                (m = W.lastIndex - Z.length),
                Z ||
                  ((Z = Z || u.units[n] || J),
                  m === l.length && ((l += Z), (h.e += Z))),
                J !== Z && (I = Qr(t, n, k, Z) || 0),
                (h._pt = {
                  _next: h._pt,
                  p: K || v === 1 ? K : ",",
                  s: I,
                  c: U - I,
                  m: (V && V < 4) || n === "zIndex" ? Math.round : 0,
                }));
          h.c = m < l.length ? l.substring(m, l.length) : "";
        } else h.r = n === "display" && l === "none" ? Da : La;
        return ie.test(l) && (h.e = 0), (this._pt = h), h;
      },
      Ya = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      du = function (t) {
        var n = t.split(" "),
          a = n[0],
          l = n[1] || "50%";
        return (
          (a === "top" || a === "bottom" || l === "left" || l === "right") &&
            ((t = a), (a = l), (l = t)),
          (n[0] = Ya[a] || a),
          (n[1] = Ya[l] || l),
          n.join(" ")
        );
      },
      pu = function (t, n) {
        if (n.tween && n.tween._time === n.tween._dur) {
          var a = n.t,
            l = a.style,
            c = n.u,
            f = a._gsap,
            h,
            m,
            v;
          if (c === "all" || c === !0) (l.cssText = ""), (m = 1);
          else
            for (c = c.split(","), v = c.length; --v > -1; )
              (h = c[v]),
                Nr[h] && ((m = 1), (h = h === "transformOrigin" ? Jt : ut)),
                fi(a, h);
          m &&
            (fi(a, ut),
            f &&
              (f.svg && a.removeAttribute("transform"),
              (l.scale = l.rotate = l.translate = "none"),
              ji(a, 1),
              (f.uncache = 1),
              Ia(l)));
        }
      },
      yn = {
        clearProps: function (t, n, a, l, c) {
          if (c.data !== "isFromStart") {
            var f = (t._pt = new Qt(t._pt, n, a, 0, 0, pu));
            return (f.u = l), (f.pr = -10), (f.tween = c), t._props.push(a), 1;
          }
        },
      },
      $i = [1, 0, 0, 1, 0, 0],
      qa = {},
      Xa = function (t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
      },
      Wa = function (t) {
        var n = yr(t, ut);
        return Xa(n) ? $i : n.substr(7).match(Q).map(ye);
      },
      vs = function (t, n) {
        var a = t._gsap || Bt(t),
          l = t.style,
          c = Wa(t),
          f,
          h,
          m,
          v;
        return a.svg && t.getAttribute("transform")
          ? ((m = t.transform.baseVal.consolidate().matrix),
            (c = [m.a, m.b, m.c, m.d, m.e, m.f]),
            c.join(",") === "1,0,0,1,0,0" ? $i : c)
          : (c === $i &&
              !t.offsetParent &&
              t !== Pi &&
              !a.svg &&
              ((m = l.display),
              (l.display = "block"),
              (f = t.parentNode),
              (!f || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
                ((v = 1), (h = t.nextElementSibling), Pi.appendChild(t)),
              (c = Wa(t)),
              m ? (l.display = m) : fi(t, "display"),
              v &&
                (h
                  ? f.insertBefore(t, h)
                  : f
                  ? f.appendChild(t)
                  : Pi.removeChild(t))),
            n && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
      },
      bs = function (t, n, a, l, c, f) {
        var h = t._gsap,
          m = c || vs(t, !0),
          v = h.xOrigin || 0,
          w = h.yOrigin || 0,
          O = h.xOffset || 0,
          D = h.yOffset || 0,
          I = m[0],
          V = m[1],
          k = m[2],
          Y = m[3],
          U = m[4],
          K = m[5],
          Z = n.split(" "),
          J = parseFloat(Z[0]) || 0,
          $ = parseFloat(Z[1]) || 0,
          ae,
          oe,
          le,
          ee;
        a
          ? m !== $i &&
            (oe = I * Y - V * k) &&
            ((le = J * (Y / oe) + $ * (-k / oe) + (k * K - Y * U) / oe),
            (ee = J * (-V / oe) + $ * (I / oe) - (I * K - V * U) / oe),
            (J = le),
            ($ = ee))
          : ((ae = Ga(t)),
            (J = ae.x + (~Z[0].indexOf("%") ? (J / 100) * ae.width : J)),
            ($ =
              ae.y +
              (~(Z[1] || Z[0]).indexOf("%") ? ($ / 100) * ae.height : $))),
          l || (l !== !1 && h.smooth)
            ? ((U = J - v),
              (K = $ - w),
              (h.xOffset = O + (U * I + K * k) - U),
              (h.yOffset = D + (U * V + K * Y) - K))
            : (h.xOffset = h.yOffset = 0),
          (h.xOrigin = J),
          (h.yOrigin = $),
          (h.smooth = !!l),
          (h.origin = n),
          (h.originIsAbsolute = !!a),
          (t.style[Jt] = "0px 0px"),
          f &&
            (Kr(f, h, "xOrigin", v, J),
            Kr(f, h, "yOrigin", w, $),
            Kr(f, h, "xOffset", O, h.xOffset),
            Kr(f, h, "yOffset", D, h.yOffset)),
          t.setAttribute("data-svg-origin", J + " " + $);
      },
      ji = function (t, n) {
        var a = t._gsap || new ba(t);
        if ("x" in a && !n && !a.uncache) return a;
        var l = t.style,
          c = a.scaleX < 0,
          f = "px",
          h = "deg",
          m = getComputedStyle(t),
          v = yr(t, Jt) || "0",
          w,
          O,
          D,
          I,
          V,
          k,
          Y,
          U,
          K,
          Z,
          J,
          $,
          ae,
          oe,
          le,
          ee,
          ze,
          it,
          Ke,
          Qe,
          Lt,
          St,
          _t,
          Ct,
          Pr,
          xn,
          Ki,
          Qi,
          hi,
          Ua,
          Vr,
          gi;
        return (
          (w = O = D = k = Y = U = K = Z = J = 0),
          (I = V = 1),
          (a.svg = !!(t.getCTM && Va(t))),
          m.translate &&
            ((m.translate !== "none" ||
              m.scale !== "none" ||
              m.rotate !== "none") &&
              (l[ut] =
                (m.translate !== "none"
                  ? "translate3d(" +
                    (m.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                (m.rotate !== "none" ? "rotate(" + m.rotate + ") " : "") +
                (m.scale !== "none"
                  ? "scale(" + m.scale.split(" ").join(",") + ") "
                  : "") +
                (m[ut] !== "none" ? m[ut] : "")),
            (l.scale = l.rotate = l.translate = "none")),
          (oe = vs(t, a.svg)),
          a.svg &&
            (a.uncache
              ? ((Pr = t.getBBox()),
                (v = a.xOrigin - Pr.x + "px " + (a.yOrigin - Pr.y) + "px"),
                (Ct = ""))
              : (Ct = !n && t.getAttribute("data-svg-origin")),
            bs(t, Ct || v, !!Ct || a.originIsAbsolute, a.smooth !== !1, oe)),
          ($ = a.xOrigin || 0),
          (ae = a.yOrigin || 0),
          oe !== $i &&
            ((it = oe[0]),
            (Ke = oe[1]),
            (Qe = oe[2]),
            (Lt = oe[3]),
            (w = St = oe[4]),
            (O = _t = oe[5]),
            oe.length === 6
              ? ((I = Math.sqrt(it * it + Ke * Ke)),
                (V = Math.sqrt(Lt * Lt + Qe * Qe)),
                (k = it || Ke ? Mi(Ke, it) * ci : 0),
                (K = Qe || Lt ? Mi(Qe, Lt) * ci + k : 0),
                K && (V *= Math.abs(Math.cos(K * ki))),
                a.svg &&
                  ((w -= $ - ($ * it + ae * Qe)),
                  (O -= ae - ($ * Ke + ae * Lt))))
              : ((gi = oe[6]),
                (Ua = oe[7]),
                (Ki = oe[8]),
                (Qi = oe[9]),
                (hi = oe[10]),
                (Vr = oe[11]),
                (w = oe[12]),
                (O = oe[13]),
                (D = oe[14]),
                (le = Mi(gi, hi)),
                (Y = le * ci),
                le &&
                  ((ee = Math.cos(-le)),
                  (ze = Math.sin(-le)),
                  (Ct = St * ee + Ki * ze),
                  (Pr = _t * ee + Qi * ze),
                  (xn = gi * ee + hi * ze),
                  (Ki = St * -ze + Ki * ee),
                  (Qi = _t * -ze + Qi * ee),
                  (hi = gi * -ze + hi * ee),
                  (Vr = Ua * -ze + Vr * ee),
                  (St = Ct),
                  (_t = Pr),
                  (gi = xn)),
                (le = Mi(-Qe, hi)),
                (U = le * ci),
                le &&
                  ((ee = Math.cos(-le)),
                  (ze = Math.sin(-le)),
                  (Ct = it * ee - Ki * ze),
                  (Pr = Ke * ee - Qi * ze),
                  (xn = Qe * ee - hi * ze),
                  (Vr = Lt * ze + Vr * ee),
                  (it = Ct),
                  (Ke = Pr),
                  (Qe = xn)),
                (le = Mi(Ke, it)),
                (k = le * ci),
                le &&
                  ((ee = Math.cos(le)),
                  (ze = Math.sin(le)),
                  (Ct = it * ee + Ke * ze),
                  (Pr = St * ee + _t * ze),
                  (Ke = Ke * ee - it * ze),
                  (_t = _t * ee - St * ze),
                  (it = Ct),
                  (St = Pr)),
                Y &&
                  Math.abs(Y) + Math.abs(k) > 359.9 &&
                  ((Y = k = 0), (U = 180 - U)),
                (I = ye(Math.sqrt(it * it + Ke * Ke + Qe * Qe))),
                (V = ye(Math.sqrt(_t * _t + gi * gi))),
                (le = Mi(St, _t)),
                (K = Math.abs(le) > 2e-4 ? le * ci : 0),
                (J = Vr ? 1 / (Vr < 0 ? -Vr : Vr) : 0)),
            a.svg &&
              ((Ct = t.getAttribute("transform")),
              (a.forceCSS = t.setAttribute("transform", "") || !Xa(yr(t, ut))),
              Ct && t.setAttribute("transform", Ct))),
          Math.abs(K) > 90 &&
            Math.abs(K) < 270 &&
            (c
              ? ((I *= -1),
                (K += k <= 0 ? 180 : -180),
                (k += k <= 0 ? 180 : -180))
              : ((V *= -1), (K += K <= 0 ? 180 : -180))),
          (n = n || a.uncache),
          (a.x =
            w -
            ((a.xPercent =
              w &&
              ((!n && a.xPercent) ||
                (Math.round(t.offsetWidth / 2) === Math.round(-w) ? -50 : 0)))
              ? (t.offsetWidth * a.xPercent) / 100
              : 0) +
            f),
          (a.y =
            O -
            ((a.yPercent =
              O &&
              ((!n && a.yPercent) ||
                (Math.round(t.offsetHeight / 2) === Math.round(-O) ? -50 : 0)))
              ? (t.offsetHeight * a.yPercent) / 100
              : 0) +
            f),
          (a.z = D + f),
          (a.scaleX = ye(I)),
          (a.scaleY = ye(V)),
          (a.rotation = ye(k) + h),
          (a.rotationX = ye(Y) + h),
          (a.rotationY = ye(U) + h),
          (a.skewX = K + h),
          (a.skewY = Z + h),
          (a.transformPerspective = J + f),
          (a.zOrigin = parseFloat(v.split(" ")[2]) || (!n && a.zOrigin) || 0) &&
            (l[Jt] = wn(v)),
          (a.xOffset = a.yOffset = 0),
          (a.force3D = u.force3D),
          (a.renderTransform = a.svg ? gu : Ra ? $a : hu),
          (a.uncache = 0),
          a
        );
      },
      wn = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      ys = function (t, n, a) {
        var l = pt(n);
        return ye(parseFloat(n) + parseFloat(Qr(t, "x", a + "px", l))) + l;
      },
      hu = function (t, n) {
        (n.z = "0px"),
          (n.rotationY = n.rotationX = "0deg"),
          (n.force3D = 0),
          $a(t, n);
      },
      di = "0deg",
      Ui = "0px",
      pi = ") ",
      $a = function (t, n) {
        var a = n || this,
          l = a.xPercent,
          c = a.yPercent,
          f = a.x,
          h = a.y,
          m = a.z,
          v = a.rotation,
          w = a.rotationY,
          O = a.rotationX,
          D = a.skewX,
          I = a.skewY,
          V = a.scaleX,
          k = a.scaleY,
          Y = a.transformPerspective,
          U = a.force3D,
          K = a.target,
          Z = a.zOrigin,
          J = "",
          $ = (U === "auto" && t && t !== 1) || U === !0;
        if (Z && (O !== di || w !== di)) {
          var ae = parseFloat(w) * ki,
            oe = Math.sin(ae),
            le = Math.cos(ae),
            ee;
          (ae = parseFloat(O) * ki),
            (ee = Math.cos(ae)),
            (f = ys(K, f, oe * ee * -Z)),
            (h = ys(K, h, -Math.sin(ae) * -Z)),
            (m = ys(K, m, le * ee * -Z + Z));
        }
        Y !== Ui && (J += "perspective(" + Y + pi),
          (l || c) && (J += "translate(" + l + "%, " + c + "%) "),
          ($ || f !== Ui || h !== Ui || m !== Ui) &&
            (J +=
              m !== Ui || $
                ? "translate3d(" + f + ", " + h + ", " + m + ") "
                : "translate(" + f + ", " + h + pi),
          v !== di && (J += "rotate(" + v + pi),
          w !== di && (J += "rotateY(" + w + pi),
          O !== di && (J += "rotateX(" + O + pi),
          (D !== di || I !== di) && (J += "skew(" + D + ", " + I + pi),
          (V !== 1 || k !== 1) && (J += "scale(" + V + ", " + k + pi),
          (K.style[ut] = J || "translate(0, 0)");
      },
      gu = function (t, n) {
        var a = n || this,
          l = a.xPercent,
          c = a.yPercent,
          f = a.x,
          h = a.y,
          m = a.rotation,
          v = a.skewX,
          w = a.skewY,
          O = a.scaleX,
          D = a.scaleY,
          I = a.target,
          V = a.xOrigin,
          k = a.yOrigin,
          Y = a.xOffset,
          U = a.yOffset,
          K = a.forceCSS,
          Z = parseFloat(f),
          J = parseFloat(h),
          $,
          ae,
          oe,
          le,
          ee;
        (m = parseFloat(m)),
          (v = parseFloat(v)),
          (w = parseFloat(w)),
          w && ((w = parseFloat(w)), (v += w), (m += w)),
          m || v
            ? ((m *= ki),
              (v *= ki),
              ($ = Math.cos(m) * O),
              (ae = Math.sin(m) * O),
              (oe = Math.sin(m - v) * -D),
              (le = Math.cos(m - v) * D),
              v &&
                ((w *= ki),
                (ee = Math.tan(v - w)),
                (ee = Math.sqrt(1 + ee * ee)),
                (oe *= ee),
                (le *= ee),
                w &&
                  ((ee = Math.tan(w)),
                  (ee = Math.sqrt(1 + ee * ee)),
                  ($ *= ee),
                  (ae *= ee))),
              ($ = ye($)),
              (ae = ye(ae)),
              (oe = ye(oe)),
              (le = ye(le)))
            : (($ = O), (le = D), (ae = oe = 0)),
          ((Z && !~(f + "").indexOf("px")) ||
            (J && !~(h + "").indexOf("px"))) &&
            ((Z = Qr(I, "x", f, "px")), (J = Qr(I, "y", h, "px"))),
          (V || k || Y || U) &&
            ((Z = ye(Z + V - (V * $ + k * oe) + Y)),
            (J = ye(J + k - (V * ae + k * le) + U))),
          (l || c) &&
            ((ee = I.getBBox()),
            (Z = ye(Z + (l / 100) * ee.width)),
            (J = ye(J + (c / 100) * ee.height))),
          (ee =
            "matrix(" +
            $ +
            "," +
            ae +
            "," +
            oe +
            "," +
            le +
            "," +
            Z +
            "," +
            J +
            ")"),
          I.setAttribute("transform", ee),
          K && (I.style[ut] = ee);
      },
      mu = function (t, n, a, l, c) {
        var f = 360,
          h = b(c),
          m = parseFloat(c) * (h && ~c.indexOf("rad") ? ci : 1),
          v = m - l,
          w = l + v + "deg",
          O,
          D;
        return (
          h &&
            ((O = c.split("_")[1]),
            O === "short" &&
              ((v %= f), v !== v % (f / 2) && (v += v < 0 ? f : -f)),
            O === "cw" && v < 0
              ? (v = ((v + f * Aa) % f) - ~~(v / f) * f)
              : O === "ccw" &&
                v > 0 &&
                (v = ((v - f * Aa) % f) - ~~(v / f) * f)),
          (t._pt = D = new Qt(t._pt, n, a, l, v, Jl)),
          (D.e = w),
          (D.u = "deg"),
          t._props.push(a),
          D
        );
      },
      ja = function (t, n) {
        for (var a in n) t[a] = n[a];
        return t;
      },
      _u = function (t, n, a) {
        var l = ja({}, a._gsap),
          c = "perspective,force3D,transformOrigin,svgOrigin",
          f = a.style,
          h,
          m,
          v,
          w,
          O,
          D,
          I,
          V;
        l.svg
          ? ((v = a.getAttribute("transform")),
            a.setAttribute("transform", ""),
            (f[ut] = n),
            (h = ji(a, 1)),
            fi(a, ut),
            a.setAttribute("transform", v))
          : ((v = getComputedStyle(a)[ut]),
            (f[ut] = n),
            (h = ji(a, 1)),
            (f[ut] = v));
        for (m in Nr)
          (v = l[m]),
            (w = h[m]),
            v !== w &&
              c.indexOf(m) < 0 &&
              ((I = pt(v)),
              (V = pt(w)),
              (O = I !== V ? Qr(a, m, v, V) : parseFloat(v)),
              (D = parseFloat(w)),
              (t._pt = new Qt(t._pt, h, m, O, D - O, gs)),
              (t._pt.u = V || 0),
              t._props.push(m));
        ja(h, l);
      };
    at("padding,margin,Width,Radius", function (_, t) {
      var n = "Top",
        a = "Right",
        l = "Bottom",
        c = "Left",
        f = (t < 3 ? [n, a, l, c] : [n + c, n + a, l + a, l + c]).map(function (
          h
        ) {
          return t < 2 ? _ + h : "border" + h + _;
        });
      yn[t > 1 ? "border" + _ : _] = function (h, m, v, w, O) {
        var D, I;
        if (arguments.length < 4)
          return (
            (D = f.map(function (V) {
              return Gr(h, V, v);
            })),
            (I = D.join(" ")),
            I.split(D[0]).length === 5 ? D[0] : I
          );
        (D = (w + "").split(" ")),
          (I = {}),
          f.forEach(function (V, k) {
            return (I[V] = D[k] = D[k] || D[((k - 1) / 2) | 0]);
          }),
          h.init(m, I, O);
      };
    });
    var ws = {
      name: "css",
      register: _s,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, n, a, l, c) {
        var f = this._props,
          h = t.style,
          m = a.vars.startAt,
          v,
          w,
          O,
          D,
          I,
          V,
          k,
          Y,
          U,
          K,
          Z,
          J,
          $,
          ae,
          oe,
          le;
        ds || _s(),
          (this.styles = this.styles || za(t)),
          (le = this.styles.props),
          (this.tween = a);
        for (k in n)
          if (
            k !== "autoRound" &&
            ((w = n[k]), !(Xe[k] && ya(k, n, a, l, t, c)))
          ) {
            if (
              ((I = typeof w),
              (V = yn[k]),
              I === "function" && ((w = w.call(a, l, t, c)), (I = typeof w)),
              I === "string" && ~w.indexOf("random(") && (w = Vi(w)),
              V)
            )
              V(this, t, k, w, a) && (oe = 1);
            else if (k.substr(0, 2) === "--")
              (v = (getComputedStyle(t).getPropertyValue(k) + "").trim()),
                (w += ""),
                ($r.lastIndex = 0),
                $r.test(v) || ((Y = pt(v)), (U = pt(w))),
                U ? Y !== U && (v = Qr(t, k, v, U) + U) : Y && (w += Y),
                this.add(h, "setProperty", v, w, l, c, 0, 0, k),
                f.push(k),
                le.push(k, 0, h[k]);
            else if (I !== "undefined") {
              if (
                (m && k in m
                  ? ((v =
                      typeof m[k] == "function" ? m[k].call(a, l, t, c) : m[k]),
                    b(v) && ~v.indexOf("random(") && (v = Vi(v)),
                    pt(v + "") ||
                      v === "auto" ||
                      (v += u.units[k] || pt(Gr(t, k)) || ""),
                    (v + "").charAt(1) === "=" && (v = Gr(t, k)))
                  : (v = Gr(t, k)),
                (D = parseFloat(v)),
                (K = I === "string" && w.charAt(1) === "=" && w.substr(0, 2)),
                K && (w = w.substr(2)),
                (O = parseFloat(w)),
                k in Ar &&
                  (k === "autoAlpha" &&
                    (D === 1 &&
                      Gr(t, "visibility") === "hidden" &&
                      O &&
                      (D = 0),
                    le.push("visibility", 0, h.visibility),
                    Kr(
                      this,
                      h,
                      "visibility",
                      D ? "inherit" : "hidden",
                      O ? "inherit" : "hidden",
                      !O
                    )),
                  k !== "scale" &&
                    k !== "transform" &&
                    ((k = Ar[k]), ~k.indexOf(",") && (k = k.split(",")[0]))),
                (Z = k in Nr),
                Z)
              ) {
                if (
                  (this.styles.save(k),
                  I === "string" &&
                    w.substring(0, 6) === "var(--" &&
                    ((w = yr(t, w.substring(4, w.indexOf(")")))),
                    (O = parseFloat(w))),
                  J ||
                    (($ = t._gsap),
                    ($.renderTransform && !n.parseTransform) ||
                      ji(t, n.parseTransform),
                    (ae = n.smoothOrigin !== !1 && $.smooth),
                    (J = this._pt =
                      new Qt(
                        this._pt,
                        h,
                        ut,
                        0,
                        1,
                        $.renderTransform,
                        $,
                        0,
                        -1
                      )),
                    (J.dep = 1)),
                  k === "scale")
                )
                  (this._pt = new Qt(
                    this._pt,
                    $,
                    "scaleY",
                    $.scaleY,
                    (K ? bt($.scaleY, K + O) : O) - $.scaleY || 0,
                    gs
                  )),
                    (this._pt.u = 0),
                    f.push("scaleY", k),
                    (k += "X");
                else if (k === "transformOrigin") {
                  le.push(Jt, 0, h[Jt]),
                    (w = du(w)),
                    $.svg
                      ? bs(t, w, 0, ae, 0, this)
                      : ((U = parseFloat(w.split(" ")[2]) || 0),
                        U !== $.zOrigin && Kr(this, $, "zOrigin", $.zOrigin, U),
                        Kr(this, h, k, wn(v), wn(w)));
                  continue;
                } else if (k === "svgOrigin") {
                  bs(t, w, 1, ae, 0, this);
                  continue;
                } else if (k in qa) {
                  mu(this, $, k, D, K ? bt(D, K + w) : w);
                  continue;
                } else if (k === "smoothOrigin") {
                  Kr(this, $, "smooth", $.smooth, w);
                  continue;
                } else if (k === "force3D") {
                  $[k] = w;
                  continue;
                } else if (k === "transform") {
                  _u(this, w, t);
                  continue;
                }
              } else k in h || (k = Oi(k) || k);
              if (
                Z ||
                ((O || O === 0) && (D || D === 0) && !Zl.test(w) && k in h)
              )
                (Y = (v + "").substr((D + "").length)),
                  O || (O = 0),
                  (U = pt(w) || (k in u.units ? u.units[k] : Y)),
                  Y !== U && (D = Qr(t, k, v, U)),
                  (this._pt = new Qt(
                    this._pt,
                    Z ? $ : h,
                    k,
                    D,
                    (K ? bt(D, K + O) : O) - D,
                    !Z && (U === "px" || k === "zIndex") && n.autoRound !== !1
                      ? tu
                      : gs
                  )),
                  (this._pt.u = U || 0),
                  Y !== U && U !== "%" && ((this._pt.b = v), (this._pt.r = eu));
              else if (k in h) fu.call(this, t, k, v, K ? K + w : w);
              else if (k in t) this.add(t, k, v || t[k], K ? K + w : w, l, c);
              else if (k !== "parseTransform") {
                we(k, w);
                continue;
              }
              Z ||
                (k in h
                  ? le.push(k, 0, h[k])
                  : typeof t[k] == "function"
                  ? le.push(k, 2, t[k]())
                  : le.push(k, 1, v || t[k])),
                f.push(k);
            }
          }
        oe && Ea(this);
      },
      render: function (t, n) {
        if (n.tween._time || !ps())
          for (var a = n._pt; a; ) a.r(t, a.d), (a = a._next);
        else n.styles.revert();
      },
      get: Gr,
      aliases: Ar,
      getSetter: function (t, n, a) {
        var l = Ar[n];
        return (
          l && l.indexOf(",") < 0 && (n = l),
          n in Nr && n !== Jt && (t._gsap.x || Gr(t, "x"))
            ? a && Oa === a
              ? n === "scale"
                ? su
                : nu
              : (Oa = a || {}) && (n === "scale" ? au : ou)
            : t.style && !H(t.style[n])
            ? ru
            : ~n.indexOf("-")
            ? iu
            : os(t, n)
        );
      },
      core: { _removeProperty: fi, _getMatrix: vs },
    };
    (Zt.utils.checkPrefix = Oi),
      (Zt.core.getStyleSaver = za),
      (function (_, t, n, a) {
        var l = at(_ + "," + t + "," + n, function (c) {
          Nr[c] = 1;
        });
        at(t, function (c) {
          (u.units[c] = "deg"), (qa[c] = 1);
        }),
          (Ar[l[13]] = _ + "," + t),
          at(a, function (c) {
            var f = c.split(":");
            Ar[f[1]] = l[f[0]];
          });
      })(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
        "rotation,rotationX,rotationY,skewX,skewY",
        "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
      ),
      at(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (_) {
          u.units[_] = "px";
        }
      ),
      Zt.registerPlugin(ws);
    var xs = Zt.registerPlugin(ws) || Zt,
      vu = xs.core.Tween;
    (i.Back = ql),
      (i.Bounce = Wl),
      (i.CSSPlugin = ws),
      (i.Circ = Ul),
      (i.Cubic = Nl),
      (i.Elastic = Yl),
      (i.Expo = jl),
      (i.Linear = Fl),
      (i.Power0 = Ll),
      (i.Power1 = Dl),
      (i.Power2 = Il),
      (i.Power3 = zl),
      (i.Power4 = Rl),
      (i.Quad = Bl),
      (i.Quart = Gl),
      (i.Quint = Vl),
      (i.Sine = $l),
      (i.SteppedEase = Xl),
      (i.Strong = Hl),
      (i.TimelineLite = At),
      (i.TimelineMax = At),
      (i.TweenLite = ht),
      (i.TweenMax = vu),
      (i.default = xs),
      (i.gsap = xs),
      typeof window == "undefined" || window !== i
        ? Object.defineProperty(i, "__esModule", { value: !0 })
        : delete window.default;
  });
})(qe, qe.exports);
function no(s, e) {
  for (var i = 0; i < e.length; i++) {
    var r = e[i];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(s, r.key, r);
  }
}
function Gc(s, e, i) {
  return e && no(s.prototype, e), i && no(s, i), s;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Dt,
  Bn,
  hr,
  ei,
  ti,
  Ri,
  Io,
  mi,
  on,
  zo,
  Yr,
  kr,
  Ro,
  Fo = function () {
    return (
      Dt ||
      (typeof window != "undefined" &&
        (Dt = window.gsap) &&
        Dt.registerPlugin &&
        Dt)
    );
  },
  Bo = 1,
  zi = [],
  ke = [],
  Rr = [],
  ln = Date.now,
  Vs = function (e, i) {
    return i;
  },
  Vc = function () {
    var e = on.core,
      i = e.bridge || {},
      r = e._scrollers,
      o = e._proxies;
    r.push.apply(r, ke),
      o.push.apply(o, Rr),
      (ke = r),
      (Rr = o),
      (Vs = function (p, d) {
        return i[p](d);
      });
  },
  ri = function (e, i) {
    return ~Rr.indexOf(e) && Rr[Rr.indexOf(e) + 1][i];
  },
  un = function (e) {
    return !!~zo.indexOf(e);
  },
  Ht = function (e, i, r, o, u) {
    return e.addEventListener(i, r, { passive: o !== !1, capture: !!u });
  },
  Vt = function (e, i, r, o) {
    return e.removeEventListener(i, r, !!o);
  },
  Cn = "scrollLeft",
  En = "scrollTop",
  Hs = function () {
    return (Yr && Yr.isPressed) || ke.cache++;
  },
  jn = function (e, i) {
    var r = function o(u) {
      if (u || u === 0) {
        Bo && (hr.history.scrollRestoration = "manual");
        var p = Yr && Yr.isPressed;
        (u = o.v = Math.round(u) || (Yr && Yr.iOS ? 1 : 0)),
          e(u),
          (o.cacheID = ke.cache),
          p && Vs("ss", u);
      } else
        (i || ke.cache !== o.cacheID || Vs("ref")) &&
          ((o.cacheID = ke.cache), (o.v = e()));
      return o.v + o.offset;
    };
    return (r.offset = 0), e && r;
  },
  $t = {
    s: Cn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: jn(function (s) {
      return arguments.length
        ? hr.scrollTo(s, xt.sc())
        : hr.pageXOffset || ei[Cn] || ti[Cn] || Ri[Cn] || 0;
    }),
  },
  xt = {
    s: En,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: $t,
    sc: jn(function (s) {
      return arguments.length
        ? hr.scrollTo($t.sc(), s)
        : hr.pageYOffset || ei[En] || ti[En] || Ri[En] || 0;
    }),
  },
  er = function (e, i) {
    return (
      ((i && i._ctx && i._ctx.selector) || Dt.utils.toArray)(e)[0] ||
      (typeof e == "string" && Dt.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Hc = function (e, i) {
    for (var r = i.length; r--; ) if (i[r] === e || i[r].contains(e)) return !0;
    return !1;
  },
  ii = function (e, i) {
    var r = i.s,
      o = i.sc;
    un(e) && (e = ei.scrollingElement || ti);
    var u = ke.indexOf(e),
      p = o === xt.sc ? 1 : 2;
    !~u && (u = ke.push(e) - 1), ke[u + p] || Ht(e, "scroll", Hs);
    var d = ke[u + p],
      y =
        d ||
        (ke[u + p] =
          jn(ri(e, r), !0) ||
          (un(e)
            ? o
            : jn(function (g) {
                return arguments.length ? (e[r] = g) : e[r];
              })));
    return (
      (y.target = e),
      d || (y.smooth = Dt.getProperty(e, "scrollBehavior") === "smooth"),
      y
    );
  },
  Ys = function (e, i, r) {
    var o = e,
      u = e,
      p = ln(),
      d = p,
      y = i || 50,
      g = Math.max(500, y * 3),
      C = function (E, F) {
        var X = ln();
        F || X - p > y
          ? ((u = o), (o = E), (d = p), (p = X))
          : r
          ? (o += E)
          : (o = u + ((E - u) / (X - d)) * (p - d));
      },
      x = function () {
        (u = o = r ? 0 : o), (d = p = 0);
      },
      P = function (E) {
        var F = d,
          X = u,
          G = ln();
        return (
          (E || E === 0) && E !== o && C(E),
          p === d || G - d > g
            ? 0
            : ((o + (r ? X : -X)) / ((r ? G : p) - F)) * 1e3
        );
      };
    return { update: C, reset: x, getVelocity: P };
  },
  Ji = function (e, i) {
    return (
      i && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  so = function (e) {
    var i = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(i) >= Math.abs(r) ? i : r;
  },
  No = function () {
    (on = Dt.core.globals().ScrollTrigger), on && on.core && Vc();
  },
  Go = function (e) {
    return (
      (Dt = e || Fo()),
      !Bn &&
        Dt &&
        typeof document != "undefined" &&
        document.body &&
        ((hr = window),
        (ei = document),
        (ti = ei.documentElement),
        (Ri = ei.body),
        (zo = [hr, ei, ti, Ri]),
        Dt.utils.clamp,
        (Ro = Dt.core.context || function () {}),
        (mi = "onpointerenter" in Ri ? "pointer" : "mouse"),
        (Io = gt.isTouch =
          hr.matchMedia &&
          hr.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in hr ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (kr = gt.eventTypes =
          (
            "ontouchstart" in ti
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ti
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Bo = 0);
        }, 500),
        No(),
        (Bn = 1)),
      Bn
    );
  };
$t.op = xt;
ke.cache = 0;
var gt = (function () {
  function s(i) {
    this.init(i);
  }
  var e = s.prototype;
  return (
    (e.init = function (r) {
      Bn || Go(Dt) || console.warn("Please gsap.registerPlugin(Observer)"),
        on || No();
      var o = r.tolerance,
        u = r.dragMinimum,
        p = r.type,
        d = r.target,
        y = r.lineHeight,
        g = r.debounce,
        C = r.preventDefault,
        x = r.onStop,
        P = r.onStopDelay,
        T = r.ignore,
        E = r.wheelSpeed,
        F = r.event,
        X = r.onDragStart,
        G = r.onDragEnd,
        b = r.onDrag,
        S = r.onPress,
        A = r.onRelease,
        H = r.onRight,
        q = r.onLeft,
        N = r.onUp,
        j = r.onDown,
        re = r.onChangeX,
        R = r.onChangeY,
        z = r.onChange,
        L = r.onToggleX,
        Q = r.onToggleY,
        W = r.onHover,
        ce = r.onHoverEnd,
        ie = r.onMove,
        de = r.ignoreCheck,
        ne = r.isNormalizer,
        se = r.onGestureStart,
        M = r.onGestureEnd,
        Me = r.onWheel,
        ct = r.onEnable,
        Le = r.onDisable,
        Re = r.onClick,
        nt = r.scrollSpeed,
        Fe = r.capture,
        we = r.allowClicks,
        xe = r.lockAxis,
        De = r.onLockAxis;
      (this.target = d = er(d) || ti),
        (this.vars = r),
        T && (T = Dt.utils.toArray(T)),
        (o = o || 1e-9),
        (u = u || 0),
        (E = E || 1),
        (nt = nt || 1),
        (p = p || "wheel,touch,pointer"),
        (g = g !== !1),
        y || (y = parseFloat(hr.getComputedStyle(Ri).lineHeight) || 22);
      var st,
        je,
        Ve,
        fe,
        he,
        Ee,
        Ue,
        B = this,
        Xe = 0,
        tr = 0,
        Sr = r.passive || (!C && r.passive !== !1),
        We = ii(d, $t),
        rr = ii(d, xt),
        gr = We(),
        Bt = rr(),
        ft =
          ~p.indexOf("touch") &&
          !~p.indexOf("pointer") &&
          kr[0] === "pointerdown",
        at = un(d),
        ye = d.ownerDocument || ei,
        Ie = [0, 0, 0],
        bt = [0, 0, 0],
        Cr = 0,
        Mr = function () {
          return (Cr = ln());
        },
        et = function (ge, Ae) {
          return (
            ((B.event = ge) && T && Hc(ge.target, T)) ||
            (Ae && ft && ge.pointerType !== "touch") ||
            (de && de(ge, Ae))
          );
        },
        ni = function () {
          B._vx.reset(), B._vy.reset(), je.pause(), x && x(B);
        },
        mr = function () {
          var ge = (B.deltaX = so(Ie)),
            Ae = (B.deltaY = so(bt)),
            te = Math.abs(ge) >= o,
            me = Math.abs(Ae) >= o;
          z && (te || me) && z(B, ge, Ae, Ie, bt),
            te &&
              (H && B.deltaX > 0 && H(B),
              q && B.deltaX < 0 && q(B),
              re && re(B),
              L && B.deltaX < 0 != Xe < 0 && L(B),
              (Xe = B.deltaX),
              (Ie[0] = Ie[1] = Ie[2] = 0)),
            me &&
              (j && B.deltaY > 0 && j(B),
              N && B.deltaY < 0 && N(B),
              R && R(B),
              Q && B.deltaY < 0 != tr < 0 && Q(B),
              (tr = B.deltaY),
              (bt[0] = bt[1] = bt[2] = 0)),
            (fe || Ve) &&
              (ie && ie(B),
              Ve && (X && Ve === 1 && X(B), b && b(B), (Ve = 0)),
              (fe = !1)),
            Ee && !(Ee = !1) && De && De(B),
            he && (Me(B), (he = !1)),
            (st = 0);
        },
        Fr = function (ge, Ae, te) {
          (Ie[te] += ge),
            (bt[te] += Ae),
            B._vx.update(ge),
            B._vy.update(Ae),
            g ? st || (st = requestAnimationFrame(mr)) : mr();
        },
        mt = function (ge, Ae) {
          xe &&
            !Ue &&
            ((B.axis = Ue = Math.abs(ge) > Math.abs(Ae) ? "x" : "y"),
            (Ee = !0)),
            Ue !== "y" && ((Ie[2] += ge), B._vx.update(ge, !0)),
            Ue !== "x" && ((bt[2] += Ae), B._vy.update(Ae, !0)),
            g ? st || (st = requestAnimationFrame(mr)) : mr();
        },
        Or = function (ge) {
          if (!et(ge, 1)) {
            ge = Ji(ge, C);
            var Ae = ge.clientX,
              te = ge.clientY,
              me = Ae - B.x,
              pe = te - B.y,
              _e = B.isDragging;
            (B.x = Ae),
              (B.y = te),
              (_e ||
                ((me || pe) &&
                  (Math.abs(B.startX - Ae) >= u ||
                    Math.abs(B.startY - te) >= u))) &&
                ((Ve = _e ? 2 : 1), _e || (B.isDragging = !0), mt(me, pe));
          }
        },
        Ut = (B.onPress = function (ve) {
          et(ve, 1) ||
            (ve && ve.button) ||
            ((B.axis = Ue = null),
            je.pause(),
            (B.isPressed = !0),
            (ve = Ji(ve)),
            (Xe = tr = 0),
            (B.startX = B.x = ve.clientX),
            (B.startY = B.y = ve.clientY),
            B._vx.reset(),
            B._vy.reset(),
            Ht(ne ? d : ye, kr[1], Or, Sr, !0),
            (B.deltaX = B.deltaY = 0),
            S && S(B));
        }),
        Te = (B.onRelease = function (ve) {
          if (!et(ve, 1)) {
            Vt(ne ? d : ye, kr[1], Or, !0);
            var ge = !isNaN(B.y - B.startY),
              Ae = B.isDragging,
              te =
                Ae &&
                (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3),
              me = Ji(ve);
            !te &&
              ge &&
              (B._vx.reset(),
              B._vy.reset(),
              C &&
                we &&
                Dt.delayedCall(0.08, function () {
                  if (ln() - Cr > 300 && !ve.defaultPrevented) {
                    if (ve.target.click) ve.target.click();
                    else if (ye.createEvent) {
                      var pe = ye.createEvent("MouseEvents");
                      pe.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        hr,
                        1,
                        me.screenX,
                        me.screenY,
                        me.clientX,
                        me.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        ve.target.dispatchEvent(pe);
                    }
                  }
                })),
              (B.isDragging = B.isGesturing = B.isPressed = !1),
              x && Ae && !ne && je.restart(!0),
              Ve && mr(),
              G && Ae && G(B),
              A && A(B, te);
          }
        }),
        _r = function (ge) {
          return (
            ge.touches &&
            ge.touches.length > 1 &&
            (B.isGesturing = !0) &&
            se(ge, B.isDragging)
          );
        },
        Mt = function () {
          return (B.isGesturing = !1) || M(B);
        },
        ir = function (ge) {
          if (!et(ge)) {
            var Ae = We(),
              te = rr();
            Fr((Ae - gr) * nt, (te - Bt) * nt, 1),
              (gr = Ae),
              (Bt = te),
              x && je.restart(!0);
          }
        },
        Kt = function (ge) {
          if (!et(ge)) {
            (ge = Ji(ge, C)), Me && (he = !0);
            var Ae =
              (ge.deltaMode === 1
                ? y
                : ge.deltaMode === 2
                ? hr.innerHeight
                : 1) * E;
            Fr(ge.deltaX * Ae, ge.deltaY * Ae, 0), x && !ne && je.restart(!0);
          }
        },
        vr = function (ge) {
          if (!et(ge)) {
            var Ae = ge.clientX,
              te = ge.clientY,
              me = Ae - B.x,
              pe = te - B.y;
            (B.x = Ae),
              (B.y = te),
              (fe = !0),
              x && je.restart(!0),
              (me || pe) && mt(me, pe);
          }
        },
        Nt = function (ge) {
          (B.event = ge), W(B);
        },
        Ot = function (ge) {
          (B.event = ge), ce(B);
        },
        si = function (ge) {
          return et(ge) || (Ji(ge, C) && Re(B));
        };
      (je = B._dc = Dt.delayedCall(P || 0.25, ni).pause()),
        (B.deltaX = B.deltaY = 0),
        (B._vx = Ys(0, 50, !0)),
        (B._vy = Ys(0, 50, !0)),
        (B.scrollX = We),
        (B.scrollY = rr),
        (B.isDragging = B.isGesturing = B.isPressed = !1),
        Ro(this),
        (B.enable = function (ve) {
          return (
            B.isEnabled ||
              (Ht(at ? ye : d, "scroll", Hs),
              p.indexOf("scroll") >= 0 && Ht(at ? ye : d, "scroll", ir, Sr, Fe),
              p.indexOf("wheel") >= 0 && Ht(d, "wheel", Kt, Sr, Fe),
              ((p.indexOf("touch") >= 0 && Io) || p.indexOf("pointer") >= 0) &&
                (Ht(d, kr[0], Ut, Sr, Fe),
                Ht(ye, kr[2], Te),
                Ht(ye, kr[3], Te),
                we && Ht(d, "click", Mr, !0, !0),
                Re && Ht(d, "click", si),
                se && Ht(ye, "gesturestart", _r),
                M && Ht(ye, "gestureend", Mt),
                W && Ht(d, mi + "enter", Nt),
                ce && Ht(d, mi + "leave", Ot),
                ie && Ht(d, mi + "move", vr)),
              (B.isEnabled = !0),
              (B.isDragging = B.isGesturing = B.isPressed = fe = Ve = !1),
              B._vx.reset(),
              B._vy.reset(),
              (gr = We()),
              (Bt = rr()),
              ve && ve.type && Ut(ve),
              ct && ct(B)),
            B
          );
        }),
        (B.disable = function () {
          B.isEnabled &&
            (zi.filter(function (ve) {
              return ve !== B && un(ve.target);
            }).length || Vt(at ? ye : d, "scroll", Hs),
            B.isPressed &&
              (B._vx.reset(), B._vy.reset(), Vt(ne ? d : ye, kr[1], Or, !0)),
            Vt(at ? ye : d, "scroll", ir, Fe),
            Vt(d, "wheel", Kt, Fe),
            Vt(d, kr[0], Ut, Fe),
            Vt(ye, kr[2], Te),
            Vt(ye, kr[3], Te),
            Vt(d, "click", Mr, !0),
            Vt(d, "click", si),
            Vt(ye, "gesturestart", _r),
            Vt(ye, "gestureend", Mt),
            Vt(d, mi + "enter", Nt),
            Vt(d, mi + "leave", Ot),
            Vt(d, mi + "move", vr),
            (B.isEnabled = B.isPressed = B.isDragging = !1),
            Le && Le(B));
        }),
        (B.kill = B.revert =
          function () {
            B.disable();
            var ve = zi.indexOf(B);
            ve >= 0 && zi.splice(ve, 1), Yr === B && (Yr = 0);
          }),
        zi.push(B),
        ne && un(d) && (Yr = B),
        B.enable(F);
    }),
    Gc(s, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    s
  );
})();
gt.version = "3.13.0";
gt.create = function (s) {
  return new gt(s);
};
gt.register = Go;
gt.getAll = function () {
  return zi.slice();
};
gt.getById = function (s) {
  return zi.filter(function (e) {
    return e.vars.id === s;
  })[0];
};
Fo() && Dt.registerPlugin(gt);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ue,
  Di,
  Pe,
  Ze,
  pr,
  Ge,
  Zs,
  Un,
  mn,
  cn,
  tn,
  Pn,
  zt,
  Jn,
  qs,
  qt,
  ao,
  oo,
  Ii,
  Vo,
  As,
  Ho,
  Yt,
  Xs,
  Yo,
  qo,
  Zr,
  Ws,
  Js,
  Fi,
  ea,
  Kn,
  $s,
  Ls,
  kn = 1,
  Rt = Date.now,
  Ds = Rt(),
  Tr = 0,
  rn = 0,
  lo = function (e, i, r) {
    var o = fr(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (r["_" + i + "Clamp"] = o), o ? e.substr(6, e.length - 7) : e;
  },
  uo = function (e, i) {
    return i && (!fr(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Yc = function s() {
    return rn && requestAnimationFrame(s);
  },
  co = function () {
    return (Jn = 1);
  },
  fo = function () {
    return (Jn = 0);
  },
  Lr = function (e) {
    return e;
  },
  nn = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Xo = function () {
    return typeof window != "undefined";
  },
  Wo = function () {
    return ue || (Xo() && (ue = window.gsap) && ue.registerPlugin && ue);
  },
  xi = function (e) {
    return !!~Zs.indexOf(e);
  },
  $o = function (e) {
    return (
      (e === "Height" ? ea : Pe["inner" + e]) ||
      pr["client" + e] ||
      Ge["client" + e]
    );
  },
  jo = function (e) {
    return (
      ri(e, "getBoundingClientRect") ||
      (xi(e)
        ? function () {
            return (Yn.width = Pe.innerWidth), (Yn.height = ea), Yn;
          }
        : function () {
            return Hr(e);
          })
    );
  },
  qc = function (e, i, r) {
    var o = r.d,
      u = r.d2,
      p = r.a;
    return (p = ri(e, "getBoundingClientRect"))
      ? function () {
          return p()[o];
        }
      : function () {
          return (i ? $o(u) : e["client" + u]) || 0;
        };
  },
  Xc = function (e, i) {
    return !i || ~Rr.indexOf(e)
      ? jo(e)
      : function () {
          return Yn;
        };
  },
  Ir = function (e, i) {
    var r = i.s,
      o = i.d2,
      u = i.d,
      p = i.a;
    return Math.max(
      0,
      (r = "scroll" + o) && (p = ri(e, r))
        ? p() - jo(e)()[u]
        : xi(e)
        ? (pr[r] || Ge[r]) - $o(o)
        : e[r] - e["offset" + o]
    );
  },
  Mn = function (e, i) {
    for (var r = 0; r < Ii.length; r += 3)
      (!i || ~i.indexOf(Ii[r + 1])) && e(Ii[r], Ii[r + 1], Ii[r + 2]);
  },
  fr = function (e) {
    return typeof e == "string";
  },
  Ft = function (e) {
    return typeof e == "function";
  },
  sn = function (e) {
    return typeof e == "number";
  },
  _i = function (e) {
    return typeof e == "object";
  },
  en = function (e, i, r) {
    return e && e.progress(i ? 0 : 1) && r && e.pause();
  },
  Is = function (e, i) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return i(e);
          })
        : i(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  Ai = Math.abs,
  Uo = "left",
  Ko = "top",
  ta = "right",
  ra = "bottom",
  bi = "width",
  yi = "height",
  fn = "Right",
  dn = "Left",
  pn = "Top",
  hn = "Bottom",
  vt = "padding",
  wr = "margin",
  Ni = "Width",
  ia = "Height",
  wt = "px",
  xr = function (e) {
    return Pe.getComputedStyle(e);
  },
  Wc = function (e) {
    var i = xr(e).position;
    e.style.position = i === "absolute" || i === "fixed" ? i : "relative";
  },
  po = function (e, i) {
    for (var r in i) r in e || (e[r] = i[r]);
    return e;
  },
  Hr = function (e, i) {
    var r =
        i &&
        xr(e)[qs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ue
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      o = e.getBoundingClientRect();
    return r && r.progress(0).kill(), o;
  },
  Qn = function (e, i) {
    var r = i.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  Qo = function (e) {
    var i = [],
      r = e.labels,
      o = e.duration(),
      u;
    for (u in r) i.push(r[u] / o);
    return i;
  },
  $c = function (e) {
    return function (i) {
      return ue.utils.snap(Qo(e), i);
    };
  },
  na = function (e) {
    var i = ue.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (o, u) {
          return o - u;
        });
    return r
      ? function (o, u, p) {
          p === void 0 && (p = 0.001);
          var d;
          if (!u) return i(o);
          if (u > 0) {
            for (o -= p, d = 0; d < r.length; d++) if (r[d] >= o) return r[d];
            return r[d - 1];
          } else for (d = r.length, o += p; d--; ) if (r[d] <= o) return r[d];
          return r[0];
        }
      : function (o, u, p) {
          p === void 0 && (p = 0.001);
          var d = i(o);
          return !u || Math.abs(d - o) < p || d - o < 0 == u < 0
            ? d
            : i(u < 0 ? o - e : o + e);
        };
  },
  jc = function (e) {
    return function (i, r) {
      return na(Qo(e))(i, r.direction);
    };
  },
  On = function (e, i, r, o) {
    return r.split(",").forEach(function (u) {
      return e(i, u, o);
    });
  },
  Pt = function (e, i, r, o, u) {
    return e.addEventListener(i, r, { passive: !o, capture: !!u });
  },
  Et = function (e, i, r, o) {
    return e.removeEventListener(i, r, !!o);
  },
  An = function (e, i, r) {
    (r = r && r.wheelHandler), r && (e(i, "wheel", r), e(i, "touchmove", r));
  },
  ho = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Ln = { toggleActions: "play", anticipatePin: 0 },
  Zn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Nn = function (e, i) {
    if (fr(e)) {
      var r = e.indexOf("="),
        o = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (o *= i / 100), (e = e.substr(0, r - 1))),
        (e =
          o +
          (e in Zn
            ? Zn[e] * i
            : ~e.indexOf("%")
            ? (parseFloat(e) * i) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Dn = function (e, i, r, o, u, p, d, y) {
    var g = u.startColor,
      C = u.endColor,
      x = u.fontSize,
      P = u.indent,
      T = u.fontWeight,
      E = Ze.createElement("div"),
      F = xi(r) || ri(r, "pinType") === "fixed",
      X = e.indexOf("scroller") !== -1,
      G = F ? Ge : r,
      b = e.indexOf("start") !== -1,
      S = b ? g : C,
      A =
        "border-color:" +
        S +
        ";font-size:" +
        x +
        ";color:" +
        S +
        ";font-weight:" +
        T +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (A += "position:" + ((X || y) && F ? "fixed;" : "absolute;")),
      (X || y || !F) &&
        (A += (o === xt ? ta : ra) + ":" + (p + parseFloat(P)) + "px;"),
      d &&
        (A +=
          "box-sizing:border-box;text-align:left;width:" +
          d.offsetWidth +
          "px;"),
      (E._isStart = b),
      E.setAttribute("class", "gsap-marker-" + e + (i ? " marker-" + i : "")),
      (E.style.cssText = A),
      (E.innerText = i || i === 0 ? e + "-" + i : e),
      G.children[0] ? G.insertBefore(E, G.children[0]) : G.appendChild(E),
      (E._offset = E["offset" + o.op.d2]),
      Gn(E, 0, o, b),
      E
    );
  },
  Gn = function (e, i, r, o) {
    var u = { display: "block" },
      p = r[o ? "os2" : "p2"],
      d = r[o ? "p2" : "os2"];
    (e._isFlipped = o),
      (u[r.a + "Percent"] = o ? -100 : 0),
      (u[r.a] = o ? "1px" : 0),
      (u["border" + p + Ni] = 1),
      (u["border" + d + Ni] = 0),
      (u[r.p] = i + "px"),
      ue.set(e, u);
  },
  Se = [],
  js = {},
  _n,
  go = function () {
    return Rt() - Tr > 34 && (_n || (_n = requestAnimationFrame(qr)));
  },
  Li = function () {
    (!Yt || !Yt.isPressed || Yt.startX > Ge.clientWidth) &&
      (ke.cache++,
      Yt ? _n || (_n = requestAnimationFrame(qr)) : qr(),
      Tr || Si("scrollStart"),
      (Tr = Rt()));
  },
  zs = function () {
    (qo = Pe.innerWidth), (Yo = Pe.innerHeight);
  },
  an = function (e) {
    ke.cache++,
      (e === !0 ||
        (!zt &&
          !Ho &&
          !Ze.fullscreenElement &&
          !Ze.webkitFullscreenElement &&
          (!Xs ||
            qo !== Pe.innerWidth ||
            Math.abs(Pe.innerHeight - Yo) > Pe.innerHeight * 0.25))) &&
        Un.restart(!0);
  },
  Ti = {},
  Uc = [],
  Zo = function s() {
    return Et(Ce, "scrollEnd", s) || vi(!0);
  },
  Si = function (e) {
    return (
      (Ti[e] &&
        Ti[e].map(function (i) {
          return i();
        })) ||
      Uc
    );
  },
  cr = [],
  Jo = function (e) {
    for (var i = 0; i < cr.length; i += 5)
      (!e || (cr[i + 4] && cr[i + 4].query === e)) &&
        ((cr[i].style.cssText = cr[i + 1]),
        cr[i].getBBox && cr[i].setAttribute("transform", cr[i + 2] || ""),
        (cr[i + 3].uncache = 1));
  },
  sa = function (e, i) {
    var r;
    for (qt = 0; qt < Se.length; qt++)
      (r = Se[qt]),
        r && (!i || r._ctx === i) && (e ? r.kill(1) : r.revert(!0, !0));
    (Kn = !0), i && Jo(i), i || Si("revert");
  },
  el = function (e, i) {
    ke.cache++,
      (i || !Xt) &&
        ke.forEach(function (r) {
          return Ft(r) && r.cacheID++ && (r.rec = 0);
        }),
      fr(e) && (Pe.history.scrollRestoration = Js = e);
  },
  Xt,
  wi = 0,
  mo,
  Kc = function () {
    if (mo !== wi) {
      var e = (mo = wi);
      requestAnimationFrame(function () {
        return e === wi && vi(!0);
      });
    }
  },
  tl = function () {
    Ge.appendChild(Fi),
      (ea = (!Yt && Fi.offsetHeight) || Pe.innerHeight),
      Ge.removeChild(Fi);
  },
  _o = function (e) {
    return mn(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (i) {
      return (i.style.display = e ? "none" : "block");
    });
  },
  vi = function (e, i) {
    if (
      ((pr = Ze.documentElement),
      (Ge = Ze.body),
      (Zs = [Pe, Ze, pr, Ge]),
      Tr && !e && !Kn)
    ) {
      Pt(Ce, "scrollEnd", Zo);
      return;
    }
    tl(),
      (Xt = Ce.isRefreshing = !0),
      ke.forEach(function (o) {
        return Ft(o) && ++o.cacheID && (o.rec = o());
      });
    var r = Si("refreshInit");
    Vo && Ce.sort(),
      i || sa(),
      ke.forEach(function (o) {
        Ft(o) && (o.smooth && (o.target.style.scrollBehavior = "auto"), o(0));
      }),
      Se.slice(0).forEach(function (o) {
        return o.refresh();
      }),
      (Kn = !1),
      Se.forEach(function (o) {
        if (o._subPinOffset && o.pin) {
          var u = o.vars.horizontal ? "offsetWidth" : "offsetHeight",
            p = o.pin[u];
          o.revert(!0, 1), o.adjustPinSpacing(o.pin[u] - p), o.refresh();
        }
      }),
      ($s = 1),
      _o(!0),
      Se.forEach(function (o) {
        var u = Ir(o.scroller, o._dir),
          p = o.vars.end === "max" || (o._endClamp && o.end > u),
          d = o._startClamp && o.start >= u;
        (p || d) &&
          o.setPositions(
            d ? u - 1 : o.start,
            p ? Math.max(d ? u : o.start + 1, u) : o.end,
            !0
          );
      }),
      _o(!1),
      ($s = 0),
      r.forEach(function (o) {
        return o && o.render && o.render(-1);
      }),
      ke.forEach(function (o) {
        Ft(o) &&
          (o.smooth &&
            requestAnimationFrame(function () {
              return (o.target.style.scrollBehavior = "smooth");
            }),
          o.rec && o(o.rec));
      }),
      el(Js, 1),
      Un.pause(),
      wi++,
      (Xt = 2),
      qr(2),
      Se.forEach(function (o) {
        return Ft(o.vars.onRefresh) && o.vars.onRefresh(o);
      }),
      (Xt = Ce.isRefreshing = !1),
      Si("refresh");
  },
  Us = 0,
  Vn = 1,
  gn,
  qr = function (e) {
    if (e === 2 || (!Xt && !Kn)) {
      (Ce.isUpdating = !0), gn && gn.update(0);
      var i = Se.length,
        r = Rt(),
        o = r - Ds >= 50,
        u = i && Se[0].scroll();
      if (
        ((Vn = Us > u ? -1 : 1),
        Xt || (Us = u),
        o &&
          (Tr && !Jn && r - Tr > 200 && ((Tr = 0), Si("scrollEnd")),
          (tn = Ds),
          (Ds = r)),
        Vn < 0)
      ) {
        for (qt = i; qt-- > 0; ) Se[qt] && Se[qt].update(0, o);
        Vn = 1;
      } else for (qt = 0; qt < i; qt++) Se[qt] && Se[qt].update(0, o);
      Ce.isUpdating = !1;
    }
    _n = 0;
  },
  Ks = [
    Uo,
    Ko,
    ra,
    ta,
    wr + hn,
    wr + fn,
    wr + pn,
    wr + dn,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Hn = Ks.concat([
    bi,
    yi,
    "boxSizing",
    "max" + Ni,
    "max" + ia,
    "position",
    wr,
    vt,
    vt + pn,
    vt + fn,
    vt + hn,
    vt + dn,
  ]),
  Qc = function (e, i, r) {
    Bi(r);
    var o = e._gsap;
    if (o.spacerIsNative) Bi(o.spacerState);
    else if (e._gsap.swappedIn) {
      var u = i.parentNode;
      u && (u.insertBefore(e, i), u.removeChild(i));
    }
    e._gsap.swappedIn = !1;
  },
  Rs = function (e, i, r, o) {
    if (!e._gsap.swappedIn) {
      for (var u = Ks.length, p = i.style, d = e.style, y; u--; )
        (y = Ks[u]), (p[y] = r[y]);
      (p.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (p.display = "inline-block"),
        (d[ra] = d[ta] = "auto"),
        (p.flexBasis = r.flexBasis || "auto"),
        (p.overflow = "visible"),
        (p.boxSizing = "border-box"),
        (p[bi] = Qn(e, $t) + wt),
        (p[yi] = Qn(e, xt) + wt),
        (p[vt] = d[wr] = d[Ko] = d[Uo] = "0"),
        Bi(o),
        (d[bi] = d["max" + Ni] = r[bi]),
        (d[yi] = d["max" + ia] = r[yi]),
        (d[vt] = r[vt]),
        e.parentNode !== i &&
          (e.parentNode.insertBefore(i, e), i.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Zc = /([A-Z])/g,
  Bi = function (e) {
    if (e) {
      var i = e.t.style,
        r = e.length,
        o = 0,
        u,
        p;
      for ((e.t._gsap || ue.core.getCache(e.t)).uncache = 1; o < r; o += 2)
        (p = e[o + 1]),
          (u = e[o]),
          p
            ? (i[u] = p)
            : i[u] && i.removeProperty(u.replace(Zc, "-$1").toLowerCase());
    }
  },
  In = function (e) {
    for (var i = Hn.length, r = e.style, o = [], u = 0; u < i; u++)
      o.push(Hn[u], r[Hn[u]]);
    return (o.t = e), o;
  },
  Jc = function (e, i, r) {
    for (var o = [], u = e.length, p = r ? 8 : 0, d; p < u; p += 2)
      (d = e[p]), o.push(d, d in i ? i[d] : e[p + 1]);
    return (o.t = e.t), o;
  },
  Yn = { left: 0, top: 0 },
  vo = function (e, i, r, o, u, p, d, y, g, C, x, P, T, E) {
    Ft(e) && (e = e(y)),
      fr(e) &&
        e.substr(0, 3) === "max" &&
        (e = P + (e.charAt(4) === "=" ? Nn("0" + e.substr(3), r) : 0));
    var F = T ? T.time() : 0,
      X,
      G,
      b;
    if ((T && T.seek(0), isNaN(e) || (e = +e), sn(e)))
      T &&
        (e = ue.utils.mapRange(
          T.scrollTrigger.start,
          T.scrollTrigger.end,
          0,
          P,
          e
        )),
        d && Gn(d, r, o, !0);
    else {
      Ft(i) && (i = i(y));
      var S = (e || "0").split(" "),
        A,
        H,
        q,
        N;
      (b = er(i, y) || Ge),
        (A = Hr(b) || {}),
        (!A || (!A.left && !A.top)) &&
          xr(b).display === "none" &&
          ((N = b.style.display),
          (b.style.display = "block"),
          (A = Hr(b)),
          N ? (b.style.display = N) : b.style.removeProperty("display")),
        (H = Nn(S[0], A[o.d])),
        (q = Nn(S[1] || "0", r)),
        (e = A[o.p] - g[o.p] - C + H + u - q),
        d && Gn(d, q, o, r - q < 20 || (d._isStart && q > 20)),
        (r -= r - q);
    }
    if ((E && ((y[E] = e || -0.001), e < 0 && (e = 0)), p)) {
      var j = e + r,
        re = p._isStart;
      (X = "scroll" + o.d2),
        Gn(
          p,
          j,
          o,
          (re && j > 20) ||
            (!re && (x ? Math.max(Ge[X], pr[X]) : p.parentNode[X]) <= j + 1)
        ),
        x &&
          ((g = Hr(d)),
          x && (p.style[o.op.p] = g[o.op.p] - o.op.m - p._offset + wt));
    }
    return (
      T &&
        b &&
        ((X = Hr(b)),
        T.seek(P),
        (G = Hr(b)),
        (T._caScrollDist = X[o.p] - G[o.p]),
        (e = (e / T._caScrollDist) * P)),
      T && T.seek(F),
      T ? e : Math.round(e)
    );
  },
  ef = /(webkit|moz|length|cssText|inset)/i,
  bo = function (e, i, r, o) {
    if (e.parentNode !== i) {
      var u = e.style,
        p,
        d;
      if (i === Ge) {
        (e._stOrig = u.cssText), (d = xr(e));
        for (p in d)
          !+p &&
            !ef.test(p) &&
            d[p] &&
            typeof u[p] == "string" &&
            p !== "0" &&
            (u[p] = d[p]);
        (u.top = r), (u.left = o);
      } else u.cssText = e._stOrig;
      (ue.core.getCache(e).uncache = 1), i.appendChild(e);
    }
  },
  rl = function (e, i, r) {
    var o = i,
      u = o;
    return function (p) {
      var d = Math.round(e());
      return (
        d !== o &&
          d !== u &&
          Math.abs(d - o) > 3 &&
          Math.abs(d - u) > 3 &&
          ((p = d), r && r()),
        (u = o),
        (o = Math.round(p)),
        o
      );
    };
  },
  zn = function (e, i, r) {
    var o = {};
    (o[i.p] = "+=" + r), ue.set(e, o);
  },
  yo = function (e, i) {
    var r = ii(e, i),
      o = "_scroll" + i.p2,
      u = function p(d, y, g, C, x) {
        var P = p.tween,
          T = y.onComplete,
          E = {};
        g = g || r();
        var F = rl(r, g, function () {
          P.kill(), (p.tween = 0);
        });
        return (
          (x = (C && x) || 0),
          (C = C || d - g),
          P && P.kill(),
          (y[o] = d),
          (y.inherit = !1),
          (y.modifiers = E),
          (E[o] = function () {
            return F(g + C * P.ratio + x * P.ratio * P.ratio);
          }),
          (y.onUpdate = function () {
            ke.cache++, p.tween && qr();
          }),
          (y.onComplete = function () {
            (p.tween = 0), T && T.call(P);
          }),
          (P = p.tween = ue.to(e, y)),
          P
        );
      };
    return (
      (e[o] = r),
      (r.wheelHandler = function () {
        return u.tween && u.tween.kill() && (u.tween = 0);
      }),
      Pt(e, "wheel", r.wheelHandler),
      Ce.isTouch && Pt(e, "touchmove", r.wheelHandler),
      u
    );
  },
  Ce = (function () {
    function s(i, r) {
      Di ||
        s.register(ue) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Ws(this),
        this.init(i, r);
    }
    var e = s.prototype;
    return (
      (e.init = function (r, o) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !rn)
        ) {
          this.update = this.refresh = this.kill = Lr;
          return;
        }
        r = po(fr(r) || sn(r) || r.nodeType ? { trigger: r } : r, Ln);
        var u = r,
          p = u.onUpdate,
          d = u.toggleClass,
          y = u.id,
          g = u.onToggle,
          C = u.onRefresh,
          x = u.scrub,
          P = u.trigger,
          T = u.pin,
          E = u.pinSpacing,
          F = u.invalidateOnRefresh,
          X = u.anticipatePin,
          G = u.onScrubComplete,
          b = u.onSnapComplete,
          S = u.once,
          A = u.snap,
          H = u.pinReparent,
          q = u.pinSpacer,
          N = u.containerAnimation,
          j = u.fastScrollEnd,
          re = u.preventOverlaps,
          R =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? $t
              : xt,
          z = !x && x !== 0,
          L = er(r.scroller || Pe),
          Q = ue.core.getCache(L),
          W = xi(L),
          ce =
            ("pinType" in r
              ? r.pinType
              : ri(L, "pinType") || (W && "fixed")) === "fixed",
          ie = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          de = z && r.toggleActions.split(" "),
          ne = "markers" in r ? r.markers : Ln.markers,
          se = W ? 0 : parseFloat(xr(L)["border" + R.p2 + Ni]) || 0,
          M = this,
          Me =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(M);
            },
          ct = qc(L, W, R),
          Le = Xc(L, W),
          Re = 0,
          nt = 0,
          Fe = 0,
          we = ii(L, R),
          xe,
          De,
          st,
          je,
          Ve,
          fe,
          he,
          Ee,
          Ue,
          B,
          Xe,
          tr,
          Sr,
          We,
          rr,
          gr,
          Bt,
          ft,
          at,
          ye,
          Ie,
          bt,
          Cr,
          Mr,
          et,
          ni,
          mr,
          Fr,
          mt,
          Or,
          Ut,
          Te,
          _r,
          Mt,
          ir,
          Kt,
          vr,
          Nt,
          Ot;
        if (
          ((M._startClamp = M._endClamp = !1),
          (M._dir = R),
          (X *= 45),
          (M.scroller = L),
          (M.scroll = N ? N.time.bind(N) : we),
          (je = we()),
          (M.vars = r),
          (o = o || r.animation),
          "refreshPriority" in r &&
            ((Vo = 1), r.refreshPriority === -9999 && (gn = M)),
          (Q.tweenScroll = Q.tweenScroll || {
            top: yo(L, xt),
            left: yo(L, $t),
          }),
          (M.tweenTo = xe = Q.tweenScroll[R.p]),
          (M.scrubDuration = function (te) {
            (_r = sn(te) && te),
              _r
                ? Te
                  ? Te.duration(te)
                  : (Te = ue.to(o, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: _r,
                      paused: !0,
                      onComplete: function () {
                        return G && G(M);
                      },
                    }))
                : (Te && Te.progress(1).kill(), (Te = 0));
          }),
          o &&
            ((o.vars.lazy = !1),
            (o._initted && !M.isReverted) ||
              (o.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                o.duration() &&
                o.render(0, !0, !0)),
            (M.animation = o.pause()),
            (o.scrollTrigger = M),
            M.scrubDuration(x),
            (Or = 0),
            y || (y = o.vars.id)),
          A &&
            ((!_i(A) || A.push) && (A = { snapTo: A }),
            "scrollBehavior" in Ge.style &&
              ue.set(W ? [Ge, pr] : L, { scrollBehavior: "auto" }),
            ke.forEach(function (te) {
              return (
                Ft(te) &&
                te.target === (W ? Ze.scrollingElement || pr : L) &&
                (te.smooth = !1)
              );
            }),
            (st = Ft(A.snapTo)
              ? A.snapTo
              : A.snapTo === "labels"
              ? $c(o)
              : A.snapTo === "labelsDirectional"
              ? jc(o)
              : A.directional !== !1
              ? function (te, me) {
                  return na(A.snapTo)(te, Rt() - nt < 500 ? 0 : me.direction);
                }
              : ue.utils.snap(A.snapTo)),
            (Mt = A.duration || { min: 0.1, max: 2 }),
            (Mt = _i(Mt) ? cn(Mt.min, Mt.max) : cn(Mt, Mt)),
            (ir = ue
              .delayedCall(A.delay || _r / 2 || 0.1, function () {
                var te = we(),
                  me = Rt() - nt < 500,
                  pe = xe.tween;
                if (
                  (me || Math.abs(M.getVelocity()) < 10) &&
                  !pe &&
                  !Jn &&
                  Re !== te
                ) {
                  var _e = (te - fe) / We,
                    dt = o && !z ? o.totalProgress() : _e,
                    be = me ? 0 : ((dt - Ut) / (Rt() - tn)) * 1e3 || 0,
                    tt = ue.utils.clamp(-_e, 1 - _e, (Ai(be / 2) * be) / 0.185),
                    yt = _e + (A.inertia === !1 ? 0 : tt),
                    rt,
                    Ye,
                    He = A,
                    nr = He.onStart,
                    Be = He.onInterrupt,
                    It = He.onComplete;
                  if (
                    ((rt = st(yt, M)),
                    sn(rt) || (rt = yt),
                    (Ye = Math.max(0, Math.round(fe + rt * We))),
                    te <= he && te >= fe && Ye !== te)
                  ) {
                    if (pe && !pe._initted && pe.data <= Ai(Ye - te)) return;
                    A.inertia === !1 && (tt = rt - _e),
                      xe(
                        Ye,
                        {
                          duration: Mt(
                            Ai(
                              (Math.max(Ai(yt - dt), Ai(rt - dt)) * 0.185) /
                                be /
                                0.05 || 0
                            )
                          ),
                          ease: A.ease || "power3",
                          data: Ai(Ye - te),
                          onInterrupt: function () {
                            return ir.restart(!0) && Be && Be(M);
                          },
                          onComplete: function () {
                            M.update(),
                              (Re = we()),
                              o &&
                                !z &&
                                (Te
                                  ? Te.resetTo(
                                      "totalProgress",
                                      rt,
                                      o._tTime / o._tDur
                                    )
                                  : o.progress(rt)),
                              (Or = Ut =
                                o && !z ? o.totalProgress() : M.progress),
                              b && b(M),
                              It && It(M);
                          },
                        },
                        te,
                        tt * We,
                        Ye - te - tt * We
                      ),
                      nr && nr(M, xe.tween);
                  }
                } else M.isActive && Re !== te && ir.restart(!0);
              })
              .pause())),
          y && (js[y] = M),
          (P = M.trigger = er(P || (T !== !0 && T))),
          (Ot = P && P._gsap && P._gsap.stRevert),
          Ot && (Ot = Ot(M)),
          (T = T === !0 ? P : er(T)),
          fr(d) && (d = { targets: P, className: d }),
          T &&
            (E === !1 ||
              E === wr ||
              (E =
                !E &&
                T.parentNode &&
                T.parentNode.style &&
                xr(T.parentNode).display === "flex"
                  ? !1
                  : vt),
            (M.pin = T),
            (De = ue.core.getCache(T)),
            De.spacer
              ? (rr = De.pinState)
              : (q &&
                  ((q = er(q)),
                  q && !q.nodeType && (q = q.current || q.nativeElement),
                  (De.spacerIsNative = !!q),
                  q && (De.spacerState = In(q))),
                (De.spacer = ft = q || Ze.createElement("div")),
                ft.classList.add("pin-spacer"),
                y && ft.classList.add("pin-spacer-" + y),
                (De.pinState = rr = In(T))),
            r.force3D !== !1 && ue.set(T, { force3D: !0 }),
            (M.spacer = ft = De.spacer),
            (mt = xr(T)),
            (Mr = mt[E + R.os2]),
            (ye = ue.getProperty(T)),
            (Ie = ue.quickSetter(T, R.a, wt)),
            Rs(T, ft, mt),
            (Bt = In(T))),
          ne)
        ) {
          (tr = _i(ne) ? po(ne, ho) : ho),
            (B = Dn("scroller-start", y, L, R, tr, 0)),
            (Xe = Dn("scroller-end", y, L, R, tr, 0, B)),
            (at = B["offset" + R.op.d2]);
          var si = er(ri(L, "content") || L);
          (Ee = this.markerStart = Dn("start", y, si, R, tr, at, 0, N)),
            (Ue = this.markerEnd = Dn("end", y, si, R, tr, at, 0, N)),
            N && (Nt = ue.quickSetter([Ee, Ue], R.a, wt)),
            !ce &&
              !(Rr.length && ri(L, "fixedMarkers") === !0) &&
              (Wc(W ? Ge : L),
              ue.set([B, Xe], { force3D: !0 }),
              (ni = ue.quickSetter(B, R.a, wt)),
              (Fr = ue.quickSetter(Xe, R.a, wt)));
        }
        if (N) {
          var ve = N.vars.onUpdate,
            ge = N.vars.onUpdateParams;
          N.eventCallback("onUpdate", function () {
            M.update(0, 0, 1), ve && ve.apply(N, ge || []);
          });
        }
        if (
          ((M.previous = function () {
            return Se[Se.indexOf(M) - 1];
          }),
          (M.next = function () {
            return Se[Se.indexOf(M) + 1];
          }),
          (M.revert = function (te, me) {
            if (!me) return M.kill(!0);
            var pe = te !== !1 || !M.enabled,
              _e = zt;
            pe !== M.isReverted &&
              (pe &&
                ((Kt = Math.max(we(), M.scroll.rec || 0)),
                (Fe = M.progress),
                (vr = o && o.progress())),
              Ee &&
                [Ee, Ue, B, Xe].forEach(function (dt) {
                  return (dt.style.display = pe ? "none" : "block");
                }),
              pe && ((zt = M), M.update(pe)),
              T &&
                (!H || !M.isActive) &&
                (pe ? Qc(T, ft, rr) : Rs(T, ft, xr(T), et)),
              pe || M.update(pe),
              (zt = _e),
              (M.isReverted = pe));
          }),
          (M.refresh = function (te, me, pe, _e) {
            if (!((zt || !M.enabled) && !me)) {
              if (T && te && Tr) {
                Pt(s, "scrollEnd", Zo);
                return;
              }
              !Xt && Me && Me(M),
                (zt = M),
                xe.tween && !pe && (xe.tween.kill(), (xe.tween = 0)),
                Te && Te.pause(),
                F &&
                  o &&
                  (o.revert({ kill: !1 }).invalidate(),
                  o.getChildren &&
                    o.getChildren(!0, !0, !1).forEach(function (Er) {
                      return Er.vars.immediateRender && Er.render(0, !0, !0);
                    })),
                M.isReverted || M.revert(!0, !0),
                (M._subPinOffset = !1);
              var dt = ct(),
                be = Le(),
                tt = N ? N.duration() : Ir(L, R),
                yt = We <= 0.01 || !We,
                rt = 0,
                Ye = _e || 0,
                He = _i(pe) ? pe.end : r.end,
                nr = r.endTrigger || P,
                Be = _i(pe)
                  ? pe.start
                  : r.start || (r.start === 0 || !P ? 0 : T ? "0 0" : "0 100%"),
                It = (M.pinnedContainer =
                  r.pinnedContainer && er(r.pinnedContainer, M)),
                br = (P && Math.max(0, Se.indexOf(M))) || 0,
                Ne = br,
                ot,
                Je,
                sr,
                pt,
                Tt,
                lt,
                ar,
                Gi,
                Gt,
                Br,
                or,
                Xr,
                Wr;
              for (
                ne &&
                _i(pe) &&
                ((Xr = ue.getProperty(B, R.p)), (Wr = ue.getProperty(Xe, R.p)));
                Ne-- > 0;

              )
                (lt = Se[Ne]),
                  lt.end || lt.refresh(0, 1) || (zt = M),
                  (ar = lt.pin),
                  ar &&
                    (ar === P || ar === T || ar === It) &&
                    !lt.isReverted &&
                    (Br || (Br = []), Br.unshift(lt), lt.revert(!0, !0)),
                  lt !== Se[Ne] && (br--, Ne--);
              for (
                Ft(Be) && (Be = Be(M)),
                  Be = lo(Be, "start", M),
                  fe =
                    vo(
                      Be,
                      P,
                      dt,
                      R,
                      we(),
                      Ee,
                      B,
                      M,
                      be,
                      se,
                      ce,
                      tt,
                      N,
                      M._startClamp && "_startClamp"
                    ) || (T ? -0.001 : 0),
                  Ft(He) && (He = He(M)),
                  fr(He) &&
                    !He.indexOf("+=") &&
                    (~He.indexOf(" ")
                      ? (He = (fr(Be) ? Be.split(" ")[0] : "") + He)
                      : ((rt = Nn(He.substr(2), dt)),
                        (He = fr(Be)
                          ? Be
                          : (N
                              ? ue.utils.mapRange(
                                  0,
                                  N.duration(),
                                  N.scrollTrigger.start,
                                  N.scrollTrigger.end,
                                  fe
                                )
                              : fe) + rt),
                        (nr = P))),
                  He = lo(He, "end", M),
                  he =
                    Math.max(
                      fe,
                      vo(
                        He || (nr ? "100% 0" : tt),
                        nr,
                        dt,
                        R,
                        we() + rt,
                        Ue,
                        Xe,
                        M,
                        be,
                        se,
                        ce,
                        tt,
                        N,
                        M._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  rt = 0,
                  Ne = br;
                Ne--;

              )
                (lt = Se[Ne]),
                  (ar = lt.pin),
                  ar &&
                    lt.start - lt._pinPush <= fe &&
                    !N &&
                    lt.end > 0 &&
                    ((ot =
                      lt.end -
                      (M._startClamp ? Math.max(0, lt.start) : lt.start)),
                    ((ar === P && lt.start - lt._pinPush < fe) || ar === It) &&
                      isNaN(Be) &&
                      (rt += ot * (1 - lt.progress)),
                    ar === T && (Ye += ot));
              if (
                ((fe += rt),
                (he += rt),
                M._startClamp && (M._startClamp += rt),
                M._endClamp &&
                  !Xt &&
                  ((M._endClamp = he || -0.001), (he = Math.min(he, Ir(L, R)))),
                (We = he - fe || ((fe -= 0.01) && 0.001)),
                yt &&
                  (Fe = ue.utils.clamp(0, 1, ue.utils.normalize(fe, he, Kt))),
                (M._pinPush = Ye),
                Ee &&
                  rt &&
                  ((ot = {}),
                  (ot[R.a] = "+=" + rt),
                  It && (ot[R.p] = "-=" + we()),
                  ue.set([Ee, Ue], ot)),
                T && !($s && M.end >= Ir(L, R)))
              )
                (ot = xr(T)),
                  (pt = R === xt),
                  (sr = we()),
                  (bt = parseFloat(ye(R.a)) + Ye),
                  !tt &&
                    he > 1 &&
                    ((or = (W ? Ze.scrollingElement || pr : L).style),
                    (or = {
                      style: or,
                      value: or["overflow" + R.a.toUpperCase()],
                    }),
                    W &&
                      xr(Ge)["overflow" + R.a.toUpperCase()] !== "scroll" &&
                      (or.style["overflow" + R.a.toUpperCase()] = "scroll")),
                  Rs(T, ft, ot),
                  (Bt = In(T)),
                  (Je = Hr(T, !0)),
                  (Gi = ce && ii(L, pt ? $t : xt)()),
                  E
                    ? ((et = [E + R.os2, We + Ye + wt]),
                      (et.t = ft),
                      (Ne = E === vt ? Qn(T, R) + We + Ye : 0),
                      Ne &&
                        (et.push(R.d, Ne + wt),
                        ft.style.flexBasis !== "auto" &&
                          (ft.style.flexBasis = Ne + wt)),
                      Bi(et),
                      It &&
                        Se.forEach(function (Er) {
                          Er.pin === It &&
                            Er.vars.pinSpacing !== !1 &&
                            (Er._subPinOffset = !0);
                        }),
                      ce && we(Kt))
                    : ((Ne = Qn(T, R)),
                      Ne &&
                        ft.style.flexBasis !== "auto" &&
                        (ft.style.flexBasis = Ne + wt)),
                  ce &&
                    ((Tt = {
                      top: Je.top + (pt ? sr - fe : Gi) + wt,
                      left: Je.left + (pt ? Gi : sr - fe) + wt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Tt[bi] = Tt["max" + Ni] = Math.ceil(Je.width) + wt),
                    (Tt[yi] = Tt["max" + ia] = Math.ceil(Je.height) + wt),
                    (Tt[wr] =
                      Tt[wr + pn] =
                      Tt[wr + fn] =
                      Tt[wr + hn] =
                      Tt[wr + dn] =
                        "0"),
                    (Tt[vt] = ot[vt]),
                    (Tt[vt + pn] = ot[vt + pn]),
                    (Tt[vt + fn] = ot[vt + fn]),
                    (Tt[vt + hn] = ot[vt + hn]),
                    (Tt[vt + dn] = ot[vt + dn]),
                    (gr = Jc(rr, Tt, H)),
                    Xt && we(0)),
                  o
                    ? ((Gt = o._initted),
                      As(1),
                      o.render(o.duration(), !0, !0),
                      (Cr = ye(R.a) - bt + We + Ye),
                      (mr = Math.abs(We - Cr) > 1),
                      ce && mr && gr.splice(gr.length - 2, 2),
                      o.render(0, !0, !0),
                      Gt || o.invalidate(!0),
                      o.parent || o.totalTime(o.totalTime()),
                      As(0))
                    : (Cr = We),
                  or &&
                    (or.value
                      ? (or.style["overflow" + R.a.toUpperCase()] = or.value)
                      : or.style.removeProperty("overflow-" + R.a));
              else if (P && we() && !N)
                for (Je = P.parentNode; Je && Je !== Ge; )
                  Je._pinOffset &&
                    ((fe -= Je._pinOffset), (he -= Je._pinOffset)),
                    (Je = Je.parentNode);
              Br &&
                Br.forEach(function (Er) {
                  return Er.revert(!1, !0);
                }),
                (M.start = fe),
                (M.end = he),
                (je = Ve = Xt ? Kt : we()),
                !N && !Xt && (je < Kt && we(Kt), (M.scroll.rec = 0)),
                M.revert(!1, !0),
                (nt = Rt()),
                ir && ((Re = -1), ir.restart(!0)),
                (zt = 0),
                o &&
                  z &&
                  (o._initted || vr) &&
                  o.progress() !== vr &&
                  o.progress(vr || 0, !0).render(o.time(), !0, !0),
                (yt || Fe !== M.progress || N || F || (o && !o._initted)) &&
                  (o &&
                    !z &&
                    (o._initted || Fe || o.vars.immediateRender !== !1) &&
                    o.totalProgress(
                      N && fe < -0.001 && !Fe
                        ? ue.utils.normalize(fe, he, 0)
                        : Fe,
                      !0
                    ),
                  (M.progress = yt || (je - fe) / We === Fe ? 0 : Fe)),
                T && E && (ft._pinOffset = Math.round(M.progress * Cr)),
                Te && Te.invalidate(),
                isNaN(Xr) ||
                  ((Xr -= ue.getProperty(B, R.p)),
                  (Wr -= ue.getProperty(Xe, R.p)),
                  zn(B, R, Xr),
                  zn(Ee, R, Xr - (_e || 0)),
                  zn(Xe, R, Wr),
                  zn(Ue, R, Wr - (_e || 0))),
                yt && !Xt && M.update(),
                C && !Xt && !Sr && ((Sr = !0), C(M), (Sr = !1));
            }
          }),
          (M.getVelocity = function () {
            return ((we() - Ve) / (Rt() - tn)) * 1e3 || 0;
          }),
          (M.endAnimation = function () {
            en(M.callbackAnimation),
              o &&
                (Te
                  ? Te.progress(1)
                  : o.paused()
                  ? z || en(o, M.direction < 0, 1)
                  : en(o, o.reversed()));
          }),
          (M.labelToScroll = function (te) {
            return (
              (o &&
                o.labels &&
                (fe || M.refresh() || fe) +
                  (o.labels[te] / o.duration()) * We) ||
              0
            );
          }),
          (M.getTrailing = function (te) {
            var me = Se.indexOf(M),
              pe =
                M.direction > 0 ? Se.slice(0, me).reverse() : Se.slice(me + 1);
            return (
              fr(te)
                ? pe.filter(function (_e) {
                    return _e.vars.preventOverlaps === te;
                  })
                : pe
            ).filter(function (_e) {
              return M.direction > 0 ? _e.end <= fe : _e.start >= he;
            });
          }),
          (M.update = function (te, me, pe) {
            if (!(N && !pe && !te)) {
              var _e = Xt === !0 ? Kt : M.scroll(),
                dt = te ? 0 : (_e - fe) / We,
                be = dt < 0 ? 0 : dt > 1 ? 1 : dt || 0,
                tt = M.progress,
                yt,
                rt,
                Ye,
                He,
                nr,
                Be,
                It,
                br;
              if (
                (me &&
                  ((Ve = je),
                  (je = N ? we() : _e),
                  A && ((Ut = Or), (Or = o && !z ? o.totalProgress() : be))),
                X &&
                  T &&
                  !zt &&
                  !kn &&
                  Tr &&
                  (!be && fe < _e + ((_e - Ve) / (Rt() - tn)) * X
                    ? (be = 1e-4)
                    : be === 1 &&
                      he > _e + ((_e - Ve) / (Rt() - tn)) * X &&
                      (be = 0.9999)),
                be !== tt && M.enabled)
              ) {
                if (
                  ((yt = M.isActive = !!be && be < 1),
                  (rt = !!tt && tt < 1),
                  (Be = yt !== rt),
                  (nr = Be || !!be != !!tt),
                  (M.direction = be > tt ? 1 : -1),
                  (M.progress = be),
                  nr &&
                    !zt &&
                    ((Ye = be && !tt ? 0 : be === 1 ? 1 : tt === 1 ? 2 : 3),
                    z &&
                      ((He =
                        (!Be && de[Ye + 1] !== "none" && de[Ye + 1]) || de[Ye]),
                      (br =
                        o &&
                        (He === "complete" || He === "reset" || He in o)))),
                  re &&
                    (Be || br) &&
                    (br || x || !o) &&
                    (Ft(re)
                      ? re(M)
                      : M.getTrailing(re).forEach(function (sr) {
                          return sr.endAnimation();
                        })),
                  z ||
                    (Te && !zt && !kn
                      ? (Te._dp._time - Te._start !== Te._time &&
                          Te.render(Te._dp._time - Te._start),
                        Te.resetTo
                          ? Te.resetTo("totalProgress", be, o._tTime / o._tDur)
                          : ((Te.vars.totalProgress = be),
                            Te.invalidate().restart()))
                      : o && o.totalProgress(be, !!(zt && (nt || te)))),
                  T)
                ) {
                  if ((te && E && (ft.style[E + R.os2] = Mr), !ce))
                    Ie(nn(bt + Cr * be));
                  else if (nr) {
                    if (
                      ((It =
                        !te && be > tt && he + 1 > _e && _e + 1 >= Ir(L, R)),
                      H)
                    )
                      if (!te && (yt || It)) {
                        var Ne = Hr(T, !0),
                          ot = _e - fe;
                        bo(
                          T,
                          Ge,
                          Ne.top + (R === xt ? ot : 0) + wt,
                          Ne.left + (R === xt ? 0 : ot) + wt
                        );
                      } else bo(T, ft);
                    Bi(yt || It ? gr : Bt),
                      (mr && be < 1 && yt) ||
                        Ie(bt + (be === 1 && !It ? Cr : 0));
                  }
                }
                A && !xe.tween && !zt && !kn && ir.restart(!0),
                  d &&
                    (Be || (S && be && (be < 1 || !Ls))) &&
                    mn(d.targets).forEach(function (sr) {
                      return sr.classList[yt || S ? "add" : "remove"](
                        d.className
                      );
                    }),
                  p && !z && !te && p(M),
                  nr && !zt
                    ? (z &&
                        (br &&
                          (He === "complete"
                            ? o.pause().totalProgress(1)
                            : He === "reset"
                            ? o.restart(!0).pause()
                            : He === "restart"
                            ? o.restart(!0)
                            : o[He]()),
                        p && p(M)),
                      (Be || !Ls) &&
                        (g && Be && Is(M, g),
                        ie[Ye] && Is(M, ie[Ye]),
                        S && (be === 1 ? M.kill(!1, 1) : (ie[Ye] = 0)),
                        Be ||
                          ((Ye = be === 1 ? 1 : 3), ie[Ye] && Is(M, ie[Ye]))),
                      j &&
                        !yt &&
                        Math.abs(M.getVelocity()) > (sn(j) ? j : 2500) &&
                        (en(M.callbackAnimation),
                        Te
                          ? Te.progress(1)
                          : en(o, He === "reverse" ? 1 : !be, 1)))
                    : z && p && !zt && p(M);
              }
              if (Fr) {
                var Je = N ? (_e / N.duration()) * (N._caScrollDist || 0) : _e;
                ni(Je + (B._isFlipped ? 1 : 0)), Fr(Je);
              }
              Nt && Nt((-_e / N.duration()) * (N._caScrollDist || 0));
            }
          }),
          (M.enable = function (te, me) {
            M.enabled ||
              ((M.enabled = !0),
              Pt(L, "resize", an),
              W || Pt(L, "scroll", Li),
              Me && Pt(s, "refreshInit", Me),
              te !== !1 && ((M.progress = Fe = 0), (je = Ve = Re = we())),
              me !== !1 && M.refresh());
          }),
          (M.getTween = function (te) {
            return te && xe ? xe.tween : Te;
          }),
          (M.setPositions = function (te, me, pe, _e) {
            if (N) {
              var dt = N.scrollTrigger,
                be = N.duration(),
                tt = dt.end - dt.start;
              (te = dt.start + (tt * te) / be),
                (me = dt.start + (tt * me) / be);
            }
            M.refresh(
              !1,
              !1,
              {
                start: uo(te, pe && !!M._startClamp),
                end: uo(me, pe && !!M._endClamp),
              },
              _e
            ),
              M.update();
          }),
          (M.adjustPinSpacing = function (te) {
            if (et && te) {
              var me = et.indexOf(R.d) + 1;
              (et[me] = parseFloat(et[me]) + te + wt),
                (et[1] = parseFloat(et[1]) + te + wt),
                Bi(et);
            }
          }),
          (M.disable = function (te, me) {
            if (
              M.enabled &&
              (te !== !1 && M.revert(!0, !0),
              (M.enabled = M.isActive = !1),
              me || (Te && Te.pause()),
              (Kt = 0),
              De && (De.uncache = 1),
              Me && Et(s, "refreshInit", Me),
              ir && (ir.pause(), xe.tween && xe.tween.kill() && (xe.tween = 0)),
              !W)
            ) {
              for (var pe = Se.length; pe--; )
                if (Se[pe].scroller === L && Se[pe] !== M) return;
              Et(L, "resize", an), W || Et(L, "scroll", Li);
            }
          }),
          (M.kill = function (te, me) {
            M.disable(te, me), Te && !me && Te.kill(), y && delete js[y];
            var pe = Se.indexOf(M);
            pe >= 0 && Se.splice(pe, 1),
              pe === qt && Vn > 0 && qt--,
              (pe = 0),
              Se.forEach(function (_e) {
                return _e.scroller === M.scroller && (pe = 1);
              }),
              pe || Xt || (M.scroll.rec = 0),
              o &&
                ((o.scrollTrigger = null),
                te && o.revert({ kill: !1 }),
                me || o.kill()),
              Ee &&
                [Ee, Ue, B, Xe].forEach(function (_e) {
                  return _e.parentNode && _e.parentNode.removeChild(_e);
                }),
              gn === M && (gn = 0),
              T &&
                (De && (De.uncache = 1),
                (pe = 0),
                Se.forEach(function (_e) {
                  return _e.pin === T && pe++;
                }),
                pe || (De.spacer = 0)),
              r.onKill && r.onKill(M);
          }),
          Se.push(M),
          M.enable(!1, !1),
          Ot && Ot(M),
          o && o.add && !We)
        ) {
          var Ae = M.update;
          (M.update = function () {
            (M.update = Ae), ke.cache++, fe || he || M.refresh();
          }),
            ue.delayedCall(0.01, M.update),
            (We = 0.01),
            (fe = he = 0);
        } else M.refresh();
        T && Kc();
      }),
      (s.register = function (r) {
        return (
          Di ||
            ((ue = r || Wo()),
            Xo() && window.document && s.enable(),
            (Di = rn)),
          Di
        );
      }),
      (s.defaults = function (r) {
        if (r) for (var o in r) Ln[o] = r[o];
        return Ln;
      }),
      (s.disable = function (r, o) {
        (rn = 0),
          Se.forEach(function (p) {
            return p[o ? "kill" : "disable"](r);
          }),
          Et(Pe, "wheel", Li),
          Et(Ze, "scroll", Li),
          clearInterval(Pn),
          Et(Ze, "touchcancel", Lr),
          Et(Ge, "touchstart", Lr),
          On(Et, Ze, "pointerdown,touchstart,mousedown", co),
          On(Et, Ze, "pointerup,touchend,mouseup", fo),
          Un.kill(),
          Mn(Et);
        for (var u = 0; u < ke.length; u += 3)
          An(Et, ke[u], ke[u + 1]), An(Et, ke[u], ke[u + 2]);
      }),
      (s.enable = function () {
        if (
          ((Pe = window),
          (Ze = document),
          (pr = Ze.documentElement),
          (Ge = Ze.body),
          ue &&
            ((mn = ue.utils.toArray),
            (cn = ue.utils.clamp),
            (Ws = ue.core.context || Lr),
            (As = ue.core.suppressOverwrites || Lr),
            (Js = Pe.history.scrollRestoration || "auto"),
            (Us = Pe.pageYOffset || 0),
            ue.core.globals("ScrollTrigger", s),
            Ge))
        ) {
          (rn = 1),
            (Fi = document.createElement("div")),
            (Fi.style.height = "100vh"),
            (Fi.style.position = "absolute"),
            tl(),
            Yc(),
            gt.register(ue),
            (s.isTouch = gt.isTouch),
            (Zr =
              gt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Xs = gt.isTouch === 1),
            Pt(Pe, "wheel", Li),
            (Zs = [Pe, Ze, pr, Ge]),
            ue.matchMedia
              ? ((s.matchMedia = function (g) {
                  var C = ue.matchMedia(),
                    x;
                  for (x in g) C.add(x, g[x]);
                  return C;
                }),
                ue.addEventListener("matchMediaInit", function () {
                  return sa();
                }),
                ue.addEventListener("matchMediaRevert", function () {
                  return Jo();
                }),
                ue.addEventListener("matchMedia", function () {
                  vi(0, 1), Si("matchMedia");
                }),
                ue.matchMedia().add("(orientation: portrait)", function () {
                  return zs(), zs;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            zs(),
            Pt(Ze, "scroll", Li);
          var r = Ge.hasAttribute("style"),
            o = Ge.style,
            u = o.borderTopStyle,
            p = ue.core.Animation.prototype,
            d,
            y;
          for (
            p.revert ||
              Object.defineProperty(p, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              o.borderTopStyle = "solid",
              d = Hr(Ge),
              xt.m = Math.round(d.top + xt.sc()) || 0,
              $t.m = Math.round(d.left + $t.sc()) || 0,
              u ? (o.borderTopStyle = u) : o.removeProperty("border-top-style"),
              r || (Ge.setAttribute("style", ""), Ge.removeAttribute("style")),
              Pn = setInterval(go, 250),
              ue.delayedCall(0.5, function () {
                return (kn = 0);
              }),
              Pt(Ze, "touchcancel", Lr),
              Pt(Ge, "touchstart", Lr),
              On(Pt, Ze, "pointerdown,touchstart,mousedown", co),
              On(Pt, Ze, "pointerup,touchend,mouseup", fo),
              qs = ue.utils.checkPrefix("transform"),
              Hn.push(qs),
              Di = Rt(),
              Un = ue.delayedCall(0.2, vi).pause(),
              Ii = [
                Ze,
                "visibilitychange",
                function () {
                  var g = Pe.innerWidth,
                    C = Pe.innerHeight;
                  Ze.hidden
                    ? ((ao = g), (oo = C))
                    : (ao !== g || oo !== C) && an();
                },
                Ze,
                "DOMContentLoaded",
                vi,
                Pe,
                "load",
                vi,
                Pe,
                "resize",
                an,
              ],
              Mn(Pt),
              Se.forEach(function (g) {
                return g.enable(0, 1);
              }),
              y = 0;
            y < ke.length;
            y += 3
          )
            An(Et, ke[y], ke[y + 1]), An(Et, ke[y], ke[y + 2]);
        }
      }),
      (s.config = function (r) {
        "limitCallbacks" in r && (Ls = !!r.limitCallbacks);
        var o = r.syncInterval;
        (o && clearInterval(Pn)) || ((Pn = o) && setInterval(go, o)),
          "ignoreMobileResize" in r &&
            (Xs = s.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (Mn(Et) || Mn(Pt, r.autoRefreshEvents || "none"),
            (Ho = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (s.scrollerProxy = function (r, o) {
        var u = er(r),
          p = ke.indexOf(u),
          d = xi(u);
        ~p && ke.splice(p, d ? 6 : 2),
          o && (d ? Rr.unshift(Pe, o, Ge, o, pr, o) : Rr.unshift(u, o));
      }),
      (s.clearMatchMedia = function (r) {
        Se.forEach(function (o) {
          return o._ctx && o._ctx.query === r && o._ctx.kill(!0, !0);
        });
      }),
      (s.isInViewport = function (r, o, u) {
        var p = (fr(r) ? er(r) : r).getBoundingClientRect(),
          d = p[u ? bi : yi] * o || 0;
        return u
          ? p.right - d > 0 && p.left + d < Pe.innerWidth
          : p.bottom - d > 0 && p.top + d < Pe.innerHeight;
      }),
      (s.positionInViewport = function (r, o, u) {
        fr(r) && (r = er(r));
        var p = r.getBoundingClientRect(),
          d = p[u ? bi : yi],
          y =
            o == null
              ? d / 2
              : o in Zn
              ? Zn[o] * d
              : ~o.indexOf("%")
              ? (parseFloat(o) * d) / 100
              : parseFloat(o) || 0;
        return u ? (p.left + y) / Pe.innerWidth : (p.top + y) / Pe.innerHeight;
      }),
      (s.killAll = function (r) {
        if (
          (Se.slice(0).forEach(function (u) {
            return u.vars.id !== "ScrollSmoother" && u.kill();
          }),
          r !== !0)
        ) {
          var o = Ti.killAll || [];
          (Ti = {}),
            o.forEach(function (u) {
              return u();
            });
        }
      }),
      s
    );
  })();
Ce.version = "3.13.0";
Ce.saveStyles = function (s) {
  return s
    ? mn(s).forEach(function (e) {
        if (e && e.style) {
          var i = cr.indexOf(e);
          i >= 0 && cr.splice(i, 5),
            cr.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              ue.core.getCache(e),
              Ws()
            );
        }
      })
    : cr;
};
Ce.revert = function (s, e) {
  return sa(!s, e);
};
Ce.create = function (s, e) {
  return new Ce(s, e);
};
Ce.refresh = function (s) {
  return s ? an(!0) : (Di || Ce.register()) && vi(!0);
};
Ce.update = function (s) {
  return ++ke.cache && qr(s === !0 ? 2 : 0);
};
Ce.clearScrollMemory = el;
Ce.maxScroll = function (s, e) {
  return Ir(s, e ? $t : xt);
};
Ce.getScrollFunc = function (s, e) {
  return ii(er(s), e ? $t : xt);
};
Ce.getById = function (s) {
  return js[s];
};
Ce.getAll = function () {
  return Se.filter(function (s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
Ce.isScrolling = function () {
  return !!Tr;
};
Ce.snapDirectional = na;
Ce.addEventListener = function (s, e) {
  var i = Ti[s] || (Ti[s] = []);
  ~i.indexOf(e) || i.push(e);
};
Ce.removeEventListener = function (s, e) {
  var i = Ti[s],
    r = i && i.indexOf(e);
  r >= 0 && i.splice(r, 1);
};
Ce.batch = function (s, e) {
  var i = [],
    r = {},
    o = e.interval || 0.016,
    u = e.batchMax || 1e9,
    p = function (g, C) {
      var x = [],
        P = [],
        T = ue
          .delayedCall(o, function () {
            C(x, P), (x = []), (P = []);
          })
          .pause();
      return function (E) {
        x.length || T.restart(!0),
          x.push(E.trigger),
          P.push(E),
          u <= x.length && T.progress(1);
      };
    },
    d;
  for (d in e)
    r[d] =
      d.substr(0, 2) === "on" && Ft(e[d]) && d !== "onRefreshInit"
        ? p(d, e[d])
        : e[d];
  return (
    Ft(u) &&
      ((u = u()),
      Pt(Ce, "refresh", function () {
        return (u = e.batchMax());
      })),
    mn(s).forEach(function (y) {
      var g = {};
      for (d in r) g[d] = r[d];
      (g.trigger = y), i.push(Ce.create(g));
    }),
    i
  );
};
var wo = function (e, i, r, o) {
    return (
      i > o ? e(o) : i < 0 && e(0),
      r > o ? (o - i) / (r - i) : r < 0 ? i / (i - r) : 1
    );
  },
  Fs = function s(e, i) {
    i === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          i === !0
            ? "auto"
            : i
            ? "pan-" + i + (gt.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === pr && s(Ge, i);
  },
  Rn = { auto: 1, scroll: 1 },
  tf = function (e) {
    var i = e.event,
      r = e.target,
      o = e.axis,
      u = (i.changedTouches ? i.changedTouches[0] : i).target,
      p = u._gsap || ue.core.getCache(u),
      d = Rt(),
      y;
    if (!p._isScrollT || d - p._isScrollT > 2e3) {
      for (
        ;
        u &&
        u !== Ge &&
        ((u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth) ||
          !(Rn[(y = xr(u)).overflowY] || Rn[y.overflowX]));

      )
        u = u.parentNode;
      (p._isScroll =
        u &&
        u !== r &&
        !xi(u) &&
        (Rn[(y = xr(u)).overflowY] || Rn[y.overflowX])),
        (p._isScrollT = d);
    }
    (p._isScroll || o === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
  },
  il = function (e, i, r, o) {
    return gt.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: i,
      onWheel: (o = o && tf),
      onPress: o,
      onDrag: o,
      onScroll: o,
      onEnable: function () {
        return r && Pt(Ze, gt.eventTypes[0], To, !1, !0);
      },
      onDisable: function () {
        return Et(Ze, gt.eventTypes[0], To, !0);
      },
    });
  },
  rf = /(input|label|select|textarea)/i,
  xo,
  To = function (e) {
    var i = rf.test(e.target.tagName);
    (i || xo) && ((e._gsapAllow = !0), (xo = i));
  },
  nf = function (e) {
    _i(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var i = e,
      r = i.normalizeScrollX,
      o = i.momentum,
      u = i.allowNestedScroll,
      p = i.onRelease,
      d,
      y,
      g = er(e.target) || pr,
      C = ue.core.globals().ScrollSmoother,
      x = C && C.get(),
      P =
        Zr &&
        ((e.content && er(e.content)) ||
          (x && e.content !== !1 && !x.smooth() && x.content())),
      T = ii(g, xt),
      E = ii(g, $t),
      F = 1,
      X =
        (gt.isTouch && Pe.visualViewport
          ? Pe.visualViewport.scale * Pe.visualViewport.width
          : Pe.outerWidth) / Pe.innerWidth,
      G = 0,
      b = Ft(o)
        ? function () {
            return o(d);
          }
        : function () {
            return o || 2.8;
          },
      S,
      A,
      H = il(g, e.type, !0, u),
      q = function () {
        return (A = !1);
      },
      N = Lr,
      j = Lr,
      re = function () {
        (y = Ir(g, xt)),
          (j = cn(Zr ? 1 : 0, y)),
          r && (N = cn(0, Ir(g, $t))),
          (S = wi);
      },
      R = function () {
        (P._gsap.y = nn(parseFloat(P._gsap.y) + T.offset) + "px"),
          (P.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(P._gsap.y) +
            ", 0, 1)"),
          (T.offset = T.cacheID = 0);
      },
      z = function () {
        if (A) {
          requestAnimationFrame(q);
          var ne = nn(d.deltaY / 2),
            se = j(T.v - ne);
          if (P && se !== T.v + T.offset) {
            T.offset = se - T.v;
            var M = nn((parseFloat(P && P._gsap.y) || 0) - T.offset);
            (P.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              M +
              ", 0, 1)"),
              (P._gsap.y = M + "px"),
              (T.cacheID = ke.cache),
              qr();
          }
          return !0;
        }
        T.offset && R(), (A = !0);
      },
      L,
      Q,
      W,
      ce,
      ie = function () {
        re(),
          L.isActive() &&
            L.vars.scrollY > y &&
            (T() > y ? L.progress(1) && T(y) : L.resetTo("scrollY", y));
      };
    return (
      P && ue.set(P, { y: "+=0" }),
      (e.ignoreCheck = function (de) {
        return (
          (Zr && de.type === "touchmove" && z()) ||
          (F > 1.05 && de.type !== "touchstart") ||
          d.isGesturing ||
          (de.touches && de.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        A = !1;
        var de = F;
        (F = nn(((Pe.visualViewport && Pe.visualViewport.scale) || 1) / X)),
          L.pause(),
          de !== F && Fs(g, F > 1.01 ? !0 : r ? !1 : "x"),
          (Q = E()),
          (W = T()),
          re(),
          (S = wi);
      }),
      (e.onRelease = e.onGestureStart =
        function (de, ne) {
          if ((T.offset && R(), !ne)) ce.restart(!0);
          else {
            ke.cache++;
            var se = b(),
              M,
              Me;
            r &&
              ((M = E()),
              (Me = M + (se * 0.05 * -de.velocityX) / 0.227),
              (se *= wo(E, M, Me, Ir(g, $t))),
              (L.vars.scrollX = N(Me))),
              (M = T()),
              (Me = M + (se * 0.05 * -de.velocityY) / 0.227),
              (se *= wo(T, M, Me, Ir(g, xt))),
              (L.vars.scrollY = j(Me)),
              L.invalidate().duration(se).play(0.01),
              ((Zr && L.vars.scrollY >= y) || M >= y - 1) &&
                ue.to({}, { onUpdate: ie, duration: se });
          }
          p && p(de);
        }),
      (e.onWheel = function () {
        L._ts && L.pause(), Rt() - G > 1e3 && ((S = 0), (G = Rt()));
      }),
      (e.onChange = function (de, ne, se, M, Me) {
        if (
          (wi !== S && re(),
          ne &&
            r &&
            E(N(M[2] === ne ? Q + (de.startX - de.x) : E() + ne - M[1])),
          se)
        ) {
          T.offset && R();
          var ct = Me[2] === se,
            Le = ct ? W + de.startY - de.y : T() + se - Me[1],
            Re = j(Le);
          ct && Le !== Re && (W += Re - Le), T(Re);
        }
        (se || ne) && qr();
      }),
      (e.onEnable = function () {
        Fs(g, r ? !1 : "x"),
          Ce.addEventListener("refresh", ie),
          Pt(Pe, "resize", ie),
          T.smooth &&
            ((T.target.style.scrollBehavior = "auto"),
            (T.smooth = E.smooth = !1)),
          H.enable();
      }),
      (e.onDisable = function () {
        Fs(g, !0),
          Et(Pe, "resize", ie),
          Ce.removeEventListener("refresh", ie),
          H.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (d = new gt(e)),
      (d.iOS = Zr),
      Zr && !T() && T(1),
      Zr && ue.ticker.add(Lr),
      (ce = d._dc),
      (L = ue.to(d, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: rl(T, T(), function () {
            return L.pause();
          }),
        },
        onUpdate: qr,
        onComplete: ce.vars.onComplete,
      })),
      d
    );
  };
Ce.sort = function (s) {
  if (Ft(s)) return Se.sort(s);
  var e = Pe.pageYOffset || 0;
  return (
    Ce.getAll().forEach(function (i) {
      return (i._sortY = i.trigger
        ? e + i.trigger.getBoundingClientRect().top
        : i.start + Pe.innerHeight);
    }),
    Se.sort(
      s ||
        function (i, r) {
          return (
            (i.vars.refreshPriority || 0) * -1e6 +
            (i.vars.containerAnimation ? 1e6 : i._sortY) -
            ((r.vars.containerAnimation ? 1e6 : r._sortY) +
              (r.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
Ce.observe = function (s) {
  return new gt(s);
};
Ce.normalizeScroll = function (s) {
  if (typeof s == "undefined") return Yt;
  if (s === !0 && Yt) return Yt.enable();
  if (s === !1) {
    Yt && Yt.kill(), (Yt = s);
    return;
  }
  var e = s instanceof gt ? s : nf(s);
  return Yt && Yt.target === e.target && Yt.kill(), xi(e.target) && (Yt = e), e;
};
Ce.core = {
  _getVelocityProp: Ys,
  _inputObserver: il,
  _scrollers: ke,
  _proxies: Rr,
  bridge: {
    ss: function () {
      Tr || Si("scrollStart"), (Tr = Rt());
    },
    ref: function () {
      return zt;
    },
  },
};
Wo() && ue.registerPlugin(Ce);
qe.exports.gsap.registerPlugin(Ce);
(function (s) {
  document.querySelectorAll(".native-scroll").forEach((b) => {
    let S;
    function A(H) {
      return H.scrollHeight > H.clientHeight;
    }
    b.addEventListener("mouseenter", () => {
      A(b) &&
        (lenis.stop(),
        clearTimeout(S),
        (S = setTimeout(() => {
          lenis.start();
        }, 2e3)));
    }),
      b.addEventListener("mouseleave", () => {
        clearTimeout(S), lenis.start();
      }),
      b.addEventListener("wheel", (H) => H.stopPropagation(), { passive: !1 }),
      b.addEventListener("touchmove", (H) => H.stopPropagation(), {
        passive: !1,
      }),
      b.addEventListener("touchstart", () => lenis.stop(), { passive: !0 }),
      b.addEventListener("touchend", () => lenis.start(), { passive: !0 }),
      b.addEventListener("scroll", () => {
        const H = b.scrollTop === 0,
          q = b.scrollTop + b.clientHeight >= b.scrollHeight;
        (H || q) && (clearTimeout(S), lenis.start());
      });
  }),
    new Wt(".hero-marquee-text .swiper", {
      modules: [Os],
      spaceBetween: 50,
      centeredSlides: !0,
      speed: 1e4,
      parallax: !0,
      loop: !0,
      slidesPerView: "auto",
      allowTouchMove: !1,
      autoplay: { delay: 0, disableOnInteraction: !1 },
    }),
    new Wt(".media-slider-box .swiper", {
      modules: [Os],
      spaceBetween: 16,
      centeredSlides: !0,
      speed: 6e3,
      parallax: !0,
      loop: !0,
      allowTouchMove: !1,
      slidesPerView: 2,
      breakpoints: { 751: { slidesPerView: 3.35, spaceBetween: 36 } },
      autoplay: { delay: 0, disableOnInteraction: !1 },
    }),
    new Wt(".teams-slider-box .swiper", {
      modules: [Os, io],
      spaceBetween: 30,
      centeredSlides: !0,
      speed: 1e3,
      parallax: !0,
      loop: !0,
      slidesPerView: 1.75,
      slideToClickedSlide: !0,
      navigation: {
        nextEl: ".teams-slider-box .swiper-nav.next",
        prevEl: ".teams-slider-box .swiper-nav.prev",
      },
      breakpoints: {
        751: {
          slidesPerView: "auto",
          spaceBetween: 0,
          centeredSlides: !1,
          slideToClickedSlide: !1,
        },
      },
    }),
    new Wt(".testimonial-slider-box .swiper", {
      modules: [io, Nc],
      spaceBetween: 0,
      parallax: !0,
      speed: 800,
      slidesPerView: 1,
      loop: !0,
      navigation: {
        nextEl: ".testimonial-slider-box .swiper-nav.next",
        prevEl: ".testimonial-slider-box .swiper-nav.prev",
      },
      breakpoints: { 751: { slidesPerView: 2, spaceBetween: 36 } },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (b, S) {
          return (
            '<span class="' +
            b +
            '"></span><span class="sep"> / </span><span class="' +
            S +
            '"></span>'
          );
        },
        formatFractionCurrent: function (b) {
          return b < 10 ? "0" + b : b;
        },
        formatFractionTotal: function (b) {
          return b < 10 ? "0" + b : b;
        },
      },
    }),
    s(".team-card-box .img-box img").on("click", function () {
      s(".team-card-box").removeClass("active"),
        s(".teams-slider-box .swiper-slide").removeClass("active"),
        s(this).parents(".team-card-box").addClass("active"),
        s(this).parents(".swiper-slide").addClass("active");
    }),
    s(".site-nav-box li, .site-footer ul li").each(function () {
      s(this).find("a").addClass("text-vert-flip");
      var b = s(this).find("a").text();
      s(this).find("a").wrapInner("<span class='title'></span>"),
        s(this).find("a .title").attr("data-title", b);
    }),
    s(".text-vert-flip").each(function () {
      s(this).find(".title").wrapInner("<span></span>");
    });
  const i = qe.exports.gsap.utils.toArray(".card-bg-img-box"),
    r = qe.exports.gsap.utils.toArray(".card-title-box"),
    o = qe.exports.gsap.utils.toArray(".card-img-box"),
    u = qe.exports.gsap.utils.toArray(".card-desc-box"),
    p = document.querySelector(".card-number-box .current");
  qe.exports.gsap.set(i[0], { clipPath: "inset(0% 0% 0% 0%)" }),
    qe.exports.gsap.set(r[0], { y: 0, top: 0 }),
    qe.exports.gsap.set(o[0], { clipPath: "inset(0% 0% 0% 0%)" }),
    qe.exports.gsap.set(u[0], { opacity: 1, zIndex: 2 });
  const d = i.length,
    y = qe.exports.gsap.timeline({
      defaults: { ease: "power1.inOut" },
      onUpdate: () => {
        const b = y.progress(),
          S = Math.round(b * (d - 1)) + 1;
        p.textContent = String(S).padStart(2, "0");
      },
    });
  for (let b = 0; b < d - 1; b++) {
    const S = b + 1,
      A = `slide${b}`;
    y.addLabel(A)
      .to(i[b], { clipPath: "inset(0% 0% 0%)", duration: 0.5 }, A)
      .to(i[S], { clipPath: "inset(0% 0% 0%)", duration: 0.5 }, A)
      .to(r[b], { y: "-=125%", opacity: 0, duration: 0.5 }, A)
      .to(r[S], { y: "-=125%", opacity: 1, duration: 0.5 }, A)
      .to(o[b], { clipPath: "inset(0% 0% 0%)", duration: 0.5 }, A)
      .to(o[S], { clipPath: "inset(0% 0% 0%)", duration: 0.5 }, A)
      .to(u[b], { opacity: 0, duration: 0.5, zIndex: 1 }, A)
      .to(u[S], { opacity: 1, duration: 0.5, zIndex: 2 }, A);
  }
  Ce.create({
    trigger: ".scrolling-card-inner",
    start: "top top",
    end: `+=${d * 1500}`,
    scrub: 1,
    pin: !0,
    animation: y,
  }),
    qe.exports.gsap.utils.toArray(".parallax-img-box img").forEach((b, S) => {
      qe.exports.gsap.set(b, { x: 0, force3D: !1 }),
        qe.exports.gsap.fromTo(
          b,
          { yPercent: -20, scale: 1.25, xPercent: -50 },
          {
            yPercent: 20,
            scale: 1.25,
            xPercent: -50,
            scrollTrigger: {
              trigger: b,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
    }),
    qe.exports.gsap.utils.toArray(".bg-backface-icon img").forEach((b, S) => {
      qe.exports.gsap.fromTo(
        b,
        { rotate: 0, scale: 0.5 },
        {
          rotate: 180,
          scale: 1,
          scrollTrigger: {
            trigger: b,
            start: "top 100%",
            end: "bottom 0%",
            scrub: 1,
          },
        }
      );
    }),
    Ce.matchMedia({
      "(min-width: 751px)": function () {
        qe.exports.gsap.utils.toArray(".scrolling-headline").forEach((N) => {
          N.querySelectorAll("span").forEach((re, R) => {
            const z = R === 1 ? 90 : -20,
              L = R === 1 ? 70 : 0;
            qe.exports.gsap.fromTo(
              re,
              { xPercent: z },
              {
                xPercent: L,
                scrollTrigger: {
                  trigger: N,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );
          });
        }),
          qe.exports.gsap.utils
            .toArray(".comp-text-hor-scroll")
            .forEach((N) => {
              N.querySelectorAll("span").forEach((re, R) => {
                const z = R === 1 ? 40 : -25,
                  L = R === 1 ? 20 : 5;
                qe.exports.gsap.fromTo(
                  re,
                  { xPercent: z },
                  {
                    xPercent: L,
                    scrollTrigger: {
                      trigger: N,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 1,
                    },
                  }
                );
              });
            }),
          qe.exports.gsap.utils.toArray(".info-card-box").forEach((N, j) => {
            qe.exports.gsap.fromTo(
              N,
              { yPercent: 30 },
              {
                yPercent: 0,
                stagger: 0.5,
                scrollTrigger: {
                  trigger: N,
                  start: "top 80%",
                  end: "bottom 60%",
                  scrub: 1,
                },
              }
            );
          }),
          qe.exports.gsap.utils.toArray(".overlap-text-box").forEach((N, j) => {
            qe.exports.gsap.fromTo(
              N,
              { bottom: "-40%" },
              {
                bottom: "-15%",
                scrollTrigger: {
                  trigger: N,
                  start: "top 90%",
                  end: "bottom 40%",
                  scrub: 1,
                },
              }
            );
          }),
          qe.exports.gsap.utils
            .toArray(".team-card-box .card-inner")
            .forEach((N, j) => {
              qe.exports.gsap.fromTo(
                N,
                { yPercent: 40 },
                {
                  yPercent: 0,
                  stagger: 0.75,
                  scrollTrigger: {
                    trigger: N,
                    start: "top 100%",
                    end: "bottom 0%",
                    scrub: 1,
                  },
                }
              );
            });
      },
    });
  const x = [
    "linear-gradient(0deg,black 0% 0%,transparent 0% 3.33%,black 3.33% 3.33%,transparent 3.33% 6.66%,black 6.66% 6.666666666666666%,transparent 6.666666666666666% 10%,black 10% 10%,transparent 10% 13.33%,black 13.33% 13.33%,transparent 13.33% 16.66%,black 16.66% 16.66%,transparent 16.66% 20%,black 20% 20.000000000000004%,transparent 20.000000000000004% 23.33%,black 23.33% 23.33%,transparent 23.33% 26.66%,black 26.66% 26.66%,transparent 26.66% 30%,black 30% 30%,transparent 30% 33.33%,black 33.33% 33.33%,transparent 33.33% 36.66%,black 36.66% 36.66%,transparent 36.66% 40%,black 40% 40%,transparent 40% 43.33%,black 43.33% 43.33%,transparent 43.33% 46.66%,black 46.66% 46.66%,transparent 46.66% 50%,black 50% 50%,transparent 50% 53.33%,black 53.33% 53.33%,transparent 53.33% 56.66%,black 56.66% 56.66%,transparent 56.66% 60%,black 60% 60%,transparent 60% 63.33%,black 63.33% 63.33%,transparent 63.33% 66.66%,black 66.66% 66.66%,transparent 66.66% 70%,black 70% 70%,transparent 70% 73.33%,black 73.33% 73.33%,transparent 73.33% 76.66%,black 76.66% 76.66%,transparent 76.66% 80%,black 80% 80%,transparent 80% 83.33%,black 83.33% 83.33%,transparent 83.33% 86.66%,black 86.66% 86.66%,transparent 86.66% 90%,black 90% 90%,transparent 90% 93.33%,black 93.33% 93.33%,transparent 93.33% 96.66%,black 96.66% 96.66%,transparent 96.66% 100%)",
    "linear-gradient(0deg, rgba(0,0,0,1) 0% 2.9044%, rgba(255,255,255,0) 2.9044% 3.33%, rgba(0,0,0,1) 3.33% 6.035%, rgba(255,255,255,0) 6.035% 6.66%, rgba(0,0,0,1) 6.66% 9.165%, rgba(255,255,255,0) 9.165% 10%, rgba(0,0,0,1) 10% 12.3044%, rgba(255,255,255,0) 12.3044% 13.33%, rgba(0,0,0,1) 13.33% 15.435%, rgba(255,255,255,0) 15.435% 16.66%, rgba(0,0,0,1) 16.66% 18.565%, rgba(255,255,255,0) 18.565% 20%, rgba(0,0,0,1) 20% 21.7044%, rgba(255,255,255,0) 21.7044% 23.33%, rgba(0,0,0,1) 23.33% 24.835%, rgba(255,255,255,0) 24.835% 26.66%, rgba(0,0,0,1) 26.66% 27.9728%, rgba(255,255,255,0) 27.9728% 30%, rgba(0,0,0,1) 30% 31.1239%, rgba(255,255,255,0) 31.1239% 33.33%, rgba(0,0,0,1) 33.33% 34.265%, rgba(255,255,255,0) 34.265% 36.66%, rgba(0,0,0,1) 36.66% 37.4061%, rgba(255,255,255,0) 37.4061% 40%, rgba(0,0,0,1) 40% 40.5572%, rgba(255,255,255,0) 40.5572% 43.33%, rgba(0,0,0,1) 43.33% 43.6983%, rgba(255,255,255,0) 43.6983% 46.66%, rgba(0,0,0,1) 46.66% 46.8394%, rgba(255,255,255,0) 46.8394% 50%, rgba(0,0,0,1) 50% 50%, rgba(255,255,255,0) 50% 53.33%, rgba(0,0,0,1) 53.33% 53.33%, rgba(255,255,255,0) 53.33% 56.66%, rgba(0,0,0,1) 56.66% 56.66%, rgba(255,255,255,0) 56.66% 60%, rgba(0,0,0,1) 60% 60%, rgba(255,255,255,0) 60% 63.33%, rgba(0,0,0,1) 63.33% 63.33%, rgba(255,255,255,0) 63.33% 66.66%, rgba(0,0,0,1) 66.66% 66.66%, rgba(255,255,255,0) 66.66% 70%, rgba(0,0,0,1) 70% 70%, rgba(255,255,255,0) 70% 73.33%, rgba(0,0,0,1) 73.33% 73.33%, rgba(255,255,255,0) 73.33% 76.66%, rgba(0,0,0,1) 76.66% 76.66%, rgba(255,255,255,0) 76.66% 80%, rgba(0,0,0,1) 80% 80%, rgba(255,255,255,0) 80% 83.33%, rgba(0,0,0,1) 83.33% 83.33%, rgba(255,255,255,0) 83.33% 86.66%, rgba(0,0,0,1) 86.66% 86.66%, rgba(255,255,255,0) 86.66% 90%, rgba(0,0,0,1) 90% 90%, rgba(255,255,255,0) 90% 93.33%, rgba(0,0,0,1) 93.33% 93.33%, rgba(255,255,255,0) 93.33% 96.66%, rgba(0,0,0,1) 96.66% 96.66%, rgba(255,255,255,0) 96.66% 100%)",
    "linear-gradient(0deg, rgba(0,0,0,1) 0% 2.4596%, rgba(255,255,255,0) 2.4596% 3.33%, rgba(0,0,0,1) 3.33% 5.593%, rgba(255,255,255,0) 5.593% 6.66%, rgba(0,0,0,1) 6.66% 8.723%, rgba(255,255,255,0) 8.723% 10%, rgba(0,0,0,1) 10% 11.8596%, rgba(255,255,255,0) 11.8596% 13.33%, rgba(0,0,0,1) 13.33% 14.993%, rgba(255,255,255,0) 14.993% 16.66%, rgba(0,0,0,1) 16.66% 18.123%, rgba(255,255,255,0) 18.123% 20%, rgba(0,0,0,1) 20% 21.2596%, rgba(255,255,255,0) 21.2596% 23.33%, rgba(0,0,0,1) 23.33% 24.393%, rgba(255,255,255,0) 24.393% 26.66%, rgba(0,0,0,1) 26.66% 27.5712%, rgba(255,255,255,0) 27.5712% 30%, rgba(0,0,0,1) 30% 30.7801%, rgba(255,255,255,0) 30.7801% 33.33%, rgba(0,0,0,1) 33.33% 33.979%, rgba(255,255,255,0) 33.979% 36.66%, rgba(0,0,0,1) 36.66% 37.1779%, rgba(255,255,255,0) 37.1779% 40%, rgba(0,0,0,1) 40% 40.3868%, rgba(255,255,255,0) 40.3868% 43.33%, rgba(0,0,0,1) 43.33% 43.5857%, rgba(255,255,255,0) 43.5857% 46.66%, rgba(0,0,0,1) 46.66% 46.7846%, rgba(255,255,255,0) 46.7846% 50%, rgba(0,0,0,1) 50% 50%, rgba(255,255,255,0) 50% 53.33%, rgba(0,0,0,1) 53.33% 53.33%, rgba(255,255,255,0) 53.33% 56.66%, rgba(0,0,0,1) 56.66% 56.66%, rgba(255,255,255,0) 56.66% 60%, rgba(0,0,0,1) 60% 60%, rgba(255,255,255,0) 60% 63.33%, rgba(0,0,0,1) 63.33% 63.33%, rgba(255,255,255,0) 63.33% 66.66%, rgba(0,0,0,1) 66.66% 66.66%, rgba(255,255,255,0) 66.66% 70%, rgba(0,0,0,1) 70% 70%, rgba(255,255,255,0) 70% 73.33%, rgba(0,0,0,1) 73.33% 73.33%, rgba(255,255,255,0) 73.33% 76.66%, rgba(0,0,0,1) 76.66% 76.66%, rgba(255,255,255,0) 76.66% 80%, rgba(0,0,0,1) 80% 80%, rgba(255,255,255,0) 80% 83.33%, rgba(0,0,0,1) 83.33% 83.33%, rgba(255,255,255,0) 83.33% 86.66%, rgba(0,0,0,1) 86.66% 86.66%, rgba(255,255,255,0) 86.66% 90%, rgba(0,0,0,1) 90% 90%, rgba(255,255,255,0) 90% 93.33%, rgba(0,0,0,1) 93.33% 93.33%, rgba(255,255,255,0) 93.33% 96.66%, rgba(0,0,0,1) 96.66% 96.66%, rgba(255,255,255,0) 96.66% 100%)",
    "linear-gradient(0deg, rgba(0,0,0,1) 0% 3.33%, rgba(255,255,255,0) 3.33% 3.33%, rgba(0,0,0,1) 3.33% 6.66%, rgba(255,255,255,0) 6.66% 6.66%, rgba(0,0,0,1) 6.66% 10%, rgba(255,255,255,0) 10% 10%, rgba(0,0,0,1) 10% 13.33%, rgba(255,255,255,0) 13.33% 13.33%, rgba(0,0,0,1) 13.33% 16.66%, rgba(255,255,255,0) 16.66% 16.66%, rgba(0,0,0,1) 16.66% 20%, rgba(255,255,255,0) 20% 20%, rgba(0,0,0,1) 20% 23.325%, rgba(255,255,255,0) 23.325% 23.33%, rgba(0,0,0,1) 23.33% 26.56%, rgba(255,255,255,0) 26.56% 26.66%, rgba(0,0,0,1) 26.66% 29.795%, rgba(255,255,255,0) 29.795% 30%, rgba(0,0,0,1) 30% 33.025%, rgba(255,255,255,0) 33.025% 33.33%, rgba(0,0,0,1) 33.33% 36.26%, rgba(255,255,255,0) 36.26% 36.66%, rgba(0,0,0,1) 36.66% 39.495%, rgba(255,255,255,0) 39.495% 40%, rgba(0,0,0,1) 40% 42.725%, rgba(255,255,255,0) 42.725% 43.33%, rgba(0,0,0,1) 43.33% 45.96%, rgba(255,255,255,0) 45.96% 46.66%, rgba(0,0,0,1) 46.66% 49.155%, rgba(255,255,255,0) 49.155% 50%, rgba(0,0,0,1) 50% 52.29%, rgba(255,255,255,0) 52.29% 53.33%, rgba(0,0,0,1) 53.33% 55.425%, rgba(255,255,255,0) 55.425% 56.66%, rgba(0,0,0,1) 56.66% 58.555%, rgba(255,255,255,0) 58.555% 60%, rgba(0,0,0,1) 60% 61.69%, rgba(255,255,255,0) 61.69% 63.33%, rgba(0,0,0,1) 63.33% 64.825%, rgba(255,255,255,0) 64.825% 66.66%, rgba(0,0,0,1) 66.66% 67.955%, rgba(255,255,255,0) 67.955% 70%, rgba(0,0,0,1) 70% 71.09%, rgba(255,255,255,0) 71.09% 73.33%, rgba(0,0,0,1) 73.33% 74.225%, rgba(255,255,255,0) 74.225% 76.66%, rgba(0,0,0,1) 76.66% 77.39%, rgba(255,255,255,0) 77.39% 80%, rgba(0,0,0,1) 80% 80.63%, rgba(255,255,255,0) 80.63% 83.33%, rgba(0,0,0,1) 83.33% 83.86%, rgba(255,255,255,0) 83.86% 86.66%, rgba(0,0,0,1) 86.66% 87.09%, rgba(255,255,255,0) 87.09% 90%, rgba(0,0,0,1) 90% 90.33%, rgba(255,255,255,0) 90.33% 93.33%, rgba(0,0,0,1) 93.33% 93.56%, rgba(255,255,255,0) 93.56% 96.66%, rgba(0,0,0,1) 96.66% 96.79%, rgba(255,255,255,0) 96.79% 100%)",
    "linear-gradient(0deg,rgba(0,0,0,1) 0% 3.33%, rgba(255,255,255,0) 3.33% 3.33%, rgba(0,0,0,1) 3.33% 6.66%, rgba(255,255,255,0) 6.66% 6.66%, rgba(0,0,0,1) 6.66% 10%, rgba(255,255,255,0) 10% 10%, rgba(0,0,0,1) 10% 13.33%, rgba(255,255,255,0) 13.33% 13.33%, rgba(0,0,0,1) 13.33% 16.66%, rgba(255,255,255,0) 16.66% 16.66%, rgba(0,0,0,1) 16.66% 20%, rgba(255,255,255,0) 20% 20%, rgba(0,0,0,1) 20% 23.3288%, rgba(255,255,255,0) 23.3288% 23.33%, rgba(0,0,0,1) 23.33% 26.6356%, rgba(255,255,255,0) 26.6356% 26.66%, rgba(0,0,0,1) 26.66% 29.9499%, rgba(255,255,255,0) 29.9499% 30%, rgba(0,0,0,1) 30% 33.2554%, rgba(255,255,255,0) 33.2554% 33.33%, rgba(0,0,0,1) 33.33% 36.5622%, rgba(255,255,255,0) 36.5622% 36.66%, rgba(0,0,0,1) 36.66% 39.8766%, rgba(255,255,255,0) 39.8766% 40%, rgba(0,0,0,1) 40% 43.1821%, rgba(255,255,255,0) 43.1821% 43.33%, rgba(0,0,0,1) 43.33% 46.4889%, rgba(255,255,255,0) 46.4889% 46.66%, rgba(0,0,0,1) 46.66% 49.733%, rgba(255,255,255,0) 49.733% 50%, rgba(0,0,0,1) 50% 52.8718%, rgba(255,255,255,0) 52.8718% 53.33%, rgba(0,0,0,1) 53.33% 56.003%, rgba(255,255,255,0) 56.003% 56.66%, rgba(0,0,0,1) 56.66% 59.133%, rgba(255,255,255,0) 59.133% 60%, rgba(0,0,0,1) 60% 62.2718%, rgba(255,255,255,0) 62.2718% 63.33%, rgba(0,0,0,1) 63.33% 65.403%, rgba(255,255,255,0) 65.403% 66.66%, rgba(0,0,0,1) 66.66% 68.533%, rgba(255,255,255,0) 68.533% 70%, rgba(0,0,0,1) 70% 71.6718%, rgba(255,255,255,0) 71.6718% 73.33%, rgba(0,0,0,1) 73.33% 74.803%, rgba(255,255,255,0) 74.803% 76.66%, rgba(0,0,0,1) 76.66% 77.9416%, rgba(255,255,255,0) 77.9416% 80%, rgba(0,0,0,1) 80% 81.106%, rgba(255,255,255,0) 81.106% 83.33%, rgba(0,0,0,1) 83.33% 84.2604%, rgba(255,255,255,0) 84.2604% 86.66%, rgba(0,0,0,1) 86.66% 87.4149%, rgba(255,255,255,0) 87.4149% 90%, rgba(0,0,0,1) 90% 90.5793%, rgba(255,255,255,0) 90.5793% 93.33%, rgba(0,0,0,1) 93.33% 93.7338%, rgba(255,255,255,0) 93.7338% 96.66%, rgba(0,0,0,1) 96.66% 96.8882%, rgba(255,255,255,0) 96.8882% 100%)",
    "linear-gradient(0deg, black 0% 3.33%, transparent 3.33% 3.33%, black 3.33% 6.66%, transparent 6.66% 6.66%, black 6.66% 10%, transparent 10% 10%, black 10% 13.33%, transparent 13.33% 13.33%, black 13.33% 16.66%, transparent 16.66% 16.66%, black 16.66% 20%, transparent 20% 20%, black 20% 23.33%, transparent 23.33% 23.33%, black 23.33% 26.66%, transparent 26.66% 26.66%, black 26.66% 30%, transparent 30% 30%, black 30% 33.33%, transparent 33.33% 33.33%, black 33.33% 36.66%, transparent 36.66% 36.66%, black 36.66% 40%, transparent 40% 40%, black 40% 43.33%, transparent 43.33% 43.33%, black 43.33% 46.66%, transparent 46.66% 46.66%, black 46.66% 50%, transparent 50% 50%, black 50% 53.33%, transparent 53.33% 53.33%, black 53.33% 56.66%, transparent 56.66% 56.66%, black 56.66% 60%, transparent 60% 60%, black 60% 63.33%, transparent 63.33% 63.33%, black 63.33% 66.66%, transparent 66.66% 66.66%, black 66.66% 70%, transparent 70% 70%, black 70% 73.33%, transparent 73.33% 73.33%, black 73.33% 76.66%, transparent 76.66% 76.66%, black 76.66% 80%, transparent 80% 80%, black 80% 83.33%, transparent 83.33% 83.33%, black 83.33% 86.66%, transparent 86.66% 86.66%, black 86.66% 90%, transparent 90% 90%, black 90% 93.33%, transparent 93.33% 93.33%, black 93.33% 96.66%, transparent 96.66% 96.66%, black 96.66% 100%, transparent 100% 100%)",
  ];
  let P = qe.exports.gsap.timeline({
    scrollTrigger: {
      trigger: ".site-hero-sec .hero-img-box",
      start: "top top",
      end: "bottom 50%",
      scrub: !0,
      pin: !1,
      id: "bg-sync",
    },
    ease: "power2.inOut",
  });
  P.to(".hero-stripe-bg", { "--mask2": x[0], duration: 1 }),
    P.to(".hero-stripe-bg", { "--mask2": x[1], duration: 1 }),
    P.to(".hero-stripe-bg", { "--mask2": x[2], duration: 1 }),
    P.to(".hero-stripe-bg", { "--mask2": x[3], duration: 1 }),
    P.to(".hero-stripe-bg", { "--mask2": x[4], duration: 1 }),
    P.to(".hero-stripe-bg", { "--mask2": x[5], duration: 1 }),
    document.querySelectorAll(".cta-btn").forEach((b) => {
      const S = b.querySelector(".text"),
        A = S.textContent;
      (S.textContent = ""),
        [...A].forEach((H, q) => {
          const N = document.createElement("span");
          (N.innerHTML = H === " " ? "&nbsp;" : H),
            N.style.setProperty("--delay", `${q * 0.05}s`),
            (N.style.display = "inline-block"),
            S.appendChild(N);
        }),
        b.addEventListener("mouseenter", () => {
          b.querySelectorAll(".text span").forEach((H) => {
            (H.style.animation = "none"),
              H.offsetHeight,
              (H.style.animation = "wave 0.6s ease var(--delay) forwards");
          });
        });
    }),
    s(".faq-sec .faq-wrapper:first").addClass("active"),
    s(".faq-sec .faq-wrapper:first .faq-content").slideDown(),
    s(".faq-sec .faq-head").click(function () {
      s(this)
        .siblings()
        .slideToggle(1e3)
        .parent()
        .siblings()
        .find(".faq-content")
        .slideUp(1e3),
        s(this)
          .parent(".faq-wrapper")
          .toggleClass("active")
          .siblings()
          .removeClass("active");
    });
  var T = -1;
  s(".service-img-box:first").addClass("active show"),
    s(".service-listing li").on("mouseenter", function () {
      var b = s(this),
        S = b.index(),
        A = s(".service-img-box");
      s(".service-listing li").removeClass("top bottom"),
        A.removeClass("show active"),
        S > T
          ? (b.addClass("bottom"), b.prevAll().addClass("top"))
          : S < T
          ? (b.addClass("top"), b.nextAll().addClass("bottom"))
          : (b.addClass("bottom"), b.prevAll().addClass("top")),
        A.each(function (H) {
          H <= S && s(this).addClass("show");
        }),
        A.eq(S).addClass("active"),
        (T = S);
    }),
    s(".open-team-popup").on("click", function () {
      s(".drawer-popup-box").addClass("popupOpened"),
        s("body").addClass("darawerActive"),
        s("header, footer, section").css({
          transform: "translateX(calc(-480vw / var(--context)))",
          transition: "1s ease",
        });
    }),
    s(".close-team-popup, .drawer-popup-box .popup-overlay").on(
      "click",
      function () {
        s(".drawer-popup-box").removeClass("popupOpened"),
          s("body").removeClass("darawerActive"),
          s("header, footer, section").css({
            transform: "translateX(0%)",
            transition: "1s ease",
          });
      }
    ),
    s(".site-hero-sec .scroll-down").on("click", function () {
      var b = s(this).parents("section").next("section");
      console.log(b),
        s("html, body").animate({ scrollTop: b.offset().top }, 700);
    }),
    s(".menu-toggle-btn").on("click", function () {
      s(this).toggleClass("toggled"),
        s(".site-nav-box").toggleClass("menuActive"),
        s(".site-header").toggleClass("mobileMenuActive");
    });
  const E = document.querySelector(".bottom-hero-img");
  if (E) {
    let b = E.previousElementSibling;
    for (; b && !b.hasAttribute("data-bg"); ) b = b.previousElementSibling;
    if (b && b.hasAttribute("data-bg")) {
      const S = b.getAttribute("data-bg");
      E.setAttribute("data-bg", S);
    }
  }
  s(window).on("load", function () {
    s(".site-loader-box").addClass("hide");
  }),
    jQuery(window).on("load scroll", function () {
      s(this).scrollTop() > 100
        ? s("header.site-header").addClass("sticky")
        : s("header.site-header").removeClass("sticky");
    });
  var F = s(window),
    X = s("body"),
    G = s("section");
  F.on("scroll resize load", function () {
    var b = F.scrollTop() + F.height() / 1.5;
    G.each(function () {
      var S = s(this);
      if (S.position().top <= b && S.position().top + S.height() > b) {
        var A = S.data("bg");
        return (
          A
            ? X.css("background-color", A).addClass("hide-bg-image")
            : X.css("background-color", "").removeClass("hide-bg-image"),
          !1
        );
      }
    });
  }).trigger("scroll");
})(jQuery);
const sf = new IntersectionObserver(
    (s) => {
      s.forEach((e) => {
        e.isIntersecting
          ? e.target.classList.add("in-viewport")
          : e.target.classList.remove("in-viewport");
      });
    },
    { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
  ),
  af = [".el-slide-up", ".el-fade-up", ".el-fade-right"],
  of = document.querySelectorAll(af.join(","));
of.forEach((s) => sf.observe(s));
