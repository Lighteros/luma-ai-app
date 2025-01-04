(function (w, de) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = w.document
        ? de(w, !0)
        : function (pe) {
            if (!pe.document)
              throw new Error("jQuery requires a window with a document");
            return de(pe);
          })
    : de(w);
})("undefined" != typeof window ? window : this, function (w, de) {
  "use strict";
  var pe = [],
    I = Object.getPrototypeOf,
    m = pe.slice,
    Te = pe.flat
      ? function (n) {
          return pe.flat.call(n);
        }
      : function (n) {
          return pe.concat.apply([], n);
        },
    ae = pe.push,
    V = pe.indexOf,
    te = {},
    Lt = te.toString,
    W = te.hasOwnProperty,
    bt = W.toString,
    yn = bt.call(Object),
    ne = {},
    ie = function (n) {
      return (
        "function" == typeof n &&
        "number" != typeof n.nodeType &&
        "function" != typeof n.item
      );
    },
    Ae = function (n) {
      return null != n && n === n.window;
    },
    ee = w.document,
    Kt = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function Zt(n, i, u) {
    var e,
      t,
      r = (u = u || ee).createElement("script");
    if (((r.text = n), i))
      for (e in Kt)
        (t = i[e] || (i.getAttribute && i.getAttribute(e))) &&
          r.setAttribute(e, t);
    u.head.appendChild(r).parentNode.removeChild(r);
  }
  function _t(n) {
    return null == n
      ? n + ""
      : "object" == typeof n || "function" == typeof n
      ? te[Lt.call(n)] || "object"
      : typeof n;
  }
  var Xe = /HTML$/i,
    c = function (n, i) {
      return new c.fn.init(n, i);
    };
  function Ge(n) {
    var i = !!n && "length" in n && n.length,
      u = _t(n);
    return (
      !ie(n) &&
      !Ae(n) &&
      ("array" === u ||
        0 === i ||
        ("number" == typeof i && 0 < i && i - 1 in n))
    );
  }
  function Ee(n, i) {
    return n.nodeName && n.nodeName.toLowerCase() === i.toLowerCase();
  }
  (c.fn = c.prototype =
    {
      jquery: "3.7.1",
      constructor: c,
      length: 0,
      toArray: function () {
        return m.call(this);
      },
      get: function (n) {
        return null == n
          ? m.call(this)
          : n < 0
          ? this[n + this.length]
          : this[n];
      },
      pushStack: function (n) {
        var i = c.merge(this.constructor(), n);
        return (i.prevObject = this), i;
      },
      each: function (n) {
        return c.each(this, n);
      },
      map: function (n) {
        return this.pushStack(
          c.map(this, function (i, u) {
            return n.call(i, u, i);
          })
        );
      },
      slice: function () {
        return this.pushStack(m.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          c.grep(this, function (n, i) {
            return (i + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          c.grep(this, function (n, i) {
            return i % 2;
          })
        );
      },
      eq: function (n) {
        var i = this.length,
          u = +n + (n < 0 ? i : 0);
        return this.pushStack(0 <= u && u < i ? [this[u]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ae,
      sort: pe.sort,
      splice: pe.splice,
    }),
    (c.extend = c.fn.extend =
      function () {
        var n,
          i,
          u,
          e,
          t,
          r,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          f = !1;
        for (
          "boolean" == typeof a && ((f = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || ie(a) || (a = {}),
            s === l && ((a = this), s--);
          s < l;
          s++
        )
          if (null != (n = arguments[s]))
            for (i in n)
              (e = n[i]),
                "__proto__" !== i &&
                  a !== e &&
                  (f && e && (c.isPlainObject(e) || (t = Array.isArray(e)))
                    ? ((u = a[i]),
                      (r =
                        t && !Array.isArray(u)
                          ? []
                          : t || c.isPlainObject(u)
                          ? u
                          : {}),
                      (t = !1),
                      (a[i] = c.extend(f, r, e)))
                    : void 0 !== e && (a[i] = e));
        return a;
      }),
    c.extend({
      expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (n) {
        throw new Error(n);
      },
      noop: function () {},
      isPlainObject: function (n) {
        var i, u;
        return !(
          !n ||
          "[object Object]" !== Lt.call(n) ||
          ((i = I(n)) &&
            ("function" !=
              typeof (u = W.call(i, "constructor") && i.constructor) ||
              bt.call(u) !== yn))
        );
      },
      isEmptyObject: function (n) {
        var i;
        for (i in n) return !1;
        return !0;
      },
      globalEval: function (n, i, u) {
        Zt(n, { nonce: i && i.nonce }, u);
      },
      each: function (n, i) {
        var u,
          e = 0;
        if (Ge(n))
          for (u = n.length; e < u && !1 !== i.call(n[e], e, n[e]); e++);
        else for (e in n) if (!1 === i.call(n[e], e, n[e])) break;
        return n;
      },
      text: function (n) {
        var i,
          u = "",
          e = 0,
          t = n.nodeType;
        if (!t) for (; (i = n[e++]); ) u += c.text(i);
        return 1 === t || 11 === t
          ? n.textContent
          : 9 === t
          ? n.documentElement.textContent
          : 3 === t || 4 === t
          ? n.nodeValue
          : u;
      },
      makeArray: function (n, i) {
        var u = i || [];
        return (
          null != n &&
            (Ge(Object(n))
              ? c.merge(u, "string" == typeof n ? [n] : n)
              : ae.call(u, n)),
          u
        );
      },
      inArray: function (n, i, u) {
        return null == i ? -1 : V.call(i, n, u);
      },
      isXMLDoc: function (n) {
        var u = n && (n.ownerDocument || n).documentElement;
        return !Xe.test((n && n.namespaceURI) || (u && u.nodeName) || "HTML");
      },
      merge: function (n, i) {
        for (var u = +i.length, e = 0, t = n.length; e < u; e++) n[t++] = i[e];
        return (n.length = t), n;
      },
      grep: function (n, i, u) {
        for (var e = [], t = 0, r = n.length, a = !u; t < r; t++)
          !i(n[t], t) !== a && e.push(n[t]);
        return e;
      },
      map: function (n, i, u) {
        var e,
          t,
          r = 0,
          a = [];
        if (Ge(n))
          for (e = n.length; r < e; r++)
            null != (t = i(n[r], r, u)) && a.push(t);
        else for (r in n) null != (t = i(n[r], r, u)) && a.push(t);
        return Te(a);
      },
      guid: 1,
      support: ne,
    }),
    "function" == typeof Symbol &&
      (c.fn[Symbol.iterator] = pe[Symbol.iterator]),
    c.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (n, i) {
        te["[object " + i + "]"] = i.toLowerCase();
      }
    );
  var en = pe.pop,
    tn = pe.sort,
    wt = pe.splice,
    ce = "[\\x20\\t\\r\\n\\f]",
    Mt = new RegExp("^" + ce + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ce + "+$", "g");
  c.contains = function (n, i) {
    var u = i && i.parentNode;
    return (
      n === u ||
      !(
        !u ||
        1 !== u.nodeType ||
        !(n.contains
          ? n.contains(u)
          : n.compareDocumentPosition && 16 & n.compareDocumentPosition(u))
      )
    );
  };
  var qt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function Ct(n, i) {
    return i
      ? "\0" === n
        ? "\ufffd"
        : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " "
      : "\\" + n;
  }
  c.escapeSelector = function (n) {
    return (n + "").replace(qt, Ct);
  };
  var rt = ee,
    Le = ae;
  !(function () {
    var n,
      i,
      u,
      e,
      t,
      r,
      a,
      s,
      l,
      f,
      d = Le,
      v = c.expando,
      y = 0,
      _ = 0,
      T = ye(),
      S = ye(),
      A = ye(),
      k = ye(),
      R = function (x, E) {
        return x === E && (t = !0), 0;
      },
      q =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ce +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      H =
        "\\[" +
        ce +
        "*(" +
        K +
        ")(?:" +
        ce +
        "*([*^$|!~]?=)" +
        ce +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        K +
        "))|)" +
        ce +
        "*\\]",
      le =
        ":(" +
        K +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        H +
        ")*)|.*)\\)|)",
      Z = new RegExp(ce + "+", "g"),
      ue = new RegExp("^" + ce + "*," + ce + "*"),
      P = new RegExp("^" + ce + "*([>+~]|" + ce + ")" + ce + "*"),
      ve = new RegExp(ce + "|>"),
      Ve = new RegExp(le),
      Pe = new RegExp("^" + K + "$"),
      ke = {
        ID: new RegExp("^#(" + K + ")"),
        CLASS: new RegExp("^\\.(" + K + ")"),
        TAG: new RegExp("^(" + K + "|[*])"),
        ATTR: new RegExp("^" + H),
        PSEUDO: new RegExp("^" + le),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ce +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ce +
            "*(?:([+-]|)" +
            ce +
            "*(\\d+)|))" +
            ce +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + q + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ce +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ce +
            "*((?:-\\d)?\\d*)" +
            ce +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Ne = /^(?:input|select|textarea|button)$/i,
      Me = /^h\d$/i,
      Ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      we = /[+~]/,
      De = new RegExp(
        "\\\\[\\da-fA-F]{1,6}" + ce + "?|\\\\([^\\r\\n\\f])",
        "g"
      ),
      He = function (x, E) {
        var L = "0x" + x.slice(1) - 65536;
        return (
          E ||
          (L < 0
            ? String.fromCharCode(L + 65536)
            : String.fromCharCode((L >> 10) | 55296, (1023 & L) | 56320))
        );
      },
      gt = function () {
        Re();
      },
      me = yr(
        function (x) {
          return !0 === x.disabled && Ee(x, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      d.apply((pe = m.call(rt.childNodes)), rt.childNodes);
    } catch (x) {
      d = {
        apply: function (E, L) {
          Le.apply(E, m.call(L));
        },
        call: function (E) {
          Le.apply(E, m.call(arguments, 1));
        },
      };
    }
    function X(x, E, L, j) {
      var O,
        J,
        G,
        $,
        Q,
        Ie,
        fe,
        he = E && E.ownerDocument,
        Se = E ? E.nodeType : 9;
      if (
        ((L = L || []),
        "string" != typeof x || !x || (1 !== Se && 9 !== Se && 11 !== Se))
      )
        return L;
      if (!j && (Re(E), (E = E || r), s)) {
        if (11 !== Se && (Q = Ce.exec(x)))
          if ((O = Q[1])) {
            if (9 === Se) {
              if (!(G = E.getElementById(O))) return L;
              if (G.id === O) return d.call(L, G), L;
            } else if (
              he &&
              (G = he.getElementById(O)) &&
              X.contains(E, G) &&
              G.id === O
            )
              return d.call(L, G), L;
          } else {
            if (Q[2]) return d.apply(L, E.getElementsByTagName(x)), L;
            if ((O = Q[3]) && E.getElementsByClassName)
              return d.apply(L, E.getElementsByClassName(O)), L;
          }
        if (!(k[x + " "] || (l && l.test(x)))) {
          if (((fe = x), (he = E), 1 === Se && (ve.test(x) || P.test(x)))) {
            for (
              ((he = (we.test(x) && Fe(E.parentNode)) || E) == E && ne.scope) ||
                (($ = E.getAttribute("id"))
                  ? ($ = c.escapeSelector($))
                  : E.setAttribute("id", ($ = v))),
                J = (Ie = ir(x)).length;
              J--;

            )
              Ie[J] = ($ ? "#" + $ : ":scope") + " " + gr(Ie[J]);
            fe = Ie.join(",");
          }
          try {
            return d.apply(L, he.querySelectorAll(fe)), L;
          } catch (se) {
            k(x, !0);
          } finally {
            $ === v && E.removeAttribute("id");
          }
        }
      }
      return Ir(x.replace(Mt, "$1"), E, L, j);
    }
    function ye() {
      var x = [];
      return function E(L, j) {
        return (
          x.push(L + " ") > i.cacheLength && delete E[x.shift()],
          (E[L + " "] = j)
        );
      };
    }
    function be(x) {
      return (x[v] = !0), x;
    }
    function ge(x) {
      var E = r.createElement("fieldset");
      try {
        return !!x(E);
      } catch (L) {
        return !1;
      } finally {
        E.parentNode && E.parentNode.removeChild(E), (E = null);
      }
    }
    function ct(x) {
      return function (E) {
        return Ee(E, "input") && E.type === x;
      };
    }
    function Nt(x) {
      return function (E) {
        return (Ee(E, "input") || Ee(E, "button")) && E.type === x;
      };
    }
    function Sn(x) {
      return function (E) {
        return "form" in E
          ? E.parentNode && !1 === E.disabled
            ? "label" in E
              ? "label" in E.parentNode
                ? E.parentNode.disabled === x
                : E.disabled === x
              : E.isDisabled === x || (E.isDisabled !== !x && me(E) === x)
            : E.disabled === x
          : "label" in E && E.disabled === x;
      };
    }
    function Rt(x) {
      return be(function (E) {
        return (
          (E = +E),
          be(function (L, j) {
            for (var O, J = x([], L.length, E), G = J.length; G--; )
              L[(O = J[G])] && (L[O] = !(j[O] = L[O]));
          })
        );
      });
    }
    function Fe(x) {
      return x && void 0 !== x.getElementsByTagName && x;
    }
    function Re(x) {
      var E,
        L = x ? x.ownerDocument || x : rt;
      return (
        L != r &&
          9 === L.nodeType &&
          L.documentElement &&
          ((a = (r = L).documentElement),
          (s = !c.isXMLDoc(r)),
          (f = a.matches || a.webkitMatchesSelector || a.msMatchesSelector),
          a.msMatchesSelector &&
            rt != r &&
            (E = r.defaultView) &&
            E.top !== E &&
            E.addEventListener("unload", gt),
          (ne.getById = ge(function (j) {
            return (
              (a.appendChild(j).id = c.expando),
              !r.getElementsByName || !r.getElementsByName(c.expando).length
            );
          })),
          (ne.disconnectedMatch = ge(function (j) {
            return f.call(j, "*");
          })),
          (ne.scope = ge(function () {
            return r.querySelectorAll(":scope");
          })),
          (ne.cssHas = ge(function () {
            try {
              return r.querySelector(":has(*,:jqfake)"), !1;
            } catch (j) {
              return !0;
            }
          })),
          ne.getById
            ? ((i.filter.ID = function (j) {
                var O = j.replace(De, He);
                return function (J) {
                  return J.getAttribute("id") === O;
                };
              }),
              (i.find.ID = function (j, O) {
                if (void 0 !== O.getElementById && s) {
                  var J = O.getElementById(j);
                  return J ? [J] : [];
                }
              }))
            : ((i.filter.ID = function (j) {
                var O = j.replace(De, He);
                return function (J) {
                  var G =
                    void 0 !== J.getAttributeNode && J.getAttributeNode("id");
                  return G && G.value === O;
                };
              }),
              (i.find.ID = function (j, O) {
                if (void 0 !== O.getElementById && s) {
                  var J,
                    G,
                    $,
                    Q = O.getElementById(j);
                  if (Q) {
                    if ((J = Q.getAttributeNode("id")) && J.value === j)
                      return [Q];
                    for ($ = O.getElementsByName(j), G = 0; (Q = $[G++]); )
                      if ((J = Q.getAttributeNode("id")) && J.value === j)
                        return [Q];
                  }
                  return [];
                }
              })),
          (i.find.TAG = function (j, O) {
            return void 0 !== O.getElementsByTagName
              ? O.getElementsByTagName(j)
              : O.querySelectorAll(j);
          }),
          (i.find.CLASS = function (j, O) {
            if (void 0 !== O.getElementsByClassName && s)
              return O.getElementsByClassName(j);
          }),
          (l = []),
          ge(function (j) {
            var O;
            (a.appendChild(j).innerHTML =
              "<a id='" +
              v +
              "' href='' disabled='disabled'></a><select id='" +
              v +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              j.querySelectorAll("[selected]").length ||
                l.push("\\[" + ce + "*(?:value|" + q + ")"),
              j.querySelectorAll("[id~=" + v + "-]").length || l.push("~="),
              j.querySelectorAll("a#" + v + "+*").length || l.push(".#.+[+~]"),
              j.querySelectorAll(":checked").length || l.push(":checked"),
              (O = r.createElement("input")).setAttribute("type", "hidden"),
              j.appendChild(O).setAttribute("name", "D"),
              (a.appendChild(j).disabled = !0),
              2 !== j.querySelectorAll(":disabled").length &&
                l.push(":enabled", ":disabled"),
              (O = r.createElement("input")).setAttribute("name", ""),
              j.appendChild(O),
              j.querySelectorAll("[name='']").length ||
                l.push("\\[" + ce + "*name" + ce + "*=" + ce + "*(?:''|\"\")");
          }),
          ne.cssHas || l.push(":has"),
          (l = l.length && new RegExp(l.join("|"))),
          (R = function (j, O) {
            if (j === O) return (t = !0), 0;
            var J = !j.compareDocumentPosition - !O.compareDocumentPosition;
            return (
              J ||
              (1 &
                (J =
                  (j.ownerDocument || j) == (O.ownerDocument || O)
                    ? j.compareDocumentPosition(O)
                    : 1) ||
              (!ne.sortDetached && O.compareDocumentPosition(j) === J)
                ? j === r || (j.ownerDocument == rt && X.contains(rt, j))
                  ? -1
                  : O === r || (O.ownerDocument == rt && X.contains(rt, O))
                  ? 1
                  : e
                  ? V.call(e, j) - V.call(e, O)
                  : 0
                : 4 & J
                ? -1
                : 1)
            );
          })),
        r
      );
    }
    for (n in ((X.matches = function (x, E) {
      return X(x, null, null, E);
    }),
    (X.matchesSelector = function (x, E) {
      if ((Re(x), s && !k[E + " "] && (!l || !l.test(E))))
        try {
          var L = f.call(x, E);
          if (
            L ||
            ne.disconnectedMatch ||
            (x.document && 11 !== x.document.nodeType)
          )
            return L;
        } catch (j) {
          k(E, !0);
        }
      return 0 < X(E, r, null, [x]).length;
    }),
    (X.contains = function (x, E) {
      return (x.ownerDocument || x) != r && Re(x), c.contains(x, E);
    }),
    (X.attr = function (x, E) {
      (x.ownerDocument || x) != r && Re(x);
      var L = i.attrHandle[E.toLowerCase()],
        j = L && W.call(i.attrHandle, E.toLowerCase()) ? L(x, E, !s) : void 0;
      return void 0 !== j ? j : x.getAttribute(E);
    }),
    (X.error = function (x) {
      throw new Error("Syntax error, unrecognized expression: " + x);
    }),
    (c.uniqueSort = function (x) {
      var E,
        L = [],
        j = 0,
        O = 0;
      if (
        ((t = !ne.sortStable),
        (e = !ne.sortStable && m.call(x, 0)),
        tn.call(x, R),
        t)
      ) {
        for (; (E = x[O++]); ) E === x[O] && (j = L.push(O));
        for (; j--; ) wt.call(x, L[j], 1);
      }
      return (e = null), x;
    }),
    (c.fn.uniqueSort = function () {
      return this.pushStack(c.uniqueSort(m.apply(this)));
    }),
    ((i = c.expr =
      {
        cacheLength: 50,
        createPseudo: be,
        match: ke,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (x) {
            return (
              (x[1] = x[1].replace(De, He)),
              (x[3] = (x[3] || x[4] || x[5] || "").replace(De, He)),
              "~=" === x[2] && (x[3] = " " + x[3] + " "),
              x.slice(0, 4)
            );
          },
          CHILD: function (x) {
            return (
              (x[1] = x[1].toLowerCase()),
              "nth" === x[1].slice(0, 3)
                ? (x[3] || X.error(x[0]),
                  (x[4] = +(x[4]
                    ? x[5] + (x[6] || 1)
                    : 2 * ("even" === x[3] || "odd" === x[3]))),
                  (x[5] = +(x[7] + x[8] || "odd" === x[3])))
                : x[3] && X.error(x[0]),
              x
            );
          },
          PSEUDO: function (x) {
            var E,
              L = !x[6] && x[2];
            return ke.CHILD.test(x[0])
              ? null
              : (x[3]
                  ? (x[2] = x[4] || x[5] || "")
                  : L &&
                    Ve.test(L) &&
                    (E = ir(L, !0)) &&
                    (E = L.indexOf(")", L.length - E) - L.length) &&
                    ((x[0] = x[0].slice(0, E)), (x[2] = L.slice(0, E))),
                x.slice(0, 3));
          },
        },
        filter: {
          TAG: function (x) {
            var E = x.replace(De, He).toLowerCase();
            return "*" === x
              ? function () {
                  return !0;
                }
              : function (L) {
                  return Ee(L, E);
                };
          },
          CLASS: function (x) {
            var E = T[x + " "];
            return (
              E ||
              ((E = new RegExp("(^|" + ce + ")" + x + "(" + ce + "|$)")) &&
                T(x, function (L) {
                  return E.test(
                    ("string" == typeof L.className && L.className) ||
                      (void 0 !== L.getAttribute && L.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (x, E, L) {
            return function (j) {
              var O = X.attr(j, x);
              return null == O
                ? "!=" === E
                : !E ||
                    ((O += ""),
                    "=" === E
                      ? O === L
                      : "!=" === E
                      ? O !== L
                      : "^=" === E
                      ? L && 0 === O.indexOf(L)
                      : "*=" === E
                      ? L && -1 < O.indexOf(L)
                      : "$=" === E
                      ? L && O.slice(-L.length) === L
                      : "~=" === E
                      ? -1 < (" " + O.replace(Z, " ") + " ").indexOf(L)
                      : "|=" === E &&
                        (O === L || O.slice(0, L.length + 1) === L + "-"));
            };
          },
          CHILD: function (x, E, L, j, O) {
            var J = "nth" !== x.slice(0, 3),
              G = "last" !== x.slice(-4),
              $ = "of-type" === E;
            return 1 === j && 0 === O
              ? function (Q) {
                  return !!Q.parentNode;
                }
              : function (Q, Ie, fe) {
                  var he,
                    Se,
                    se,
                    nt,
                    yt,
                    st = J !== G ? "nextSibling" : "previousSibling",
                    It = Q.parentNode,
                    Ht = $ && Q.nodeName.toLowerCase(),
                    Jt = !fe && !$,
                    We = !1;
                  if (It) {
                    if (J) {
                      for (; st; ) {
                        for (se = Q; (se = se[st]); )
                          if ($ ? Ee(se, Ht) : 1 === se.nodeType) return !1;
                        yt = st = "only" === x && !yt && "nextSibling";
                      }
                      return !0;
                    }
                    if (((yt = [G ? It.firstChild : It.lastChild]), G && Jt)) {
                      for (
                        We =
                          (nt =
                            (he = (Se = It[v] || (It[v] = {}))[x] || [])[0] ===
                              y && he[1]) && he[2],
                          se = nt && It.childNodes[nt];
                        (se =
                          (++nt && se && se[st]) || (We = nt = 0) || yt.pop());

                      )
                        if (1 === se.nodeType && ++We && se === Q) {
                          Se[x] = [y, nt, We];
                          break;
                        }
                    } else if (
                      (Jt &&
                        (We = nt =
                          (he = (Se = Q[v] || (Q[v] = {}))[x] || [])[0] === y &&
                          he[1]),
                      !1 === We)
                    )
                      for (
                        ;
                        (se =
                          (++nt && se && se[st]) ||
                          (We = nt = 0) ||
                          yt.pop()) &&
                        (!($ ? Ee(se, Ht) : 1 === se.nodeType) ||
                          !++We ||
                          (Jt && ((Se = se[v] || (se[v] = {}))[x] = [y, We]),
                          se !== Q));

                      );
                    return (We -= O) === j || (We % j == 0 && 0 <= We / j);
                  }
                };
          },
          PSEUDO: function (x, E) {
            var L,
              j =
                i.pseudos[x] ||
                i.setFilters[x.toLowerCase()] ||
                X.error("unsupported pseudo: " + x);
            return j[v]
              ? j(E)
              : 1 < j.length
              ? ((L = [x, x, "", E]),
                i.setFilters.hasOwnProperty(x.toLowerCase())
                  ? be(function (O, J) {
                      for (var G, $ = j(O, E), Q = $.length; Q--; )
                        O[(G = V.call(O, $[Q]))] = !(J[G] = $[Q]);
                    })
                  : function (O) {
                      return j(O, 0, L);
                    })
              : j;
          },
        },
        pseudos: {
          not: be(function (x) {
            var E = [],
              L = [],
              j = kr(x.replace(Mt, "$1"));
            return j[v]
              ? be(function (O, J, G, $) {
                  for (var Q, Ie = j(O, null, $, []), fe = O.length; fe--; )
                    (Q = Ie[fe]) && (O[fe] = !(J[fe] = Q));
                })
              : function (O, J, G) {
                  return (E[0] = O), j(E, null, G, L), (E[0] = null), !L.pop();
                };
          }),
          has: be(function (x) {
            return function (E) {
              return 0 < X(x, E).length;
            };
          }),
          contains: be(function (x) {
            return (
              (x = x.replace(De, He)),
              function (E) {
                return -1 < (E.textContent || c.text(E)).indexOf(x);
              }
            );
          }),
          lang: be(function (x) {
            return (
              Pe.test(x || "") || X.error("unsupported lang: " + x),
              (x = x.replace(De, He).toLowerCase()),
              function (E) {
                var L;
                do {
                  if (
                    (L = s
                      ? E.lang
                      : E.getAttribute("xml:lang") || E.getAttribute("lang"))
                  )
                    return (
                      (L = L.toLowerCase()) === x || 0 === L.indexOf(x + "-")
                    );
                } while ((E = E.parentNode) && 1 === E.nodeType);
                return !1;
              }
            );
          }),
          target: function (x) {
            var E = w.location && w.location.hash;
            return E && E.slice(1) === x.id;
          },
          root: function (x) {
            return x === a;
          },
          focus: function (x) {
            return (
              x ===
                (function () {
                  try {
                    return r.activeElement;
                  } catch (E) {}
                })() &&
              r.hasFocus() &&
              !!(x.type || x.href || ~x.tabIndex)
            );
          },
          enabled: Sn(!1),
          disabled: Sn(!0),
          checked: function (x) {
            return (
              (Ee(x, "input") && !!x.checked) ||
              (Ee(x, "option") && !!x.selected)
            );
          },
          selected: function (x) {
            return !0 === x.selected;
          },
          empty: function (x) {
            for (x = x.firstChild; x; x = x.nextSibling)
              if (x.nodeType < 6) return !1;
            return !0;
          },
          parent: function (x) {
            return !i.pseudos.empty(x);
          },
          header: function (x) {
            return Me.test(x.nodeName);
          },
          input: function (x) {
            return Ne.test(x.nodeName);
          },
          button: function (x) {
            return (Ee(x, "input") && "button" === x.type) || Ee(x, "button");
          },
          text: function (x) {
            var E;
            return (
              Ee(x, "input") &&
              "text" === x.type &&
              (null == (E = x.getAttribute("type")) ||
                "text" === E.toLowerCase())
            );
          },
          first: Rt(function () {
            return [0];
          }),
          last: Rt(function (x, E) {
            return [E - 1];
          }),
          eq: Rt(function (x, E, L) {
            return [L < 0 ? L + E : L];
          }),
          even: Rt(function (x, E) {
            for (var L = 0; L < E; L += 2) x.push(L);
            return x;
          }),
          odd: Rt(function (x, E) {
            for (var L = 1; L < E; L += 2) x.push(L);
            return x;
          }),
          lt: Rt(function (x, E, L) {
            var j;
            for (j = L < 0 ? L + E : E < L ? E : L; 0 <= --j; ) x.push(j);
            return x;
          }),
          gt: Rt(function (x, E, L) {
            for (var j = L < 0 ? L + E : L; ++j < E; ) x.push(j);
            return x;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[n] = ct(n);
    for (n in { submit: !0, reset: !0 }) i.pseudos[n] = Nt(n);
    function Nr() {}
    function ir(x, E) {
      var L,
        j,
        O,
        J,
        G,
        $,
        Q,
        Ie = S[x + " "];
      if (Ie) return E ? 0 : Ie.slice(0);
      for (G = x, $ = [], Q = i.preFilter; G; ) {
        for (J in ((L && !(j = ue.exec(G))) ||
          (j && (G = G.slice(j[0].length) || G), $.push((O = []))),
        (L = !1),
        (j = P.exec(G)) &&
          ((L = j.shift()),
          O.push({ value: L, type: j[0].replace(Mt, " ") }),
          (G = G.slice(L.length))),
        i.filter))
          !(j = ke[J].exec(G)) ||
            (Q[J] && !(j = Q[J](j))) ||
            ((L = j.shift()),
            O.push({ value: L, type: J, matches: j }),
            (G = G.slice(L.length)));
        if (!L) break;
      }
      return E ? G.length : G ? X.error(x) : S(x, $).slice(0);
    }
    function gr(x) {
      for (var E = 0, L = x.length, j = ""; E < L; E++) j += x[E].value;
      return j;
    }
    function yr(x, E, L) {
      var j = E.dir,
        O = E.next,
        J = O || j,
        G = L && "parentNode" === J,
        $ = _++;
      return E.first
        ? function (Q, Ie, fe) {
            for (; (Q = Q[j]); ) if (1 === Q.nodeType || G) return x(Q, Ie, fe);
            return !1;
          }
        : function (Q, Ie, fe) {
            var he,
              Se,
              se = [y, $];
            if (fe) {
              for (; (Q = Q[j]); )
                if ((1 === Q.nodeType || G) && x(Q, Ie, fe)) return !0;
            } else
              for (; (Q = Q[j]); )
                if (1 === Q.nodeType || G)
                  if (((Se = Q[v] || (Q[v] = {})), O && Ee(Q, O)))
                    Q = Q[j] || Q;
                  else {
                    if ((he = Se[J]) && he[0] === y && he[1] === $)
                      return (se[2] = he[2]);
                    if (((Se[J] = se)[2] = x(Q, Ie, fe))) return !0;
                  }
            return !1;
          };
    }
    function Sr(x) {
      return 1 < x.length
        ? function (E, L, j) {
            for (var O = x.length; O--; ) if (!x[O](E, L, j)) return !1;
            return !0;
          }
        : x[0];
    }
    function br(x, E, L, j, O) {
      for (var J, G = [], $ = 0, Q = x.length, Ie = null != E; $ < Q; $++)
        (J = x[$]) && ((L && !L(J, j, O)) || (G.push(J), Ie && E.push($)));
      return G;
    }
    function Er(x, E, L, j, O, J) {
      return (
        j && !j[v] && (j = Er(j)),
        O && !O[v] && (O = Er(O, J)),
        be(function (G, $, Q, Ie) {
          var fe,
            he,
            Se,
            se,
            nt = [],
            yt = [],
            st = $.length,
            It =
              G ||
              (function (Jt, We, jn) {
                for (var Gt = 0, _r = We.length; Gt < _r; Gt++)
                  X(Jt, We[Gt], jn);
                return jn;
              })(E || "*", Q.nodeType ? [Q] : Q, []),
            Ht = !x || (!G && E) ? It : br(It, nt, x, Q, Ie);
          if (
            (L
              ? L(Ht, (se = O || (G ? x : st || j) ? [] : $), Q, Ie)
              : (se = Ht),
            j)
          )
            for (fe = br(se, yt), j(fe, [], Q, Ie), he = fe.length; he--; )
              (Se = fe[he]) && (se[yt[he]] = !(Ht[yt[he]] = Se));
          if (G) {
            if (O || x) {
              if (O) {
                for (fe = [], he = se.length; he--; )
                  (Se = se[he]) && fe.push((Ht[he] = Se));
                O(null, (se = []), fe, Ie);
              }
              for (he = se.length; he--; )
                (Se = se[he]) &&
                  -1 < (fe = O ? V.call(G, Se) : nt[he]) &&
                  (G[fe] = !($[fe] = Se));
            }
          } else (se = br(se === $ ? se.splice(st, se.length) : se)), O ? O(null, $, se, Ie) : d.apply($, se);
        })
      );
    }
    function Ar(x) {
      for (
        var E,
          L,
          j,
          O = x.length,
          J = i.relative[x[0].type],
          G = J || i.relative[" "],
          $ = J ? 1 : 0,
          Q = yr(
            function (he) {
              return he === E;
            },
            G,
            !0
          ),
          Ie = yr(
            function (he) {
              return -1 < V.call(E, he);
            },
            G,
            !0
          ),
          fe = [
            function (he, Se, se) {
              var nt =
                (!J && (se || Se != u)) ||
                ((E = Se).nodeType ? Q(he, Se, se) : Ie(he, Se, se));
              return (E = null), nt;
            },
          ];
        $ < O;
        $++
      )
        if ((L = i.relative[x[$].type])) fe = [yr(Sr(fe), L)];
        else {
          if ((L = i.filter[x[$].type].apply(null, x[$].matches))[v]) {
            for (j = ++$; j < O && !i.relative[x[j].type]; j++);
            return Er(
              1 < $ && Sr(fe),
              1 < $ &&
                gr(
                  x
                    .slice(0, $ - 1)
                    .concat({ value: " " === x[$ - 2].type ? "*" : "" })
                ).replace(Mt, "$1"),
              L,
              $ < j && Ar(x.slice($, j)),
              j < O && Ar((x = x.slice(j))),
              j < O && gr(x)
            );
          }
          fe.push(L);
        }
      return Sr(fe);
    }
    function kr(x, E) {
      var L,
        j,
        O,
        J,
        G,
        $,
        Q = [],
        Ie = [],
        fe = A[x + " "];
      if (!fe) {
        for (E || (E = ir(x)), L = E.length; L--; )
          (fe = Ar(E[L]))[v] ? Q.push(fe) : Ie.push(fe);
        (fe = A(
          x,
          ((j = Ie),
          (J = 0 < (O = Q).length),
          (G = 0 < j.length),
          ($ = function (he, Se, se, nt, yt) {
            var st,
              It,
              Ht,
              Jt = 0,
              We = "0",
              jn = he && [],
              Gt = [],
              _r = u,
              Lr = he || (G && i.find.TAG("*", yt)),
              jr = (y += null == _r ? 1 : Math.random() || 0.1),
              Fr = Lr.length;
            for (
              yt && (u = Se == r || Se || yt);
              We !== Fr && null != (st = Lr[We]);
              We++
            ) {
              if (G && st) {
                for (
                  It = 0, Se || st.ownerDocument == r || (Re(st), (se = !s));
                  (Ht = j[It++]);

                )
                  if (Ht(st, Se || r, se)) {
                    d.call(nt, st);
                    break;
                  }
                yt && (y = jr);
              }
              J && ((st = !Ht && st) && Jt--, he && jn.push(st));
            }
            if (((Jt += We), J && We !== Jt)) {
              for (It = 0; (Ht = O[It++]); ) Ht(jn, Gt, Se, se);
              if (he) {
                if (0 < Jt)
                  for (; We--; ) jn[We] || Gt[We] || (Gt[We] = en.call(nt));
                Gt = br(Gt);
              }
              d.apply(nt, Gt),
                yt &&
                  !he &&
                  0 < Gt.length &&
                  1 < Jt + O.length &&
                  c.uniqueSort(nt);
            }
            return yt && ((y = jr), (u = _r)), jn;
          }),
          J ? be($) : $)
        )).selector = x;
      }
      return fe;
    }
    function Ir(x, E, L, j) {
      var O,
        J,
        G,
        $,
        Q,
        Ie = "function" == typeof x && x,
        fe = !j && ir((x = Ie.selector || x));
      if (((L = L || []), 1 === fe.length)) {
        if (
          2 < (J = fe[0] = fe[0].slice(0)).length &&
          "ID" === (G = J[0]).type &&
          9 === E.nodeType &&
          s &&
          i.relative[J[1].type]
        ) {
          if (!(E = (i.find.ID(G.matches[0].replace(De, He), E) || [])[0]))
            return L;
          Ie && (E = E.parentNode), (x = x.slice(J.shift().value.length));
        }
        for (
          O = ke.needsContext.test(x) ? 0 : J.length;
          O-- && !i.relative[($ = (G = J[O]).type)];

        )
          if (
            (Q = i.find[$]) &&
            (j = Q(
              G.matches[0].replace(De, He),
              (we.test(J[0].type) && Fe(E.parentNode)) || E
            ))
          ) {
            if ((J.splice(O, 1), !(x = j.length && gr(J))))
              return d.apply(L, j), L;
            break;
          }
      }
      return (
        (Ie || kr(x, fe))(
          j,
          E,
          !s,
          L,
          !E || (we.test(x) && Fe(E.parentNode)) || E
        ),
        L
      );
    }
    (Nr.prototype = i.filters = i.pseudos),
      (i.setFilters = new Nr()),
      (ne.sortStable = v.split("").sort(R).join("") === v),
      Re(),
      (ne.sortDetached = ge(function (x) {
        return 1 & x.compareDocumentPosition(r.createElement("fieldset"));
      })),
      (c.find = X),
      (c.expr[":"] = c.expr.pseudos),
      (c.unique = c.uniqueSort),
      (X.compile = kr),
      (X.select = Ir),
      (X.setDocument = Re),
      (X.tokenize = ir),
      (X.escape = c.escapeSelector),
      (X.getText = c.text),
      (X.isXML = c.isXMLDoc),
      (X.selectors = c.expr),
      (X.support = c.support),
      (X.uniqueSort = c.uniqueSort);
  })();
  var jt = function (n, i, u) {
      for (var e = [], t = void 0 !== u; (n = n[i]) && 9 !== n.nodeType; )
        if (1 === n.nodeType) {
          if (t && c(n).is(u)) break;
          e.push(n);
        }
      return e;
    },
    Wt = function (n, i) {
      for (var u = []; n; n = n.nextSibling)
        1 === n.nodeType && n !== i && u.push(n);
      return u;
    },
    nn = c.expr.match.needsContext,
    Ft = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function Vt(n, i, u) {
    return ie(i)
      ? c.grep(n, function (e, t) {
          return !!i.call(e, t, e) !== u;
        })
      : i.nodeType
      ? c.grep(n, function (e) {
          return (e === i) !== u;
        })
      : "string" != typeof i
      ? c.grep(n, function (e) {
          return -1 < V.call(i, e) !== u;
        })
      : c.filter(i, n, u);
  }
  (c.filter = function (n, i, u) {
    var e = i[0];
    return (
      u && (n = ":not(" + n + ")"),
      1 === i.length && 1 === e.nodeType
        ? c.find.matchesSelector(e, n)
          ? [e]
          : []
        : c.find.matches(
            n,
            c.grep(i, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    c.fn.extend({
      find: function (n) {
        var i,
          u,
          e = this.length,
          t = this;
        if ("string" != typeof n)
          return this.pushStack(
            c(n).filter(function () {
              for (i = 0; i < e; i++) if (c.contains(t[i], this)) return !0;
            })
          );
        for (u = this.pushStack([]), i = 0; i < e; i++) c.find(n, t[i], u);
        return 1 < e ? c.uniqueSort(u) : u;
      },
      filter: function (n) {
        return this.pushStack(Vt(this, n || [], !1));
      },
      not: function (n) {
        return this.pushStack(Vt(this, n || [], !0));
      },
      is: function (n) {
        return !!Vt(
          this,
          "string" == typeof n && nn.test(n) ? c(n) : n || [],
          !1
        ).length;
      },
    });
  var Xt,
    Qt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((c.fn.init = function (n, i, u) {
    var e, t;
    if (!n) return this;
    if (((u = u || Xt), "string" == typeof n)) {
      if (
        !(e =
          "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length
            ? [null, n, null]
            : Qt.exec(n)) ||
        (!e[1] && i)
      )
        return !i || i.jquery ? (i || u).find(n) : this.constructor(i).find(n);
      if (e[1]) {
        if (
          (c.merge(
            this,
            c.parseHTML(
              e[1],
              (i = i instanceof c ? i[0] : i) && i.nodeType
                ? i.ownerDocument || i
                : ee,
              !0
            )
          ),
          Ft.test(e[1]) && c.isPlainObject(i))
        )
          for (e in i) ie(this[e]) ? this[e](i[e]) : this.attr(e, i[e]);
        return this;
      }
      return (
        (t = ee.getElementById(e[2])) && ((this[0] = t), (this.length = 1)),
        this
      );
    }
    return n.nodeType
      ? ((this[0] = n), (this.length = 1), this)
      : ie(n)
      ? void 0 !== u.ready
        ? u.ready(n)
        : n(c)
      : c.makeArray(n, this);
  }).prototype = c.fn),
    (Xt = c(ee));
  var Ot = /^(?:parents|prev(?:Until|All))/,
    kt = { children: !0, contents: !0, next: !0, prev: !0 };
  function $e(n, i) {
    for (; (n = n[i]) && 1 !== n.nodeType; );
    return n;
  }
  c.fn.extend({
    has: function (n) {
      var i = c(n, this),
        u = i.length;
      return this.filter(function () {
        for (var e = 0; e < u; e++) if (c.contains(this, i[e])) return !0;
      });
    },
    closest: function (n, i) {
      var u,
        e = 0,
        t = this.length,
        r = [],
        a = "string" != typeof n && c(n);
      if (!nn.test(n))
        for (; e < t; e++)
          for (u = this[e]; u && u !== i; u = u.parentNode)
            if (
              u.nodeType < 11 &&
              (a
                ? -1 < a.index(u)
                : 1 === u.nodeType && c.find.matchesSelector(u, n))
            ) {
              r.push(u);
              break;
            }
      return this.pushStack(1 < r.length ? c.uniqueSort(r) : r);
    },
    index: function (n) {
      return n
        ? "string" == typeof n
          ? V.call(c(n), this[0])
          : V.call(this, n.jquery ? n[0] : n)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (n, i) {
      return this.pushStack(c.uniqueSort(c.merge(this.get(), c(n, i))));
    },
    addBack: function (n) {
      return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
    },
  }),
    c.each(
      {
        parent: function (n) {
          var i = n.parentNode;
          return i && 11 !== i.nodeType ? i : null;
        },
        parents: function (n) {
          return jt(n, "parentNode");
        },
        parentsUntil: function (n, i, u) {
          return jt(n, "parentNode", u);
        },
        next: function (n) {
          return $e(n, "nextSibling");
        },
        prev: function (n) {
          return $e(n, "previousSibling");
        },
        nextAll: function (n) {
          return jt(n, "nextSibling");
        },
        prevAll: function (n) {
          return jt(n, "previousSibling");
        },
        nextUntil: function (n, i, u) {
          return jt(n, "nextSibling", u);
        },
        prevUntil: function (n, i, u) {
          return jt(n, "previousSibling", u);
        },
        siblings: function (n) {
          return Wt((n.parentNode || {}).firstChild, n);
        },
        children: function (n) {
          return Wt(n.firstChild);
        },
        contents: function (n) {
          return null != n.contentDocument && I(n.contentDocument)
            ? n.contentDocument
            : (Ee(n, "template") && (n = n.content || n),
              c.merge([], n.childNodes));
        },
      },
      function (n, i) {
        c.fn[n] = function (u, e) {
          var t = c.map(this, i, u);
          return (
            "Until" !== n.slice(-5) && (e = u),
            e && "string" == typeof e && (t = c.filter(e, t)),
            1 < this.length &&
              (kt[n] || c.uniqueSort(t), Ot.test(n) && t.reverse()),
            this.pushStack(t)
          );
        };
      }
    );
  var et = /[^\x20\t\r\n\f]+/g;
  function Tt(n) {
    return n;
  }
  function zt(n) {
    throw n;
  }
  function dt(n, i, u, e) {
    var t;
    try {
      n && ie((t = n.promise))
        ? t.call(n).done(i).fail(u)
        : n && ie((t = n.then))
        ? t.call(n, i, u)
        : i.apply(void 0, [n].slice(e));
    } catch (r) {
      u.apply(void 0, [r]);
    }
  }
  (c.Callbacks = function (n) {
    var u;
    n =
      "string" == typeof n
        ? ((u = {}),
          c.each(n.match(et) || [], function (y, _) {
            u[_] = !0;
          }),
          u)
        : c.extend({}, n);
    var e,
      t,
      r,
      a,
      s = [],
      l = [],
      f = -1,
      d = function () {
        for (a = a || n.once, r = e = !0; l.length; f = -1)
          for (t = l.shift(); ++f < s.length; )
            !1 === s[f].apply(t[0], t[1]) &&
              n.stopOnFalse &&
              ((f = s.length), (t = !1));
        n.memory || (t = !1), (e = !1), a && (s = t ? [] : "");
      },
      v = {
        add: function () {
          return (
            s &&
              (t && !e && ((f = s.length - 1), l.push(t)),
              (function y(_) {
                c.each(_, function (T, S) {
                  ie(S)
                    ? (n.unique && v.has(S)) || s.push(S)
                    : S && S.length && "string" !== _t(S) && y(S);
                });
              })(arguments),
              t && !e && d()),
            this
          );
        },
        remove: function () {
          return (
            c.each(arguments, function (y, _) {
              for (var T; -1 < (T = c.inArray(_, s, T)); )
                s.splice(T, 1), T <= f && f--;
            }),
            this
          );
        },
        has: function (y) {
          return y ? -1 < c.inArray(y, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = l = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = l = []), t || e || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (y, _) {
          return (
            a ||
              ((_ = [y, (_ = _ || []).slice ? _.slice() : _]),
              l.push(_),
              e || d()),
            this
          );
        },
        fire: function () {
          return v.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return v;
  }),
    c.extend({
      Deferred: function (n) {
        var i = [
            [
              "notify",
              "progress",
              c.Callbacks("memory"),
              c.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              c.Callbacks("once memory"),
              c.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              c.Callbacks("once memory"),
              c.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          u = "pending",
          e = {
            state: function () {
              return u;
            },
            always: function () {
              return t.done(arguments).fail(arguments), this;
            },
            catch: function (r) {
              return e.then(null, r);
            },
            pipe: function () {
              var r = arguments;
              return c
                .Deferred(function (a) {
                  c.each(i, function (s, l) {
                    var f = ie(r[l[4]]) && r[l[4]];
                    t[l[1]](function () {
                      var d = f && f.apply(this, arguments);
                      d && ie(d.promise)
                        ? d
                            .promise()
                            .progress(a.notify)
                            .done(a.resolve)
                            .fail(a.reject)
                        : a[l[0] + "With"](this, f ? [d] : arguments);
                    });
                  }),
                    (r = null);
                })
                .promise();
            },
            then: function (r, a, s) {
              var l = 0;
              function f(d, v, y, _) {
                return function () {
                  var T = this,
                    S = arguments,
                    A = function () {
                      var R, q;
                      if (!(d < l)) {
                        if ((R = y.apply(T, S)) === v.promise())
                          throw new TypeError("Thenable self-resolution");
                        ie(
                          (q =
                            R &&
                            ("object" == typeof R || "function" == typeof R) &&
                            R.then)
                        )
                          ? _
                            ? q.call(R, f(l, v, Tt, _), f(l, v, zt, _))
                            : (l++,
                              q.call(
                                R,
                                f(l, v, Tt, _),
                                f(l, v, zt, _),
                                f(l, v, Tt, v.notifyWith)
                              ))
                          : (y !== Tt && ((T = void 0), (S = [R])),
                            (_ || v.resolveWith)(T, S));
                      }
                    },
                    k = _
                      ? A
                      : function () {
                          try {
                            A();
                          } catch (R) {
                            c.Deferred.exceptionHook &&
                              c.Deferred.exceptionHook(R, k.error),
                              l <= d + 1 &&
                                (y !== zt && ((T = void 0), (S = [R])),
                                v.rejectWith(T, S));
                          }
                        };
                  d
                    ? k()
                    : (c.Deferred.getErrorHook
                        ? (k.error = c.Deferred.getErrorHook())
                        : c.Deferred.getStackHook &&
                          (k.error = c.Deferred.getStackHook()),
                      w.setTimeout(k));
                };
              }
              return c
                .Deferred(function (d) {
                  i[0][3].add(f(0, d, ie(s) ? s : Tt, d.notifyWith)),
                    i[1][3].add(f(0, d, ie(r) ? r : Tt)),
                    i[2][3].add(f(0, d, ie(a) ? a : zt));
                })
                .promise();
            },
            promise: function (r) {
              return null != r ? c.extend(r, e) : e;
            },
          },
          t = {};
        return (
          c.each(i, function (r, a) {
            var s = a[2],
              l = a[5];
            (e[a[1]] = s.add),
              l &&
                s.add(
                  function () {
                    u = l;
                  },
                  i[3 - r][2].disable,
                  i[3 - r][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              s.add(a[3].fire),
              (t[a[0]] = function () {
                return (
                  t[a[0] + "With"](this === t ? void 0 : this, arguments), this
                );
              }),
              (t[a[0] + "With"] = s.fireWith);
          }),
          e.promise(t),
          n && n.call(t, t),
          t
        );
      },
      when: function (n) {
        var i = arguments.length,
          u = i,
          e = Array(u),
          t = m.call(arguments),
          r = c.Deferred(),
          a = function (s) {
            return function (l) {
              (e[s] = this),
                (t[s] = 1 < arguments.length ? m.call(arguments) : l),
                --i || r.resolveWith(e, t);
            };
          };
        if (
          i <= 1 &&
          (dt(n, r.done(a(u)).resolve, r.reject, !i),
          "pending" === r.state() || ie(t[u] && t[u].then))
        )
          return r.then();
        for (; u--; ) dt(t[u], a(u), r.reject);
        return r.promise();
      },
    });
  var rn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (c.Deferred.exceptionHook = function (n, i) {
    w.console &&
      w.console.warn &&
      n &&
      rn.test(n.name) &&
      w.console.warn("jQuery.Deferred exception: " + n.message, n.stack, i);
  }),
    (c.readyException = function (n) {
      w.setTimeout(function () {
        throw n;
      });
    });
  var pn = c.Deferred();
  function an() {
    ee.removeEventListener("DOMContentLoaded", an),
      w.removeEventListener("load", an),
      c.ready();
  }
  (c.fn.ready = function (n) {
    return (
      pn.then(n).catch(function (i) {
        c.readyException(i);
      }),
      this
    );
  }),
    c.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (n) {
        (!0 === n ? --c.readyWait : c.isReady) ||
          ((c.isReady = !0) !== n && 0 < --c.readyWait) ||
          pn.resolveWith(ee, [c]);
      },
    }),
    (c.ready.then = pn.then),
    "complete" === ee.readyState ||
    ("loading" !== ee.readyState && !ee.documentElement.doScroll)
      ? w.setTimeout(c.ready)
      : (ee.addEventListener("DOMContentLoaded", an),
        w.addEventListener("load", an));
  var xe = function (n, i, u, e, t, r, a) {
      var s = 0,
        l = n.length,
        f = null == u;
      if ("object" === _t(u))
        for (s in ((t = !0), u)) xe(n, i, s, u[s], !0, r, a);
      else if (
        void 0 !== e &&
        ((t = !0),
        ie(e) || (a = !0),
        f &&
          (a
            ? (i.call(n, e), (i = null))
            : ((f = i),
              (i = function (d, v, y) {
                return f.call(c(d), y);
              }))),
        i)
      )
        for (; s < l; s++) i(n[s], u, a ? e : e.call(n[s], s, i(n[s], u)));
      return t ? n : f ? i.call(n) : l ? i(n[0], u) : r;
    },
    xt = /^-ms-/,
    Bt = /-([a-z])/g;
  function Ke(n, i) {
    return i.toUpperCase();
  }
  function Qe(n) {
    return n.replace(xt, "ms-").replace(Bt, Ke);
  }
  var ht = function (n) {
    return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
  };
  function at() {
    this.expando = c.expando + at.uid++;
  }
  (at.uid = 1),
    (at.prototype = {
      cache: function (n) {
        var i = n[this.expando];
        return (
          i ||
            ((i = {}),
            ht(n) &&
              (n.nodeType
                ? (n[this.expando] = i)
                : Object.defineProperty(n, this.expando, {
                    value: i,
                    configurable: !0,
                  }))),
          i
        );
      },
      set: function (n, i, u) {
        var e,
          t = this.cache(n);
        if ("string" == typeof i) t[Qe(i)] = u;
        else for (e in i) t[Qe(e)] = i[e];
        return t;
      },
      get: function (n, i) {
        return void 0 === i
          ? this.cache(n)
          : n[this.expando] && n[this.expando][Qe(i)];
      },
      access: function (n, i, u) {
        return void 0 === i || (i && "string" == typeof i && void 0 === u)
          ? this.get(n, i)
          : (this.set(n, i, u), void 0 !== u ? u : i);
      },
      remove: function (n, i) {
        var u,
          e = n[this.expando];
        if (void 0 !== e) {
          if (void 0 !== i)
            for (
              u = (i = Array.isArray(i)
                ? i.map(Qe)
                : ((i = Qe(i)) in e)
                ? [i]
                : i.match(et) || []).length;
              u--;

            )
              delete e[i[u]];
          (void 0 === i || c.isEmptyObject(e)) &&
            (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
        }
      },
      hasData: function (n) {
        var i = n[this.expando];
        return void 0 !== i && !c.isEmptyObject(i);
      },
    });
  var z = new at(),
    je = new at(),
    Yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ut = /[A-Z]/g;
  function on(n, i, u) {
    var e, t;
    if (void 0 === u && 1 === n.nodeType)
      if (
        ((e = "data-" + i.replace(Ut, "-$&").toLowerCase()),
        "string" == typeof (u = n.getAttribute(e)))
      ) {
        try {
          u =
            "true" === (t = u) ||
            ("false" !== t &&
              ("null" === t
                ? null
                : t === +t + ""
                ? +t
                : Yt.test(t)
                ? JSON.parse(t)
                : t));
        } catch (r) {}
        je.set(n, i, u);
      } else u = void 0;
    return u;
  }
  c.extend({
    hasData: function (n) {
      return je.hasData(n) || z.hasData(n);
    },
    data: function (n, i, u) {
      return je.access(n, i, u);
    },
    removeData: function (n, i) {
      je.remove(n, i);
    },
    _data: function (n, i, u) {
      return z.access(n, i, u);
    },
    _removeData: function (n, i) {
      z.remove(n, i);
    },
  }),
    c.fn.extend({
      data: function (n, i) {
        var u,
          e,
          t,
          r = this[0],
          a = r && r.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((t = je.get(r)), 1 === r.nodeType && !z.get(r, "hasDataAttrs"))
          ) {
            for (u = a.length; u--; )
              a[u] &&
                0 === (e = a[u].name).indexOf("data-") &&
                ((e = Qe(e.slice(5))), on(r, e, t[e]));
            z.set(r, "hasDataAttrs", !0);
          }
          return t;
        }
        return "object" == typeof n
          ? this.each(function () {
              je.set(this, n);
            })
          : xe(
              this,
              function (s) {
                var l;
                if (r && void 0 === s)
                  return void 0 !== (l = je.get(r, n)) ||
                    void 0 !== (l = on(r, n))
                    ? l
                    : void 0;
                this.each(function () {
                  je.set(this, n, s);
                });
              },
              null,
              i,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (n) {
        return this.each(function () {
          je.remove(this, n);
        });
      },
    }),
    c.extend({
      queue: function (n, i, u) {
        var e;
        if (n)
          return (
            (e = z.get(n, (i = (i || "fx") + "queue"))),
            u &&
              (!e || Array.isArray(u)
                ? (e = z.access(n, i, c.makeArray(u)))
                : e.push(u)),
            e || []
          );
      },
      dequeue: function (n, i) {
        var u = c.queue(n, (i = i || "fx")),
          e = u.length,
          t = u.shift(),
          r = c._queueHooks(n, i);
        "inprogress" === t && ((t = u.shift()), e--),
          t &&
            ("fx" === i && u.unshift("inprogress"),
            delete r.stop,
            t.call(
              n,
              function () {
                c.dequeue(n, i);
              },
              r
            )),
          !e && r && r.empty.fire();
      },
      _queueHooks: function (n, i) {
        var u = i + "queueHooks";
        return (
          z.get(n, u) ||
          z.access(n, u, {
            empty: c.Callbacks("once memory").add(function () {
              z.remove(n, [i + "queue", u]);
            }),
          })
        );
      },
    }),
    c.fn.extend({
      queue: function (n, i) {
        var u = 2;
        return (
          "string" != typeof n && ((i = n), (n = "fx"), u--),
          arguments.length < u
            ? c.queue(this[0], n)
            : void 0 === i
            ? this
            : this.each(function () {
                var e = c.queue(this, n, i);
                c._queueHooks(this, n),
                  "fx" === n && "inprogress" !== e[0] && c.dequeue(this, n);
              })
        );
      },
      dequeue: function (n) {
        return this.each(function () {
          c.dequeue(this, n);
        });
      },
      clearQueue: function (n) {
        return this.queue(n || "fx", []);
      },
      promise: function (n, i) {
        var u,
          e = 1,
          t = c.Deferred(),
          r = this,
          a = this.length,
          s = function () {
            --e || t.resolveWith(r, [r]);
          };
        for (
          "string" != typeof n && ((i = n), (n = void 0)), n = n || "fx";
          a--;

        )
          (u = z.get(r[a], n + "queueHooks")) &&
            u.empty &&
            (e++, u.empty.add(s));
        return s(), t.promise(i);
      },
    });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Be = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
    Ze = ["Top", "Right", "Bottom", "Left"],
    it = ee.documentElement,
    Ye = function (n) {
      return c.contains(n.ownerDocument, n);
    },
    pt = { composed: !0 };
  it.getRootNode &&
    (Ye = function (n) {
      return (
        c.contains(n.ownerDocument, n) || n.getRootNode(pt) === n.ownerDocument
      );
    });
  var ut = function (n, i) {
    return (
      "none" === (n = i || n).style.display ||
      ("" === n.style.display && Ye(n) && "none" === c.css(n, "display"))
    );
  };
  function p(n, i, u, e) {
    var t,
      r,
      a = 20,
      s = e
        ? function () {
            return e.cur();
          }
        : function () {
            return c.css(n, i, "");
          },
      l = s(),
      f = (u && u[3]) || (c.cssNumber[i] ? "" : "px"),
      d =
        n.nodeType &&
        (c.cssNumber[i] || ("px" !== f && +l)) &&
        Be.exec(c.css(n, i));
    if (d && d[3] !== f) {
      for (f = f || d[3], d = +(l /= 2) || 1; a--; )
        c.style(n, i, d + f),
          (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0),
          (d /= r);
      c.style(n, i, (d *= 2) + f), (u = u || []);
    }
    return (
      u &&
        ((d = +d || +l || 0),
        (t = u[1] ? d + (u[1] + 1) * u[2] : +u[2]),
        e && ((e.unit = f), (e.start = d), (e.end = t))),
      t
    );
  }
  var g = {};
  function o(n, i) {
    for (var u, e, t, r, a, s, l, f = [], d = 0, v = n.length; d < v; d++)
      (e = n[d]).style &&
        ((u = e.style.display),
        i
          ? ("none" === u &&
              ((f[d] = z.get(e, "display") || null),
              f[d] || (e.style.display = "")),
            "" === e.style.display &&
              ut(e) &&
              (f[d] =
                ((l = a = r = void 0),
                (a = (t = e).ownerDocument),
                (l = g[(s = t.nodeName)]) ||
                  ((r = a.body.appendChild(a.createElement(s))),
                  (l = c.css(r, "display")),
                  r.parentNode.removeChild(r),
                  "none" === l && (l = "block"),
                  (g[s] = l)))))
          : "none" !== u && ((f[d] = "none"), z.set(e, "display", u)));
    for (d = 0; d < v; d++) null != f[d] && (n[d].style.display = f[d]);
    return n;
  }
  c.fn.extend({
    show: function () {
      return o(this, !0);
    },
    hide: function () {
      return o(this);
    },
    toggle: function (n) {
      return "boolean" == typeof n
        ? n
          ? this.show()
          : this.hide()
        : this.each(function () {
            ut(this) ? c(this).show() : c(this).hide();
          });
    },
  });
  var h,
    b,
    C = /^(?:checkbox|radio)$/i,
    D = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    N = /^$|^module$|\/(?:java|ecma)script/i;
  (h = ee.createDocumentFragment().appendChild(ee.createElement("div"))),
    (b = ee.createElement("input")).setAttribute("type", "radio"),
    b.setAttribute("checked", "checked"),
    b.setAttribute("name", "t"),
    h.appendChild(b),
    (ne.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (h.innerHTML = "<textarea>x</textarea>"),
    (ne.noCloneChecked = !!h.cloneNode(!0).lastChild.defaultValue),
    (h.innerHTML = "<option></option>"),
    (ne.option = !!h.lastChild);
  var F = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function M(n, i) {
    var u;
    return (
      (u =
        void 0 !== n.getElementsByTagName
          ? n.getElementsByTagName(i || "*")
          : void 0 !== n.querySelectorAll
          ? n.querySelectorAll(i || "*")
          : []),
      void 0 === i || (i && Ee(n, i)) ? c.merge([n], u) : u
    );
  }
  function B(n, i) {
    for (var u = 0, e = n.length; u < e; u++)
      z.set(n[u], "globalEval", !i || z.get(i[u], "globalEval"));
  }
  (F.tbody = F.tfoot = F.colgroup = F.caption = F.thead),
    (F.th = F.td),
    ne.option ||
      (F.optgroup = F.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var U = /<|&#?\w+;/;
  function Y(n, i, u, e, t) {
    for (
      var r,
        a,
        s,
        l,
        f,
        d,
        v = i.createDocumentFragment(),
        y = [],
        _ = 0,
        T = n.length;
      _ < T;
      _++
    )
      if ((r = n[_]) || 0 === r)
        if ("object" === _t(r)) c.merge(y, r.nodeType ? [r] : r);
        else if (U.test(r)) {
          for (
            a = a || v.appendChild(i.createElement("div")),
              s = (D.exec(r) || ["", ""])[1].toLowerCase(),
              a.innerHTML =
                (l = F[s] || F._default)[1] + c.htmlPrefilter(r) + l[2],
              d = l[0];
            d--;

          )
            a = a.lastChild;
          c.merge(y, a.childNodes), ((a = v.firstChild).textContent = "");
        } else y.push(i.createTextNode(r));
    for (v.textContent = "", _ = 0; (r = y[_++]); )
      if (e && -1 < c.inArray(r, e)) t && t.push(r);
      else if (((f = Ye(r)), (a = M(v.appendChild(r), "script")), f && B(a), u))
        for (d = 0; (r = a[d++]); ) N.test(r.type || "") && u.push(r);
    return v;
  }
  var re = /^([^.]*)(?:\.(.+)|)/;
  function oe() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function ot(n, i, u, e, t, r) {
    var a, s;
    if ("object" == typeof i) {
      for (s in ("string" != typeof u && ((e = e || u), (u = void 0)), i))
        ot(n, s, u, e, i[s], r);
      return n;
    }
    if (
      (null == e && null == t
        ? ((t = u), (e = u = void 0))
        : null == t &&
          ("string" == typeof u
            ? ((t = e), (e = void 0))
            : ((t = e), (e = u), (u = void 0))),
      !1 === t)
    )
      t = Oe;
    else if (!t) return n;
    return (
      1 === r &&
        ((a = t),
        ((t = function (l) {
          return c().off(l), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = c.guid++))),
      n.each(function () {
        c.event.add(this, i, t, e, u);
      })
    );
  }
  function ft(n, i, u) {
    u
      ? (z.set(n, i, !1),
        c.event.add(n, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              r = z.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r)
                (c.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = m.call(arguments)),
                z.set(this, i, r),
                this[i](),
                (t = z.get(this, i)),
                z.set(this, i, !1),
                r !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              r &&
                (z.set(this, i, c.event.trigger(r[0], r.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = oe));
          },
        }))
      : void 0 === z.get(n, i) && c.event.add(n, i, oe);
  }
  (c.event = {
    global: {},
    add: function (n, i, u, e, t) {
      var r,
        a,
        s,
        l,
        f,
        d,
        v,
        y,
        _,
        T,
        S,
        A = z.get(n);
      if (ht(n))
        for (
          u.handler && ((u = (r = u).handler), (t = r.selector)),
            t && c.find.matchesSelector(it, t),
            u.guid || (u.guid = c.guid++),
            (l = A.events) || (l = A.events = Object.create(null)),
            (a = A.handle) ||
              (a = A.handle =
                function (k) {
                  return void 0 !== c && c.event.triggered !== k.type
                    ? c.event.dispatch.apply(n, arguments)
                    : void 0;
                }),
            f = (i = (i || "").match(et) || [""]).length;
          f--;

        )
          (_ = S = (s = re.exec(i[f]) || [])[1]),
            (T = (s[2] || "").split(".").sort()),
            _ &&
              ((v = c.event.special[_] || {}),
              (v =
                c.event.special[(_ = (t ? v.delegateType : v.bindType) || _)] ||
                {}),
              (d = c.extend(
                {
                  type: _,
                  origType: S,
                  data: e,
                  handler: u,
                  guid: u.guid,
                  selector: t,
                  needsContext: t && c.expr.match.needsContext.test(t),
                  namespace: T.join("."),
                },
                r
              )),
              (y = l[_]) ||
                (((y = l[_] = []).delegateCount = 0),
                (v.setup && !1 !== v.setup.call(n, e, T, a)) ||
                  (n.addEventListener && n.addEventListener(_, a))),
              v.add &&
                (v.add.call(n, d), d.handler.guid || (d.handler.guid = u.guid)),
              t ? y.splice(y.delegateCount++, 0, d) : y.push(d),
              (c.event.global[_] = !0));
    },
    remove: function (n, i, u, e, t) {
      var r,
        a,
        s,
        l,
        f,
        d,
        v,
        y,
        _,
        T,
        S,
        A = z.hasData(n) && z.get(n);
      if (A && (l = A.events)) {
        for (f = (i = (i || "").match(et) || [""]).length; f--; )
          if (
            ((_ = S = (s = re.exec(i[f]) || [])[1]),
            (T = (s[2] || "").split(".").sort()),
            _)
          ) {
            for (
              v = c.event.special[_] || {},
                y = l[(_ = (e ? v.delegateType : v.bindType) || _)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + T.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = r = y.length;
              r--;

            )
              (d = y[r]),
                (!t && S !== d.origType) ||
                  (u && u.guid !== d.guid) ||
                  (s && !s.test(d.namespace)) ||
                  (e && e !== d.selector && ("**" !== e || !d.selector)) ||
                  (y.splice(r, 1),
                  d.selector && y.delegateCount--,
                  v.remove && v.remove.call(n, d));
            a &&
              !y.length &&
              ((v.teardown && !1 !== v.teardown.call(n, T, A.handle)) ||
                c.removeEvent(n, _, A.handle),
              delete l[_]);
          } else for (_ in l) c.event.remove(n, _ + i[f], u, e, !0);
        c.isEmptyObject(l) && z.remove(n, "handle events");
      }
    },
    dispatch: function (n) {
      var i,
        u,
        e,
        t,
        r,
        a,
        s = new Array(arguments.length),
        l = c.event.fix(n),
        f = (z.get(this, "events") || Object.create(null))[l.type] || [],
        d = c.event.special[l.type] || {};
      for (s[0] = l, i = 1; i < arguments.length; i++) s[i] = arguments[i];
      if (
        ((l.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, l))
      ) {
        for (
          a = c.event.handlers.call(this, l, f), i = 0;
          (t = a[i++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = t.elem, u = 0;
            (r = t.handlers[u++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== r.namespace &&
              !l.rnamespace.test(r.namespace)) ||
              ((l.handleObj = r),
              (l.data = r.data),
              void 0 !==
                (e = (
                  (c.event.special[r.origType] || {}).handle || r.handler
                ).apply(t.elem, s)) &&
                !1 === (l.result = e) &&
                (l.preventDefault(), l.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (n, i) {
      var u,
        e,
        t,
        r,
        a,
        s = [],
        l = i.delegateCount,
        f = n.target;
      if (l && f.nodeType && !("click" === n.type && 1 <= n.button))
        for (; f !== this; f = f.parentNode || this)
          if (1 === f.nodeType && ("click" !== n.type || !0 !== f.disabled)) {
            for (r = [], a = {}, u = 0; u < l; u++)
              void 0 === a[(t = (e = i[u]).selector + " ")] &&
                (a[t] = e.needsContext
                  ? -1 < c(t, this).index(f)
                  : c.find(t, this, null, [f]).length),
                a[t] && r.push(e);
            r.length && s.push({ elem: f, handlers: r });
          }
      return (
        (f = this), l < i.length && s.push({ elem: f, handlers: i.slice(l) }), s
      );
    },
    addProp: function (n, i) {
      Object.defineProperty(c.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: ie(i)
          ? function () {
              if (this.originalEvent) return i(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[n];
            },
        set: function (u) {
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: u,
          });
        },
      });
    },
    fix: function (n) {
      return n[c.expando] ? n : new c.Event(n);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (n) {
          var i = this || n;
          return (
            C.test(i.type) && i.click && Ee(i, "input") && ft(i, "click", !0),
            !1
          );
        },
        trigger: function (n) {
          var i = this || n;
          return (
            C.test(i.type) && i.click && Ee(i, "input") && ft(i, "click"), !0
          );
        },
        _default: function (n) {
          var i = n.target;
          return (
            (C.test(i.type) &&
              i.click &&
              Ee(i, "input") &&
              z.get(i, "click")) ||
            Ee(i, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (n) {
          void 0 !== n.result &&
            n.originalEvent &&
            (n.originalEvent.returnValue = n.result);
        },
      },
    },
  }),
    (c.removeEvent = function (n, i, u) {
      n.removeEventListener && n.removeEventListener(i, u);
    }),
    (c.Event = function (n, i) {
      if (!(this instanceof c.Event)) return new c.Event(n, i);
      n && n.type
        ? ((this.originalEvent = n),
          (this.type = n.type),
          (this.isDefaultPrevented =
            n.defaultPrevented ||
            (void 0 === n.defaultPrevented && !1 === n.returnValue)
              ? oe
              : Oe),
          (this.target =
            n.target && 3 === n.target.nodeType
              ? n.target.parentNode
              : n.target),
          (this.currentTarget = n.currentTarget),
          (this.relatedTarget = n.relatedTarget))
        : (this.type = n),
        i && c.extend(this, i),
        (this.timeStamp = (n && n.timeStamp) || Date.now()),
        (this[c.expando] = !0);
    }),
    (c.Event.prototype = {
      constructor: c.Event,
      isDefaultPrevented: Oe,
      isPropagationStopped: Oe,
      isImmediatePropagationStopped: Oe,
      isSimulated: !1,
      preventDefault: function () {
        var n = this.originalEvent;
        (this.isDefaultPrevented = oe),
          n && !this.isSimulated && n.preventDefault();
      },
      stopPropagation: function () {
        var n = this.originalEvent;
        (this.isPropagationStopped = oe),
          n && !this.isSimulated && n.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var n = this.originalEvent;
        (this.isImmediatePropagationStopped = oe),
          n && !this.isSimulated && n.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    c.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      c.event.addProp
    ),
    c.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
      function u(e) {
        if (ee.documentMode) {
          var t = z.get(this, "handle"),
            r = c.event.fix(e);
          (r.type = "focusin" === e.type ? "focus" : "blur"),
            (r.isSimulated = !0),
            t(e),
            r.target === r.currentTarget && t(r);
        } else c.event.simulate(i, e.target, c.event.fix(e));
      }
      (c.event.special[n] = {
        setup: function () {
          var e;
          if ((ft(this, n, !0), !ee.documentMode)) return !1;
          (e = z.get(this, i)) || this.addEventListener(i, u),
            z.set(this, i, (e || 0) + 1);
        },
        trigger: function () {
          return ft(this, n), !0;
        },
        teardown: function () {
          var e;
          if (!ee.documentMode) return !1;
          (e = z.get(this, i) - 1)
            ? z.set(this, i, e)
            : (this.removeEventListener(i, u), z.remove(this, i));
        },
        _default: function (e) {
          return z.get(e.target, n);
        },
        delegateType: i,
      }),
        (c.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = ee.documentMode ? this : e,
              r = z.get(t, i);
            r ||
              (ee.documentMode
                ? this.addEventListener(i, u)
                : e.addEventListener(n, u, !0)),
              z.set(t, i, (r || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = ee.documentMode ? this : e,
              r = z.get(t, i) - 1;
            r
              ? z.set(t, i, r)
              : (ee.documentMode
                  ? this.removeEventListener(i, u)
                  : e.removeEventListener(n, u, !0),
                z.remove(t, i));
          },
        });
    }),
    c.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (n, i) {
        c.event.special[n] = {
          delegateType: i,
          bindType: i,
          handle: function (u) {
            var e,
              t = u.relatedTarget,
              r = u.handleObj;
            return (
              (t && (t === this || c.contains(this, t))) ||
                ((u.type = r.origType),
                (e = r.handler.apply(this, arguments)),
                (u.type = i)),
              e
            );
          },
        };
      }
    ),
    c.fn.extend({
      on: function (n, i, u, e) {
        return ot(this, n, i, u, e);
      },
      one: function (n, i, u, e) {
        return ot(this, n, i, u, e, 1);
      },
      off: function (n, i, u) {
        var e, t;
        if (n && n.preventDefault && n.handleObj)
          return (
            (e = n.handleObj),
            c(n.delegateTarget).off(
              e.namespace ? e.origType + "." + e.namespace : e.origType,
              e.selector,
              e.handler
            ),
            this
          );
        if ("object" == typeof n) {
          for (t in n) this.off(t, i, n[t]);
          return this;
        }
        return (
          (!1 !== i && "function" != typeof i) || ((u = i), (i = void 0)),
          !1 === u && (u = Oe),
          this.each(function () {
            c.event.remove(this, n, u, i);
          })
        );
      },
    });
  var Je = /<script|<style|<link/i,
    Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ln = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function sn(n, i) {
    return (
      (Ee(n, "table") &&
        Ee(11 !== i.nodeType ? i : i.firstChild, "tr") &&
        c(n).children("tbody")[0]) ||
      n
    );
  }
  function Fn(n) {
    return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
  }
  function En(n) {
    return (
      "true/" === (n.type || "").slice(0, 5)
        ? (n.type = n.type.slice(5))
        : n.removeAttribute("type"),
      n
    );
  }
  function An(n, i) {
    var u, e, t, r, a, s;
    if (1 === i.nodeType) {
      if (z.hasData(n) && (s = z.get(n).events))
        for (t in (z.remove(i, "handle events"), s))
          for (u = 0, e = s[t].length; u < e; u++) c.event.add(i, t, s[t][u]);
      je.hasData(n) &&
        ((r = je.access(n)), (a = c.extend({}, r)), je.set(i, a));
    }
  }
  function un(n, i, u, e) {
    i = Te(i);
    var t,
      r,
      a,
      s,
      l,
      f,
      d = 0,
      v = n.length,
      y = v - 1,
      _ = i[0],
      T = ie(_);
    if (T || (1 < v && "string" == typeof _ && !ne.checkClone && Dt.test(_)))
      return n.each(function (S) {
        var A = n.eq(S);
        T && (i[0] = _.call(this, S, A.html())), un(A, i, u, e);
      });
    if (
      v &&
      ((r = (t = Y(i, n[0].ownerDocument, !1, n, e)).firstChild),
      1 === t.childNodes.length && (t = r),
      r || e)
    ) {
      for (s = (a = c.map(M(t, "script"), Fn)).length; d < v; d++)
        (l = t),
          d !== y &&
            ((l = c.clone(l, !0, !0)), s && c.merge(a, M(l, "script"))),
          u.call(n[d], l, d);
      if (s)
        for (f = a[a.length - 1].ownerDocument, c.map(a, En), d = 0; d < s; d++)
          N.test((l = a[d]).type || "") &&
            !z.access(l, "globalEval") &&
            c.contains(f, l) &&
            (l.src && "module" !== (l.type || "").toLowerCase()
              ? c._evalUrl &&
                !l.noModule &&
                c._evalUrl(
                  l.src,
                  { nonce: l.nonce || l.getAttribute("nonce") },
                  f
                )
              : Zt(l.textContent.replace(ln, ""), l, f));
    }
    return n;
  }
  function Xn(n, i, u) {
    for (var e, t = i ? c.filter(i, n) : n, r = 0; null != (e = t[r]); r++)
      u || 1 !== e.nodeType || c.cleanData(M(e)),
        e.parentNode &&
          (u && Ye(e) && B(M(e, "script")), e.parentNode.removeChild(e));
    return n;
  }
  c.extend({
    htmlPrefilter: function (n) {
      return n;
    },
    clone: function (n, i, u) {
      var e,
        t,
        r,
        a,
        s,
        l,
        f,
        d = n.cloneNode(!0),
        v = Ye(n);
      if (
        !(
          ne.noCloneChecked ||
          (1 !== n.nodeType && 11 !== n.nodeType) ||
          c.isXMLDoc(n)
        )
      )
        for (a = M(d), e = 0, t = (r = M(n)).length; e < t; e++)
          (s = r[e]),
            "input" === (f = (l = a[e]).nodeName.toLowerCase()) &&
            C.test(s.type)
              ? (l.checked = s.checked)
              : ("input" !== f && "textarea" !== f) ||
                (l.defaultValue = s.defaultValue);
      if (i)
        if (u)
          for (r = r || M(n), a = a || M(d), e = 0, t = r.length; e < t; e++)
            An(r[e], a[e]);
        else An(n, d);
      return 0 < (a = M(d, "script")).length && B(a, !v && M(n, "script")), d;
    },
    cleanData: function (n) {
      for (var i, u, e, t = c.event.special, r = 0; void 0 !== (u = n[r]); r++)
        if (ht(u)) {
          if ((i = u[z.expando])) {
            if (i.events)
              for (e in i.events)
                t[e] ? c.event.remove(u, e) : c.removeEvent(u, e, i.handle);
            u[z.expando] = void 0;
          }
          u[je.expando] && (u[je.expando] = void 0);
        }
    },
  }),
    c.fn.extend({
      detach: function (n) {
        return Xn(this, n, !0);
      },
      remove: function (n) {
        return Xn(this, n);
      },
      text: function (n) {
        return xe(
          this,
          function (i) {
            return void 0 === i
              ? c.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = i);
                });
          },
          null,
          n,
          arguments.length
        );
      },
      append: function () {
        return un(this, arguments, function (n) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            sn(this, n).appendChild(n);
        });
      },
      prepend: function () {
        return un(this, arguments, function (n) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var i = sn(this, n);
            i.insertBefore(n, i.firstChild);
          }
        });
      },
      before: function () {
        return un(this, arguments, function (n) {
          this.parentNode && this.parentNode.insertBefore(n, this);
        });
      },
      after: function () {
        return un(this, arguments, function (n) {
          this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
        });
      },
      empty: function () {
        for (var n, i = 0; null != (n = this[i]); i++)
          1 === n.nodeType && (c.cleanData(M(n, !1)), (n.textContent = ""));
        return this;
      },
      clone: function (n, i) {
        return (
          (n = null != n && n),
          (i = null == i ? n : i),
          this.map(function () {
            return c.clone(this, n, i);
          })
        );
      },
      html: function (n) {
        return xe(
          this,
          function (i) {
            var u = this[0] || {},
              e = 0,
              t = this.length;
            if (void 0 === i && 1 === u.nodeType) return u.innerHTML;
            if (
              "string" == typeof i &&
              !Je.test(i) &&
              !F[(D.exec(i) || ["", ""])[1].toLowerCase()]
            ) {
              i = c.htmlPrefilter(i);
              try {
                for (; e < t; e++)
                  1 === (u = this[e] || {}).nodeType &&
                    (c.cleanData(M(u, !1)), (u.innerHTML = i));
                u = 0;
              } catch (r) {}
            }
            u && this.empty().append(i);
          },
          null,
          n,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return un(
          this,
          arguments,
          function (i) {
            var u = this.parentNode;
            c.inArray(this, n) < 0 &&
              (c.cleanData(M(this)), u && u.replaceChild(i, this));
          },
          n
        );
      },
    }),
    c.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (n, i) {
        c.fn[n] = function (u) {
          for (var e, t = [], r = c(u), a = r.length - 1, s = 0; s <= a; s++)
            (e = s === a ? this : this.clone(!0)),
              c(r[s])[i](e),
              ae.apply(t, e.get());
          return this.pushStack(t);
        };
      }
    );
  var On = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
    bn = /^--/,
    kn = function (n) {
      var i = n.ownerDocument.defaultView;
      return (i && i.opener) || (i = w), i.getComputedStyle(n);
    },
    mt = function (n, i, u) {
      var e,
        t,
        r = {};
      for (t in i) (r[t] = n.style[t]), (n.style[t] = i[t]);
      for (t in ((e = u.call(n)), i)) n.style[t] = r[t];
      return e;
    },
    or = new RegExp(Ze.join("|"), "i");
  function fn(n, i, u) {
    var e,
      t,
      r,
      a,
      s = bn.test(i),
      l = n.style;
    return (
      (u = u || kn(n)) &&
        ((a = u.getPropertyValue(i) || u[i]),
        s && a && (a = a.replace(Mt, "$1") || void 0),
        "" !== a || Ye(n) || (a = c.style(n, i)),
        !ne.pixelBoxStyles() &&
          On.test(a) &&
          or.test(i) &&
          ((e = l.width),
          (t = l.minWidth),
          (r = l.maxWidth),
          (l.minWidth = l.maxWidth = l.width = a),
          (a = u.width),
          (l.width = e),
          (l.minWidth = t),
          (l.maxWidth = r))),
      void 0 !== a ? a + "" : a
    );
  }
  function Pt(n, i) {
    return {
      get: function () {
        if (!n()) return (this.get = i).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function n() {
      if (f) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (f.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          it.appendChild(l).appendChild(f);
        var d = w.getComputedStyle(f);
        (u = "1%" !== d.top),
          (s = 12 === i(d.marginLeft)),
          (f.style.right = "60%"),
          (r = 36 === i(d.right)),
          (e = 36 === i(d.width)),
          (f.style.position = "absolute"),
          (t = 12 === i(f.offsetWidth / 3)),
          it.removeChild(l),
          (f = null);
      }
    }
    function i(d) {
      return Math.round(parseFloat(d));
    }
    var u,
      e,
      t,
      r,
      a,
      s,
      l = ee.createElement("div"),
      f = ee.createElement("div");
    f.style &&
      ((f.style.backgroundClip = "content-box"),
      (f.cloneNode(!0).style.backgroundClip = ""),
      (ne.clearCloneStyle = "content-box" === f.style.backgroundClip),
      c.extend(ne, {
        boxSizingReliable: function () {
          return n(), e;
        },
        pixelBoxStyles: function () {
          return n(), r;
        },
        pixelPosition: function () {
          return n(), u;
        },
        reliableMarginLeft: function () {
          return n(), s;
        },
        scrollboxSize: function () {
          return n(), t;
        },
        reliableTrDimensions: function () {
          var d, v, y, _;
          return (
            null == a &&
              ((d = ee.createElement("table")),
              (v = ee.createElement("tr")),
              (y = ee.createElement("div")),
              (d.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (v.style.cssText = "box-sizing:content-box;border:1px solid"),
              (v.style.height = "1px"),
              (y.style.height = "9px"),
              (y.style.display = "block"),
              it.appendChild(d).appendChild(v).appendChild(y),
              (_ = w.getComputedStyle(v)),
              (a =
                parseInt(_.height, 10) +
                  parseInt(_.borderTopWidth, 10) +
                  parseInt(_.borderBottomWidth, 10) ===
                v.offsetHeight),
              it.removeChild(d)),
            a
          );
        },
      }));
  })();
  var lr = ["Webkit", "Moz", "ms"],
    Pn = ee.createElement("div").style,
    Rn = {};
  function Hn(n) {
    return (
      c.cssProps[n] ||
      Rn[n] ||
      (n in Pn
        ? n
        : (Rn[n] =
            (function (u) {
              for (
                var e = u[0].toUpperCase() + u.slice(1), t = lr.length;
                t--;

              )
                if ((u = lr[t] + e) in Pn) return u;
            })(n) || n))
    );
  }
  var sr = /^(none|table(?!-c[ea]).+)/,
    ur = { position: "absolute", visibility: "hidden", display: "block" },
    qe = { letterSpacing: "0", fontWeight: "400" };
  function mn(n, i, u) {
    var e = Be.exec(i);
    return e ? Math.max(0, e[2] - (u || 0)) + (e[3] || "px") : i;
  }
  function Mn(n, i, u, e, t, r) {
    var a = "width" === i ? 1 : 0,
      s = 0,
      l = 0,
      f = 0;
    if (u === (e ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === u && (f += c.css(n, u + Ze[a], !0, t)),
        e
          ? ("content" === u && (l -= c.css(n, "padding" + Ze[a], !0, t)),
            "margin" !== u &&
              (l -= c.css(n, "border" + Ze[a] + "Width", !0, t)))
          : ((l += c.css(n, "padding" + Ze[a], !0, t)),
            "padding" !== u
              ? (l += c.css(n, "border" + Ze[a] + "Width", !0, t))
              : (s += c.css(n, "border" + Ze[a] + "Width", !0, t)));
    return (
      !e &&
        0 <= r &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              n["offset" + i[0].toUpperCase() + i.slice(1)] - r - l - s - 0.5
            )
          ) || 0),
      l + f
    );
  }
  function Qn(n, i, u) {
    var e = kn(n),
      t =
        (!ne.boxSizingReliable() || u) &&
        "border-box" === c.css(n, "boxSizing", !1, e),
      r = t,
      a = fn(n, i, e),
      s = "offset" + i[0].toUpperCase() + i.slice(1);
    if (On.test(a)) {
      if (!u) return a;
      a = "auto";
    }
    return (
      ((!ne.boxSizingReliable() && t) ||
        (!ne.reliableTrDimensions() && Ee(n, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === c.css(n, "display", !1, e))) &&
        n.getClientRects().length &&
        ((t = "border-box" === c.css(n, "boxSizing", !1, e)),
        (r = s in n) && (a = n[s])),
      (a = parseFloat(a) || 0) +
        Mn(n, i, u || (t ? "border" : "content"), r, e, a) +
        "px"
    );
  }
  function St(n, i, u, e, t) {
    return new St.prototype.init(n, i, u, e, t);
  }
  c.extend({
    cssHooks: {
      opacity: {
        get: function (n, i) {
          if (i) {
            var u = fn(n, "opacity");
            return "" === u ? "1" : u;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (n, i, u, e) {
      if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
        var t,
          r,
          a,
          s = Qe(i),
          l = bn.test(i),
          f = n.style;
        if (
          (l || (i = Hn(s)), (a = c.cssHooks[i] || c.cssHooks[s]), void 0 === u)
        )
          return a && "get" in a && void 0 !== (t = a.get(n, !1, e)) ? t : f[i];
        "string" == (r = typeof u) &&
          (t = Be.exec(u)) &&
          t[1] &&
          ((u = p(n, i, t)), (r = "number")),
          null != u &&
            u == u &&
            ("number" !== r ||
              l ||
              (u += (t && t[3]) || (c.cssNumber[s] ? "" : "px")),
            ne.clearCloneStyle ||
              "" !== u ||
              0 !== i.indexOf("background") ||
              (f[i] = "inherit"),
            (a && "set" in a && void 0 === (u = a.set(n, u, e))) ||
              (l ? f.setProperty(i, u) : (f[i] = u)));
      }
    },
    css: function (n, i, u, e) {
      var t,
        r,
        a,
        s = Qe(i);
      return (
        bn.test(i) || (i = Hn(s)),
        (a = c.cssHooks[i] || c.cssHooks[s]) &&
          "get" in a &&
          (t = a.get(n, !0, u)),
        void 0 === t && (t = fn(n, i, e)),
        "normal" === t && i in qe && (t = qe[i]),
        "" === u || u
          ? ((r = parseFloat(t)), !0 === u || isFinite(r) ? r || 0 : t)
          : t
      );
    },
  }),
    c.each(["height", "width"], function (n, i) {
      c.cssHooks[i] = {
        get: function (u, e, t) {
          if (e)
            return !sr.test(c.css(u, "display")) ||
              (u.getClientRects().length && u.getBoundingClientRect().width)
              ? Qn(u, i, t)
              : mt(u, ur, function () {
                  return Qn(u, i, t);
                });
        },
        set: function (u, e, t) {
          var r,
            a = kn(u),
            s = !ne.scrollboxSize() && "absolute" === a.position,
            l = (s || t) && "border-box" === c.css(u, "boxSizing", !1, a),
            f = t ? Mn(u, i, t, l, a) : 0;
          return (
            l &&
              s &&
              (f -= Math.ceil(
                u["offset" + i[0].toUpperCase() + i.slice(1)] -
                  parseFloat(a[i]) -
                  Mn(u, i, "border", !1, a) -
                  0.5
              )),
            f &&
              (r = Be.exec(e)) &&
              "px" !== (r[3] || "px") &&
              ((u.style[i] = e), (e = c.css(u, i))),
            mn(0, e, f)
          );
        },
      };
    }),
    (c.cssHooks.marginLeft = Pt(ne.reliableMarginLeft, function (n, i) {
      if (i)
        return (
          (parseFloat(fn(n, "marginLeft")) ||
            n.getBoundingClientRect().left -
              mt(n, { marginLeft: 0 }, function () {
                return n.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    c.each({ margin: "", padding: "", border: "Width" }, function (n, i) {
      (c.cssHooks[n + i] = {
        expand: function (u) {
          for (
            var e = 0, t = {}, r = "string" == typeof u ? u.split(" ") : [u];
            e < 4;
            e++
          )
            t[n + Ze[e] + i] = r[e] || r[e - 2] || r[0];
          return t;
        },
      }),
        "margin" !== n && (c.cssHooks[n + i].set = mn);
    }),
    c.fn.extend({
      css: function (n, i) {
        return xe(
          this,
          function (u, e, t) {
            var r,
              a,
              s = {},
              l = 0;
            if (Array.isArray(e)) {
              for (r = kn(u), a = e.length; l < a; l++)
                s[e[l]] = c.css(u, e[l], !1, r);
              return s;
            }
            return void 0 !== t ? c.style(u, e, t) : c.css(u, e);
          },
          n,
          i,
          1 < arguments.length
        );
      },
    }),
    (((c.Tween = St).prototype = {
      constructor: St,
      init: function (n, i, u, e, t, r) {
        (this.elem = n),
          (this.prop = u),
          (this.easing = t || c.easing._default),
          (this.options = i),
          (this.start = this.now = this.cur()),
          (this.end = e),
          (this.unit = r || (c.cssNumber[u] ? "" : "px"));
      },
      cur: function () {
        var n = St.propHooks[this.prop];
        return n && n.get ? n.get(this) : St.propHooks._default.get(this);
      },
      run: function (n) {
        var i,
          u = St.propHooks[this.prop];
        return (
          (this.pos = i =
            this.options.duration
              ? c.easing[this.easing](
                  n,
                  this.options.duration * n,
                  0,
                  1,
                  this.options.duration
                )
              : n),
          (this.now = (this.end - this.start) * i + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          u && u.set ? u.set(this) : St.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = St.prototype),
    ((St.propHooks = {
      _default: {
        get: function (n) {
          var i;
          return 1 !== n.elem.nodeType ||
            (null != n.elem[n.prop] && null == n.elem.style[n.prop])
            ? n.elem[n.prop]
            : (i = c.css(n.elem, n.prop, "")) && "auto" !== i
            ? i
            : 0;
        },
        set: function (n) {
          c.fx.step[n.prop]
            ? c.fx.step[n.prop](n)
            : 1 !== n.elem.nodeType ||
              (!c.cssHooks[n.prop] && null == n.elem.style[Hn(n.prop)])
            ? (n.elem[n.prop] = n.now)
            : c.style(n.elem, n.prop, n.now + n.unit);
        },
      },
    }).scrollTop = St.propHooks.scrollLeft =
      {
        set: function (n) {
          n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
        },
      }),
    (c.easing = {
      linear: function (n) {
        return n;
      },
      swing: function (n) {
        return 0.5 - Math.cos(n * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (c.fx = St.prototype.init),
    (c.fx.step = {});
  var cn,
    vn,
    gn,
    _n,
    fr = /^(?:toggle|show|hide)$/,
    zn = /queueHooks$/;
  function wn() {
    vn &&
      (!1 === ee.hidden && w.requestAnimationFrame
        ? w.requestAnimationFrame(wn)
        : w.setTimeout(wn, c.fx.interval),
      c.fx.tick());
  }
  function Et() {
    return (
      w.setTimeout(function () {
        cn = void 0;
      }),
      (cn = Date.now())
    );
  }
  function vt(n, i) {
    var u,
      e = 0,
      t = { height: n };
    for (i = i ? 1 : 0; e < 4; e += 2 - i)
      t["margin" + (u = Ze[e])] = t["padding" + u] = n;
    return i && (t.opacity = t.width = n), t;
  }
  function qn(n, i, u) {
    for (
      var e,
        t = (At.tweeners[i] || []).concat(At.tweeners["*"]),
        r = 0,
        a = t.length;
      r < a;
      r++
    )
      if ((e = t[r].call(u, i, n))) return e;
  }
  function At(n, i, u) {
    var e,
      t,
      r = 0,
      a = At.prefilters.length,
      s = c.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (t) return !1;
        for (
          var v = cn || Et(),
            y = Math.max(0, f.startTime + f.duration - v),
            _ = 1 - (y / f.duration || 0),
            T = 0,
            S = f.tweens.length;
          T < S;
          T++
        )
          f.tweens[T].run(_);
        return (
          s.notifyWith(n, [f, _, y]),
          _ < 1 && S
            ? y
            : (S || s.notifyWith(n, [f, 1, 0]), s.resolveWith(n, [f]), !1)
        );
      },
      f = s.promise({
        elem: n,
        props: c.extend({}, i),
        opts: c.extend(!0, { specialEasing: {}, easing: c.easing._default }, u),
        originalProperties: i,
        originalOptions: u,
        startTime: cn || Et(),
        duration: u.duration,
        tweens: [],
        createTween: function (v, y) {
          var _ = c.Tween(
            n,
            f.opts,
            v,
            y,
            f.opts.specialEasing[v] || f.opts.easing
          );
          return f.tweens.push(_), _;
        },
        stop: function (v) {
          var y = 0,
            _ = v ? f.tweens.length : 0;
          if (t) return this;
          for (t = !0; y < _; y++) f.tweens[y].run(1);
          return (
            v
              ? (s.notifyWith(n, [f, 1, 0]), s.resolveWith(n, [f, v]))
              : s.rejectWith(n, [f, v]),
            this
          );
        },
      }),
      d = f.props;
    for (
      (function (v, y) {
        var _, T, S, A, k;
        for (_ in v)
          if (
            ((S = y[(T = Qe(_))]),
            (A = v[_]),
            Array.isArray(A) && ((S = A[1]), (A = v[_] = A[0])),
            _ !== T && ((v[T] = A), delete v[_]),
            (k = c.cssHooks[T]) && ("expand" in k))
          )
            for (_ in ((A = k.expand(A)), delete v[T], A))
              (_ in v) || ((v[_] = A[_]), (y[_] = S));
          else y[T] = S;
      })(d, f.opts.specialEasing);
      r < a;
      r++
    )
      if ((e = At.prefilters[r].call(f, n, d, f.opts)))
        return (
          ie(e.stop) &&
            (c._queueHooks(f.elem, f.opts.queue).stop = e.stop.bind(e)),
          e
        );
    return (
      c.map(d, qn, f),
      ie(f.opts.start) && f.opts.start.call(n, f),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always),
      c.fx.timer(c.extend(l, { elem: n, anim: f, queue: f.opts.queue })),
      f
    );
  }
  (c.Animation = c.extend(At, {
    tweeners: {
      "*": [
        function (n, i) {
          var u = this.createTween(n, i);
          return p(u.elem, n, Be.exec(i), u), u;
        },
      ],
    },
    tweener: function (n, i) {
      ie(n) ? ((i = n), (n = ["*"])) : (n = n.match(et));
      for (var u, e = 0, t = n.length; e < t; e++)
        (At.tweeners[(u = n[e])] = At.tweeners[u] || []).unshift(i);
    },
    prefilters: [
      function (n, i, u) {
        var e,
          t,
          r,
          a,
          s,
          l,
          f,
          d,
          v = "width" in i || "height" in i,
          y = this,
          _ = {},
          T = n.style,
          S = n.nodeType && ut(n),
          A = z.get(n, "fxshow");
        for (e in (u.queue ||
          (null == (a = c._queueHooks(n, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          y.always(function () {
            y.always(function () {
              a.unqueued--, c.queue(n, "fx").length || a.empty.fire();
            });
          })),
        i))
          if (fr.test((t = i[e]))) {
            if (
              (delete i[e],
              (r = r || "toggle" === t),
              t === (S ? "hide" : "show"))
            ) {
              if ("show" !== t || !A || void 0 === A[e]) continue;
              S = !0;
            }
            _[e] = (A && A[e]) || c.style(n, e);
          }
        if ((l = !c.isEmptyObject(i)) || !c.isEmptyObject(_))
          for (e in (v &&
            1 === n.nodeType &&
            ((u.overflow = [T.overflow, T.overflowX, T.overflowY]),
            null == (f = A && A.display) && (f = z.get(n, "display")),
            "none" === (d = c.css(n, "display")) &&
              (f
                ? (d = f)
                : (o([n], !0),
                  (f = n.style.display || f),
                  (d = c.css(n, "display")),
                  o([n]))),
            ("inline" === d || ("inline-block" === d && null != f)) &&
              "none" === c.css(n, "float") &&
              (l ||
                (y.done(function () {
                  T.display = f;
                }),
                null == f && (f = "none" === (d = T.display) ? "" : d)),
              (T.display = "inline-block"))),
          u.overflow &&
            ((T.overflow = "hidden"),
            y.always(function () {
              (T.overflow = u.overflow[0]),
                (T.overflowX = u.overflow[1]),
                (T.overflowY = u.overflow[2]);
            })),
          (l = !1),
          _))
            l ||
              (A
                ? "hidden" in A && (S = A.hidden)
                : (A = z.access(n, "fxshow", { display: f })),
              r && (A.hidden = !S),
              S && o([n], !0),
              y.done(function () {
                for (e in (S || o([n]), z.remove(n, "fxshow"), _))
                  c.style(n, e, _[e]);
              })),
              (l = qn(S ? A[e] : 0, e, y)),
              e in A ||
                ((A[e] = l.start), S && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (n, i) {
      i ? At.prefilters.unshift(n) : At.prefilters.push(n);
    },
  })),
    (c.speed = function (n, i, u) {
      var e =
        n && "object" == typeof n
          ? c.extend({}, n)
          : {
              complete: u || (!u && i) || (ie(n) && n),
              duration: n,
              easing: (u && i) || (i && !ie(i) && i),
            };
      return (
        c.fx.off
          ? (e.duration = 0)
          : "number" != typeof e.duration &&
            (e.duration =
              e.duration in c.fx.speeds
                ? c.fx.speeds[e.duration]
                : c.fx.speeds._default),
        (null != e.queue && !0 !== e.queue) || (e.queue = "fx"),
        (e.old = e.complete),
        (e.complete = function () {
          ie(e.old) && e.old.call(this), e.queue && c.dequeue(this, e.queue);
        }),
        e
      );
    }),
    c.fn.extend({
      fadeTo: function (n, i, u, e) {
        return this.filter(ut)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: i }, n, u, e);
      },
      animate: function (n, i, u, e) {
        var t = c.isEmptyObject(n),
          r = c.speed(i, u, e),
          a = function () {
            var s = At(this, c.extend({}, n), r);
            (t || z.get(this, "finish")) && s.stop(!0);
          };
        return (
          (a.finish = a),
          t || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        );
      },
      stop: function (n, i, u) {
        var e = function (t) {
          var r = t.stop;
          delete t.stop, r(u);
        };
        return (
          "string" != typeof n && ((u = i), (i = n), (n = void 0)),
          i && this.queue(n || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != n && n + "queueHooks",
              a = c.timers,
              s = z.get(this);
            if (r) s[r] && s[r].stop && e(s[r]);
            else for (r in s) s[r] && s[r].stop && zn.test(r) && e(s[r]);
            for (r = a.length; r--; )
              a[r].elem !== this ||
                (null != n && a[r].queue !== n) ||
                (a[r].anim.stop(u), (t = !1), a.splice(r, 1));
            (!t && u) || c.dequeue(this, n);
          })
        );
      },
      finish: function (n) {
        return (
          !1 !== n && (n = n || "fx"),
          this.each(function () {
            var i,
              u = z.get(this),
              e = u[n + "queue"],
              t = u[n + "queueHooks"],
              r = c.timers,
              a = e ? e.length : 0;
            for (
              u.finish = !0,
                c.queue(this, n, []),
                t && t.stop && t.stop.call(this, !0),
                i = r.length;
              i--;

            )
              r[i].elem === this &&
                r[i].queue === n &&
                (r[i].anim.stop(!0), r.splice(i, 1));
            for (i = 0; i < a; i++)
              e[i] && e[i].finish && e[i].finish.call(this);
            delete u.finish;
          })
        );
      },
    }),
    c.each(["toggle", "show", "hide"], function (n, i) {
      var u = c.fn[i];
      c.fn[i] = function (e, t, r) {
        return null == e || "boolean" == typeof e
          ? u.apply(this, arguments)
          : this.animate(vt(i, !0), e, t, r);
      };
    }),
    c.each(
      {
        slideDown: vt("show"),
        slideUp: vt("hide"),
        slideToggle: vt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (n, i) {
        c.fn[n] = function (u, e, t) {
          return this.animate(i, u, e, t);
        };
      }
    ),
    (c.timers = []),
    (c.fx.tick = function () {
      var n,
        i = 0,
        u = c.timers;
      for (cn = Date.now(); i < u.length; i++)
        (n = u[i])() || u[i] !== n || u.splice(i--, 1);
      u.length || c.fx.stop(), (cn = void 0);
    }),
    (c.fx.timer = function (n) {
      c.timers.push(n), c.fx.start();
    }),
    (c.fx.interval = 13),
    (c.fx.start = function () {
      vn || ((vn = !0), wn());
    }),
    (c.fx.stop = function () {
      vn = null;
    }),
    (c.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (c.fn.delay = function (n, i) {
      return (
        (n = (c.fx && c.fx.speeds[n]) || n),
        this.queue((i = i || "fx"), function (u, e) {
          var t = w.setTimeout(u, n);
          e.stop = function () {
            w.clearTimeout(t);
          };
        })
      );
    }),
    (gn = ee.createElement("input")),
    (_n = ee.createElement("select").appendChild(ee.createElement("option"))),
    (gn.type = "checkbox"),
    (ne.checkOn = "" !== gn.value),
    (ne.optSelected = _n.selected),
    ((gn = ee.createElement("input")).value = "t"),
    (gn.type = "radio"),
    (ne.radioValue = "t" === gn.value);
  var lt,
    _e = c.expr.attrHandle;
  c.fn.extend({
    attr: function (n, i) {
      return xe(this, c.attr, n, i, 1 < arguments.length);
    },
    removeAttr: function (n) {
      return this.each(function () {
        c.removeAttr(this, n);
      });
    },
  }),
    c.extend({
      attr: function (n, i, u) {
        var e,
          t,
          r = n.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === n.getAttribute
            ? c.prop(n, i, u)
            : ((1 === r && c.isXMLDoc(n)) ||
                (t =
                  c.attrHooks[i.toLowerCase()] ||
                  (c.expr.match.bool.test(i) ? lt : void 0)),
              void 0 !== u
                ? null === u
                  ? void c.removeAttr(n, i)
                  : t && "set" in t && void 0 !== (e = t.set(n, u, i))
                  ? e
                  : (n.setAttribute(i, u + ""), u)
                : t && "get" in t && null !== (e = t.get(n, i))
                ? e
                : null == (e = c.find.attr(n, i))
                ? void 0
                : e);
      },
      attrHooks: {
        type: {
          set: function (n, i) {
            if (!ne.radioValue && "radio" === i && Ee(n, "input")) {
              var u = n.value;
              return n.setAttribute("type", i), u && (n.value = u), i;
            }
          },
        },
      },
      removeAttr: function (n, i) {
        var u,
          e = 0,
          t = i && i.match(et);
        if (t && 1 === n.nodeType) for (; (u = t[e++]); ) n.removeAttribute(u);
      },
    }),
    (lt = {
      set: function (n, i, u) {
        return !1 === i ? c.removeAttr(n, u) : n.setAttribute(u, u), u;
      },
    }),
    c.each(c.expr.match.bool.source.match(/\w+/g), function (n, i) {
      var u = _e[i] || c.find.attr;
      _e[i] = function (e, t, r) {
        var a,
          s,
          l = t.toLowerCase();
        return (
          r ||
            ((s = _e[l]),
            (_e[l] = a),
            (a = null != u(e, t, r) ? l : null),
            (_e[l] = s)),
          a
        );
      };
    });
  var Yn = /^(?:input|select|textarea|button)$/i,
    Jn = /^(?:a|area)$/i;
  function Ue(n) {
    return (n.match(et) || []).join(" ");
  }
  function dn(n) {
    return (n.getAttribute && n.getAttribute("class")) || "";
  }
  function ze(n) {
    return Array.isArray(n) ? n : ("string" == typeof n && n.match(et)) || [];
  }
  c.fn.extend({
    prop: function (n, i) {
      return xe(this, c.prop, n, i, 1 < arguments.length);
    },
    removeProp: function (n) {
      return this.each(function () {
        delete this[c.propFix[n] || n];
      });
    },
  }),
    c.extend({
      prop: function (n, i, u) {
        var e,
          t,
          r = n.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && c.isXMLDoc(n)) ||
              (t = c.propHooks[(i = c.propFix[i] || i)]),
            void 0 !== u
              ? t && "set" in t && void 0 !== (e = t.set(n, u, i))
                ? e
                : (n[i] = u)
              : t && "get" in t && null !== (e = t.get(n, i))
              ? e
              : n[i]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (n) {
            var i = c.find.attr(n, "tabindex");
            return i
              ? parseInt(i, 10)
              : Yn.test(n.nodeName) || (Jn.test(n.nodeName) && n.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ne.optSelected ||
      (c.propHooks.selected = {
        get: function (n) {
          return null;
        },
        set: function (n) {},
      }),
    c.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        c.propFix[this.toLowerCase()] = this;
      }
    ),
    c.fn.extend({
      addClass: function (n) {
        var i, u, e, t, r, a;
        return ie(n)
          ? this.each(function (s) {
              c(this).addClass(n.call(this, s, dn(this)));
            })
          : (i = ze(n)).length
          ? this.each(function () {
              if (
                ((e = dn(this)), (u = 1 === this.nodeType && " " + Ue(e) + " "))
              ) {
                for (r = 0; r < i.length; r++)
                  u.indexOf(" " + (t = i[r]) + " ") < 0 && (u += t + " ");
                (a = Ue(u)), e !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (n) {
        var i, u, e, t, r, a;
        return ie(n)
          ? this.each(function (s) {
              c(this).removeClass(n.call(this, s, dn(this)));
            })
          : arguments.length
          ? (i = ze(n)).length
            ? this.each(function () {
                if (
                  ((e = dn(this)),
                  (u = 1 === this.nodeType && " " + Ue(e) + " "))
                ) {
                  for (r = 0; r < i.length; r++)
                    for (t = i[r]; -1 < u.indexOf(" " + t + " "); )
                      u = u.replace(" " + t + " ", " ");
                  (a = Ue(u)), e !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (n, i) {
        var u,
          e,
          t,
          r,
          a = typeof n,
          s = "string" === a || Array.isArray(n);
        return ie(n)
          ? this.each(function (l) {
              c(this).toggleClass(n.call(this, l, dn(this), i), i);
            })
          : "boolean" == typeof i && s
          ? i
            ? this.addClass(n)
            : this.removeClass(n)
          : ((u = ze(n)),
            this.each(function () {
              if (s)
                for (r = c(this), t = 0; t < u.length; t++)
                  r.hasClass((e = u[t])) ? r.removeClass(e) : r.addClass(e);
              else
                (void 0 !== n && "boolean" !== a) ||
                  ((e = dn(this)) && z.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === n ? "" : z.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (n) {
        var i,
          u,
          e = 0;
        for (i = " " + n + " "; (u = this[e++]); )
          if (1 === u.nodeType && -1 < (" " + Ue(dn(u)) + " ").indexOf(i))
            return !0;
        return !1;
      },
    });
  var wr = /\r/g;
  c.fn.extend({
    val: function (n) {
      var i,
        u,
        e,
        t = this[0];
      return arguments.length
        ? ((e = ie(n)),
          this.each(function (r) {
            var a;
            1 === this.nodeType &&
              (null == (a = e ? n.call(this, r, c(this).val()) : n)
                ? (a = "")
                : "number" == typeof a
                ? (a += "")
                : Array.isArray(a) &&
                  (a = c.map(a, function (s) {
                    return null == s ? "" : s + "";
                  })),
              ((i =
                c.valHooks[this.type] ||
                c.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                void 0 !== i.set(this, a, "value")) ||
                (this.value = a));
          }))
        : t
        ? (i = c.valHooks[t.type] || c.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in i &&
          void 0 !== (u = i.get(t, "value"))
          ? u
          : "string" == typeof (u = t.value)
          ? u.replace(wr, "")
          : null == u
          ? ""
          : u
        : void 0;
    },
  }),
    c.extend({
      valHooks: {
        option: {
          get: function (n) {
            var i = c.find.attr(n, "value");
            return null != i ? i : Ue(c.text(n));
          },
        },
        select: {
          get: function (n) {
            var i,
              u,
              e,
              t = n.options,
              r = n.selectedIndex,
              a = "select-one" === n.type,
              s = a ? null : [],
              l = a ? r + 1 : t.length;
            for (e = r < 0 ? l : a ? r : 0; e < l; e++)
              if (
                ((u = t[e]).selected || e === r) &&
                !u.disabled &&
                (!u.parentNode.disabled || !Ee(u.parentNode, "optgroup"))
              ) {
                if (((i = c(u).val()), a)) return i;
                s.push(i);
              }
            return s;
          },
          set: function (n, i) {
            for (
              var u, e, t = n.options, r = c.makeArray(i), a = t.length;
              a--;

            )
              ((e = t[a]).selected =
                -1 < c.inArray(c.valHooks.option.get(e), r)) && (u = !0);
            return u || (n.selectedIndex = -1), r;
          },
        },
      },
    }),
    c.each(["radio", "checkbox"], function () {
      (c.valHooks[this] = {
        set: function (n, i) {
          if (Array.isArray(i))
            return (n.checked = -1 < c.inArray(c(n).val(), i));
        },
      }),
        ne.checkOn ||
          (c.valHooks[this].get = function (n) {
            return null === n.getAttribute("value") ? "on" : n.value;
          });
    });
  var Cn = w.location,
    Gn = { guid: Date.now() },
    Nn = /\?/;
  c.parseXML = function (n) {
    var i, u;
    if (!n || "string" != typeof n) return null;
    try {
      i = new w.DOMParser().parseFromString(n, "text/xml");
    } catch (e) {}
    return (
      (u = i && i.getElementsByTagName("parsererror")[0]),
      (i && !u) ||
        c.error(
          "Invalid XML: " +
            (u
              ? c
                  .map(u.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : n)
        ),
      i
    );
  };
  var Wn = /^(?:focusinfocus|focusoutblur)$/,
    Bn = function (n) {
      n.stopPropagation();
    };
  c.extend(c.event, {
    trigger: function (n, i, u, e) {
      var t,
        r,
        a,
        s,
        l,
        f,
        d,
        v,
        y = [u || ee],
        _ = W.call(n, "type") ? n.type : n,
        T = W.call(n, "namespace") ? n.namespace.split(".") : [];
      if (
        ((r = v = a = u = u || ee),
        3 !== u.nodeType &&
          8 !== u.nodeType &&
          !Wn.test(_ + c.event.triggered) &&
          (-1 < _.indexOf(".") && ((_ = (T = _.split(".")).shift()), T.sort()),
          (l = _.indexOf(":") < 0 && "on" + _),
          ((n = n[c.expando]
            ? n
            : new c.Event(_, "object" == typeof n && n)).isTrigger = e ? 2 : 3),
          (n.namespace = T.join(".")),
          (n.rnamespace = n.namespace
            ? new RegExp("(^|\\.)" + T.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (n.result = void 0),
          n.target || (n.target = u),
          (i = null == i ? [n] : c.makeArray(i, [n])),
          (d = c.event.special[_] || {}),
          e || !d.trigger || !1 !== d.trigger.apply(u, i)))
      ) {
        if (!e && !d.noBubble && !Ae(u)) {
          for (
            Wn.test((s = d.delegateType || _) + _) || (r = r.parentNode);
            r;
            r = r.parentNode
          )
            y.push(r), (a = r);
          a === (u.ownerDocument || ee) &&
            y.push(a.defaultView || a.parentWindow || w);
        }
        for (t = 0; (r = y[t++]) && !n.isPropagationStopped(); )
          (v = r),
            (n.type = 1 < t ? s : d.bindType || _),
            (f =
              (z.get(r, "events") || Object.create(null))[n.type] &&
              z.get(r, "handle")) && f.apply(r, i),
            (f = l && r[l]) &&
              f.apply &&
              ht(r) &&
              ((n.result = f.apply(r, i)),
              !1 === n.result && n.preventDefault());
        return (
          (n.type = _),
          e ||
            n.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(y.pop(), i)) ||
            !ht(u) ||
            (l &&
              ie(u[_]) &&
              !Ae(u) &&
              ((a = u[l]) && (u[l] = null),
              (c.event.triggered = _),
              n.isPropagationStopped() && v.addEventListener(_, Bn),
              u[_](),
              n.isPropagationStopped() && v.removeEventListener(_, Bn),
              (c.event.triggered = void 0),
              a && (u[l] = a))),
          n.result
        );
      }
    },
    simulate: function (n, i, u) {
      var e = c.extend(new c.Event(), u, { type: n, isSimulated: !0 });
      c.event.trigger(e, null, i);
    },
  }),
    c.fn.extend({
      trigger: function (n, i) {
        return this.each(function () {
          c.event.trigger(n, i, this);
        });
      },
      triggerHandler: function (n, i) {
        var u = this[0];
        if (u) return c.event.trigger(n, i, u, !0);
      },
    });
  var Un = /\[\]$/,
    cr = /\r?\n/g,
    Cr = /^(?:submit|button|image|reset|file)$/i,
    dr = /^(?:input|select|textarea|keygen)/i;
  function In(n, i, u, e) {
    var t;
    if (Array.isArray(i))
      c.each(i, function (r, a) {
        u || Un.test(n)
          ? e(n, a)
          : In(
              n + "[" + ("object" == typeof a && null != a ? r : "") + "]",
              a,
              u,
              e
            );
      });
    else if (u || "object" !== _t(i)) e(n, i);
    else for (t in i) In(n + "[" + t + "]", i[t], u, e);
  }
  (c.param = function (n, i) {
    var u,
      e = [],
      t = function (r, a) {
        var s = ie(a) ? a() : a;
        e[e.length] =
          encodeURIComponent(r) + "=" + encodeURIComponent(null == s ? "" : s);
      };
    if (null == n) return "";
    if (Array.isArray(n) || (n.jquery && !c.isPlainObject(n)))
      c.each(n, function () {
        t(this.name, this.value);
      });
    else for (u in n) In(u, n[u], i, t);
    return e.join("&");
  }),
    c.fn.extend({
      serialize: function () {
        return c.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var n = c.prop(this, "elements");
          return n ? c.makeArray(n) : this;
        })
          .filter(function () {
            var n = this.type;
            return (
              this.name &&
              !c(this).is(":disabled") &&
              dr.test(this.nodeName) &&
              !Cr.test(n) &&
              (this.checked || !C.test(n))
            );
          })
          .map(function (n, i) {
            var u = c(this).val();
            return null == u
              ? null
              : Array.isArray(u)
              ? c.map(u, function (e) {
                  return { name: i.name, value: e.replace(cr, "\r\n") };
                })
              : { name: i.name, value: u.replace(cr, "\r\n") };
          })
          .get();
      },
    });
  var hr = /%20/g,
    Tr = /#.*$/,
    xr = /([?&])_=[^&]*/,
    Ln = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Vn = /^(?:GET|HEAD)$/,
    Dr = /^\/\//,
    Kn = {},
    Zn = {},
    pr = "*/".concat("*"),
    $n = ee.createElement("a");
  function er(n) {
    return function (i, u) {
      "string" != typeof i && ((u = i), (i = "*"));
      var e,
        t = 0,
        r = i.toLowerCase().match(et) || [];
      if (ie(u))
        for (; (e = r[t++]); )
          "+" === e[0]
            ? ((e = e.slice(1) || "*"), (n[e] = n[e] || []).unshift(u))
            : (n[e] = n[e] || []).push(u);
    };
  }
  function Tn(n, i, u, e) {
    var t = {},
      r = n === Zn;
    function a(s) {
      var l;
      return (
        (t[s] = !0),
        c.each(n[s] || [], function (f, d) {
          var v = d(i, u, e);
          return "string" != typeof v || r || t[v]
            ? r
              ? !(l = v)
              : void 0
            : (i.dataTypes.unshift(v), a(v), !1);
        }),
        l
      );
    }
    return a(i.dataTypes[0]) || (!t["*"] && a("*"));
  }
  function xn(n, i) {
    var u,
      e,
      t = c.ajaxSettings.flatOptions || {};
    for (u in i) void 0 !== i[u] && ((t[u] ? n : e || (e = {}))[u] = i[u]);
    return e && c.extend(!0, n, e), n;
  }
  ($n.href = Cn.href),
    c.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Cn.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Cn.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": pr,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": c.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (n, i) {
        return i ? xn(xn(n, c.ajaxSettings), i) : xn(c.ajaxSettings, n);
      },
      ajaxPrefilter: er(Kn),
      ajaxTransport: er(Zn),
      ajax: function (n, i) {
        "object" == typeof n && ((i = n), (n = void 0));
        var u,
          e,
          t,
          r,
          a,
          s,
          l,
          f,
          d,
          v,
          y = c.ajaxSetup({}, (i = i || {})),
          _ = y.context || y,
          T = y.context && (_.nodeType || _.jquery) ? c(_) : c.event,
          S = c.Deferred(),
          A = c.Callbacks("once memory"),
          k = y.statusCode || {},
          R = {},
          q = {},
          K = "canceled",
          H = {
            readyState: 0,
            getResponseHeader: function (Z) {
              var ue;
              if (l) {
                if (!r)
                  for (r = {}; (ue = Ln.exec(t)); )
                    r[ue[1].toLowerCase() + " "] = (
                      r[ue[1].toLowerCase() + " "] || []
                    ).concat(ue[2]);
                ue = r[Z.toLowerCase() + " "];
              }
              return null == ue ? null : ue.join(", ");
            },
            getAllResponseHeaders: function () {
              return l ? t : null;
            },
            setRequestHeader: function (Z, ue) {
              return (
                null == l &&
                  ((Z = q[Z.toLowerCase()] = q[Z.toLowerCase()] || Z),
                  (R[Z] = ue)),
                this
              );
            },
            overrideMimeType: function (Z) {
              return null == l && (y.mimeType = Z), this;
            },
            statusCode: function (Z) {
              var ue;
              if (Z)
                if (l) H.always(Z[H.status]);
                else for (ue in Z) k[ue] = [k[ue], Z[ue]];
              return this;
            },
            abort: function (Z) {
              var ue = Z || K;
              return u && u.abort(ue), le(0, ue), this;
            },
          };
        if (
          (S.promise(H),
          (y.url = ((n || y.url || Cn.href) + "").replace(
            Dr,
            Cn.protocol + "//"
          )),
          (y.type = i.method || i.type || y.method || y.type),
          (y.dataTypes = (y.dataType || "*").toLowerCase().match(et) || [""]),
          null == y.crossDomain)
        ) {
          s = ee.createElement("a");
          try {
            (s.href = y.url),
              (s.href = s.href),
              (y.crossDomain =
                $n.protocol + "//" + $n.host != s.protocol + "//" + s.host);
          } catch (Z) {
            y.crossDomain = !0;
          }
        }
        if (
          (y.data &&
            y.processData &&
            "string" != typeof y.data &&
            (y.data = c.param(y.data, y.traditional)),
          Tn(Kn, y, i, H),
          l)
        )
          return H;
        for (d in ((f = c.event && y.global) &&
          0 == c.active++ &&
          c.event.trigger("ajaxStart"),
        (y.type = y.type.toUpperCase()),
        (y.hasContent = !Vn.test(y.type)),
        (e = y.url.replace(Tr, "")),
        y.hasContent
          ? y.data &&
            y.processData &&
            0 ===
              (y.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (y.data = y.data.replace(hr, "+"))
          : ((v = y.url.slice(e.length)),
            y.data &&
              (y.processData || "string" == typeof y.data) &&
              ((e += (Nn.test(e) ? "&" : "?") + y.data), delete y.data),
            !1 === y.cache &&
              ((e = e.replace(xr, "$1")),
              (v = (Nn.test(e) ? "&" : "?") + "_=" + Gn.guid++ + v)),
            (y.url = e + v)),
        y.ifModified &&
          (c.lastModified[e] &&
            H.setRequestHeader("If-Modified-Since", c.lastModified[e]),
          c.etag[e] && H.setRequestHeader("If-None-Match", c.etag[e])),
        ((y.data && y.hasContent && !1 !== y.contentType) || i.contentType) &&
          H.setRequestHeader("Content-Type", y.contentType),
        H.setRequestHeader(
          "Accept",
          y.dataTypes[0] && y.accepts[y.dataTypes[0]]
            ? y.accepts[y.dataTypes[0]] +
                ("*" !== y.dataTypes[0] ? ", " + pr + "; q=0.01" : "")
            : y.accepts["*"]
        ),
        y.headers))
          H.setRequestHeader(d, y.headers[d]);
        if (y.beforeSend && (!1 === y.beforeSend.call(_, H, y) || l))
          return H.abort();
        if (
          ((K = "abort"),
          A.add(y.complete),
          H.done(y.success),
          H.fail(y.error),
          (u = Tn(Zn, y, i, H)))
        ) {
          if (((H.readyState = 1), f && T.trigger("ajaxSend", [H, y]), l))
            return H;
          y.async &&
            0 < y.timeout &&
            (a = w.setTimeout(function () {
              H.abort("timeout");
            }, y.timeout));
          try {
            (l = !1), u.send(R, le);
          } catch (Z) {
            if (l) throw Z;
            le(-1, Z);
          }
        } else le(-1, "No Transport");
        function le(Z, ue, P, ve) {
          var Ve,
            Pe,
            ke,
            Ne,
            Me,
            Ce = ue;
          l ||
            ((l = !0),
            a && w.clearTimeout(a),
            (u = void 0),
            (t = ve || ""),
            (H.readyState = 0 < Z ? 4 : 0),
            (Ve = (200 <= Z && Z < 300) || 304 === Z),
            P &&
              (Ne = (function (we, De, He) {
                for (
                  var gt, me, X, ye, be = we.contents, ge = we.dataTypes;
                  "*" === ge[0];

                )
                  ge.shift(),
                    void 0 === gt &&
                      (gt =
                        we.mimeType || De.getResponseHeader("Content-Type"));
                if (gt)
                  for (me in be)
                    if (be[me] && be[me].test(gt)) {
                      ge.unshift(me);
                      break;
                    }
                if (ge[0] in He) X = ge[0];
                else {
                  for (me in He) {
                    if (!ge[0] || we.converters[me + " " + ge[0]]) {
                      X = me;
                      break;
                    }
                    ye || (ye = me);
                  }
                  X = X || ye;
                }
                if (X) return X !== ge[0] && ge.unshift(X), He[X];
              })(y, H, P)),
            !Ve &&
              -1 < c.inArray("script", y.dataTypes) &&
              c.inArray("json", y.dataTypes) < 0 &&
              (y.converters["text script"] = function () {}),
            (Ne = (function (we, De, He, gt) {
              var me,
                X,
                ye,
                be,
                ge,
                ct = {},
                Nt = we.dataTypes.slice();
              if (Nt[1])
                for (ye in we.converters)
                  ct[ye.toLowerCase()] = we.converters[ye];
              for (X = Nt.shift(); X; )
                if (
                  (we.responseFields[X] && (He[we.responseFields[X]] = De),
                  !ge &&
                    gt &&
                    we.dataFilter &&
                    (De = we.dataFilter(De, we.dataType)),
                  (ge = X),
                  (X = Nt.shift()))
                )
                  if ("*" === X) X = ge;
                  else if ("*" !== ge && ge !== X) {
                    if (!(ye = ct[ge + " " + X] || ct["* " + X]))
                      for (me in ct)
                        if (
                          (be = me.split(" "))[1] === X &&
                          (ye = ct[ge + " " + be[0]] || ct["* " + be[0]])
                        ) {
                          !0 === ye
                            ? (ye = ct[me])
                            : !0 !== ct[me] && ((X = be[0]), Nt.unshift(be[1]));
                          break;
                        }
                    if (!0 !== ye)
                      if (ye && we.throws) De = ye(De);
                      else
                        try {
                          De = ye(De);
                        } catch (Sn) {
                          return {
                            state: "parsererror",
                            error: ye
                              ? Sn
                              : "No conversion from " + ge + " to " + X,
                          };
                        }
                  }
              return { state: "success", data: De };
            })(y, Ne, H, Ve)),
            Ve
              ? (y.ifModified &&
                  ((Me = H.getResponseHeader("Last-Modified")) &&
                    (c.lastModified[e] = Me),
                  (Me = H.getResponseHeader("etag")) && (c.etag[e] = Me)),
                204 === Z || "HEAD" === y.type
                  ? (Ce = "nocontent")
                  : 304 === Z
                  ? (Ce = "notmodified")
                  : ((Ce = Ne.state), (Pe = Ne.data), (Ve = !(ke = Ne.error))))
              : ((ke = Ce), (!Z && Ce) || ((Ce = "error"), Z < 0 && (Z = 0))),
            (H.status = Z),
            (H.statusText = (ue || Ce) + ""),
            Ve ? S.resolveWith(_, [Pe, Ce, H]) : S.rejectWith(_, [H, Ce, ke]),
            H.statusCode(k),
            (k = void 0),
            f &&
              T.trigger(Ve ? "ajaxSuccess" : "ajaxError", [H, y, Ve ? Pe : ke]),
            A.fireWith(_, [H, Ce]),
            f &&
              (T.trigger("ajaxComplete", [H, y]),
              --c.active || c.event.trigger("ajaxStop")));
        }
        return H;
      },
      getJSON: function (n, i, u) {
        return c.get(n, i, u, "json");
      },
      getScript: function (n, i) {
        return c.get(n, void 0, i, "script");
      },
    }),
    c.each(["get", "post"], function (n, i) {
      c[i] = function (u, e, t, r) {
        return (
          ie(e) && ((r = r || t), (t = e), (e = void 0)),
          c.ajax(
            c.extend(
              { url: u, type: i, dataType: r, data: e, success: t },
              c.isPlainObject(u) && u
            )
          )
        );
      };
    }),
    c.ajaxPrefilter(function (n) {
      var i;
      for (i in n.headers)
        "content-type" === i.toLowerCase() &&
          (n.contentType = n.headers[i] || "");
    }),
    (c._evalUrl = function (n, i, u) {
      return c.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          c.globalEval(e, i, u);
        },
      });
    }),
    c.fn.extend({
      wrapAll: function (n) {
        var i;
        return (
          this[0] &&
            (ie(n) && (n = n.call(this[0])),
            (i = c(n, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && i.insertBefore(this[0]),
            i
              .map(function () {
                for (var u = this; u.firstElementChild; )
                  u = u.firstElementChild;
                return u;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return ie(n)
          ? this.each(function (i) {
              c(this).wrapInner(n.call(this, i));
            })
          : this.each(function () {
              var i = c(this),
                u = i.contents();
              u.length ? u.wrapAll(n) : i.append(n);
            });
      },
      wrap: function (n) {
        var i = ie(n);
        return this.each(function (u) {
          c(this).wrapAll(i ? n.call(this, u) : n);
        });
      },
      unwrap: function (n) {
        return (
          this.parent(n)
            .not("body")
            .each(function () {
              c(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (c.expr.pseudos.hidden = function (n) {
      return !c.expr.pseudos.visible(n);
    }),
    (c.expr.pseudos.visible = function (n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    }),
    (c.ajaxSettings.xhr = function () {
      try {
        return new w.XMLHttpRequest();
      } catch (n) {}
    });
  var tr = { 0: 200, 1223: 204 },
    hn = c.ajaxSettings.xhr();
  (ne.cors = !!hn && "withCredentials" in hn),
    (ne.ajax = hn = !!hn),
    c.ajaxTransport(function (n) {
      var i, u;
      if (ne.cors || (hn && !n.crossDomain))
        return {
          send: function (e, t) {
            var r,
              a = n.xhr();
            if (
              (a.open(n.type, n.url, n.async, n.username, n.password),
              n.xhrFields)
            )
              for (r in n.xhrFields) a[r] = n.xhrFields[r];
            for (r in (n.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(n.mimeType),
            n.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              a.setRequestHeader(r, e[r]);
            (i = function (s) {
              return function () {
                i &&
                  ((i =
                    u =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === s
                    ? a.abort()
                    : "error" === s
                    ? "number" != typeof a.status
                      ? t(0, "error")
                      : t(a.status, a.statusText)
                    : t(
                        tr[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = i()),
              (u = a.onerror = a.ontimeout = i("error")),
              void 0 !== a.onabort
                ? (a.onabort = u)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      w.setTimeout(function () {
                        i && u();
                      });
                  }),
              (i = i("abort"));
            try {
              a.send((n.hasContent && n.data) || null);
            } catch (s) {
              if (i) throw s;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    c.ajaxPrefilter(function (n) {
      n.crossDomain && (n.contents.script = !1);
    }),
    c.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (n) {
          return c.globalEval(n), n;
        },
      },
    }),
    c.ajaxPrefilter("script", function (n) {
      void 0 === n.cache && (n.cache = !1), n.crossDomain && (n.type = "GET");
    }),
    c.ajaxTransport("script", function (n) {
      var i, u;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (i = c("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (u = function (r) {
                  i.remove(),
                    (u = null),
                    r && t("error" === r.type ? 404 : 200, r.type);
                })
              )),
              ee.head.appendChild(i[0]);
          },
          abort: function () {
            u && u();
          },
        };
    });
  var nr,
    rr = [],
    Dn = /(=)\?(?=&|$)|\?\?/;
  c.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var n = rr.pop() || c.expando + "_" + Gn.guid++;
      return (this[n] = !0), n;
    },
  }),
    c.ajaxPrefilter("json jsonp", function (n, i, u) {
      var e,
        t,
        r,
        a =
          !1 !== n.jsonp &&
          (Dn.test(n.url)
            ? "url"
            : "string" == typeof n.data &&
              0 ===
                (n.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Dn.test(n.data) &&
              "data");
      if (a || "jsonp" === n.dataTypes[0])
        return (
          (e = n.jsonpCallback =
            ie(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback),
          a
            ? (n[a] = n[a].replace(Dn, "$1" + e))
            : !1 !== n.jsonp &&
              (n.url += (Nn.test(n.url) ? "&" : "?") + n.jsonp + "=" + e),
          (n.converters["script json"] = function () {
            return r || c.error(e + " was not called"), r[0];
          }),
          (n.dataTypes[0] = "json"),
          (t = w[e]),
          (w[e] = function () {
            r = arguments;
          }),
          u.always(function () {
            void 0 === t ? c(w).removeProp(e) : (w[e] = t),
              n[e] && ((n.jsonpCallback = i.jsonpCallback), rr.push(e)),
              r && ie(t) && t(r[0]),
              (r = t = void 0);
          }),
          "script"
        );
    }),
    (ne.createHTMLDocument =
      (((nr = ee.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === nr.childNodes.length)),
    (c.parseHTML = function (n, i, u) {
      return "string" != typeof n
        ? []
        : ("boolean" == typeof i && ((u = i), (i = !1)),
          i ||
            (ne.createHTMLDocument
              ? (((e = (i =
                  ee.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = ee.location.href),
                i.head.appendChild(e))
              : (i = ee)),
          (r = !u && []),
          (t = Ft.exec(n))
            ? [i.createElement(t[1])]
            : ((t = Y([n], i, r)),
              r && r.length && c(r).remove(),
              c.merge([], t.childNodes)));
      var e, t, r;
    }),
    (c.fn.load = function (n, i, u) {
      var e,
        t,
        r,
        a = this,
        s = n.indexOf(" ");
      return (
        -1 < s && ((e = Ue(n.slice(s))), (n = n.slice(0, s))),
        ie(i)
          ? ((u = i), (i = void 0))
          : i && "object" == typeof i && (t = "POST"),
        0 < a.length &&
          c
            .ajax({ url: n, type: t || "GET", dataType: "html", data: i })
            .done(function (l) {
              (r = arguments),
                a.html(e ? c("<div>").append(c.parseHTML(l)).find(e) : l);
            })
            .always(
              u &&
                function (l, f) {
                  a.each(function () {
                    u.apply(this, r || [l.responseText, f, l]);
                  });
                }
            ),
        this
      );
    }),
    (c.expr.pseudos.animated = function (n) {
      return c.grep(c.timers, function (i) {
        return n === i.elem;
      }).length;
    }),
    (c.offset = {
      setOffset: function (n, i, u) {
        var e,
          t,
          r,
          a,
          s,
          l,
          f = c.css(n, "position"),
          d = c(n),
          v = {};
        "static" === f && (n.style.position = "relative"),
          (s = d.offset()),
          (r = c.css(n, "top")),
          (l = c.css(n, "left")),
          ("absolute" === f || "fixed" === f) && -1 < (r + l).indexOf("auto")
            ? ((a = (e = d.position()).top), (t = e.left))
            : ((a = parseFloat(r) || 0), (t = parseFloat(l) || 0)),
          ie(i) && (i = i.call(n, u, c.extend({}, s))),
          null != i.top && (v.top = i.top - s.top + a),
          null != i.left && (v.left = i.left - s.left + t),
          "using" in i ? i.using.call(n, v) : d.css(v);
      },
    }),
    c.fn.extend({
      offset: function (n) {
        if (arguments.length)
          return void 0 === n
            ? this
            : this.each(function (t) {
                c.offset.setOffset(this, n, t);
              });
        var i,
          u,
          e = this[0];
        return e
          ? e.getClientRects().length
            ? {
                top:
                  (i = e.getBoundingClientRect()).top +
                  (u = e.ownerDocument.defaultView).pageYOffset,
                left: i.left + u.pageXOffset,
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var n,
            i,
            u,
            e = this[0],
            t = { top: 0, left: 0 };
          if ("fixed" === c.css(e, "position")) i = e.getBoundingClientRect();
          else {
            for (
              i = this.offset(),
                u = e.ownerDocument,
                n = e.offsetParent || u.documentElement;
              n &&
              (n === u.body || n === u.documentElement) &&
              "static" === c.css(n, "position");

            )
              n = n.parentNode;
            n &&
              n !== e &&
              1 === n.nodeType &&
              (((t = c(n).offset()).top += c.css(n, "borderTopWidth", !0)),
              (t.left += c.css(n, "borderLeftWidth", !0)));
          }
          return {
            top: i.top - t.top - c.css(e, "marginTop", !0),
            left: i.left - t.left - c.css(e, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var n = this.offsetParent;
            n && "static" === c.css(n, "position");

          )
            n = n.offsetParent;
          return n || it;
        });
      },
    }),
    c.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (n, i) {
        var u = "pageYOffset" === i;
        c.fn[n] = function (e) {
          return xe(
            this,
            function (t, r, a) {
              var s;
              if (
                (Ae(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView),
                void 0 === a)
              )
                return s ? s[i] : t[r];
              s
                ? s.scrollTo(u ? s.pageXOffset : a, u ? a : s.pageYOffset)
                : (t[r] = a);
            },
            n,
            e,
            arguments.length
          );
        };
      }
    ),
    c.each(["top", "left"], function (n, i) {
      c.cssHooks[i] = Pt(ne.pixelPosition, function (u, e) {
        if (e)
          return (e = fn(u, i)), On.test(e) ? c(u).position()[i] + "px" : e;
      });
    }),
    c.each({ Height: "height", Width: "width" }, function (n, i) {
      c.each(
        { padding: "inner" + n, content: i, "": "outer" + n },
        function (u, e) {
          c.fn[e] = function (t, r) {
            var a = arguments.length && (u || "boolean" != typeof t),
              s = u || (!0 === t || !0 === r ? "margin" : "border");
            return xe(
              this,
              function (l, f, d) {
                var v;
                return Ae(l)
                  ? 0 === e.indexOf("outer")
                    ? l["inner" + n]
                    : l.document.documentElement["client" + n]
                  : 9 === l.nodeType
                  ? ((v = l.documentElement),
                    Math.max(
                      l.body["scroll" + n],
                      v["scroll" + n],
                      l.body["offset" + n],
                      v["offset" + n],
                      v["client" + n]
                    ))
                  : void 0 === d
                  ? c.css(l, f, s)
                  : c.style(l, f, d, s);
              },
              i,
              a ? t : void 0,
              a
            );
          };
        }
      );
    }),
    c.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (n, i) {
        c.fn[i] = function (u) {
          return this.on(i, u);
        };
      }
    ),
    c.fn.extend({
      bind: function (n, i, u) {
        return this.on(n, null, i, u);
      },
      unbind: function (n, i) {
        return this.off(n, null, i);
      },
      delegate: function (n, i, u, e) {
        return this.on(i, n, u, e);
      },
      undelegate: function (n, i, u) {
        return 1 === arguments.length
          ? this.off(n, "**")
          : this.off(i, n || "**", u);
      },
      hover: function (n, i) {
        return this.on("mouseenter", n).on("mouseleave", i || n);
      },
    }),
    c.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (n, i) {
        c.fn[i] = function (u, e) {
          return 0 < arguments.length
            ? this.on(i, null, u, e)
            : this.trigger(i);
        };
      }
    );
  var ar = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (c.proxy = function (n, i) {
    var u, e, t;
    if (("string" == typeof i && ((u = n[i]), (i = n), (n = u)), ie(n)))
      return (
        (e = m.call(arguments, 2)),
        ((t = function () {
          return n.apply(i || this, e.concat(m.call(arguments)));
        }).guid = n.guid =
          n.guid || c.guid++),
        t
      );
  }),
    (c.holdReady = function (n) {
      n ? c.readyWait++ : c.ready(!0);
    }),
    (c.isArray = Array.isArray),
    (c.parseJSON = JSON.parse),
    (c.nodeName = Ee),
    (c.isFunction = ie),
    (c.isWindow = Ae),
    (c.camelCase = Qe),
    (c.type = _t),
    (c.now = Date.now),
    (c.isNumeric = function (n) {
      var i = c.type(n);
      return ("number" === i || "string" === i) && !isNaN(n - parseFloat(n));
    }),
    (c.trim = function (n) {
      return null == n ? "" : (n + "").replace(ar, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return c;
      });
  var mr = w.jQuery,
    vr = w.$;
  return (
    (c.noConflict = function (n) {
      return w.$ === c && (w.$ = vr), n && w.jQuery === c && (w.jQuery = mr), c;
    }),
    void 0 === de && (w.jQuery = w.$ = c),
    c
  );
}),
  (function (w, de) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = de())
      : "function" == typeof define && define.amd
      ? define(de)
      : (w.Popper = de());
  })(this, function () {
    "use strict";
    function w(p) {
      return p && "[object Function]" === {}.toString.call(p);
    }
    function de(p, g) {
      if (1 !== p.nodeType) return [];
      var h = p.ownerDocument.defaultView.getComputedStyle(p, null);
      return g ? h[g] : h;
    }
    function pe(p) {
      return "HTML" === p.nodeName ? p : p.parentNode || p.host;
    }
    function I(p) {
      if (!p) return document.body;
      switch (p.nodeName) {
        case "HTML":
        case "BODY":
          return p.ownerDocument.body;
        case "#document":
          return p.body;
      }
      var g = de(p);
      return /(auto|scroll|overlay)/.test(
        g.overflow + g.overflowY + g.overflowX
      )
        ? p
        : I(pe(p));
    }
    function m(p) {
      return p && p.referenceNode ? p.referenceNode : p;
    }
    function Te(p) {
      return 11 === p ? je : 10 === p ? Yt : je || Yt;
    }
    function ae(p) {
      if (!p) return document.documentElement;
      for (
        var g = Te(10) ? document.body : null, o = p.offsetParent || null;
        o === g && p.nextElementSibling;

      )
        o = (p = p.nextElementSibling).offsetParent;
      var h = o && o.nodeName;
      return h && "BODY" !== h && "HTML" !== h
        ? -1 !== ["TH", "TD", "TABLE"].indexOf(o.nodeName) &&
          "static" === de(o, "position")
          ? ae(o)
          : o
        : p
        ? p.ownerDocument.documentElement
        : document.documentElement;
    }
    function te(p) {
      return null === p.parentNode ? p : te(p.parentNode);
    }
    function Lt(p, g) {
      if (!(p && p.nodeType && g && g.nodeType))
        return document.documentElement;
      var o = p.compareDocumentPosition(g) & Node.DOCUMENT_POSITION_FOLLOWING,
        h = o ? p : g,
        b = o ? g : p,
        C = document.createRange();
      C.setStart(h, 0), C.setEnd(b, 0);
      var D = C.commonAncestorContainer;
      if ((p !== D && g !== D) || h.contains(b))
        return (function (p) {
          var g = p.nodeName;
          return (
            "BODY" !== g && ("HTML" === g || ae(p.firstElementChild) === p)
          );
        })(D)
          ? D
          : ae(D);
      var N = te(p);
      return N.host ? Lt(N.host, g) : Lt(p, te(g).host);
    }
    function W(p) {
      var g =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "top",
        o = "top" === g ? "scrollTop" : "scrollLeft",
        h = p.nodeName;
      if ("BODY" === h || "HTML" === h) {
        var b = p.ownerDocument.documentElement,
          C = p.ownerDocument.scrollingElement || b;
        return C[o];
      }
      return p[o];
    }
    function bt(p, g) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        h = W(g, "top"),
        b = W(g, "left"),
        C = o ? -1 : 1;
      return (
        (p.top += h * C),
        (p.bottom += h * C),
        (p.left += b * C),
        (p.right += b * C),
        p
      );
    }
    function yn(p, g) {
      var o = "x" === g ? "Left" : "Top",
        h = "Left" == o ? "Right" : "Bottom";
      return (
        parseFloat(p["border" + o + "Width"]) +
        parseFloat(p["border" + h + "Width"])
      );
    }
    function ne(p, g, o, h) {
      return Ke(
        g["offset" + p],
        g["scroll" + p],
        o["client" + p],
        o["offset" + p],
        o["scroll" + p],
        Te(10)
          ? parseInt(o["offset" + p]) +
              parseInt(h["margin" + ("Height" === p ? "Top" : "Left")]) +
              parseInt(h["margin" + ("Height" === p ? "Bottom" : "Right")])
          : 0
      );
    }
    function ie(p) {
      var g = p.body,
        o = p.documentElement,
        h = Te(10) && getComputedStyle(o);
      return { height: ne("Height", g, o, h), width: ne("Width", g, o, h) };
    }
    function Ae(p) {
      return Be({}, p, { right: p.left + p.width, bottom: p.top + p.height });
    }
    function ee(p) {
      var g = {};
      try {
        if (Te(10)) {
          g = p.getBoundingClientRect();
          var o = W(p, "top"),
            h = W(p, "left");
          (g.top += o), (g.left += h), (g.bottom += o), (g.right += h);
        } else g = p.getBoundingClientRect();
      } catch (U) {}
      var b = {
          left: g.left,
          top: g.top,
          width: g.right - g.left,
          height: g.bottom - g.top,
        },
        C = "HTML" === p.nodeName ? ie(p.ownerDocument) : {},
        F = p.offsetWidth - (C.width || p.clientWidth || b.width),
        M = p.offsetHeight - (C.height || p.clientHeight || b.height);
      if (F || M) {
        var B = de(p);
        (F -= yn(B, "x")), (M -= yn(B, "y")), (b.width -= F), (b.height -= M);
      }
      return Ae(b);
    }
    function Kt(p, g) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        h = Te(10),
        b = "HTML" === g.nodeName,
        C = ee(p),
        D = ee(g),
        N = I(p),
        F = de(g),
        M = parseFloat(F.borderTopWidth),
        B = parseFloat(F.borderLeftWidth);
      o && b && ((D.top = Ke(D.top, 0)), (D.left = Ke(D.left, 0)));
      var U = Ae({
        top: C.top - D.top - M,
        left: C.left - D.left - B,
        width: C.width,
        height: C.height,
      });
      if (((U.marginTop = 0), (U.marginLeft = 0), !h && b)) {
        var Y = parseFloat(F.marginTop),
          re = parseFloat(F.marginLeft);
        (U.top -= M - Y),
          (U.bottom -= M - Y),
          (U.left -= B - re),
          (U.right -= B - re),
          (U.marginTop = Y),
          (U.marginLeft = re);
      }
      return (
        (h && !o ? g.contains(N) : g === N && "BODY" !== N.nodeName) &&
          (U = bt(U, g)),
        U
      );
    }
    function Zt(p) {
      var g = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = p.ownerDocument.documentElement,
        h = Kt(p, o),
        b = Ke(o.clientWidth, window.innerWidth || 0),
        C = Ke(o.clientHeight, window.innerHeight || 0),
        D = g ? 0 : W(o),
        N = g ? 0 : W(o, "left"),
        F = {
          top: D - h.top + h.marginTop,
          left: N - h.left + h.marginLeft,
          width: b,
          height: C,
        };
      return Ae(F);
    }
    function _t(p) {
      var g = p.nodeName;
      if ("BODY" === g || "HTML" === g) return !1;
      if ("fixed" === de(p, "position")) return !0;
      var o = pe(p);
      return !!o && _t(o);
    }
    function $t(p) {
      if (!p || !p.parentElement || Te()) return document.documentElement;
      for (var g = p.parentElement; g && "none" === de(g, "transform"); )
        g = g.parentElement;
      return g || document.documentElement;
    }
    function Xe(p, g, o, h) {
      var b = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        C = { top: 0, left: 0 },
        D = b ? $t(p) : Lt(p, m(g));
      if ("viewport" === h) C = Zt(D, b);
      else {
        var N;
        "scrollParent" === h
          ? "BODY" === (N = I(pe(g))).nodeName &&
            (N = p.ownerDocument.documentElement)
          : (N = "window" === h ? p.ownerDocument.documentElement : h);
        var F = Kt(N, D, b);
        if ("HTML" !== N.nodeName || _t(D)) C = F;
        else {
          var M = ie(p.ownerDocument),
            B = M.height,
            U = M.width;
          (C.top += F.top - F.marginTop),
            (C.bottom = B + F.top),
            (C.left += F.left - F.marginLeft),
            (C.right = U + F.left);
        }
      }
      var Y = "number" == typeof (o = o || 0);
      return (
        (C.left += Y ? o : o.left || 0),
        (C.top += Y ? o : o.top || 0),
        (C.right -= Y ? o : o.right || 0),
        (C.bottom -= Y ? o : o.bottom || 0),
        C
      );
    }
    function c(p) {
      return p.width * p.height;
    }
    function Ge(p, g, o, h, b) {
      var C =
        5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === p.indexOf("auto")) return p;
      var D = Xe(o, h, C, b),
        N = {
          top: { width: D.width, height: g.top - D.top },
          right: { width: D.right - g.right, height: D.height },
          bottom: { width: D.width, height: D.bottom - g.bottom },
          left: { width: g.left - D.left, height: D.height },
        },
        F = Object.keys(N)
          .map(function (Y) {
            return Be({ key: Y }, N[Y], { area: c(N[Y]) });
          })
          .sort(function (Y, re) {
            return re.area - Y.area;
          }),
        M = F.filter(function (Y) {
          return Y.width >= o.clientWidth && Y.height >= o.clientHeight;
        }),
        B = 0 < M.length ? M[0].key : F[0].key,
        U = p.split("-")[1];
      return B + (U ? "-" + U : "");
    }
    function Ee(p, g, o) {
      var h =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        b = h ? $t(g) : Lt(g, m(o));
      return Kt(o, b, h);
    }
    function en(p) {
      var o = p.ownerDocument.defaultView.getComputedStyle(p),
        h = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
        b = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0);
      return { width: p.offsetWidth + b, height: p.offsetHeight + h };
    }
    function tn(p) {
      var g = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return p.replace(/left|right|bottom|top/g, function (o) {
        return g[o];
      });
    }
    function wt(p, g, o) {
      o = o.split("-")[0];
      var h = en(p),
        b = { width: h.width, height: h.height },
        C = -1 !== ["right", "left"].indexOf(o),
        D = C ? "top" : "left",
        N = C ? "left" : "top",
        F = C ? "height" : "width",
        M = C ? "width" : "height";
      return (
        (b[D] = g[D] + g[F] / 2 - h[F] / 2),
        (b[N] = o === N ? g[N] - h[M] : g[tn(N)]),
        b
      );
    }
    function ce(p, g) {
      return Array.prototype.find ? p.find(g) : p.filter(g)[0];
    }
    function qt(p, g, o) {
      var h =
        void 0 === o
          ? p
          : p.slice(
              0,
              (function (p, g, o) {
                if (Array.prototype.findIndex)
                  return p.findIndex(function (b) {
                    return b[g] === o;
                  });
                var h = ce(p, function (b) {
                  return b[g] === o;
                });
                return p.indexOf(h);
              })(p, "name", o)
            );
      return (
        h.forEach(function (b) {
          b.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var C = b.function || b.fn;
          b.enabled &&
            w(C) &&
            ((g.offsets.popper = Ae(g.offsets.popper)),
            (g.offsets.reference = Ae(g.offsets.reference)),
            (g = C(g, b)));
        }),
        g
      );
    }
    function Ct() {
      if (!this.state.isDestroyed) {
        var p = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (p.offsets.reference = Ee(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (p.placement = Ge(
            this.options.placement,
            p.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (p.originalPlacement = p.placement),
          (p.positionFixed = this.options.positionFixed),
          (p.offsets.popper = wt(
            this.popper,
            p.offsets.reference,
            p.placement
          )),
          (p.offsets.popper.position = this.options.positionFixed
            ? "fixed"
            : "absolute"),
          (p = qt(this.modifiers, p)),
          this.state.isCreated
            ? this.options.onUpdate(p)
            : ((this.state.isCreated = !0), this.options.onCreate(p));
      }
    }
    function rt(p, g) {
      return p.some(function (o) {
        return o.enabled && o.name === g;
      });
    }
    function Le(p) {
      for (
        var g = [!1, "ms", "Webkit", "Moz", "O"],
          o = p.charAt(0).toUpperCase() + p.slice(1),
          h = 0;
        h < g.length;
        h++
      ) {
        var b = g[h],
          C = b ? "" + b + o : p;
        if (void 0 !== document.body.style[C]) return C;
      }
      return null;
    }
    function jt() {
      return (
        (this.state.isDestroyed = !0),
        rt(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style.left = ""),
          (this.popper.style.right = ""),
          (this.popper.style.bottom = ""),
          (this.popper.style.willChange = ""),
          (this.popper.style[Le("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function Wt(p) {
      var g = p.ownerDocument;
      return g ? g.defaultView : window;
    }
    function nn(p, g, o, h) {
      var b = "BODY" === p.nodeName,
        C = b ? p.ownerDocument.defaultView : p;
      C.addEventListener(g, o, { passive: !0 }),
        b || nn(I(C.parentNode), g, o, h),
        h.push(C);
    }
    function Ft(p, g, o, h) {
      (o.updateBound = h),
        Wt(p).addEventListener("resize", o.updateBound, { passive: !0 });
      var b = I(p);
      return (
        nn(b, "scroll", o.updateBound, o.scrollParents),
        (o.scrollElement = b),
        (o.eventsEnabled = !0),
        o
      );
    }
    function Vt() {
      this.state.eventsEnabled ||
        (this.state = Ft(this.reference, 0, this.state, this.scheduleUpdate));
    }
    function Qt() {
      var g;
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state =
          ((g = this.state),
          Wt(this.reference).removeEventListener("resize", g.updateBound),
          g.scrollParents.forEach(function (o) {
            o.removeEventListener("scroll", g.updateBound);
          }),
          (g.updateBound = null),
          (g.scrollParents = []),
          (g.scrollElement = null),
          (g.eventsEnabled = !1),
          g)));
    }
    function Ot(p) {
      return "" !== p && !isNaN(parseFloat(p)) && isFinite(p);
    }
    function kt(p, g) {
      Object.keys(g).forEach(function (o) {
        var h = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
          Ot(g[o]) &&
          (h = "px"),
          (p.style[o] = g[o] + h);
      });
    }
    function Tt(p, g, o) {
      var h = ce(p, function (D) {
          return D.name === g;
        }),
        b =
          !!h &&
          p.some(function (D) {
            return D.name === o && D.enabled && D.order < h.order;
          });
      if (!b) {
        var C = "`" + g + "`";
        console.warn(
          "`" +
            o +
            "` modifier is required by " +
            C +
            " modifier in order to work, be sure to include it before " +
            C +
            "!"
        );
      }
      return b;
    }
    function dt(p) {
      var g = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = Ye.indexOf(p),
        h = Ye.slice(o + 1).concat(Ye.slice(0, o));
      return g ? h.reverse() : h;
    }
    var xe = Math.min,
      xt = Math.floor,
      Bt = Math.round,
      Ke = Math.max,
      Qe =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        "undefined" != typeof navigator,
      ht = (function () {
        for (
          var p = ["Edge", "Trident", "Firefox"], g = 0;
          g < p.length;
          g += 1
        )
          if (Qe && 0 <= navigator.userAgent.indexOf(p[g])) return 1;
        return 0;
      })(),
      z =
        Qe && window.Promise
          ? function (p) {
              var g = !1;
              return function () {
                g ||
                  ((g = !0),
                  window.Promise.resolve().then(function () {
                    (g = !1), p();
                  }));
              };
            }
          : function (p) {
              var g = !1;
              return function () {
                g ||
                  ((g = !0),
                  setTimeout(function () {
                    (g = !1), p();
                  }, ht));
              };
            },
      je = Qe && !(!window.MSInputMethodContext || !document.documentMode),
      Yt = Qe && /MSIE 10/.test(navigator.userAgent),
      Ut = function (p, g) {
        if (!(p instanceof g))
          throw new TypeError("Cannot call a class as a function");
      },
      on = (function () {
        function p(g, o) {
          for (var h, b = 0; b < o.length; b++)
            ((h = o[b]).enumerable = h.enumerable || !1),
              (h.configurable = !0),
              "value" in h && (h.writable = !0),
              Object.defineProperty(g, h.key, h);
        }
        return function (g, o, h) {
          return o && p(g.prototype, o), h && p(g, h), g;
        };
      })(),
      tt = function (p, g, o) {
        return (
          g in p
            ? Object.defineProperty(p, g, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (p[g] = o),
          p
        );
      },
      Be =
        Object.assign ||
        function (p) {
          for (var g, o = 1; o < arguments.length; o++)
            for (var h in (g = arguments[o]))
              Object.prototype.hasOwnProperty.call(g, h) && (p[h] = g[h]);
          return p;
        },
      Ze = Qe && /Firefox/i.test(navigator.userAgent),
      it = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      Ye = it.slice(3),
      ut = (function () {
        function p(g, o) {
          var h = this,
            b =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          Ut(this, p),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(h.update);
            }),
            (this.update = z(this.update.bind(this))),
            (this.options = Be({}, p.Defaults, b)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = g && g.jquery ? g[0] : g),
            (this.popper = o && o.jquery ? o[0] : o),
            (this.options.modifiers = {}),
            Object.keys(Be({}, p.Defaults.modifiers, b.modifiers)).forEach(
              function (D) {
                h.options.modifiers[D] = Be(
                  {},
                  p.Defaults.modifiers[D] || {},
                  b.modifiers ? b.modifiers[D] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (D) {
                return Be({ name: D }, h.options.modifiers[D]);
              })
              .sort(function (D, N) {
                return D.order - N.order;
              })),
            this.modifiers.forEach(function (D) {
              D.enabled &&
                w(D.onLoad) &&
                D.onLoad(h.reference, h.popper, h.options, D, h.state);
            }),
            this.update();
          var C = this.options.eventsEnabled;
          C && this.enableEventListeners(), (this.state.eventsEnabled = C);
        }
        return (
          on(p, [
            {
              key: "update",
              value: function () {
                return Ct.call(this);
              },
            },
            {
              key: "destroy",
              value: function () {
                return jt.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return Vt.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return Qt.call(this);
              },
            },
          ]),
          p
        );
      })();
    return (
      (ut.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (ut.placements = it),
      (ut.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (p) {
              var g = p.placement,
                o = g.split("-")[0],
                h = g.split("-")[1];
              if (h) {
                var b = p.offsets,
                  C = b.reference,
                  D = b.popper,
                  N = -1 !== ["bottom", "top"].indexOf(o),
                  F = N ? "left" : "top",
                  M = N ? "width" : "height",
                  B = {
                    start: tt({}, F, C[F]),
                    end: tt({}, F, C[F] + C[M] - D[M]),
                  };
                p.offsets.popper = Be({}, D, B[h]);
              }
              return p;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (p, g) {
              var o,
                h = g.offset,
                C = p.offsets,
                D = C.popper,
                N = C.reference,
                F = p.placement.split("-")[0];
              return (
                (o = Ot(+h)
                  ? [+h, 0]
                  : (function (p, g, o, h) {
                      var b = [0, 0],
                        C = -1 !== ["right", "left"].indexOf(h),
                        D = p.split(/(\+|\-)/).map(function (B) {
                          return B.trim();
                        }),
                        N = D.indexOf(
                          ce(D, function (B) {
                            return -1 !== B.search(/,|\s/);
                          })
                        );
                      D[N] &&
                        -1 === D[N].indexOf(",") &&
                        console.warn(
                          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
                        );
                      var F = /\s*,\s*|\s+/,
                        M =
                          -1 === N
                            ? [D]
                            : [
                                D.slice(0, N).concat([D[N].split(F)[0]]),
                                [D[N].split(F)[1]].concat(D.slice(N + 1)),
                              ];
                      return (
                        (M = M.map(function (B, U) {
                          var Y = (1 === U ? !C : C) ? "height" : "width",
                            re = !1;
                          return B.reduce(function (oe, Oe) {
                            return "" === oe[oe.length - 1] &&
                              -1 !== ["+", "-"].indexOf(Oe)
                              ? ((oe[oe.length - 1] = Oe), (re = !0), oe)
                              : re
                              ? ((oe[oe.length - 1] += Oe), (re = !1), oe)
                              : oe.concat(Oe);
                          }, []).map(function (oe) {
                            return (function (p, g, o, h) {
                              var b = p.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                C = +b[1],
                                D = b[2];
                              return C
                                ? 0 === D.indexOf("%")
                                  ? (Ae("%p" === D ? o : h)[g] / 100) * C
                                  : "vh" === D || "vw" === D
                                  ? (("vh" === D
                                      ? Ke(
                                          document.documentElement.clientHeight,
                                          window.innerHeight || 0
                                        )
                                      : Ke(
                                          document.documentElement.clientWidth,
                                          window.innerWidth || 0
                                        )) /
                                      100) *
                                    C
                                  : C
                                : p;
                            })(oe, Y, g, o);
                          });
                        })),
                        M.forEach(function (B, U) {
                          B.forEach(function (Y, re) {
                            Ot(Y) && (b[U] += Y * ("-" === B[re - 1] ? -1 : 1));
                          });
                        }),
                        b
                      );
                    })(h, D, N, F)),
                "left" === F
                  ? ((D.top += o[0]), (D.left -= o[1]))
                  : "right" === F
                  ? ((D.top += o[0]), (D.left += o[1]))
                  : "top" === F
                  ? ((D.left += o[0]), (D.top -= o[1]))
                  : "bottom" === F && ((D.left += o[0]), (D.top += o[1])),
                (p.popper = D),
                p
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (p, g) {
              var o = g.boundariesElement || ae(p.instance.popper);
              p.instance.reference === o && (o = ae(o));
              var h = Le("transform"),
                b = p.instance.popper.style,
                C = b.top,
                D = b.left,
                N = b[h];
              (b.top = ""), (b.left = ""), (b[h] = "");
              var F = Xe(
                p.instance.popper,
                p.instance.reference,
                g.padding,
                o,
                p.positionFixed
              );
              (b.top = C), (b.left = D), (b[h] = N), (g.boundaries = F);
              var B = p.offsets.popper,
                U = {
                  primary: function (Y) {
                    var re = B[Y];
                    return (
                      B[Y] < F[Y] &&
                        !g.escapeWithReference &&
                        (re = Ke(B[Y], F[Y])),
                      tt({}, Y, re)
                    );
                  },
                  secondary: function (Y) {
                    var re = "right" === Y ? "left" : "top",
                      oe = B[re];
                    return (
                      B[Y] > F[Y] &&
                        !g.escapeWithReference &&
                        (oe = xe(
                          B[re],
                          F[Y] - ("right" === Y ? B.width : B.height)
                        )),
                      tt({}, re, oe)
                    );
                  },
                };
              return (
                g.priority.forEach(function (Y) {
                  var re =
                    -1 === ["left", "top"].indexOf(Y) ? "secondary" : "primary";
                  B = Be({}, B, U[re](Y));
                }),
                (p.offsets.popper = B),
                p
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (p) {
              var g = p.offsets,
                o = g.popper,
                h = g.reference,
                b = p.placement.split("-")[0],
                C = xt,
                D = -1 !== ["top", "bottom"].indexOf(b),
                N = D ? "right" : "bottom",
                F = D ? "left" : "top",
                M = D ? "width" : "height";
              return (
                o[N] < C(h[F]) && (p.offsets.popper[F] = C(h[F]) - o[M]),
                o[F] > C(h[N]) && (p.offsets.popper[F] = C(h[N])),
                p
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (p, g) {
              var o;
              if (!Tt(p.instance.modifiers, "arrow", "keepTogether")) return p;
              var h = g.element;
              if ("string" == typeof h) {
                if (!(h = p.instance.popper.querySelector(h))) return p;
              } else if (!p.instance.popper.contains(h))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  p
                );
              var b = p.placement.split("-")[0],
                C = p.offsets,
                D = C.popper,
                N = C.reference,
                F = -1 !== ["left", "right"].indexOf(b),
                M = F ? "height" : "width",
                B = F ? "Top" : "Left",
                U = B.toLowerCase(),
                Y = F ? "left" : "top",
                re = F ? "bottom" : "right",
                oe = en(h)[M];
              N[re] - oe < D[U] && (p.offsets.popper[U] -= D[U] - (N[re] - oe)),
                N[U] + oe > D[re] && (p.offsets.popper[U] += N[U] + oe - D[re]),
                (p.offsets.popper = Ae(p.offsets.popper));
              var Oe = N[U] + N[M] / 2 - oe / 2,
                ot = de(p.instance.popper),
                ft = parseFloat(ot["margin" + B]),
                Je = parseFloat(ot["border" + B + "Width"]),
                Dt = Oe - p.offsets.popper[U] - ft - Je;
              return (
                (Dt = Ke(xe(D[M] - oe, Dt), 0)),
                (p.arrowElement = h),
                (p.offsets.arrow = (tt((o = {}), U, Bt(Dt)), tt(o, Y, ""), o)),
                p
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (p, g) {
              if (
                rt(p.instance.modifiers, "inner") ||
                (p.flipped && p.placement === p.originalPlacement)
              )
                return p;
              var o = Xe(
                  p.instance.popper,
                  p.instance.reference,
                  g.padding,
                  g.boundariesElement,
                  p.positionFixed
                ),
                h = p.placement.split("-")[0],
                b = tn(h),
                C = p.placement.split("-")[1] || "",
                D = [];
              switch (g.behavior) {
                case "flip":
                  D = [h, b];
                  break;
                case "clockwise":
                  D = dt(h);
                  break;
                case "counterclockwise":
                  D = dt(h, !0);
                  break;
                default:
                  D = g.behavior;
              }
              return (
                D.forEach(function (N, F) {
                  if (h !== N || D.length === F + 1) return p;
                  (h = p.placement.split("-")[0]), (b = tn(h));
                  var M = p.offsets.popper,
                    B = p.offsets.reference,
                    U = xt,
                    Y =
                      ("left" === h && U(M.right) > U(B.left)) ||
                      ("right" === h && U(M.left) < U(B.right)) ||
                      ("top" === h && U(M.bottom) > U(B.top)) ||
                      ("bottom" === h && U(M.top) < U(B.bottom)),
                    re = U(M.left) < U(o.left),
                    oe = U(M.right) > U(o.right),
                    Oe = U(M.top) < U(o.top),
                    ot = U(M.bottom) > U(o.bottom),
                    ft =
                      ("left" === h && re) ||
                      ("right" === h && oe) ||
                      ("top" === h && Oe) ||
                      ("bottom" === h && ot),
                    Je = -1 !== ["top", "bottom"].indexOf(h),
                    sn =
                      (!!g.flipVariations &&
                        ((Je && "start" === C && re) ||
                          (Je && "end" === C && oe) ||
                          (!Je && "start" === C && Oe) ||
                          (!Je && "end" === C && ot))) ||
                      (!!g.flipVariationsByContent &&
                        ((Je && "start" === C && oe) ||
                          (Je && "end" === C && re) ||
                          (!Je && "start" === C && ot) ||
                          (!Je && "end" === C && Oe)));
                  (Y || ft || sn) &&
                    ((p.flipped = !0),
                    (Y || ft) && (h = D[F + 1]),
                    sn &&
                      (C = (function (p) {
                        return "end" === p
                          ? "start"
                          : "start" === p
                          ? "end"
                          : p;
                      })(C)),
                    (p.placement = h + (C ? "-" + C : "")),
                    (p.offsets.popper = Be(
                      {},
                      p.offsets.popper,
                      wt(p.instance.popper, p.offsets.reference, p.placement)
                    )),
                    (p = qt(p.instance.modifiers, p, "flip")));
                }),
                p
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (p) {
              var g = p.placement,
                o = g.split("-")[0],
                h = p.offsets,
                b = h.popper,
                C = h.reference,
                D = -1 !== ["left", "right"].indexOf(o),
                N = -1 === ["top", "left"].indexOf(o);
              return (
                (b[D ? "left" : "top"] =
                  C[o] - (N ? b[D ? "width" : "height"] : 0)),
                (p.placement = tn(g)),
                (p.offsets.popper = Ae(b)),
                p
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (p) {
              if (!Tt(p.instance.modifiers, "hide", "preventOverflow"))
                return p;
              var g = p.offsets.reference,
                o = ce(p.instance.modifiers, function (h) {
                  return "preventOverflow" === h.name;
                }).boundaries;
              if (
                g.bottom < o.top ||
                g.left > o.right ||
                g.top > o.bottom ||
                g.right < o.left
              ) {
                if (!0 === p.hide) return p;
                (p.hide = !0), (p.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === p.hide) return p;
                (p.hide = !1), (p.attributes["x-out-of-boundaries"] = !1);
              }
              return p;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (p, g) {
              var o = g.x,
                h = g.y,
                b = p.offsets.popper,
                C = ce(p.instance.modifiers, function (Dt) {
                  return "applyStyle" === Dt.name;
                }).gpuAcceleration;
              void 0 !== C &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var D,
                N,
                F = void 0 === C ? g.gpuAcceleration : C,
                M = ae(p.instance.popper),
                B = ee(M),
                U = { position: b.position },
                Y = (function (p, g) {
                  var o = p.offsets,
                    h = o.popper,
                    C = Bt,
                    D = function (re) {
                      return re;
                    },
                    N = C(o.reference.width),
                    F = C(h.width),
                    M = -1 !== ["left", "right"].indexOf(p.placement),
                    B = -1 !== p.placement.indexOf("-"),
                    U = g ? (M || B || N % 2 == F % 2 ? C : xt) : D,
                    Y = g ? C : D;
                  return {
                    left: U(
                      N % 2 == 1 && F % 2 == 1 && !B && g ? h.left - 1 : h.left
                    ),
                    top: Y(h.top),
                    bottom: Y(h.bottom),
                    right: U(h.right),
                  };
                })(p, 2 > window.devicePixelRatio || !Ze),
                re = "bottom" === o ? "top" : "bottom",
                oe = "right" === h ? "left" : "right",
                Oe = Le("transform");
              if (
                ((N =
                  "bottom" == re
                    ? "HTML" === M.nodeName
                      ? -M.clientHeight + Y.bottom
                      : -B.height + Y.bottom
                    : Y.top),
                (D =
                  "right" == oe
                    ? "HTML" === M.nodeName
                      ? -M.clientWidth + Y.right
                      : -B.width + Y.right
                    : Y.left),
                F && Oe)
              )
                (U[Oe] = "translate3d(" + D + "px, " + N + "px, 0)"),
                  (U[re] = 0),
                  (U[oe] = 0),
                  (U.willChange = "transform");
              else {
                var ft = "right" == oe ? -1 : 1;
                (U[re] = N * ("bottom" == re ? -1 : 1)),
                  (U[oe] = D * ft),
                  (U.willChange = re + ", " + oe);
              }
              return (
                (p.attributes = Be(
                  {},
                  { "x-placement": p.placement },
                  p.attributes
                )),
                (p.styles = Be({}, U, p.styles)),
                (p.arrowStyles = Be({}, p.offsets.arrow, p.arrowStyles)),
                p
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (p) {
              return (
                kt(p.instance.popper, p.styles),
                (function (p, g) {
                  Object.keys(g).forEach(function (o) {
                    !1 === g[o]
                      ? p.removeAttribute(o)
                      : p.setAttribute(o, g[o]);
                  });
                })(p.instance.popper, p.attributes),
                p.arrowElement &&
                  Object.keys(p.arrowStyles).length &&
                  kt(p.arrowElement, p.arrowStyles),
                p
              );
            },
            onLoad: function (p, g, o, h, b) {
              var C = Ee(b, g, p, o.positionFixed),
                D = Ge(
                  o.placement,
                  C,
                  g,
                  p,
                  o.modifiers.flip.boundariesElement,
                  o.modifiers.flip.padding
                );
              return (
                g.setAttribute("x-placement", D),
                kt(g, { position: o.positionFixed ? "fixed" : "absolute" }),
                o
              );
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      ut
    );
  }),
  (function (w, de) {
    "object" == typeof exports && "undefined" != typeof module
      ? de(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], de)
      : de(
          ((w =
            "undefined" != typeof globalThis
              ? globalThis
              : w || self).bootstrap = {}),
          w.jQuery,
          w.Popper
        );
  })(this, function (w, de, pe) {
    "use strict";
    function I(p) {
      return p && "object" == typeof p && "default" in p ? p : { default: p };
    }
    var m = I(de),
      Te = I(pe);
    function ae(p, g) {
      for (var o = 0; o < g.length; o++) {
        var h = g[o];
        (h.enumerable = h.enumerable || !1),
          (h.configurable = !0),
          "value" in h && (h.writable = !0),
          Object.defineProperty(p, h.key, h);
      }
    }
    function V(p, g, o) {
      return g && ae(p.prototype, g), o && ae(p, o), p;
    }
    function te() {
      return (te =
        Object.assign ||
        function (p) {
          for (var g = 1; g < arguments.length; g++) {
            var o = arguments[g];
            for (var h in o)
              Object.prototype.hasOwnProperty.call(o, h) && (p[h] = o[h]);
          }
          return p;
        }).apply(this, arguments);
    }
    var W = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (p) {
        do {
          p += ~~(1e6 * Math.random());
        } while (document.getElementById(p));
        return p;
      },
      getSelectorFromElement: function (p) {
        var g = p.getAttribute("data-target");
        if (!g || "#" === g) {
          var o = p.getAttribute("href");
          g = o && "#" !== o ? o.trim() : "";
        }
        try {
          return document.querySelector(g) ? g : null;
        } catch (h) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (p) {
        if (!p) return 0;
        var g = m.default(p).css("transition-duration"),
          o = m.default(p).css("transition-delay"),
          h = parseFloat(g),
          b = parseFloat(o);
        return h || b
          ? ((g = g.split(",")[0]),
            (o = o.split(",")[0]),
            1e3 * (parseFloat(g) + parseFloat(o)))
          : 0;
      },
      reflow: function (p) {
        return p.offsetHeight;
      },
      triggerTransitionEnd: function (p) {
        m.default(p).trigger("transitionend");
      },
      supportsTransitionEnd: function () {
        return Boolean("transitionend");
      },
      isElement: function (p) {
        return (p[0] || p).nodeType;
      },
      typeCheckConfig: function (p, g, o) {
        for (var h in o)
          if (Object.prototype.hasOwnProperty.call(o, h)) {
            var b = o[h],
              C = g[h],
              D =
                C && W.isElement(C)
                  ? "element"
                  : null === (N = C) || void 0 === N
                  ? "" + N
                  : {}.toString
                      .call(N)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            if (!new RegExp(b).test(D))
              throw new Error(
                p.toUpperCase() +
                  ': Option "' +
                  h +
                  '" provided type "' +
                  D +
                  '" but expected type "' +
                  b +
                  '".'
              );
          }
        var N;
      },
      findShadowRoot: function (p) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof p.getRootNode) {
          var g = p.getRootNode();
          return g instanceof ShadowRoot ? g : null;
        }
        return p instanceof ShadowRoot
          ? p
          : p.parentNode
          ? W.findShadowRoot(p.parentNode)
          : null;
      },
      jQueryDetection: function () {
        if (void 0 === m.default)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var p = m.default.fn.jquery.split(" ")[0].split(".");
        if (
          (p[0] < 2 && p[1] < 9) ||
          (1 === p[0] && 9 === p[1] && p[2] < 1) ||
          p[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    W.jQueryDetection(),
      (m.default.fn.emulateTransitionEnd = function (p) {
        var g = this,
          o = !1;
        return (
          m.default(this).one(W.TRANSITION_END, function () {
            o = !0;
          }),
          setTimeout(function () {
            o || W.triggerTransitionEnd(g);
          }, p),
          this
        );
      }),
      (m.default.event.special[W.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function (p) {
          if (m.default(p.target).is(this))
            return p.handleObj.handler.apply(this, arguments);
        },
      });
    var bt = "alert",
      yn = m.default.fn[bt],
      ne = (function () {
        function p(o) {
          this._element = o;
        }
        var g = p.prototype;
        return (
          (g.close = function (o) {
            var h = this._element;
            o && (h = this._getRootElement(o)),
              this._triggerCloseEvent(h).isDefaultPrevented() ||
                this._removeElement(h);
          }),
          (g.dispose = function () {
            m.default.removeData(this._element, "bs.alert"),
              (this._element = null);
          }),
          (g._getRootElement = function (o) {
            var h = W.getSelectorFromElement(o),
              b = !1;
            return (
              h && (b = document.querySelector(h)),
              b || (b = m.default(o).closest(".alert")[0]),
              b
            );
          }),
          (g._triggerCloseEvent = function (o) {
            var h = m.default.Event("close.bs.alert");
            return m.default(o).trigger(h), h;
          }),
          (g._removeElement = function (o) {
            var h = this;
            if (
              (m.default(o).removeClass("show"), m.default(o).hasClass("fade"))
            ) {
              var b = W.getTransitionDurationFromElement(o);
              m.default(o)
                .one(W.TRANSITION_END, function (C) {
                  return h._destroyElement(o, C);
                })
                .emulateTransitionEnd(b);
            } else this._destroyElement(o);
          }),
          (g._destroyElement = function (o) {
            m.default(o).detach().trigger("closed.bs.alert").remove();
          }),
          (p._jQueryInterface = function (o) {
            return this.each(function () {
              var h = m.default(this),
                b = h.data("bs.alert");
              b || ((b = new p(this)), h.data("bs.alert", b)),
                "close" === o && b[o](this);
            });
          }),
          (p._handleDismiss = function (o) {
            return function (h) {
              h && h.preventDefault(), o.close(this);
            };
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
          ]),
          p
        );
      })();
    m
      .default(document)
      .on(
        "click.bs.alert.data-api",
        '[data-dismiss="alert"]',
        ne._handleDismiss(new ne())
      ),
      (m.default.fn[bt] = ne._jQueryInterface),
      (m.default.fn[bt].Constructor = ne),
      (m.default.fn[bt].noConflict = function () {
        return (m.default.fn[bt] = yn), ne._jQueryInterface;
      });
    var ie = m.default.fn.button,
      Ae = (function () {
        function p(o) {
          (this._element = o), (this.shouldAvoidTriggerChange = !1);
        }
        var g = p.prototype;
        return (
          (g.toggle = function () {
            var o = !0,
              h = !0,
              b = m
                .default(this._element)
                .closest('[data-toggle="buttons"]')[0];
            if (b) {
              var C = this._element.querySelector('input:not([type="hidden"])');
              if (C) {
                if ("radio" === C.type)
                  if (C.checked && this._element.classList.contains("active"))
                    o = !1;
                  else {
                    var D = b.querySelector(".active");
                    D && m.default(D).removeClass("active");
                  }
                o &&
                  (("checkbox" !== C.type && "radio" !== C.type) ||
                    (C.checked = !this._element.classList.contains("active")),
                  this.shouldAvoidTriggerChange ||
                    m.default(C).trigger("change")),
                  C.focus(),
                  (h = !1);
              }
            }
            this._element.hasAttribute("disabled") ||
              this._element.classList.contains("disabled") ||
              (h &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains("active")
                ),
              o && m.default(this._element).toggleClass("active"));
          }),
          (g.dispose = function () {
            m.default.removeData(this._element, "bs.button"),
              (this._element = null);
          }),
          (p._jQueryInterface = function (o, h) {
            return this.each(function () {
              var b = m.default(this),
                C = b.data("bs.button");
              C || ((C = new p(this)), b.data("bs.button", C)),
                (C.shouldAvoidTriggerChange = h),
                "toggle" === o && C[o]();
            });
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
          ]),
          p
        );
      })();
    m
      .default(document)
      .on("click.bs.button.data-api", '[data-toggle^="button"]', function (p) {
        var g = p.target,
          o = g;
        if (
          (m.default(g).hasClass("btn") ||
            (g = m.default(g).closest(".btn")[0]),
          !g || g.hasAttribute("disabled") || g.classList.contains("disabled"))
        )
          p.preventDefault();
        else {
          var h = g.querySelector('input:not([type="hidden"])');
          if (
            h &&
            (h.hasAttribute("disabled") || h.classList.contains("disabled"))
          )
            return void p.preventDefault();
          ("INPUT" !== o.tagName && "LABEL" === g.tagName) ||
            Ae._jQueryInterface.call(
              m.default(g),
              "toggle",
              "INPUT" === o.tagName
            );
        }
      })
      .on(
        "focus.bs.button.data-api blur.bs.button.data-api",
        '[data-toggle^="button"]',
        function (p) {
          var g = m.default(p.target).closest(".btn")[0];
          m.default(g).toggleClass("focus", /^focus(in)?$/.test(p.type));
        }
      ),
      m.default(window).on("load.bs.button.data-api", function () {
        for (
          var p = [].slice.call(
              document.querySelectorAll('[data-toggle="buttons"] .btn')
            ),
            g = 0,
            o = p.length;
          g < o;
          g++
        ) {
          var h = p[g],
            b = h.querySelector('input:not([type="hidden"])');
          b.checked || b.hasAttribute("checked")
            ? h.classList.add("active")
            : h.classList.remove("active");
        }
        for (
          var C = 0,
            D = (p = [].slice.call(
              document.querySelectorAll('[data-toggle="button"]')
            )).length;
          C < D;
          C++
        ) {
          var N = p[C];
          "true" === N.getAttribute("aria-pressed")
            ? N.classList.add("active")
            : N.classList.remove("active");
        }
      }),
      (m.default.fn.button = Ae._jQueryInterface),
      (m.default.fn.button.Constructor = Ae),
      (m.default.fn.button.noConflict = function () {
        return (m.default.fn.button = ie), Ae._jQueryInterface;
      });
    var ee = "carousel",
      Zt = m.default.fn[ee],
      _t = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      $t = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      Xe = { TOUCH: "touch", PEN: "pen" },
      c = (function () {
        function p(o, h) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(h)),
            (this._element = o),
            (this._indicatorsElement = this._element.querySelector(
              ".carousel-indicators"
            )),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var g = p.prototype;
        return (
          (g.next = function () {
            this._isSliding || this._slide("next");
          }),
          (g.nextWhenVisible = function () {
            var o = m.default(this._element);
            !document.hidden &&
              o.is(":visible") &&
              "hidden" !== o.css("visibility") &&
              this.next();
          }),
          (g.prev = function () {
            this._isSliding || this._slide("prev");
          }),
          (g.pause = function (o) {
            o || (this._isPaused = !0),
              this._element.querySelector(
                ".carousel-item-next, .carousel-item-prev"
              ) && (W.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (g.cycle = function (o) {
            o || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }),
          (g.to = function (o) {
            var h = this;
            this._activeElement = this._element.querySelector(
              ".active.carousel-item"
            );
            var b = this._getItemIndex(this._activeElement);
            if (!(o > this._items.length - 1 || o < 0))
              if (this._isSliding)
                m.default(this._element).one("slid.bs.carousel", function () {
                  return h.to(o);
                });
              else {
                if (b === o) return this.pause(), void this.cycle();
                this._slide(o > b ? "next" : "prev", this._items[o]);
              }
          }),
          (g.dispose = function () {
            m.default(this._element).off(".bs.carousel"),
              m.default.removeData(this._element, "bs.carousel"),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (g._getConfig = function (o) {
            return (o = te({}, _t, o)), W.typeCheckConfig(ee, o, $t), o;
          }),
          (g._handleSwipe = function () {
            var o = Math.abs(this.touchDeltaX);
            if (!(o <= 40)) {
              var h = o / this.touchDeltaX;
              (this.touchDeltaX = 0),
                h > 0 && this.prev(),
                h < 0 && this.next();
            }
          }),
          (g._addEventListeners = function () {
            var o = this;
            this._config.keyboard &&
              m.default(this._element).on("keydown.bs.carousel", function (h) {
                return o._keydown(h);
              }),
              "hover" === this._config.pause &&
                m
                  .default(this._element)
                  .on("mouseenter.bs.carousel", function (h) {
                    return o.pause(h);
                  })
                  .on("mouseleave.bs.carousel", function (h) {
                    return o.cycle(h);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (g._addTouchEventListeners = function () {
            var o = this;
            if (this._touchSupported) {
              var h = function (C) {
                  o._pointerEvent &&
                  Xe[C.originalEvent.pointerType.toUpperCase()]
                    ? (o.touchStartX = C.originalEvent.clientX)
                    : o._pointerEvent ||
                      (o.touchStartX = C.originalEvent.touches[0].clientX);
                },
                b = function (C) {
                  o._pointerEvent &&
                    Xe[C.originalEvent.pointerType.toUpperCase()] &&
                    (o.touchDeltaX = C.originalEvent.clientX - o.touchStartX),
                    o._handleSwipe(),
                    "hover" === o._config.pause &&
                      (o.pause(),
                      o.touchTimeout && clearTimeout(o.touchTimeout),
                      (o.touchTimeout = setTimeout(function (D) {
                        return o.cycle(D);
                      }, 500 + o._config.interval)));
                };
              m
                .default(this._element.querySelectorAll(".carousel-item img"))
                .on("dragstart.bs.carousel", function (C) {
                  return C.preventDefault();
                }),
                this._pointerEvent
                  ? (m
                      .default(this._element)
                      .on("pointerdown.bs.carousel", function (C) {
                        return h(C);
                      }),
                    m
                      .default(this._element)
                      .on("pointerup.bs.carousel", function (C) {
                        return b(C);
                      }),
                    this._element.classList.add("pointer-event"))
                  : (m
                      .default(this._element)
                      .on("touchstart.bs.carousel", function (C) {
                        return h(C);
                      }),
                    m
                      .default(this._element)
                      .on("touchmove.bs.carousel", function (C) {
                        var D;
                        o.touchDeltaX =
                          (D = C).originalEvent.touches &&
                          D.originalEvent.touches.length > 1
                            ? 0
                            : D.originalEvent.touches[0].clientX -
                              o.touchStartX;
                      }),
                    m
                      .default(this._element)
                      .on("touchend.bs.carousel", function (C) {
                        return b(C);
                      }));
            }
          }),
          (g._keydown = function (o) {
            if (!/input|textarea/i.test(o.target.tagName))
              switch (o.which) {
                case 37:
                  o.preventDefault(), this.prev();
                  break;
                case 39:
                  o.preventDefault(), this.next();
              }
          }),
          (g._getItemIndex = function (o) {
            return (
              (this._items =
                o && o.parentNode
                  ? [].slice.call(
                      o.parentNode.querySelectorAll(".carousel-item")
                    )
                  : []),
              this._items.indexOf(o)
            );
          }),
          (g._getItemByDirection = function (o, h) {
            var b = "next" === o,
              C = "prev" === o,
              D = this._getItemIndex(h);
            if (
              ((C && 0 === D) || (b && D === this._items.length - 1)) &&
              !this._config.wrap
            )
              return h;
            var F = (D + ("prev" === o ? -1 : 1)) % this._items.length;
            return -1 === F
              ? this._items[this._items.length - 1]
              : this._items[F];
          }),
          (g._triggerSlideEvent = function (o, h) {
            var b = this._getItemIndex(o),
              C = this._getItemIndex(
                this._element.querySelector(".active.carousel-item")
              ),
              D = m.default.Event("slide.bs.carousel", {
                relatedTarget: o,
                direction: h,
                from: C,
                to: b,
              });
            return m.default(this._element).trigger(D), D;
          }),
          (g._setActiveIndicatorElement = function (o) {
            if (this._indicatorsElement) {
              var h = [].slice.call(
                this._indicatorsElement.querySelectorAll(".active")
              );
              m.default(h).removeClass("active");
              var b = this._indicatorsElement.children[this._getItemIndex(o)];
              b && m.default(b).addClass("active");
            }
          }),
          (g._updateInterval = function () {
            var o =
              this._activeElement ||
              this._element.querySelector(".active.carousel-item");
            if (o) {
              var h = parseInt(o.getAttribute("data-interval"), 10);
              h
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = h))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
            }
          }),
          (g._slide = function (o, h) {
            var b,
              C,
              D,
              N = this,
              F = this._element.querySelector(".active.carousel-item"),
              M = this._getItemIndex(F),
              B = h || (F && this._getItemByDirection(o, F)),
              U = this._getItemIndex(B),
              Y = Boolean(this._interval);
            if (
              ("next" === o
                ? ((b = "carousel-item-left"),
                  (C = "carousel-item-next"),
                  (D = "left"))
                : ((b = "carousel-item-right"),
                  (C = "carousel-item-prev"),
                  (D = "right")),
              B && m.default(B).hasClass("active"))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(B, D).isDefaultPrevented() &&
              F &&
              B
            ) {
              (this._isSliding = !0),
                Y && this.pause(),
                this._setActiveIndicatorElement(B),
                (this._activeElement = B);
              var re = m.default.Event("slid.bs.carousel", {
                relatedTarget: B,
                direction: D,
                from: M,
                to: U,
              });
              if (m.default(this._element).hasClass("slide")) {
                m.default(B).addClass(C),
                  W.reflow(B),
                  m.default(F).addClass(b),
                  m.default(B).addClass(b);
                var oe = W.getTransitionDurationFromElement(F);
                m.default(F)
                  .one(W.TRANSITION_END, function () {
                    m
                      .default(B)
                      .removeClass(b + " " + C)
                      .addClass("active"),
                      m.default(F).removeClass("active " + C + " " + b),
                      (N._isSliding = !1),
                      setTimeout(function () {
                        return m.default(N._element).trigger(re);
                      }, 0);
                  })
                  .emulateTransitionEnd(oe);
              } else
                m.default(F).removeClass("active"),
                  m.default(B).addClass("active"),
                  (this._isSliding = !1),
                  m.default(this._element).trigger(re);
              Y && this.cycle();
            }
          }),
          (p._jQueryInterface = function (o) {
            return this.each(function () {
              var h = m.default(this).data("bs.carousel"),
                b = te({}, _t, m.default(this).data());
              "object" == typeof o && (b = te({}, b, o));
              var C = "string" == typeof o ? o : b.slide;
              if (
                (h ||
                  ((h = new p(this, b)),
                  m.default(this).data("bs.carousel", h)),
                "number" == typeof o)
              )
                h.to(o);
              else if ("string" == typeof C) {
                if (void 0 === h[C])
                  throw new TypeError('No method named "' + C + '"');
                h[C]();
              } else b.interval && b.ride && (h.pause(), h.cycle());
            });
          }),
          (p._dataApiClickHandler = function (o) {
            var h = W.getSelectorFromElement(this);
            if (h) {
              var b = m.default(h)[0];
              if (b && m.default(b).hasClass("carousel")) {
                var C = te({}, m.default(b).data(), m.default(this).data()),
                  D = this.getAttribute("data-slide-to");
                D && (C.interval = !1),
                  p._jQueryInterface.call(m.default(b), C),
                  D && m.default(b).data("bs.carousel").to(D),
                  o.preventDefault();
              }
            }
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return _t;
              },
            },
          ]),
          p
        );
      })();
    m
      .default(document)
      .on(
        "click.bs.carousel.data-api",
        "[data-slide], [data-slide-to]",
        c._dataApiClickHandler
      ),
      m.default(window).on("load.bs.carousel.data-api", function () {
        for (
          var p = [].slice.call(
              document.querySelectorAll('[data-ride="carousel"]')
            ),
            g = 0,
            o = p.length;
          g < o;
          g++
        ) {
          var h = m.default(p[g]);
          c._jQueryInterface.call(h, h.data());
        }
      }),
      (m.default.fn[ee] = c._jQueryInterface),
      (m.default.fn[ee].Constructor = c),
      (m.default.fn[ee].noConflict = function () {
        return (m.default.fn[ee] = Zt), c._jQueryInterface;
      });
    var Ge = "collapse",
      Ee = m.default.fn[Ge],
      en = { toggle: !0, parent: "" },
      tn = { toggle: "boolean", parent: "(string|element)" },
      wt = (function () {
        function p(o, h) {
          (this._isTransitioning = !1),
            (this._element = o),
            (this._config = this._getConfig(h)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  o.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  o.id +
                  '"]'
              )
            ));
          for (
            var b = [].slice.call(
                document.querySelectorAll('[data-toggle="collapse"]')
              ),
              C = 0,
              D = b.length;
            C < D;
            C++
          ) {
            var N = b[C],
              F = W.getSelectorFromElement(N),
              M = [].slice
                .call(document.querySelectorAll(F))
                .filter(function (B) {
                  return B === o;
                });
            null !== F &&
              M.length > 0 &&
              ((this._selector = F), this._triggerArray.push(N));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var g = p.prototype;
        return (
          (g.toggle = function () {
            m.default(this._element).hasClass("show")
              ? this.hide()
              : this.show();
          }),
          (g.show = function () {
            var o,
              h,
              b = this;
            if (
              !(
                this._isTransitioning ||
                m.default(this._element).hasClass("show") ||
                (this._parent &&
                  0 ===
                    (o = [].slice
                      .call(this._parent.querySelectorAll(".show, .collapsing"))
                      .filter(function (M) {
                        return "string" == typeof b._config.parent
                          ? M.getAttribute("data-parent") === b._config.parent
                          : M.classList.contains("collapse");
                      })).length &&
                  (o = null),
                o &&
                  (h = m.default(o).not(this._selector).data("bs.collapse")) &&
                  h._isTransitioning)
              )
            ) {
              var C = m.default.Event("show.bs.collapse");
              if (
                (m.default(this._element).trigger(C), !C.isDefaultPrevented())
              ) {
                o &&
                  (p._jQueryInterface.call(
                    m.default(o).not(this._selector),
                    "hide"
                  ),
                  h || m.default(o).data("bs.collapse", null));
                var D = this._getDimension();
                m
                  .default(this._element)
                  .removeClass("collapse")
                  .addClass("collapsing"),
                  (this._element.style[D] = 0),
                  this._triggerArray.length &&
                    m
                      .default(this._triggerArray)
                      .removeClass("collapsed")
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var N = "scroll" + (D[0].toUpperCase() + D.slice(1)),
                  F = W.getTransitionDurationFromElement(this._element);
                m
                  .default(this._element)
                  .one(W.TRANSITION_END, function () {
                    m
                      .default(b._element)
                      .removeClass("collapsing")
                      .addClass("collapse show"),
                      (b._element.style[D] = ""),
                      b.setTransitioning(!1),
                      m.default(b._element).trigger("shown.bs.collapse");
                  })
                  .emulateTransitionEnd(F),
                  (this._element.style[D] = this._element[N] + "px");
              }
            }
          }),
          (g.hide = function () {
            var o = this;
            if (
              !this._isTransitioning &&
              m.default(this._element).hasClass("show")
            ) {
              var h = m.default.Event("hide.bs.collapse");
              if (
                (m.default(this._element).trigger(h), !h.isDefaultPrevented())
              ) {
                var b = this._getDimension();
                (this._element.style[b] =
                  this._element.getBoundingClientRect()[b] + "px"),
                  W.reflow(this._element),
                  m
                    .default(this._element)
                    .addClass("collapsing")
                    .removeClass("collapse show");
                var C = this._triggerArray.length;
                if (C > 0)
                  for (var D = 0; D < C; D++) {
                    var N = this._triggerArray[D],
                      F = W.getSelectorFromElement(N);
                    null !== F &&
                      (m
                        .default([].slice.call(document.querySelectorAll(F)))
                        .hasClass("show") ||
                        m
                          .default(N)
                          .addClass("collapsed")
                          .attr("aria-expanded", !1));
                  }
                this.setTransitioning(!0), (this._element.style[b] = "");
                var M = W.getTransitionDurationFromElement(this._element);
                m.default(this._element)
                  .one(W.TRANSITION_END, function () {
                    o.setTransitioning(!1),
                      m
                        .default(o._element)
                        .removeClass("collapsing")
                        .addClass("collapse")
                        .trigger("hidden.bs.collapse");
                  })
                  .emulateTransitionEnd(M);
              }
            }
          }),
          (g.setTransitioning = function (o) {
            this._isTransitioning = o;
          }),
          (g.dispose = function () {
            m.default.removeData(this._element, "bs.collapse"),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (g._getConfig = function (o) {
            return (
              ((o = te({}, en, o)).toggle = Boolean(o.toggle)),
              W.typeCheckConfig(Ge, o, tn),
              o
            );
          }),
          (g._getDimension = function () {
            return m.default(this._element).hasClass("width")
              ? "width"
              : "height";
          }),
          (g._getParent = function () {
            var o,
              h = this;
            W.isElement(this._config.parent)
              ? ((o = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (o = this._config.parent[0]))
              : (o = document.querySelector(this._config.parent));
            var C = [].slice.call(
              o.querySelectorAll(
                '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]'
              )
            );
            return (
              m.default(C).each(function (D, N) {
                h._addAriaAndCollapsedClass(p._getTargetFromElement(N), [N]);
              }),
              o
            );
          }),
          (g._addAriaAndCollapsedClass = function (o, h) {
            var b = m.default(o).hasClass("show");
            h.length &&
              m
                .default(h)
                .toggleClass("collapsed", !b)
                .attr("aria-expanded", b);
          }),
          (p._getTargetFromElement = function (o) {
            var h = W.getSelectorFromElement(o);
            return h ? document.querySelector(h) : null;
          }),
          (p._jQueryInterface = function (o) {
            return this.each(function () {
              var h = m.default(this),
                b = h.data("bs.collapse"),
                C = te({}, en, h.data(), "object" == typeof o && o ? o : {});
              if (
                (!b &&
                  C.toggle &&
                  "string" == typeof o &&
                  /show|hide/.test(o) &&
                  (C.toggle = !1),
                b || ((b = new p(this, C)), h.data("bs.collapse", b)),
                "string" == typeof o)
              ) {
                if (void 0 === b[o])
                  throw new TypeError('No method named "' + o + '"');
                b[o]();
              }
            });
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return en;
              },
            },
          ]),
          p
        );
      })();
    m
      .default(document)
      .on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (p) {
          "A" === p.currentTarget.tagName && p.preventDefault();
          var g = m.default(this),
            o = W.getSelectorFromElement(this),
            h = [].slice.call(document.querySelectorAll(o));
          m.default(h).each(function () {
            var b = m.default(this),
              C = b.data("bs.collapse") ? "toggle" : g.data();
            wt._jQueryInterface.call(b, C);
          });
        }
      ),
      (m.default.fn[Ge] = wt._jQueryInterface),
      (m.default.fn[Ge].Constructor = wt),
      (m.default.fn[Ge].noConflict = function () {
        return (m.default.fn[Ge] = Ee), wt._jQueryInterface;
      });
    var ce = "dropdown",
      Mt = m.default.fn[ce],
      qt = new RegExp("38|40|27"),
      Ct = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      rt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      Le = (function () {
        function p(o, h) {
          (this._element = o),
            (this._popper = null),
            (this._config = this._getConfig(h)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var g = p.prototype;
        return (
          (g.toggle = function () {
            if (
              !this._element.disabled &&
              !m.default(this._element).hasClass("disabled")
            ) {
              var o = m.default(this._menu).hasClass("show");
              p._clearMenus(), o || this.show(!0);
            }
          }),
          (g.show = function (o) {
            if (
              (void 0 === o && (o = !1),
              !(
                this._element.disabled ||
                m.default(this._element).hasClass("disabled") ||
                m.default(this._menu).hasClass("show")
              ))
            ) {
              var h = { relatedTarget: this._element },
                b = m.default.Event("show.bs.dropdown", h),
                C = p._getParentFromElement(this._element);
              if ((m.default(C).trigger(b), !b.isDefaultPrevented())) {
                if (!this._inNavbar && o) {
                  if (void 0 === Te.default)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                  var D = this._element;
                  "parent" === this._config.reference
                    ? (D = C)
                    : W.isElement(this._config.reference) &&
                      ((D = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (D = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      m.default(C).addClass("position-static"),
                    (this._popper = new Te.default(
                      D,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === m.default(C).closest(".navbar-nav").length &&
                  m
                    .default(document.body)
                    .children()
                    .on("mouseover", null, m.default.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  m.default(this._menu).toggleClass("show"),
                  m
                    .default(C)
                    .toggleClass("show")
                    .trigger(m.default.Event("shown.bs.dropdown", h));
              }
            }
          }),
          (g.hide = function () {
            if (
              !this._element.disabled &&
              !m.default(this._element).hasClass("disabled") &&
              m.default(this._menu).hasClass("show")
            ) {
              var o = { relatedTarget: this._element },
                h = m.default.Event("hide.bs.dropdown", o),
                b = p._getParentFromElement(this._element);
              m.default(b).trigger(h),
                h.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  m.default(this._menu).toggleClass("show"),
                  m
                    .default(b)
                    .toggleClass("show")
                    .trigger(m.default.Event("hidden.bs.dropdown", o)));
            }
          }),
          (g.dispose = function () {
            m.default.removeData(this._element, "bs.dropdown"),
              m.default(this._element).off(".bs.dropdown"),
              (this._element = null),
              (this._menu = null),
              null !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (g.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (g._addEventListeners = function () {
            var o = this;
            m.default(this._element).on("click.bs.dropdown", function (h) {
              h.preventDefault(), h.stopPropagation(), o.toggle();
            });
          }),
          (g._getConfig = function (o) {
            return (
              (o = te(
                {},
                this.constructor.Default,
                m.default(this._element).data(),
                o
              )),
              W.typeCheckConfig(ce, o, this.constructor.DefaultType),
              o
            );
          }),
          (g._getMenuElement = function () {
            if (!this._menu) {
              var o = p._getParentFromElement(this._element);
              o && (this._menu = o.querySelector(".dropdown-menu"));
            }
            return this._menu;
          }),
          (g._getPlacement = function () {
            var o = m.default(this._element.parentNode),
              h = "bottom-start";
            return (
              o.hasClass("dropup")
                ? (h = m.default(this._menu).hasClass("dropdown-menu-right")
                    ? "top-end"
                    : "top-start")
                : o.hasClass("dropright")
                ? (h = "right-start")
                : o.hasClass("dropleft")
                ? (h = "left-start")
                : m.default(this._menu).hasClass("dropdown-menu-right") &&
                  (h = "bottom-end"),
              h
            );
          }),
          (g._detectNavbar = function () {
            return m.default(this._element).closest(".navbar").length > 0;
          }),
          (g._getOffset = function () {
            var o = this,
              h = {};
            return (
              "function" == typeof this._config.offset
                ? (h.fn = function (b) {
                    return (
                      (b.offsets = te(
                        {},
                        b.offsets,
                        o._config.offset(b.offsets, o._element) || {}
                      )),
                      b
                    );
                  })
                : (h.offset = this._config.offset),
              h
            );
          }),
          (g._getPopperConfig = function () {
            var o = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (o.modifiers.applyStyle = { enabled: !1 }),
              te({}, o, this._config.popperConfig)
            );
          }),
          (p._jQueryInterface = function (o) {
            return this.each(function () {
              var h = m.default(this).data("bs.dropdown");
              if (
                (h ||
                  ((h = new p(this, "object" == typeof o ? o : null)),
                  m.default(this).data("bs.dropdown", h)),
                "string" == typeof o)
              ) {
                if (void 0 === h[o])
                  throw new TypeError('No method named "' + o + '"');
                h[o]();
              }
            });
          }),
          (p._clearMenus = function (o) {
            if (!o || (3 !== o.which && ("keyup" !== o.type || 9 === o.which)))
              for (
                var h = [].slice.call(
                    document.querySelectorAll('[data-toggle="dropdown"]')
                  ),
                  b = 0,
                  C = h.length;
                b < C;
                b++
              ) {
                var D = p._getParentFromElement(h[b]),
                  N = m.default(h[b]).data("bs.dropdown"),
                  F = { relatedTarget: h[b] };
                if ((o && "click" === o.type && (F.clickEvent = o), N)) {
                  var M = N._menu;
                  if (
                    m.default(D).hasClass("show") &&
                    !(
                      o &&
                      (("click" === o.type &&
                        /input|textarea/i.test(o.target.tagName)) ||
                        ("keyup" === o.type && 9 === o.which)) &&
                      m.default.contains(D, o.target)
                    )
                  ) {
                    var B = m.default.Event("hide.bs.dropdown", F);
                    m.default(D).trigger(B),
                      B.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          m
                            .default(document.body)
                            .children()
                            .off("mouseover", null, m.default.noop),
                        h[b].setAttribute("aria-expanded", "false"),
                        N._popper && N._popper.destroy(),
                        m.default(M).removeClass("show"),
                        m
                          .default(D)
                          .removeClass("show")
                          .trigger(m.default.Event("hidden.bs.dropdown", F)));
                  }
                }
              }
          }),
          (p._getParentFromElement = function (o) {
            var h,
              b = W.getSelectorFromElement(o);
            return b && (h = document.querySelector(b)), h || o.parentNode;
          }),
          (p._dataApiKeydownHandler = function (o) {
            if (
              !(/input|textarea/i.test(o.target.tagName)
                ? 32 === o.which ||
                  (27 !== o.which &&
                    ((40 !== o.which && 38 !== o.which) ||
                      m.default(o.target).closest(".dropdown-menu").length))
                : !qt.test(o.which)) &&
              !this.disabled &&
              !m.default(this).hasClass("disabled")
            ) {
              var h = p._getParentFromElement(this),
                b = m.default(h).hasClass("show");
              if (b || 27 !== o.which) {
                if (
                  (o.preventDefault(),
                  o.stopPropagation(),
                  !b || 27 === o.which || 32 === o.which)
                )
                  return (
                    27 === o.which &&
                      m
                        .default(h.querySelector('[data-toggle="dropdown"]'))
                        .trigger("focus"),
                    void m.default(this).trigger("click")
                  );
                var C = [].slice
                  .call(
                    h.querySelectorAll(
                      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                    )
                  )
                  .filter(function (N) {
                    return m.default(N).is(":visible");
                  });
                if (0 !== C.length) {
                  var D = C.indexOf(o.target);
                  38 === o.which && D > 0 && D--,
                    40 === o.which && D < C.length - 1 && D++,
                    D < 0 && (D = 0),
                    C[D].focus();
                }
              }
            }
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ct;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return rt;
              },
            },
          ]),
          p
        );
      })();
    m
      .default(document)
      .on(
        "keydown.bs.dropdown.data-api",
        '[data-toggle="dropdown"]',
        Le._dataApiKeydownHandler
      )
      .on(
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        Le._dataApiKeydownHandler
      )
      .on(
        "click.bs.dropdown.data-api keyup.bs.dropdown.data-api",
        Le._clearMenus
      )
      .on(
        "click.bs.dropdown.data-api",
        '[data-toggle="dropdown"]',
        function (p) {
          p.preventDefault(),
            p.stopPropagation(),
            Le._jQueryInterface.call(m.default(this), "toggle");
        }
      )
      .on("click.bs.dropdown.data-api", ".dropdown form", function (p) {
        p.stopPropagation();
      }),
      (m.default.fn[ce] = Le._jQueryInterface),
      (m.default.fn[ce].Constructor = Le),
      (m.default.fn[ce].noConflict = function () {
        return (m.default.fn[ce] = Mt), Le._jQueryInterface;
      });
    var jt = m.default.fn.modal,
      Wt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      nn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      Ft = (function () {
        function p(o, h) {
          (this._config = this._getConfig(h)),
            (this._element = o),
            (this._dialog = o.querySelector(".modal-dialog")),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var g = p.prototype;
        return (
          (g.toggle = function (o) {
            return this._isShown ? this.hide() : this.show(o);
          }),
          (g.show = function (o) {
            var h = this;
            if (!this._isShown && !this._isTransitioning) {
              m.default(this._element).hasClass("fade") &&
                (this._isTransitioning = !0);
              var b = m.default.Event("show.bs.modal", { relatedTarget: o });
              m.default(this._element).trigger(b),
                this._isShown ||
                  b.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  m
                    .default(this._element)
                    .on(
                      "click.dismiss.bs.modal",
                      '[data-dismiss="modal"]',
                      function (C) {
                        return h.hide(C);
                      }
                    ),
                  m
                    .default(this._dialog)
                    .on("mousedown.dismiss.bs.modal", function () {
                      m.default(h._element).one(
                        "mouseup.dismiss.bs.modal",
                        function (C) {
                          m.default(C.target).is(h._element) &&
                            (h._ignoreBackdropClick = !0);
                        }
                      );
                    }),
                  this._showBackdrop(function () {
                    return h._showElement(o);
                  }));
            }
          }),
          (g.hide = function (o) {
            var h = this;
            if (
              (o && o.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              var b = m.default.Event("hide.bs.modal");
              if (
                (m.default(this._element).trigger(b),
                this._isShown && !b.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var C = m.default(this._element).hasClass("fade");
                if (
                  (C && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  m.default(document).off("focusin.bs.modal"),
                  m.default(this._element).removeClass("show"),
                  m.default(this._element).off("click.dismiss.bs.modal"),
                  m.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                  C)
                ) {
                  var D = W.getTransitionDurationFromElement(this._element);
                  m.default(this._element)
                    .one(W.TRANSITION_END, function (N) {
                      return h._hideModal(N);
                    })
                    .emulateTransitionEnd(D);
                } else this._hideModal();
              }
            }
          }),
          (g.dispose = function () {
            [window, this._element, this._dialog].forEach(function (o) {
              return m.default(o).off(".bs.modal");
            }),
              m.default(document).off("focusin.bs.modal"),
              m.default.removeData(this._element, "bs.modal"),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (g.handleUpdate = function () {
            this._adjustDialog();
          }),
          (g._getConfig = function (o) {
            return (o = te({}, Wt, o)), W.typeCheckConfig("modal", o, nn), o;
          }),
          (g._triggerBackdropTransition = function () {
            var o = this,
              h = m.default.Event("hidePrevented.bs.modal");
            if (
              (m.default(this._element).trigger(h), !h.isDefaultPrevented())
            ) {
              var b =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              b || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
              var C = W.getTransitionDurationFromElement(this._dialog);
              m.default(this._element).off(W.TRANSITION_END),
                m
                  .default(this._element)
                  .one(W.TRANSITION_END, function () {
                    o._element.classList.remove("modal-static"),
                      b ||
                        m
                          .default(o._element)
                          .one(W.TRANSITION_END, function () {
                            o._element.style.overflowY = "";
                          })
                          .emulateTransitionEnd(o._element, C);
                  })
                  .emulateTransitionEnd(C),
                this._element.focus();
            }
          }),
          (g._showElement = function (o) {
            var h = this,
              b = m.default(this._element).hasClass("fade"),
              C = this._dialog
                ? this._dialog.querySelector(".modal-body")
                : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              m.default(this._dialog).hasClass("modal-dialog-scrollable") && C
                ? (C.scrollTop = 0)
                : (this._element.scrollTop = 0),
              b && W.reflow(this._element),
              m.default(this._element).addClass("show"),
              this._config.focus && this._enforceFocus();
            var D = m.default.Event("shown.bs.modal", { relatedTarget: o }),
              N = function () {
                h._config.focus && h._element.focus(),
                  (h._isTransitioning = !1),
                  m.default(h._element).trigger(D);
              };
            if (b) {
              var F = W.getTransitionDurationFromElement(this._dialog);
              m.default(this._dialog)
                .one(W.TRANSITION_END, N)
                .emulateTransitionEnd(F);
            } else N();
          }),
          (g._enforceFocus = function () {
            var o = this;
            m.default(document)
              .off("focusin.bs.modal")
              .on("focusin.bs.modal", function (h) {
                document !== h.target &&
                  o._element !== h.target &&
                  0 === m.default(o._element).has(h.target).length &&
                  o._element.focus();
              });
          }),
          (g._setEscapeEvent = function () {
            var o = this;
            this._isShown
              ? m
                  .default(this._element)
                  .on("keydown.dismiss.bs.modal", function (h) {
                    o._config.keyboard && 27 === h.which
                      ? (h.preventDefault(), o.hide())
                      : o._config.keyboard ||
                        27 !== h.which ||
                        o._triggerBackdropTransition();
                  })
              : this._isShown ||
                m.default(this._element).off("keydown.dismiss.bs.modal");
          }),
          (g._setResizeEvent = function () {
            var o = this;
            this._isShown
              ? m.default(window).on("resize.bs.modal", function (h) {
                  return o.handleUpdate(h);
                })
              : m.default(window).off("resize.bs.modal");
          }),
          (g._hideModal = function () {
            var o = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                m.default(document.body).removeClass("modal-open"),
                  o._resetAdjustments(),
                  o._resetScrollbar(),
                  m.default(o._element).trigger("hidden.bs.modal");
              });
          }),
          (g._removeBackdrop = function () {
            this._backdrop &&
              (m.default(this._backdrop).remove(), (this._backdrop = null));
          }),
          (g._showBackdrop = function (o) {
            var h = this,
              b = m.default(this._element).hasClass("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                b && this._backdrop.classList.add(b),
                m.default(this._backdrop).appendTo(document.body),
                m
                  .default(this._element)
                  .on("click.dismiss.bs.modal", function (F) {
                    h._ignoreBackdropClick
                      ? (h._ignoreBackdropClick = !1)
                      : F.target === F.currentTarget &&
                        ("static" === h._config.backdrop
                          ? h._triggerBackdropTransition()
                          : h.hide());
                  }),
                b && W.reflow(this._backdrop),
                m.default(this._backdrop).addClass("show"),
                !o)
              )
                return;
              if (!b) return void o();
              var C = W.getTransitionDurationFromElement(this._backdrop);
              m.default(this._backdrop)
                .one(W.TRANSITION_END, o)
                .emulateTransitionEnd(C);
            } else if (!this._isShown && this._backdrop) {
              m.default(this._backdrop).removeClass("show");
              var D = function () {
                h._removeBackdrop(), o && o();
              };
              if (m.default(this._element).hasClass("fade")) {
                var N = W.getTransitionDurationFromElement(this._backdrop);
                m.default(this._backdrop)
                  .one(W.TRANSITION_END, D)
                  .emulateTransitionEnd(N);
              } else D();
            } else o && o();
          }),
          (g._adjustDialog = function () {
            var o =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              o &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !o &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (g._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (g._checkScrollbar = function () {
            var o = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(o.left + o.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (g._setScrollbar = function () {
            var o = this;
            if (this._isBodyOverflowing) {
              var h = [].slice.call(
                  document.querySelectorAll(
                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                  )
                ),
                b = [].slice.call(document.querySelectorAll(".sticky-top"));
              m.default(h).each(function (N, F) {
                var M = F.style.paddingRight,
                  B = m.default(F).css("padding-right");
                m.default(F)
                  .data("padding-right", M)
                  .css(
                    "padding-right",
                    parseFloat(B) + o._scrollbarWidth + "px"
                  );
              }),
                m.default(b).each(function (N, F) {
                  var M = F.style.marginRight,
                    B = m.default(F).css("margin-right");
                  m.default(F)
                    .data("margin-right", M)
                    .css(
                      "margin-right",
                      parseFloat(B) - o._scrollbarWidth + "px"
                    );
                });
              var C = document.body.style.paddingRight,
                D = m.default(document.body).css("padding-right");
              m.default(document.body)
                .data("padding-right", C)
                .css(
                  "padding-right",
                  parseFloat(D) + this._scrollbarWidth + "px"
                );
            }
            m.default(document.body).addClass("modal-open");
          }),
          (g._resetScrollbar = function () {
            var o = [].slice.call(
              document.querySelectorAll(
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
              )
            );
            m.default(o).each(function (C, D) {
              var N = m.default(D).data("padding-right");
              m.default(D).removeData("padding-right"),
                (D.style.paddingRight = N || "");
            });
            var h = [].slice.call(document.querySelectorAll(".sticky-top"));
            m.default(h).each(function (C, D) {
              var N = m.default(D).data("margin-right");
              void 0 !== N &&
                m.default(D).css("margin-right", N).removeData("margin-right");
            });
            var b = m.default(document.body).data("padding-right");
            m.default(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = b || "");
          }),
          (g._getScrollbarWidth = function () {
            var o = document.createElement("div");
            (o.className = "modal-scrollbar-measure"),
              document.body.appendChild(o);
            var h = o.getBoundingClientRect().width - o.clientWidth;
            return document.body.removeChild(o), h;
          }),
          (p._jQueryInterface = function (o, h) {
            return this.each(function () {
              var b = m.default(this).data("bs.modal"),
                C = te(
                  {},
                  Wt,
                  m.default(this).data(),
                  "object" == typeof o && o ? o : {}
                );
              if (
                (b ||
                  ((b = new p(this, C)), m.default(this).data("bs.modal", b)),
                "string" == typeof o)
              ) {
                if (void 0 === b[o])
                  throw new TypeError('No method named "' + o + '"');
                b[o](h);
              } else C.show && b.show(h);
            });
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return Wt;
              },
            },
          ]),
          p
        );
      })();
    m
      .default(document)
      .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (p) {
        var g,
          o = this,
          h = W.getSelectorFromElement(this);
        h && (g = document.querySelector(h));
        var b = m.default(g).data("bs.modal")
          ? "toggle"
          : te({}, m.default(g).data(), m.default(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || p.preventDefault();
        var C = m.default(g).one("show.bs.modal", function (D) {
          D.isDefaultPrevented() ||
            C.one("hidden.bs.modal", function () {
              m.default(o).is(":visible") && o.focus();
            });
        });
        Ft._jQueryInterface.call(m.default(g), b, this);
      }),
      (m.default.fn.modal = Ft._jQueryInterface),
      (m.default.fn.modal.Constructor = Ft),
      (m.default.fn.modal.noConflict = function () {
        return (m.default.fn.modal = jt), Ft._jQueryInterface;
      });
    var Vt = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      Qt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      Ot =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function kt(p, g, o) {
      if (0 === p.length) return p;
      if (o && "function" == typeof o) return o(p);
      for (
        var h = new window.DOMParser().parseFromString(p, "text/html"),
          b = Object.keys(g),
          C = [].slice.call(h.body.querySelectorAll("*")),
          D = function (M, B) {
            var U = C[M],
              Y = U.nodeName.toLowerCase();
            if (-1 === b.indexOf(U.nodeName.toLowerCase()))
              return U.parentNode.removeChild(U), "continue";
            var re = [].slice.call(U.attributes),
              oe = [].concat(g["*"] || [], g[Y] || []);
            re.forEach(function (Oe) {
              (function (ot, ft) {
                var Je = ot.nodeName.toLowerCase();
                if (-1 !== ft.indexOf(Je))
                  return (
                    -1 === Vt.indexOf(Je) ||
                    Boolean(ot.nodeValue.match(Qt) || ot.nodeValue.match(Ot))
                  );
                for (
                  var Dt = ft.filter(function (Fn) {
                      return Fn instanceof RegExp;
                    }),
                    ln = 0,
                    sn = Dt.length;
                  ln < sn;
                  ln++
                )
                  if (Je.match(Dt[ln])) return !0;
                return !1;
              })(Oe, oe) || U.removeAttribute(Oe.nodeName);
            });
          },
          N = 0,
          F = C.length;
        N < F;
        N++
      )
        D(N);
      return h.body.innerHTML;
    }
    var $e = "tooltip",
      et = m.default.fn[$e],
      Tt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      zt = ["sanitize", "whiteList", "sanitizeFn"],
      dt = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      rn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      pn = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      an = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      },
      xe = (function () {
        function p(o, h) {
          if (void 0 === Te.default)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = o),
            (this.config = this._getConfig(h)),
            (this.tip = null),
            this._setListeners();
        }
        var g = p.prototype;
        return (
          (g.enable = function () {
            this._isEnabled = !0;
          }),
          (g.disable = function () {
            this._isEnabled = !1;
          }),
          (g.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (g.toggle = function (o) {
            if (this._isEnabled)
              if (o) {
                var h = this.constructor.DATA_KEY,
                  b = m.default(o.currentTarget).data(h);
                b ||
                  ((b = new this.constructor(
                    o.currentTarget,
                    this._getDelegateConfig()
                  )),
                  m.default(o.currentTarget).data(h, b)),
                  (b._activeTrigger.click = !b._activeTrigger.click),
                  b._isWithActiveTrigger()
                    ? b._enter(null, b)
                    : b._leave(null, b);
              } else {
                if (m.default(this.getTipElement()).hasClass("show"))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (g.dispose = function () {
            clearTimeout(this._timeout),
              m.default.removeData(this.element, this.constructor.DATA_KEY),
              m.default(this.element).off(this.constructor.EVENT_KEY),
              m
                .default(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && m.default(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (g.show = function () {
            var o = this;
            if ("none" === m.default(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var h = m.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              m.default(this.element).trigger(h);
              var b = W.findShadowRoot(this.element),
                C = m.default.contains(
                  null !== b ? b : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (h.isDefaultPrevented() || !C) return;
              var D = this.getTipElement(),
                N = W.getUID(this.constructor.NAME);
              D.setAttribute("id", N),
                this.element.setAttribute("aria-describedby", N),
                this.setContent(),
                this.config.animation && m.default(D).addClass("fade");
              var F =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, D, this.element)
                    : this.config.placement,
                M = this._getAttachment(F);
              this.addAttachmentClass(M);
              var B = this._getContainer();
              m.default(D).data(this.constructor.DATA_KEY, this),
                m.default.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || m.default(D).appendTo(B),
                m
                  .default(this.element)
                  .trigger(this.constructor.Event.INSERTED),
                (this._popper = new Te.default(
                  this.element,
                  D,
                  this._getPopperConfig(M)
                )),
                m.default(D).addClass("show"),
                m.default(D).addClass(this.config.customClass),
                "ontouchstart" in document.documentElement &&
                  m
                    .default(document.body)
                    .children()
                    .on("mouseover", null, m.default.noop);
              var U = function () {
                o.config.animation && o._fixTransition();
                var re = o._hoverState;
                (o._hoverState = null),
                  m.default(o.element).trigger(o.constructor.Event.SHOWN),
                  "out" === re && o._leave(null, o);
              };
              if (m.default(this.tip).hasClass("fade")) {
                var Y = W.getTransitionDurationFromElement(this.tip);
                m.default(this.tip)
                  .one(W.TRANSITION_END, U)
                  .emulateTransitionEnd(Y);
              } else U();
            }
          }),
          (g.hide = function (o) {
            var h = this,
              b = this.getTipElement(),
              C = m.default.Event(this.constructor.Event.HIDE),
              D = function () {
                "show" !== h._hoverState &&
                  b.parentNode &&
                  b.parentNode.removeChild(b),
                  h._cleanTipClass(),
                  h.element.removeAttribute("aria-describedby"),
                  m.default(h.element).trigger(h.constructor.Event.HIDDEN),
                  null !== h._popper && h._popper.destroy(),
                  o && o();
              };
            if ((m.default(this.element).trigger(C), !C.isDefaultPrevented())) {
              if (
                (m.default(b).removeClass("show"),
                "ontouchstart" in document.documentElement &&
                  m
                    .default(document.body)
                    .children()
                    .off("mouseover", null, m.default.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1),
                m.default(this.tip).hasClass("fade"))
              ) {
                var N = W.getTransitionDurationFromElement(b);
                m.default(b).one(W.TRANSITION_END, D).emulateTransitionEnd(N);
              } else D();
              this._hoverState = "";
            }
          }),
          (g.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (g.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (g.addAttachmentClass = function (o) {
            m.default(this.getTipElement()).addClass("bs-tooltip-" + o);
          }),
          (g.getTipElement = function () {
            return (
              (this.tip = this.tip || m.default(this.config.template)[0]),
              this.tip
            );
          }),
          (g.setContent = function () {
            var o = this.getTipElement();
            this.setElementContent(
              m.default(o.querySelectorAll(".tooltip-inner")),
              this.getTitle()
            ),
              m.default(o).removeClass("fade show");
          }),
          (g.setElementContent = function (o, h) {
            "object" != typeof h || (!h.nodeType && !h.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (h = kt(h, this.config.whiteList, this.config.sanitizeFn)),
                  o.html(h))
                : o.text(h)
              : this.config.html
              ? m.default(h).parent().is(o) || o.empty().append(h)
              : o.text(m.default(h).text());
          }),
          (g.getTitle = function () {
            var o = this.element.getAttribute("data-original-title");
            return (
              o ||
                (o =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              o
            );
          }),
          (g._getPopperConfig = function (o) {
            var h = this;
            return te(
              {},
              {
                placement: o,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (b) {
                  b.originalPlacement !== b.placement &&
                    h._handlePopperPlacementChange(b);
                },
                onUpdate: function (b) {
                  return h._handlePopperPlacementChange(b);
                },
              },
              this.config.popperConfig
            );
          }),
          (g._getOffset = function () {
            var o = this,
              h = {};
            return (
              "function" == typeof this.config.offset
                ? (h.fn = function (b) {
                    return (
                      (b.offsets = te(
                        {},
                        b.offsets,
                        o.config.offset(b.offsets, o.element) || {}
                      )),
                      b
                    );
                  })
                : (h.offset = this.config.offset),
              h
            );
          }),
          (g._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : W.isElement(this.config.container)
              ? m.default(this.config.container)
              : m.default(document).find(this.config.container);
          }),
          (g._getAttachment = function (o) {
            return rn[o.toUpperCase()];
          }),
          (g._setListeners = function () {
            var o = this;
            this.config.trigger.split(" ").forEach(function (h) {
              if ("click" === h)
                m.default(o.element).on(
                  o.constructor.Event.CLICK,
                  o.config.selector,
                  function (D) {
                    return o.toggle(D);
                  }
                );
              else if ("manual" !== h) {
                var b =
                    "hover" === h
                      ? o.constructor.Event.MOUSEENTER
                      : o.constructor.Event.FOCUSIN,
                  C =
                    "hover" === h
                      ? o.constructor.Event.MOUSELEAVE
                      : o.constructor.Event.FOCUSOUT;
                m.default(o.element)
                  .on(b, o.config.selector, function (D) {
                    return o._enter(D);
                  })
                  .on(C, o.config.selector, function (D) {
                    return o._leave(D);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                o.element && o.hide();
              }),
              m
                .default(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = te({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (g._fixTitle = function () {
            var o = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== o) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (g._enter = function (o, h) {
            var b = this.constructor.DATA_KEY;
            (h = h || m.default(o.currentTarget).data(b)) ||
              ((h = new this.constructor(
                o.currentTarget,
                this._getDelegateConfig()
              )),
              m.default(o.currentTarget).data(b, h)),
              o &&
                (h._activeTrigger["focusin" === o.type ? "focus" : "hover"] =
                  !0),
              m.default(h.getTipElement()).hasClass("show") ||
              "show" === h._hoverState
                ? (h._hoverState = "show")
                : (clearTimeout(h._timeout),
                  (h._hoverState = "show"),
                  h.config.delay && h.config.delay.show
                    ? (h._timeout = setTimeout(function () {
                        "show" === h._hoverState && h.show();
                      }, h.config.delay.show))
                    : h.show());
          }),
          (g._leave = function (o, h) {
            var b = this.constructor.DATA_KEY;
            (h = h || m.default(o.currentTarget).data(b)) ||
              ((h = new this.constructor(
                o.currentTarget,
                this._getDelegateConfig()
              )),
              m.default(o.currentTarget).data(b, h)),
              o &&
                (h._activeTrigger["focusout" === o.type ? "focus" : "hover"] =
                  !1),
              h._isWithActiveTrigger() ||
                (clearTimeout(h._timeout),
                (h._hoverState = "out"),
                h.config.delay && h.config.delay.hide
                  ? (h._timeout = setTimeout(function () {
                      "out" === h._hoverState && h.hide();
                    }, h.config.delay.hide))
                  : h.hide());
          }),
          (g._isWithActiveTrigger = function () {
            for (var o in this._activeTrigger)
              if (this._activeTrigger[o]) return !0;
            return !1;
          }),
          (g._getConfig = function (o) {
            var h = m.default(this.element).data();
            return (
              Object.keys(h).forEach(function (b) {
                -1 !== zt.indexOf(b) && delete h[b];
              }),
              "number" ==
                typeof (o = te(
                  {},
                  this.constructor.Default,
                  h,
                  "object" == typeof o && o ? o : {}
                )).delay && (o.delay = { show: o.delay, hide: o.delay }),
              "number" == typeof o.title && (o.title = o.title.toString()),
              "number" == typeof o.content &&
                (o.content = o.content.toString()),
              W.typeCheckConfig($e, o, this.constructor.DefaultType),
              o.sanitize &&
                (o.template = kt(o.template, o.whiteList, o.sanitizeFn)),
              o
            );
          }),
          (g._getDelegateConfig = function () {
            var o = {};
            if (this.config)
              for (var h in this.config)
                this.constructor.Default[h] !== this.config[h] &&
                  (o[h] = this.config[h]);
            return o;
          }),
          (g._cleanTipClass = function () {
            var o = m.default(this.getTipElement()),
              h = o.attr("class").match(Tt);
            null !== h && h.length && o.removeClass(h.join(""));
          }),
          (g._handlePopperPlacementChange = function (o) {
            (this.tip = o.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(o.placement));
          }),
          (g._fixTransition = function () {
            var o = this.getTipElement(),
              h = this.config.animation;
            null === o.getAttribute("x-placement") &&
              (m.default(o).removeClass("fade"),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = h));
          }),
          (p._jQueryInterface = function (o) {
            return this.each(function () {
              var h = m.default(this),
                b = h.data("bs.tooltip"),
                C = "object" == typeof o && o;
              if (
                (b || !/dispose|hide/.test(o)) &&
                (b || ((b = new p(this, C)), h.data("bs.tooltip", b)),
                "string" == typeof o)
              ) {
                if (void 0 === b[o])
                  throw new TypeError('No method named "' + o + '"');
                b[o]();
              }
            });
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return pn;
              },
            },
            {
              key: "NAME",
              get: function () {
                return $e;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.tooltip";
              },
            },
            {
              key: "Event",
              get: function () {
                return an;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.tooltip";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return dt;
              },
            },
          ]),
          p
        );
      })();
    (m.default.fn[$e] = xe._jQueryInterface),
      (m.default.fn[$e].Constructor = xe),
      (m.default.fn[$e].noConflict = function () {
        return (m.default.fn[$e] = et), xe._jQueryInterface;
      });
    var xt = "popover",
      Bt = m.default.fn[xt],
      Ke = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Qe = te({}, xe.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      ht = te({}, xe.DefaultType, { content: "(string|element|function)" }),
      at = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      },
      z = (function (p) {
        var g, o;
        function h() {
          return p.apply(this, arguments) || this;
        }
        (o = p),
          ((g = h).prototype = Object.create(o.prototype)),
          (g.prototype.constructor = g),
          (g.__proto__ = o);
        var b = h.prototype;
        return (
          (b.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (b.addAttachmentClass = function (C) {
            m.default(this.getTipElement()).addClass("bs-popover-" + C);
          }),
          (b.getTipElement = function () {
            return (
              (this.tip = this.tip || m.default(this.config.template)[0]),
              this.tip
            );
          }),
          (b.setContent = function () {
            var C = m.default(this.getTipElement());
            this.setElementContent(C.find(".popover-header"), this.getTitle());
            var D = this._getContent();
            "function" == typeof D && (D = D.call(this.element)),
              this.setElementContent(C.find(".popover-body"), D),
              C.removeClass("fade show");
          }),
          (b._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (b._cleanTipClass = function () {
            var C = m.default(this.getTipElement()),
              D = C.attr("class").match(Ke);
            null !== D && D.length > 0 && C.removeClass(D.join(""));
          }),
          (h._jQueryInterface = function (C) {
            return this.each(function () {
              var D = m.default(this).data("bs.popover"),
                N = "object" == typeof C ? C : null;
              if (
                (D || !/dispose|hide/.test(C)) &&
                (D ||
                  ((D = new h(this, N)), m.default(this).data("bs.popover", D)),
                "string" == typeof C)
              ) {
                if (void 0 === D[C])
                  throw new TypeError('No method named "' + C + '"');
                D[C]();
              }
            });
          }),
          V(h, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return Qe;
              },
            },
            {
              key: "NAME",
              get: function () {
                return xt;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.popover";
              },
            },
            {
              key: "Event",
              get: function () {
                return at;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.popover";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ht;
              },
            },
          ]),
          h
        );
      })(xe);
    (m.default.fn[xt] = z._jQueryInterface),
      (m.default.fn[xt].Constructor = z),
      (m.default.fn[xt].noConflict = function () {
        return (m.default.fn[xt] = Bt), z._jQueryInterface;
      });
    var je = "scrollspy",
      Yt = m.default.fn[je],
      Ut = { offset: 10, method: "auto", target: "" },
      on = { offset: "number", method: "string", target: "(string|element)" },
      tt = (function () {
        function p(o, h) {
          var b = this;
          (this._element = o),
            (this._scrollElement = "BODY" === o.tagName ? window : o),
            (this._config = this._getConfig(h)),
            (this._selector =
              this._config.target +
              " .nav-link," +
              this._config.target +
              " .list-group-item," +
              this._config.target +
              " .dropdown-item"),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            m
              .default(this._scrollElement)
              .on("scroll.bs.scrollspy", function (C) {
                return b._process(C);
              }),
            this.refresh(),
            this._process();
        }
        var g = p.prototype;
        return (
          (g.refresh = function () {
            var o = this,
              b =
                "auto" === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? "offset"
                    : "position"
                  : this._config.method,
              C = "position" === b ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (D) {
                  var N,
                    F = W.getSelectorFromElement(D);
                  if ((F && (N = document.querySelector(F)), N)) {
                    var M = N.getBoundingClientRect();
                    if (M.width || M.height)
                      return [m.default(N)[b]().top + C, F];
                  }
                  return null;
                })
                .filter(function (D) {
                  return D;
                })
                .sort(function (D, N) {
                  return D[0] - N[0];
                })
                .forEach(function (D) {
                  o._offsets.push(D[0]), o._targets.push(D[1]);
                });
          }),
          (g.dispose = function () {
            m.default.removeData(this._element, "bs.scrollspy"),
              m.default(this._scrollElement).off(".bs.scrollspy"),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (g._getConfig = function (o) {
            if (
              "string" !=
                typeof (o = te({}, Ut, "object" == typeof o && o ? o : {}))
                  .target &&
              W.isElement(o.target)
            ) {
              var h = m.default(o.target).attr("id");
              h || ((h = W.getUID(je)), m.default(o.target).attr("id", h)),
                (o.target = "#" + h);
            }
            return W.typeCheckConfig(je, o, on), o;
          }),
          (g._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (g._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (g._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (g._process = function () {
            var o = this._getScrollTop() + this._config.offset,
              h = this._getScrollHeight(),
              b = this._config.offset + h - this._getOffsetHeight();
            if ((this._scrollHeight !== h && this.refresh(), o >= b)) {
              var C = this._targets[this._targets.length - 1];
              this._activeTarget !== C && this._activate(C);
            } else {
              if (
                this._activeTarget &&
                o < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var D = this._offsets.length; D--; )
                this._activeTarget !== this._targets[D] &&
                  o >= this._offsets[D] &&
                  (void 0 === this._offsets[D + 1] ||
                    o < this._offsets[D + 1]) &&
                  this._activate(this._targets[D]);
            }
          }),
          (g._activate = function (o) {
            (this._activeTarget = o), this._clear();
            var h = this._selector.split(",").map(function (C) {
                return (
                  C + '[data-target="' + o + '"],' + C + '[href="' + o + '"]'
                );
              }),
              b = m.default(
                [].slice.call(document.querySelectorAll(h.join(",")))
              );
            b.hasClass("dropdown-item")
              ? (b
                  .closest(".dropdown")
                  .find(".dropdown-toggle")
                  .addClass("active"),
                b.addClass("active"))
              : (b.addClass("active"),
                b
                  .parents(".nav, .list-group")
                  .prev(".nav-link, .list-group-item")
                  .addClass("active"),
                b
                  .parents(".nav, .list-group")
                  .prev(".nav-item")
                  .children(".nav-link")
                  .addClass("active")),
              m
                .default(this._scrollElement)
                .trigger("activate.bs.scrollspy", { relatedTarget: o });
          }),
          (g._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (o) {
                return o.classList.contains("active");
              })
              .forEach(function (o) {
                return o.classList.remove("active");
              });
          }),
          (p._jQueryInterface = function (o) {
            return this.each(function () {
              var h = m.default(this).data("bs.scrollspy");
              if (
                (h ||
                  ((h = new p(this, "object" == typeof o && o)),
                  m.default(this).data("bs.scrollspy", h)),
                "string" == typeof o)
              ) {
                if (void 0 === h[o])
                  throw new TypeError('No method named "' + o + '"');
                h[o]();
              }
            });
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ut;
              },
            },
          ]),
          p
        );
      })();
    m.default(window).on("load.bs.scrollspy.data-api", function () {
      for (
        var p = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
          g = p.length;
        g--;

      ) {
        var o = m.default(p[g]);
        tt._jQueryInterface.call(o, o.data());
      }
    }),
      (m.default.fn[je] = tt._jQueryInterface),
      (m.default.fn[je].Constructor = tt),
      (m.default.fn[je].noConflict = function () {
        return (m.default.fn[je] = Yt), tt._jQueryInterface;
      });
    var Be = m.default.fn.tab,
      Ze = (function () {
        function p(o) {
          this._element = o;
        }
        var g = p.prototype;
        return (
          (g.show = function () {
            var o = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  m.default(this._element).hasClass("active")) ||
                m.default(this._element).hasClass("disabled")
              )
            ) {
              var h,
                b,
                C = m.default(this._element).closest(".nav, .list-group")[0],
                D = W.getSelectorFromElement(this._element);
              if (C) {
                var N =
                  "UL" === C.nodeName || "OL" === C.nodeName
                    ? "> li > .active"
                    : ".active";
                b = (b = m.default.makeArray(m.default(C).find(N)))[
                  b.length - 1
                ];
              }
              var F = m.default.Event("hide.bs.tab", {
                  relatedTarget: this._element,
                }),
                M = m.default.Event("show.bs.tab", { relatedTarget: b });
              if (
                (b && m.default(b).trigger(F),
                m.default(this._element).trigger(M),
                !M.isDefaultPrevented() && !F.isDefaultPrevented())
              ) {
                D && (h = document.querySelector(D)),
                  this._activate(this._element, C);
                var B = function () {
                  var U = m.default.Event("hidden.bs.tab", {
                      relatedTarget: o._element,
                    }),
                    Y = m.default.Event("shown.bs.tab", { relatedTarget: b });
                  m.default(b).trigger(U), m.default(o._element).trigger(Y);
                };
                h ? this._activate(h, h.parentNode, B) : B();
              }
            }
          }),
          (g.dispose = function () {
            m.default.removeData(this._element, "bs.tab"),
              (this._element = null);
          }),
          (g._activate = function (o, h, b) {
            var C = this,
              D = (
                !h || ("UL" !== h.nodeName && "OL" !== h.nodeName)
                  ? m.default(h).children(".active")
                  : m.default(h).find("> li > .active")
              )[0],
              N = b && D && m.default(D).hasClass("fade"),
              F = function () {
                return C._transitionComplete(o, D, b);
              };
            if (D && N) {
              var M = W.getTransitionDurationFromElement(D);
              m.default(D)
                .removeClass("show")
                .one(W.TRANSITION_END, F)
                .emulateTransitionEnd(M);
            } else F();
          }),
          (g._transitionComplete = function (o, h, b) {
            if (h) {
              m.default(h).removeClass("active");
              var C = m
                .default(h.parentNode)
                .find("> .dropdown-menu .active")[0];
              C && m.default(C).removeClass("active"),
                "tab" === h.getAttribute("role") &&
                  h.setAttribute("aria-selected", !1);
            }
            if (
              (m.default(o).addClass("active"),
              "tab" === o.getAttribute("role") &&
                o.setAttribute("aria-selected", !0),
              W.reflow(o),
              o.classList.contains("fade") && o.classList.add("show"),
              o.parentNode && m.default(o.parentNode).hasClass("dropdown-menu"))
            ) {
              var D = m.default(o).closest(".dropdown")[0];
              if (D) {
                var N = [].slice.call(D.querySelectorAll(".dropdown-toggle"));
                m.default(N).addClass("active");
              }
              o.setAttribute("aria-expanded", !0);
            }
            b && b();
          }),
          (p._jQueryInterface = function (o) {
            return this.each(function () {
              var h = m.default(this),
                b = h.data("bs.tab");
              if (
                (b || ((b = new p(this)), h.data("bs.tab", b)),
                "string" == typeof o)
              ) {
                if (void 0 === b[o])
                  throw new TypeError('No method named "' + o + '"');
                b[o]();
              }
            });
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
          ]),
          p
        );
      })();
    m
      .default(document)
      .on(
        "click.bs.tab.data-api",
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function (p) {
          p.preventDefault(), Ze._jQueryInterface.call(m.default(this), "show");
        }
      ),
      (m.default.fn.tab = Ze._jQueryInterface),
      (m.default.fn.tab.Constructor = Ze),
      (m.default.fn.tab.noConflict = function () {
        return (m.default.fn.tab = Be), Ze._jQueryInterface;
      });
    var it = m.default.fn.toast,
      Ye = { animation: "boolean", autohide: "boolean", delay: "number" },
      pt = { animation: !0, autohide: !0, delay: 500 },
      ut = (function () {
        function p(o, h) {
          (this._element = o),
            (this._config = this._getConfig(h)),
            (this._timeout = null),
            this._setListeners();
        }
        var g = p.prototype;
        return (
          (g.show = function () {
            var o = this,
              h = m.default.Event("show.bs.toast");
            if (
              (m.default(this._element).trigger(h), !h.isDefaultPrevented())
            ) {
              this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
              var b = function () {
                o._element.classList.remove("showing"),
                  o._element.classList.add("show"),
                  m.default(o._element).trigger("shown.bs.toast"),
                  o._config.autohide &&
                    (o._timeout = setTimeout(function () {
                      o.hide();
                    }, o._config.delay));
              };
              if (
                (this._element.classList.remove("hide"),
                W.reflow(this._element),
                this._element.classList.add("showing"),
                this._config.animation)
              ) {
                var C = W.getTransitionDurationFromElement(this._element);
                m.default(this._element)
                  .one(W.TRANSITION_END, b)
                  .emulateTransitionEnd(C);
              } else b();
            }
          }),
          (g.hide = function () {
            if (this._element.classList.contains("show")) {
              var o = m.default.Event("hide.bs.toast");
              m.default(this._element).trigger(o),
                o.isDefaultPrevented() || this._close();
            }
          }),
          (g.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains("show") &&
                this._element.classList.remove("show"),
              m.default(this._element).off("click.dismiss.bs.toast"),
              m.default.removeData(this._element, "bs.toast"),
              (this._element = null),
              (this._config = null);
          }),
          (g._getConfig = function (o) {
            return (
              (o = te(
                {},
                pt,
                m.default(this._element).data(),
                "object" == typeof o && o ? o : {}
              )),
              W.typeCheckConfig("toast", o, this.constructor.DefaultType),
              o
            );
          }),
          (g._setListeners = function () {
            var o = this;
            m.default(this._element).on(
              "click.dismiss.bs.toast",
              '[data-dismiss="toast"]',
              function () {
                return o.hide();
              }
            );
          }),
          (g._close = function () {
            var o = this,
              h = function () {
                o._element.classList.add("hide"),
                  m.default(o._element).trigger("hidden.bs.toast");
              };
            if (
              (this._element.classList.remove("show"), this._config.animation)
            ) {
              var b = W.getTransitionDurationFromElement(this._element);
              m.default(this._element)
                .one(W.TRANSITION_END, h)
                .emulateTransitionEnd(b);
            } else h();
          }),
          (g._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (p._jQueryInterface = function (o) {
            return this.each(function () {
              var h = m.default(this),
                b = h.data("bs.toast");
              if (
                (b ||
                  ((b = new p(this, "object" == typeof o && o)),
                  h.data("bs.toast", b)),
                "string" == typeof o)
              ) {
                if (void 0 === b[o])
                  throw new TypeError('No method named "' + o + '"');
                b[o](this);
              }
            });
          }),
          V(p, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Ye;
              },
            },
            {
              key: "Default",
              get: function () {
                return pt;
              },
            },
          ]),
          p
        );
      })();
    (m.default.fn.toast = ut._jQueryInterface),
      (m.default.fn.toast.Constructor = ut),
      (m.default.fn.toast.noConflict = function () {
        return (m.default.fn.toast = it), ut._jQueryInterface;
      }),
      (w.Alert = ne),
      (w.Button = Ae),
      (w.Carousel = c),
      (w.Collapse = wt),
      (w.Dropdown = Le),
      (w.Modal = Ft),
      (w.Popover = z),
      (w.Scrollspy = tt),
      (w.Tab = Ze),
      (w.Toast = ut),
      (w.Tooltip = xe),
      (w.Util = W),
      Object.defineProperty(w, "__esModule", { value: !0 });
  }),
  (function (w) {
    "use strict";
    if ("function" == typeof define && define.amd)
      define(["jquery"], function (pe) {
        return w(pe, window, document);
      });
    else if ("object" == typeof exports) {
      var de = require("jquery");
      "undefined" == typeof window
        ? (module.exports = function (pe, I) {
            return (
              pe || (pe = window), I || (I = de(pe)), w(I, pe, pe.document)
            );
          })
        : (module.exports = w(de, window, window.document));
    } else window.DataTable = w(jQuery, window, document);
  })(function (w, de, pe, I) {
    "use strict";
    var Te,
      ae,
      V,
      te,
      m = function (e, t) {
        if (m.factory(e, t)) return m;
        if (this instanceof m) return w(e).DataTable(t);
        (t = e),
          (this.$ = function (f, d) {
            return this.api(!0).$(f, d);
          }),
          (this._ = function (f, d) {
            return this.api(!0).rows(f, d).data();
          }),
          (this.api = function (f) {
            return new ae(f ? wn(this[Te.iApiIndex]) : this);
          }),
          (this.fnAddData = function (f, d) {
            var v = this.api(!0),
              y =
                Array.isArray(f) &&
                (Array.isArray(f[0]) || w.isPlainObject(f[0]))
                  ? v.rows.add(f)
                  : v.row.add(f);
            return (d === I || d) && v.draw(), y.flatten().toArray();
          }),
          (this.fnAdjustColumnSizing = function (f) {
            var d = this.api(!0).columns.adjust(),
              v = d.settings()[0],
              y = v.oScroll;
            f === I || f ? d.draw(!1) : ("" !== y.sX || "" !== y.sY) && fn(v);
          }),
          (this.fnClearTable = function (f) {
            var d = this.api(!0).clear();
            (f === I || f) && d.draw();
          }),
          (this.fnClose = function (f) {
            this.api(!0).row(f).child.hide();
          }),
          (this.fnDeleteRow = function (f, d, v) {
            var y = this.api(!0),
              _ = y.rows(f),
              T = _.settings()[0],
              S = T.aoData[_[0][0]];
            return (
              _.remove(), d && d.call(this, T, S), (v === I || v) && y.draw(), S
            );
          }),
          (this.fnDestroy = function (f) {
            this.api(!0).destroy(f);
          }),
          (this.fnDraw = function (f) {
            this.api(!0).draw(f);
          }),
          (this.fnFilter = function (f, d, v, y, _, T) {
            var S = this.api(!0);
            null === d || d === I
              ? S.search(f, v, y, T)
              : S.column(d).search(f, v, y, T),
              S.draw();
          }),
          (this.fnGetData = function (f, d) {
            var v = this.api(!0);
            if (f !== I) {
              var y = f.nodeName ? f.nodeName.toLowerCase() : "";
              return d !== I || "td" == y || "th" == y
                ? v.cell(f, d).data()
                : v.row(f).data() || null;
            }
            return v.data().toArray();
          }),
          (this.fnGetNodes = function (f) {
            var d = this.api(!0);
            return f !== I
              ? d.row(f).node()
              : d.rows().nodes().flatten().toArray();
          }),
          (this.fnGetPosition = function (f) {
            var d = this.api(!0),
              v = f.nodeName.toUpperCase();
            if ("TR" == v) return d.row(f).index();
            if ("TD" == v || "TH" == v) {
              var y = d.cell(f).index();
              return [y.row, y.columnVisible, y.column];
            }
            return null;
          }),
          (this.fnIsOpen = function (f) {
            return this.api(!0).row(f).child.isShown();
          }),
          (this.fnOpen = function (f, d, v) {
            return this.api(!0).row(f).child(d, v).show().child()[0];
          }),
          (this.fnPageChange = function (f, d) {
            var v = this.api(!0).page(f);
            (d === I || d) && v.draw(!1);
          }),
          (this.fnSetColumnVis = function (f, d, v) {
            var y = this.api(!0).column(f).visible(d);
            (v === I || v) && y.columns.adjust().draw();
          }),
          (this.fnSettings = function () {
            return wn(this[Te.iApiIndex]);
          }),
          (this.fnSort = function (f) {
            this.api(!0).order(f).draw();
          }),
          (this.fnSortListener = function (f, d, v) {
            this.api(!0).order.listener(f, d, v);
          }),
          (this.fnUpdate = function (f, d, v, y, _) {
            var T = this.api(!0);
            return (
              v === I || null === v ? T.row(d).data(f) : T.cell(d, v).data(f),
              (_ === I || _) && T.columns.adjust(),
              (y === I || y) && T.draw(),
              0
            );
          }),
          (this.fnVersionCheck = Te.fnVersionCheck);
        var r = this,
          a = t === I,
          s = this.length;
        for (var l in (a && (t = {}),
        (this.oApi = this.internal = Te.internal),
        m.ext.internal))
          l && (this[l] = u(l));
        return (
          this.each(function () {
            var y,
              d = s > 1 ? qn({}, t, !0) : t,
              v = 0,
              k = this.getAttribute("id"),
              R = !1,
              q = m.defaults,
              K = w(this);
            if ("table" == this.nodeName.toLowerCase()) {
              jt(q),
                Wt(q.column),
                Ct(q, q, !0),
                Ct(q.column, q.column, !0),
                Ct(q, w.extend(d, K.data()), !0);
              var H = m.settings;
              for (v = 0, y = H.length; v < y; v++) {
                var le = H[v];
                if (
                  le.nTable == this ||
                  (le.nTHead && le.nTHead.parentNode == this) ||
                  (le.nTFoot && le.nTFoot.parentNode == this)
                ) {
                  if (a || (d.bRetrieve !== I ? d.bRetrieve : q.bRetrieve))
                    return le.oInstance;
                  if (d.bDestroy !== I ? d.bDestroy : q.bDestroy) {
                    le.oInstance.fnDestroy();
                    break;
                  }
                  return void Et(le, 0, "Cannot reinitialise DataTable", 3);
                }
                if (le.sTableId == this.id) {
                  H.splice(v, 1);
                  break;
                }
              }
              (null === k || "" === k) &&
                ((k = "DataTables_Table_" + m.ext._unique++), (this.id = k));
              var P = w.extend(!0, {}, m.models.oSettings, {
                sDestroyWidth: K[0].style.width,
                sInstance: k,
                sTableId: k,
              });
              (P.nTable = this),
                (P.oApi = r.internal),
                (P.oInit = d),
                H.push(P),
                (P.oInstance = 1 === r.length ? r : K.dataTable()),
                jt(d),
                rt(d.oLanguage),
                d.aLengthMenu &&
                  !d.iDisplayLength &&
                  (d.iDisplayLength = Array.isArray(d.aLengthMenu[0])
                    ? d.aLengthMenu[0][0]
                    : d.aLengthMenu[0]),
                (d = qn(w.extend(!0, {}, q), d)),
                vt(P.oFeatures, d, [
                  "bPaginate",
                  "bLengthChange",
                  "bFilter",
                  "bSort",
                  "bSortMulti",
                  "bInfo",
                  "bProcessing",
                  "bAutoWidth",
                  "bSortClasses",
                  "bServerSide",
                  "bDeferRender",
                ]),
                vt(P, d, [
                  "asStripeClasses",
                  "ajax",
                  "fnServerData",
                  "fnFormatNumber",
                  "sServerMethod",
                  "aaSorting",
                  "aaSortingFixed",
                  "aLengthMenu",
                  "sPaginationType",
                  "sAjaxSource",
                  "sAjaxDataProp",
                  "iStateDuration",
                  "sDom",
                  "bSortCellsTop",
                  "iTabIndex",
                  "fnStateLoadCallback",
                  "fnStateSaveCallback",
                  "renderer",
                  "searchDelay",
                  "rowId",
                  ["iCookieDuration", "iStateDuration"],
                  ["oSearch", "oPreviousSearch"],
                  ["aoSearchCols", "aoPreSearchCols"],
                  ["iDisplayLength", "_iDisplayLength"],
                ]),
                vt(P.oScroll, d, [
                  ["sScrollX", "sX"],
                  ["sScrollXInner", "sXInner"],
                  ["sScrollY", "sY"],
                  ["bScrollCollapse", "bCollapse"],
                ]),
                vt(P.oLanguage, d, "fnInfoCallback"),
                lt(P, "aoDrawCallback", d.fnDrawCallback, "user"),
                lt(P, "aoServerParams", d.fnServerParams, "user"),
                lt(P, "aoStateSaveParams", d.fnStateSaveParams, "user"),
                lt(P, "aoStateLoadParams", d.fnStateLoadParams, "user"),
                lt(P, "aoStateLoaded", d.fnStateLoaded, "user"),
                lt(P, "aoRowCallback", d.fnRowCallback, "user"),
                lt(P, "aoRowCreatedCallback", d.fnCreatedRow, "user"),
                lt(P, "aoHeaderCallback", d.fnHeaderCallback, "user"),
                lt(P, "aoFooterCallback", d.fnFooterCallback, "user"),
                lt(P, "aoInitComplete", d.fnInitComplete, "user"),
                lt(P, "aoPreDrawCallback", d.fnPreDrawCallback, "user"),
                (P.rowIdFn = ht(d.rowId)),
                nn(P);
              var ve = P.oClasses;
              if (
                (w.extend(ve, m.ext.classes, d.oClasses),
                K.addClass(ve.sTable),
                P.iInitDisplayStart === I &&
                  ((P.iInitDisplayStart = d.iDisplayStart),
                  (P._iDisplayStart = d.iDisplayStart)),
                null !== d.iDeferLoading)
              ) {
                P.bDeferLoading = !0;
                var Ve = Array.isArray(d.iDeferLoading);
                (P._iRecordsDisplay = Ve
                  ? d.iDeferLoading[0]
                  : d.iDeferLoading),
                  (P._iRecordsTotal = Ve
                    ? d.iDeferLoading[1]
                    : d.iDeferLoading);
              }
              var Pe = P.oLanguage;
              w.extend(!0, Pe, d.oLanguage),
                Pe.sUrl
                  ? (w.ajax({
                      dataType: "json",
                      url: Pe.sUrl,
                      success: function (me) {
                        Ct(q.oLanguage, me),
                          rt(me),
                          w.extend(!0, Pe, me, P.oInit.oLanguage),
                          _e(P, null, "i18n", [P]),
                          En(P);
                      },
                      error: function () {
                        En(P);
                      },
                    }),
                    (R = !0))
                  : _e(P, null, "i18n", [P]),
                null === d.asStripeClasses &&
                  (P.asStripeClasses = [ve.sStripeOdd, ve.sStripeEven]);
              var ke = P.asStripeClasses,
                Ne = K.children("tbody").find("tr").eq(0);
              -1 !==
                w.inArray(
                  !0,
                  w.map(ke, function (me, X) {
                    return Ne.hasClass(me);
                  })
                ) &&
                (w("tbody tr", this).removeClass(ke.join(" ")),
                (P.asDestroyStripes = ke.slice()));
              var Ce,
                Me = [],
                we = this.getElementsByTagName("thead");
              if (
                (0 !== we.length && (p(P.aoHeader, we[0]), (Me = g(P))),
                null === d.aoColumns)
              )
                for (Ce = [], v = 0, y = Me.length; v < y; v++) Ce.push(null);
              else Ce = d.aoColumns;
              for (v = 0, y = Ce.length; v < y; v++) Vt(P, Me ? Me[v] : null);
              if (
                (zt(P, d.aoColumnDefs, Ce, function (me, X) {
                  Xt(P, me, X);
                }),
                Ne.length)
              ) {
                var De = function (me, X) {
                  return null !== me.getAttribute("data-" + X) ? X : null;
                };
                w(Ne[0])
                  .children("th, td")
                  .each(function (me, X) {
                    var ye = P.aoColumns[me];
                    if (
                      (ye || Et(P, 0, "Incorrect column count", 18),
                      ye.mData === me)
                    ) {
                      var be = De(X, "sort") || De(X, "order"),
                        ge = De(X, "filter") || De(X, "search");
                      (null !== be || null !== ge) &&
                        ((ye.mData = {
                          _: me + ".display",
                          sort: null !== be ? me + ".@data-" + be : I,
                          type: null !== be ? me + ".@data-" + be : I,
                          filter: null !== ge ? me + ".@data-" + ge : I,
                        }),
                        (ye._isArrayHost = !0),
                        Xt(P, me));
                    }
                  });
              }
              var He = P.oFeatures,
                gt = function () {
                  if (d.aaSorting === I) {
                    var me = P.aaSorting;
                    for (v = 0, y = me.length; v < y; v++)
                      me[v][1] = P.aoColumns[v].asSorting[0];
                  }
                  vn(P),
                    He.bSort &&
                      lt(P, "aoDrawCallback", function () {
                        if (P.bSorted) {
                          var ct = mn(P),
                            Nt = {};
                          w.each(ct, function (Sn, Rt) {
                            Nt[Rt.src] = Rt.dir;
                          }),
                            _e(P, null, "order", [P, ct, Nt]),
                            Qn(P);
                        }
                      }),
                    lt(
                      P,
                      "aoDrawCallback",
                      function () {
                        (P.bSorted || "ssp" === Ue(P) || He.bDeferRender) &&
                          vn(P);
                      },
                      "sc"
                    );
                  var X = K.children("caption").each(function () {
                      this._captionSide = w(this).css("caption-side");
                    }),
                    ye = K.children("thead");
                  0 === ye.length && (ye = w("<thead/>").appendTo(K)),
                    (P.nTHead = ye[0]);
                  var be = K.children("tbody");
                  0 === be.length && (be = w("<tbody/>").insertAfter(ye)),
                    (P.nTBody = be[0]);
                  var ge = K.children("tfoot");
                  if (
                    (0 === ge.length &&
                      X.length > 0 &&
                      ("" !== P.oScroll.sX || "" !== P.oScroll.sY) &&
                      (ge = w("<tfoot/>").appendTo(K)),
                    0 === ge.length || 0 === ge.children().length
                      ? K.addClass(ve.sNoFooter)
                      : ge.length > 0 &&
                        ((P.nTFoot = ge[0]), p(P.aoFooter, P.nTFoot)),
                    d.aaData)
                  )
                    for (v = 0; v < d.aaData.length; v++) dt(P, d.aaData[v]);
                  else
                    (P.bDeferLoading || "dom" == Ue(P)) &&
                      rn(P, w(P.nTBody).children("tr"));
                  (P.aiDisplay = P.aiDisplayMaster.slice()),
                    (P.bInitialised = !0),
                    !1 === R && En(P);
                };
              lt(P, "aoDrawCallback", _n, "state_save"),
                d.bStateSave ? ((He.bStateSave = !0), fr(P, 0, gt)) : gt();
            } else Et(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
          }),
          (r = null),
          this
        );
      },
      Lt = {},
      W = /[\r\n\u2028]/g,
      bt = /<.*?>/g,
      yn =
        /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      ne = new RegExp(
        "(\\" +
          [
            "/",
            ".",
            "*",
            "+",
            "?",
            "|",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "\\",
            "$",
            "^",
            "-",
          ].join("|\\") +
          ")",
        "g"
      ),
      ie =
        /['\u00A0,$\xa3\u20ac\xa5%\u2009\u202F\u20BD\u20a9\u20BArfk\u0243\u039e]/gi,
      Ae = function (e) {
        return !e || !0 === e || "-" === e;
      },
      ee = function (e) {
        var t = parseInt(e, 10);
        return !isNaN(t) && isFinite(e) ? t : null;
      },
      Kt = function (e, t) {
        return (
          Lt[t] || (Lt[t] = new RegExp(oe(t), "g")),
          "string" == typeof e && "." !== t
            ? e.replace(/\./g, "").replace(Lt[t], ".")
            : e
        );
      },
      Zt = function (e, t, r) {
        var a = typeof e,
          s = "string" === a;
        return (
          !("number" !== a && "bigint" !== a && !Ae(e)) ||
          (t && s && (e = Kt(e, t)),
          r && s && (e = e.replace(ie, "")),
          !isNaN(parseFloat(e)) && isFinite(e))
        );
      },
      $t = function (e, t, r) {
        if (Ae(e)) return !0;
        var a = (function (e) {
          return Ae(e) || "string" == typeof e;
        })(e);
        return !(!a || !Zt(en(e), t, r)) || null;
      },
      Xe = function (e, t, r) {
        var a = [],
          s = 0,
          l = e.length;
        if (r !== I) for (; s < l; s++) e[s] && e[s][t] && a.push(e[s][t][r]);
        else for (; s < l; s++) e[s] && a.push(e[s][t]);
        return a;
      },
      c = function (e, t, r, a) {
        var s = [],
          l = 0,
          f = t.length;
        if (a !== I) for (; l < f; l++) e[t[l]][r] && s.push(e[t[l]][r][a]);
        else for (; l < f; l++) s.push(e[t[l]][r]);
        return s;
      },
      Ge = function (e, t) {
        var a,
          r = [];
        t === I ? ((t = 0), (a = e)) : ((a = t), (t = e));
        for (var s = t; s < a; s++) r.push(s);
        return r;
      },
      Ee = function (e) {
        for (var t = [], r = 0, a = e.length; r < a; r++) e[r] && t.push(e[r]);
        return t;
      },
      en = function (e) {
        return e.replace(bt, "").replace(/<script/i, "");
      },
      wt = function (e) {
        if (
          (function (e) {
            if (e.length < 2) return !0;
            for (
              var t = e.slice().sort(), r = t[0], a = 1, s = t.length;
              a < s;
              a++
            ) {
              if (t[a] === r) return !1;
              r = t[a];
            }
            return !0;
          })(e)
        )
          return e.slice();
        var r,
          a,
          l,
          t = [],
          s = e.length,
          f = 0;
        e: for (a = 0; a < s; a++) {
          for (r = e[a], l = 0; l < f; l++) if (t[l] === r) continue e;
          t.push(r), f++;
        }
        return t;
      },
      ce = function (e, t) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) ce(e, t[r]);
        else e.push(t);
        return e;
      },
      Mt = function (e, t) {
        return t === I && (t = 0), -1 !== this.indexOf(e, t);
      };
    function qt(e) {
      var r,
        a,
        s = {};
      w.each(e, function (l, f) {
        (r = l.match(/^([^A-Z]+?)([A-Z])/)) &&
          -1 !== "a aa ai ao as b fn i m o s ".indexOf(r[1] + " ") &&
          ((a = l.replace(r[0], r[2].toLowerCase())),
          (s[a] = l),
          "o" === r[1] && qt(e[l]));
      }),
        (e._hungarianMap = s);
    }
    function Ct(e, t, r) {
      var a;
      e._hungarianMap || qt(e),
        w.each(t, function (s, l) {
          (a = e._hungarianMap[s]) !== I &&
            (r || t[a] === I) &&
            ("o" === a.charAt(0)
              ? (t[a] || (t[a] = {}),
                w.extend(!0, t[a], t[s]),
                Ct(e[a], t[a], r))
              : (t[a] = t[s]));
        });
    }
    function rt(e) {
      var t = m.defaults.oLanguage,
        r = t.sDecimal;
      if ((r && tr(r), e)) {
        var a = e.sZeroRecords;
        !e.sEmptyTable &&
          a &&
          "No data available in table" === t.sEmptyTable &&
          vt(e, e, "sZeroRecords", "sEmptyTable"),
          !e.sLoadingRecords &&
            a &&
            "Loading..." === t.sLoadingRecords &&
            vt(e, e, "sZeroRecords", "sLoadingRecords"),
          e.sInfoThousands && (e.sThousands = e.sInfoThousands);
        var s = e.sDecimal;
        s && r !== s && tr(s);
      }
    }
    Array.isArray ||
      (Array.isArray = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }),
      Array.prototype.includes || (Array.prototype.includes = Mt),
      String.prototype.trim ||
        (String.prototype.trim = function () {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }),
      String.prototype.includes || (String.prototype.includes = Mt),
      (m.util = {
        throttle: function (e, t) {
          var a,
            s,
            r = t !== I ? t : 200;
          return function () {
            var l = this,
              f = +new Date(),
              d = arguments;
            a && f < a + r
              ? (clearTimeout(s),
                (s = setTimeout(function () {
                  (a = I), e.apply(l, d);
                }, r)))
              : ((a = f), e.apply(l, d));
          };
        },
        escapeRegex: function (e) {
          return e.replace(ne, "\\$1");
        },
        set: function (e) {
          if (w.isPlainObject(e)) return m.util.set(e._);
          if (null === e) return function () {};
          if ("function" == typeof e)
            return function (r, a, s) {
              e(r, "set", a, s);
            };
          if (
            "string" != typeof e ||
            (-1 === e.indexOf(".") &&
              -1 === e.indexOf("[") &&
              -1 === e.indexOf("("))
          )
            return function (r, a) {
              r[e] = a;
            };
          var t = function (r, a, s) {
            for (
              var f,
                v,
                y,
                _,
                T,
                l = Qe(s),
                d = l[l.length - 1],
                S = 0,
                A = l.length - 1;
              S < A;
              S++
            ) {
              if ("__proto__" === l[S] || "constructor" === l[S])
                throw new Error("Cannot set prototype values");
              if (((v = l[S].match(Bt)), (y = l[S].match(Ke)), v)) {
                if (
                  ((l[S] = l[S].replace(Bt, "")),
                  (r[l[S]] = []),
                  (f = l.slice()).splice(0, S + 1),
                  (T = f.join(".")),
                  Array.isArray(a))
                )
                  for (var k = 0, R = a.length; k < R; k++)
                    t((_ = {}), a[k], T), r[l[S]].push(_);
                else r[l[S]] = a;
                return;
              }
              y && ((l[S] = l[S].replace(Ke, "")), (r = r[l[S]](a))),
                (null === r[l[S]] || r[l[S]] === I) && (r[l[S]] = {}),
                (r = r[l[S]]);
            }
            d.match(Ke)
              ? (r = r[d.replace(Ke, "")](a))
              : (r[d.replace(Bt, "")] = a);
          };
          return function (r, a) {
            return t(r, a, e);
          };
        },
        get: function (e) {
          if (w.isPlainObject(e)) {
            var t = {};
            return (
              w.each(e, function (a, s) {
                s && (t[a] = m.util.get(s));
              }),
              function (a, s, l, f) {
                var d = t[s] || t._;
                return d !== I ? d(a, s, l, f) : a;
              }
            );
          }
          if (null === e)
            return function (a) {
              return a;
            };
          if ("function" == typeof e)
            return function (a, s, l, f) {
              return e(a, s, l, f);
            };
          if (
            "string" != typeof e ||
            (-1 === e.indexOf(".") &&
              -1 === e.indexOf("[") &&
              -1 === e.indexOf("("))
          )
            return function (a, s) {
              return a[e];
            };
          var r = function (a, s, l) {
            var f, d, v, y;
            if ("" !== l)
              for (var _ = Qe(l), T = 0, S = _.length; T < S; T++) {
                if (((f = _[T].match(Bt)), (d = _[T].match(Ke)), f)) {
                  if (
                    ((_[T] = _[T].replace(Bt, "")),
                    "" !== _[T] && (a = a[_[T]]),
                    (v = []),
                    _.splice(0, T + 1),
                    (y = _.join(".")),
                    Array.isArray(a))
                  )
                    for (var A = 0, k = a.length; A < k; A++)
                      v.push(r(a[A], s, y));
                  var R = f[0].substring(1, f[0].length - 1);
                  a = "" === R ? v : v.join(R);
                  break;
                }
                if (d) (_[T] = _[T].replace(Ke, "")), (a = a[_[T]]());
                else {
                  if (null === a || null === a[_[T]]) return null;
                  if (a === I || a[_[T]] === I) return I;
                  a = a[_[T]];
                }
              }
            return a;
          };
          return function (a, s) {
            return r(a, s, e);
          };
        },
      });
    var Le = function (e, t, r) {
      e[t] !== I && (e[r] = e[t]);
    };
    function jt(e) {
      Le(e, "ordering", "bSort"),
        Le(e, "orderMulti", "bSortMulti"),
        Le(e, "orderClasses", "bSortClasses"),
        Le(e, "orderCellsTop", "bSortCellsTop"),
        Le(e, "order", "aaSorting"),
        Le(e, "orderFixed", "aaSortingFixed"),
        Le(e, "paging", "bPaginate"),
        Le(e, "pagingType", "sPaginationType"),
        Le(e, "pageLength", "iDisplayLength"),
        Le(e, "searching", "bFilter"),
        "boolean" == typeof e.sScrollX &&
          (e.sScrollX = e.sScrollX ? "100%" : ""),
        "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : "");
      var t = e.aoSearchCols;
      if (t)
        for (var r = 0, a = t.length; r < a; r++)
          t[r] && Ct(m.models.oSearch, t[r]);
    }
    function Wt(e) {
      Le(e, "orderable", "bSortable"),
        Le(e, "orderData", "aDataSort"),
        Le(e, "orderSequence", "asSorting"),
        Le(e, "orderDataType", "sortDataType");
      var t = e.aDataSort;
      "number" == typeof t && !Array.isArray(t) && (e.aDataSort = [t]);
    }
    function nn(e) {
      if (!m.__browser) {
        var t = {};
        m.__browser = t;
        var r = w("<div/>")
            .css({
              position: "fixed",
              top: 0,
              left: -1 * w(de).scrollLeft(),
              height: 1,
              width: 1,
              overflow: "hidden",
            })
            .append(
              w("<div/>")
                .css({
                  position: "absolute",
                  top: 1,
                  left: 1,
                  width: 100,
                  overflow: "scroll",
                })
                .append(w("<div/>").css({ width: "100%", height: 10 }))
            )
            .appendTo("body"),
          a = r.children(),
          s = a.children();
        (t.barWidth = a[0].offsetWidth - a[0].clientWidth),
          (t.bScrollOversize =
            100 === s[0].offsetWidth && 100 !== a[0].clientWidth),
          (t.bScrollbarLeft = 1 !== Math.round(s.offset().left)),
          (t.bBounding = !!r[0].getBoundingClientRect().width),
          r.remove();
      }
      w.extend(e.oBrowser, m.__browser),
        (e.oScroll.iBarWidth = m.__browser.barWidth);
    }
    function Ft(e, t, r, a, s, l) {
      var d,
        f = a,
        v = !1;
      for (r !== I && ((d = r), (v = !0)); f !== s; )
        !e.hasOwnProperty(f) ||
          ((d = v ? t(d, e[f], f, e) : e[f]), (v = !0), (f += l));
      return d;
    }
    function Vt(e, t) {
      var r = m.defaults.column,
        a = e.aoColumns.length,
        s = w.extend({}, m.models.oColumn, r, {
          nTh: t || pe.createElement("th"),
          sTitle: r.sTitle ? r.sTitle : t ? t.innerHTML : "",
          aDataSort: r.aDataSort ? r.aDataSort : [a],
          mData: r.mData ? r.mData : a,
          idx: a,
        });
      e.aoColumns.push(s);
      var l = e.aoPreSearchCols;
      (l[a] = w.extend({}, m.models.oSearch, l[a])), Xt(e, a, w(t).data());
    }
    function Xt(e, t, r) {
      var a = e.aoColumns[t],
        s = e.oClasses,
        l = w(a.nTh);
      if (!a.sWidthOrig) {
        a.sWidthOrig = l.attr("width") || null;
        var f = (l.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
        f && (a.sWidthOrig = f[1]);
      }
      if (r !== I && null !== r) {
        Wt(r),
          Ct(m.defaults.column, r, !0),
          r.mDataProp !== I && !r.mData && (r.mData = r.mDataProp),
          r.sType && (a._sManualType = r.sType),
          r.className && !r.sClass && (r.sClass = r.className),
          r.sClass && l.addClass(r.sClass);
        var d = a.sClass;
        w.extend(a, r),
          vt(a, r, "sWidth", "sWidthOrig"),
          d !== a.sClass && (a.sClass = d + " " + a.sClass),
          r.iDataSort !== I && (a.aDataSort = [r.iDataSort]),
          vt(a, r, "aDataSort"),
          a.ariaTitle || (a.ariaTitle = l.attr("aria-label"));
      }
      var v = a.mData,
        y = ht(v),
        _ = a.mRender ? ht(a.mRender) : null,
        T = function (k) {
          return "string" == typeof k && -1 !== k.indexOf("@");
        };
      (a._bAttrSrc =
        w.isPlainObject(v) && (T(v.sort) || T(v.type) || T(v.filter))),
        (a._setter = null),
        (a.fnGetData = function (k, R, q) {
          var K = y(k, R, I, q);
          return _ && R ? _(K, R, k, q) : K;
        }),
        (a.fnSetData = function (k, R, q) {
          return at(v)(k, R, q);
        }),
        "number" != typeof v && !a._isArrayHost && (e._rowReadObject = !0),
        e.oFeatures.bSort || ((a.bSortable = !1), l.addClass(s.sSortableNone));
      var S = -1 !== w.inArray("asc", a.asSorting),
        A = -1 !== w.inArray("desc", a.asSorting);
      a.bSortable && (S || A)
        ? S && !A
          ? ((a.sSortingClass = s.sSortableAsc),
            (a.sSortingClassJUI = s.sSortJUIAscAllowed))
          : !S && A
          ? ((a.sSortingClass = s.sSortableDesc),
            (a.sSortingClassJUI = s.sSortJUIDescAllowed))
          : ((a.sSortingClass = s.sSortable), (a.sSortingClassJUI = s.sSortJUI))
        : ((a.sSortingClass = s.sSortableNone), (a.sSortingClassJUI = ""));
    }
    function Qt(e) {
      if (!1 !== e.oFeatures.bAutoWidth) {
        var t = e.aoColumns;
        Pn(e);
        for (var r = 0, a = t.length; r < a; r++)
          t[r].nTh.style.width = t[r].sWidth;
      }
      var s = e.oScroll;
      ("" !== s.sY || "" !== s.sX) && fn(e), _e(e, null, "column-sizing", [e]);
    }
    function Ot(e, t) {
      var r = et(e, "bVisible");
      return "number" == typeof r[t] ? r[t] : null;
    }
    function kt(e, t) {
      var r = et(e, "bVisible"),
        a = w.inArray(t, r);
      return -1 !== a ? a : null;
    }
    function $e(e) {
      var t = 0;
      return (
        w.each(e.aoColumns, function (r, a) {
          a.bVisible && "none" !== w(a.nTh).css("display") && t++;
        }),
        t
      );
    }
    function et(e, t) {
      var r = [];
      return (
        w.map(e.aoColumns, function (a, s) {
          a[t] && r.push(s);
        }),
        r
      );
    }
    function Tt(e) {
      var s,
        l,
        f,
        d,
        v,
        y,
        _,
        S,
        A,
        t = e.aoColumns,
        r = e.aoData,
        a = m.ext.type.detect;
      for (s = 0, l = t.length; s < l; s++)
        if (((A = []), !(_ = t[s]).sType && _._sManualType))
          _.sType = _._sManualType;
        else if (!_.sType) {
          for (f = 0, d = a.length; f < d; f++) {
            for (
              v = 0, y = r.length;
              v < y &&
              (A[v] === I && (A[v] = xe(e, v, s, "type")),
              ((S = a[f](A[v], e)) || f === a.length - 1) &&
                ("html" !== S || Ae(A[v])));
              v++
            );
            if (S) {
              _.sType = S;
              break;
            }
          }
          _.sType || (_.sType = "string");
        }
    }
    function zt(e, t, r, a) {
      var s,
        l,
        f,
        d,
        v,
        y,
        _,
        T = e.aoColumns;
      if (t)
        for (s = t.length - 1; s >= 0; s--) {
          var S =
            (_ = t[s]).target !== I
              ? _.target
              : _.targets !== I
              ? _.targets
              : _.aTargets;
          for (Array.isArray(S) || (S = [S]), f = 0, d = S.length; f < d; f++)
            if ("number" == typeof S[f] && S[f] >= 0) {
              for (; T.length <= S[f]; ) Vt(e);
              a(S[f], _);
            } else if ("number" == typeof S[f] && S[f] < 0)
              a(T.length + S[f], _);
            else if ("string" == typeof S[f])
              for (v = 0, y = T.length; v < y; v++)
                ("_all" == S[f] || w(T[v].nTh).hasClass(S[f])) && a(v, _);
        }
      if (r) for (s = 0, l = r.length; s < l; s++) a(s, r[s]);
    }
    function dt(e, t, r, a) {
      var s = e.aoData.length,
        l = w.extend(!0, {}, m.models.oRow, {
          src: r ? "dom" : "data",
          idx: s,
        });
      (l._aData = t), e.aoData.push(l);
      for (var v = e.aoColumns, y = 0, _ = v.length; y < _; y++)
        v[y].sType = null;
      e.aiDisplayMaster.push(s);
      var T = e.rowIdFn(t);
      return (
        T !== I && (e.aIds[T] = l),
        (r || !e.oFeatures.bDeferRender) && tt(e, s, r, a),
        s
      );
    }
    function rn(e, t) {
      var r;
      return (
        t instanceof w || (t = w(t)),
        t.map(function (a, s) {
          return (r = on(e, s)), dt(e, r.data, s, r.cells);
        })
      );
    }
    function xe(e, t, r, a) {
      "search" === a ? (a = "filter") : "order" === a && (a = "sort");
      var s = e.iDraw,
        l = e.aoColumns[r],
        f = e.aoData[t]._aData,
        d = l.sDefaultContent,
        v = l.fnGetData(f, a, { settings: e, row: t, col: r });
      if (v === I)
        return (
          e.iDrawError != s &&
            null === d &&
            (Et(
              e,
              0,
              "Requested unknown parameter " +
                ("function" == typeof l.mData
                  ? "{function}"
                  : "'" + l.mData + "'") +
                " for row " +
                t +
                ", column " +
                r,
              4
            ),
            (e.iDrawError = s)),
          d
        );
      if ((v !== f && null !== v) || null === d || a === I) {
        if ("function" == typeof v) return v.call(f);
      } else v = d;
      if (null === v && "display" === a) return "";
      if ("filter" === a) {
        var y = m.ext.type.search;
        y[l.sType] && (v = y[l.sType](v));
      }
      return v;
    }
    function xt(e, t, r, a) {
      e.aoColumns[r].fnSetData(e.aoData[t]._aData, a, {
        settings: e,
        row: t,
        col: r,
      });
    }
    var Bt = /\[.*?\]$/,
      Ke = /\(\)$/;
    function Qe(e) {
      return w.map(e.match(/(\\.|[^\.])+/g) || [""], function (t) {
        return t.replace(/\\\./g, ".");
      });
    }
    var ht = m.util.get,
      at = m.util.set;
    function z(e) {
      return Xe(e.aoData, "_aData");
    }
    function je(e) {
      (e.aoData.length = 0),
        (e.aiDisplayMaster.length = 0),
        (e.aiDisplay.length = 0),
        (e.aIds = {});
    }
    function Yt(e, t, r) {
      for (var a = -1, s = 0, l = e.length; s < l; s++)
        e[s] == t ? (a = s) : e[s] > t && e[s]--;
      -1 != a && r === I && e.splice(a, 1);
    }
    function Ut(e, t, r, a) {
      var l,
        f,
        s = e.aoData[t],
        d = function (_, T) {
          for (; _.childNodes.length; ) _.removeChild(_.firstChild);
          _.innerHTML = xe(e, t, T, "display");
        };
      if ("dom" !== r && ((r && "auto" !== r) || "dom" !== s.src)) {
        var v = s.anCells;
        if (v)
          if (a !== I) d(v[a], a);
          else for (l = 0, f = v.length; l < f; l++) d(v[l], l);
      } else s._aData = on(e, s, a, a === I ? I : s._aData).data;
      (s._aSortData = null), (s._aFilterData = null);
      var y = e.aoColumns;
      if (a !== I) y[a].sType = null;
      else {
        for (l = 0, f = y.length; l < f; l++) y[l].sType = null;
        Be(e, s);
      }
    }
    function on(e, t, r, a) {
      var f,
        d,
        _,
        s = [],
        l = t.firstChild,
        y = 0,
        T = e.aoColumns,
        S = e._rowReadObject;
      a = a !== I ? a : S ? {} : [];
      var A = function (le, Z) {
          if ("string" == typeof le) {
            var ue = le.indexOf("@");
            if (-1 !== ue) {
              var P = le.substring(ue + 1);
              at(le)(a, Z.getAttribute(P));
            }
          }
        },
        k = function (le) {
          (r !== I && r !== y) ||
            ((d = T[y]),
            (_ = le.innerHTML.trim()),
            d && d._bAttrSrc
              ? (at(d.mData._)(a, _),
                A(d.mData.sort, le),
                A(d.mData.type, le),
                A(d.mData.filter, le))
              : S
              ? (d._setter || (d._setter = at(d.mData)), d._setter(a, _))
              : (a[y] = _)),
            y++;
        };
      if (l)
        for (; l; )
          ("TD" == (f = l.nodeName.toUpperCase()) || "TH" == f) &&
            (k(l), s.push(l)),
            (l = l.nextSibling);
      else for (var R = 0, q = (s = t.anCells).length; R < q; R++) k(s[R]);
      var K = t.firstChild ? t : t.nTr;
      if (K) {
        var H = K.getAttribute("id");
        H && at(e.rowId)(a, H);
      }
      return { data: a, cells: s };
    }
    function tt(e, t, r, a) {
      var d,
        v,
        y,
        _,
        T,
        S,
        s = e.aoData[t],
        l = s._aData,
        f = [];
      if (null === s.nTr) {
        for (
          d = r || pe.createElement("tr"),
            s.nTr = d,
            s.anCells = f,
            d._DT_RowIndex = t,
            Be(e, s),
            _ = 0,
            T = e.aoColumns.length;
          _ < T;
          _++
        )
          (y = e.aoColumns[_]),
            (v = (S = !r) ? pe.createElement(y.sCellType) : a[_]) ||
              Et(e, 0, "Incorrect column count", 18),
            (v._DT_CellIndex = { row: t, column: _ }),
            f.push(v),
            (S ||
              ((y.mRender || y.mData !== _) &&
                (!w.isPlainObject(y.mData) || y.mData._ !== _ + ".display"))) &&
              (v.innerHTML = xe(e, t, _, "display")),
            y.sClass && (v.className += " " + y.sClass),
            y.bVisible && !r
              ? d.appendChild(v)
              : !y.bVisible && r && v.parentNode.removeChild(v),
            y.fnCreatedCell &&
              y.fnCreatedCell.call(e.oInstance, v, xe(e, t, _), l, t, _);
        _e(e, "aoRowCreatedCallback", null, [d, l, t, f]);
      }
    }
    function Be(e, t) {
      var r = t.nTr,
        a = t._aData;
      if (r) {
        var s = e.rowIdFn(a);
        if ((s && (r.id = s), a.DT_RowClass)) {
          var l = a.DT_RowClass.split(" ");
          (t.__rowc = t.__rowc ? wt(t.__rowc.concat(l)) : l),
            w(r).removeClass(t.__rowc.join(" ")).addClass(a.DT_RowClass);
        }
        a.DT_RowAttr && w(r).attr(a.DT_RowAttr),
          a.DT_RowData && w(r).data(a.DT_RowData);
      }
    }
    function Ze(e) {
      var t,
        r,
        a,
        s,
        l,
        f = e.nTHead,
        d = e.nTFoot,
        v = 0 === w("th, td", f).length,
        y = e.oClasses,
        _ = e.aoColumns;
      for (v && (s = w("<tr/>").appendTo(f)), t = 0, r = _.length; t < r; t++)
        (a = w((l = _[t]).nTh).addClass(l.sClass)),
          v && a.appendTo(s),
          e.oFeatures.bSort &&
            (a.addClass(l.sSortingClass),
            !1 !== l.bSortable &&
              (a
                .attr("tabindex", e.iTabIndex)
                .attr("aria-controls", e.sTableId),
              cn(e, l.nTh, t))),
          l.sTitle != a[0].innerHTML && a.html(l.sTitle),
          Jn(e, "header")(e, a, l, y);
      if (
        (v && p(e.aoHeader, f),
        w(f).children("tr").children("th, td").addClass(y.sHeaderTH),
        w(d).children("tr").children("th, td").addClass(y.sFooterTH),
        null !== d)
      ) {
        var T = e.aoFooter[0];
        for (t = 0, r = T.length; t < r; t++)
          (l = _[t])
            ? ((l.nTf = T[t].cell), l.sClass && w(l.nTf).addClass(l.sClass))
            : Et(e, 0, "Incorrect column count", 18);
      }
    }
    function it(e, t, r) {
      var a,
        s,
        l,
        f,
        d,
        y,
        _,
        k,
        R,
        T = [],
        S = [],
        A = e.aoColumns.length;
      if (t) {
        for (r === I && (r = !1), a = 0, s = t.length; a < s; a++) {
          for (T[a] = t[a].slice(), T[a].nTr = t[a].nTr, l = A - 1; l >= 0; l--)
            !e.aoColumns[l].bVisible && !r && T[a].splice(l, 1);
          S.push([]);
        }
        for (a = 0, s = T.length; a < s; a++) {
          if ((_ = T[a].nTr)) for (; (y = _.firstChild); ) _.removeChild(y);
          for (l = 0, f = T[a].length; l < f; l++)
            if (((k = 1), (R = 1), S[a][l] === I)) {
              for (
                _.appendChild(T[a][l].cell), S[a][l] = 1;
                T[a + k] !== I && T[a][l].cell == T[a + k][l].cell;

              )
                (S[a + k][l] = 1), k++;
              for (; T[a][l + R] !== I && T[a][l].cell == T[a][l + R].cell; ) {
                for (d = 0; d < k; d++) S[a + d][l + R] = 1;
                R++;
              }
              w(T[a][l].cell).attr("rowspan", k).attr("colspan", R);
            }
        }
      }
    }
    function Ye(e, t) {
      !(function (e) {
        var t = "ssp" == Ue(e),
          r = e.iInitDisplayStart;
        r !== I &&
          -1 !== r &&
          ((e._iDisplayStart = t ? r : r >= e.fnRecordsDisplay() ? 0 : r),
          (e.iInitDisplayStart = -1));
      })(e);
      var r = _e(e, "aoPreDrawCallback", "preDraw", [e]);
      if (-1 === w.inArray(!1, r)) {
        var a = [],
          s = 0,
          l = e.asStripeClasses,
          f = l.length,
          d = e.oLanguage,
          v = "ssp" == Ue(e),
          y = e.aiDisplay,
          _ = e._iDisplayStart,
          T = e.fnDisplayEnd();
        if (((e.bDrawing = !0), e.bDeferLoading))
          (e.bDeferLoading = !1), e.iDraw++, mt(e, !1);
        else if (v) {
          if (!e.bDestroying && !t) return void b(e);
        } else e.iDraw++;
        if (0 !== y.length)
          for (var A = v ? e.aoData.length : T, k = v ? 0 : _; k < A; k++) {
            var R = y[k],
              q = e.aoData[R];
            null === q.nTr && tt(e, R);
            var K = q.nTr;
            if (0 !== f) {
              var H = l[s % f];
              q._sRowStripe != H &&
                (w(K).removeClass(q._sRowStripe).addClass(H),
                (q._sRowStripe = H));
            }
            _e(e, "aoRowCallback", null, [K, q._aData, s, k, R]),
              a.push(K),
              s++;
          }
        else {
          var le = d.sZeroRecords;
          1 == e.iDraw && "ajax" == Ue(e)
            ? (le = d.sLoadingRecords)
            : d.sEmptyTable && 0 === e.fnRecordsTotal() && (le = d.sEmptyTable),
            (a[0] = w("<tr/>", { class: f ? l[0] : "" }).append(
              w("<td />", {
                valign: "top",
                colSpan: $e(e),
                class: e.oClasses.sRowEmpty,
              }).html(le)
            )[0]);
        }
        _e(e, "aoHeaderCallback", "header", [
          w(e.nTHead).children("tr")[0],
          z(e),
          _,
          T,
          y,
        ]),
          _e(e, "aoFooterCallback", "footer", [
            w(e.nTFoot).children("tr")[0],
            z(e),
            _,
            T,
            y,
          ]);
        var Z = w(e.nTBody);
        Z.children().detach(),
          Z.append(w(a)),
          _e(e, "aoDrawCallback", "draw", [e]),
          (e.bSorted = !1),
          (e.bFiltered = !1),
          (e.bDrawing = !1);
      } else mt(e, !1);
    }
    function pt(e, t) {
      var r = e.oFeatures,
        s = r.bFilter;
      r.bSort && Mn(e),
        s ? M(e, e.oPreviousSearch) : (e.aiDisplay = e.aiDisplayMaster.slice()),
        !0 !== t && (e._iDisplayStart = 0),
        (e._drawHold = t),
        Ye(e),
        (e._drawHold = !1);
    }
    function ut(e) {
      var t = e.oClasses,
        r = w(e.nTable),
        a = w("<div/>").insertBefore(r),
        s = e.oFeatures,
        l = w("<div/>", {
          id: e.sTableId + "_wrapper",
          class: t.sWrapper + (e.nTFoot ? "" : " " + t.sNoFooter),
        });
      (e.nHolding = a[0]),
        (e.nTableWrapper = l[0]),
        (e.nTableReinsertBefore = e.nTable.nextSibling);
      for (
        var d, v, y, _, T, S, f = e.sDom.split(""), A = 0;
        A < f.length;
        A++
      ) {
        if (((d = null), "<" == (v = f[A]))) {
          if (((y = w("<div/>")[0]), "'" == (_ = f[A + 1]) || '"' == _)) {
            for (T = "", S = 2; f[A + S] != _; ) (T += f[A + S]), S++;
            if (
              ("H" == T ? (T = t.sJUIHeader) : "F" == T && (T = t.sJUIFooter),
              -1 != T.indexOf("."))
            ) {
              var k = T.split(".");
              (y.id = k[0].substr(1, k[0].length - 1)), (y.className = k[1]);
            } else
              "#" == T.charAt(0)
                ? (y.id = T.substr(1, T.length - 1))
                : (y.className = T);
            A += S;
          }
          l.append(y), (l = w(y));
        } else if (">" == v) l = l.parent();
        else if ("l" == v && s.bPaginate && s.bLengthChange) d = Xn(e);
        else if ("f" == v && s.bFilter) d = F(e);
        else if ("r" == v && s.bProcessing) d = kn(e);
        else if ("t" == v) d = or(e);
        else if ("i" == v && s.bInfo) d = ln(e);
        else if ("p" == v && s.bPaginate) d = On(e);
        else if (0 !== m.ext.feature.length)
          for (var R = m.ext.feature, q = 0, K = R.length; q < K; q++)
            if (v == R[q].cFeature) {
              d = R[q].fnInit(e);
              break;
            }
        if (d) {
          var H = e.aanFeatures;
          H[v] || (H[v] = []), H[v].push(d), l.append(d);
        }
      }
      a.replaceWith(l), (e.nHolding = null);
    }
    function p(e, t) {
      var a,
        s,
        l,
        f,
        d,
        v,
        _,
        S,
        A,
        k,
        r = w(t).children("tr"),
        R = function (q, K, H) {
          for (var le = q[K]; le[H]; ) H++;
          return H;
        };
      for (e.splice(0, e.length), l = 0, v = r.length; l < v; l++) e.push([]);
      for (l = 0, v = r.length; l < v; l++)
        for (s = (a = r[l]).firstChild; s; ) {
          if (
            "TD" == s.nodeName.toUpperCase() ||
            "TH" == s.nodeName.toUpperCase()
          )
            for (
              S =
                (S = 1 * s.getAttribute("colspan")) && 0 !== S && 1 !== S
                  ? S
                  : 1,
                A =
                  (A = 1 * s.getAttribute("rowspan")) && 0 !== A && 1 !== A
                    ? A
                    : 1,
                _ = R(e, l, 0),
                k = 1 === S,
                d = 0;
              d < S;
              d++
            )
              for (f = 0; f < A; f++)
                (e[l + f][_ + d] = { cell: s, unique: k }), (e[l + f].nTr = a);
          s = s.nextSibling;
        }
    }
    function g(e, t, r) {
      var a = [];
      r || ((r = e.aoHeader), t && p((r = []), t));
      for (var s = 0, l = r.length; s < l; s++)
        for (var f = 0, d = r[s].length; f < d; f++)
          r[s][f].unique &&
            (!a[f] || !e.bSortCellsTop) &&
            (a[f] = r[s][f].cell);
      return a;
    }
    function h(e, t, r) {
      if (
        (_e(e, "aoServerParams", "serverParams", [t]), t && Array.isArray(t))
      ) {
        var a = {},
          s = /(.*?)\[\]$/;
        w.each(t, function (T, S) {
          var A = S.name.match(s);
          if (A) {
            var k = A[0];
            a[k] || (a[k] = []), a[k].push(S.value);
          } else a[S.name] = S.value;
        }),
          (t = a);
      }
      var l,
        f = e.ajax,
        d = e.oInstance,
        v = function (T) {
          var S = e.jqXHR ? e.jqXHR.status : null;
          (null === T || ("number" == typeof S && 204 == S)) &&
            N(e, (T = {}), []);
          var A = T.error || T.sError;
          A && Et(e, 0, A),
            (e.json = T),
            _e(e, null, "xhr", [e, T, e.jqXHR]),
            r(T);
        };
      if (w.isPlainObject(f) && f.data) {
        var y = "function" == typeof (l = f.data) ? l(t, e) : l;
        (t = "function" == typeof l && y ? y : w.extend(!0, t, y)),
          delete f.data;
      }
      var _ = {
        data: t,
        success: v,
        dataType: "json",
        cache: !1,
        type: e.sServerMethod,
        error: function (T, S, A) {
          var k = _e(e, null, "xhr", [e, null, e.jqXHR]);
          -1 === w.inArray(!0, k) &&
            ("parsererror" == S
              ? Et(e, 0, "Invalid JSON response", 1)
              : 4 === T.readyState && Et(e, 0, "Ajax error", 7)),
            mt(e, !1);
        },
      };
      (e.oAjaxData = t),
        _e(e, null, "preXhr", [e, t]),
        e.fnServerData
          ? e.fnServerData.call(
              d,
              e.sAjaxSource,
              w.map(t, function (T, S) {
                return { name: S, value: T };
              }),
              v,
              e
            )
          : e.sAjaxSource || "string" == typeof f
          ? (e.jqXHR = w.ajax(w.extend(_, { url: f || e.sAjaxSource })))
          : "function" == typeof f
          ? (e.jqXHR = f.call(d, t, v, e))
          : ((e.jqXHR = w.ajax(w.extend(_, f))), (f.data = l));
    }
    function b(e) {
      e.iDraw++, mt(e, !0);
      var t = e._drawHold;
      h(e, C(e), function (r) {
        (e._drawHold = t), D(e, r), (e._drawHold = !1);
      });
    }
    function C(e) {
      var f,
        v,
        y,
        _,
        t = e.aoColumns,
        r = t.length,
        a = e.oFeatures,
        s = e.oPreviousSearch,
        l = e.aoPreSearchCols,
        d = [],
        T = mn(e),
        S = e._iDisplayStart,
        A = !1 !== a.bPaginate ? e._iDisplayLength : -1,
        k = function (K, H) {
          d.push({ name: K, value: H });
        };
      k("sEcho", e.iDraw),
        k("iColumns", r),
        k("sColumns", Xe(t, "sName").join(",")),
        k("iDisplayStart", S),
        k("iDisplayLength", A);
      var R = {
        draw: e.iDraw,
        columns: [],
        order: [],
        start: S,
        length: A,
        search: { value: s.sSearch, regex: s.bRegex },
      };
      for (f = 0; f < r; f++)
        R.columns.push({
          data: (v =
            "function" == typeof (y = t[f]).mData ? "function" : y.mData),
          name: y.sName,
          searchable: y.bSearchable,
          orderable: y.bSortable,
          search: { value: (_ = l[f]).sSearch, regex: _.bRegex },
        }),
          k("mDataProp_" + f, v),
          a.bFilter &&
            (k("sSearch_" + f, _.sSearch),
            k("bRegex_" + f, _.bRegex),
            k("bSearchable_" + f, y.bSearchable)),
          a.bSort && k("bSortable_" + f, y.bSortable);
      a.bFilter && (k("sSearch", s.sSearch), k("bRegex", s.bRegex)),
        a.bSort &&
          (w.each(T, function (K, H) {
            R.order.push({ column: H.col, dir: H.dir }),
              k("iSortCol_" + K, H.col),
              k("sSortDir_" + K, H.dir);
          }),
          k("iSortingCols", T.length));
      var q = m.ext.legacy.ajax;
      return null === q ? (e.sAjaxSource ? d : R) : q ? d : R;
    }
    function D(e, t) {
      var r = function (y, _) {
          return t[y] !== I ? t[y] : t[_];
        },
        a = N(e, t),
        s = r("sEcho", "draw"),
        l = r("iTotalRecords", "recordsTotal"),
        f = r("iTotalDisplayRecords", "recordsFiltered");
      if (s !== I) {
        if (1 * s < e.iDraw) return;
        e.iDraw = 1 * s;
      }
      a || (a = []),
        je(e),
        (e._iRecordsTotal = parseInt(l, 10)),
        (e._iRecordsDisplay = parseInt(f, 10));
      for (var d = 0, v = a.length; d < v; d++) dt(e, a[d]);
      (e.aiDisplay = e.aiDisplayMaster.slice()),
        Ye(e, !0),
        e._bInitComplete || An(e, t),
        mt(e, !1);
    }
    function N(e, t, r) {
      var a =
        w.isPlainObject(e.ajax) && e.ajax.dataSrc !== I
          ? e.ajax.dataSrc
          : e.sAjaxDataProp;
      if (!r) return "data" === a ? t.aaData || t[a] : "" !== a ? ht(a)(t) : t;
      at(a)(t, r);
    }
    function F(e) {
      var t = e.oClasses,
        r = e.sTableId,
        a = e.oLanguage,
        s = e.oPreviousSearch,
        l = e.aanFeatures,
        f = '<input type="search" class="' + t.sFilterInput + '"/>',
        d = a.sSearch;
      d = d.match(/_INPUT_/) ? d.replace("_INPUT_", f) : d + f;
      var v = w("<div/>", {
          id: l.f ? null : r + "_filter",
          class: t.sFilter,
        }).append(w("<label/>").append(d)),
        y = function (S) {
          var k = this.value ? this.value : "";
          (s.return && "Enter" !== S.key) ||
            (k != s.sSearch &&
              (M(e, {
                sSearch: k,
                bRegex: s.bRegex,
                bSmart: s.bSmart,
                bCaseInsensitive: s.bCaseInsensitive,
                return: s.return,
              }),
              (e._iDisplayStart = 0),
              Ye(e)));
        },
        _ = null !== e.searchDelay ? e.searchDelay : "ssp" === Ue(e) ? 400 : 0,
        T = w("input", v)
          .val(s.sSearch)
          .attr("placeholder", a.sSearchPlaceholder)
          .on("keyup.DT search.DT input.DT paste.DT cut.DT", _ ? Rn(y, _) : y)
          .on("mouseup.DT", function (S) {
            setTimeout(function () {
              y.call(T[0], S);
            }, 10);
          })
          .on("keypress.DT", function (S) {
            if (13 == S.keyCode) return !1;
          })
          .attr("aria-controls", r);
      return (
        w(e.nTable).on("search.dt.DT", function (S, A) {
          if (e === A)
            try {
              T[0] !== pe.activeElement && T.val(s.sSearch);
            } catch (k) {}
        }),
        v[0]
      );
    }
    function M(e, t, r) {
      var a = e.oPreviousSearch,
        s = e.aoPreSearchCols,
        l = function (v) {
          (a.sSearch = v.sSearch),
            (a.bRegex = v.bRegex),
            (a.bSmart = v.bSmart),
            (a.bCaseInsensitive = v.bCaseInsensitive),
            (a.return = v.return);
        },
        f = function (v) {
          return v.bEscapeRegex !== I ? !v.bEscapeRegex : v.bRegex;
        };
      if ((Tt(e), "ssp" != Ue(e))) {
        Y(e, t.sSearch, r, f(t), t.bSmart, t.bCaseInsensitive), l(t);
        for (var d = 0; d < s.length; d++)
          U(e, s[d].sSearch, d, f(s[d]), s[d].bSmart, s[d].bCaseInsensitive);
        B(e);
      } else l(t);
      (e.bFiltered = !0), _e(e, null, "search", [e]);
    }
    function B(e) {
      for (
        var a, s, t = m.ext.search, r = e.aiDisplay, l = 0, f = t.length;
        l < f;
        l++
      ) {
        for (var d = [], v = 0, y = r.length; v < y; v++)
          t[l](e, (a = e.aoData[(s = r[v])])._aFilterData, s, a._aData, v) &&
            d.push(s);
        (r.length = 0), w.merge(r, d);
      }
    }
    function U(e, t, r, a, s, l) {
      if ("" !== t) {
        for (
          var d = [], v = e.aiDisplay, y = re(t, a, s, l), _ = 0;
          _ < v.length;
          _++
        )
          y.test(e.aoData[v[_]]._aFilterData[r]) && d.push(v[_]);
        e.aiDisplay = d;
      }
    }
    function Y(e, t, r, a, s, l) {
      var y,
        _,
        T,
        f = re(t, a, s, l),
        d = e.oPreviousSearch.sSearch,
        v = e.aiDisplayMaster,
        S = [];
      if ((0 !== m.ext.search.length && (r = !0), (_ = ft(e)), t.length <= 0))
        e.aiDisplay = v.slice();
      else {
        for (
          (_ ||
            r ||
            a ||
            d.length > t.length ||
            0 !== t.indexOf(d) ||
            e.bSorted) &&
            (e.aiDisplay = v.slice()),
            y = e.aiDisplay,
            T = 0;
          T < y.length;
          T++
        )
          f.test(e.aoData[y[T]]._sFilterRow) && S.push(y[T]);
        e.aiDisplay = S;
      }
    }
    function re(e, t, r, a) {
      if (((e = t ? e : oe(e)), r)) {
        var s = w.map(
          e.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""],
          function (l) {
            if ('"' === l.charAt(0)) {
              var f = l.match(/^"(.*)"$/);
              l = f ? f[1] : l;
            } else
              "\u201c" === l.charAt(0) &&
                ((f = l.match(/^\u201C(.*)\u201D$/)), (l = f ? f[1] : l));
            return l.replace('"', "");
          }
        );
        e = "^(?=.*?" + s.join(")(?=.*?") + ").*$";
      }
      return new RegExp(e, a ? "i" : "");
    }
    var oe = m.util.escapeRegex,
      Oe = w("<div>")[0],
      ot = Oe.textContent !== I;
    function ft(e) {
      var a,
        s,
        l,
        f,
        d,
        v,
        y,
        t = e.aoColumns,
        _ = !1;
      for (a = 0, l = e.aoData.length; a < l; a++)
        if (!(y = e.aoData[a])._aFilterData) {
          for (d = [], s = 0, f = t.length; s < f; s++)
            t[s].bSearchable
              ? (null === (v = xe(e, a, s, "filter")) && (v = ""),
                "string" != typeof v && v.toString && (v = v.toString()))
              : (v = ""),
              v.indexOf &&
                -1 !== v.indexOf("&") &&
                ((Oe.innerHTML = v), (v = ot ? Oe.textContent : Oe.innerText)),
              v.replace && (v = v.replace(/[\r\n\u2028]/g, "")),
              d.push(v);
          (y._aFilterData = d), (y._sFilterRow = d.join("  ")), (_ = !0);
        }
      return _;
    }
    function Je(e) {
      return {
        search: e.sSearch,
        smart: e.bSmart,
        regex: e.bRegex,
        caseInsensitive: e.bCaseInsensitive,
      };
    }
    function Dt(e) {
      return {
        sSearch: e.search,
        bSmart: e.smart,
        bRegex: e.regex,
        bCaseInsensitive: e.caseInsensitive,
      };
    }
    function ln(e) {
      var t = e.sTableId,
        r = e.aanFeatures.i,
        a = w("<div/>", {
          class: e.oClasses.sInfo,
          id: r ? null : t + "_info",
        });
      return (
        r ||
          (e.aoDrawCallback.push({ fn: sn, sName: "information" }),
          a.attr("role", "status").attr("aria-live", "polite"),
          w(e.nTable).attr("aria-describedby", t + "_info")),
        a[0]
      );
    }
    function sn(e) {
      var t = e.aanFeatures.i;
      if (0 !== t.length) {
        var r = e.oLanguage,
          a = e._iDisplayStart + 1,
          s = e.fnDisplayEnd(),
          l = e.fnRecordsTotal(),
          f = e.fnRecordsDisplay(),
          d = f ? r.sInfo : r.sInfoEmpty;
        f !== l && (d += " " + r.sInfoFiltered),
          (d = Fn(e, (d += r.sInfoPostFix)));
        var v = r.fnInfoCallback;
        null !== v && (d = v.call(e.oInstance, e, a, s, l, f, d)), w(t).html(d);
      }
    }
    function Fn(e, t) {
      var r = e.fnFormatNumber,
        a = e._iDisplayStart + 1,
        s = e._iDisplayLength,
        l = e.fnRecordsDisplay(),
        f = -1 === s;
      return t
        .replace(/_START_/g, r.call(e, a))
        .replace(/_END_/g, r.call(e, e.fnDisplayEnd()))
        .replace(/_MAX_/g, r.call(e, e.fnRecordsTotal()))
        .replace(/_TOTAL_/g, r.call(e, l))
        .replace(/_PAGE_/g, r.call(e, f ? 1 : Math.ceil(a / s)))
        .replace(/_PAGES_/g, r.call(e, f ? 1 : Math.ceil(l / s)));
    }
    function En(e) {
      var t,
        r,
        l,
        a = e.iInitDisplayStart,
        s = e.aoColumns,
        f = e.oFeatures,
        d = e.bDeferLoading;
      if (e.bInitialised) {
        for (
          ut(e),
            Ze(e),
            it(e, e.aoHeader),
            it(e, e.aoFooter),
            mt(e, !0),
            f.bAutoWidth && Pn(e),
            t = 0,
            r = s.length;
          t < r;
          t++
        )
          (l = s[t]).sWidth && (l.nTh.style.width = qe(l.sWidth));
        _e(e, null, "preInit", [e]), pt(e);
        var v = Ue(e);
        ("ssp" != v || d) &&
          ("ajax" == v
            ? h(e, [], function (y) {
                var _ = N(e, y);
                for (t = 0; t < _.length; t++) dt(e, _[t]);
                (e.iInitDisplayStart = a), pt(e), mt(e, !1), An(e, y);
              })
            : (mt(e, !1), An(e)));
      } else
        setTimeout(function () {
          En(e);
        }, 200);
    }
    function An(e, t) {
      (e._bInitComplete = !0),
        (t || e.oInit.aaData) && Qt(e),
        _e(e, null, "plugin-init", [e, t]),
        _e(e, "aoInitComplete", "init", [e, t]);
    }
    function un(e, t) {
      var r = parseInt(t, 10);
      (e._iDisplayLength = r), Yn(e), _e(e, null, "length", [e, r]);
    }
    function Xn(e) {
      for (
        var t = e.oClasses,
          r = e.sTableId,
          a = e.aLengthMenu,
          s = Array.isArray(a[0]),
          l = s ? a[0] : a,
          f = s ? a[1] : a,
          d = w("<select/>", {
            name: r + "_length",
            "aria-controls": r,
            class: t.sLengthSelect,
          }),
          v = 0,
          y = l.length;
        v < y;
        v++
      )
        d[0][v] = new Option(
          "number" == typeof f[v] ? e.fnFormatNumber(f[v]) : f[v],
          l[v]
        );
      var _ = w("<div><label/></div>").addClass(t.sLength);
      return (
        e.aanFeatures.l || (_[0].id = r + "_length"),
        _.children().append(
          e.oLanguage.sLengthMenu.replace("_MENU_", d[0].outerHTML)
        ),
        w("select", _)
          .val(e._iDisplayLength)
          .on("change.DT", function (T) {
            un(e, w(this).val()), Ye(e);
          }),
        w(e.nTable).on("length.dt.DT", function (T, S, A) {
          e === S && w("select", _).val(A);
        }),
        _[0]
      );
    }
    function On(e) {
      var t = e.sPaginationType,
        r = m.ext.pager[t],
        a = "function" == typeof r,
        s = function (d) {
          Ye(d);
        },
        l = w("<div/>").addClass(e.oClasses.sPaging + t)[0],
        f = e.aanFeatures;
      return (
        a || r.fnInit(e, l, s),
        f.p ||
          ((l.id = e.sTableId + "_paginate"),
          e.aoDrawCallback.push({
            fn: function (d) {
              if (a) {
                var R,
                  q,
                  v = d._iDisplayStart,
                  y = d._iDisplayLength,
                  _ = d.fnRecordsDisplay(),
                  T = -1 === y,
                  S = T ? 0 : Math.ceil(v / y),
                  A = T ? 1 : Math.ceil(_ / y),
                  k = r(S, A);
                for (R = 0, q = f.p.length; R < q; R++)
                  Jn(d, "pageButton")(d, f.p[R], R, k, S, A);
              } else r.fnUpdate(d, s);
            },
            sName: "pagination",
          })),
        l
      );
    }
    function bn(e, t, r) {
      var a = e._iDisplayStart,
        s = e._iDisplayLength,
        l = e.fnRecordsDisplay();
      0 === l || -1 === s
        ? (a = 0)
        : "number" == typeof t
        ? (a = t * s) > l && (a = 0)
        : "first" == t
        ? (a = 0)
        : "previous" == t
        ? (a = s >= 0 ? a - s : 0) < 0 && (a = 0)
        : "next" == t
        ? a + s < l && (a += s)
        : "last" == t
        ? (a = Math.floor((l - 1) / s) * s)
        : Et(e, 0, "Unknown paging action: " + t, 5);
      var f = e._iDisplayStart !== a;
      return (
        (e._iDisplayStart = a),
        f
          ? (_e(e, null, "page", [e]), r && Ye(e))
          : _e(e, null, "page-nc", [e]),
        f
      );
    }
    function kn(e) {
      return w("<div/>", {
        id: e.aanFeatures.r ? null : e.sTableId + "_processing",
        class: e.oClasses.sProcessing,
        role: "status",
      })
        .html(e.oLanguage.sProcessing)
        .append("<div><div></div><div></div><div></div><div></div></div>")
        .insertBefore(e.nTable)[0];
    }
    function mt(e, t) {
      e.oFeatures.bProcessing &&
        w(e.aanFeatures.r).css("display", t ? "block" : "none"),
        _e(e, null, "processing", [e, t]);
    }
    function or(e) {
      var t = w(e.nTable),
        r = e.oScroll;
      if ("" === r.sX && "" === r.sY) return e.nTable;
      var a = r.sX,
        s = r.sY,
        l = e.oClasses,
        f = t.children("caption"),
        d = f.length ? f[0]._captionSide : null,
        v = w(t[0].cloneNode(!1)),
        y = w(t[0].cloneNode(!1)),
        _ = t.children("tfoot"),
        T = "<div/>",
        S = function (H) {
          return H ? qe(H) : null;
        };
      _.length || (_ = null);
      var A = w(T, { class: l.sScrollWrapper })
        .append(
          w(T, { class: l.sScrollHead })
            .css({
              overflow: "hidden",
              position: "relative",
              border: 0,
              width: a ? S(a) : "100%",
            })
            .append(
              w(T, { class: l.sScrollHeadInner })
                .css({
                  "box-sizing": "content-box",
                  width: r.sXInner || "100%",
                })
                .append(
                  v
                    .removeAttr("id")
                    .css("margin-left", 0)
                    .append("top" === d ? f : null)
                    .append(t.children("thead"))
                )
            )
        )
        .append(
          w(T, { class: l.sScrollBody })
            .css({ position: "relative", overflow: "auto", width: S(a) })
            .append(t)
        );
      _ &&
        A.append(
          w(T, { class: l.sScrollFoot })
            .css({ overflow: "hidden", border: 0, width: a ? S(a) : "100%" })
            .append(
              w(T, { class: l.sScrollFootInner }).append(
                y
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("bottom" === d ? f : null)
                  .append(t.children("tfoot"))
              )
            )
        );
      var k = A.children(),
        R = k[0],
        q = k[1],
        K = _ ? k[2] : null;
      return (
        a &&
          w(q).on("scroll.DT", function (H) {
            var le = this.scrollLeft;
            (R.scrollLeft = le), _ && (K.scrollLeft = le);
          }),
        w(q).css("max-height", s),
        r.bCollapse || w(q).css("height", s),
        (e.nScrollHead = R),
        (e.nScrollBody = q),
        (e.nScrollFoot = K),
        e.aoDrawCallback.push({ fn, sName: "scrolling" }),
        A[0]
      );
    }
    function fn(e) {
      var Pe,
        ke,
        Ne,
        Me,
        Ce,
        we,
        X,
        ye,
        be,
        t = e.oScroll,
        r = t.sX,
        a = t.sXInner,
        s = t.sY,
        l = t.iBarWidth,
        f = w(e.nScrollHead),
        d = f[0].style,
        v = f.children("div"),
        y = v[0].style,
        _ = v.children("table"),
        T = e.nScrollBody,
        S = w(T),
        A = T.style,
        R = w(e.nScrollFoot).children("div"),
        q = R.children("table"),
        K = w(e.nTHead),
        H = w(e.nTable),
        le = H[0],
        Z = le.style,
        ue = e.nTFoot ? w(e.nTFoot) : null,
        P = e.oBrowser,
        ve = P.bScrollOversize,
        De = (Xe(e.aoColumns, "nTh"), []),
        He = [],
        gt = [],
        me = [],
        ge = function (Fe) {
          var Re = Fe.style;
          (Re.paddingTop = "0"),
            (Re.paddingBottom = "0"),
            (Re.borderTopWidth = "0"),
            (Re.borderBottomWidth = "0"),
            (Re.height = 0);
        },
        ct = T.scrollHeight > T.clientHeight;
      if (e.scrollBarVis !== ct && e.scrollBarVis !== I)
        return (e.scrollBarVis = ct), void Qt(e);
      (e.scrollBarVis = ct),
        H.children("thead, tfoot").remove(),
        ue &&
          ((we = ue.clone().prependTo(H)),
          (ke = ue.find("tr")),
          (Me = we.find("tr")),
          we.find("[id]").removeAttr("id")),
        (Ce = K.clone().prependTo(H)),
        (Pe = K.find("tr")),
        (Ne = Ce.find("tr")),
        Ce.find("th, td").removeAttr("tabindex"),
        Ce.find("[id]").removeAttr("id"),
        r || ((A.width = "100%"), (f[0].style.width = "100%")),
        w.each(g(e, Ce), function (Fe, Re) {
          (X = Ot(e, Fe)), (Re.style.width = e.aoColumns[X].sWidth);
        }),
        ue &&
          Pt(function (Fe) {
            Fe.style.width = "";
          }, Me),
        (be = H.outerWidth()),
        "" === r
          ? ((Z.width = "100%"),
            ve &&
              (H.find("tbody").height() > T.offsetHeight ||
                "scroll" == S.css("overflow-y")) &&
              (Z.width = qe(H.outerWidth() - l)),
            (be = H.outerWidth()))
          : "" !== a && ((Z.width = qe(a)), (be = H.outerWidth())),
        Pt(ge, Ne),
        Pt(function (Fe) {
          var Re = de.getComputedStyle
            ? de.getComputedStyle(Fe).width
            : qe(w(Fe).width());
          gt.push(Fe.innerHTML), De.push(Re);
        }, Ne),
        Pt(function (Fe, Re) {
          Fe.style.width = De[Re];
        }, Pe),
        w(Ne).css("height", 0),
        ue &&
          (Pt(ge, Me),
          Pt(function (Fe) {
            me.push(Fe.innerHTML), He.push(qe(w(Fe).css("width")));
          }, Me),
          Pt(function (Fe, Re) {
            Fe.style.width = He[Re];
          }, ke),
          w(Me).height(0)),
        Pt(function (Fe, Re) {
          (Fe.innerHTML =
            '<div class="dataTables_sizing">' + gt[Re] + "</div>"),
            (Fe.childNodes[0].style.height = "0"),
            (Fe.childNodes[0].style.overflow = "hidden"),
            (Fe.style.width = De[Re]);
        }, Ne),
        ue &&
          Pt(function (Fe, Re) {
            (Fe.innerHTML =
              '<div class="dataTables_sizing">' + me[Re] + "</div>"),
              (Fe.childNodes[0].style.height = "0"),
              (Fe.childNodes[0].style.overflow = "hidden"),
              (Fe.style.width = He[Re]);
          }, Me),
        Math.round(H.outerWidth()) < Math.round(be)
          ? ((ye =
              T.scrollHeight > T.offsetHeight || "scroll" == S.css("overflow-y")
                ? be + l
                : be),
            ve &&
              (T.scrollHeight > T.offsetHeight ||
                "scroll" == S.css("overflow-y")) &&
              (Z.width = qe(ye - l)),
            ("" === r || "" !== a) &&
              Et(e, 1, "Possible column misalignment", 6))
          : (ye = "100%"),
        (A.width = qe(ye)),
        (d.width = qe(ye)),
        ue && (e.nScrollFoot.style.width = qe(ye)),
        s || (ve && (A.height = qe(le.offsetHeight + l)));
      var Nt = H.outerWidth();
      (_[0].style.width = qe(Nt)), (y.width = qe(Nt));
      var Sn = H.height() > T.clientHeight || "scroll" == S.css("overflow-y"),
        Rt = "padding" + (P.bScrollbarLeft ? "Left" : "Right");
      (y[Rt] = Sn ? l + "px" : "0px"),
        ue &&
          ((q[0].style.width = qe(Nt)),
          (R[0].style.width = qe(Nt)),
          (R[0].style[Rt] = Sn ? l + "px" : "0px")),
        H.children("colgroup").insertBefore(H.children("thead")),
        S.trigger("scroll"),
        (e.bSorted || e.bFiltered) && !e._drawHold && (T.scrollTop = 0);
    }
    function Pt(e, t, r) {
      for (var f, d, a = 0, s = 0, l = t.length; s < l; ) {
        for (f = t[s].firstChild, d = r ? r[s].firstChild : null; f; )
          1 === f.nodeType && (r ? e(f, d, a) : e(f, a), a++),
            (f = f.nextSibling),
            (d = r ? d.nextSibling : null);
        s++;
      }
    }
    var lr = /<.*?>/g;
    function Pn(e) {
      var A,
        k,
        R,
        t = e.nTable,
        r = e.aoColumns,
        a = e.oScroll,
        s = a.sY,
        l = a.sX,
        f = a.sXInner,
        d = r.length,
        v = et(e, "bVisible"),
        y = w("th", e.nTHead),
        _ = t.getAttribute("width"),
        T = t.parentNode,
        S = !1,
        H = e.oBrowser,
        le = H.bScrollOversize,
        Z = t.style.width;
      Z && -1 !== Z.indexOf("%") && (_ = Z);
      var ue = Hn(Xe(r, "sWidthOrig"), T);
      for (A = 0; A < v.length; A++)
        null !== (k = r[v[A]]).sWidth && ((k.sWidth = ue[A]), (S = !0));
      if (le || (!S && !l && !s && d == $e(e) && d == y.length))
        for (A = 0; A < d; A++) {
          var P = Ot(e, A);
          null !== P && (r[P].sWidth = qe(y.eq(A).width()));
        }
      else {
        var ve = w(t).clone().css("visibility", "hidden").removeAttr("id");
        ve.find("tbody tr").remove();
        var Ve = w("<tr/>").appendTo(ve.find("tbody"));
        for (
          ve.find("thead, tfoot").remove(),
            ve.append(w(e.nTHead).clone()).append(w(e.nTFoot).clone()),
            ve.find("tfoot th, tfoot td").css("width", ""),
            y = g(e, ve.find("thead")[0]),
            A = 0;
          A < v.length;
          A++
        )
          (y[A].style.width =
            null !== (k = r[v[A]]).sWidthOrig && "" !== k.sWidthOrig
              ? qe(k.sWidthOrig)
              : ""),
            k.sWidthOrig &&
              l &&
              w(y[A]).append(
                w("<div/>").css({
                  width: k.sWidthOrig,
                  margin: 0,
                  padding: 0,
                  border: 0,
                  height: 1,
                })
              );
        if (e.aoData.length)
          for (A = 0; A < v.length; A++)
            (k = r[(R = v[A])]),
              w(sr(e, R)).clone(!1).append(k.sContentPadding).appendTo(Ve);
        w("[name]", ve).removeAttr("name");
        var Pe = w("<div/>")
          .css(
            l || s
              ? {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 1,
                  right: 0,
                  overflow: "hidden",
                }
              : {}
          )
          .append(ve)
          .appendTo(T);
        l && f
          ? ve.width(f)
          : l
          ? (ve.css("width", "auto"),
            ve.removeAttr("width"),
            ve.width() < T.clientWidth && _ && ve.width(T.clientWidth))
          : s
          ? ve.width(T.clientWidth)
          : _ && ve.width(_);
        var ke = 0;
        for (A = 0; A < v.length; A++) {
          var Ne = w(y[A]),
            Me = Ne.outerWidth() - Ne.width(),
            Ce = H.bBounding
              ? Math.ceil(y[A].getBoundingClientRect().width)
              : Ne.outerWidth();
          (ke += Ce), (r[v[A]].sWidth = qe(Ce - Me));
        }
        (t.style.width = qe(ke)), Pe.remove();
      }
      if ((_ && (t.style.width = qe(_)), (_ || l) && !e._reszEvt)) {
        var we = function () {
          w(de).on(
            "resize.DT-" + e.sInstance,
            Rn(function () {
              Qt(e);
            })
          );
        };
        le ? setTimeout(we, 1e3) : we(), (e._reszEvt = !0);
      }
    }
    var Rn = m.util.throttle;
    function Hn(e, t) {
      for (var r = [], a = [], s = 0; s < e.length; s++)
        r.push(
          e[s]
            ? w("<div/>")
                .css("width", qe(e[s]))
                .appendTo(t || pe.body)
            : null
        );
      for (s = 0; s < e.length; s++) a.push(r[s] ? r[s][0].offsetWidth : null);
      return w(r).remove(), a;
    }
    function sr(e, t) {
      var r = ur(e, t);
      if (r < 0) return null;
      var a = e.aoData[r];
      return a.nTr ? a.anCells[t] : w("<td/>").html(xe(e, r, t, "display"))[0];
    }
    function ur(e, t) {
      for (var r, a = -1, s = -1, l = 0, f = e.aoData.length; l < f; l++)
        (r = (r = (r = xe(e, l, t, "display") + "").replace(lr, "")).replace(
          /&nbsp;/g,
          " "
        )).length > a && ((a = r.length), (s = l));
      return s;
    }
    function qe(e) {
      return null === e
        ? "0px"
        : "number" == typeof e
        ? e < 0
          ? "0px"
          : e + "px"
        : e.match(/\d$/)
        ? e + "px"
        : e;
    }
    function mn(e) {
      var t,
        a,
        s,
        v,
        y,
        _,
        T,
        l = [],
        d = e.aoColumns,
        S = e.aaSortingFixed,
        A = w.isPlainObject(S),
        k = [],
        R = function (q) {
          q.length && !Array.isArray(q[0]) ? k.push(q) : w.merge(k, q);
        };
      for (
        Array.isArray(S) && R(S),
          A && S.pre && R(S.pre),
          R(e.aaSorting),
          A && S.post && R(S.post),
          t = 0;
        t < k.length;
        t++
      )
        for (a = 0, s = (v = d[(T = k[t][0])].aDataSort).length; a < s; a++)
          (_ = d[(y = v[a])].sType || "string"),
            k[t]._idx === I && (k[t]._idx = w.inArray(k[t][1], d[y].asSorting)),
            l.push({
              src: T,
              col: y,
              dir: k[t][1],
              index: k[t]._idx,
              type: _,
              formatter: m.ext.type.order[_ + "-pre"],
            });
      return l;
    }
    function Mn(e) {
      var t,
        r,
        a,
        Z,
        P,
        _ = [],
        T = m.ext.type.order,
        S = e.aoData,
        le = 0,
        ue = e.aiDisplayMaster;
      for (Tt(e), t = 0, r = (P = mn(e)).length; t < r; t++)
        (Z = P[t]).formatter && le++, gn(e, Z.col);
      if ("ssp" != Ue(e) && 0 !== P.length) {
        for (t = 0, a = ue.length; t < a; t++) _[ue[t]] = t;
        ue.sort(
          le === P.length
            ? function (ve, Ve) {
                var Pe,
                  ke,
                  Ne,
                  Me,
                  Ce,
                  we = P.length,
                  De = S[ve]._aSortData,
                  He = S[Ve]._aSortData;
                for (Ne = 0; Ne < we; Ne++)
                  if (
                    0 !=
                    (Me =
                      (Pe = De[(Ce = P[Ne]).col]) < (ke = He[Ce.col])
                        ? -1
                        : Pe > ke
                        ? 1
                        : 0)
                  )
                    return "asc" === Ce.dir ? Me : -Me;
                return (Pe = _[ve]) < (ke = _[Ve]) ? -1 : Pe > ke ? 1 : 0;
              }
            : function (ve, Ve) {
                var Pe,
                  ke,
                  Ne,
                  Ce,
                  we,
                  He = P.length,
                  gt = S[ve]._aSortData,
                  me = S[Ve]._aSortData;
                for (Ne = 0; Ne < He; Ne++)
                  if (
                    0 !==
                    (Ce = (
                      T[(we = P[Ne]).type + "-" + we.dir] ||
                      T["string-" + we.dir]
                    )((Pe = gt[we.col]), (ke = me[we.col])))
                  )
                    return Ce;
                return (Pe = _[ve]) < (ke = _[Ve]) ? -1 : Pe > ke ? 1 : 0;
              }
        );
      }
      e.bSorted = !0;
    }
    function Qn(e) {
      for (
        var t,
          r,
          a = e.aoColumns,
          s = mn(e),
          l = e.oLanguage.oAria,
          f = 0,
          d = a.length;
        f < d;
        f++
      ) {
        var v = a[f],
          y = v.asSorting,
          _ = v.ariaTitle || v.sTitle.replace(/<.*?>/g, ""),
          T = v.nTh;
        T.removeAttribute("aria-sort"),
          v.bSortable
            ? (s.length > 0 && s[0].col == f
                ? (T.setAttribute(
                    "aria-sort",
                    "asc" == s[0].dir ? "ascending" : "descending"
                  ),
                  (r = y[s[0].index + 1] || y[0]))
                : (r = y[0]),
              (t = _ + ("asc" === r ? l.sSortAscending : l.sSortDescending)))
            : (t = _),
          T.setAttribute("aria-label", t);
      }
    }
    function St(e, t, r, a) {
      var d,
        l = e.aaSorting,
        f = e.aoColumns[t].asSorting,
        v = function (_, T) {
          var S = _._idx;
          return (
            S === I && (S = w.inArray(_[1], f)),
            S + 1 < f.length ? S + 1 : T ? null : 0
          );
        };
      if (
        ("number" == typeof l[0] && (l = e.aaSorting = [l]),
        r && e.oFeatures.bSortMulti)
      ) {
        var y = w.inArray(t, Xe(l, "0"));
        -1 !== y
          ? (null === (d = v(l[y], !0)) && 1 === l.length && (d = 0),
            null === d ? l.splice(y, 1) : ((l[y][1] = f[d]), (l[y]._idx = d)))
          : (l.push([t, f[0], 0]), (l[l.length - 1]._idx = 0));
      } else l.length && l[0][0] == t ? ((d = v(l[0])), (l.length = 1), (l[0][1] = f[d]), (l[0]._idx = d)) : ((l.length = 0), l.push([t, f[0]]), (l[0]._idx = 0));
      pt(e), "function" == typeof a && a(e);
    }
    function cn(e, t, r, a) {
      var s = e.aoColumns[r];
      At(t, {}, function (l) {
        !1 !== s.bSortable &&
          (e.oFeatures.bProcessing
            ? (mt(e, !0),
              setTimeout(function () {
                St(e, r, l.shiftKey, a), "ssp" !== Ue(e) && mt(e, !1);
              }, 0))
            : St(e, r, l.shiftKey, a));
      });
    }
    function vn(e) {
      var l,
        f,
        t = e.aLastSort,
        r = e.oClasses.sSortColumn,
        a = mn(e),
        s = e.oFeatures;
      if (s.bSort && s.bSortClasses) {
        for (l = 0, f = t.length; l < f; l++)
          w(Xe(e.aoData, "anCells", t[l].src)).removeClass(
            r + (l < 2 ? l + 1 : 3)
          );
        for (l = 0, f = a.length; l < f; l++)
          w(Xe(e.aoData, "anCells", a[l].src)).addClass(
            r + (l < 2 ? l + 1 : 3)
          );
      }
      e.aLastSort = a;
    }
    function gn(e, t) {
      var s,
        r = e.aoColumns[t],
        a = m.ext.order[r.sSortDataType];
      a && (s = a.call(e.oInstance, e, t, kt(e, t)));
      for (
        var l,
          f,
          d = m.ext.type.order[r.sType + "-pre"],
          v = 0,
          y = e.aoData.length;
        v < y;
        v++
      )
        (l = e.aoData[v])._aSortData || (l._aSortData = []),
          (!l._aSortData[t] || a) &&
            ((f = a ? s[v] : xe(e, v, t, "sort")),
            (l._aSortData[t] = d ? d(f) : f));
    }
    function _n(e) {
      if (!e._bLoadingState) {
        var t = {
          time: +new Date(),
          start: e._iDisplayStart,
          length: e._iDisplayLength,
          order: w.extend(!0, [], e.aaSorting),
          search: Je(e.oPreviousSearch),
          columns: w.map(e.aoColumns, function (r, a) {
            return { visible: r.bVisible, search: Je(e.aoPreSearchCols[a]) };
          }),
        };
        (e.oSavedState = t),
          _e(e, "aoStateSaveParams", "stateSaveParams", [e, t]),
          e.oFeatures.bStateSave &&
            !e.bDestroying &&
            e.fnStateSaveCallback.call(e.oInstance, e, t);
      }
    }
    function fr(e, t, r) {
      if (e.oFeatures.bStateSave) {
        var s = e.fnStateLoadCallback.call(e.oInstance, e, function (l) {
          zn(e, l, r);
        });
        return s !== I && zn(e, s, r), !0;
      }
      r();
    }
    function zn(e, t, r) {
      var a,
        s,
        l = e.aoColumns;
      e._bLoadingState = !0;
      var f = e._bInitComplete ? new m.Api(e) : null;
      if (!t || !t.time) return (e._bLoadingState = !1), void r();
      var d = _e(e, "aoStateLoadParams", "stateLoadParams", [e, t]);
      if (-1 !== w.inArray(!1, d)) return (e._bLoadingState = !1), void r();
      var v = e.iStateDuration;
      if (v > 0 && t.time < +new Date() - 1e3 * v)
        return (e._bLoadingState = !1), void r();
      if (t.columns && l.length !== t.columns.length)
        return (e._bLoadingState = !1), void r();
      if (
        ((e.oLoadedState = w.extend(!0, {}, t)),
        t.length !== I &&
          (f ? f.page.len(t.length) : (e._iDisplayLength = t.length)),
        t.start !== I &&
          (null === f
            ? ((e._iDisplayStart = t.start), (e.iInitDisplayStart = t.start))
            : bn(e, t.start / e._iDisplayLength)),
        t.order !== I &&
          ((e.aaSorting = []),
          w.each(t.order, function (_, T) {
            e.aaSorting.push(T[0] >= l.length ? [0, T[1]] : T);
          })),
        t.search !== I && w.extend(e.oPreviousSearch, Dt(t.search)),
        t.columns)
      ) {
        for (a = 0, s = t.columns.length; a < s; a++) {
          var y = t.columns[a];
          y.visible !== I &&
            (f
              ? f.column(a).visible(y.visible, !1)
              : (l[a].bVisible = y.visible)),
            y.search !== I && w.extend(e.aoPreSearchCols[a], Dt(y.search));
        }
        f && f.columns.adjust();
      }
      (e._bLoadingState = !1),
        _e(e, "aoStateLoaded", "stateLoaded", [e, t]),
        r();
    }
    function wn(e) {
      var t = m.settings,
        r = w.inArray(e, Xe(t, "nTable"));
      return -1 !== r ? t[r] : null;
    }
    function Et(e, t, r, a) {
      if (
        ((r =
          "DataTables warning: " +
          (e ? "table id=" + e.sTableId + " - " : "") +
          r),
        a &&
          (r +=
            ". For more information about this error, please see https://datatables.net/tn/" +
            a),
        t)
      )
        de.console && console.log && console.log(r);
      else {
        var s = m.ext,
          l = s.sErrMode || s.errMode;
        if ((e && _e(e, null, "error", [e, a, r]), "alert" == l)) alert(r);
        else {
          if ("throw" == l) throw new Error(r);
          "function" == typeof l && l(e, a, r);
        }
      }
    }
    function vt(e, t, r, a) {
      Array.isArray(r)
        ? w.each(r, function (s, l) {
            Array.isArray(l) ? vt(e, t, l[0], l[1]) : vt(e, t, l);
          })
        : (a === I && (a = r), t[r] !== I && (e[a] = t[r]));
    }
    function qn(e, t, r) {
      var a;
      for (var s in t)
        t.hasOwnProperty(s) &&
          (w.isPlainObject((a = t[s]))
            ? (w.isPlainObject(e[s]) || (e[s] = {}), w.extend(!0, e[s], a))
            : (e[s] =
                r && "data" !== s && "aaData" !== s && Array.isArray(a)
                  ? a.slice()
                  : a));
      return e;
    }
    function At(e, t, r) {
      w(e)
        .on("click.DT", t, function (a) {
          w(e).trigger("blur"), r(a);
        })
        .on("keypress.DT", t, function (a) {
          13 === a.which && (a.preventDefault(), r(a));
        })
        .on("selectstart.DT", function () {
          return !1;
        });
    }
    function lt(e, t, r, a) {
      r && e[t].push({ fn: r, sName: a });
    }
    function _e(e, t, r, a) {
      var s = [];
      if (
        (t &&
          (s = w.map(e[t].slice().reverse(), function (d, v) {
            return d.fn.apply(e.oInstance, a);
          })),
        null !== r)
      ) {
        var l = w.Event(r + ".dt"),
          f = w(e.nTable);
        f.trigger(l, a),
          0 === f.parents("body").length && w("body").trigger(l, a),
          s.push(l.result);
      }
      return s;
    }
    function Yn(e) {
      var t = e._iDisplayStart,
        r = e.fnDisplayEnd(),
        a = e._iDisplayLength;
      t >= r && (t = r - a),
        (t -= t % a),
        (-1 === a || t < 0) && (t = 0),
        (e._iDisplayStart = t);
    }
    function Jn(e, t) {
      var r = e.renderer,
        a = m.ext.renderer[t];
      return w.isPlainObject(r) && r[t]
        ? a[r[t]] || a._
        : ("string" == typeof r && a[r]) || a._;
    }
    function Ue(e) {
      return e.oFeatures.bServerSide
        ? "ssp"
        : e.ajax || e.sAjaxSource
        ? "ajax"
        : "dom";
    }
    var dn = [],
      ze = Array.prototype;
    (m.Api = ae =
      function (e, t) {
        if (!(this instanceof ae)) return new ae(e, t);
        var r = [],
          a = function (f) {
            var d = (function (e) {
              var t,
                r,
                a = m.settings,
                s = w.map(a, function (l, f) {
                  return l.nTable;
                });
              return e
                ? e.nTable && e.oApi
                  ? [e]
                  : e.nodeName && "table" === e.nodeName.toLowerCase()
                  ? -1 !== (t = w.inArray(e, s))
                    ? [a[t]]
                    : null
                  : e && "function" == typeof e.settings
                  ? e.settings().toArray()
                  : ("string" == typeof e
                      ? (r = w(e))
                      : e instanceof w && (r = e),
                    r
                      ? r
                          .map(function (l) {
                            return -1 !== (t = w.inArray(this, s))
                              ? a[t]
                              : null;
                          })
                          .toArray()
                      : void 0)
                : [];
            })(f);
            d && r.push.apply(r, d);
          };
        if (Array.isArray(e)) for (var s = 0, l = e.length; s < l; s++) a(e[s]);
        else a(e);
        (this.context = wt(r)),
          t && w.merge(this, t),
          (this.selector = { rows: null, cols: null, opts: null }),
          ae.extend(this, this, dn);
      }),
      w.extend(ae.prototype, {
        any: function () {
          return 0 !== this.count();
        },
        concat: ze.concat,
        context: [],
        count: function () {
          return this.flatten().length;
        },
        each: function (e) {
          for (var t = 0, r = this.length; t < r; t++)
            e.call(this, this[t], t, this);
          return this;
        },
        eq: function (e) {
          var t = this.context;
          return t.length > e ? new ae(t[e], this[e]) : null;
        },
        filter: function (e) {
          var t = [];
          if (ze.filter) t = ze.filter.call(this, e, this);
          else
            for (var r = 0, a = this.length; r < a; r++)
              e.call(this, this[r], r, this) && t.push(this[r]);
          return new ae(this.context, t);
        },
        flatten: function () {
          var e = [];
          return new ae(this.context, e.concat.apply(e, this.toArray()));
        },
        join: ze.join,
        indexOf:
          ze.indexOf ||
          function (e, t) {
            for (var r = t || 0, a = this.length; r < a; r++)
              if (this[r] === e) return r;
            return -1;
          },
        iterator: function (e, t, r, a) {
          var l,
            f,
            d,
            v,
            y,
            T,
            S,
            A,
            s = [],
            _ = this.context,
            k = this.selector;
          for (
            "string" == typeof e && ((a = r), (r = t), (t = e), (e = !1)),
              f = 0,
              d = _.length;
            f < d;
            f++
          ) {
            var R = new ae(_[f]);
            if ("table" === t) (l = r.call(R, _[f], f)) !== I && s.push(l);
            else if ("columns" === t || "rows" === t)
              (l = r.call(R, _[f], this[f], f)) !== I && s.push(l);
            else if (
              "column" === t ||
              "column-rows" === t ||
              "row" === t ||
              "cell" === t
            )
              for (
                S = this[f],
                  "column-rows" === t && (T = Un(_[f], k.opts)),
                  v = 0,
                  y = S.length;
                v < y;
                v++
              )
                (A = S[v]),
                  (l =
                    "cell" === t
                      ? r.call(R, _[f], A.row, A.column, f, v)
                      : r.call(R, _[f], A, f, v, T)) !== I && s.push(l);
          }
          if (s.length || a) {
            var q = new ae(_, e ? s.concat.apply([], s) : s),
              K = q.selector;
            return (K.rows = k.rows), (K.cols = k.cols), (K.opts = k.opts), q;
          }
          return this;
        },
        lastIndexOf:
          ze.lastIndexOf ||
          function (e, t) {
            return this.indexOf.apply(this.toArray.reverse(), arguments);
          },
        length: 0,
        map: function (e) {
          var t = [];
          if (ze.map) t = ze.map.call(this, e, this);
          else
            for (var r = 0, a = this.length; r < a; r++)
              t.push(e.call(this, this[r], r));
          return new ae(this.context, t);
        },
        pluck: function (e) {
          var t = m.util.get(e);
          return this.map(function (r) {
            return t(r);
          });
        },
        pop: ze.pop,
        push: ze.push,
        reduce:
          ze.reduce ||
          function (e, t) {
            return Ft(this, e, t, 0, this.length, 1);
          },
        reduceRight:
          ze.reduceRight ||
          function (e, t) {
            return Ft(this, e, t, this.length - 1, -1, -1);
          },
        reverse: ze.reverse,
        selector: null,
        shift: ze.shift,
        slice: function () {
          return new ae(this.context, this);
        },
        sort: ze.sort,
        splice: ze.splice,
        toArray: function () {
          return ze.slice.call(this);
        },
        to$: function () {
          return w(this);
        },
        toJQuery: function () {
          return w(this);
        },
        unique: function () {
          return new ae(this.context, wt(this));
        },
        unshift: ze.unshift,
      }),
      (ae.extend = function (e, t, r) {
        if (r.length && t && (t instanceof ae || t.__dt_wrapper)) {
          var a,
            s,
            l,
            f = function (d, v, y) {
              return function () {
                var _ = v.apply(d, arguments);
                return ae.extend(_, _, y.methodExt), _;
              };
            };
          for (a = 0, s = r.length; a < s; a++)
            (t[(l = r[a]).name] =
              "function" === l.type
                ? f(e, l.val, l)
                : "object" === l.type
                ? {}
                : l.val),
              (t[l.name].__dt_wrapper = !0),
              ae.extend(e, t[l.name], l.propExt);
        }
      }),
      (ae.register = V =
        function (e, t) {
          if (Array.isArray(e))
            for (var r = 0, a = e.length; r < a; r++) ae.register(e[r], t);
          else {
            var s,
              l,
              v,
              y,
              f = e.split("."),
              d = dn,
              _ = function (S, A) {
                for (var k = 0, R = S.length; k < R; k++)
                  if (S[k].name === A) return S[k];
                return null;
              };
            for (s = 0, l = f.length; s < l; s++) {
              var T = _(
                d,
                (v = (y = -1 !== f[s].indexOf("()"))
                  ? f[s].replace("()", "")
                  : f[s])
              );
              T ||
                d.push(
                  (T = {
                    name: v,
                    val: {},
                    methodExt: [],
                    propExt: [],
                    type: "object",
                  })
                ),
                s === l - 1
                  ? ((T.val = t),
                    (T.type =
                      "function" == typeof t
                        ? "function"
                        : w.isPlainObject(t)
                        ? "object"
                        : "other"))
                  : (d = y ? T.methodExt : T.propExt);
            }
          }
        }),
      (ae.registerPlural = te =
        function (e, t, r) {
          ae.register(e, r),
            ae.register(t, function () {
              var a = r.apply(this, arguments);
              return a === this
                ? this
                : a instanceof ae
                ? a.length
                  ? Array.isArray(a[0])
                    ? new ae(a.context, a[0])
                    : a[0]
                  : I
                : a;
            });
        });
    var Cn = function (e, t) {
      if (Array.isArray(e))
        return w.map(e, function (a) {
          return Cn(a, t);
        });
      if ("number" == typeof e) return [t[e]];
      var r = w.map(t, function (a, s) {
        return a.nTable;
      });
      return w(r)
        .filter(e)
        .map(function (a) {
          var s = w.inArray(this, r);
          return t[s];
        })
        .toArray();
    };
    V("tables()", function (e) {
      return e !== I && null !== e ? new ae(Cn(e, this.context)) : this;
    }),
      V("table()", function (e) {
        var t = this.tables(e),
          r = t.context;
        return r.length ? new ae(r[0]) : t;
      }),
      te("tables().nodes()", "table().node()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTable;
          },
          1
        );
      }),
      te("tables().body()", "table().body()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTBody;
          },
          1
        );
      }),
      te("tables().header()", "table().header()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTHead;
          },
          1
        );
      }),
      te("tables().footer()", "table().footer()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTFoot;
          },
          1
        );
      }),
      te("tables().containers()", "table().container()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTableWrapper;
          },
          1
        );
      }),
      V("draw()", function (e) {
        return this.iterator("table", function (t) {
          "page" === e
            ? Ye(t)
            : ("string" == typeof e && (e = "full-hold" !== e),
              pt(t, !1 === e));
        });
      }),
      V("page()", function (e) {
        return e === I
          ? this.page.info().page
          : this.iterator("table", function (t) {
              bn(t, e);
            });
      }),
      V("page.info()", function (e) {
        if (0 === this.context.length) return I;
        var t = this.context[0],
          r = t._iDisplayStart,
          a = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
          s = t.fnRecordsDisplay(),
          l = -1 === a;
        return {
          page: l ? 0 : Math.floor(r / a),
          pages: l ? 1 : Math.ceil(s / a),
          start: r,
          end: t.fnDisplayEnd(),
          length: a,
          recordsTotal: t.fnRecordsTotal(),
          recordsDisplay: s,
          serverSide: "ssp" === Ue(t),
        };
      }),
      V("page.len()", function (e) {
        return e === I
          ? 0 !== this.context.length
            ? this.context[0]._iDisplayLength
            : I
          : this.iterator("table", function (t) {
              un(t, e);
            });
      });
    var Gn = function (e, t, r) {
      if (r) {
        var a = new ae(e);
        a.one("draw", function () {
          r(a.ajax.json());
        });
      }
      if ("ssp" == Ue(e)) pt(e, t);
      else {
        mt(e, !0);
        var s = e.jqXHR;
        s && 4 !== s.readyState && s.abort(),
          h(e, [], function (l) {
            je(e);
            for (var f = N(e, l), d = 0, v = f.length; d < v; d++) dt(e, f[d]);
            pt(e, t), mt(e, !1);
          });
      }
    };
    V("ajax.json()", function () {
      var e = this.context;
      if (e.length > 0) return e[0].json;
    }),
      V("ajax.params()", function () {
        var e = this.context;
        if (e.length > 0) return e[0].oAjaxData;
      }),
      V("ajax.reload()", function (e, t) {
        return this.iterator("table", function (r) {
          Gn(r, !1 === t, e);
        });
      }),
      V("ajax.url()", function (e) {
        var t = this.context;
        return e === I
          ? 0 === t.length
            ? I
            : (t = t[0]).ajax
            ? w.isPlainObject(t.ajax)
              ? t.ajax.url
              : t.ajax
            : t.sAjaxSource
          : this.iterator("table", function (r) {
              w.isPlainObject(r.ajax) ? (r.ajax.url = e) : (r.ajax = e);
            });
      }),
      V("ajax.url().load()", function (e, t) {
        return this.iterator("table", function (r) {
          Gn(r, !1 === t, e);
        });
      });
    var Nn = function (e, t, r, a, s) {
        var f,
          d,
          v,
          y,
          _,
          T,
          l = [],
          S = typeof t;
        for (
          (!t || "string" === S || "function" === S || t.length === I) &&
            (t = [t]),
            v = 0,
            y = t.length;
          v < y;
          v++
        )
          for (
            _ = 0,
              T = (d =
                t[v] && t[v].split && !t[v].match(/[\[\(:]/)
                  ? t[v].split(",")
                  : [t[v]]).length;
            _ < T;
            _++
          )
            (f = r("string" == typeof d[_] ? d[_].trim() : d[_])) &&
              f.length &&
              (l = l.concat(f));
        var A = Te.selector[e];
        if (A.length) for (v = 0, y = A.length; v < y; v++) l = A[v](a, s, l);
        return wt(l);
      },
      Wn = function (e) {
        return (
          e || (e = {}),
          e.filter && e.search === I && (e.search = e.filter),
          w.extend({ search: "none", order: "current", page: "all" }, e)
        );
      },
      Bn = function (e) {
        for (var t = 0, r = e.length; t < r; t++)
          if (e[t].length > 0)
            return (
              (e[0] = e[t]),
              (e[0].length = 1),
              (e.length = 1),
              (e.context = [e.context[t]]),
              e
            );
        return (e.length = 0), e;
      },
      Un = function (e, t) {
        var s,
          l = [],
          f = e.aiDisplay,
          d = e.aiDisplayMaster,
          v = t.search,
          y = t.order,
          _ = t.page;
        if ("ssp" == Ue(e)) return "removed" === v ? [] : Ge(0, d.length);
        if ("current" == _)
          for (r = e._iDisplayStart, a = e.fnDisplayEnd(); r < a; r++)
            l.push(f[r]);
        else if ("current" == y || "applied" == y) {
          if ("none" == v) l = d.slice();
          else if ("applied" == v) l = f.slice();
          else if ("removed" == v) {
            for (var T = {}, r = 0, a = f.length; r < a; r++) T[f[r]] = null;
            l = w.map(d, function (S) {
              return T.hasOwnProperty(S) ? null : S;
            });
          }
        } else if ("index" == y || "original" == y)
          for (r = 0, a = e.aoData.length; r < a; r++)
            ("none" == v ||
              (-1 === (s = w.inArray(r, f)) && "removed" == v) ||
              (s >= 0 && "applied" == v)) &&
              l.push(r);
        return l;
      };
    V("rows()", function (e, t) {
      e === I ? (e = "") : w.isPlainObject(e) && ((t = e), (e = "")),
        (t = Wn(t));
      var r = this.iterator(
        "table",
        function (a) {
          return (function (e, t, r) {
            var a;
            return Nn(
              "row",
              t,
              function (l) {
                var f = ee(l),
                  y = e.aoData;
                if (null !== f && !r) return [f];
                if ((a || (a = Un(e, r)), null !== f && -1 !== w.inArray(f, a)))
                  return [f];
                if (null === l || l === I || "" === l) return a;
                if ("function" == typeof l)
                  return w.map(a, function (R) {
                    var q = y[R];
                    return l(R, q._aData, q.nTr) ? R : null;
                  });
                if (l.nodeName) {
                  var _ = l._DT_RowIndex,
                    T = l._DT_CellIndex;
                  if (_ !== I) return y[_] && y[_].nTr === l ? [_] : [];
                  if (T)
                    return y[T.row] && y[T.row].nTr === l.parentNode
                      ? [T.row]
                      : [];
                  var S = w(l).closest("*[data-dt-row]");
                  return S.length ? [S.data("dt-row")] : [];
                }
                if ("string" == typeof l && "#" === l.charAt(0)) {
                  var A = e.aIds[l.replace(/^#/, "")];
                  if (A !== I) return [A.idx];
                }
                var k = Ee(c(e.aoData, a, "nTr"));
                return w(k)
                  .filter(l)
                  .map(function () {
                    return this._DT_RowIndex;
                  })
                  .toArray();
              },
              e,
              r
            );
          })(a, e, t);
        },
        1
      );
      return (r.selector.rows = e), (r.selector.opts = t), r;
    }),
      V("rows().nodes()", function () {
        return this.iterator(
          "row",
          function (e, t) {
            return e.aoData[t].nTr || I;
          },
          1
        );
      }),
      V("rows().data()", function () {
        return this.iterator(
          !0,
          "rows",
          function (e, t) {
            return c(e.aoData, t, "_aData");
          },
          1
        );
      }),
      te("rows().cache()", "row().cache()", function (e) {
        return this.iterator(
          "row",
          function (t, r) {
            var a = t.aoData[r];
            return "search" === e ? a._aFilterData : a._aSortData;
          },
          1
        );
      }),
      te("rows().invalidate()", "row().invalidate()", function (e) {
        return this.iterator("row", function (t, r) {
          Ut(t, r, e);
        });
      }),
      te("rows().indexes()", "row().index()", function () {
        return this.iterator(
          "row",
          function (e, t) {
            return t;
          },
          1
        );
      }),
      te("rows().ids()", "row().id()", function (e) {
        for (var t = [], r = this.context, a = 0, s = r.length; a < s; a++)
          for (var l = 0, f = this[a].length; l < f; l++) {
            var d = r[a].rowIdFn(r[a].aoData[this[a][l]]._aData);
            t.push((!0 === e ? "#" : "") + d);
          }
        return new ae(r, t);
      }),
      te("rows().remove()", "row().remove()", function () {
        var e = this;
        return (
          this.iterator("row", function (t, r, a) {
            var f,
              d,
              v,
              y,
              _,
              T,
              s = t.aoData,
              l = s[r];
            for (s.splice(r, 1), f = 0, d = s.length; f < d; f++)
              if (
                ((T = (_ = s[f]).anCells),
                null !== _.nTr && (_.nTr._DT_RowIndex = f),
                null !== T)
              )
                for (v = 0, y = T.length; v < y; v++)
                  T[v]._DT_CellIndex.row = f;
            Yt(t.aiDisplayMaster, r),
              Yt(t.aiDisplay, r),
              Yt(e[a], r, !1),
              t._iRecordsDisplay > 0 && t._iRecordsDisplay--,
              Yn(t);
            var S = t.rowIdFn(l._aData);
            S !== I && delete t.aIds[S];
          }),
          this.iterator("table", function (t) {
            for (var r = 0, a = t.aoData.length; r < a; r++)
              t.aoData[r].idx = r;
          }),
          this
        );
      }),
      V("rows.add()", function (e) {
        var t = this.iterator(
            "table",
            function (a) {
              var s,
                l,
                f,
                d = [];
              for (l = 0, f = e.length; l < f; l++)
                (s = e[l]).nodeName && "TR" === s.nodeName.toUpperCase()
                  ? d.push(rn(a, s)[0])
                  : d.push(dt(a, s));
              return d;
            },
            1
          ),
          r = this.rows(-1);
        return r.pop(), w.merge(r, t), r;
      }),
      V("row()", function (e, t) {
        return Bn(this.rows(e, t));
      }),
      V("row().data()", function (e) {
        var t = this.context;
        if (e === I)
          return t.length && this.length ? t[0].aoData[this[0]]._aData : I;
        var r = t[0].aoData[this[0]];
        return (
          (r._aData = e),
          Array.isArray(e) && r.nTr && r.nTr.id && at(t[0].rowId)(e, r.nTr.id),
          Ut(t[0], this[0], "data"),
          this
        );
      }),
      V("row().node()", function () {
        var e = this.context;
        return (e.length && this.length && e[0].aoData[this[0]].nTr) || null;
      }),
      V("row.add()", function (e) {
        e instanceof w && e.length && (e = e[0]);
        var t = this.iterator("table", function (r) {
          return e.nodeName && "TR" === e.nodeName.toUpperCase()
            ? rn(r, e)[0]
            : dt(r, e);
        });
        return this.row(t[0]);
      }),
      w(pe).on("plugin-init.dt", function (e, t) {
        var r = new ae(t),
          a = "on-plugin-init",
          s = "stateSaveParams." + a,
          l = "destroy. " + a;
        r.on(s, function (d, v, y) {
          for (
            var _ = v.rowIdFn, T = v.aoData, S = [], A = 0;
            A < T.length;
            A++
          )
            T[A]._detailsShow && S.push("#" + _(T[A]._aData));
          y.childRows = S;
        }),
          r.on(l, function () {
            r.off(s + " " + l);
          });
        var f = r.state.loaded();
        f &&
          f.childRows &&
          r
            .rows(
              w.map(f.childRows, function (d) {
                return d.replace(/:/g, "\\:");
              })
            )
            .every(function () {
              _e(t, null, "requestChild", [this]);
            });
      });
    var dr = m.util.throttle(function (e) {
        _n(e[0]);
      }, 500),
      In = function (e, t) {
        var r = e.context;
        if (r.length) {
          var a = r[0].aoData[t !== I ? t : e[0]];
          a &&
            a._details &&
            (a._details.remove(),
            (a._detailsShow = I),
            (a._details = I),
            w(a.nTr).removeClass("dt-hasChild"),
            dr(r));
        }
      },
      hr = function (e, t) {
        var r = e.context;
        if (r.length && e.length) {
          var a = r[0].aoData[e[0]];
          a._details &&
            ((a._detailsShow = t),
            t
              ? (a._details.insertAfter(a.nTr),
                w(a.nTr).addClass("dt-hasChild"))
              : (a._details.detach(), w(a.nTr).removeClass("dt-hasChild")),
            _e(r[0], null, "childRow", [t, e.row(e[0])]),
            Tr(r[0]),
            dr(r));
        }
      },
      Tr = function (e) {
        var t = new ae(e),
          r = ".dt.DT_details",
          a = "draw" + r,
          s = "column-sizing" + r,
          l = "destroy" + r,
          f = e.aoData;
        t.off(a + " " + s + " " + l),
          Xe(f, "_details").length > 0 &&
            (t.on(a, function (d, v) {
              e === v &&
                t
                  .rows({ page: "current" })
                  .eq(0)
                  .each(function (y) {
                    var _ = f[y];
                    _._detailsShow && _._details.insertAfter(_.nTr);
                  });
            }),
            t.on(s, function (d, v, y, _) {
              if (e === v)
                for (var T, S = $e(v), A = 0, k = f.length; A < k; A++)
                  (T = f[A])._details &&
                    T._details.each(function () {
                      var R = w(this).children("td");
                      1 == R.length && R.attr("colspan", S);
                    });
            }),
            t.on(l, function (d, v) {
              if (e === v)
                for (var y = 0, _ = f.length; y < _; y++)
                  f[y]._details && In(t, y);
            }));
      },
      Ln = "row().child",
      Vn = Ln + "()";
    V(Vn, function (e, t) {
      var r = this.context;
      return e === I
        ? r.length && this.length
          ? r[0].aoData[this[0]]._details
          : I
        : (!0 === e
            ? this.child.show()
            : !1 === e
            ? In(this)
            : r.length &&
              this.length &&
              (function (e, t, r, a) {
                var s = [],
                  l = function (f, d) {
                    if (Array.isArray(f) || f instanceof w)
                      for (var v = 0, y = f.length; v < y; v++) l(f[v], d);
                    else if (f.nodeName && "tr" === f.nodeName.toLowerCase())
                      s.push(f);
                    else {
                      var _ = w("<tr><td></td></tr>").addClass(d);
                      (w("td", _).addClass(d).html(f)[0].colSpan = $e(e)),
                        s.push(_[0]);
                    }
                  };
                l(r, a),
                  t._details && t._details.detach(),
                  (t._details = w(s)),
                  t._detailsShow && t._details.insertAfter(t.nTr);
              })(r[0], r[0].aoData[this[0]], e, t),
          this);
    }),
      V([Ln + ".show()", Vn + ".show()"], function (e) {
        return hr(this, !0), this;
      }),
      V([Ln + ".hide()", Vn + ".hide()"], function () {
        return hr(this, !1), this;
      }),
      V([Ln + ".remove()", Vn + ".remove()"], function () {
        return In(this), this;
      }),
      V(Ln + ".isShown()", function () {
        var e = this.context;
        return (
          (e.length && this.length && e[0].aoData[this[0]]._detailsShow) || !1
        );
      });
    var Dr = /^([^:]+):(name|visIdx|visible)$/,
      Kn = function (e, t, r, a, s) {
        for (var l = [], f = 0, d = s.length; f < d; f++)
          l.push(xe(e, s[f], t));
        return l;
      };
    V("columns()", function (e, t) {
      e === I ? (e = "") : w.isPlainObject(e) && ((t = e), (e = "")),
        (t = Wn(t));
      var r = this.iterator(
        "table",
        function (a) {
          return (function (e, t, r) {
            var a = e.aoColumns,
              s = Xe(a, "sName"),
              l = Xe(a, "nTh");
            return Nn(
              "column",
              t,
              function (d) {
                var v = ee(d);
                if ("" === d) return Ge(a.length);
                if (null !== v) return [v >= 0 ? v : a.length + v];
                if ("function" == typeof d) {
                  var y = Un(e, r);
                  return w.map(a, function (R, q) {
                    return d(q, Kn(e, q, 0, 0, y), l[q]) ? q : null;
                  });
                }
                var _ = "string" == typeof d ? d.match(Dr) : "";
                if (_)
                  switch (_[2]) {
                    case "visIdx":
                    case "visible":
                      var T = parseInt(_[1], 10);
                      if (T < 0) {
                        var S = w.map(a, function (R, q) {
                          return R.bVisible ? q : null;
                        });
                        return [S[S.length + T]];
                      }
                      return [Ot(e, T)];
                    case "name":
                      return w.map(s, function (R, q) {
                        return R === _[1] ? q : null;
                      });
                    default:
                      return [];
                  }
                if (d.nodeName && d._DT_CellIndex)
                  return [d._DT_CellIndex.column];
                var A = w(l)
                  .filter(d)
                  .map(function () {
                    return w.inArray(this, l);
                  })
                  .toArray();
                if (A.length || !d.nodeName) return A;
                var k = w(d).closest("*[data-dt-column]");
                return k.length ? [k.data("dt-column")] : [];
              },
              e,
              r
            );
          })(a, e, t);
        },
        1
      );
      return (r.selector.cols = e), (r.selector.opts = t), r;
    }),
      te("columns().header()", "column().header()", function (e, t) {
        return this.iterator(
          "column",
          function (r, a) {
            return r.aoColumns[a].nTh;
          },
          1
        );
      }),
      te("columns().footer()", "column().footer()", function (e, t) {
        return this.iterator(
          "column",
          function (r, a) {
            return r.aoColumns[a].nTf;
          },
          1
        );
      }),
      te("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", Kn, 1);
      }),
      te("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator(
          "column",
          function (e, t) {
            return e.aoColumns[t].mData;
          },
          1
        );
      }),
      te("columns().cache()", "column().cache()", function (e) {
        return this.iterator(
          "column-rows",
          function (t, r, a, s, l) {
            return c(
              t.aoData,
              l,
              "search" === e ? "_aFilterData" : "_aSortData",
              r
            );
          },
          1
        );
      }),
      te("columns().nodes()", "column().nodes()", function () {
        return this.iterator(
          "column-rows",
          function (e, t, r, a, s) {
            return c(e.aoData, s, "anCells", t);
          },
          1
        );
      }),
      te("columns().visible()", "column().visible()", function (e, t) {
        var r = this,
          a = this.iterator("column", function (s, l) {
            if (e === I) return s.aoColumns[l].bVisible;
            !(function (e, t, r) {
              var d,
                v,
                y,
                _,
                a = e.aoColumns,
                s = a[t],
                l = e.aoData;
              if (r === I) return s.bVisible;
              if (s.bVisible !== r) {
                if (r) {
                  var T = w.inArray(!0, Xe(a, "bVisible"), t + 1);
                  for (v = 0, y = l.length; v < y; v++)
                    (d = l[v].anCells),
                      (_ = l[v].nTr) && _.insertBefore(d[t], d[T] || null);
                } else w(Xe(e.aoData, "anCells", t)).detach();
                s.bVisible = r;
              }
            })(s, l, e);
          });
        return (
          e !== I &&
            this.iterator("table", function (s) {
              it(s, s.aoHeader),
                it(s, s.aoFooter),
                s.aiDisplay.length ||
                  w(s.nTBody).find("td[colspan]").attr("colspan", $e(s)),
                _n(s),
                r.iterator("column", function (l, f) {
                  _e(l, null, "column-visibility", [l, f, e, t]);
                }),
                (t === I || t) && r.columns.adjust();
            }),
          a
        );
      }),
      te("columns().indexes()", "column().index()", function (e) {
        return this.iterator(
          "column",
          function (t, r) {
            return "visible" === e ? kt(t, r) : r;
          },
          1
        );
      }),
      V("columns.adjust()", function () {
        return this.iterator(
          "table",
          function (e) {
            Qt(e);
          },
          1
        );
      }),
      V("column.index()", function (e, t) {
        if (0 !== this.context.length) {
          var r = this.context[0];
          if ("fromVisible" === e || "toData" === e) return Ot(r, t);
          if ("fromData" === e || "toVisible" === e) return kt(r, t);
        }
      }),
      V("column()", function (e, t) {
        return Bn(this.columns(e, t));
      }),
      V("cells()", function (e, t, r) {
        if (
          (w.isPlainObject(e) &&
            (e.row === I ? ((r = e), (e = null)) : ((r = t), (t = null))),
          w.isPlainObject(t) && ((r = t), (t = null)),
          null === t || t === I)
        )
          return this.iterator("table", function (S) {
            return (function (e, t, r) {
              var d,
                y,
                _,
                T,
                S,
                A,
                k,
                a = e.aoData,
                s = Un(e, r),
                l = Ee(c(a, s, "anCells")),
                f = w(ce([], l)),
                v = e.aoColumns.length;
              return Nn(
                "cell",
                t,
                function (q) {
                  var K = "function" == typeof q;
                  if (null === q || q === I || K) {
                    for (y = [], _ = 0, T = s.length; _ < T; _++)
                      for (d = s[_], S = 0; S < v; S++)
                        (A = { row: d, column: S }),
                          K
                            ? ((k = a[d]),
                              q(
                                A,
                                xe(e, d, S),
                                k.anCells ? k.anCells[S] : null
                              ) && y.push(A))
                            : y.push(A);
                    return y;
                  }
                  if (w.isPlainObject(q))
                    return q.column !== I &&
                      q.row !== I &&
                      -1 !== w.inArray(q.row, s)
                      ? [q]
                      : [];
                  var H = f
                    .filter(q)
                    .map(function (le, Z) {
                      return {
                        row: Z._DT_CellIndex.row,
                        column: Z._DT_CellIndex.column,
                      };
                    })
                    .toArray();
                  return H.length || !q.nodeName
                    ? H
                    : (k = w(q).closest("*[data-dt-row]")).length
                    ? [{ row: k.data("dt-row"), column: k.data("dt-column") }]
                    : [];
                },
                e,
                r
              );
            })(S, e, Wn(r));
          });
        var f,
          d,
          v,
          y,
          a = r ? { page: r.page, order: r.order, search: r.search } : {},
          s = this.columns(t, a),
          l = this.rows(e, a),
          _ = this.iterator(
            "table",
            function (S, A) {
              var k = [];
              for (f = 0, d = l[A].length; f < d; f++)
                for (v = 0, y = s[A].length; v < y; v++)
                  k.push({ row: l[A][f], column: s[A][v] });
              return k;
            },
            1
          ),
          T = r && r.selected ? this.cells(_, r) : _;
        return w.extend(T.selector, { cols: t, rows: e, opts: r }), T;
      }),
      te("cells().nodes()", "cell().node()", function () {
        return this.iterator(
          "cell",
          function (e, t, r) {
            var a = e.aoData[t];
            return a && a.anCells ? a.anCells[r] : I;
          },
          1
        );
      }),
      V("cells().data()", function () {
        return this.iterator(
          "cell",
          function (e, t, r) {
            return xe(e, t, r);
          },
          1
        );
      }),
      te("cells().cache()", "cell().cache()", function (e) {
        return (
          (e = "search" === e ? "_aFilterData" : "_aSortData"),
          this.iterator(
            "cell",
            function (t, r, a) {
              return t.aoData[r][e][a];
            },
            1
          )
        );
      }),
      te("cells().render()", "cell().render()", function (e) {
        return this.iterator(
          "cell",
          function (t, r, a) {
            return xe(t, r, a, e);
          },
          1
        );
      }),
      te("cells().indexes()", "cell().index()", function () {
        return this.iterator(
          "cell",
          function (e, t, r) {
            return { row: t, column: r, columnVisible: kt(e, r) };
          },
          1
        );
      }),
      te("cells().invalidate()", "cell().invalidate()", function (e) {
        return this.iterator("cell", function (t, r, a) {
          Ut(t, r, e, a);
        });
      }),
      V("cell()", function (e, t, r) {
        return Bn(this.cells(e, t, r));
      }),
      V("cell().data()", function (e) {
        var t = this.context,
          r = this[0];
        return e === I
          ? t.length && r.length
            ? xe(t[0], r[0].row, r[0].column)
            : I
          : (xt(t[0], r[0].row, r[0].column, e),
            Ut(t[0], r[0].row, "data", r[0].column),
            this);
      }),
      V("order()", function (e, t) {
        var r = this.context;
        return e === I
          ? 0 !== r.length
            ? r[0].aaSorting
            : I
          : ("number" == typeof e
              ? (e = [[e, t]])
              : e.length &&
                !Array.isArray(e[0]) &&
                (e = Array.prototype.slice.call(arguments)),
            this.iterator("table", function (a) {
              a.aaSorting = e.slice();
            }));
      }),
      V("order.listener()", function (e, t, r) {
        return this.iterator("table", function (a) {
          cn(a, e, t, r);
        });
      }),
      V("order.fixed()", function (e) {
        if (!e) {
          var t = this.context,
            r = t.length ? t[0].aaSortingFixed : I;
          return Array.isArray(r) ? { pre: r } : r;
        }
        return this.iterator("table", function (a) {
          a.aaSortingFixed = w.extend(!0, {}, e);
        });
      }),
      V(["columns().order()", "column().order()"], function (e) {
        var t = this;
        return this.iterator("table", function (r, a) {
          var s = [];
          w.each(t[a], function (l, f) {
            s.push([f, e]);
          }),
            (r.aaSorting = s);
        });
      }),
      V("search()", function (e, t, r, a) {
        var s = this.context;
        return e === I
          ? 0 !== s.length
            ? s[0].oPreviousSearch.sSearch
            : I
          : this.iterator("table", function (l) {
              !l.oFeatures.bFilter ||
                M(
                  l,
                  w.extend({}, l.oPreviousSearch, {
                    sSearch: e + "",
                    bRegex: null !== t && t,
                    bSmart: null === r || r,
                    bCaseInsensitive: null === a || a,
                  }),
                  1
                );
            });
      }),
      te("columns().search()", "column().search()", function (e, t, r, a) {
        return this.iterator("column", function (s, l) {
          var f = s.aoPreSearchCols;
          if (e === I) return f[l].sSearch;
          !s.oFeatures.bFilter ||
            (w.extend(f[l], {
              sSearch: e + "",
              bRegex: null !== t && t,
              bSmart: null === r || r,
              bCaseInsensitive: null === a || a,
            }),
            M(s, s.oPreviousSearch, 1));
        });
      }),
      V("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null;
      }),
      V("state.clear()", function () {
        return this.iterator("table", function (e) {
          e.fnStateSaveCallback.call(e.oInstance, e, {});
        });
      }),
      V("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null;
      }),
      V("state.save()", function () {
        return this.iterator("table", function (e) {
          _n(e);
        });
      }),
      (m.use = function (e, t) {
        "lib" === t || e.fn
          ? (w = e)
          : "win" == t || e.document
          ? ((de = e), (pe = e.document))
          : ("datetime" === t || "DateTime" === e.type) && (m.DateTime = e);
      }),
      (m.factory = function (e, t) {
        var r = !1;
        return (
          e && e.document && ((de = e), (pe = e.document)),
          t && t.fn && t.fn.jquery && ((w = t), (r = !0)),
          r
        );
      }),
      (m.versionCheck = m.fnVersionCheck =
        function (e) {
          for (
            var a,
              s,
              t = m.version.split("."),
              r = e.split("."),
              l = 0,
              f = r.length;
            l < f;
            l++
          )
            if ((a = parseInt(t[l], 10) || 0) !== (s = parseInt(r[l], 10) || 0))
              return a > s;
          return !0;
        }),
      (m.isDataTable = m.fnIsDataTable =
        function (e) {
          var t = w(e).get(0),
            r = !1;
          return (
            e instanceof m.Api ||
            (w.each(m.settings, function (a, s) {
              var l = s.nScrollHead ? w("table", s.nScrollHead)[0] : null,
                f = s.nScrollFoot ? w("table", s.nScrollFoot)[0] : null;
              (s.nTable === t || l === t || f === t) && (r = !0);
            }),
            r)
          );
        }),
      (m.tables = m.fnTables =
        function (e) {
          var t = !1;
          w.isPlainObject(e) && ((t = e.api), (e = e.visible));
          var r = w.map(m.settings, function (a) {
            if (!e || (e && w(a.nTable).is(":visible"))) return a.nTable;
          });
          return t ? new ae(r) : r;
        }),
      (m.camelToHungarian = Ct),
      V("$()", function (e, t) {
        var r = this.rows(t).nodes(),
          a = w(r);
        return w([].concat(a.filter(e).toArray(), a.find(e).toArray()));
      }),
      w.each(["on", "one", "off"], function (e, t) {
        V(t + "()", function () {
          var r = Array.prototype.slice.call(arguments);
          r[0] = w
            .map(r[0].split(/\s/), function (s) {
              return s.match(/\.dt\b/) ? s : s + ".dt";
            })
            .join(" ");
          var a = w(this.tables().nodes());
          return a[t].apply(a, r), this;
        });
      }),
      V("clear()", function () {
        return this.iterator("table", function (e) {
          je(e);
        });
      }),
      V("settings()", function () {
        return new ae(this.context, this.context);
      }),
      V("init()", function () {
        var e = this.context;
        return e.length ? e[0].oInit : null;
      }),
      V("data()", function () {
        return this.iterator("table", function (e) {
          return Xe(e.aoData, "_aData");
        }).flatten();
      }),
      V("destroy()", function (e) {
        return (
          (e = e || !1),
          this.iterator("table", function (t) {
            var S,
              r = t.oClasses,
              a = t.nTable,
              s = t.nTBody,
              l = t.nTHead,
              f = t.nTFoot,
              d = w(a),
              v = w(s),
              y = w(t.nTableWrapper),
              _ = w.map(t.aoData, function (q) {
                return q.nTr;
              });
            (t.bDestroying = !0),
              _e(t, "aoDestroyCallback", "destroy", [t]),
              e || new ae(t).columns().visible(!0),
              y.off(".DT").find(":not(tbody *)").off(".DT"),
              w(de).off(".DT-" + t.sInstance),
              a != l.parentNode && (d.children("thead").detach(), d.append(l)),
              f &&
                a != f.parentNode &&
                (d.children("tfoot").detach(), d.append(f)),
              (t.aaSorting = []),
              (t.aaSortingFixed = []),
              vn(t),
              w(_).removeClass(t.asStripeClasses.join(" ")),
              w("th, td", l).removeClass(
                r.sSortable +
                  " " +
                  r.sSortableAsc +
                  " " +
                  r.sSortableDesc +
                  " " +
                  r.sSortableNone
              ),
              v.children().detach(),
              v.append(_);
            var A = t.nTableWrapper.parentNode,
              k = e ? "remove" : "detach";
            d[k](),
              y[k](),
              !e &&
                A &&
                (A.insertBefore(a, t.nTableReinsertBefore),
                d.css("width", t.sDestroyWidth).removeClass(r.sTable),
                (S = t.asDestroyStripes.length) &&
                  v.children().each(function (q) {
                    w(this).addClass(t.asDestroyStripes[q % S]);
                  }));
            var R = w.inArray(t, m.settings);
            -1 !== R && m.settings.splice(R, 1);
          })
        );
      }),
      w.each(["column", "row", "cell"], function (e, t) {
        V(t + "s().every()", function (r) {
          var a = this.selector.opts,
            s = this;
          return this.iterator(t, function (l, f, d, v, y) {
            r.call(
              s[t](f, "cell" === t ? d : a, "cell" === t ? a : I),
              f,
              d,
              v,
              y
            );
          });
        });
      }),
      V("i18n()", function (e, t, r) {
        var a = this.context[0],
          s = ht(e)(a.oLanguage);
        return (
          s === I && (s = t),
          r !== I && w.isPlainObject(s) && (s = s[r] !== I ? s[r] : s._),
          "string" == typeof s ? s.replace("%d", r) : s
        );
      }),
      (m.version = "1.13.7"),
      (m.settings = []),
      (m.models = {}),
      (m.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0,
        return: !1,
      }),
      (m.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1,
      }),
      (m.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null,
      }),
      (m.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (e) {
          return e
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (e) {
          try {
            return JSON.parse(
              (-1 === e.iStateDuration ? sessionStorage : localStorage).getItem(
                "DataTables_" + e.sInstance + "_" + location.pathname
              )
            );
          } catch (t) {
            return {};
          }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (e, t) {
          try {
            (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem(
              "DataTables_" + e.sInstance + "_" + location.pathname,
              JSON.stringify(t)
            );
          } catch (r) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
          oAria: {
            sSortAscending: ": activate to sort column ascending",
            sSortDescending: ": activate to sort column descending",
          },
          oPaginate: {
            sFirst: "First",
            sLast: "Last",
            sNext: "Next",
            sPrevious: "Previous",
          },
          sEmptyTable: "No data available in table",
          sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
          sInfoEmpty: "Showing 0 to 0 of 0 entries",
          sInfoFiltered: "(filtered from _MAX_ total entries)",
          sInfoPostFix: "",
          sDecimal: "",
          sThousands: ",",
          sLengthMenu: "Show _MENU_ entries",
          sLoadingRecords: "Loading...",
          sProcessing: "",
          sSearch: "Search:",
          sSearchPlaceholder: "",
          sUrl: "",
          sZeroRecords: "No matching records found",
        },
        oSearch: w.extend({}, m.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId",
      }),
      qt(m.defaults),
      (m.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null,
      }),
      qt(m.defaults.column),
      (m.models.oSettings = {
        oFeatures: {
          bAutoWidth: null,
          bDeferRender: null,
          bFilter: null,
          bInfo: null,
          bLengthChange: null,
          bPaginate: null,
          bProcessing: null,
          bServerSide: null,
          bSort: null,
          bSortMulti: null,
          bSortClasses: null,
          bStateSave: null,
        },
        oScroll: {
          bCollapse: null,
          iBarWidth: 0,
          sX: null,
          sXInner: null,
          sY: null,
        },
        oLanguage: { fnInfoCallback: null },
        oBrowser: {
          bScrollOversize: !1,
          bScrollbarLeft: !1,
          bBounding: !1,
          barWidth: 0,
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        jqXHR: null,
        json: I,
        oAjaxData: I,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
          return "ssp" == Ue(this)
            ? 1 * this._iRecordsTotal
            : this.aiDisplayMaster.length;
        },
        fnRecordsDisplay: function () {
          return "ssp" == Ue(this)
            ? 1 * this._iRecordsDisplay
            : this.aiDisplay.length;
        },
        fnDisplayEnd: function () {
          var e = this._iDisplayLength,
            t = this._iDisplayStart,
            r = t + e,
            a = this.aiDisplay.length,
            s = this.oFeatures,
            l = s.bPaginate;
          return s.bServerSide
            ? !1 === l || -1 === e
              ? t + a
              : Math.min(t + e, this._iRecordsDisplay)
            : !l || r > a || -1 === e
            ? a
            : r;
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null,
      }),
      (m.ext = Te =
        {
          buttons: {},
          classes: {},
          builder: "-source-",
          errMode: "alert",
          feature: [],
          search: [],
          selector: { cell: [], column: [], row: [] },
          internal: {},
          legacy: { ajax: null },
          pager: {},
          renderer: { pageButton: {}, header: {} },
          order: {},
          type: { detect: [], search: {}, order: {} },
          _unique: 0,
          fnVersionCheck: m.fnVersionCheck,
          iApiIndex: 0,
          oJUIClasses: {},
          sVersion: m.version,
        }),
      w.extend(Te, {
        afnFiltering: Te.search,
        aTypes: Te.type.detect,
        ofnSearch: Te.type.search,
        oSort: Te.type.order,
        afnSortData: Te.order,
        aoFeatures: Te.feature,
        oApi: Te.internal,
        oStdClasses: Te.classes,
        oPagination: Te.pager,
      }),
      w.extend(m.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_desc_disabled",
        sSortableDesc: "sorting_asc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: "",
      });
    var er = m.ext.pager;
    function Tn(e, t) {
      var r = [],
        a = er.numbers_length,
        s = Math.floor(a / 2);
      return (
        t <= a
          ? (r = Ge(0, t))
          : e <= s
          ? ((r = Ge(0, a - 2)).push("ellipsis"), r.push(t - 1))
          : e >= t - 1 - s
          ? ((r = Ge(t - (a - 2), t)).splice(0, 0, "ellipsis"),
            r.splice(0, 0, 0))
          : ((r = Ge(e - s + 2, e + s - 1)).push("ellipsis"),
            r.push(t - 1),
            r.splice(0, 0, "ellipsis"),
            r.splice(0, 0, 0)),
        (r.DT_el = "span"),
        r
      );
    }
    w.extend(er, {
      simple: function (e, t) {
        return ["previous", "next"];
      },
      full: function (e, t) {
        return ["first", "previous", "next", "last"];
      },
      numbers: function (e, t) {
        return [Tn(e, t)];
      },
      simple_numbers: function (e, t) {
        return ["previous", Tn(e, t), "next"];
      },
      full_numbers: function (e, t) {
        return ["first", "previous", Tn(e, t), "next", "last"];
      },
      first_last_numbers: function (e, t) {
        return ["first", Tn(e, t), "last"];
      },
      _numbers: Tn,
      numbers_length: 7,
    }),
      w.extend(!0, m.ext.renderer, {
        pageButton: {
          _: function (e, t, r, a, s, l) {
            var y,
              _,
              S,
              f = e.oClasses,
              d = e.oLanguage.oPaginate,
              v = e.oLanguage.oAria.paginate || {},
              T = function (A, k) {
                var R,
                  q,
                  H,
                  le = f.sPageButtonDisabled,
                  Z = function (Ve) {
                    bn(e, Ve.data.action, !0);
                  };
                for (R = 0, q = k.length; R < q; R++)
                  if (((H = k[R]), Array.isArray(H))) {
                    var ue = w("<" + (H.DT_el || "div") + "/>").appendTo(A);
                    T(ue, H);
                  } else {
                    var P = !1;
                    switch (((y = null), (_ = H), H)) {
                      case "ellipsis":
                        A.append('<span class="ellipsis">&#x2026;</span>');
                        break;
                      case "first":
                        (y = d.sFirst), 0 === s && (P = !0);
                        break;
                      case "previous":
                        (y = d.sPrevious), 0 === s && (P = !0);
                        break;
                      case "next":
                        (y = d.sNext), (0 === l || s === l - 1) && (P = !0);
                        break;
                      case "last":
                        (y = d.sLast), (0 === l || s === l - 1) && (P = !0);
                        break;
                      default:
                        (y = e.fnFormatNumber(H + 1)),
                          (_ = s === H ? f.sPageButtonActive : "");
                    }
                    null !== y &&
                      (P && (_ += " " + le),
                      At(
                        w("<" + (e.oInit.pagingTag || "a") + ">", {
                          class: f.sPageButton + " " + _,
                          "aria-controls": e.sTableId,
                          "aria-disabled": P ? "true" : null,
                          "aria-label": v[H],
                          role: "link",
                          "aria-current":
                            _ === f.sPageButtonActive ? "page" : null,
                          "data-dt-idx": H,
                          tabindex: P ? -1 : e.iTabIndex,
                          id:
                            0 === r && "string" == typeof H
                              ? e.sTableId + "_" + H
                              : null,
                        })
                          .html(y)
                          .appendTo(A),
                        { action: H },
                        Z
                      ));
                  }
              };
            try {
              S = w(t).find(pe.activeElement).data("dt-idx");
            } catch (A) {}
            T(w(t).empty(), a),
              S !== I &&
                w(t)
                  .find("[data-dt-idx=" + S + "]")
                  .trigger("focus");
          },
        },
      }),
      w.extend(m.ext.type.detect, [
        function (e, t) {
          var r = t.oLanguage.sDecimal;
          return Zt(e, r) ? "num" + r : null;
        },
        function (e, t) {
          if (e && !(e instanceof Date) && !yn.test(e)) return null;
          var r = Date.parse(e);
          return (null !== r && !isNaN(r)) || Ae(e) ? "date" : null;
        },
        function (e, t) {
          var r = t.oLanguage.sDecimal;
          return Zt(e, r, !0) ? "num-fmt" + r : null;
        },
        function (e, t) {
          var r = t.oLanguage.sDecimal;
          return $t(e, r) ? "html-num" + r : null;
        },
        function (e, t) {
          var r = t.oLanguage.sDecimal;
          return $t(e, r, !0) ? "html-num-fmt" + r : null;
        },
        function (e, t) {
          return Ae(e) || ("string" == typeof e && -1 !== e.indexOf("<"))
            ? "html"
            : null;
        },
      ]),
      w.extend(m.ext.type.search, {
        html: function (e) {
          return Ae(e)
            ? e
            : "string" == typeof e
            ? e.replace(W, " ").replace(bt, "")
            : "";
        },
        string: function (e) {
          return Ae(e) ? e : "string" == typeof e ? e.replace(W, " ") : e;
        },
      });
    var xn = function (e, t, r, a) {
      if (0 !== e && (!e || "-" === e)) return -1 / 0;
      var s = typeof e;
      return "number" === s || "bigint" === s
        ? e
        : (t && (e = Kt(e, t)),
          e.replace &&
            (r && (e = e.replace(r, "")), a && (e = e.replace(a, ""))),
          1 * e);
    };
    function tr(e) {
      w.each(
        {
          num: function (t) {
            return xn(t, e);
          },
          "num-fmt": function (t) {
            return xn(t, e, ie);
          },
          "html-num": function (t) {
            return xn(t, e, bt);
          },
          "html-num-fmt": function (t) {
            return xn(t, e, bt, ie);
          },
        },
        function (t, r) {
          (Te.type.order[t + e + "-pre"] = r),
            t.match(/^html\-/) && (Te.type.search[t + e] = Te.type.search.html);
        }
      );
    }
    w.extend(Te.type.order, {
      "date-pre": function (e) {
        var t = Date.parse(e);
        return isNaN(t) ? -1 / 0 : t;
      },
      "html-pre": function (e) {
        return Ae(e)
          ? ""
          : e.replace
          ? e.replace(/<.*?>/g, "").toLowerCase()
          : e + "";
      },
      "string-pre": function (e) {
        return Ae(e)
          ? ""
          : "string" == typeof e
          ? e.toLowerCase()
          : e.toString
          ? e.toString()
          : "";
      },
      "string-asc": function (e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      },
      "string-desc": function (e, t) {
        return e < t ? 1 : e > t ? -1 : 0;
      },
    }),
      tr(""),
      w.extend(!0, m.ext.renderer, {
        header: {
          _: function (e, t, r, a) {
            w(e.nTable).on("order.dt.DT", function (s, l, f, d) {
              if (e === l) {
                var v = r.idx;
                t.removeClass(a.sSortAsc + " " + a.sSortDesc).addClass(
                  "asc" == d[v]
                    ? a.sSortAsc
                    : "desc" == d[v]
                    ? a.sSortDesc
                    : r.sSortingClass
                );
              }
            });
          },
          jqueryui: function (e, t, r, a) {
            w("<div/>")
              .addClass(a.sSortJUIWrapper)
              .append(t.contents())
              .append(
                w("<span/>").addClass(a.sSortIcon + " " + r.sSortingClassJUI)
              )
              .appendTo(t),
              w(e.nTable).on("order.dt.DT", function (s, l, f, d) {
                if (e === l) {
                  var v = r.idx;
                  t
                    .removeClass(a.sSortAsc + " " + a.sSortDesc)
                    .addClass(
                      "asc" == d[v]
                        ? a.sSortAsc
                        : "desc" == d[v]
                        ? a.sSortDesc
                        : r.sSortingClass
                    ),
                    t
                      .find("span." + a.sSortIcon)
                      .removeClass(
                        a.sSortJUIAsc +
                          " " +
                          a.sSortJUIDesc +
                          " " +
                          a.sSortJUI +
                          " " +
                          a.sSortJUIAscAllowed +
                          " " +
                          a.sSortJUIDescAllowed
                      )
                      .addClass(
                        "asc" == d[v]
                          ? a.sSortJUIAsc
                          : "desc" == d[v]
                          ? a.sSortJUIDesc
                          : r.sSortingClassJUI
                      );
                }
              });
          },
        },
      });
    var hn = function (e) {
      return (
        Array.isArray(e) && (e = e.join(",")),
        "string" == typeof e
          ? e
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
          : e
      );
    };
    function nr(e, t, r, a, s) {
      return de.moment ? e[t](s) : de.luxon ? e[r](s) : a ? e[a](s) : e;
    }
    var rr = !1;
    function Dn(e, t, r) {
      var a;
      if (de.moment) {
        if (!(a = de.moment.utc(e, t, r, !0)).isValid()) return null;
      } else if (de.luxon) {
        if (
          !(a =
            t && "string" == typeof e
              ? de.luxon.DateTime.fromFormat(e, t)
              : de.luxon.DateTime.fromISO(e)).isValid
        )
          return null;
        a.setLocale(r);
      } else
        t
          ? (rr ||
              alert(
                "DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"
              ),
            (rr = !0))
          : (a = new Date(e));
      return a;
    }
    function ar(e) {
      return function (t, r, a, s) {
        0 === arguments.length
          ? ((a = "en"), (r = null), (t = null))
          : 1 === arguments.length
          ? ((a = "en"), (r = t), (t = null))
          : 2 === arguments.length && ((a = r), (r = t), (t = null));
        var l = "datetime-" + r;
        return (
          m.ext.type.order[l] ||
            (m.ext.type.detect.unshift(function (f) {
              return f === l && l;
            }),
            (m.ext.type.order[l + "-asc"] = function (f, d) {
              var v = f.valueOf(),
                y = d.valueOf();
              return v === y ? 0 : v < y ? -1 : 1;
            }),
            (m.ext.type.order[l + "-desc"] = function (f, d) {
              var v = f.valueOf(),
                y = d.valueOf();
              return v === y ? 0 : v > y ? -1 : 1;
            })),
          function (f, d) {
            if (null === f || f === I)
              if ("--now" === s) {
                var v = new Date();
                f = new Date(
                  Date.UTC(
                    v.getFullYear(),
                    v.getMonth(),
                    v.getDate(),
                    v.getHours(),
                    v.getMinutes(),
                    v.getSeconds()
                  )
                );
              } else f = "";
            if ("type" === d) return l;
            if ("" === f)
              return "sort" !== d ? "" : Dn("0000-01-01 00:00:00", null, a);
            if (
              null !== r &&
              t === r &&
              "sort" !== d &&
              "type" !== d &&
              !(f instanceof Date)
            )
              return f;
            var y = Dn(f, t, a);
            if (null === y) return f;
            if ("sort" === d) return y;
            var _ =
              null === r
                ? nr(y, "toDate", "toJSDate", "")[e]()
                : nr(y, "format", "toFormat", "toISOString", r);
            return "display" === d ? hn(_) : _;
          }
        );
      };
    }
    var mr = ",",
      vr = ".";
    if (de.Intl !== I)
      try {
        for (
          var n = new Intl.NumberFormat().formatToParts(100000.1), i = 0;
          i < n.length;
          i++
        )
          "group" === n[i].type
            ? (mr = n[i].value)
            : "decimal" === n[i].type && (vr = n[i].value);
      } catch (e) {}
    function u(e) {
      return function () {
        var t = [wn(this[m.ext.iApiIndex])].concat(
          Array.prototype.slice.call(arguments)
        );
        return m.ext.internal[e].apply(this, t);
      };
    }
    return (
      (m.datetime = function (e, t) {
        var r = "datetime-detect-" + e;
        t || (t = "en"),
          m.ext.type.order[r] ||
            (m.ext.type.detect.unshift(function (a) {
              var s = Dn(a, e, t);
              return !("" !== a && !s) && r;
            }),
            (m.ext.type.order[r + "-pre"] = function (a) {
              return Dn(a, e, t) || 0;
            }));
      }),
      (m.render = {
        date: ar("toLocaleDateString"),
        datetime: ar("toLocaleString"),
        time: ar("toLocaleTimeString"),
        number: function (e, t, r, a, s) {
          return (
            (null === e || e === I) && (e = mr),
            (null === t || t === I) && (t = vr),
            {
              display: function (l) {
                if (
                  ("number" != typeof l && "string" != typeof l) ||
                  "" === l ||
                  null === l
                )
                  return l;
                var f = l < 0 ? "-" : "",
                  d = parseFloat(l);
                if (isNaN(d)) return hn(l);
                (d = d.toFixed(r)), (l = Math.abs(d));
                var v = parseInt(l, 10),
                  y = r ? t + (l - v).toFixed(r).substring(2) : "";
                return (
                  0 === v && 0 === parseFloat(y) && (f = ""),
                  f +
                    (a || "") +
                    v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e) +
                    y +
                    (s || "")
                );
              },
            }
          );
        },
        text: function () {
          return { display: hn, filter: hn };
        },
      }),
      w.extend(m.ext.internal, {
        _fnExternApiFunc: u,
        _fnBuildAjax: h,
        _fnAjaxUpdate: b,
        _fnAjaxParameters: C,
        _fnAjaxUpdateDraw: D,
        _fnAjaxDataSrc: N,
        _fnAddColumn: Vt,
        _fnColumnOptions: Xt,
        _fnAdjustColumnSizing: Qt,
        _fnVisibleToColumnIndex: Ot,
        _fnColumnIndexToVisible: kt,
        _fnVisbleColumns: $e,
        _fnGetColumns: et,
        _fnColumnTypes: Tt,
        _fnApplyColumnDefs: zt,
        _fnHungarianMap: qt,
        _fnCamelToHungarian: Ct,
        _fnLanguageCompat: rt,
        _fnBrowserDetect: nn,
        _fnAddData: dt,
        _fnAddTr: rn,
        _fnNodeToDataIndex: function (e, t) {
          return t._DT_RowIndex !== I ? t._DT_RowIndex : null;
        },
        _fnNodeToColumnIndex: function (e, t, r) {
          return w.inArray(r, e.aoData[t].anCells);
        },
        _fnGetCellData: xe,
        _fnSetCellData: xt,
        _fnSplitObjNotation: Qe,
        _fnGetObjectDataFn: ht,
        _fnSetObjectDataFn: at,
        _fnGetDataMaster: z,
        _fnClearTable: je,
        _fnDeleteIndex: Yt,
        _fnInvalidate: Ut,
        _fnGetRowElements: on,
        _fnCreateTr: tt,
        _fnBuildHead: Ze,
        _fnDrawHead: it,
        _fnDraw: Ye,
        _fnReDraw: pt,
        _fnAddOptionsHtml: ut,
        _fnDetectHeader: p,
        _fnGetUniqueThs: g,
        _fnFeatureHtmlFilter: F,
        _fnFilterComplete: M,
        _fnFilterCustom: B,
        _fnFilterColumn: U,
        _fnFilter: Y,
        _fnFilterCreateSearch: re,
        _fnEscapeRegex: oe,
        _fnFilterData: ft,
        _fnFeatureHtmlInfo: ln,
        _fnUpdateInfo: sn,
        _fnInfoMacros: Fn,
        _fnInitialise: En,
        _fnInitComplete: An,
        _fnLengthChange: un,
        _fnFeatureHtmlLength: Xn,
        _fnFeatureHtmlPaginate: On,
        _fnPageChange: bn,
        _fnFeatureHtmlProcessing: kn,
        _fnProcessingDisplay: mt,
        _fnFeatureHtmlTable: or,
        _fnScrollDraw: fn,
        _fnApplyToChildren: Pt,
        _fnCalculateColumnWidths: Pn,
        _fnThrottle: Rn,
        _fnConvertToWidth: Hn,
        _fnGetWidestNode: sr,
        _fnGetMaxLenString: ur,
        _fnStringToCss: qe,
        _fnSortFlatten: mn,
        _fnSort: Mn,
        _fnSortAria: Qn,
        _fnSortListener: St,
        _fnSortAttachListener: cn,
        _fnSortingClasses: vn,
        _fnSortData: gn,
        _fnSaveState: _n,
        _fnLoadState: fr,
        _fnImplementState: zn,
        _fnSettingsFromNode: wn,
        _fnLog: Et,
        _fnMap: vt,
        _fnBindAction: At,
        _fnCallbackReg: lt,
        _fnCallbackFire: _e,
        _fnLengthOverflow: Yn,
        _fnRenderer: Jn,
        _fnDataSource: Ue,
        _fnRowAttributes: Be,
        _fnExtend: qn,
        _fnCalculateEnd: function () {},
      }),
      (w.fn.dataTable = m),
      (m.$ = w),
      (w.fn.dataTableSettings = m.settings),
      (w.fn.dataTableExt = m.ext),
      (w.fn.DataTable = function (e) {
        return w(this).dataTable(e).api();
      }),
      w.each(m, function (e, t) {
        w.fn.DataTable[e] = t;
      }),
      m
    );
  });
