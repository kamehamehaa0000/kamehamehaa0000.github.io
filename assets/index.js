;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function Il(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Nf = { exports: {} },
  Co = {},
  Df = { exports: {} },
  D = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zr = Symbol.for('react.element'),
  C0 = Symbol.for('react.portal'),
  P0 = Symbol.for('react.fragment'),
  T0 = Symbol.for('react.strict_mode'),
  E0 = Symbol.for('react.profiler'),
  M0 = Symbol.for('react.provider'),
  L0 = Symbol.for('react.context'),
  A0 = Symbol.for('react.forward_ref'),
  R0 = Symbol.for('react.suspense'),
  j0 = Symbol.for('react.memo'),
  V0 = Symbol.for('react.lazy'),
  uu = Symbol.iterator
function N0(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (uu && e[uu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var _f = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zf = Object.assign,
  Of = {}
function bn(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Of),
    (this.updater = n || _f)
}
bn.prototype.isReactComponent = {}
bn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
bn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Ff() {}
Ff.prototype = bn.prototype
function Bl(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Of),
    (this.updater = n || _f)
}
var Ul = (Bl.prototype = new Ff())
Ul.constructor = Bl
zf(Ul, bn.prototype)
Ul.isPureReactComponent = !0
var cu = Array.isArray,
  If = Object.prototype.hasOwnProperty,
  $l = { current: null },
  Bf = { key: !0, ref: !0, __self: !0, __source: !0 }
function Uf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      If.call(t, r) && !Bf.hasOwnProperty(r) && (i[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
    i.children = a
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
  return { $$typeof: Zr, type: e, key: o, ref: s, props: i, _owner: $l.current }
}
function D0(e, t) {
  return {
    $$typeof: Zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Hl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zr
}
function _0(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var fu = /\/+/g
function Go(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? _0('' + e.key)
    : t.toString(36)
}
function Mi(e, t, n, r, i) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Zr:
          case C0:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + Go(s, 0) : r),
      cu(i)
        ? ((n = ''),
          e != null && (n = e.replace(fu, '$&/') + '/'),
          Mi(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (Hl(i) &&
            (i = D0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(fu, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), cu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l]
      var a = r + Go(o, l)
      s += Mi(o, t, n, a, i)
    }
  else if (((a = N0(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Go(o, l++)), (s += Mi(o, t, n, a, i))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return s
}
function li(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Mi(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function z0(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Se = { current: null },
  Li = { transition: null },
  O0 = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Li,
    ReactCurrentOwner: $l,
  }
D.Children = {
  map: li,
  forEach: function (e, t, n) {
    li(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      li(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      li(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Hl(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
D.Component = bn
D.Fragment = P0
D.Profiler = E0
D.PureComponent = Bl
D.StrictMode = T0
D.Suspense = R0
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O0
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = zf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = $l.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (a in t)
      If.call(t, a) &&
        !Bf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    l = Array(a)
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: Zr, type: e.type, key: i, ref: o, props: r, _owner: s }
}
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: L0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: M0, _context: e }),
    (e.Consumer = e)
  )
}
D.createElement = Uf
D.createFactory = function (e) {
  var t = Uf.bind(null, e)
  return (t.type = e), t
}
D.createRef = function () {
  return { current: null }
}
D.forwardRef = function (e) {
  return { $$typeof: A0, render: e }
}
D.isValidElement = Hl
D.lazy = function (e) {
  return { $$typeof: V0, _payload: { _status: -1, _result: e }, _init: z0 }
}
D.memo = function (e, t) {
  return { $$typeof: j0, type: e, compare: t === void 0 ? null : t }
}
D.startTransition = function (e) {
  var t = Li.transition
  Li.transition = {}
  try {
    e()
  } finally {
    Li.transition = t
  }
}
D.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
D.useCallback = function (e, t) {
  return Se.current.useCallback(e, t)
}
D.useContext = function (e) {
  return Se.current.useContext(e)
}
D.useDebugValue = function () {}
D.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e)
}
D.useEffect = function (e, t) {
  return Se.current.useEffect(e, t)
}
D.useId = function () {
  return Se.current.useId()
}
D.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n)
}
D.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t)
}
D.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t)
}
D.useMemo = function (e, t) {
  return Se.current.useMemo(e, t)
}
D.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n)
}
D.useRef = function (e) {
  return Se.current.useRef(e)
}
D.useState = function (e) {
  return Se.current.useState(e)
}
D.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n)
}
D.useTransition = function () {
  return Se.current.useTransition()
}
D.version = '18.2.0'
Df.exports = D
var A = Df.exports
const ut = Il(A)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F0 = A,
  I0 = Symbol.for('react.element'),
  B0 = Symbol.for('react.fragment'),
  U0 = Object.prototype.hasOwnProperty,
  $0 = F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  H0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function $f(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (r in t) U0.call(t, r) && !H0.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: I0, type: e, key: o, ref: s, props: i, _owner: $0.current }
}
Co.Fragment = B0
Co.jsx = $f
Co.jsxs = $f
Nf.exports = Co
var x = Nf.exports,
  Vs = {},
  Hf = { exports: {} },
  _e = {},
  Wf = { exports: {} },
  Kf = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(E, V) {
    var N = E.length
    E.push(V)
    e: for (; 0 < N; ) {
      var X = (N - 1) >>> 1,
        ne = E[X]
      if (0 < i(ne, V)) (E[X] = V), (E[N] = ne), (N = X)
      else break e
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0]
  }
  function r(E) {
    if (E.length === 0) return null
    var V = E[0],
      N = E.pop()
    if (N !== V) {
      E[0] = N
      e: for (var X = 0, ne = E.length, oi = ne >>> 1; X < oi; ) {
        var Zt = 2 * (X + 1) - 1,
          Ko = E[Zt],
          bt = Zt + 1,
          si = E[bt]
        if (0 > i(Ko, N))
          bt < ne && 0 > i(si, Ko)
            ? ((E[X] = si), (E[bt] = N), (X = bt))
            : ((E[X] = Ko), (E[Zt] = N), (X = Zt))
        else if (bt < ne && 0 > i(si, N)) (E[X] = si), (E[bt] = N), (X = bt)
        else break e
      }
    }
    return V
  }
  function i(E, V) {
    var N = E.sortIndex - V.sortIndex
    return N !== 0 ? N : E.id - V.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var s = Date,
      l = s.now()
    e.unstable_now = function () {
      return s.now() - l
    }
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    v = !1,
    y = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function p(E) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u)
      else if (V.startTime <= E) r(u), (V.sortIndex = V.expirationTime), t(a, V)
      else break
      V = n(u)
    }
  }
  function w(E) {
    if (((y = !1), p(E), !v))
      if (n(a) !== null) (v = !0), Ae(S)
      else {
        var V = n(u)
        V !== null && Xt(w, V.startTime - E)
      }
  }
  function S(E, V) {
    ;(v = !1), y && ((y = !1), m(C), (C = -1)), (g = !0)
    var N = d
    try {
      for (
        p(V), f = n(a);
        f !== null && (!(f.expirationTime > V) || (E && !te()));

      ) {
        var X = f.callback
        if (typeof X == 'function') {
          ;(f.callback = null), (d = f.priorityLevel)
          var ne = X(f.expirationTime <= V)
          ;(V = e.unstable_now()),
            typeof ne == 'function' ? (f.callback = ne) : f === n(a) && r(a),
            p(V)
        } else r(a)
        f = n(a)
      }
      if (f !== null) var oi = !0
      else {
        var Zt = n(u)
        Zt !== null && Xt(w, Zt.startTime - V), (oi = !1)
      }
      return oi
    } finally {
      ;(f = null), (d = N), (g = !1)
    }
  }
  var T = !1,
    M = null,
    C = -1,
    _ = 5,
    j = -1
  function te() {
    return !(e.unstable_now() - j < _)
  }
  function xt() {
    if (M !== null) {
      var E = e.unstable_now()
      j = E
      var V = !0
      try {
        V = M(!0, E)
      } finally {
        V ? Yt() : ((T = !1), (M = null))
      }
    } else T = !1
  }
  var Yt
  if (typeof h == 'function')
    Yt = function () {
      h(xt)
    }
  else if (typeof MessageChannel < 'u') {
    var tr = new MessageChannel(),
      oe = tr.port2
    ;(tr.port1.onmessage = xt),
      (Yt = function () {
        oe.postMessage(null)
      })
  } else
    Yt = function () {
      P(xt, 0)
    }
  function Ae(E) {
    ;(M = E), T || ((T = !0), Yt())
  }
  function Xt(E, V) {
    C = P(function () {
      E(e.unstable_now())
    }, V)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), Ae(S))
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (_ = 0 < E ? Math.floor(1e3 / E) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var V = 3
          break
        default:
          V = d
      }
      var N = d
      d = V
      try {
        return E()
      } finally {
        d = N
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, V) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          E = 3
      }
      var N = d
      d = E
      try {
        return V()
      } finally {
        d = N
      }
    }),
    (e.unstable_scheduleCallback = function (E, V, N) {
      var X = e.unstable_now()
      switch (
        (typeof N == 'object' && N !== null
          ? ((N = N.delay), (N = typeof N == 'number' && 0 < N ? X + N : X))
          : (N = X),
        E)
      ) {
        case 1:
          var ne = -1
          break
        case 2:
          ne = 250
          break
        case 5:
          ne = 1073741823
          break
        case 4:
          ne = 1e4
          break
        default:
          ne = 5e3
      }
      return (
        (ne = N + ne),
        (E = {
          id: c++,
          callback: V,
          priorityLevel: E,
          startTime: N,
          expirationTime: ne,
          sortIndex: -1,
        }),
        N > X
          ? ((E.sortIndex = N),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (y ? (m(C), (C = -1)) : (y = !0), Xt(w, N - X)))
          : ((E.sortIndex = ne), t(a, E), v || g || ((v = !0), Ae(S))),
        E
      )
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (E) {
      var V = d
      return function () {
        var N = d
        d = V
        try {
          return E.apply(this, arguments)
        } finally {
          d = N
        }
      }
    })
})(Kf)
Wf.exports = Kf
var W0 = Wf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gf = A,
  Ne = W0
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Qf = new Set(),
  Ar = {}
function gn(e, t) {
  Hn(e, t), Hn(e + 'Capture', t)
}
function Hn(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) Qf.add(t[e])
}
var pt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ns = Object.prototype.hasOwnProperty,
  K0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  du = {},
  hu = {}
function G0(e) {
  return Ns.call(hu, e)
    ? !0
    : Ns.call(du, e)
    ? !1
    : K0.test(e)
    ? (hu[e] = !0)
    : ((du[e] = !0), !1)
}
function Q0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Y0(e, t, n, r) {
  if (t === null || typeof t > 'u' || Q0(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ke(e, t, n, r, i, o, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s)
}
var ce = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ce[e] = new ke(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  ce[t] = new ke(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ce[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ce[e] = new ke(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ce[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ce[e] = new ke(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ce[e] = new ke(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ce[e] = new ke(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ce[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Wl = /[\-:]([a-z])/g
function Kl(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wl, Kl)
    ce[t] = new ke(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wl, Kl)
    ce[t] = new ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Wl, Kl)
  ce[t] = new ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ce[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ce.xlinkHref = new ke(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ce[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Gl(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Y0(t, n, i, r) && (n = null),
    r || i === null
      ? G0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var yt = Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ai = Symbol.for('react.element'),
  Sn = Symbol.for('react.portal'),
  kn = Symbol.for('react.fragment'),
  Ql = Symbol.for('react.strict_mode'),
  Ds = Symbol.for('react.profiler'),
  Yf = Symbol.for('react.provider'),
  Xf = Symbol.for('react.context'),
  Yl = Symbol.for('react.forward_ref'),
  _s = Symbol.for('react.suspense'),
  zs = Symbol.for('react.suspense_list'),
  Xl = Symbol.for('react.memo'),
  kt = Symbol.for('react.lazy'),
  Zf = Symbol.for('react.offscreen'),
  pu = Symbol.iterator
function nr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pu && e[pu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Q = Object.assign,
  Qo
function fr(e) {
  if (Qo === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Qo = (t && t[1]) || ''
    }
  return (
    `
` +
    Qo +
    e
  )
}
var Yo = !1
function Xo(e, t) {
  if (!e || Yo) return ''
  Yo = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= s && 0 <= l)
          break
        }
    }
  } finally {
    ;(Yo = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? fr(e) : ''
}
function X0(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type)
    case 16:
      return fr('Lazy')
    case 13:
      return fr('Suspense')
    case 19:
      return fr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Xo(e.type, !1)), e
    case 11:
      return (e = Xo(e.type.render, !1)), e
    case 1:
      return (e = Xo(e.type, !0)), e
    default:
      return ''
  }
}
function Os(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case kn:
      return 'Fragment'
    case Sn:
      return 'Portal'
    case Ds:
      return 'Profiler'
    case Ql:
      return 'StrictMode'
    case _s:
      return 'Suspense'
    case zs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Xf:
        return (e.displayName || 'Context') + '.Consumer'
      case Yf:
        return (e._context.displayName || 'Context') + '.Provider'
      case Yl:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Xl:
        return (
          (t = e.displayName || null), t !== null ? t : Os(e.type) || 'Memo'
        )
      case kt:
        ;(t = e._payload), (e = e._init)
        try {
          return Os(e(t))
        } catch {}
    }
  return null
}
function Z0(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Os(t)
    case 8:
      return t === Ql ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function It(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function bf(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function b0(e) {
  var t = bf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (s) {
          ;(r = '' + s), o.call(this, s)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          r = '' + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function ui(e) {
  e._valueTracker || (e._valueTracker = b0(e))
}
function Jf(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = bf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Hi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Fs(e, t) {
  var n = t.checked
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function mu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = It(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function qf(e, t) {
  ;(t = t.checked), t != null && Gl(e, 'checked', t, !1)
}
function Is(e, t) {
  qf(e, t)
  var n = It(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Bs(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Bs(e, t.type, It(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function gu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Bs(e, t, n) {
  ;(t !== 'number' || Hi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var dr = Array.isArray
function On(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + It(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Us(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91))
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function vu(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92))
      if (dr(n)) {
        if (1 < n.length) throw Error(k(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: It(n) }
}
function ed(e, t) {
  var n = It(t.value),
    r = It(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function yu(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function td(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function $s(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? td(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ci,
  nd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ci = ci || document.createElement('div'),
          ci.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ci.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Rr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  J0 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(gr).forEach(function (e) {
  J0.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (gr[t] = gr[e])
  })
})
function rd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (gr.hasOwnProperty(e) && gr[e])
    ? ('' + t).trim()
    : t + 'px'
}
function id(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = rd(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var q0 = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function Hs(e, t) {
  if (t) {
    if (q0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62))
  }
}
function Ws(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Ks = null
function Zl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Gs = null,
  Fn = null,
  In = null
function xu(e) {
  if ((e = qr(e))) {
    if (typeof Gs != 'function') throw Error(k(280))
    var t = e.stateNode
    t && ((t = Lo(t)), Gs(e.stateNode, e.type, t))
  }
}
function od(e) {
  Fn ? (In ? In.push(e) : (In = [e])) : (Fn = e)
}
function sd() {
  if (Fn) {
    var e = Fn,
      t = In
    if (((In = Fn = null), xu(e), t)) for (e = 0; e < t.length; e++) xu(t[e])
  }
}
function ld(e, t) {
  return e(t)
}
function ad() {}
var Zo = !1
function ud(e, t, n) {
  if (Zo) return e(t, n)
  Zo = !0
  try {
    return ld(e, t, n)
  } finally {
    ;(Zo = !1), (Fn !== null || In !== null) && (ad(), sd())
  }
}
function jr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Lo(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n))
  return n
}
var Qs = !1
if (pt)
  try {
    var rr = {}
    Object.defineProperty(rr, 'passive', {
      get: function () {
        Qs = !0
      },
    }),
      window.addEventListener('test', rr, rr),
      window.removeEventListener('test', rr, rr)
  } catch {
    Qs = !1
  }
function ep(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var vr = !1,
  Wi = null,
  Ki = !1,
  Ys = null,
  tp = {
    onError: function (e) {
      ;(vr = !0), (Wi = e)
    },
  }
function np(e, t, n, r, i, o, s, l, a) {
  ;(vr = !1), (Wi = null), ep.apply(tp, arguments)
}
function rp(e, t, n, r, i, o, s, l, a) {
  if ((np.apply(this, arguments), vr)) {
    if (vr) {
      var u = Wi
      ;(vr = !1), (Wi = null)
    } else throw Error(k(198))
    Ki || ((Ki = !0), (Ys = u))
  }
}
function vn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function wu(e) {
  if (vn(e) !== e) throw Error(k(188))
}
function ip(e) {
  var t = e.alternate
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(k(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wu(i), e
        if (o === r) return wu(i), t
        o = o.sibling
      }
      throw Error(k(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          ;(s = !0), (n = i), (r = o)
          break
        }
        if (l === r) {
          ;(s = !0), (r = i), (n = o)
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            ;(s = !0), (n = o), (r = i)
            break
          }
          if (l === r) {
            ;(s = !0), (r = o), (n = i)
            break
          }
          l = l.sibling
        }
        if (!s) throw Error(k(189))
      }
    }
    if (n.alternate !== r) throw Error(k(190))
  }
  if (n.tag !== 3) throw Error(k(188))
  return n.stateNode.current === n ? e : t
}
function fd(e) {
  return (e = ip(e)), e !== null ? dd(e) : null
}
function dd(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = dd(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var hd = Ne.unstable_scheduleCallback,
  Su = Ne.unstable_cancelCallback,
  op = Ne.unstable_shouldYield,
  sp = Ne.unstable_requestPaint,
  b = Ne.unstable_now,
  lp = Ne.unstable_getCurrentPriorityLevel,
  bl = Ne.unstable_ImmediatePriority,
  pd = Ne.unstable_UserBlockingPriority,
  Gi = Ne.unstable_NormalPriority,
  ap = Ne.unstable_LowPriority,
  md = Ne.unstable_IdlePriority,
  Po = null,
  tt = null
function up(e) {
  if (tt && typeof tt.onCommitFiberRoot == 'function')
    try {
      tt.onCommitFiberRoot(Po, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : dp,
  cp = Math.log,
  fp = Math.LN2
function dp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cp(e) / fp) | 0)) | 0
}
var fi = 64,
  di = 4194304
function hr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Qi(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var l = s & ~i
    l !== 0 ? (r = hr(l)) : ((o &= s), o !== 0 && (r = hr(o)))
  } else (s = n & ~i), s !== 0 ? (r = hr(s)) : o !== 0 && (r = hr(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function hp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function pp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Xe(o),
      l = 1 << s,
      a = i[s]
    a === -1
      ? (!(l & n) || l & r) && (i[s] = hp(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l)
  }
}
function Xs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function gd() {
  var e = fi
  return (fi <<= 1), !(fi & 4194240) && (fi = 64), e
}
function bo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function br(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n)
}
function mp(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Xe(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function Jl(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var F = 0
function vd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var yd,
  ql,
  xd,
  wd,
  Sd,
  Zs = !1,
  hi = [],
  At = null,
  Rt = null,
  jt = null,
  Vr = new Map(),
  Nr = new Map(),
  Tt = [],
  gp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function ku(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      At = null
      break
    case 'dragenter':
    case 'dragleave':
      Rt = null
      break
    case 'mouseover':
    case 'mouseout':
      jt = null
      break
    case 'pointerover':
    case 'pointerout':
      Vr.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Nr.delete(t.pointerId)
  }
}
function ir(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = qr(t)), t !== null && ql(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function vp(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (At = ir(At, e, t, n, r, i)), !0
    case 'dragenter':
      return (Rt = ir(Rt, e, t, n, r, i)), !0
    case 'mouseover':
      return (jt = ir(jt, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return Vr.set(o, ir(Vr.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Nr.set(o, ir(Nr.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function kd(e) {
  var t = rn(e.target)
  if (t !== null) {
    var n = vn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cd(n)), t !== null)) {
          ;(e.blockedOn = t),
            Sd(e.priority, function () {
              xd(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Ai(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Ks = r), n.target.dispatchEvent(r), (Ks = null)
    } else return (t = qr(n)), t !== null && ql(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Cu(e, t, n) {
  Ai(e) && n.delete(t)
}
function yp() {
  ;(Zs = !1),
    At !== null && Ai(At) && (At = null),
    Rt !== null && Ai(Rt) && (Rt = null),
    jt !== null && Ai(jt) && (jt = null),
    Vr.forEach(Cu),
    Nr.forEach(Cu)
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zs ||
      ((Zs = !0), Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, yp)))
}
function Dr(e) {
  function t(i) {
    return or(i, e)
  }
  if (0 < hi.length) {
    or(hi[0], e)
    for (var n = 1; n < hi.length; n++) {
      var r = hi[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    At !== null && or(At, e),
      Rt !== null && or(Rt, e),
      jt !== null && or(jt, e),
      Vr.forEach(t),
      Nr.forEach(t),
      n = 0;
    n < Tt.length;
    n++
  )
    (r = Tt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
    kd(n), n.blockedOn === null && Tt.shift()
}
var Bn = yt.ReactCurrentBatchConfig,
  Yi = !0
function xp(e, t, n, r) {
  var i = F,
    o = Bn.transition
  Bn.transition = null
  try {
    ;(F = 1), ea(e, t, n, r)
  } finally {
    ;(F = i), (Bn.transition = o)
  }
}
function wp(e, t, n, r) {
  var i = F,
    o = Bn.transition
  Bn.transition = null
  try {
    ;(F = 4), ea(e, t, n, r)
  } finally {
    ;(F = i), (Bn.transition = o)
  }
}
function ea(e, t, n, r) {
  if (Yi) {
    var i = bs(e, t, n, r)
    if (i === null) ls(e, t, r, Xi, n), ku(e, r)
    else if (vp(i, e, t, n, r)) r.stopPropagation()
    else if ((ku(e, r), t & 4 && -1 < gp.indexOf(e))) {
      for (; i !== null; ) {
        var o = qr(i)
        if (
          (o !== null && yd(o),
          (o = bs(e, t, n, r)),
          o === null && ls(e, t, r, Xi, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else ls(e, t, r, null, n)
  }
}
var Xi = null
function bs(e, t, n, r) {
  if (((Xi = null), (e = Zl(r)), (e = rn(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = cd(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Xi = e), null
}
function Cd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (lp()) {
        case bl:
          return 1
        case pd:
          return 4
        case Gi:
        case ap:
          return 16
        case md:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Mt = null,
  ta = null,
  Ri = null
function Pd() {
  if (Ri) return Ri
  var e,
    t = ta,
    n = t.length,
    r,
    i = 'value' in Mt ? Mt.value : Mt.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ri = i.slice(e, 1 < r ? 1 - r : void 0))
}
function ji(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function pi() {
  return !0
}
function Pu() {
  return !1
}
function ze(e) {
  function t(n, r, i, o, s) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null)
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pi
        : Pu),
      (this.isPropagationStopped = Pu),
      this
    )
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = pi))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = pi))
      },
      persist: function () {},
      isPersistent: pi,
    }),
    t
  )
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  na = ze(Jn),
  Jr = Q({}, Jn, { view: 0, detail: 0 }),
  Sp = ze(Jr),
  Jo,
  qo,
  sr,
  To = Q({}, Jr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ra,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === 'mousemove'
              ? ((Jo = e.screenX - sr.screenX), (qo = e.screenY - sr.screenY))
              : (qo = Jo = 0),
            (sr = e)),
          Jo)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : qo
    },
  }),
  Tu = ze(To),
  kp = Q({}, To, { dataTransfer: 0 }),
  Cp = ze(kp),
  Pp = Q({}, Jr, { relatedTarget: 0 }),
  es = ze(Pp),
  Tp = Q({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ep = ze(Tp),
  Mp = Q({}, Jn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Lp = ze(Mp),
  Ap = Q({}, Jn, { data: 0 }),
  Eu = ze(Ap),
  Rp = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  jp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Vp = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Np(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Vp[e]) ? !!t[e] : !1
}
function ra() {
  return Np
}
var Dp = Q({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = Rp[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ji(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? jp[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ra,
    charCode: function (e) {
      return e.type === 'keypress' ? ji(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ji(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  _p = ze(Dp),
  zp = Q({}, To, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Mu = ze(zp),
  Op = Q({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ra,
  }),
  Fp = ze(Op),
  Ip = Q({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bp = ze(Ip),
  Up = Q({}, To, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $p = ze(Up),
  Hp = [9, 13, 27, 32],
  ia = pt && 'CompositionEvent' in window,
  yr = null
pt && 'documentMode' in document && (yr = document.documentMode)
var Wp = pt && 'TextEvent' in window && !yr,
  Td = pt && (!ia || (yr && 8 < yr && 11 >= yr)),
  Lu = ' ',
  Au = !1
function Ed(e, t) {
  switch (e) {
    case 'keyup':
      return Hp.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Md(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Cn = !1
function Kp(e, t) {
  switch (e) {
    case 'compositionend':
      return Md(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Au = !0), Lu)
    case 'textInput':
      return (e = t.data), e === Lu && Au ? null : e
    default:
      return null
  }
}
function Gp(e, t) {
  if (Cn)
    return e === 'compositionend' || (!ia && Ed(e, t))
      ? ((e = Pd()), (Ri = ta = Mt = null), (Cn = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Td && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Qp = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Qp[e.type] : t === 'textarea'
}
function Ld(e, t, n, r) {
  od(r),
    (t = Zi(t, 'onChange')),
    0 < t.length &&
      ((n = new na('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var xr = null,
  _r = null
function Yp(e) {
  Id(e, 0)
}
function Eo(e) {
  var t = En(e)
  if (Jf(t)) return e
}
function Xp(e, t) {
  if (e === 'change') return t
}
var Ad = !1
if (pt) {
  var ts
  if (pt) {
    var ns = 'oninput' in document
    if (!ns) {
      var ju = document.createElement('div')
      ju.setAttribute('oninput', 'return;'),
        (ns = typeof ju.oninput == 'function')
    }
    ts = ns
  } else ts = !1
  Ad = ts && (!document.documentMode || 9 < document.documentMode)
}
function Vu() {
  xr && (xr.detachEvent('onpropertychange', Rd), (_r = xr = null))
}
function Rd(e) {
  if (e.propertyName === 'value' && Eo(_r)) {
    var t = []
    Ld(t, _r, e, Zl(e)), ud(Yp, t)
  }
}
function Zp(e, t, n) {
  e === 'focusin'
    ? (Vu(), (xr = t), (_r = n), xr.attachEvent('onpropertychange', Rd))
    : e === 'focusout' && Vu()
}
function bp(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Eo(_r)
}
function Jp(e, t) {
  if (e === 'click') return Eo(t)
}
function qp(e, t) {
  if (e === 'input' || e === 'change') return Eo(t)
}
function em(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var be = typeof Object.is == 'function' ? Object.is : em
function zr(e, t) {
  if (be(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Ns.call(t, i) || !be(e[i], t[i])) return !1
  }
  return !0
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Du(e, t) {
  var n = Nu(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Nu(n)
  }
}
function jd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? jd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Vd() {
  for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Hi(e.document)
  }
  return t
}
function oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function tm(e) {
  var t = Vd(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    jd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Du(n, o))
        var s = Du(n, r)
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var nm = pt && 'documentMode' in document && 11 >= document.documentMode,
  Pn = null,
  Js = null,
  wr = null,
  qs = !1
function _u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  qs ||
    Pn == null ||
    Pn !== Hi(r) ||
    ((r = Pn),
    'selectionStart' in r && oa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && zr(wr, r)) ||
      ((wr = r),
      (r = Zi(Js, 'onSelect')),
      0 < r.length &&
        ((t = new na('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))))
}
function mi(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Tn = {
    animationend: mi('Animation', 'AnimationEnd'),
    animationiteration: mi('Animation', 'AnimationIteration'),
    animationstart: mi('Animation', 'AnimationStart'),
    transitionend: mi('Transition', 'TransitionEnd'),
  },
  rs = {},
  Nd = {}
pt &&
  ((Nd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  'TransitionEvent' in window || delete Tn.transitionend.transition)
function Mo(e) {
  if (rs[e]) return rs[e]
  if (!Tn[e]) return e
  var t = Tn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Nd) return (rs[e] = t[n])
  return e
}
var Dd = Mo('animationend'),
  _d = Mo('animationiteration'),
  zd = Mo('animationstart'),
  Od = Mo('transitionend'),
  Fd = new Map(),
  zu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function Wt(e, t) {
  Fd.set(e, t), gn(t, [e])
}
for (var is = 0; is < zu.length; is++) {
  var os = zu[is],
    rm = os.toLowerCase(),
    im = os[0].toUpperCase() + os.slice(1)
  Wt(rm, 'on' + im)
}
Wt(Dd, 'onAnimationEnd')
Wt(_d, 'onAnimationIteration')
Wt(zd, 'onAnimationStart')
Wt('dblclick', 'onDoubleClick')
Wt('focusin', 'onFocus')
Wt('focusout', 'onBlur')
Wt(Od, 'onTransitionEnd')
Hn('onMouseEnter', ['mouseout', 'mouseover'])
Hn('onMouseLeave', ['mouseout', 'mouseover'])
Hn('onPointerEnter', ['pointerout', 'pointerover'])
Hn('onPointerLeave', ['pointerout', 'pointerover'])
gn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
gn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
gn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
gn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
gn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
gn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var pr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  om = new Set('cancel close invalid load scroll toggle'.split(' ').concat(pr))
function Ou(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), rp(r, t, void 0, e), (e.currentTarget = null)
}
function Id(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e
          Ou(i, l, u), (o = a)
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e
          Ou(i, l, u), (o = a)
        }
    }
  }
  if (Ki) throw ((e = Ys), (Ki = !1), (Ys = null), e)
}
function B(e, t) {
  var n = t[il]
  n === void 0 && (n = t[il] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Bd(t, e, 2, !1), n.add(r))
}
function ss(e, t, n) {
  var r = 0
  t && (r |= 4), Bd(n, e, r, t)
}
var gi = '_reactListening' + Math.random().toString(36).slice(2)
function Or(e) {
  if (!e[gi]) {
    ;(e[gi] = !0),
      Qf.forEach(function (n) {
        n !== 'selectionchange' && (om.has(n) || ss(n, !1, e), ss(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[gi] || ((t[gi] = !0), ss('selectionchange', !1, t))
  }
}
function Bd(e, t, n, r) {
  switch (Cd(t)) {
    case 1:
      var i = xp
      break
    case 4:
      i = wp
      break
    default:
      i = ea
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !Qs ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function ls(e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return
            s = s.return
          }
        for (; l !== null; ) {
          if (((s = rn(l)), s === null)) return
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  ud(function () {
    var u = o,
      c = Zl(n),
      f = []
    e: {
      var d = Fd.get(e)
      if (d !== void 0) {
        var g = na,
          v = e
        switch (e) {
          case 'keypress':
            if (ji(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = _p
            break
          case 'focusin':
            ;(v = 'focus'), (g = es)
            break
          case 'focusout':
            ;(v = 'blur'), (g = es)
            break
          case 'beforeblur':
          case 'afterblur':
            g = es
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Tu
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Cp
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Fp
            break
          case Dd:
          case _d:
          case zd:
            g = Ep
            break
          case Od:
            g = Bp
            break
          case 'scroll':
            g = Sp
            break
          case 'wheel':
            g = $p
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = Lp
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Mu
        }
        var y = (t & 4) !== 0,
          P = !y && e === 'scroll',
          m = y ? (d !== null ? d + 'Capture' : null) : d
        y = []
        for (var h = u, p; h !== null; ) {
          p = h
          var w = p.stateNode
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              m !== null && ((w = jr(h, m)), w != null && y.push(Fr(h, w, p)))),
            P)
          )
            break
          h = h.return
        }
        0 < y.length &&
          ((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: y }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Ks &&
            (v = n.relatedTarget || n.fromElement) &&
            (rn(v) || v[mt]))
        )
          break e
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? rn(v) : null),
              v !== null &&
                ((P = vn(v)), v !== P || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((y = Tu),
            (w = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Mu),
              (w = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (h = 'pointer')),
            (P = g == null ? d : En(g)),
            (p = v == null ? d : En(v)),
            (d = new y(w, h + 'leave', g, n, c)),
            (d.target = P),
            (d.relatedTarget = p),
            (w = null),
            rn(c) === u &&
              ((y = new y(m, h + 'enter', v, n, c)),
              (y.target = p),
              (y.relatedTarget = P),
              (w = y)),
            (P = w),
            g && v)
          )
            t: {
              for (y = g, m = v, h = 0, p = y; p; p = xn(p)) h++
              for (p = 0, w = m; w; w = xn(w)) p++
              for (; 0 < h - p; ) (y = xn(y)), h--
              for (; 0 < p - h; ) (m = xn(m)), p--
              for (; h--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t
                ;(y = xn(y)), (m = xn(m))
              }
              y = null
            }
          else y = null
          g !== null && Fu(f, d, g, y, !1),
            v !== null && P !== null && Fu(f, P, v, y, !0)
        }
      }
      e: {
        if (
          ((d = u ? En(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var S = Xp
        else if (Ru(d))
          if (Ad) S = qp
          else {
            S = bp
            var T = Zp
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = Jp)
        if (S && (S = S(e, u))) {
          Ld(f, S, n, c)
          break e
        }
        T && T(e, d, u),
          e === 'focusout' &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === 'number' &&
            Bs(d, 'number', d.value)
      }
      switch (((T = u ? En(u) : window), e)) {
        case 'focusin':
          ;(Ru(T) || T.contentEditable === 'true') &&
            ((Pn = T), (Js = u), (wr = null))
          break
        case 'focusout':
          wr = Js = Pn = null
          break
        case 'mousedown':
          qs = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(qs = !1), _u(f, n, c)
          break
        case 'selectionchange':
          if (nm) break
        case 'keydown':
        case 'keyup':
          _u(f, n, c)
      }
      var M
      if (ia)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart'
              break e
            case 'compositionend':
              C = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              C = 'onCompositionUpdate'
              break e
          }
          C = void 0
        }
      else
        Cn
          ? Ed(e, n) && (C = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart')
      C &&
        (Td &&
          n.locale !== 'ko' &&
          (Cn || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && Cn && (M = Pd())
            : ((Mt = c),
              (ta = 'value' in Mt ? Mt.value : Mt.textContent),
              (Cn = !0))),
        (T = Zi(u, C)),
        0 < T.length &&
          ((C = new Eu(C, e, null, n, c)),
          f.push({ event: C, listeners: T }),
          M ? (C.data = M) : ((M = Md(n)), M !== null && (C.data = M)))),
        (M = Wp ? Kp(e, n) : Gp(e, n)) &&
          ((u = Zi(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Eu('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = M)))
    }
    Id(f, t)
  })
}
function Fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Zi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = jr(e, n)),
      o != null && r.unshift(Fr(e, o, i)),
      (o = jr(e, t)),
      o != null && r.push(Fr(e, o, i))),
      (e = e.return)
  }
  return r
}
function xn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Fu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode
    if (a !== null && a === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = jr(n, o)), a != null && s.unshift(Fr(n, a, l)))
        : i || ((a = jr(n, o)), a != null && s.push(Fr(n, a, l)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var sm = /\r\n?/g,
  lm = /\u0000|\uFFFD/g
function Iu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      sm,
      `
`
    )
    .replace(lm, '')
}
function vi(e, t, n) {
  if (((t = Iu(t)), Iu(e) !== t && n)) throw Error(k(425))
}
function bi() {}
var el = null,
  tl = null
function nl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var rl = typeof setTimeout == 'function' ? setTimeout : void 0,
  am = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Bu = typeof Promise == 'function' ? Promise : void 0,
  um =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Bu < 'u'
      ? function (e) {
          return Bu.resolve(null).then(e).catch(cm)
        }
      : rl
function cm(e) {
  setTimeout(function () {
    throw e
  })
}
function as(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Dr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Dr(t)
}
function Vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Uu(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var qn = Math.random().toString(36).slice(2),
  et = '__reactFiber$' + qn,
  Ir = '__reactProps$' + qn,
  mt = '__reactContainer$' + qn,
  il = '__reactEvents$' + qn,
  fm = '__reactListeners$' + qn,
  dm = '__reactHandles$' + qn
function rn(e) {
  var t = e[et]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uu(e); e !== null; ) {
          if ((n = e[et])) return n
          e = Uu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function qr(e) {
  return (
    (e = e[et] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(k(33))
}
function Lo(e) {
  return e[Ir] || null
}
var ol = [],
  Mn = -1
function Kt(e) {
  return { current: e }
}
function U(e) {
  0 > Mn || ((e.current = ol[Mn]), (ol[Mn] = null), Mn--)
}
function I(e, t) {
  Mn++, (ol[Mn] = e.current), (e.current = t)
}
var Bt = {},
  ve = Kt(Bt),
  Te = Kt(!1),
  fn = Bt
function Wn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Bt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Ee(e) {
  return (e = e.childContextTypes), e != null
}
function Ji() {
  U(Te), U(ve)
}
function $u(e, t, n) {
  if (ve.current !== Bt) throw Error(k(168))
  I(ve, t), I(Te, n)
}
function Ud(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(k(108, Z0(e) || 'Unknown', i))
  return Q({}, n, r)
}
function qi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (fn = ve.current),
    I(ve, e),
    I(Te, Te.current),
    !0
  )
}
function Hu(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(k(169))
  n
    ? ((e = Ud(e, t, fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Te),
      U(ve),
      I(ve, e))
    : U(Te),
    I(Te, n)
}
var ot = null,
  Ao = !1,
  us = !1
function $d(e) {
  ot === null ? (ot = [e]) : ot.push(e)
}
function hm(e) {
  ;(Ao = !0), $d(e)
}
function Gt() {
  if (!us && ot !== null) {
    us = !0
    var e = 0,
      t = F
    try {
      var n = ot
      for (F = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(ot = null), (Ao = !1)
    } catch (i) {
      throw (ot !== null && (ot = ot.slice(e + 1)), hd(bl, Gt), i)
    } finally {
      ;(F = t), (us = !1)
    }
  }
  return null
}
var Ln = [],
  An = 0,
  eo = null,
  to = 0,
  Ie = [],
  Be = 0,
  dn = null,
  st = 1,
  lt = ''
function qt(e, t) {
  ;(Ln[An++] = to), (Ln[An++] = eo), (eo = e), (to = t)
}
function Hd(e, t, n) {
  ;(Ie[Be++] = st), (Ie[Be++] = lt), (Ie[Be++] = dn), (dn = e)
  var r = st
  e = lt
  var i = 32 - Xe(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - Xe(t) + i
  if (30 < o) {
    var s = i - (i % 5)
    ;(o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (st = (1 << (32 - Xe(t) + i)) | (n << i) | r),
      (lt = o + e)
  } else (st = (1 << o) | (n << i) | r), (lt = e)
}
function sa(e) {
  e.return !== null && (qt(e, 1), Hd(e, 1, 0))
}
function la(e) {
  for (; e === eo; )
    (eo = Ln[--An]), (Ln[An] = null), (to = Ln[--An]), (Ln[An] = null)
  for (; e === dn; )
    (dn = Ie[--Be]),
      (Ie[Be] = null),
      (lt = Ie[--Be]),
      (Ie[Be] = null),
      (st = Ie[--Be]),
      (Ie[Be] = null)
}
var Ve = null,
  je = null,
  $ = !1,
  Ye = null
function Wd(e, t) {
  var n = Ue(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (je = Vt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (je = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = dn !== null ? { id: st, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (je = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function sl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ll(e) {
  if ($) {
    var t = je
    if (t) {
      var n = t
      if (!Wu(e, t)) {
        if (sl(e)) throw Error(k(418))
        t = Vt(n.nextSibling)
        var r = Ve
        t && Wu(e, t)
          ? Wd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ve = e))
      }
    } else {
      if (sl(e)) throw Error(k(418))
      ;(e.flags = (e.flags & -4097) | 2), ($ = !1), (Ve = e)
    }
  }
}
function Ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ve = e
}
function yi(e) {
  if (e !== Ve) return !1
  if (!$) return Ku(e), ($ = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !nl(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (sl(e)) throw (Kd(), Error(k(418)))
    for (; t; ) Wd(e, t), (t = Vt(t.nextSibling))
  }
  if ((Ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              je = Vt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      je = null
    }
  } else je = Ve ? Vt(e.stateNode.nextSibling) : null
  return !0
}
function Kd() {
  for (var e = je; e; ) e = Vt(e.nextSibling)
}
function Kn() {
  ;(je = Ve = null), ($ = !1)
}
function aa(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e)
}
var pm = yt.ReactCurrentBatchConfig
function Ge(e, t) {
  if (e && e.defaultProps) {
    ;(t = Q({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var no = Kt(null),
  ro = null,
  Rn = null,
  ua = null
function ca() {
  ua = Rn = ro = null
}
function fa(e) {
  var t = no.current
  U(no), (e._currentValue = t)
}
function al(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Un(e, t) {
  ;(ro = e),
    (ua = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null))
}
function He(e) {
  var t = e._currentValue
  if (ua !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (ro === null) throw Error(k(308))
      ;(Rn = e), (ro.dependencies = { lanes: 0, firstContext: e })
    } else Rn = Rn.next = e
  return t
}
var on = null
function da(e) {
  on === null ? (on = [e]) : on.push(e)
}
function Gd(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), da(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  )
}
function gt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Ct = !1
function ha(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Qd(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Nt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), z & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), da(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  )
}
function Vi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n)
  }
}
function Gu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function io(e, t, n, r) {
  var i = e.updateQueue
  Ct = !1
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending
  if (l !== null) {
    i.shared.pending = null
    var a = l,
      u = a.next
    ;(a.next = null), s === null ? (o = u) : (s.next = u), (s = a)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)))
  }
  if (o !== null) {
    var f = i.baseState
    ;(s = 0), (c = u = a = null), (l = o)
    do {
      var d = l.lane,
        g = l.eventTime
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            })
        e: {
          var v = e,
            y = l
          switch (((d = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == 'function')) {
                f = v.call(g, f, d)
                break e
              }
              f = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == 'function' ? v.call(g, f, d) : v),
                d == null)
              )
                break e
              f = Q({}, f, d)
              break e
            case 2:
              Ct = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l))
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (s |= d)
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break
        ;(d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (s |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(pn |= s), (e.lanes = s), (e.memoizedState = f)
  }
}
function Qu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(k(191, i))
        i.call(r)
      }
    }
}
var Yd = new Gf.Component().refs
function ul(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ro = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = we(),
      i = _t(e),
      o = ct(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, i)),
      t !== null && (Ze(t, e, i, r), Vi(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = we(),
      i = _t(e),
      o = ct(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, i)),
      t !== null && (Ze(t, e, i, r), Vi(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = we(),
      r = _t(e),
      i = ct(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = Nt(e, i, r)),
      t !== null && (Ze(t, e, r, n), Vi(t, e, r))
  },
}
function Yu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(i, o)
      : !0
  )
}
function Xd(e, t, n) {
  var r = !1,
    i = Bt,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = He(o))
      : ((i = Ee(t) ? fn : ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Wn(e, i) : Bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ro),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function Xu(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ro.enqueueReplaceState(t, t.state, null)
}
function cl(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = Yd), ha(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = He(o))
    : ((o = Ee(t) ? fn : ve.current), (i.context = Wn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (ul(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ro.enqueueReplaceState(i, i.state, null),
      io(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309))
        var r = n.stateNode
      }
      if (!r) throw Error(k(147, e))
      var i = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs
            l === Yd && (l = i.refs = {}), s === null ? delete l[o] : (l[o] = s)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(k(284))
    if (!n._owner) throw Error(k(290, e))
  }
  return e
}
function xi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Zu(e) {
  var t = e._init
  return t(e._payload)
}
function Zd(e) {
  function t(m, h) {
    if (e) {
      var p = m.deletions
      p === null ? ((m.deletions = [h]), (m.flags |= 16)) : p.push(h)
    }
  }
  function n(m, h) {
    if (!e) return null
    for (; h !== null; ) t(m, h), (h = h.sibling)
    return null
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling)
    return m
  }
  function i(m, h) {
    return (m = zt(m, h)), (m.index = 0), (m.sibling = null), m
  }
  function o(m, h, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((m.flags |= 2), h) : p)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    )
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function l(m, h, p, w) {
    return h === null || h.tag !== 6
      ? ((h = gs(p, m.mode, w)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h)
  }
  function a(m, h, p, w) {
    var S = p.type
    return S === kn
      ? c(m, h, p.props.children, w, p.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === kt &&
            Zu(S) === h.type))
      ? ((w = i(h, p.props)), (w.ref = lr(m, h, p)), (w.return = m), w)
      : ((w = Fi(p.type, p.key, p.props, null, m.mode, w)),
        (w.ref = lr(m, h, p)),
        (w.return = m),
        w)
  }
  function u(m, h, p, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = vs(p, m.mode, w)), (h.return = m), h)
      : ((h = i(h, p.children || [])), (h.return = m), h)
  }
  function c(m, h, p, w, S) {
    return h === null || h.tag !== 7
      ? ((h = un(p, m.mode, w, S)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h)
  }
  function f(m, h, p) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = gs('' + h, m.mode, p)), (h.return = m), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case ai:
          return (
            (p = Fi(h.type, h.key, h.props, null, m.mode, p)),
            (p.ref = lr(m, null, h)),
            (p.return = m),
            p
          )
        case Sn:
          return (h = vs(h, m.mode, p)), (h.return = m), h
        case kt:
          var w = h._init
          return f(m, w(h._payload), p)
      }
      if (dr(h) || nr(h)) return (h = un(h, m.mode, p, null)), (h.return = m), h
      xi(m, h)
    }
    return null
  }
  function d(m, h, p, w) {
    var S = h !== null ? h.key : null
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return S !== null ? null : l(m, h, '' + p, w)
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case ai:
          return p.key === S ? a(m, h, p, w) : null
        case Sn:
          return p.key === S ? u(m, h, p, w) : null
        case kt:
          return (S = p._init), d(m, h, S(p._payload), w)
      }
      if (dr(p) || nr(p)) return S !== null ? null : c(m, h, p, w, null)
      xi(m, p)
    }
    return null
  }
  function g(m, h, p, w, S) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (m = m.get(p) || null), l(h, m, '' + w, S)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case ai:
          return (m = m.get(w.key === null ? p : w.key) || null), a(h, m, w, S)
        case Sn:
          return (m = m.get(w.key === null ? p : w.key) || null), u(h, m, w, S)
        case kt:
          var T = w._init
          return g(m, h, p, T(w._payload), S)
      }
      if (dr(w) || nr(w)) return (m = m.get(p) || null), c(h, m, w, S, null)
      xi(h, w)
    }
    return null
  }
  function v(m, h, p, w) {
    for (
      var S = null, T = null, M = h, C = (h = 0), _ = null;
      M !== null && C < p.length;
      C++
    ) {
      M.index > C ? ((_ = M), (M = null)) : (_ = M.sibling)
      var j = d(m, M, p[C], w)
      if (j === null) {
        M === null && (M = _)
        break
      }
      e && M && j.alternate === null && t(m, M),
        (h = o(j, h, C)),
        T === null ? (S = j) : (T.sibling = j),
        (T = j),
        (M = _)
    }
    if (C === p.length) return n(m, M), $ && qt(m, C), S
    if (M === null) {
      for (; C < p.length; C++)
        (M = f(m, p[C], w)),
          M !== null &&
            ((h = o(M, h, C)), T === null ? (S = M) : (T.sibling = M), (T = M))
      return $ && qt(m, C), S
    }
    for (M = r(m, M); C < p.length; C++)
      (_ = g(M, m, C, p[C], w)),
        _ !== null &&
          (e && _.alternate !== null && M.delete(_.key === null ? C : _.key),
          (h = o(_, h, C)),
          T === null ? (S = _) : (T.sibling = _),
          (T = _))
    return (
      e &&
        M.forEach(function (te) {
          return t(m, te)
        }),
      $ && qt(m, C),
      S
    )
  }
  function y(m, h, p, w) {
    var S = nr(p)
    if (typeof S != 'function') throw Error(k(150))
    if (((p = S.call(p)), p == null)) throw Error(k(151))
    for (
      var T = (S = null), M = h, C = (h = 0), _ = null, j = p.next();
      M !== null && !j.done;
      C++, j = p.next()
    ) {
      M.index > C ? ((_ = M), (M = null)) : (_ = M.sibling)
      var te = d(m, M, j.value, w)
      if (te === null) {
        M === null && (M = _)
        break
      }
      e && M && te.alternate === null && t(m, M),
        (h = o(te, h, C)),
        T === null ? (S = te) : (T.sibling = te),
        (T = te),
        (M = _)
    }
    if (j.done) return n(m, M), $ && qt(m, C), S
    if (M === null) {
      for (; !j.done; C++, j = p.next())
        (j = f(m, j.value, w)),
          j !== null &&
            ((h = o(j, h, C)), T === null ? (S = j) : (T.sibling = j), (T = j))
      return $ && qt(m, C), S
    }
    for (M = r(m, M); !j.done; C++, j = p.next())
      (j = g(M, m, C, j.value, w)),
        j !== null &&
          (e && j.alternate !== null && M.delete(j.key === null ? C : j.key),
          (h = o(j, h, C)),
          T === null ? (S = j) : (T.sibling = j),
          (T = j))
    return (
      e &&
        M.forEach(function (xt) {
          return t(m, xt)
        }),
      $ && qt(m, C),
      S
    )
  }
  function P(m, h, p, w) {
    if (
      (typeof p == 'object' &&
        p !== null &&
        p.type === kn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case ai:
          e: {
            for (var S = p.key, T = h; T !== null; ) {
              if (T.key === S) {
                if (((S = p.type), S === kn)) {
                  if (T.tag === 7) {
                    n(m, T.sibling),
                      (h = i(T, p.props.children)),
                      (h.return = m),
                      (m = h)
                    break e
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === kt &&
                    Zu(S) === T.type)
                ) {
                  n(m, T.sibling),
                    (h = i(T, p.props)),
                    (h.ref = lr(m, T, p)),
                    (h.return = m),
                    (m = h)
                  break e
                }
                n(m, T)
                break
              } else t(m, T)
              T = T.sibling
            }
            p.type === kn
              ? ((h = un(p.props.children, m.mode, w, p.key)),
                (h.return = m),
                (m = h))
              : ((w = Fi(p.type, p.key, p.props, null, m.mode, w)),
                (w.ref = lr(m, h, p)),
                (w.return = m),
                (m = w))
          }
          return s(m)
        case Sn:
          e: {
            for (T = p.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = m),
                    (m = h)
                  break e
                } else {
                  n(m, h)
                  break
                }
              else t(m, h)
              h = h.sibling
            }
            ;(h = vs(p, m.mode, w)), (h.return = m), (m = h)
          }
          return s(m)
        case kt:
          return (T = p._init), P(m, h, T(p._payload), w)
      }
      if (dr(p)) return v(m, h, p, w)
      if (nr(p)) return y(m, h, p, w)
      xi(m, p)
    }
    return (typeof p == 'string' && p !== '') || typeof p == 'number'
      ? ((p = '' + p),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, p)), (h.return = m), (m = h))
          : (n(m, h), (h = gs(p, m.mode, w)), (h.return = m), (m = h)),
        s(m))
      : n(m, h)
  }
  return P
}
var Gn = Zd(!0),
  bd = Zd(!1),
  ei = {},
  nt = Kt(ei),
  Br = Kt(ei),
  Ur = Kt(ei)
function sn(e) {
  if (e === ei) throw Error(k(174))
  return e
}
function pa(e, t) {
  switch ((I(Ur, t), I(Br, e), I(nt, ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $s(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $s(t, e))
  }
  U(nt), I(nt, t)
}
function Qn() {
  U(nt), U(Br), U(Ur)
}
function Jd(e) {
  sn(Ur.current)
  var t = sn(nt.current),
    n = $s(t, e.type)
  t !== n && (I(Br, e), I(nt, n))
}
function ma(e) {
  Br.current === e && (U(nt), U(Br))
}
var W = Kt(0)
function oo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var cs = []
function ga() {
  for (var e = 0; e < cs.length; e++) cs[e]._workInProgressVersionPrimary = null
  cs.length = 0
}
var Ni = yt.ReactCurrentDispatcher,
  fs = yt.ReactCurrentBatchConfig,
  hn = 0,
  G = null,
  q = null,
  re = null,
  so = !1,
  Sr = !1,
  $r = 0,
  mm = 0
function fe() {
  throw Error(k(321))
}
function va(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!be(e[n], t[n])) return !1
  return !0
}
function ya(e, t, n, r, i, o) {
  if (
    ((hn = o),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ni.current = e === null || e.memoizedState === null ? xm : wm),
    (e = n(r, i)),
    Sr)
  ) {
    o = 0
    do {
      if (((Sr = !1), ($r = 0), 25 <= o)) throw Error(k(301))
      ;(o += 1),
        (re = q = null),
        (t.updateQueue = null),
        (Ni.current = Sm),
        (e = n(r, i))
    } while (Sr)
  }
  if (
    ((Ni.current = lo),
    (t = q !== null && q.next !== null),
    (hn = 0),
    (re = q = G = null),
    (so = !1),
    t)
  )
    throw Error(k(300))
  return e
}
function xa() {
  var e = $r !== 0
  return ($r = 0), e
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return re === null ? (G.memoizedState = re = e) : (re = re.next = e), re
}
function We() {
  if (q === null) {
    var e = G.alternate
    e = e !== null ? e.memoizedState : null
  } else e = q.next
  var t = re === null ? G.memoizedState : re.next
  if (t !== null) (re = t), (q = e)
  else {
    if (e === null) throw Error(k(310))
    ;(q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      re === null ? (G.memoizedState = re = e) : (re = re.next = e)
  }
  return re
}
function Hr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function ds(e) {
  var t = We(),
    n = t.queue
  if (n === null) throw Error(k(311))
  n.lastRenderedReducer = e
  var r = q,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var s = i.next
      ;(i.next = o.next), (o.next = s)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var l = (s = null),
      a = null,
      u = o
    do {
      var c = u.lane
      if ((hn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (G.lanes |= c),
          (pn |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    a === null ? (s = r) : (a.next = l),
      be(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (G.lanes |= o), (pn |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function hs(e) {
  var t = We(),
    n = t.queue
  if (n === null) throw Error(k(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var s = (i = i.next)
    do (o = e(o, s.action)), (s = s.next)
    while (s !== i)
    be(o, t.memoizedState) || (Pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function qd() {}
function e1(e, t) {
  var n = G,
    r = We(),
    i = t(),
    o = !be(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    wa(r1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Wr(9, n1.bind(null, n, r, i, t), void 0, null),
      ie === null)
    )
      throw Error(k(349))
    hn & 30 || t1(n, t, i)
  }
  return i
}
function t1(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function n1(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), i1(t) && o1(e)
}
function r1(e, t, n) {
  return n(function () {
    i1(t) && o1(e)
  })
}
function i1(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !be(e, n)
  } catch {
    return !0
  }
}
function o1(e) {
  var t = gt(e, 1)
  t !== null && Ze(t, e, 1, -1)
}
function bu(e) {
  var t = qe()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ym.bind(null, G, e)),
    [t.memoizedState, e]
  )
}
function Wr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function s1() {
  return We().memoizedState
}
function Di(e, t, n, r) {
  var i = qe()
  ;(G.flags |= e),
    (i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r))
}
function jo(e, t, n, r) {
  var i = We()
  r = r === void 0 ? null : r
  var o = void 0
  if (q !== null) {
    var s = q.memoizedState
    if (((o = s.destroy), r !== null && va(r, s.deps))) {
      i.memoizedState = Wr(t, n, o, r)
      return
    }
  }
  ;(G.flags |= e), (i.memoizedState = Wr(1 | t, n, o, r))
}
function Ju(e, t) {
  return Di(8390656, 8, e, t)
}
function wa(e, t) {
  return jo(2048, 8, e, t)
}
function l1(e, t) {
  return jo(4, 2, e, t)
}
function a1(e, t) {
  return jo(4, 4, e, t)
}
function u1(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function c1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), jo(4, 4, u1.bind(null, t, e), n)
  )
}
function Sa() {}
function f1(e, t) {
  var n = We()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && va(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function d1(e, t) {
  var n = We()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && va(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function h1(e, t, n) {
  return hn & 21
    ? (be(n, t) || ((n = gd()), (G.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n))
}
function gm(e, t) {
  var n = F
  ;(F = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = fs.transition
  fs.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(F = n), (fs.transition = r)
  }
}
function p1() {
  return We().memoizedState
}
function vm(e, t, n) {
  var r = _t(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    m1(e))
  )
    g1(t, n)
  else if (((n = Gd(e, t, n, r)), n !== null)) {
    var i = we()
    Ze(n, e, r, i), v1(n, t, r)
  }
}
function ym(e, t, n) {
  var r = _t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (m1(e)) g1(t, i)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n)
        if (((i.hasEagerState = !0), (i.eagerState = l), be(l, s))) {
          var a = t.interleaved
          a === null
            ? ((i.next = i), da(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Gd(e, t, i, r)),
      n !== null && ((i = we()), Ze(n, e, r, i), v1(n, t, r))
  }
}
function m1(e) {
  var t = e.alternate
  return e === G || (t !== null && t === G)
}
function g1(e, t) {
  Sr = so = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function v1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n)
  }
}
var lo = {
    readContext: He,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  xm = {
    readContext: He,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: He,
    useEffect: Ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Di(4194308, 4, u1.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Di(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Di(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = qe()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = qe()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = vm.bind(null, G, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = qe()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: bu,
    useDebugValue: Sa,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e)
    },
    useTransition: function () {
      var e = bu(!1),
        t = e[0]
      return (e = gm.bind(null, e[1])), (qe().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = qe()
      if ($) {
        if (n === void 0) throw Error(k(407))
        n = n()
      } else {
        if (((n = t()), ie === null)) throw Error(k(349))
        hn & 30 || t1(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Ju(r1.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Wr(9, n1.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = qe(),
        t = ie.identifierPrefix
      if ($) {
        var n = lt,
          r = st
        ;(n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = $r++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = mm++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  wm = {
    readContext: He,
    useCallback: f1,
    useContext: He,
    useEffect: wa,
    useImperativeHandle: c1,
    useInsertionEffect: l1,
    useLayoutEffect: a1,
    useMemo: d1,
    useReducer: ds,
    useRef: s1,
    useState: function () {
      return ds(Hr)
    },
    useDebugValue: Sa,
    useDeferredValue: function (e) {
      var t = We()
      return h1(t, q.memoizedState, e)
    },
    useTransition: function () {
      var e = ds(Hr)[0],
        t = We().memoizedState
      return [e, t]
    },
    useMutableSource: qd,
    useSyncExternalStore: e1,
    useId: p1,
    unstable_isNewReconciler: !1,
  },
  Sm = {
    readContext: He,
    useCallback: f1,
    useContext: He,
    useEffect: wa,
    useImperativeHandle: c1,
    useInsertionEffect: l1,
    useLayoutEffect: a1,
    useMemo: d1,
    useReducer: hs,
    useRef: s1,
    useState: function () {
      return hs(Hr)
    },
    useDebugValue: Sa,
    useDeferredValue: function (e) {
      var t = We()
      return q === null ? (t.memoizedState = e) : h1(t, q.memoizedState, e)
    },
    useTransition: function () {
      var e = hs(Hr)[0],
        t = We().memoizedState
      return [e, t]
    },
    useMutableSource: qd,
    useSyncExternalStore: e1,
    useId: p1,
    unstable_isNewReconciler: !1,
  }
function Yn(e, t) {
  try {
    var n = '',
      r = t
    do (n += X0(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function ps(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function fl(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var km = typeof WeakMap == 'function' ? WeakMap : Map
function y1(e, t, n) {
  ;(n = ct(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      uo || ((uo = !0), (Sl = r)), fl(e, t)
    }),
    n
  )
}
function x1(e, t, n) {
  ;(n = ct(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        fl(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        fl(e, t),
          typeof r != 'function' &&
            (Dt === null ? (Dt = new Set([this])) : Dt.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function qu(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new km()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = zm.bind(null, e, t, n)), t.then(e, e))
}
function ec(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function tc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ct(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Cm = yt.ReactCurrentOwner,
  Pe = !1
function xe(e, t, n, r) {
  t.child = e === null ? bd(t, null, n, r) : Gn(t, e.child, n, r)
}
function nc(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    Un(t, i),
    (r = ya(e, t, n, r, o, i)),
    (n = xa()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : ($ && n && sa(t), (t.flags |= 1), xe(e, t, r, i), t.child)
  )
}
function rc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Aa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), w1(e, t, o, r, i))
      : ((e = Fi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(s, r) && e.ref === t.ref)
    )
      return vt(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = zt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function w1(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (zr(o, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0)
      else return (t.lanes = e.lanes), vt(e, t, i)
  }
  return dl(e, t, n, r, i)
}
function S1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Vn, Re),
        (Re |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Vn, Re),
          (Re |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(Vn, Re),
        (Re |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Vn, Re),
      (Re |= r)
  return xe(e, t, i, n), t.child
}
function k1(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function dl(e, t, n, r, i) {
  var o = Ee(n) ? fn : ve.current
  return (
    (o = Wn(t, o)),
    Un(t, i),
    (n = ya(e, t, n, r, o, i)),
    (r = xa()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : ($ && r && sa(t), (t.flags |= 1), xe(e, t, n, i), t.child)
  )
}
function ic(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0
    qi(t)
  } else o = !1
  if ((Un(t, i), t.stateNode === null))
    _i(e, t), Xd(t, n, r), cl(t, n, r, i), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps
    s.props = l
    var a = s.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = He(u))
      : ((u = Ee(n) ? fn : ve.current), (u = Wn(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && Xu(t, s, r, u)),
      (Ct = !1)
    var d = t.memoizedState
    ;(s.state = d),
      io(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Te.current || Ct
        ? (typeof c == 'function' && (ul(t, n, c, r), (a = t.memoizedState)),
          (l = Ct || Yu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(s = t.stateNode),
      Qd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ge(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = He(a))
        : ((a = Ee(n) ? fn : ve.current), (a = Wn(t, a)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== f || d !== a) && Xu(t, s, r, a)),
      (Ct = !1),
      (d = t.memoizedState),
      (s.state = d),
      io(t, r, s, i)
    var v = t.memoizedState
    l !== f || d !== v || Te.current || Ct
      ? (typeof g == 'function' && (ul(t, n, g, r), (v = t.memoizedState)),
        (u = Ct || Yu(t, n, u, r, d, v, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return hl(e, t, n, r, o, i)
}
function hl(e, t, n, r, i, o) {
  k1(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return i && Hu(t, n, !1), vt(e, t, o)
  ;(r = t.stateNode), (Cm.current = t)
  var l =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Gn(t, e.child, null, o)), (t.child = Gn(t, null, l, o)))
      : xe(e, t, l, o),
    (t.memoizedState = r.state),
    i && Hu(t, n, !0),
    t.child
  )
}
function C1(e) {
  var t = e.stateNode
  t.pendingContext
    ? $u(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $u(e, t.context, !1),
    pa(e, t.containerInfo)
}
function oc(e, t, n, r, i) {
  return Kn(), aa(i), (t.flags |= 256), xe(e, t, n, r), t.child
}
var pl = { dehydrated: null, treeContext: null, retryLane: 0 }
function ml(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function P1(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    I(W, i & 1),
    e === null)
  )
    return (
      ll(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Do(s, r, 0, null)),
              (e = un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ml(n)),
              (t.memoizedState = pl),
              e)
            : ka(t, s))
    )
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Pm(e, t, s, r, l, i, n)
  if (o) {
    ;(o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = zt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = zt(l, o)) : ((o = un(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ml(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = pl),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = zt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function ka(e, t) {
  return (
    (t = Do({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function wi(e, t, n, r) {
  return (
    r !== null && aa(r),
    Gn(t, e.child, null, n),
    (e = ka(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Pm(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ps(Error(k(422)))), wi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Do({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = un(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Gn(t, e.child, null, s),
        (t.child.memoizedState = ml(s)),
        (t.memoizedState = pl),
        o)
  if (!(t.mode & 1)) return wi(e, t, s, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (o = Error(k(419))), (r = ps(o, r, void 0)), wi(e, t, s, r)
  }
  if (((l = (s & e.childLanes) !== 0), Pe || l)) {
    if (((r = ie), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), gt(e, i), Ze(r, e, i, -1))
    }
    return La(), (r = ps(Error(k(421)))), wi(e, t, s, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Om.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (je = Vt(i.nextSibling)),
      (Ve = t),
      ($ = !0),
      (Ye = null),
      e !== null &&
        ((Ie[Be++] = st),
        (Ie[Be++] = lt),
        (Ie[Be++] = dn),
        (st = e.id),
        (lt = e.overflow),
        (dn = t)),
      (t = ka(t, r.children)),
      (t.flags |= 4096),
      t)
}
function sc(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), al(e.return, t, n)
}
function ms(e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function T1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((xe(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sc(e, n, t)
        else if (e.tag === 19) sc(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((I(W, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && oo(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ms(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && oo(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        ms(t, !0, n, null, o)
        break
      case 'together':
        ms(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function _i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(k(153))
  if (t.child !== null) {
    for (
      e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Tm(e, t, n) {
  switch (t.tag) {
    case 3:
      C1(t), Kn()
      break
    case 5:
      Jd(t)
      break
    case 1:
      Ee(t.type) && qi(t)
      break
    case 4:
      pa(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      I(no, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? P1(e, t, n)
          : (I(W, W.current & 1),
            (e = vt(e, t, n)),
            e !== null ? e.sibling : null)
      I(W, W.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return T1(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        I(W, W.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), S1(e, t, n)
  }
  return vt(e, t, n)
}
var E1, gl, M1, L1
E1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
gl = function () {}
M1 = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), sn(nt.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = Fs(e, i)), (r = Fs(e, r)), (o = [])
        break
      case 'select':
        ;(i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = Us(e, i)), (r = Us(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = bi)
    }
    Hs(n, r)
    var s
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u]
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ar.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''))
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]))
          } else n || (o || (o = []), o.push(u, n)), (n = a)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Ar.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && B('scroll', e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
L1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function ar(e, t) {
  if (!$)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Em(e, t, n) {
  var r = t.pendingProps
  switch ((la(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null
    case 1:
      return Ee(t.type) && Ji(), de(t), null
    case 3:
      return (
        (r = t.stateNode),
        Qn(),
        U(Te),
        U(ve),
        ga(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Pl(Ye), (Ye = null)))),
        gl(e, t),
        de(t),
        null
      )
    case 5:
      ma(t)
      var i = sn(Ur.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        M1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166))
          return de(t), null
        }
        if (((e = sn(nt.current)), yi(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[et] = t), (r[Ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              B('cancel', r), B('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              B('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < pr.length; i++) B(pr[i], r)
              break
            case 'source':
              B('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              B('error', r), B('load', r)
              break
            case 'details':
              B('toggle', r)
              break
            case 'input':
              mu(r, o), B('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                B('invalid', r)
              break
            case 'textarea':
              vu(r, o), B('invalid', r)
          }
          Hs(n, o), (i = null)
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s]
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      vi(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      vi(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Ar.hasOwnProperty(s) &&
                  l != null &&
                  s === 'onScroll' &&
                  B('scroll', r)
            }
          switch (n) {
            case 'input':
              ui(r), gu(r, o, !0)
              break
            case 'textarea':
              ui(r), yu(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = bi)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = td(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[et] = t),
            (e[Ir] = r),
            E1(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = Ws(n, r)), n)) {
              case 'dialog':
                B('cancel', e), B('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                B('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < pr.length; i++) B(pr[i], e)
                i = r
                break
              case 'source':
                B('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                B('error', e), B('load', e), (i = r)
                break
              case 'details':
                B('toggle', e), (i = r)
                break
              case 'input':
                mu(e, r), (i = Fs(e, r)), B('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  B('invalid', e)
                break
              case 'textarea':
                vu(e, r), (i = Us(e, r)), B('invalid', e)
                break
              default:
                i = r
            }
            Hs(n, i), (l = i)
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o]
                o === 'style'
                  ? id(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && nd(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Rr(e, a)
                    : typeof a == 'number' && Rr(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Ar.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && B('scroll', e)
                      : a != null && Gl(e, o, a, s))
              }
            switch (n) {
              case 'input':
                ui(e), gu(e, r, !1)
                break
              case 'textarea':
                ui(e), yu(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + It(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? On(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      On(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = bi)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return de(t), null
    case 6:
      if (e && t.stateNode != null) L1(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166))
        if (((n = sn(Ur.current)), sn(nt.current), yi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (o = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                vi(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vi(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r)
      }
      return de(t), null
    case 13:
      if (
        (U(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && je !== null && t.mode & 1 && !(t.flags & 128))
          Kd(), Kn(), (t.flags |= 98560), (o = !1)
        else if (((o = yi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317))
            o[et] = t
          } else
            Kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          de(t), (o = !1)
        } else Ye !== null && (Pl(Ye), (Ye = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? ee === 0 && (ee = 3) : La())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null)
    case 4:
      return (
        Qn(), gl(e, t), e === null && Or(t.stateNode.containerInfo), de(t), null
      )
    case 10:
      return fa(t.type._context), de(t), null
    case 17:
      return Ee(t.type) && Ji(), de(t), null
    case 19:
      if ((U(W), (o = t.memoizedState), o === null)) return de(t), null
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ar(o, !1)
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = oo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return I(W, (W.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            b() > Xn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = oo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !$)
            )
              return de(t), null
          } else
            2 * b() - o.renderingStartTime > Xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = b()),
          (t.sibling = null),
          (n = W.current),
          I(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null)
    case 22:
    case 23:
      return (
        Ma(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(k(156, t.tag))
}
function Mm(e, t) {
  switch ((la(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && Ji(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Qn(),
        U(Te),
        U(ve),
        ga(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return ma(t), null
    case 13:
      if ((U(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340))
        Kn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return U(W), null
    case 4:
      return Qn(), null
    case 10:
      return fa(t.type._context), null
    case 22:
    case 23:
      return Ma(), null
    case 24:
      return null
    default:
      return null
  }
}
var Si = !1,
  pe = !1,
  Lm = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null
function jn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        Y(e, t, r)
      }
    else n.current = null
}
function vl(e, t, n) {
  try {
    n()
  } catch (r) {
    Y(e, t, r)
  }
}
var lc = !1
function Am(e, t) {
  if (((el = Yi), (e = Vd()), oa(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g)
            for (;;) {
              if (f === e) break t
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
              )
                break
              ;(f = d), (d = f.parentNode)
            }
            f = g
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (tl = { focusedElem: e, selectionRange: n }, Yi = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e)
    else
      for (; L !== null; ) {
        t = L
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    P = v.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ge(t.type, y),
                      P
                    )
                  m.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var p = t.stateNode.containerInfo
                p.nodeType === 1
                  ? (p.textContent = '')
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(k(163))
            }
        } catch (w) {
          Y(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (L = e)
          break
        }
        L = t.return
      }
  return (v = lc), (lc = !1), v
}
function kr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && vl(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function Vo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function yl(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function A1(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), A1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[Ir], delete t[il], delete t[fm], delete t[dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function R1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || R1(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function xl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bi))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xl(e, t, n), e = e.sibling; e !== null; ) xl(e, t, n), (e = e.sibling)
}
function wl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wl(e, t, n), e = e.sibling; e !== null; ) wl(e, t, n), (e = e.sibling)
}
var se = null,
  Qe = !1
function wt(e, t, n) {
  for (n = n.child; n !== null; ) j1(e, t, n), (n = n.sibling)
}
function j1(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == 'function')
    try {
      tt.onCommitFiberUnmount(Po, n)
    } catch {}
  switch (n.tag) {
    case 5:
      pe || jn(n, t)
    case 6:
      var r = se,
        i = Qe
      ;(se = null),
        wt(e, t, n),
        (se = r),
        (Qe = i),
        se !== null &&
          (Qe
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode))
      break
    case 18:
      se !== null &&
        (Qe
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? as(e.parentNode, n)
              : e.nodeType === 1 && as(e, n),
            Dr(e))
          : as(se, n.stateNode))
      break
    case 4:
      ;(r = se),
        (i = Qe),
        (se = n.stateNode.containerInfo),
        (Qe = !0),
        wt(e, t, n),
        (se = r),
        (Qe = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            s = o.destroy
          ;(o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && vl(n, t, s),
            (i = i.next)
        } while (i !== r)
      }
      wt(e, t, n)
      break
    case 1:
      if (
        !pe &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          Y(n, t, l)
        }
      wt(e, t, n)
      break
    case 21:
      wt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), wt(e, t, n), (pe = r))
        : wt(e, t, n)
      break
    default:
      wt(e, t, n)
  }
}
function uc(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Lm()),
      t.forEach(function (r) {
        var i = Fm.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function Ke(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          s = t,
          l = s
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(se = l.stateNode), (Qe = !1)
              break e
            case 3:
              ;(se = l.stateNode.containerInfo), (Qe = !0)
              break e
            case 4:
              ;(se = l.stateNode.containerInfo), (Qe = !0)
              break e
          }
          l = l.return
        }
        if (se === null) throw Error(k(160))
        j1(o, s, i), (se = null), (Qe = !1)
        var a = i.alternate
        a !== null && (a.return = null), (i.return = null)
      } catch (u) {
        Y(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) V1(t, e), (t = t.sibling)
}
function V1(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), Je(e), r & 4)) {
        try {
          kr(3, e, e.return), Vo(3, e)
        } catch (y) {
          Y(e, e.return, y)
        }
        try {
          kr(5, e, e.return)
        } catch (y) {
          Y(e, e.return, y)
        }
      }
      break
    case 1:
      Ke(t, e), Je(e), r & 512 && n !== null && jn(n, n.return)
      break
    case 5:
      if (
        (Ke(t, e),
        Je(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          Rr(i, '')
        } catch (y) {
          Y(e, e.return, y)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && qf(i, o),
              Ws(l, s)
            var u = Ws(l, o)
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1]
              c === 'style'
                ? id(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? nd(i, f)
                : c === 'children'
                ? Rr(i, f)
                : Gl(i, c, f, u)
            }
            switch (l) {
              case 'input':
                Is(i, o)
                break
              case 'textarea':
                ed(i, o)
                break
              case 'select':
                var d = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var g = o.value
                g != null
                  ? On(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? On(i, !!o.multiple, o.defaultValue, !0)
                      : On(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Ir] = o
          } catch (y) {
            Y(e, e.return, y)
          }
      }
      break
    case 6:
      if ((Ke(t, e), Je(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (y) {
          Y(e, e.return, y)
        }
      }
      break
    case 3:
      if (
        (Ke(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Dr(t.containerInfo)
        } catch (y) {
          Y(e, e.return, y)
        }
      break
    case 4:
      Ke(t, e), Je(e)
      break
    case 13:
      Ke(t, e),
        Je(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ta = b())),
        r & 4 && uc(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Ke(t, e), (pe = u)) : Ke(t, e),
        Je(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, d, d.return)
                  break
                case 1:
                  jn(d, d.return)
                  var v = d.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (y) {
                      Y(r, n, y)
                    }
                  }
                  break
                case 5:
                  jn(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    fc(f)
                    continue
                  }
              }
              g !== null ? ((g.return = d), (L = g)) : fc(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = rd('display', s)))
              } catch (y) {
                Y(e, e.return, y)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (y) {
                Y(e, e.return, y)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      Ke(t, e), Je(e), r & 4 && uc(e)
      break
    case 21:
      break
    default:
      Ke(t, e), Je(e)
  }
}
function Je(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (R1(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(k(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Rr(i, ''), (r.flags &= -33))
          var o = ac(e)
          wl(e, o, i)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = ac(e)
          xl(e, l, s)
          break
        default:
          throw Error(k(161))
      }
    } catch (a) {
      Y(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Rm(e, t, n) {
  ;(L = e), N1(e)
}
function N1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Si
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe
        l = Si
        var u = pe
        if (((Si = s), (pe = a) && !u))
          for (L = i; L !== null; )
            (s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? dc(i)
                : a !== null
                ? ((a.return = s), (L = a))
                : dc(i)
        for (; o !== null; ) (L = o), N1(o), (o = o.sibling)
        ;(L = i), (Si = l), (pe = u)
      }
      cc(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : cc(e)
  }
}
function cc(e) {
  for (; L !== null; ) {
    var t = L
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Vo(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ge(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && Qu(t, o, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Qu(t, s, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && Dr(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(k(163))
          }
        pe || (t.flags & 512 && yl(t))
      } catch (d) {
        Y(t, t.return, d)
      }
    }
    if (t === e) {
      L = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (L = n)
      break
    }
    L = t.return
  }
}
function fc(e) {
  for (; L !== null; ) {
    var t = L
    if (t === e) {
      L = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (L = n)
      break
    }
    L = t.return
  }
}
function dc(e) {
  for (; L !== null; ) {
    var t = L
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Vo(4, t)
          } catch (a) {
            Y(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              Y(t, i, a)
            }
          }
          var o = t.return
          try {
            yl(t)
          } catch (a) {
            Y(t, o, a)
          }
          break
        case 5:
          var s = t.return
          try {
            yl(t)
          } catch (a) {
            Y(t, s, a)
          }
      }
    } catch (a) {
      Y(t, t.return, a)
    }
    if (t === e) {
      L = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (L = l)
      break
    }
    L = t.return
  }
}
var jm = Math.ceil,
  ao = yt.ReactCurrentDispatcher,
  Ca = yt.ReactCurrentOwner,
  $e = yt.ReactCurrentBatchConfig,
  z = 0,
  ie = null,
  J = null,
  ae = 0,
  Re = 0,
  Vn = Kt(0),
  ee = 0,
  Kr = null,
  pn = 0,
  No = 0,
  Pa = 0,
  Cr = null,
  Ce = null,
  Ta = 0,
  Xn = 1 / 0,
  it = null,
  uo = !1,
  Sl = null,
  Dt = null,
  ki = !1,
  Lt = null,
  co = 0,
  Pr = 0,
  kl = null,
  zi = -1,
  Oi = 0
function we() {
  return z & 6 ? b() : zi !== -1 ? zi : (zi = b())
}
function _t(e) {
  return e.mode & 1
    ? z & 2 && ae !== 0
      ? ae & -ae
      : pm.transition !== null
      ? (Oi === 0 && (Oi = gd()), Oi)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cd(e.type))),
        e)
    : 1
}
function Ze(e, t, n, r) {
  if (50 < Pr) throw ((Pr = 0), (kl = null), Error(k(185)))
  br(e, n, r),
    (!(z & 2) || e !== ie) &&
      (e === ie && (!(z & 2) && (No |= n), ee === 4 && Et(e, ae)),
      Me(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Xn = b() + 500), Ao && Gt()))
}
function Me(e, t) {
  var n = e.callbackNode
  pp(e, t)
  var r = Qi(e, e === ie ? ae : 0)
  if (r === 0)
    n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Su(n), t === 1))
      e.tag === 0 ? hm(hc.bind(null, e)) : $d(hc.bind(null, e)),
        um(function () {
          !(z & 6) && Gt()
        }),
        (n = null)
    else {
      switch (vd(r)) {
        case 1:
          n = bl
          break
        case 4:
          n = pd
          break
        case 16:
          n = Gi
          break
        case 536870912:
          n = md
          break
        default:
          n = Gi
      }
      n = U1(n, D1.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function D1(e, t) {
  if (((zi = -1), (Oi = 0), z & 6)) throw Error(k(327))
  var n = e.callbackNode
  if ($n() && e.callbackNode !== n) return null
  var r = Qi(e, e === ie ? ae : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = fo(e, r)
  else {
    t = r
    var i = z
    z |= 2
    var o = z1()
    ;(ie !== e || ae !== t) && ((it = null), (Xn = b() + 500), an(e, t))
    do
      try {
        Dm()
        break
      } catch (l) {
        _1(e, l)
      }
    while (!0)
    ca(),
      (ao.current = o),
      (z = i),
      J !== null ? (t = 0) : ((ie = null), (ae = 0), (t = ee))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Xs(e)), i !== 0 && ((r = i), (t = Cl(e, i)))), t === 1)
    )
      throw ((n = Kr), an(e, 0), Et(e, r), Me(e, b()), n)
    if (t === 6) Et(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Vm(i) &&
          ((t = fo(e, r)),
          t === 2 && ((o = Xs(e)), o !== 0 && ((r = o), (t = Cl(e, o)))),
          t === 1))
      )
        throw ((n = Kr), an(e, 0), Et(e, r), Me(e, b()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345))
        case 2:
          en(e, Ce, it)
          break
        case 3:
          if (
            (Et(e, r), (r & 130023424) === r && ((t = Ta + 500 - b()), 10 < t))
          ) {
            if (Qi(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = rl(en.bind(null, e, Ce, it), t)
            break
          }
          en(e, Ce, it)
          break
        case 4:
          if ((Et(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Xe(r)
            ;(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o)
          }
          if (
            ((r = i),
            (r = b() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * jm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rl(en.bind(null, e, Ce, it), r)
            break
          }
          en(e, Ce, it)
          break
        case 5:
          en(e, Ce, it)
          break
        default:
          throw Error(k(329))
      }
    }
  }
  return Me(e, b()), e.callbackNode === n ? D1.bind(null, e) : null
}
function Cl(e, t) {
  var n = Cr
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = fo(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && Pl(t)),
    e
  )
}
function Pl(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e)
}
function Vm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!be(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Et(e, t) {
  for (
    t &= ~Pa,
      t &= ~No,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function hc(e) {
  if (z & 6) throw Error(k(327))
  $n()
  var t = Qi(e, 0)
  if (!(t & 1)) return Me(e, b()), null
  var n = fo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Xs(e)
    r !== 0 && ((t = r), (n = Cl(e, r)))
  }
  if (n === 1) throw ((n = Kr), an(e, 0), Et(e, t), Me(e, b()), n)
  if (n === 6) throw Error(k(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, Ce, it),
    Me(e, b()),
    null
  )
}
function Ea(e, t) {
  var n = z
  z |= 1
  try {
    return e(t)
  } finally {
    ;(z = n), z === 0 && ((Xn = b() + 500), Ao && Gt())
  }
}
function mn(e) {
  Lt !== null && Lt.tag === 0 && !(z & 6) && $n()
  var t = z
  z |= 1
  var n = $e.transition,
    r = F
  try {
    if ((($e.transition = null), (F = 1), e)) return e()
  } finally {
    ;(F = r), ($e.transition = n), (z = t), !(z & 6) && Gt()
  }
}
function Ma() {
  ;(Re = Vn.current), U(Vn)
}
function an(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), am(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n
      switch ((la(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Ji()
          break
        case 3:
          Qn(), U(Te), U(ve), ga()
          break
        case 5:
          ma(r)
          break
        case 4:
          Qn()
          break
        case 13:
          U(W)
          break
        case 19:
          U(W)
          break
        case 10:
          fa(r.type._context)
          break
        case 22:
        case 23:
          Ma()
      }
      n = n.return
    }
  if (
    ((ie = e),
    (J = e = zt(e.current, null)),
    (ae = Re = t),
    (ee = 0),
    (Kr = null),
    (Pa = No = pn = 0),
    (Ce = Cr = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var s = o.next
          ;(o.next = i), (r.next = s)
        }
        n.pending = r
      }
    on = null
  }
  return e
}
function _1(e, t) {
  do {
    var n = J
    try {
      if ((ca(), (Ni.current = lo), so)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        so = !1
      }
      if (
        ((hn = 0),
        (re = q = G = null),
        (Sr = !1),
        ($r = 0),
        (Ca.current = null),
        n === null || n.return === null)
      ) {
        ;(ee = 1), (Kr = t), (J = null)
        break
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t
        if (
          ((t = ae),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            c = l,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var g = ec(s)
          if (g !== null) {
            ;(g.flags &= -257),
              tc(g, s, l, o, t),
              g.mode & 1 && qu(o, u, t),
              (t = g),
              (a = u)
            var v = t.updateQueue
            if (v === null) {
              var y = new Set()
              y.add(a), (t.updateQueue = y)
            } else v.add(a)
            break e
          } else {
            if (!(t & 1)) {
              qu(o, u, t), La()
              break e
            }
            a = Error(k(426))
          }
        } else if ($ && l.mode & 1) {
          var P = ec(s)
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              tc(P, s, l, o, t),
              aa(Yn(a, l))
            break e
          }
        }
        ;(o = a = Yn(a, l)),
          ee !== 4 && (ee = 2),
          Cr === null ? (Cr = [o]) : Cr.push(o),
          (o = s)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var m = y1(o, a, t)
              Gu(o, m)
              break e
            case 1:
              l = a
              var h = o.type,
                p = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (p !== null &&
                    typeof p.componentDidCatch == 'function' &&
                    (Dt === null || !Dt.has(p))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var w = x1(o, l, t)
                Gu(o, w)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      F1(n)
    } catch (S) {
      ;(t = S), J === n && n !== null && (J = n = n.return)
      continue
    }
    break
  } while (!0)
}
function z1() {
  var e = ao.current
  return (ao.current = lo), e === null ? lo : e
}
function La() {
  ;(ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ie === null || (!(pn & 268435455) && !(No & 268435455)) || Et(ie, ae)
}
function fo(e, t) {
  var n = z
  z |= 2
  var r = z1()
  ;(ie !== e || ae !== t) && ((it = null), an(e, t))
  do
    try {
      Nm()
      break
    } catch (i) {
      _1(e, i)
    }
  while (!0)
  if ((ca(), (z = n), (ao.current = r), J !== null)) throw Error(k(261))
  return (ie = null), (ae = 0), ee
}
function Nm() {
  for (; J !== null; ) O1(J)
}
function Dm() {
  for (; J !== null && !op(); ) O1(J)
}
function O1(e) {
  var t = B1(e.alternate, e, Re)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? F1(e) : (J = t),
    (Ca.current = null)
}
function F1(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Mm(n, t)), n !== null)) {
        ;(n.flags &= 32767), (J = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ee = 6), (J = null)
        return
      }
    } else if (((n = Em(n, t, Re)), n !== null)) {
      J = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      J = t
      return
    }
    J = t = e
  } while (t !== null)
  ee === 0 && (ee = 5)
}
function en(e, t, n) {
  var r = F,
    i = $e.transition
  try {
    ;($e.transition = null), (F = 1), _m(e, t, n, r)
  } finally {
    ;($e.transition = i), (F = r)
  }
  return null
}
function _m(e, t, n, r) {
  do $n()
  while (Lt !== null)
  if (z & 6) throw Error(k(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (mp(e, o),
    e === ie && ((J = ie = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ki ||
      ((ki = !0),
      U1(Gi, function () {
        return $n(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = $e.transition), ($e.transition = null)
    var s = F
    F = 1
    var l = z
    ;(z |= 4),
      (Ca.current = null),
      Am(e, n),
      V1(n, e),
      tm(tl),
      (Yi = !!el),
      (tl = el = null),
      (e.current = n),
      Rm(n),
      sp(),
      (z = l),
      (F = s),
      ($e.transition = o)
  } else e.current = n
  if (
    (ki && ((ki = !1), (Lt = e), (co = i)),
    (o = e.pendingLanes),
    o === 0 && (Dt = null),
    up(n.stateNode),
    Me(e, b()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (uo) throw ((uo = !1), (e = Sl), (Sl = null), e)
  return (
    co & 1 && e.tag !== 0 && $n(),
    (o = e.pendingLanes),
    o & 1 ? (e === kl ? Pr++ : ((Pr = 0), (kl = e))) : (Pr = 0),
    Gt(),
    null
  )
}
function $n() {
  if (Lt !== null) {
    var e = vd(co),
      t = $e.transition,
      n = F
    try {
      if ((($e.transition = null), (F = 16 > e ? 16 : e), Lt === null))
        var r = !1
      else {
        if (((e = Lt), (Lt = null), (co = 0), z & 6)) throw Error(k(331))
        var i = z
        for (z |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child
          if (L.flags & 16) {
            var l = o.deletions
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a]
                for (L = u; L !== null; ) {
                  var c = L
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (L = f)
                  else
                    for (; L !== null; ) {
                      c = L
                      var d = c.sibling,
                        g = c.return
                      if ((A1(c), c === u)) {
                        L = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = g), (L = d)
                        break
                      }
                      L = g
                    }
                }
              }
              var v = o.alternate
              if (v !== null) {
                var y = v.child
                if (y !== null) {
                  v.child = null
                  do {
                    var P = y.sibling
                    ;(y.sibling = null), (y = P)
                  } while (y !== null)
                }
              }
              L = o
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s)
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, o, o.return)
                }
              var m = o.sibling
              if (m !== null) {
                ;(m.return = o.return), (L = m)
                break e
              }
              L = o.return
            }
        }
        var h = e.current
        for (L = h; L !== null; ) {
          s = L
          var p = s.child
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (L = p)
          else
            e: for (s = h; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vo(9, l)
                  }
                } catch (S) {
                  Y(l, l.return, S)
                }
              if (l === s) {
                L = null
                break e
              }
              var w = l.sibling
              if (w !== null) {
                ;(w.return = l.return), (L = w)
                break e
              }
              L = l.return
            }
        }
        if (
          ((z = i), Gt(), tt && typeof tt.onPostCommitFiberRoot == 'function')
        )
          try {
            tt.onPostCommitFiberRoot(Po, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(F = n), ($e.transition = t)
    }
  }
  return !1
}
function pc(e, t, n) {
  ;(t = Yn(n, t)),
    (t = y1(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = we()),
    e !== null && (br(e, 1, t), Me(e, t))
}
function Y(e, t, n) {
  if (e.tag === 3) pc(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pc(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Dt === null || !Dt.has(r)))
        ) {
          ;(e = Yn(n, e)),
            (e = x1(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = we()),
            t !== null && (br(t, 1, e), Me(t, e))
          break
        }
      }
      t = t.return
    }
}
function zm(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (ae & n) === n &&
      (ee === 4 || (ee === 3 && (ae & 130023424) === ae && 500 > b() - Ta)
        ? an(e, 0)
        : (Pa |= n)),
    Me(e, t)
}
function I1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = di), (di <<= 1), !(di & 130023424) && (di = 4194304))
      : (t = 1))
  var n = we()
  ;(e = gt(e, t)), e !== null && (br(e, t, n), Me(e, n))
}
function Om(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), I1(e, n)
}
function Fm(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(k(314))
  }
  r !== null && r.delete(t), I1(e, n)
}
var B1
B1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Pe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), Tm(e, t, n)
      Pe = !!(e.flags & 131072)
    }
  else (Pe = !1), $ && t.flags & 1048576 && Hd(t, to, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      _i(e, t), (e = t.pendingProps)
      var i = Wn(t, ve.current)
      Un(t, n), (i = ya(null, t, r, e, i, n))
      var o = xa()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((o = !0), qi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ha(t),
            (i.updater = Ro),
            (t.stateNode = i),
            (i._reactInternals = t),
            cl(t, r, e, n),
            (t = hl(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && sa(t), xe(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (_i(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Bm(r)),
          (e = Ge(r, e)),
          i)
        ) {
          case 0:
            t = dl(null, t, r, e, n)
            break e
          case 1:
            t = ic(null, t, r, e, n)
            break e
          case 11:
            t = nc(null, t, r, e, n)
            break e
          case 14:
            t = rc(null, t, r, Ge(r.type, e), n)
            break e
        }
        throw Error(k(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        dl(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        ic(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((C1(t), e === null)) throw Error(k(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Qd(e, t),
          io(t, r, null, n)
        var s = t.memoizedState
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = Yn(Error(k(423)), t)), (t = oc(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Yn(Error(k(424)), t)), (t = oc(e, t, r, n, i))
            break e
          } else
            for (
              je = Vt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                $ = !0,
                Ye = null,
                n = bd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Kn(), r === i)) {
            t = vt(e, t, n)
            break e
          }
          xe(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Jd(t),
        e === null && ll(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        nl(r, i) ? (s = null) : o !== null && nl(r, o) && (t.flags |= 32),
        k1(e, t),
        xe(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && ll(t), null
    case 13:
      return P1(e, t, n)
    case 4:
      return (
        pa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        nc(e, t, r, i, n)
      )
    case 7:
      return xe(e, t, t.pendingProps, n), t.child
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          I(no, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (be(o.value, s)) {
            if (o.children === i.children && !Te.current) {
              t = vt(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies
              if (l !== null) {
                s = o.child
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      ;(a = ct(-1, n & -n)), (a.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a)
                      }
                    }
                    ;(o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      al(o.return, n, t),
                      (l.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341))
                ;(s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  al(s, n, t),
                  (s = o.sibling)
              } else s = o.child
              if (s !== null) s.return = o
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((o = s.sibling), o !== null)) {
                    ;(o.return = s.return), (s = o)
                    break
                  }
                  s = s.return
                }
              o = s
            }
        xe(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Un(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = Ge(r, t.pendingProps)),
        (i = Ge(r.type, i)),
        rc(e, t, r, i, n)
      )
    case 15:
      return w1(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        _i(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), qi(t)) : (e = !1),
        Un(t, n),
        Xd(t, r, i),
        cl(t, r, i, n),
        hl(null, t, r, !0, e, n)
      )
    case 19:
      return T1(e, t, n)
    case 22:
      return S1(e, t, n)
  }
  throw Error(k(156, t.tag))
}
function U1(e, t) {
  return hd(e, t)
}
function Im(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Ue(e, t, n, r) {
  return new Im(e, t, n, r)
}
function Aa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Bm(e) {
  if (typeof e == 'function') return Aa(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Yl)) return 11
    if (e === Xl) return 14
  }
  return 2
}
function zt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Fi(e, t, n, r, i, o) {
  var s = 2
  if (((r = e), typeof e == 'function')) Aa(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case kn:
        return un(n.children, i, o, t)
      case Ql:
        ;(s = 8), (i |= 8)
        break
      case Ds:
        return (e = Ue(12, n, t, i | 2)), (e.elementType = Ds), (e.lanes = o), e
      case _s:
        return (e = Ue(13, n, t, i)), (e.elementType = _s), (e.lanes = o), e
      case zs:
        return (e = Ue(19, n, t, i)), (e.elementType = zs), (e.lanes = o), e
      case Zf:
        return Do(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Yf:
              s = 10
              break e
            case Xf:
              s = 9
              break e
            case Yl:
              s = 11
              break e
            case Xl:
              s = 14
              break e
            case kt:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(k(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Ue(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function un(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e
}
function Do(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = Zf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function gs(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e
}
function vs(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Um(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bo(0)),
    (this.expirationTimes = bo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Ra(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Um(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ue(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ha(o),
    e
  )
}
function $m(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Sn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function $1(e) {
  if (!e) return Bt
  e = e._reactInternals
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(k(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(k(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ee(n)) return Ud(e, n, t)
  }
  return t
}
function H1(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ra(n, r, !0, e, i, o, s, l, a)),
    (e.context = $1(null)),
    (n = e.current),
    (r = we()),
    (i = _t(n)),
    (o = ct(r, i)),
    (o.callback = t ?? null),
    Nt(n, o, i),
    (e.current.lanes = i),
    br(e, i, r),
    Me(e, r),
    e
  )
}
function _o(e, t, n, r) {
  var i = t.current,
    o = we(),
    s = _t(i)
  return (
    (n = $1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ct(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(i, t, s)),
    e !== null && (Ze(e, i, s, o), Vi(e, i, s)),
    s
  )
}
function ho(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function mc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function ja(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t)
}
function Hm() {
  return null
}
var W1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Va(e) {
  this._internalRoot = e
}
zo.prototype.render = Va.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(k(409))
  _o(e, t, null, null)
}
zo.prototype.unmount = Va.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    mn(function () {
      _o(null, e, null, null)
    }),
      (t[mt] = null)
  }
}
function zo(e) {
  this._internalRoot = e
}
zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wd()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
    Tt.splice(n, 0, e), n === 0 && kd(e)
  }
}
function Na(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Oo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function gc() {}
function Wm(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = ho(s)
        o.call(u)
      }
    }
    var s = H1(t, r, e, 0, null, !1, !1, '', gc)
    return (
      (e._reactRootContainer = s),
      (e[mt] = s.current),
      Or(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      s
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = ho(a)
      l.call(u)
    }
  }
  var a = Ra(e, 0, !1, null, null, !1, !1, '', gc)
  return (
    (e._reactRootContainer = a),
    (e[mt] = a.current),
    Or(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      _o(t, a, n, r)
    }),
    a
  )
}
function Fo(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var s = o
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var a = ho(s)
        l.call(a)
      }
    }
    _o(t, s, e, i)
  } else s = Wm(n, t, e, i, r)
  return ho(s)
}
yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = hr(t.pendingLanes)
        n !== 0 &&
          (Jl(t, n | 1), Me(t, b()), !(z & 6) && ((Xn = b() + 500), Gt()))
      }
      break
    case 13:
      mn(function () {
        var r = gt(e, 1)
        if (r !== null) {
          var i = we()
          Ze(r, e, 1, i)
        }
      }),
        ja(e, 1)
  }
}
ql = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728)
    if (t !== null) {
      var n = we()
      Ze(t, e, 134217728, n)
    }
    ja(e, 134217728)
  }
}
xd = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = gt(e, t)
    if (n !== null) {
      var r = we()
      Ze(n, e, t, r)
    }
    ja(e, t)
  }
}
wd = function () {
  return F
}
Sd = function (e, t) {
  var n = F
  try {
    return (F = e), t()
  } finally {
    F = n
  }
}
Gs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Is(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = Lo(r)
            if (!i) throw Error(k(90))
            Jf(r), Is(r, i)
          }
        }
      }
      break
    case 'textarea':
      ed(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && On(e, !!n.multiple, t, !1)
  }
}
ld = Ea
ad = mn
var Km = { usingClientEntryPoint: !1, Events: [qr, En, Lo, od, sd, Ea] },
  ur = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Gm = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fd(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || Hm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Ci.isDisabled && Ci.supportsFiber)
    try {
      ;(Po = Ci.inject(Gm)), (tt = Ci)
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Km
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Na(t)) throw Error(k(200))
  return $m(e, t, null, n)
}
_e.createRoot = function (e, t) {
  if (!Na(e)) throw Error(k(299))
  var n = !1,
    r = '',
    i = W1
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ra(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    Or(e.nodeType === 8 ? e.parentNode : e),
    new Va(t)
  )
}
_e.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)))
  return (e = fd(t)), (e = e === null ? null : e.stateNode), e
}
_e.flushSync = function (e) {
  return mn(e)
}
_e.hydrate = function (e, t, n) {
  if (!Oo(t)) throw Error(k(200))
  return Fo(null, e, t, !0, n)
}
_e.hydrateRoot = function (e, t, n) {
  if (!Na(e)) throw Error(k(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = W1
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = H1(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[mt] = t.current),
    Or(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new zo(t)
}
_e.render = function (e, t, n) {
  if (!Oo(t)) throw Error(k(200))
  return Fo(null, e, t, !1, n)
}
_e.unmountComponentAtNode = function (e) {
  if (!Oo(e)) throw Error(k(40))
  return e._reactRootContainer
    ? (mn(function () {
        Fo(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[mt] = null)
        })
      }),
      !0)
    : !1
}
_e.unstable_batchedUpdates = Ea
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Oo(n)) throw Error(k(200))
  if (e == null || e._reactInternals === void 0) throw Error(k(38))
  return Fo(e, t, n, !1, r)
}
_e.version = '18.2.0-next-9e3b772b8-20220608'
function K1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K1)
    } catch (e) {
      console.error(e)
    }
}
K1(), (Hf.exports = _e)
var Qm = Hf.exports,
  vc = Qm
;(Vs.createRoot = vc.createRoot), (Vs.hydrateRoot = vc.hydrateRoot)
const G1 = A.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never',
  }),
  Io = A.createContext({}),
  Da = A.createContext(null),
  _a = typeof document < 'u',
  Ym = _a ? A.useLayoutEffect : A.useEffect,
  Q1 = A.createContext({ strict: !1 }),
  za = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  Xm = 'framerAppearId',
  Y1 = 'data-' + za(Xm),
  Zm = { skipAnimations: !1, useManualTiming: !1 }
class yc {
  constructor() {
    ;(this.order = []), (this.scheduled = new Set())
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0
  }
  remove(t) {
    const n = this.order.indexOf(t)
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
  }
  clear() {
    ;(this.order.length = 0), this.scheduled.clear()
  }
}
function bm(e) {
  let t = new yc(),
    n = new yc(),
    r = 0,
    i = !1,
    o = !1
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a
      },
      cancel: (a) => {
        n.remove(a), s.delete(a)
      },
      process: (a) => {
        if (i) {
          o = !0
          return
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u]
            s.has(c) && (l.schedule(c), e()), c(a)
          }
        ;(i = !1), o && ((o = !1), l.process(a))
      },
    }
  return l
}
const Pi = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  Jm = 40
function X1(e, t) {
  let n = !1,
    r = !0
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Pi.reduce((f, d) => ((f[d] = bm(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i)
    },
    l = () => {
      const f = performance.now()
      ;(n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Jm), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Pi.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l))
    },
    a = () => {
      ;(n = !0), (r = !0), i.isProcessing || e(l)
    }
  return {
    schedule: Pi.reduce((f, d) => {
      const g = o[d]
      return (f[d] = (v, y = !1, P = !1) => (n || a(), g.schedule(v, y, P))), f
    }, {}),
    cancel: (f) => Pi.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  }
}
const { schedule: Oa, cancel: T4 } = X1(queueMicrotask, !1)
function qm(e, t, n, r) {
  const { visualElement: i } = A.useContext(Io),
    o = A.useContext(Q1),
    s = A.useContext(Da),
    l = A.useContext(G1).reducedMotion,
    a = A.useRef()
  ;(r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }))
  const u = a.current
  A.useInsertionEffect(() => {
    u && u.update(n, s)
  })
  const c = A.useRef(!!(n[Y1] && !window.HandoffComplete))
  return (
    Ym(() => {
      u &&
        (Oa.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges())
    }),
    A.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)))
    }),
    u
  )
}
function Nn(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  )
}
function e2(e, t, n) {
  return A.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Nn(n) && (n.current = r))
    },
    [t]
  )
}
function Gr(e) {
  return typeof e == 'string' || Array.isArray(e)
}
function Bo(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function'
}
const Fa = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  Ia = ['initial', ...Fa]
function Uo(e) {
  return Bo(e.animate) || Ia.some((t) => Gr(e[t]))
}
function Z1(e) {
  return !!(Uo(e) || e.variants)
}
function t2(e, t) {
  if (Uo(e)) {
    const { initial: n, animate: r } = e
    return {
      initial: n === !1 || Gr(n) ? n : void 0,
      animate: Gr(r) ? r : void 0,
    }
  }
  return e.inherit !== !1 ? t : {}
}
function n2(e) {
  const { initial: t, animate: n } = t2(e, A.useContext(Io))
  return A.useMemo(() => ({ initial: t, animate: n }), [xc(t), xc(n)])
}
function xc(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const wc = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Qr = {}
for (const e in wc) Qr[e] = { isEnabled: (t) => wc[e].some((n) => !!t[n]) }
function r2(e) {
  for (const t in e) Qr[t] = { ...Qr[t], ...e[t] }
}
const b1 = A.createContext({}),
  J1 = A.createContext({}),
  i2 = Symbol.for('motionComponentSymbol')
function o2({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && r2(e)
  function o(l, a) {
    let u
    const c = { ...A.useContext(G1), ...l, layoutId: s2(l) },
      { isStatic: f } = c,
      d = n2(l),
      g = r(l, f)
    if (!f && _a) {
      d.visualElement = qm(i, g, c, t)
      const v = A.useContext(J1),
        y = A.useContext(Q1).strict
      d.visualElement && (u = d.visualElement.loadFeatures(c, y, e, v))
    }
    return A.createElement(
      Io.Provider,
      { value: d },
      u && d.visualElement
        ? A.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, e2(g, d.visualElement, a), g, f, d.visualElement)
    )
  }
  const s = A.forwardRef(o)
  return (s[i2] = i), s
}
function s2({ layoutId: e }) {
  const t = A.useContext(b1).id
  return t && e !== void 0 ? t + '-' + e : e
}
function l2(e) {
  function t(r, i = {}) {
    return o2(e(r, i))
  }
  if (typeof Proxy > 'u') return t
  const n = new Map()
  return new Proxy(t, { get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)) })
}
const a2 = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
]
function Ba(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(a2.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const po = {}
function u2(e) {
  Object.assign(po, e)
}
const ti = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  yn = new Set(ti)
function q1(e, { layout: t, layoutId: n }) {
  return (
    yn.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!po[e] || e === 'opacity'))
  )
}
const me = (e) => !!(e && e.getVelocity),
  c2 = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  f2 = ti.length
function d2(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = ''
  for (let s = 0; s < f2; s++) {
    const l = ti[s]
    if (e[l] !== void 0) {
      const a = c2[l] || l
      o += `${a}(${e[l]}) `
    }
  }
  return (
    t && !e.z && (o += 'translateZ(0)'),
    (o = o.trim()),
    i ? (o = i(e, r ? '' : o)) : n && r && (o = 'none'),
    o
  )
}
const eh = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  th = eh('--'),
  h2 = eh('var(--'),
  Ua = (e) => (h2(e) ? p2.test(e.split('/*')[0].trim()) : !1),
  p2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  m2 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Ut = (e, t, n) => (n > t ? t : n < e ? e : n),
  er = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e,
  },
  Tr = { ...er, transform: (e) => Ut(0, 1, e) },
  Ti = { ...er, default: 1 },
  Er = (e) => Math.round(e * 1e5) / 1e5,
  $a = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  g2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  v2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
function ni(e) {
  return typeof e == 'string'
}
const ri = (e) => ({
    test: (t) => ni(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  St = ri('deg'),
  rt = ri('%'),
  R = ri('px'),
  y2 = ri('vh'),
  x2 = ri('vw'),
  Sc = {
    ...rt,
    parse: (e) => rt.parse(e) / 100,
    transform: (e) => rt.transform(e * 100),
  },
  kc = { ...er, transform: Math.round },
  nh = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    radius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    size: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    rotate: St,
    rotateX: St,
    rotateY: St,
    rotateZ: St,
    scale: Ti,
    scaleX: Ti,
    scaleY: Ti,
    scaleZ: Ti,
    skew: St,
    skewX: St,
    skewY: St,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: Tr,
    originX: Sc,
    originY: Sc,
    originZ: R,
    zIndex: kc,
    backgroundPositionX: R,
    backgroundPositionY: R,
    fillOpacity: Tr,
    strokeOpacity: Tr,
    numOctaves: kc,
  }
function Ha(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e
  let a = !1,
    u = !1,
    c = !0
  for (const f in t) {
    const d = t[f]
    if (th(f)) {
      o[f] = d
      continue
    }
    const g = nh[f],
      v = m2(d, g)
    if (yn.has(f)) {
      if (((a = !0), (s[f] = v), !c)) continue
      d !== (g.default || 0) && (c = !1)
    } else f.startsWith('origin') ? ((u = !0), (l[f] = v)) : (i[f] = v)
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = d2(e.transform, n, c, r))
        : i.transform && (i.transform = 'none')),
    u)
  ) {
    const { originX: f = '50%', originY: d = '50%', originZ: g = 0 } = l
    i.transformOrigin = `${f} ${d} ${g}`
  }
}
const Wa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function rh(e, t, n) {
  for (const r in t) !me(t[r]) && !q1(r, n) && (e[r] = t[r])
}
function w2({ transformTemplate: e }, t, n) {
  return A.useMemo(() => {
    const r = Wa()
    return (
      Ha(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    )
  }, [t])
}
function S2(e, t, n) {
  const r = e.style || {},
    i = {}
  return rh(i, r, e), Object.assign(i, w2(e, t, n)), i
}
function k2(e, t, n) {
  const r = {},
    i = S2(e, t, n)
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
      (i.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  )
}
const C2 = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
])
function mo(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    C2.has(e)
  )
}
let ih = (e) => !mo(e)
function P2(e) {
  e && (ih = (t) => (t.startsWith('on') ? !mo(t) : e(t)))
}
try {
  P2(require('@emotion/is-prop-valid').default)
} catch {}
function T2(e, t, n) {
  const r = {}
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((ih(i) ||
        (n === !0 && mo(i)) ||
        (!t && !mo(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]))
  return r
}
function Cc(e, t, n) {
  return typeof e == 'string' ? e : R.transform(t + n * e)
}
function E2(e, t, n) {
  const r = Cc(t, e.x, e.width),
    i = Cc(n, e.y, e.height)
  return `${r} ${i}`
}
const M2 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  L2 = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function A2(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1
  const o = i ? M2 : L2
  e[o.offset] = R.transform(-r)
  const s = R.transform(t),
    l = R.transform(n)
  e[o.array] = `${s} ${l}`
}
function Ka(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Ha(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: g, style: v, dimensions: y } = e
  g.transform && (y && (v.transform = g.transform), delete g.transform),
    y &&
      (i !== void 0 || o !== void 0 || v.transform) &&
      (v.transformOrigin = E2(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && A2(g, s, l, a, !1)
}
const oh = () => ({ ...Wa(), attrs: {} }),
  Ga = (e) => typeof e == 'string' && e.toLowerCase() === 'svg'
function R2(e, t, n, r) {
  const i = A.useMemo(() => {
    const o = oh()
    return (
      Ka(o, t, { enableHardwareAcceleration: !1 }, Ga(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    )
  }, [t])
  if (e.style) {
    const o = {}
    rh(o, e.style, e), (i.style = { ...o, ...i.style })
  }
  return i
}
function j2(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Ba(n) ? R2 : k2)(r, o, s, n),
      u = T2(r, typeof n == 'string', e),
      c = n !== A.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = A.useMemo(() => (me(f) ? f.get() : f), [f])
    return A.createElement(n, { ...c, children: d })
  }
}
function sh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r))
  for (const o in n) e.style.setProperty(o, n[o])
}
const lh = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
])
function ah(e, t, n, r) {
  sh(e, t, void 0, r)
  for (const i in t.attrs) e.setAttribute(lh.has(i) ? i : za(i), t.attrs[i])
}
function Qa(e, t, n) {
  var r
  const { style: i } = e,
    o = {}
  for (const s in i)
    (me(i[s]) ||
      (t.style && me(t.style[s])) ||
      q1(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s])
  return o
}
function uh(e, t, n) {
  const r = Qa(e, t, n)
  for (const i in e)
    if (me(e[i]) || me(t[i])) {
      const o =
        ti.indexOf(i) !== -1
          ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
          : i
      r[o] = e[i]
    }
  return r
}
function Ya(e, t, n, r = {}, i = {}) {
  return (
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  )
}
function V2(e) {
  const t = A.useRef(null)
  return t.current === null && (t.current = e()), t.current
}
const Tl = (e) => Array.isArray(e),
  N2 = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  D2 = (e) => (Tl(e) ? e[e.length - 1] || 0 : e)
function Ii(e) {
  const t = me(e) ? e.get() : e
  return N2(t) ? t.toValue() : t
}
function _2(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: z2(r, i, o, e), renderState: t() }
  return n && (s.mount = (l) => n(r, l, s)), s
}
const ch = (e) => (t, n) => {
  const r = A.useContext(Io),
    i = A.useContext(Da),
    o = () => _2(e, t, r, i)
  return n ? o() : V2(o)
}
function z2(e, t, n, r) {
  const i = {},
    o = r(e, {})
  for (const d in o) i[d] = Ii(o[d])
  let { initial: s, animate: l } = e
  const a = Uo(e),
    u = Z1(e)
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate))
  let c = n ? n.initial === !1 : !1
  c = c || s === !1
  const f = c ? l : s
  return (
    f &&
      typeof f != 'boolean' &&
      !Bo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const v = Ya(e, g)
        if (!v) return
        const { transitionEnd: y, transition: P, ...m } = v
        for (const h in m) {
          let p = m[h]
          if (Array.isArray(p)) {
            const w = c ? p.length - 1 : 0
            p = p[w]
          }
          p !== null && (i[h] = p)
        }
        for (const h in y) i[h] = y[h]
      }),
    i
  )
}
const ge = (e) => e,
  {
    schedule: ue,
    cancel: $t,
    state: le,
    steps: ys,
  } = X1(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : ge, !0),
  O2 = {
    useVisualState: ch({
      scrapeMotionValuesFromProps: uh,
      createRenderState: oh,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ue.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == 'function'
                ? t.getBBox()
                : t.getBoundingClientRect()
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
          }
        }),
          ue.render(() => {
            Ka(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Ga(t.tagName),
              e.transformTemplate
            ),
              ah(t, n)
          })
      },
    }),
  },
  F2 = {
    useVisualState: ch({
      scrapeMotionValuesFromProps: Qa,
      createRenderState: Wa,
    }),
  }
function I2(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Ba(e) ? O2 : F2),
    preloadedFeatures: n,
    useRender: j2(t),
    createVisualElement: r,
    Component: e,
  }
}
function at(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const fh = (e) =>
  e.pointerType === 'mouse'
    ? typeof e.button != 'number' || e.button <= 0
    : e.isPrimary !== !1
function $o(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } }
}
const B2 = (e) => (t) => fh(t) && e(t, $o(t))
function ft(e, t, n, r) {
  return at(e, t, B2(n), r)
}
const U2 = (e, t) => (n) => t(e(n)),
  dt = (...e) => e.reduce(U2)
function dh(e) {
  let t = null
  return () => {
    const n = () => {
      t = null
    }
    return t === null ? ((t = e), n) : !1
  }
}
const Pc = dh('dragHorizontal'),
  Tc = dh('dragVertical')
function hh(e) {
  let t = !1
  if (e === 'y') t = Tc()
  else if (e === 'x') t = Pc()
  else {
    const n = Pc(),
      r = Tc()
    n && r
      ? (t = () => {
          n(), r()
        })
      : (n && n(), r && r())
  }
  return t
}
function ph() {
  const e = hh(!0)
  return e ? (e(), !1) : !0
}
class Qt {
  constructor(t) {
    ;(this.isMounted = !1), (this.node = t)
  }
  update() {}
}
function Ec(e, t) {
  const n = 'pointer' + (t ? 'enter' : 'leave'),
    r = 'onHover' + (t ? 'Start' : 'End'),
    i = (o, s) => {
      if (o.pointerType === 'touch' || ph()) return
      const l = e.getProps()
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive('whileHover', t),
        l[r] && l[r](o, s)
    }
  return ft(e.current, n, i, { passive: !e.getProps()[r] })
}
class $2 extends Qt {
  mount() {
    this.unmount = dt(Ec(this.node, !0), Ec(this.node, !1))
  }
  unmount() {}
}
class H2 extends Qt {
  constructor() {
    super(...arguments), (this.isActive = !1)
  }
  onFocus() {
    let t = !1
    try {
      t = this.node.current.matches(':focus-visible')
    } catch {
      t = !0
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0))
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1))
  }
  mount() {
    this.unmount = dt(
      at(this.node.current, 'focus', () => this.onFocus()),
      at(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const mh = (e, t) => (t ? (e === t ? !0 : mh(e, t.parentElement)) : !1)
function xs(e, t) {
  if (!t) return
  const n = new PointerEvent('pointer' + e)
  t(n, $o(n))
}
class W2 extends Qt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ge),
      (this.removeEndListeners = ge),
      (this.removeAccessibleListeners = ge),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return
        this.removeEndListeners()
        const r = this.node.getProps(),
          o = ft(
            window,
            'pointerup',
            (l, a) => {
              if (!this.checkPressEnd()) return
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: f,
              } = this.node.getProps()
              !f && !mh(this.node.current, l.target)
                ? c && c(l, a)
                : u && u(l, a)
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = ft(window, 'pointercancel', (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          })
        ;(this.removeEndListeners = dt(o, s)), this.startPress(t, n)
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== 'Enter' || this.isPressing) return
            const s = (l) => {
              l.key !== 'Enter' ||
                !this.checkPressEnd() ||
                xs('up', (a, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && c(a, u)
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = at(this.node.current, 'keyup', s)),
              xs('down', (l, a) => {
                this.startPress(l, a)
              })
          },
          n = at(this.node.current, 'keydown', t),
          r = () => {
            this.isPressing && xs('cancel', (o, s) => this.cancelPress(o, s))
          },
          i = at(this.node.current, 'blur', r)
        this.removeAccessibleListeners = dt(n, i)
      })
  }
  startPress(t, n) {
    this.isPressing = !0
    const { onTapStart: r, whileTap: i } = this.node.getProps()
    i &&
      this.node.animationState &&
      this.node.animationState.setActive('whileTap', !0),
      r && r(t, n)
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !ph()
    )
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: r } = this.node.getProps()
    r && r(t, n)
  }
  mount() {
    const t = this.node.getProps(),
      n = ft(
        t.globalTapTarget ? window : this.node.current,
        'pointerdown',
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = at(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = dt(n, r)
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners()
  }
}
const El = new WeakMap(),
  ws = new WeakMap(),
  K2 = (e) => {
    const t = El.get(e.target)
    t && t(e)
  },
  G2 = (e) => {
    e.forEach(K2)
  }
function Q2({ root: e, ...t }) {
  const n = e || document
  ws.has(n) || ws.set(n, {})
  const r = ws.get(n),
    i = JSON.stringify(t)
  return r[i] || (r[i] = new IntersectionObserver(G2, { root: e, ...t })), r[i]
}
function Y2(e, t, n) {
  const r = Q2(t)
  return (
    El.set(e, n),
    r.observe(e),
    () => {
      El.delete(e), r.unobserve(e)
    }
  )
}
const X2 = { some: 0, all: 1 }
class Z2 extends Qt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver() {
    this.unmount()
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == 'number' ? i : X2[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u)
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f
        d && d(a)
      }
    return Y2(this.node.current, s, l)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: n } = this.node
    ;['amount', 'margin', 'root'].some(b2(t, n)) && this.startObserver()
  }
  unmount() {}
}
function b2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n]
}
const J2 = {
  inView: { Feature: Z2 },
  tap: { Feature: W2 },
  focus: { Feature: H2 },
  hover: { Feature: $2 },
}
function gh(e, t) {
  if (!Array.isArray(t)) return !1
  const n = t.length
  if (n !== e.length) return !1
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
  return !0
}
function q2(e) {
  const t = {}
  return e.values.forEach((n, r) => (t[r] = n.get())), t
}
function eg(e) {
  const t = {}
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t
}
function Ho(e, t, n) {
  const r = e.getProps()
  return Ya(r, t, n !== void 0 ? n : r.custom, q2(e), eg(e))
}
const Ot = (e) => e * 1e3,
  ht = (e) => e / 1e3,
  tg = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  ng = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  rg = { type: 'keyframes', duration: 0.8 },
  ig = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  og = (e, { keyframes: t }) =>
    t.length > 2 ? rg : yn.has(e) ? (e.startsWith('scale') ? ng(t[1]) : tg) : ig
function sg({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length
}
function Xa(e, t) {
  return e[t] || e.default || e
}
const lg = (e) => e !== null
function Wo(e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(lg),
    o = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1
  return !o || r === void 0 ? i[o] : r
}
let Bi
function ag() {
  Bi = void 0
}
const Ft = {
    now: () => (
      Bi === void 0 &&
        Ft.set(
          le.isProcessing || Zm.useManualTiming
            ? le.timestamp
            : performance.now()
        ),
      Bi
    ),
    set: (e) => {
      ;(Bi = e), queueMicrotask(ag)
    },
  },
  vh = (e) => /^0[^.\s]+$/u.test(e)
function ug(e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
    ? e === 'none' || e === '0' || vh(e)
    : !0
}
let yh = ge
const xh = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  cg = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function fg(e) {
  const t = cg.exec(e)
  if (!t) return [,]
  const [, n, r, i] = t
  return [`--${n ?? r}`, i]
}
function wh(e, t, n = 1) {
  const [r, i] = fg(e)
  if (!r) return
  const o = window.getComputedStyle(t).getPropertyValue(r)
  if (o) {
    const s = o.trim()
    return xh(s) ? parseFloat(s) : s
  }
  return Ua(i) ? wh(i, t, n + 1) : i
}
const dg = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  Mc = (e) => e === er || e === R,
  Lc = (e, t) => parseFloat(e.split(', ')[t]),
  Ac =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0
      const i = r.match(/^matrix3d\((.+)\)$/u)
      if (i) return Lc(i[1], t)
      {
        const o = r.match(/^matrix\((.+)\)$/u)
        return o ? Lc(o[1], e) : 0
      }
    },
  hg = new Set(['x', 'y', 'z']),
  pg = ti.filter((e) => !hg.has(e))
function Rc(e) {
  const t = []
  return (
    pg.forEach((n) => {
      const r = e.getValue(n)
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0))
    }),
    t
  )
}
const Zn = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Ac(4, 13),
  y: Ac(5, 14),
}
Zn.translateX = Zn.x
Zn.translateY = Zn.y
const Sh = (e) => (t) => t.test(e),
  mg = { test: (e) => e === 'auto', parse: (e) => e },
  kh = [er, R, rt, St, x2, y2, mg],
  jc = (e) => kh.find(Sh(e)),
  cn = new Set()
let Ml = !1,
  Ll = !1
function Ch() {
  if (Ll) {
    const e = Array.from(cn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map()
    t.forEach((r) => {
      Rc(r).length && (n.set(r, Rc(r)), r.render())
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render()
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      })
  }
  ;(Ll = !1), (Ml = !1), cn.forEach((e) => e.complete()), cn.clear()
}
function Ph() {
  cn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ll = !0)
  })
}
function gg() {
  Ph(), Ch()
}
class Za {
  constructor(t, n, r, i, o, s = !1) {
    ;(this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s)
  }
  scheduleResolve() {
    ;(this.isScheduled = !0),
      this.isAsync
        ? (cn.add(this),
          Ml || ((Ml = !0), ue.read(Ph), ue.resolveKeyframes(Ch)))
        : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            l = t[t.length - 1]
          if (s !== void 0) t[0] = s
          else if (r && n) {
            const a = r.readValue(n, l)
            a != null && (t[0] = a)
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0])
        } else t[o] = t[o - 1]
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ;(this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      cn.delete(this)
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), cn.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const ba = (e, t) => (n) =>
    !!(
      (ni(n) && v2.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Th = (e, t, n) => (r) => {
    if (!ni(r)) return r
    const [i, o, s, l] = r.match($a)
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    }
  },
  vg = (e) => Ut(0, 255, e),
  Ss = { ...er, transform: (e) => Math.round(vg(e)) },
  ln = {
    test: ba('rgb', 'red'),
    parse: Th('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      Ss.transform(e) +
      ', ' +
      Ss.transform(t) +
      ', ' +
      Ss.transform(n) +
      ', ' +
      Er(Tr.transform(r)) +
      ')',
  }
function yg(e) {
  let t = '',
    n = '',
    r = '',
    i = ''
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  )
}
const Al = { test: ba('#'), parse: yg, transform: ln.transform },
  Dn = {
    test: ba('hsl', 'hue'),
    parse: Th('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      rt.transform(Er(t)) +
      ', ' +
      rt.transform(Er(n)) +
      ', ' +
      Er(Tr.transform(r)) +
      ')',
  },
  he = {
    test: (e) => ln.test(e) || Al.test(e) || Dn.test(e),
    parse: (e) =>
      ln.test(e) ? ln.parse(e) : Dn.test(e) ? Dn.parse(e) : Al.parse(e),
    transform: (e) =>
      ni(e) ? e : e.hasOwnProperty('red') ? ln.transform(e) : Dn.transform(e),
  }
function xg(e) {
  var t, n
  return (
    isNaN(e) &&
    ni(e) &&
    (((t = e.match($a)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(g2)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  )
}
const Eh = 'number',
  Mh = 'color',
  wg = 'var',
  Sg = 'var(',
  Vc = '${}',
  kg =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function go(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = []
  let o = 0
  const l = t
    .replace(
      kg,
      (a) => (
        he.test(a)
          ? (r.color.push(o), i.push(Mh), n.push(he.parse(a)))
          : a.startsWith(Sg)
          ? (r.var.push(o), i.push(wg), n.push(a))
          : (r.number.push(o), i.push(Eh), n.push(parseFloat(a))),
        ++o,
        Vc
      )
    )
    .split(Vc)
  return { values: n, split: l, indexes: r, types: i }
}
function Lh(e) {
  return go(e).values
}
function Ah(e) {
  const { split: t, types: n } = go(e),
    r = t.length
  return (i) => {
    let o = ''
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s]
        l === Eh
          ? (o += Er(i[s]))
          : l === Mh
          ? (o += he.transform(i[s]))
          : (o += i[s])
      }
    return o
  }
}
const Cg = (e) => (typeof e == 'number' ? 0 : e)
function Pg(e) {
  const t = Lh(e)
  return Ah(e)(t.map(Cg))
}
const Ht = {
    test: xg,
    parse: Lh,
    createTransformer: Ah,
    getAnimatableNone: Pg,
  },
  Tg = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function Eg(e) {
  const [t, n] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [r] = n.match($a) || []
  if (!r) return e
  const i = n.replace(r, '')
  let o = Tg.has(t) ? 1 : 0
  return r !== n && (o *= 100), t + '(' + o + i + ')'
}
const Mg = /\b([a-z-]*)\(.*?\)/gu,
  Rl = {
    ...Ht,
    getAnimatableNone: (e) => {
      const t = e.match(Mg)
      return t ? t.map(Eg).join(' ') : e
    },
  },
  Lg = {
    ...nh,
    color: he,
    backgroundColor: he,
    outlineColor: he,
    fill: he,
    stroke: he,
    borderColor: he,
    borderTopColor: he,
    borderRightColor: he,
    borderBottomColor: he,
    borderLeftColor: he,
    filter: Rl,
    WebkitFilter: Rl,
  },
  Ja = (e) => Lg[e]
function Rh(e, t) {
  let n = Ja(e)
  return (
    n !== Rl && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  )
}
function Ag(e, t, n) {
  let r = 0,
    i
  for (; r < e.length && !i; )
    typeof e[r] == 'string' && e[r] !== 'none' && e[r] !== '0' && (i = e[r]),
      r++
  if (i && n) for (const o of t) e[o] = Rh(n, i)
}
class jh extends Za {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0)
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this
    if (!n.current) return
    super.readKeyframes()
    for (let a = 0; a < t.length; a++) {
      const u = t[a]
      if (typeof u == 'string' && Ua(u)) {
        const c = wh(u, n.current)
        c !== void 0 && (t[a] = c)
      }
    }
    if (!dg.has(r) || t.length !== 2) return this.resolveNoneKeyframes()
    const [i, o] = t,
      s = jc(i),
      l = jc(o)
    if (s !== l)
      if (Mc(s) && Mc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a]
          typeof u == 'string' && (t[a] = parseFloat(u))
        }
      else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = []
    for (let i = 0; i < t.length; i++) ug(t[i]) && r.push(i)
    r.length && Ag(t, r, n)
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this
    if (!t.current) return
    r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Zn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin)
    const i = n[n.length - 1]
    i !== void 0 && t.getValue(r, i).jump(i, !1)
  }
  measureEndState() {
    var t
    const { element: n, name: r, unresolvedKeyframes: i } = this
    if (!n.current) return
    const o = n.getValue(r)
    o && o.jump(this.measuredOrigin, !1)
    const s = i.length - 1,
      l = i[s]
    ;(i[s] = Zn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u)
        }),
      this.resolveNoneKeyframes()
  }
}
function Rg(e) {
  let t
  return () => (t === void 0 && (t = e()), t)
}
const Nc = (e, t) =>
  t === 'zIndex'
    ? !1
    : !!(
        typeof e == 'number' ||
        Array.isArray(e) ||
        (typeof e == 'string' &&
          (Ht.test(e) || e === '0') &&
          !e.startsWith('url('))
      )
function jg(e) {
  const t = e[0]
  if (e.length === 1) return !0
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}
function Vg(e, t, n, r) {
  const i = e[0]
  if (i === null) return !1
  const o = e[e.length - 1],
    s = Nc(i, t),
    l = Nc(o, t)
  return !s || !l ? !1 : jg(e) || (n === 'spring' && r)
}
class Vh {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = 'loop',
    ...l
  }) {
    ;(this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...l,
      }),
      this.updateFinishedPromise()
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && gg(), this._resolved
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options
    if (!u && !Vg(t, r, i, o))
      if (s) this.options.duration = 0
      else {
        a == null || a(Wo(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise()
        return
      }
    const c = this.initPlayback(t, n)
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved())
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n)
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t
    })
  }
}
function Nh(e, t) {
  return t ? e * (1e3 / t) : 0
}
const Ng = 5
function Dh(e, t, n) {
  const r = Math.max(t - Ng, 0)
  return Nh(n - e(r), t - r)
}
const ks = 0.001,
  Dg = 0.01,
  _g = 10,
  zg = 0.05,
  Og = 1
function Fg({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t
  ;(s = Ut(zg, Og, s)),
    (e = Ut(Dg, _g, ht(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = jl(u, s),
            v = Math.exp(-f)
          return ks - (d / g) * v
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            y = jl(Math.pow(u, 2), s)
          return ((-i(u) + ks > 0 ? -1 : 1) * ((d - g) * v)) / y
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1
          return -ks + c * f
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e)
          return c * f
        }))
  const l = 5 / e,
    a = Bg(i, o, l)
  if (((e = Ot(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(a, 2) * r
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e }
  }
}
const Ig = 12
function Bg(e, t, n) {
  let r = n
  for (let i = 1; i < Ig; i++) r = r - e(r) / t(r)
  return r
}
function jl(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const Ug = ['duration', 'bounce'],
  $g = ['stiffness', 'damping', 'mass']
function Dc(e, t) {
  return t.some((n) => e[n] !== void 0)
}
function Hg(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  }
  if (!Dc(e, $g) && Dc(e, Ug)) {
    const n = Fg(e)
    ;(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function _h({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = Hg({ ...r, velocity: -ht(r.velocity || 0) }),
    g = f || 0,
    v = a / (2 * Math.sqrt(l * u)),
    y = o - i,
    P = ht(Math.sqrt(l / u)),
    m = Math.abs(y) < 5
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5)
  let h
  if (v < 1) {
    const p = jl(P, v)
    h = (w) => {
      const S = Math.exp(-v * P * w)
      return (
        o - S * (((g + v * P * y) / p) * Math.sin(p * w) + y * Math.cos(p * w))
      )
    }
  } else if (v === 1) h = (p) => o - Math.exp(-P * p) * (y + (g + P * y) * p)
  else {
    const p = P * Math.sqrt(v * v - 1)
    h = (w) => {
      const S = Math.exp(-v * P * w),
        T = Math.min(p * w, 300)
      return (
        o - (S * ((g + v * P * y) * Math.sinh(T) + p * y * Math.cosh(T))) / p
      )
    }
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (p) => {
      const w = h(p)
      if (d) s.done = p >= c
      else {
        let S = g
        p !== 0 && (v < 1 ? (S = Dh(h, p, w)) : (S = 0))
        const T = Math.abs(S) <= n,
          M = Math.abs(o - w) <= t
        s.done = T && M
      }
      return (s.value = s.done ? o : w), s
    },
  }
}
function _c({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (C) => (l !== void 0 && C < l) || (a !== void 0 && C > a),
    v = (C) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - C) < Math.abs(a - C)
        ? l
        : a
  let y = n * t
  const P = f + y,
    m = s === void 0 ? P : s(P)
  m !== P && (y = m - f)
  const h = (C) => -y * Math.exp(-C / r),
    p = (C) => m + h(C),
    w = (C) => {
      const _ = h(C),
        j = p(C)
      ;(d.done = Math.abs(_) <= u), (d.value = d.done ? m : j)
    }
  let S, T
  const M = (C) => {
    g(d.value) &&
      ((S = C),
      (T = _h({
        keyframes: [d.value, v(d.value)],
        velocity: Dh(p, C, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })))
  }
  return (
    M(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let _ = !1
        return (
          !T && S === void 0 && ((_ = !0), w(C), M(C)),
          S !== void 0 && C >= S ? T.next(C - S) : (!_ && w(C), d)
        )
      },
    }
  )
}
const zh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Wg = 1e-7,
  Kg = 12
function Gg(e, t, n, r, i) {
  let o,
    s,
    l = 0
  do (s = t + (n - t) / 2), (o = zh(s, r, i) - e), o > 0 ? (n = s) : (t = s)
  while (Math.abs(o) > Wg && ++l < Kg)
  return s
}
function ii(e, t, n, r) {
  if (e === t && n === r) return ge
  const i = (o) => Gg(o, 0, 1, e, n)
  return (o) => (o === 0 || o === 1 ? o : zh(i(o), t, r))
}
const Qg = ii(0.42, 0, 1, 1),
  Yg = ii(0, 0, 0.58, 1),
  Oh = ii(0.42, 0, 0.58, 1),
  Xg = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Fh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Ih = (e) => (t) => 1 - e(1 - t),
  qa = (e) => 1 - Math.sin(Math.acos(e)),
  Bh = Ih(qa),
  Zg = Fh(qa),
  Uh = ii(0.33, 1.53, 0.69, 0.99),
  eu = Ih(Uh),
  bg = Fh(eu),
  Jg = (e) =>
    (e *= 2) < 1 ? 0.5 * eu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  qg = {
    linear: ge,
    easeIn: Qg,
    easeInOut: Oh,
    easeOut: Yg,
    circIn: qa,
    circInOut: Zg,
    circOut: Bh,
    backIn: eu,
    backInOut: bg,
    backOut: Uh,
    anticipate: Jg,
  },
  zc = (e) => {
    if (Array.isArray(e)) {
      yh(e.length === 4)
      const [t, n, r, i] = e
      return ii(t, n, r, i)
    } else if (typeof e == 'string') return qg[e]
    return e
  },
  Yr = (e, t, n) => {
    const r = t - e
    return r === 0 ? 1 : (n - e) / r
  },
  K = (e, t, n) => e + (t - e) * n
function Cs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  )
}
function ev({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ;(e /= 360), (t /= 100), (n /= 100)
  let i = 0,
    o = 0,
    s = 0
  if (!t) i = o = s = n
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l
    ;(i = Cs(a, l, e + 1 / 3)), (o = Cs(a, l, e)), (s = Cs(a, l, e - 1 / 3))
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  }
}
const Ps = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r
    return i < 0 ? 0 : Math.sqrt(i)
  },
  tv = [Al, ln, Dn],
  nv = (e) => tv.find((t) => t.test(e))
function Oc(e) {
  const t = nv(e)
  let n = t.parse(e)
  return t === Dn && (n = ev(n)), n
}
const Fc = (e, t) => {
  const n = Oc(e),
    r = Oc(t),
    i = { ...n }
  return (o) => (
    (i.red = Ps(n.red, r.red, o)),
    (i.green = Ps(n.green, r.green, o)),
    (i.blue = Ps(n.blue, r.blue, o)),
    (i.alpha = K(n.alpha, r.alpha, o)),
    ln.transform(i)
  )
}
function Vl(e, t) {
  return (n) => (n > 0 ? t : e)
}
function rv(e, t) {
  return (n) => K(e, t, n)
}
function tu(e) {
  return typeof e == 'number'
    ? rv
    : typeof e == 'string'
    ? Ua(e)
      ? Vl
      : he.test(e)
      ? Fc
      : sv
    : Array.isArray(e)
    ? $h
    : typeof e == 'object'
    ? he.test(e)
      ? Fc
      : iv
    : Vl
}
function $h(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => tu(o)(o, t[s]))
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o)
    return n
  }
}
function iv(e, t) {
  const n = { ...e, ...t },
    r = {}
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = tu(e[i])(e[i], t[i]))
  return (i) => {
    for (const o in r) n[o] = r[o](i)
    return n
  }
}
function ov(e, t) {
  var n
  const r = [],
    i = { color: 0, var: 0, number: 0 }
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0
    ;(r[o] = a), i[s]++
  }
  return r
}
const sv = (e, t) => {
  const n = Ht.createTransformer(t),
    r = go(e),
    i = go(t)
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? dt($h(ov(r, i), i.values), n)
    : Vl(e, t)
}
function Hh(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? K(e, t, n)
    : tu(e)(e, t)
}
function lv(e, t, n) {
  const r = [],
    i = n || Hh,
    o = e.length - 1
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1])
    if (t) {
      const a = Array.isArray(t) ? t[s] || ge : t
      l = dt(a, l)
    }
    r.push(l)
  }
  return r
}
function av(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length
  if ((yh(o === t.length), o === 1)) return () => t[0]
  if (o === 2 && e[0] === e[1]) return () => t[1]
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const s = lv(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Yr(e[c], e[c + 1], u)
      return s[c](f)
    }
  return n ? (u) => a(Ut(e[0], e[o - 1], u)) : a
}
function uv(e, t) {
  const n = e[e.length - 1]
  for (let r = 1; r <= t; r++) {
    const i = Yr(0, t, r)
    e.push(K(n, 1, i))
  }
}
function cv(e) {
  const t = [0]
  return uv(t, e.length - 1), t
}
function fv(e, t) {
  return e.map((n) => n * t)
}
function dv(e, t) {
  return e.map(() => t || Oh).splice(0, e.length - 1)
}
function vo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut',
}) {
  const i = Xg(r) ? r.map(zc) : zc(r),
    o = { done: !1, value: t[0] },
    s = fv(n && n.length === t.length ? n : cv(t), e),
    l = av(s, t, { ease: Array.isArray(i) ? i : dv(t, i) })
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  }
}
const Ic = 2e4
function hv(e) {
  let t = 0
  const n = 50
  let r = e.next(t)
  for (; !r.done && t < Ic; ) (t += n), (r = e.next(t))
  return t >= Ic ? 1 / 0 : t
}
const pv = (e) => {
    const t = ({ timestamp: n }) => e(n)
    return {
      start: () => ue.update(t, !0),
      stop: () => $t(t),
      now: () => (le.isProcessing ? le.timestamp : Ft.now()),
    }
  },
  mv = { decay: _c, inertia: _c, tween: vo, keyframes: vo, spring: _h },
  gv = (e) => e / 100
class nu extends Vh {
  constructor({ KeyframeResolver: t = Za, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.state = 'idle')
    const { name: r, motionValue: i, keyframes: o } = this.options,
      s = (l, a) => this.onKeyframesResolved(l, a)
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(o, s, r, i))
      : (this.resolver = new t(o, s, r, i)),
      this.resolver.scheduleResolve()
  }
  initPlayback(t) {
    const {
        type: n = 'keyframes',
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      l = mv[n] || vo
    let a, u
    l !== vo &&
      typeof t[0] != 'number' &&
      ((a = dt(gv, Hh(t[0], t[1]))), (t = [0, 100]))
    const c = l({ ...this.options, keyframes: t })
    o === 'mirror' &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = hv(c))
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g,
    }
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options
    this.play(),
      this.pendingPlayState === 'paused' || !t
        ? this.pause()
        : (this.state = this.pendingPlayState)
  }
  tick(t, n = !1) {
    const { resolved: r } = this
    if (!r) {
      const { keyframes: C } = this.options
      return { done: !0, value: C[C.length - 1] }
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r
    if (this.startTime === null) return o.next(0)
    const {
      delay: d,
      repeat: g,
      repeatType: v,
      repeatDelay: y,
      onUpdate: P,
    } = this.options
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed)
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c
    ;(this.currentTime = Math.max(m, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = c)
    let p = this.currentTime,
      w = o
    if (g) {
      const C = Math.min(this.currentTime, c) / f
      let _ = Math.floor(C),
        j = C % 1
      !j && C >= 1 && (j = 1),
        j === 1 && _--,
        (_ = Math.min(_, g + 1)),
        !!(_ % 2) &&
          (v === 'reverse'
            ? ((j = 1 - j), y && (j -= y / f))
            : v === 'mirror' && (w = s)),
        (p = Ut(0, 1, j) * f)
    }
    const S = h ? { done: !1, value: a[0] } : w.next(p)
    l && (S.value = l(S.value))
    let { done: T } = S
    !h &&
      u !== null &&
      (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0)
    const M =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && T))
    return (
      M && i !== void 0 && (S.value = Wo(a, this.options, i)),
      P && P(S.value),
      M && this.finish(),
      S
    )
  }
  get duration() {
    const { resolved: t } = this
    return t ? ht(t.calculatedDuration) : 0
  }
  get time() {
    return ht(this.currentTime)
  }
  set time(t) {
    ;(t = Ot(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(t) {
    const n = this.playbackSpeed !== t
    ;(this.playbackSpeed = t), n && (this.time = ht(this.currentTime))
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = 'running'
      return
    }
    if (this.isStopped) return
    const { driver: t = pv, onPlay: n } = this.options
    this.driver || (this.driver = t((i) => this.tick(i))), n && n()
    const r = this.driver.now()
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === 'finished') && (this.startTime = r),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start()
  }
  pause() {
    var t
    if (!this._resolved) {
      this.pendingPlayState = 'paused'
      return
    }
    ;(this.state = 'paused'),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0)
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
      return
    this.teardown()
    const { onStop: t } = this.options
    t && t()
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null)
  }
  finish() {
    this.teardown(), (this.state = 'finished')
    const { onComplete: t } = this.options
    t && t()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise()
  }
  teardown() {
    ;(this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0))
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0)
  }
}
const Wh = (e) => Array.isArray(e) && typeof e[0] == 'number'
function Kh(e) {
  return !!(
    !e ||
    (typeof e == 'string' && Gh[e]) ||
    Wh(e) ||
    (Array.isArray(e) && e.every(Kh))
  )
}
const mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Gh = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: mr([0, 0.65, 0.55, 1]),
    circOut: mr([0.55, 0, 1, 0.45]),
    backIn: mr([0.31, 0.01, 0.66, -0.59]),
    backOut: mr([0.33, 1.53, 0.69, 0.99]),
  }
function Qh(e) {
  if (e) return Wh(e) ? mr(e) : Array.isArray(e) ? e.map(Qh) : Gh[e]
}
function vv(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = 'loop',
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n }
  a && (u.offset = a)
  const c = Qh(l)
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: o + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal',
    })
  )
}
const yv = Rg(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  xv = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  yo = 10,
  wv = 2e4
function Sv(e) {
  return e.type === 'spring' || e.name === 'backgroundColor' || !Kh(e.ease)
}
function kv(e, t) {
  const n = new nu({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 })
  let r = { done: !1, value: e[0] }
  const i = []
  let o = 0
  for (; !r.done && o < wv; ) (r = n.sample(o)), i.push(r.value), (o += yo)
  return { times: void 0, keyframes: i, duration: o - yo, ease: 'linear' }
}
class Bc extends Vh {
  constructor(t) {
    super(t)
    const { name: n, motionValue: r, keyframes: i } = this.options
    ;(this.resolver = new jh(
      i,
      (o, s) => this.onKeyframesResolved(o, s),
      n,
      r
    )),
      this.resolver.scheduleResolve()
  }
  initPlayback(t, n) {
    var r
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: l,
      motionValue: a,
      name: u,
    } = this.options
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1
    if (Sv(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, ...v } = this.options,
        y = kv(t, v)
      ;(t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = y.duration),
        (o = y.times),
        (s = y.ease),
        (l = 'keyframes')
    }
    const c = vv(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    })
    return (
      (c.startTime = Ft.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: f } = this.options
            a.set(Wo(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise()
          }),
      { animation: c, duration: i, times: o, type: l, ease: s, keyframes: t }
    )
  }
  get duration() {
    const { resolved: t } = this
    if (!t) return 0
    const { duration: n } = t
    return ht(n)
  }
  get time() {
    const { resolved: t } = this
    if (!t) return 0
    const { animation: n } = t
    return ht(n.currentTime || 0)
  }
  set time(t) {
    const { resolved: n } = this
    if (!n) return
    const { animation: r } = n
    r.currentTime = Ot(t)
  }
  get speed() {
    const { resolved: t } = this
    if (!t) return 1
    const { animation: n } = t
    return n.playbackRate
  }
  set speed(t) {
    const { resolved: n } = this
    if (!n) return
    const { animation: r } = n
    r.playbackRate = t
  }
  get state() {
    const { resolved: t } = this
    if (!t) return 'idle'
    const { animation: n } = t
    return n.playState
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t
    else {
      const { resolved: n } = this
      if (!n) return ge
      const { animation: r } = n
      ;(r.timeline = t), (r.onfinish = null)
    }
    return ge
  }
  play() {
    if (this.isStopped) return
    const { resolved: t } = this
    if (!t) return
    const { animation: n } = t
    n.playState === 'finished' && this.updateFinishedPromise(), n.play()
  }
  pause() {
    const { resolved: t } = this
    if (!t) return
    const { animation: n } = t
    n.pause()
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
      return
    const { resolved: t } = this
    if (!t) return
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: l,
    } = t
    if (!(n.playState === 'idle' || n.playState === 'finished')) {
      if (this.time) {
        const {
            motionValue: a,
            onUpdate: u,
            onComplete: c,
            ...f
          } = this.options,
          d = new nu({
            ...f,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: l,
            isGenerator: !0,
          }),
          g = Ot(this.time)
        a.setWithVelocity(d.sample(g - yo).value, d.sample(g).value, yo)
      }
      this.cancel()
    }
  }
  complete() {
    const { resolved: t } = this
    t && t.animation.finish()
  }
  cancel() {
    const { resolved: t } = this
    t && t.animation.cancel()
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: l,
    } = t
    return (
      yv() &&
      r &&
      xv.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== 'mirror' &&
      s !== 0 &&
      l !== 'inertia'
    )
  }
}
const ru =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const l = Xa(r, e) || {},
      a = l.delay || r.delay || 0
    let { elapsed: u = 0 } = r
    u = u - Ot(a)
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: 'easeOut',
      velocity: t.getVelocity(),
      ...l,
      delay: -u,
      onUpdate: (d) => {
        t.set(d), l.onUpdate && l.onUpdate(d)
      },
      onComplete: () => {
        s(), l.onComplete && l.onComplete()
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    }
    sg(l) || (c = { ...c, ...og(e, c) }),
      c.duration && (c.duration = Ot(c.duration)),
      c.repeatDelay && (c.repeatDelay = Ot(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from)
    let f = !1
    if (
      (c.type === !1 && ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !o && t.get() !== void 0)
    ) {
      const d = Wo(c.keyframes, l)
      if (d !== void 0) {
        ue.update(() => {
          c.onUpdate(d), c.onComplete()
        })
        return
      }
    }
    return !o && Bc.supports(c) ? new Bc(c) : new nu(c)
  }
function xo(e) {
  return !!(me(e) && e.add)
}
function iu(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function ou(e, t) {
  const n = e.indexOf(t)
  n > -1 && e.splice(n, 1)
}
class su {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return iu(this.subscriptions, t), () => ou(this.subscriptions, t)
  }
  notify(t, n, r) {
    const i = this.subscriptions.length
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r)
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o]
          s && s(t, n, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const Uc = 30,
  Cv = (e) => !isNaN(parseFloat(e))
class Pv {
  constructor(t, n = {}) {
    ;(this.version = '11.0.24'),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = Ft.now()
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current)
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = Cv(this.current)),
      (this.owner = n.owner)
  }
  setCurrent(t) {
    ;(this.current = t), (this.updatedAt = Ft.now())
  }
  setPrevFrameValue(t = this.current) {
    ;(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt)
  }
  onChange(t) {
    return this.on('change', t)
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new su())
    const r = this.events[t].add(n)
    return t === 'change'
      ? () => {
          r(),
            ue.read(() => {
              this.events.change.getSize() || this.stop()
            })
        }
      : r
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear()
  }
  attach(t, n) {
    ;(this.passiveEffect = t), (this.stopPassiveEffect = n)
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify)
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r)
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const t = Ft.now()
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Uc
    )
      return 0
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Uc)
    return Nh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ;(this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      })
    )
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function Xr(e, t) {
  return new Pv(e, t)
}
function Tv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xr(n))
}
function Ev(e, t) {
  const n = Ho(e, t)
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {}
  o = { ...o, ...r }
  for (const s in o) {
    const l = D2(o[s])
    Tv(e, s, l)
  }
}
function Mv({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0
  return (t[n] = !1), r
}
function Yh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t
  const u = e.getValue('willChange')
  r && (s = r)
  const c = [],
    f = i && e.animationState && e.animationState.getState()[i]
  for (const d in a) {
    const g = e.getValue(
        d,
        (o = e.latestValues[d]) !== null && o !== void 0 ? o : null
      ),
      v = a[d]
    if (v === void 0 || (f && Mv(f, d))) continue
    const y = { delay: n, elapsed: 0, ...Xa(s || {}, d) }
    let P = !1
    if (window.HandoffAppearAnimations) {
      const h = e.getProps()[Y1]
      if (h) {
        const p = window.HandoffAppearAnimations(h, d)
        p !== null && ((y.elapsed = p), (P = !0))
      }
    }
    g.start(
      ru(d, g, v, e.shouldReduceMotion && yn.has(d) ? { type: !1 } : y, e, P)
    )
    const m = g.animation
    m && (xo(u) && (u.add(d), m.then(() => u.remove(d))), c.push(m))
  }
  return (
    l &&
      Promise.all(c).then(() => {
        ue.update(() => {
          l && Ev(e, l)
        })
      }),
    c
  )
}
function Nl(e, t, n = {}) {
  var r
  const i = Ho(
    e,
    t,
    n.type === 'exit'
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  )
  let { transition: o = e.getDefaultTransition() || {} } = i || {}
  n.transitionOverride && (o = n.transitionOverride)
  const s = i ? () => Promise.all(Yh(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o
            return Lv(e, t, c + u, f, d, n)
          }
        : () => Promise.resolve(),
    { when: a } = o
  if (a) {
    const [u, c] = a === 'beforeChildren' ? [s, l] : [l, s]
    return u().then(() => c())
  } else return Promise.all([s(), l(n.delay)])
}
function Lv(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r
  return (
    Array.from(e.variantChildren)
      .sort(Av)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          s.push(
            Nl(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify('AnimationComplete', t)
            )
          )
      }),
    Promise.all(s)
  )
}
function Av(e, t) {
  return e.sortNodePosition(t)
}
function Rv(e, t, n = {}) {
  e.notify('AnimationStart', t)
  let r
  if (Array.isArray(t)) {
    const i = t.map((o) => Nl(e, o, n))
    r = Promise.all(i)
  } else if (typeof t == 'string') r = Nl(e, t, n)
  else {
    const i = typeof t == 'function' ? Ho(e, t, n.custom) : t
    r = Promise.all(Yh(e, i, n))
  }
  return r.then(() => {
    ue.postRender(() => {
      e.notify('AnimationComplete', t)
    })
  })
}
const jv = [...Fa].reverse(),
  Vv = Fa.length
function Nv(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Rv(e, n, r)))
}
function Dv(e) {
  let t = Nv(e)
  const n = zv()
  let r = !0
  const i = (a) => (u, c) => {
    var f
    const d = Ho(
      e,
      c,
      a === 'exit'
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    )
    if (d) {
      const { transition: g, transitionEnd: v, ...y } = d
      u = { ...u, ...y, ...v }
    }
    return u
  }
  function o(a) {
    t = a(e)
  }
  function s(a) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      f = [],
      d = new Set()
    let g = {},
      v = 1 / 0
    for (let P = 0; P < Vv; P++) {
      const m = jv[P],
        h = n[m],
        p = u[m] !== void 0 ? u[m] : c[m],
        w = Gr(p),
        S = m === a ? h.isActive : null
      S === !1 && (v = P)
      let T = p === c[m] && p !== u[m] && w
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!p && !h.prevProp) ||
          Bo(p) ||
          typeof p == 'boolean')
      )
        continue
      let C =
          _v(h.prevProp, p) ||
          (m === a && h.isActive && !T && w) ||
          (P > v && w),
        _ = !1
      const j = Array.isArray(p) ? p : [p]
      let te = j.reduce(i(m), {})
      S === !1 && (te = {})
      const { prevResolvedValues: xt = {} } = h,
        Yt = { ...xt, ...te },
        tr = (oe) => {
          ;(C = !0),
            d.has(oe) && ((_ = !0), d.delete(oe)),
            (h.needsAnimating[oe] = !0)
          const Ae = e.getValue(oe)
          Ae && (Ae.liveStyle = !1)
        }
      for (const oe in Yt) {
        const Ae = te[oe],
          Xt = xt[oe]
        if (g.hasOwnProperty(oe)) continue
        let E = !1
        Tl(Ae) && Tl(Xt) ? (E = !gh(Ae, Xt)) : (E = Ae !== Xt),
          E
            ? Ae != null
              ? tr(oe)
              : d.add(oe)
            : Ae !== void 0 && d.has(oe)
            ? tr(oe)
            : (h.protectedKeys[oe] = !0)
      }
      ;(h.prevProp = p),
        (h.prevResolvedValues = te),
        h.isActive && (g = { ...g, ...te }),
        r && e.blockInitialAnimation && (C = !1),
        C &&
          (!T || _) &&
          f.push(...j.map((oe) => ({ animation: oe, options: { type: m } })))
    }
    if (d.size) {
      const P = {}
      d.forEach((m) => {
        const h = e.getBaseTarget(m),
          p = e.getValue(m)
        p && (p.liveStyle = !0), (P[m] = h === void 0 ? null : h)
      }),
        f.push({ animation: P })
    }
    let y = !!f.length
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(f) : Promise.resolve()
    )
  }
  function l(a, u) {
    var c
    if (n[a].isActive === u) return Promise.resolve()
    ;(c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(a, u)
      }),
      (n[a].isActive = u)
    const f = s(a)
    for (const d in n) n[d].protectedKeys = {}
    return f
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  }
}
function _v(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !gh(t, e) : !1
}
function Jt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  }
}
function zv() {
  return {
    animate: Jt(!0),
    whileInView: Jt(),
    whileHover: Jt(),
    whileTap: Jt(),
    whileDrag: Jt(),
    whileFocus: Jt(),
    exit: Jt(),
  }
}
class Ov extends Qt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Dv(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps()
    this.unmount(), Bo(t) && (this.unmount = t.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {}
    t !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {}
}
let Fv = 0
class Iv extends Qt {
  constructor() {
    super(...arguments), (this.id = Fv++)
  }
  update() {
    if (!this.node.presenceContext) return
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || t === r) return
    const i = this.node.animationState.setActive('exit', !t)
    n && !t && i.then(() => n(this.id))
  }
  mount() {
    const { register: t } = this.node.presenceContext || {}
    t && (this.unmount = t(this.id))
  }
  unmount() {}
}
const Bv = { animation: { Feature: Ov }, exit: { Feature: Iv } },
  $c = (e, t) => Math.abs(e - t)
function Uv(e, t) {
  const n = $c(e.x, t.x),
    r = $c(e.y, t.y)
  return Math.sqrt(n ** 2 + r ** 2)
}
class Xh {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const f = Es(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = Uv(f.offset, { x: 0, y: 0 }) >= 3
        if (!d && !g) return
        const { point: v } = f,
          { timestamp: y } = le
        this.history.push({ ...v, timestamp: y })
        const { onStart: P, onMove: m } = this.handlers
        d ||
          (P && P(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f)
      }),
      (this.handlePointerMove = (f, d) => {
        ;(this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Ts(d, this.transformPagePoint)),
          ue.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (f, d) => {
        this.end()
        const { onEnd: g, onSessionEnd: v, resumeAnimation: y } = this.handlers
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return
        const P = Es(
          f.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : Ts(d, this.transformPagePoint),
          this.history
        )
        this.startEvent && g && g(f, P), v && v(f, P)
      }),
      !fh(t))
    )
      return
    ;(this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window)
    const s = $o(t),
      l = Ts(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = le
    this.history = [{ ...a, timestamp: u }]
    const { onSessionStart: c } = n
    c && c(t, Es(l, this.history)),
      (this.removeListeners = dt(
        ft(this.contextWindow, 'pointermove', this.handlePointerMove),
        ft(this.contextWindow, 'pointerup', this.handlePointerUp),
        ft(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(), $t(this.updatePoint)
  }
}
function Ts(e, t) {
  return t ? { point: t(e.point) } : e
}
function Hc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function Es({ point: e }, t) {
  return {
    point: e,
    delta: Hc(e, Zh(t)),
    offset: Hc(e, $v(t)),
    velocity: Hv(t, 0.1),
  }
}
function $v(e) {
  return e[0]
}
function Zh(e) {
  return e[e.length - 1]
}
function Hv(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let n = e.length - 1,
    r = null
  const i = Zh(e)
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ot(t))); ) n--
  if (!r) return { x: 0, y: 0 }
  const o = ht(i.timestamp - r.timestamp)
  if (o === 0) return { x: 0, y: 0 }
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o }
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}
function De(e) {
  return e.max - e.min
}
function Dl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n
}
function Wc(e, t, n, r = 0.5) {
  ;(e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = De(n) / De(t)),
    (Dl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    (Dl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Mr(e, t, n, r) {
  Wc(e.x, t.x, n.x, r ? r.originX : void 0),
    Wc(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Kc(e, t, n) {
  ;(e.min = n.min + t.min), (e.max = e.min + De(t))
}
function Wv(e, t, n) {
  Kc(e.x, t.x, n.x), Kc(e.y, t.y, n.y)
}
function Gc(e, t, n) {
  ;(e.min = t.min - n.min), (e.max = e.min + De(t))
}
function Lr(e, t, n) {
  Gc(e.x, t.x, n.x), Gc(e.y, t.y, n.y)
}
function Kv(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  )
}
function Qc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  }
}
function Gv(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Qc(e.x, n, i), y: Qc(e.y, t, r) }
}
function Yc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
}
function Qv(e, t) {
  return { x: Yc(e.x, t.x), y: Yc(e.y, t.y) }
}
function Yv(e, t) {
  let n = 0.5
  const r = De(e),
    i = De(t)
  return (
    i > r
      ? (n = Yr(t.min, t.max - r, e.min))
      : r > i && (n = Yr(e.min, e.max - i, t.min)),
    Ut(0, 1, n)
  )
}
function Xv(e, t) {
  const n = {}
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  )
}
const _l = 0.35
function Zv(e = _l) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = _l),
    { x: Xc(e, 'left', 'right'), y: Xc(e, 'top', 'bottom') }
  )
}
function Xc(e, t, n) {
  return { min: Zc(e, t), max: Zc(e, n) }
}
function Zc(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const bc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  _n = () => ({ x: bc(), y: bc() }),
  Jc = () => ({ min: 0, max: 0 }),
  Z = () => ({ x: Jc(), y: Jc() })
function Fe(e) {
  return [e('x'), e('y')]
}
function bh({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } }
}
function bv({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function Jv(e, t) {
  if (!t) return e
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom })
  return { top: n.y, left: n.x, bottom: r.y, right: r.x }
}
function Ms(e) {
  return e === void 0 || e === 1
}
function zl({ scale: e, scaleX: t, scaleY: n }) {
  return !Ms(e) || !Ms(t) || !Ms(n)
}
function tn(e) {
  return (
    zl(e) ||
    Jh(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  )
}
function Jh(e) {
  return qc(e.x) || qc(e.y)
}
function qc(e) {
  return e && e !== '0%'
}
function wo(e, t, n) {
  const r = e - n,
    i = t * r
  return n + i
}
function ef(e, t, n, r, i) {
  return i !== void 0 && (e = wo(e, i, r)), wo(e, n, r) + t
}
function Ol(e, t = 0, n = 1, r, i) {
  ;(e.min = ef(e.min, t, n, r, i)), (e.max = ef(e.max, t, n, r, i))
}
function qh(e, { x: t, y: n }) {
  Ol(e.x, t.translate, t.scale, t.originPoint),
    Ol(e.y, n.translate, n.scale, n.originPoint)
}
function qv(e, t, n, r = !1) {
  const i = n.length
  if (!i) return
  t.x = t.y = 1
  let o, s
  for (let l = 0; l < i; l++) {
    ;(o = n[l]), (s = o.projectionDelta)
    const a = o.instance
    ;(a && a.style && a.style.display === 'contents') ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        zn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), qh(e, s)),
      r && tn(o.latestValues) && zn(e, o.latestValues))
  }
  ;(t.x = tf(t.x)), (t.y = tf(t.y))
}
function tf(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1
}
function Pt(e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function nf(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = K(e.min, e.max, o)
  Ol(e, t[n], t[r], s, t.scale)
}
const ey = ['x', 'scaleX', 'originX'],
  ty = ['y', 'scaleY', 'originY']
function zn(e, t) {
  nf(e.x, t, ey), nf(e.y, t, ty)
}
function e0(e, t) {
  return bh(Jv(e.getBoundingClientRect(), t))
}
function ny(e, t, n) {
  const r = e0(e, n),
    { scroll: i } = t
  return i && (Pt(r.x, i.offset.x), Pt(r.y, i.offset.y)), r
}
const t0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ry = new WeakMap()
class iy {
  constructor(t) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Z()),
      (this.visualElement = t)
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement
    if (r && r.isPresent === !1) return
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps()
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor($o(c, 'page').point)
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: v } = this.getProps()
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = hh(d)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Fe((P) => {
            let m = this.getAxisMotionValue(P).get() || 0
            if (rt.test(m)) {
              const { projection: h } = this.visualElement
              if (h && h.layout) {
                const p = h.layout.layoutBox[P]
                p && (m = De(p) * (parseFloat(m) / 100))
              }
            }
            this.originPoint[P] = m
          }),
          v && v(c, f)
        const { animationState: y } = this.visualElement
        y && y.setActive('whileDrag', !0)
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps()
        if (!d && !this.openGlobalLock) return
        const { offset: P } = f
        if (g && this.currentDirection === null) {
          ;(this.currentDirection = oy(P)),
            this.currentDirection !== null && v && v(this.currentDirection)
          return
        }
        this.updateAxis('x', f.point, P),
          this.updateAxis('y', f.point, P),
          this.visualElement.render(),
          y && y(c, f)
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        Fe((c) => {
          var f
          return (
            this.getAnimationState(c) === 'paused' &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          )
        }),
      { dragSnapToOrigin: u } = this.getProps()
    this.panSession = new Xh(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: t0(this.visualElement),
      }
    )
  }
  stop(t, n) {
    const r = this.isDragging
    if ((this.cancel(), !r)) return
    const { velocity: i } = n
    this.startAnimation(i)
    const { onDragEnd: o } = this.getProps()
    o && o(t, n)
  }
  cancel() {
    this.isDragging = !1
    const { projection: t, animationState: n } = this.visualElement
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0)
    const { dragPropagation: r } = this.getProps()
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1)
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps()
    if (!r || !Ei(t, i, this.currentDirection)) return
    const o = this.getAxisMotionValue(t)
    let s = this.originPoint[t] + r[t]
    this.constraints &&
      this.constraints[t] &&
      (s = Kv(s, this.constraints[t], this.elastic[t])),
      o.set(s)
  }
  resolveConstraints() {
    var t
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints
    n && Nn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = Gv(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = Zv(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Fe((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = Xv(i.layoutBox[s], this.constraints[s]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps()
    if (!t || !Nn(t)) return !1
    const r = t.current,
      { projection: i } = this.visualElement
    if (!i || !i.layout) return !1
    const o = ny(r, i.root, this.visualElement.getTransformPagePoint())
    let s = Qv(i.layout.layoutBox, o)
    if (n) {
      const l = n(bv(s))
      ;(this.hasMutatedConstraints = !!l), l && (s = bh(l))
    }
    return s
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = Fe((c) => {
        if (!Ei(c, n, this.currentDirection)) return
        let f = (a && a[c]) || {}
        s && (f = { min: 0, max: 0 })
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          }
        return this.startAxisValueAnimation(c, v)
      })
    return Promise.all(u).then(l)
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t)
    return r.start(ru(t, r, 0, n, this.visualElement))
  }
  stopAnimation() {
    Fe((t) => this.getAxisMotionValue(t).stop())
  }
  pauseAnimation() {
    Fe((t) => {
      var n
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause()
    })
  }
  getAnimationState(t) {
    var n
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state
  }
  getAxisMotionValue(t) {
    const n = '_drag' + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n]
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    )
  }
  snapToCursor(t) {
    Fe((n) => {
      const { drag: r } = this.getProps()
      if (!Ei(n, r, this.currentDirection)) return
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n)
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n]
        o.set(t[n] - K(s, l, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement
    if (!Nn(n) || !r || !this.constraints) return
    this.stopAnimation()
    const i = { x: 0, y: 0 }
    Fe((s) => {
      const l = this.getAxisMotionValue(s)
      if (l) {
        const a = l.get()
        i[s] = Yv({ min: a, max: a }, this.constraints[s])
      }
    })
    const { transformTemplate: o } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Fe((s) => {
        if (!Ei(s, t, null)) return
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s]
        l.set(K(a, u, i[s]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    ry.set(this.visualElement, this)
    const t = this.visualElement.current,
      n = ft(t, 'pointerdown', (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(a)
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps()
        Nn(a) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener('measure', r)
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r()
    const s = at(window, 'resize', () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        'didUpdate',
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Fe((c) => {
              const f = this.getAxisMotionValue(c)
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate))
            }),
            this.visualElement.render())
        }
      )
    return () => {
      s(), n(), o(), l && l()
    }
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = _l,
        dragMomentum: l = !0,
      } = t
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    }
  }
}
function Ei(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}
function oy(e, t = 10) {
  let n = null
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n
}
class sy extends Qt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ge),
      (this.removeListeners = ge),
      (this.controls = new iy(t))
  }
  mount() {
    const { dragControls: t } = this.node.getProps()
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ge)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const rf = (e) => (t, n) => {
  e && e(t, n)
}
class ly extends Qt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ge)
  }
  onPointerDown(t) {
    this.session = new Xh(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: t0(this.node),
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps()
    return {
      onSessionStart: rf(t),
      onStart: rf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && i(o, s)
      },
    }
  }
  mount() {
    this.removePointerDownListener = ft(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    )
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
function ay() {
  const e = A.useContext(Da)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = A.useId()
  return A.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}
const Ui = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function of(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const cr = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (R.test(e)) e = parseFloat(e)
        else return e
      const n = of(e, t.target.x),
        r = of(e, t.target.y)
      return `${n}% ${r}%`
    },
  },
  uy = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ht.parse(e)
      if (i.length > 5) return r
      const o = Ht.createTransformer(e),
        s = typeof i[0] != 'number' ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y
      ;(i[0 + s] /= l), (i[1 + s] /= a)
      const u = K(l, a, 0.5)
      return (
        typeof i[2 + s] == 'number' && (i[2 + s] /= u),
        typeof i[3 + s] == 'number' && (i[3 + s] /= u),
        o(i)
      )
    },
  }
class cy extends ut.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t
    u2(fy),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ui.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              ue.postRender(() => {
                const l = s.getStack()
                ;(!l || !l.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement
    t &&
      (t.root.didUpdate(),
      Oa.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove()
      }))
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i))
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props
    t && t()
  }
  render() {
    return null
  }
}
function n0(e) {
  const [t, n] = ay(),
    r = A.useContext(b1)
  return ut.createElement(cy, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: A.useContext(J1),
    isPresent: t,
    safeToRemove: n,
  })
}
const fy = {
    borderRadius: {
      ...cr,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: cr,
    borderTopRightRadius: cr,
    borderBottomLeftRadius: cr,
    borderBottomRightRadius: cr,
    boxShadow: uy,
  },
  r0 = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  dy = r0.length,
  sf = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  lf = (e) => typeof e == 'number' || R.test(e)
function hy(e, t, n, r, i, o) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, py(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, my(r))))
    : o &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ))
  for (let s = 0; s < dy; s++) {
    const l = `border${r0[s]}Radius`
    let a = af(t, l),
      u = af(n, l)
    if (a === void 0 && u === void 0) continue
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || lf(a) === lf(u)
        ? ((e[l] = Math.max(K(sf(a), sf(u), r), 0)),
          (rt.test(u) || rt.test(a)) && (e[l] += '%'))
        : (e[l] = u)
  }
  ;(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}
function af(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const py = i0(0, 0.5, Bh),
  my = i0(0.5, 0.95, ge)
function i0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Yr(e, t, r)))
}
function uf(e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function Oe(e, t) {
  uf(e.x, t.x), uf(e.y, t.y)
}
function cf(e, t, n, r, i) {
  return (
    (e -= t), (e = wo(e, 1 / n, r)), i !== void 0 && (e = wo(e, 1 / i, r)), e
  )
}
function gy(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (rt.test(t) &&
      ((t = parseFloat(t)), (t = K(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return
  let l = K(o.min, o.max, r)
  e === o && (l -= t),
    (e.min = cf(e.min, t, n, l, i)),
    (e.max = cf(e.max, t, n, l, i))
}
function ff(e, t, [n, r, i], o, s) {
  gy(e, t[n], t[r], t[i], t.scale, o, s)
}
const vy = ['x', 'scaleX', 'originX'],
  yy = ['y', 'scaleY', 'originY']
function df(e, t, n, r) {
  ff(e.x, t, vy, n ? n.x : void 0, r ? r.x : void 0),
    ff(e.y, t, yy, n ? n.y : void 0, r ? r.y : void 0)
}
function hf(e) {
  return e.translate === 0 && e.scale === 1
}
function o0(e) {
  return hf(e.x) && hf(e.y)
}
function xy(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  )
}
function s0(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  )
}
function pf(e) {
  return De(e.x) / De(e.y)
}
class wy {
  constructor() {
    this.members = []
  }
  add(t) {
    iu(this.members, t), t.scheduleRender()
  }
  remove(t) {
    if (
      (ou(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1]
      n && this.promote(n)
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i)
    if (n === 0) return !1
    let r
    for (let i = n; i >= 0; i--) {
      const o = this.members[i]
      if (o.isPresent !== !1) {
        r = o
        break
      }
    }
    return r ? (this.promote(r), !0) : !1
  }
  promote(t, n) {
    const r = this.lead
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0)
      const { crossfade: i } = t.options
      i === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function mf(e, t, n) {
  let r = ''
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: u, rotateX: c, rotateY: f, skewX: d, skewY: g } = n
    u && (r += `rotate(${u}deg) `),
      c && (r += `rotateX(${c}deg) `),
      f && (r += `rotateY(${f}deg) `),
      d && (r += `skewX(${d}deg) `),
      g && (r += `skewY(${g}deg) `)
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || 'none'
}
const Sy = (e, t) => e.depth - t.depth
class ky {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(t) {
    iu(this.children, t), (this.isDirty = !0)
  }
  remove(t) {
    ou(this.children, t), (this.isDirty = !0)
  }
  forEach(t) {
    this.isDirty && this.children.sort(Sy),
      (this.isDirty = !1),
      this.children.forEach(t)
  }
}
function Cy(e, t) {
  const n = Ft.now(),
    r = ({ timestamp: i }) => {
      const o = i - n
      o >= t && ($t(r), e(o - t))
    }
  return ue.read(r, !0), () => $t(r)
}
function Py(e) {
  window.MotionDebug && window.MotionDebug.record(e)
}
function Ty(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function Ey(e, t, n) {
  const r = me(e) ? e : Xr(e)
  return r.start(ru('', r, t, n)), r.animation
}
const Ls = ['', 'X', 'Y', 'Z'],
  My = { visibility: 'hidden' },
  gf = 1e3
let Ly = 0
const nn = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
}
function As(e, t, n, r) {
  const { latestValues: i } = t
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
}
function l0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      ;(this.id = Ly++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(this.projectionUpdateScheduled = !1),
            (nn.totalNodes =
              nn.resolvedTargetDeltas =
              nn.recalculatedProjection =
                0),
            this.nodes.forEach(jy),
            this.nodes.forEach(zy),
            this.nodes.forEach(Oy),
            this.nodes.forEach(Vy),
            Py(nn)
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0)
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0
      this.root === this && (this.nodes = new ky())
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new su()),
        this.eventHandlers.get(s).add(l)
      )
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s)
      a && a.notify(...l)
    }
    hasListeners(s) {
      return this.eventHandlers.has(s)
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;(this.isSVG = Ty(s)), (this.instance = s)
      const { layoutId: a, layout: u, visualElement: c } = this.options
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f
        const d = () => (this.root.updateBlockedByResize = !1)
        e(s, () => {
          ;(this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Cy(d, 250)),
            Ui.hasAnimatedSinceResize &&
              ((Ui.hasAnimatedSinceResize = !1), this.nodes.forEach(yf))
        })
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || $y,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !s0(this.targetLayout, v) || g,
                p = !d && g
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, p)
                const w = { ...Xa(y, 'layout'), onPlay: P, onComplete: m }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w)
              } else
                d || yf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete()
              this.targetLayout = v
            }
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const s = this.getStack()
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        $t(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      )
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Fy),
        this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options
      return s && s.getProps().transformTemplate
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return
      this.isLayoutDirty = !0
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c]
        ;(f.shouldResetTransform = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1)
      }
      const { layoutId: l, layout: a } = this.options
      if (l === void 0 && !a) return
      const u = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = u
        ? u(this.latestValues, '')
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate')
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vf)
        return
      }
      this.isUpdating || this.nodes.forEach(Dy),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(_y),
        this.nodes.forEach(Ay),
        this.nodes.forEach(Ry),
        this.clearAllSnapshots()
      const l = Ft.now()
      ;(le.delta = Ut(0, 1e3 / 60, l - le.timestamp)),
        (le.timestamp = l),
        (le.isProcessing = !0),
        ys.update.process(le),
        ys.preRender.process(le),
        ys.render.process(le),
        (le.isProcessing = !1)
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Oa.read(() => this.update()))
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ny), this.sharedNodes.forEach(Iy)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ue.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      ue.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll()
      const s = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = Z()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: l } = this.options
      l &&
        l.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        )
    }
    updateScroll(s = 'measure') {
      let l = !!(this.options.layoutScroll && this.instance)
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          })
    }
    resetTransform() {
      if (!i) return
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !o0(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue
      s &&
        (l || tn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender())
    }
    measure(s = !0) {
      const l = this.measurePageBox()
      let a = this.removeElementScroll(l)
      return (
        s && (a = this.removeTransform(a)),
        Hy(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      )
    }
    measurePageBox() {
      const { visualElement: s } = this.options
      if (!s) return Z()
      const l = s.measureViewportBox(),
        { scroll: a } = this.root
      return a && (Pt(l.x, a.offset.x), Pt(l.y, a.offset.y)), l
    }
    removeElementScroll(s) {
      const l = Z()
      Oe(l, s)
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Oe(l, s)
            const { scroll: d } = this.root
            d && (Pt(l.x, -d.offset.x), Pt(l.y, -d.offset.y))
          }
          Pt(l.x, c.offset.x), Pt(l.y, c.offset.y)
        }
      }
      return l
    }
    applyTransform(s, l = !1) {
      const a = Z()
      Oe(a, s)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          zn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          tn(c.latestValues) && zn(a, c.latestValues)
      }
      return tn(this.latestValues) && zn(a, this.latestValues), a
    }
    removeTransform(s) {
      const l = Z()
      Oe(l, s)
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a]
        if (!u.instance || !tn(u.latestValues)) continue
        zl(u.latestValues) && u.updateSnapshot()
        const c = Z(),
          f = u.measurePageBox()
        Oe(c, f),
          df(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return tn(this.latestValues) && df(l, this.latestValues), l
    }
    setTargetDelta(s) {
      ;(this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0)
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      }
    }
    clearMeasurements() {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== le.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(s = !1) {
      var l
      const a = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty)
      const u = !!this.resumingFrom || this !== a
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return
      const { layout: f, layoutId: d } = this.options
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = le.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent()
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Z()),
              (this.relativeTargetOrigin = Z()),
              Lr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Z()), (this.targetWithTransforms = Z())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Wv(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Oe(this.target, this.layout.layoutBox),
                qh(this.target, this.targetDelta))
              : Oe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const g = this.getClosestProjectingParent()
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Z()),
                (this.relativeTargetOrigin = Z()),
                Lr(this.relativeTargetOrigin, this.target, g.target),
                Oe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          nn.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          zl(this.parent.latestValues) ||
          Jh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      )
    }
    calcProjection() {
      var s
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l
      let u = !0
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === le.timestamp && (u = !1),
        u)
      )
        return
      const { layout: c, layoutId: f } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return
      Oe(this.layoutCorrected, this.layout.layoutBox)
      const d = this.treeScale.x,
        g = this.treeScale.y
      qv(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = Z()))
      const { target: v } = l
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = _n()),
          (this.projectionTransform = 'none'),
          this.scheduleRender())
        return
      }
      this.projectionDelta ||
        ((this.projectionDelta = _n()),
        (this.projectionDeltaWithTransform = _n()))
      const y = this.projectionTransform
      Mr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = mf(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== d ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', v)),
        nn.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack()
        l && l.scheduleRender()
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0)
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = _n()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l)
      const d = Z(),
        g = a ? a.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = g !== v,
        P = this.getStack(),
        m = !P || P.members.length <= 1,
        h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(Uy))
      this.animationProgress = 0
      let p
      ;(this.mixTargetDelta = (w) => {
        const S = w / 1e3
        xf(f.x, s.x, S),
          xf(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Lr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            By(this.relativeTarget, this.relativeTargetOrigin, d, S),
            p && xy(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = Z()),
            Oe(p, this.relativeTarget)),
          y &&
            ((this.animationValues = c), hy(c, u, this.latestValues, S, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(s) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          ($t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ue.update(() => {
          ;(Ui.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Ey(0, gf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l)
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation()
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      const s = this.getStack()
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(gf),
        this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const s = this.getLead()
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = s
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          a0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || Z()
          const f = De(this.layout.layoutBox.x)
          ;(a.x.min = s.target.x.min), (a.x.max = a.x.min + f)
          const d = De(this.layout.layoutBox.y)
          ;(a.y.min = s.target.y.min), (a.y.max = a.y.min + d)
        }
        Oe(l, a),
          zn(l, c),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new wy()),
        this.sharedNodes.get(s).add(l)
      const u = l.options.initialPromotionConfig
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      })
    }
    isLead() {
      const s = this.getStack()
      return s ? s.lead === this : !0
    }
    getLead() {
      var s
      const { layoutId: l } = this.options
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this
    }
    getPrevLead() {
      var s
      const { layoutId: l } = this.options
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0
    }
    getStack() {
      const { layoutId: s } = this.options
      if (s) return this.root.sharedNodes.get(s)
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack()
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l })
    }
    relegate() {
      const s = this.getStack()
      return s ? s.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options
      if (!s) return
      let l = !1
      const { latestValues: a } = s
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return
      const u = {}
      a.z && As('z', s, u, this.animationValues)
      for (let c = 0; c < Ls.length; c++)
        As(`rotate${Ls[c]}`, s, u, this.animationValues),
          As(`skew${Ls[c]}`, s, u, this.animationValues)
      s.render()
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c])
      s.scheduleRender()
    }
    getProjectionStyles(s) {
      var l, a
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) return My
      const u = { visibility: '' },
        c = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = Ii(s == null ? void 0 : s.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const f = this.getLead()
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {}
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = Ii(s == null ? void 0 : s.pointerEvents) || '')),
          this.hasProjected &&
            !tn(this.latestValues) &&
            ((y.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          y
        )
      }
      const d = f.animationValues || f.latestValues
      this.applyTransformsToTarget(),
        (u.transform = mf(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform))
      const { x: g, y: v } = this.projectionDelta
      ;(u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ''
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0)
      for (const y in po) {
        if (d[y] === void 0) continue
        const { correct: P, applyTo: m } = po[y],
          h = u.transform === 'none' ? d[y] : P(d[y], f)
        if (m) {
          const p = m.length
          for (let w = 0; w < p; w++) u[m[w]] = h
        } else u[y] = h
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Ii(s == null ? void 0 : s.pointerEvents) || ''
              : 'none'),
        u
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop()
      }),
        this.root.nodes.forEach(vf),
        this.root.sharedNodes.clear()
    }
  }
}
function Ay(e) {
  e.updateLayout()
}
function Ry(e) {
  var t
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source
    o === 'size'
      ? Fe((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = De(d)
          ;(d.min = r[f].min), (d.max = d.min + g)
        })
      : a0(o, n.layoutBox, r) &&
        Fe((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = De(r[f])
          ;(d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g))
        })
    const l = _n()
    Mr(l, r, n.layoutBox)
    const a = _n()
    s ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox)
    const u = !o0(l)
    let c = !1
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent()
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f
        if (d && g) {
          const v = Z()
          Lr(v, n.layoutBox, d.layoutBox)
          const y = Z()
          Lr(y, r, g.layoutBox),
            s0(v, y) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f))
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    })
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options
    r && r()
  }
  e.options.transition = void 0
}
function jy(e) {
  nn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function Vy(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Ny(e) {
  e.clearSnapshot()
}
function vf(e) {
  e.clearMeasurements()
}
function Dy(e) {
  e.isLayoutDirty = !1
}
function _y(e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform()
}
function yf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0)
}
function zy(e) {
  e.resolveTargetDelta()
}
function Oy(e) {
  e.calcProjection()
}
function Fy(e) {
  e.resetSkewAndRotation()
}
function Iy(e) {
  e.removeLeadSnapshot()
}
function xf(e, t, n) {
  ;(e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function wf(e, t, n, r) {
  ;(e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r))
}
function By(e, t, n, r) {
  wf(e.x, t.x, n.x, r), wf(e.y, t.y, n.y, r)
}
function Uy(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const $y = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Sf = (e) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  kf = Sf('applewebkit/') && !Sf('chrome/') ? Math.round : ge
function Cf(e) {
  ;(e.min = kf(e.min)), (e.max = kf(e.max))
}
function Hy(e) {
  Cf(e.x), Cf(e.y)
}
function a0(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !Dl(pf(t), pf(n), 0.2))
}
const Wy = l0({
    attachResizeListener: (e, t) => at(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Rs = { current: void 0 },
  u0 = l0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Rs.current) {
        const e = new Wy({})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Rs.current = e)
      }
      return Rs.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  Ky = {
    pan: { Feature: ly },
    drag: { Feature: sy, ProjectionNode: u0, MeasureLayout: n0 },
  },
  Fl = { current: null },
  c0 = { current: !1 }
function Gy() {
  if (((c0.current = !0), !!_a))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Fl.current = e.matches)
      e.addListener(t), t()
    } else Fl.current = !1
}
function Qy(e, t, n) {
  const { willChange: r } = t
  for (const i in t) {
    const o = t[i],
      s = n[i]
    if (me(o)) e.addValue(i, o), xo(r) && r.add(i)
    else if (me(s)) e.addValue(i, Xr(o, { owner: e })), xo(r) && r.remove(i)
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i)
        l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o)
      } else {
        const l = e.getStaticValue(i)
        e.addValue(i, Xr(l !== void 0 ? l : o, { owner: e }))
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i)
  return t
}
const Pf = new WeakMap(),
  Yy = [...kh, he, Ht],
  Xy = (e) => Yy.find(Sh(e)),
  f0 = Object.keys(Qr),
  Zy = f0.length,
  Tf = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  by = Ia.length
class Jy {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    l = {}
  ) {
    ;(this.resolveKeyframes = (d, g, v, y) =>
      new this.KeyframeResolver(d, g, v, y, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Za),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ))
      }),
      (this.scheduleRender = () => ue.render(this.render, !1, !0))
    const { latestValues: a, renderState: u } = s
    ;(this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Uo(n)),
      (this.isVariantNode = Z1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    )
    for (const d in f) {
      const g = f[d]
      a[d] !== void 0 && me(g) && (g.set(a[d], !1), xo(c) && c.add(d))
    }
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return {}
  }
  mount(t) {
    ;(this.current = t),
      Pf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      c0.current || Gy(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Fl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    Pf.delete(this.current),
      this.projection && this.projection.unmount(),
      $t(this.notifyUpdate),
      $t(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const t in this.events) this.events[t].clear()
    for (const t in this.features) this.features[t].unmount()
    this.current = null
  }
  bindToMotionValue(t, n) {
    const r = yn.has(t),
      i = n.on('change', (s) => {
        ;(this.latestValues[t] = s),
          this.props.onUpdate && ue.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0)
      }),
      o = n.on('renderRequest', this.scheduleRender)
    this.valueSubscriptions.set(t, () => {
      i(), o(), n.owner && n.stop()
    })
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current)
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l
    for (let a = 0; a < Zy; a++) {
      const u = f0[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: g,
        } = Qr[u]
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          g && (l = g))
    }
    if (
      (this.type === 'html' || this.type === 'svg') &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      )
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: g,
      } = n
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && Nn(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == 'string' ? u : 'both',
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: g,
      })
    }
    return l
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t]
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0))
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props)
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Z()
  }
  getStaticValue(t) {
    return this.latestValues[t]
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n
  }
  update(t, n) {
    ;(t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n)
    for (let r = 0; r < Tf.length; r++) {
      const i = Tf[r]
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i])
      const o = t['on' + i]
      o && (this.propEventSubscriptions[i] = this.on(i, o))
    }
    ;(this.prevMotionValues = Qy(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {}
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      )
    }
    const n = {}
    for (let r = 0; r < by; r++) {
      const i = Ia[r],
        o = this.props[i]
      ;(Gr(o) || o === !1) && (n[i] = o)
    }
    return n
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode()
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      )
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get())
  }
  removeValue(t) {
    this.values.delete(t)
    const n = this.valueSubscriptions.get(t)
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState)
  }
  hasValue(t) {
    return this.values.has(t)
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t]
    let r = this.values.get(t)
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Xr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    )
  }
  readValue(t, n) {
    var r
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options)
    return (
      i != null &&
        (typeof i == 'string' && (xh(i) || vh(i))
          ? (i = parseFloat(i))
          : !Xy(i) && Ht.test(n) && (i = Rh(t, n)),
        this.setBaseTarget(t, me(i) ? i.get() : i)),
      me(i) ? i.get() : i
    )
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n
  }
  getBaseTarget(t) {
    var n, r
    const { initial: i } = this.props,
      o =
        typeof i == 'string' || typeof i == 'object'
          ? (r = Ya(
              this.props,
              i,
              (n = this.presenceContext) === null || n === void 0
                ? void 0
                : n.custom
            )) === null || r === void 0
            ? void 0
            : r[t]
          : void 0
    if (i && o !== void 0) return o
    const s = this.getBaseTargetFromProps(this.props, t)
    return s !== void 0 && !me(s)
      ? s
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t]
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new su()), this.events[t].add(n)
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n)
  }
}
class d0 extends Jy {
  constructor() {
    super(...arguments), (this.KeyframeResolver = jh)
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t]
  }
}
function qy(e) {
  return window.getComputedStyle(e)
}
class e5 extends d0 {
  constructor() {
    super(...arguments), (this.type = 'html')
  }
  readValueFromInstance(t, n) {
    if (yn.has(n)) {
      const r = Ja(n)
      return (r && r.default) || 0
    } else {
      const r = qy(t),
        i = (th(n) ? r.getPropertyValue(n) : r[n]) || 0
      return typeof i == 'string' ? i.trim() : i
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return e0(t, n)
  }
  build(t, n, r, i) {
    Ha(t, n, r, i.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Qa(t, n, r)
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription)
    const { children: t } = this.props
    me(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`)
      }))
  }
  renderInstance(t, n, r, i) {
    sh(t, n, r, i)
  }
}
class t5 extends d0 {
  constructor() {
    super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1)
  }
  getBaseTargetFromProps(t, n) {
    return t[n]
  }
  readValueFromInstance(t, n) {
    if (yn.has(n)) {
      const r = Ja(n)
      return (r && r.default) || 0
    }
    return (n = lh.has(n) ? n : za(n)), t.getAttribute(n)
  }
  measureInstanceViewportBox() {
    return Z()
  }
  scrapeMotionValuesFromProps(t, n) {
    return uh(t, n, this)
  }
  build(t, n, r, i) {
    Ka(t, n, r, this.isSVGTag, i.transformTemplate)
  }
  renderInstance(t, n, r, i) {
    ah(t, n, r, i)
  }
  mount(t) {
    ;(this.isSVGTag = Ga(t.tagName)), super.mount(t)
  }
}
const n5 = (e, t) =>
    Ba(e)
      ? new t5(t, { enableHardwareAcceleration: !1 })
      : new e5(t, { enableHardwareAcceleration: !0 }),
  r5 = { layout: { ProjectionNode: u0, MeasureLayout: n0 } },
  i5 = { ...Bv, ...J2, ...Ky, ...r5 },
  Le = l2((e, t) => I2(e, t, i5, n5))
var h0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ef = ut.createContext && ut.createContext(h0),
  o5 = ['attr', 'size', 'title']
function s5(e, t) {
  if (e == null) return {}
  var n = l5(e, t),
    r,
    i
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r])
  }
  return n
}
function l5(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    o
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function So() {
  return (
    (So = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    So.apply(this, arguments)
  )
}
function Mf(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Mf(Object(n), !0).forEach(function (r) {
          a5(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Mf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function a5(e, t, n) {
  return (
    (t = u5(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function u5(e) {
  var t = c5(e, 'string')
  return typeof t == 'symbol' ? t : String(t)
}
function c5(e, t) {
  if (typeof e != 'object' || e === null) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (typeof r != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function p0(e) {
  return (
    e &&
    e.map((t, n) =>
      ut.createElement(t.tag, ko({ key: n }, t.attr), p0(t.child))
    )
  )
}
function H(e) {
  return (t) =>
    ut.createElement(f5, So({ attr: ko({}, e.attr) }, t), p0(e.child))
}
function f5(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      s = s5(e, o5),
      l = i || n.size || '1em',
      a
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + ' ' : '') + e.className),
      ut.createElement(
        'svg',
        So(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          s,
          {
            className: a,
            style: ko(ko({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        o && ut.createElement('title', null, o),
        e.children
      )
    )
  }
  return Ef !== void 0
    ? ut.createElement(Ef.Consumer, null, (n) => t(n))
    : t(h0)
}
function d5(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-106v48a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h33.51L91.76,100.24a6,6,0,0,1,8.48-8.48L154,145.51V112a6,6,0,0,1,12,0Z',
        },
        child: [],
      },
    ],
  })(e)
}
function h5(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm36.24-62.24a6,6,0,1,1-8.48,8.48L102,110.49V144a6,6,0,0,1-12,0V96a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H110.49Z',
        },
        child: [],
      },
    ],
  })(e)
}
function p5(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M228.81,114.89,165.36,91.81a1.94,1.94,0,0,1-1.17-1.17L141.11,27.19a13.95,13.95,0,0,0-26.22,0L91.81,90.64a1.94,1.94,0,0,1-1.17,1.17L27.19,114.89a13.95,13.95,0,0,0,0,26.22l63.45,23.08a1.94,1.94,0,0,1,1.17,1.17l23.08,63.45a13.95,13.95,0,0,0,26.22,0l23.08-63.45h0a1.94,1.94,0,0,1,1.17-1.17l63.45-23.08a13.95,13.95,0,0,0,0-26.22Zm-4.1,15-63.45,23.07a14,14,0,0,0-8.35,8.35l-23.07,63.45a2,2,0,0,1-3.68,0l-23.07-63.45a14,14,0,0,0-8.35-8.35L31.29,129.84a2,2,0,0,1,0-3.68l63.45-23.07a14,14,0,0,0,8.35-8.35l23.07-63.45a2,2,0,0,1,3.68,0l23.07,63.45a14,14,0,0,0,8.35,8.35l63.45,23.07a2,2,0,0,1,0,3.68Z',
        },
        child: [],
      },
    ],
  })(e)
}
function m5(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M234,92.55s-.05,0-.09-.07l-104-56a4,4,0,0,0-3.8,0l-104,56-.11.08A4,4,0,0,0,20,96v64a4,4,0,0,0,2,3.45.71.71,0,0,0,.09.07l104,56a4,4,0,0,0,3.8,0l104-56a.27.27,0,0,0,.08-.07,4,4,0,0,0,2-3.45V96A4,4,0,0,0,234,92.55Zm-6,60.75L181,128l47-25.3Zm-55.43-29.84L132,101.61V46.7L223.56,96Zm-44.57,24L91.87,128,128,108.54,164.13,128ZM124,46.7v54.91L83.43,123.46,32.44,96Zm-96,56L75,128,28,153.3Zm55.43,29.84L124,154.39V209.3L32.44,160ZM132,209.3V154.39l40.57-21.85,51,27.46Z',
        },
        child: [],
      },
    ],
  })(e)
}
const g5 = ({ isDesktop: e }) => {
    const t = {
      initial: { fontSize: e ? '50px' : '1px' },
      animate: { fontSize: e ? '5rem' : '2rem' },
    }
    return x.jsx('div', {
      className: 'px-2 md:max-lg:px-5',
      children: x.jsxs(Le.div, {
        initial: { scaleY: 0, scaleX: 0, width: '200%' },
        animate: { scaleY: 1, scaleX: 1, width: '100%' },
        transition: { duration: 1, delay: 0 },
        className:
          'w-full h-24 md:h-34 m-1 font-[Canopee] overflow-hidden flex justify-between items-center border-b-4 border-t-4 dark:border-white border-black  ',
        children: [
          x.jsx(Le.h1, {
            initial: t.initial,
            animate: t.animate,
            transition: { duration: 1, delay: 1 },
            className: 'font-bold tracking-[.5rem] hover:text-white ',
            children: 'Portfolio',
          }),
          x.jsx('div', {
            children: x.jsx(p5, { className: 'text-5xl hover:text-white' }),
          }),
        ],
      }),
    })
  },
  wn = ({ isDesktop: e, title: t, content: n, isMaximised: r }) => {
    const i = {
        initial: { fontSize: e ? '50px' : '25px' },
        animate: { fontSize: e ? '3.5rem' : '2rem' },
      },
      [o, s] = A.useState(r),
      l = o ? 'flex' : 'none'
    return x.jsxs('div', {
      className: 'px-2 md:max-lg:px-5 group',
      children: [
        x.jsxs(Le.div, {
          initial: { scaleY: 0, scaleX: 0, width: '200%' },
          animate: { scaleY: 1, scaleX: 1, width: '100%' },
          transition: { duration: 1, delay: 0 },
          className:
            ' w-full h-22 md:max-lg:h-28 lg:h-28 m-1 flex  justify-between items-center border-b-4 border-t-4 border-black dark:border-white overflow-hidden ',
          children: [
            x.jsx(Le.h1, {
              initial: i.initial,
              animate: i.animate,
              transition: { duration: 1, delay: 1 },
              className: 'font-[Canopee] hover:text-white  ',
              children: t || 'Title Here',
            }),
            x.jsx('div', {
              className: '',
              children: x.jsx('button', {
                onClick: () => {
                  s((a) => !a)
                },
                children: o
                  ? x.jsx(h5, { className: 'text-5xl hover:text-white' })
                  : x.jsx(d5, { className: 'text-5xl hover:text-white' }),
              }),
            }),
          ],
        }),
        x.jsx('div', {
          style: { display: l },
          className: ' w-full my-1 py-2 md:py-5 overflow-hidden ',
          children: n,
        }),
        x.jsx(Le.div, {
          style: { display: l },
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          transition: { duration: 1 },
          className: 'ml-2 h-[2px] bg-black',
        }),
      ],
    })
  }
var lu = {}
lu.match = k5
lu.parse = m0
var v5 = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
  y5 = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
  x5 = /^(?:(min|max)-)?(.+)/,
  w5 = /(em|rem|px|cm|mm|in|pt|pc)?$/,
  S5 = /(dpi|dpcm|dppx)?$/
function k5(e, t) {
  return m0(e).some(function (n) {
    var r = n.inverse,
      i = n.type === 'all' || t.type === n.type
    if ((i && r) || !(i || r)) return !1
    var o = n.expressions.every(function (s) {
      var l = s.feature,
        a = s.modifier,
        u = s.value,
        c = t[l]
      if (!c) return !1
      switch (l) {
        case 'orientation':
        case 'scan':
          return c.toLowerCase() === u.toLowerCase()
        case 'width':
        case 'height':
        case 'device-width':
        case 'device-height':
          ;(u = Rf(u)), (c = Rf(c))
          break
        case 'resolution':
          ;(u = Af(u)), (c = Af(c))
          break
        case 'aspect-ratio':
        case 'device-aspect-ratio':
        case 'device-pixel-ratio':
          ;(u = Lf(u)), (c = Lf(c))
          break
        case 'grid':
        case 'color':
        case 'color-index':
        case 'monochrome':
          ;(u = parseInt(u, 10) || 1), (c = parseInt(c, 10) || 0)
          break
      }
      switch (a) {
        case 'min':
          return c >= u
        case 'max':
          return c <= u
        default:
          return c === u
      }
    })
    return (o && !r) || (!o && r)
  })
}
function m0(e) {
  return e.split(',').map(function (t) {
    t = t.trim()
    var n = t.match(v5),
      r = n[1],
      i = n[2],
      o = n[3] || '',
      s = {}
    return (
      (s.inverse = !!r && r.toLowerCase() === 'not'),
      (s.type = i ? i.toLowerCase() : 'all'),
      (o = o.match(/\([^\)]+\)/g) || []),
      (s.expressions = o.map(function (l) {
        var a = l.match(y5),
          u = a[1].toLowerCase().match(x5)
        return { modifier: u[1], feature: u[2], value: a[2] }
      })),
      s
    )
  })
}
function Lf(e) {
  var t = Number(e),
    n
  return t || ((n = e.match(/^(\d+)\s*\/\s*(\d+)$/)), (t = n[1] / n[2])), t
}
function Af(e) {
  var t = parseFloat(e),
    n = String(e).match(S5)[1]
  switch (n) {
    case 'dpcm':
      return t / 2.54
    case 'dppx':
      return t * 96
    default:
      return t
  }
}
function Rf(e) {
  var t = parseFloat(e),
    n = String(e).match(w5)[1]
  switch (n) {
    case 'em':
      return t * 16
    case 'rem':
      return t * 16
    case 'cm':
      return (t * 96) / 2.54
    case 'mm':
      return (t * 96) / 2.54 / 10
    case 'in':
      return t * 96
    case 'pt':
      return t * 72
    case 'pc':
      return (t * 72) / 12
    default:
      return t
  }
}
var C5 = lu.match,
  jf = typeof window < 'u' ? window.matchMedia : null
function P5(e, t, n) {
  var r = this,
    i
  jf && !n && (i = jf.call(window, e)),
    i
      ? ((this.matches = i.matches), (this.media = i.media), i.addListener(l))
      : ((this.matches = C5(e, t)), (this.media = e)),
    (this.addListener = o),
    (this.removeListener = s),
    (this.dispose = a)
  function o(u) {
    i && i.addListener(u)
  }
  function s(u) {
    i && i.removeListener(u)
  }
  function l(u) {
    ;(r.matches = u.matches), (r.media = u.media)
  }
  function a() {
    i && i.removeListener(l)
  }
}
function T5(e, t, n) {
  return new P5(e, t, n)
}
var E5 = T5
const M5 = Il(E5)
var L5 = /[A-Z]/g,
  A5 = /^ms-/,
  js = {}
function R5(e) {
  return '-' + e.toLowerCase()
}
function g0(e) {
  if (js.hasOwnProperty(e)) return js[e]
  var t = e.replace(L5, R5)
  return (js[e] = A5.test(t) ? '-' + t : t)
}
function j5(e, t) {
  if (e === t) return !0
  if (!e || !t) return !1
  const n = Object.keys(e),
    r = Object.keys(t),
    i = n.length
  if (r.length !== i) return !1
  for (let o = 0; o < i; o++) {
    const s = n[o]
    if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) return !1
  }
  return !0
}
var v0 = { exports: {} },
  V5 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  N5 = V5,
  D5 = N5
function y0() {}
function x0() {}
x0.resetWarningCache = y0
var _5 = function () {
  function e(r, i, o, s, l, a) {
    if (a !== D5) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      )
      throw ((u.name = 'Invariant Violation'), u)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: x0,
    resetWarningCache: y0,
  }
  return (n.PropTypes = n), n
}
v0.exports = _5()
var z5 = v0.exports
const O = Il(z5),
  ye = O.oneOfType([O.string, O.number]),
  au = {
    all: O.bool,
    grid: O.bool,
    aural: O.bool,
    braille: O.bool,
    handheld: O.bool,
    print: O.bool,
    projection: O.bool,
    screen: O.bool,
    tty: O.bool,
    tv: O.bool,
    embossed: O.bool,
  },
  w0 = {
    orientation: O.oneOf(['portrait', 'landscape']),
    scan: O.oneOf(['progressive', 'interlace']),
    aspectRatio: O.string,
    deviceAspectRatio: O.string,
    height: ye,
    deviceHeight: ye,
    width: ye,
    deviceWidth: ye,
    color: O.bool,
    colorIndex: O.bool,
    monochrome: O.bool,
    resolution: ye,
    type: Object.keys(au),
  },
  { type: M4, ...O5 } = w0,
  S0 = {
    minAspectRatio: O.string,
    maxAspectRatio: O.string,
    minDeviceAspectRatio: O.string,
    maxDeviceAspectRatio: O.string,
    minHeight: ye,
    maxHeight: ye,
    minDeviceHeight: ye,
    maxDeviceHeight: ye,
    minWidth: ye,
    maxWidth: ye,
    minDeviceWidth: ye,
    maxDeviceWidth: ye,
    minColor: O.number,
    maxColor: O.number,
    minColorIndex: O.number,
    maxColorIndex: O.number,
    minMonochrome: O.number,
    maxMonochrome: O.number,
    minResolution: ye,
    maxResolution: ye,
    ...O5,
  },
  F5 = { ...au, ...S0 }
var I5 = { all: F5, types: au, matchers: w0, features: S0 }
const B5 = (e) => `not ${e}`,
  U5 = (e, t) => {
    const n = g0(e)
    return (
      typeof t == 'number' && (t = `${t}px`),
      t === !0 ? n : t === !1 ? B5(n) : `(${n}: ${t})`
    )
  },
  $5 = (e) => e.join(' and '),
  H5 = (e) => {
    const t = []
    return (
      Object.keys(I5.all).forEach((n) => {
        const r = e[n]
        r != null && t.push(U5(n, r))
      }),
      $5(t)
    )
  },
  W5 = A.createContext(void 0),
  K5 = (e) => e.query || H5(e),
  Vf = (e) =>
    e ? Object.keys(e).reduce((n, r) => ((n[g0(r)] = e[r]), n), {}) : void 0,
  k0 = () => {
    const e = A.useRef(!1)
    return (
      A.useEffect(() => {
        e.current = !0
      }, []),
      e.current
    )
  },
  G5 = (e) => {
    const t = A.useContext(W5),
      n = () => Vf(e) || Vf(t),
      [r, i] = A.useState(n)
    return (
      A.useEffect(() => {
        const o = n()
        j5(r, o) || i(o)
      }, [e, t]),
      r
    )
  },
  Q5 = (e) => {
    const t = () => K5(e),
      [n, r] = A.useState(t)
    return (
      A.useEffect(() => {
        const i = t()
        n !== i && r(i)
      }, [e]),
      n
    )
  },
  Y5 = (e, t) => {
    const n = () => M5(e, t || {}, !!t),
      [r, i] = A.useState(n),
      o = k0()
    return (
      A.useEffect(() => {
        if (o) {
          const s = n()
          return (
            i(s),
            () => {
              s && s.dispose()
            }
          )
        }
      }, [e, t]),
      r
    )
  },
  X5 = (e) => {
    const [t, n] = A.useState(e.matches)
    return (
      A.useEffect(() => {
        const r = (i) => {
          n(i.matches)
        }
        return (
          e.addListener(r),
          n(e.matches),
          () => {
            e.removeListener(r)
          }
        )
      }, [e]),
      t
    )
  },
  Z5 = (e, t, n) => {
    const r = G5(t),
      i = Q5(e)
    if (!i) throw new Error('Invalid or missing MediaQuery!')
    const o = Y5(i, r),
      s = X5(o),
      l = k0()
    return (
      A.useEffect(() => {
        l && n && n(s)
      }, [s]),
      A.useEffect(
        () => () => {
          o && o.dispose()
        },
        []
      ),
      s
    )
  },
  b5 = () => {
    const e = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ],
      t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    return x.jsxs('div', {
      className:
        'w-full h-full hidden xl:flex justify-center items-center border-2 border-black rounded-full overflow-hidden ',
      children: [
        e.map((n, r) =>
          x.jsx(x.Fragment, {
            children: x.jsx('div', {
              className:
                'w-[2px] hover:bg-white  hover:rotate-[-6deg]  m-[3px] h-full bg-black',
            }),
          })
        ),
        t.map((n, r) =>
          x.jsx(x.Fragment, {
            children: x.jsx('div', {
              className: 'w-[2px]  hover:bg-white  m-[3px] h-full bg-black',
            }),
          })
        ),
        e.map((n, r) =>
          x.jsx(x.Fragment, {
            children: x.jsx('div', {
              className:
                'w-[2px]  hover:bg-white  hover:rotate-[6deg]  m-[3px] h-full bg-black',
            }),
          })
        ),
      ],
    })
  },
  J5 = () =>
    x.jsxs(Le.div, {
      initial: { scaleX: 0, scaleY: 0 },
      whileInView: { scaleX: 1, scaleY: 1 },
      transition: { duration: 0.4 },
      className: 'w-full flex font-[Canopee] p-4 sm:px-10 py-12',
      children: [
        x.jsxs('div', {
          className: 'text-3xl sm:max-xl:text-5xl px-12 xl:text-6xl flex-grow',
          children: [
            x.jsx('h1', {
              className: 'border-b-2 w-fit hover:text-white border-black',
              children: "I'M AAYUSH GUPTA /",
            }),
            x.jsx('h1', {
              className: 'border-b-2 w-fit hover:text-white border-black',
              children: 'A Fullstack Developer /',
            }),
            x.jsx('h1', {
              className: 'border-b-2 w-fit hover:text-white border-black',
              children: 'A Software Engineer /',
            }),
            x.jsx('h1', {
              className: 'border-b-2 w-fit hover:text-white border-black',
              children: 'An Avid Learner /',
            }),
            x.jsx('h1', {
              className: 'border-b-2 w-fit hover:text-white border-black',
              children: 'And much more...',
            }),
          ],
        }),
        x.jsx(Le.div, {
          initial: { height: 0 },
          whileInView: { height: '300px' },
          transition: { delay: 0.5 },
          className: 'w-[2px] hidden md:flex mx-4 bg-black',
        }),
        x.jsx('div', {
          className: 'hidden lg:flex h-full',
          children: x.jsx(b5, {}),
        }),
      ],
    })
function q5(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z',
        },
        child: [],
      },
    ],
  })(e)
}
function e4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z',
        },
        child: [],
      },
    ],
  })(e)
}
function t4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z',
        },
        child: [],
      },
    ],
  })(e)
}
function n4(e) {
  return H({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z',
        },
        child: [],
      },
    ],
  })(e)
}
function r4(e) {
  return H({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z',
        },
        child: [],
      },
    ],
  })(e)
}
function i4(e) {
  return H({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z',
        },
        child: [],
      },
    ],
  })(e)
}
function o4(e) {
  return H({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z',
        },
        child: [],
      },
    ],
  })(e)
}
function s4(e) {
  return H({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z',
        },
        child: [],
      },
    ],
  })(e)
}
function l4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M11.8988601,24 C11.5774615,24 11.2582643,23.9156879 10.9764902,23.7534477 L8.04053599,22.0152536 C7.60202502,21.7700221 7.81599724,21.6832885 7.96062661,21.6333176 C8.54530789,21.4285911 8.66396121,21.3823625 9.28804684,21.0279435 C9.35364738,20.9905204 9.43950043,21.0037286 9.50664192,21.043353 L11.7621556,22.3817801 C11.843606,22.4258073 11.9591774,22.4258073 12.034684,22.3817801 L20.8291183,17.3054433 C20.9105686,17.2592148 20.9634012,17.1645563 20.9634012,17.0676964 L20.9634012,6.91942563 C20.9634012,6.81816306 20.9105686,6.72790729 20.8273572,6.677276 L12.0364451,1.60534197 C11.9549948,1.55691204 11.8471281,1.55691204 11.7656778,1.60534197 L2.97652685,6.677276 C2.89133421,6.72570593 2.83718075,6.82036442 2.83718075,6.91722427 L2.83718075,17.0654951 C2.83718075,17.1623549 2.89001339,17.254812 2.97366508,17.3010406 L5.3819532,18.6923003 C6.6895612,19.3461043 7.48865497,18.5756282 7.48865497,17.8007494 L7.48865497,7.78456021 C7.48865497,7.64147179 7.60092434,7.53140378 7.74401276,7.53140378 L8.85790105,7.53140378 C8.99658675,7.53140378 9.11105748,7.64147179 9.11105748,7.78456021 L9.11105748,17.8051521 C9.11105748,19.5486294 8.16006985,20.5502483 6.50684829,20.5502483 C5.99833407,20.5502483 5.59768651,20.5502483 4.4793955,19.9999083 L2.17236995,18.6702867 C1.60221764,18.3400826 1.25,17.7237018 1.25,17.0654951 L1.25,6.91722427 C1.25,6.25681619 1.60221764,5.64043532 2.17236995,5.314634 L10.9756096,0.236095888 C11.5325538,-0.0786986292 12.2722108,-0.0786986292 12.8247522,0.236095888 L21.6169851,5.31683536 C22.184936,5.64483804 22.539355,6.25901755 22.539355,6.91942563 L22.539355,17.0676964 C22.539355,17.7259031 22.184936,18.3400826 21.6169851,18.6702867 L12.8247522,23.7488248 C12.5429781,23.9117255 12.2237809,23.9953771 11.8979796,23.9953771 L11.8988601,24 Z M14.6153387,17.007159 C10.7673609,17.007159 9.9605624,15.2407875 9.9605624,13.7592721 C9.9605624,13.618385 10.0741526,13.5061157 10.2152598,13.5061157 L11.3511617,13.5061157 C11.4766392,13.5061157 11.5823045,13.5974721 11.6021167,13.7214087 C11.7738228,14.8788839 12.2845384,15.4626847 14.6113762,15.4626847 C16.4649216,15.4626847 17.2530085,15.0439859 17.2530085,14.0610786 C17.2530085,13.495329 17.0284698,13.0748692 14.1490906,12.7930951 C11.7408024,12.5553482 10.2526829,12.0248203 10.2526829,10.0986301 C10.2526829,8.32433374 11.7496079,7.26768082 14.2569572,7.26768082 C17.072497,7.26768082 18.4681594,8.24508478 18.6442682,10.3451825 C18.6508723,10.4178273 18.624456,10.4882709 18.576026,10.5411035 C18.5275961,10.5917348 18.4593539,10.6225539 18.3889104,10.6225539 L17.2464044,10.6225539 C17.127531,10.6225539 17.0240671,10.5389022 16.9998521,10.4244314 C16.7246821,9.20707921 16.0598713,8.81743844 14.2525545,8.81743844 C12.2295044,8.81743844 11.9939589,9.52187372 11.9939589,10.0502002 C11.9939589,10.690796 12.2713303,10.8779116 15.001017,11.2389347 C17.7042874,11.5977564 18.9876804,12.1040693 18.9876804,14.0038432 C18.9876804,15.9190266 17.3894929,17.0175054 14.6025708,17.0175054 L14.6153387,17.007159 Z',
        },
        child: [],
      },
    ],
  })(e)
}
function a4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M15 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM2.5 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5Zm0 14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 21Zm12.5-14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 6.5Z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M5.75 16.75A.75.75 0 0 1 5 16V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75Z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M17.5 8.75v-1H19v1a3.75 3.75 0 0 1-3.75 3.75h-7a1.75 1.75 0 0 0-1.75 1.75H5A3.25 3.25 0 0 1 8.25 11h7a2.25 2.25 0 0 0 2.25-2.25Z',
        },
        child: [],
      },
    ],
  })(e)
}
function u4(e) {
  return H({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
        child: [],
      },
      {
        tag: 'path',
        attr: { d: 'M12 12l-8 -8v16l16 -16v16l-4 -4' },
        child: [],
      },
      { tag: 'path', attr: { d: 'M20 12l-8 8l-4 -4' }, child: [] },
    ],
  })(e)
}
function c4(e) {
  return H({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
        child: [],
      },
      { tag: 'path', attr: { d: 'M12 13h7.5' }, child: [] },
      { tag: 'path', attr: { d: 'M9.424 7.268l4.999 -4.999' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313',
        },
        child: [],
      },
    ],
  })(e)
}
function f4(e) {
  return H({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M16.54 7c-.805 -2.365 -2.536 -4 -4.54 -4c-2.774 0 -5.023 2.632 -5.023 6.496c0 1.956 1.582 4.727 2.512 6',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M4.711 11.979c-1.656 1.877 -2.214 4.185 -1.211 5.911c1.387 2.39 5.138 2.831 8.501 .9c1.703 -.979 2.875 -3.362 3.516 -4.798',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M15.014 19.99c2.511 0 4.523 -.438 5.487 -2.1c1.387 -2.39 -.215 -5.893 -3.579 -7.824c-1.702 -.979 -4.357 -1.235 -5.927 -1.07',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M10.493 9.862c.48 .276 1.095 .112 1.372 -.366a1 1 0 0 0 -.367 -1.365a1.007 1.007 0 0 0 -1.373 .366a1 1 0 0 0 .368 1.365z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: { d: 'M9.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' },
        child: [],
      },
      {
        tag: 'path',
        attr: { d: 'M15.5 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' },
        child: [],
      },
    ],
  })(e)
}
function d4(e) {
  return H({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
        child: [],
      },
      {
        tag: 'path',
        attr: { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' },
        child: [],
      },
      { tag: 'path', attr: { d: 'M11 11h1l3 -4z' }, child: [] },
      { tag: 'path', attr: { d: 'M12 13h1l-4 4z' }, child: [] },
    ],
  })(e)
}
function h4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74.86.86 0 0 0-.66-.74 3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41 2.37 2.37 0 0 0 .62 2 2 2 0 0 0 1.43.63 8.05 8.05 0 0 1 .3-.81zM10 8.58a.36.36 0 0 1-.09-.23.19.19 0 0 1 .09-.12.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11 1 1 0 0 0 .37.16 2.21 2.21 0 0 0 2.5-.8.41.41 0 0 0 0-.35.59.59 0 0 0-.25-.37zm6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48 1.79 1.79 0 0 0 .15.31 3.72 3.72 0 0 0 .16-2.13 7.51 7.51 0 0 1-.07-1.05 6 6 0 0 1 .14-.93zm-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M17 4.88a6.06 6.06 0 0 1 1.37 2.57.71.71 0 0 1 0 .15 5.67 5.67 0 0 1-.09 1.06 7.11 7.11 0 0 0-.09.86 6.61 6.61 0 0 0 .07 1 4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8 7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13 19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35 9.38 9.38 0 0 0-1.45-.14 4.8 4.8 0 0 0-2.46.62 12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83 1.71 1.71 0 0 0 1.69-.37 2 2 0 0 0 1 .59 3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36 1 1 0 0 1 0 .13 3 3 0 0 0 .71 1.24 2.08 2.08 0 0 0 1.49.56 3 3 0 0 0 .7-.08 3.27 3.27 0 0 0 2.21-1.27 7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 0 1-1.8.34 2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3 3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06 2.56 2.56 0 0 1-1.78.66 3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24 2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63 1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66 5.58 5.58 0 0 1 1.4.18 7.51 7.51 0 0 1 2.5-.4 5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61 6.28 6.28 0 0 0-1.13-1.94 5.41 5.41 0 0 0-4.13-2 3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19 5.73 5.73 0 0 1-.29 4.09 3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07 1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09 22.22 22.22 0 0 0 .22 4.9 1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'm18 14.33-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12 4.29 4.29 0 0 0 1.38-.29 3 3 0 0 0 .79-.52 3.47 3.47 0 0 1-2.43-.05z',
        },
        child: [],
      },
    ],
  })(e)
}
function p4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z',
        },
        child: [],
      },
    ],
  })(e)
}
function m4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12 17C14.2091 17 16 15.2091 16 13H14C14 14.1046 13.1046 15 12 15 10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17ZM6.5 2C4.01472 2 2 4.01472 2 6.5 2 7.85729 2.60121 9.07332 3.54934 9.89751 3.19384 10.8656 3 11.911 3 13 3 17.9706 7.02944 22 12 22 16.9706 22 21 17.9706 21 13 21 11.911 20.8062 10.8656 20.4507 9.89751 21.3988 9.07332 22 7.85729 22 6.5 22 4.01472 19.9853 2 17.5 2 15.8737 2 14.4505 2.8624 13.6601 4.15297 13.1215 4.05246 12.5665 4 12 4 11.4335 4 10.8785 4.05246 10.3399 4.15297 9.5495 2.8624 8.12635 2 6.5 2ZM4 6.5C4 5.11929 5.11929 4 6.5 4 7.58033 4 8.50304 4.68577 8.8517 5.64896L9.1696 6.52718 10.0675 6.26991C10.6801 6.09435 11.3282 6 12 6 12.6718 6 13.3199 6.09435 13.9325 6.26991L14.8304 6.52718 15.1483 5.64896C15.497 4.68577 16.4197 4 17.5 4 18.8807 4 20 5.11929 20 6.5 20 7.43301 19.4894 8.24804 18.7275 8.67859L17.9141 9.13832 18.3176 9.98107C18.7547 10.8939 19 11.9169 19 13 19 16.866 15.866 20 12 20 8.13401 20 5 16.866 5 13 5 11.9169 5.24529 10.8939 5.6824 9.98107L6.08595 9.13832 5.27248 8.6786C4.51064 8.24805 4 7.43301 4 6.5Z',
        },
        child: [],
      },
    ],
  })(e)
}
const g4 = () =>
  x.jsxs(Le.div, {
    initial: { scaleX: 0, scaleY: 0 },
    whileInView: { scaleX: 1, scaleY: 1 },
    transition: { duration: 0.4 },
    className:
      'w-full flex-col sm:flex-row flex justify-between items-center p-5 sm:max-md:p-9 xl:py-12 xl:px-20 ',
    children: [
      x.jsx('div', {
        className: 'flex items-center justify-center ',
        children: x.jsxs('div', {
          className: 'text-4xl sm:max-md:5xl xl:text-7xl',
          children: [
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(p4, {}), 'TypeScript'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(i4, {}), ' MongoDB'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(h4, {}), 'PostgreSQL'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(r4, {}), 'Express'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(t4, {}), ' React'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(l4, {}), ' NodeJS'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(f4, {}), 'Redux Toolkit'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(e4, {}), 'Docker'],
            }),
          ],
        }),
      }),
      x.jsx(Le.div, {
        initial: { height: 0 },
        whileInView: { height: '500px' },
        transition: { delay: 0.5 },
        className:
          'w-[6px] hidden sm:flex md:max-xl:m-0  bg-lime-500 dark:bg-lime-400',
      }),
      x.jsx('div', {
        className: 'flex gap-5  sm:max-xl:mr-5 ',
        children: x.jsxs('div', {
          className:
            'text-4xl sm:max-md:5xl xl:text-7xl my-12 xl:my:8 font-[Canopee] ',
          children: [
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(n4, {}), 'C++'],
            }),
            x.jsxs('h1', {
              className: 'flex  items-center gap-5',
              children: [x.jsx(a4, {}), 'Git'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(d4, {}), 'Socket.io'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(u4, {}), 'Framer Motion'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(s4, {}), 'Prisma'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(o4, {}), 'Postman'],
            }),
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(m4, {}), 'Zustand'],
            }),
            ' ',
            x.jsxs('h1', {
              className: 'flex py-1 items-center gap-5',
              children: [x.jsx(q5, {}), 'AWS'],
            }),
            ' ',
          ],
        }),
      }),
    ],
  })
function $i(e) {
  return H({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z',
        },
        child: [],
      },
    ],
  })(e)
}
const v4 = () => {
    const e = [
      {
        title: 'Responsive Web Design',
        link: 'https://freecodecamp.org/certification/Kamehamehaa/responsive-web-design',
      },
      {
        title: 'JavaScript Algorithms and Data Structures ',
        link: 'https://freecodecamp.org/certification/Kamehamehaa/javascript-algorithms-and-data-structures-v8',
      },
      {
        title: 'Front End Development Libraries',
        link: 'https://freecodecamp.org/certification/Kamehamehaa/front-end-development-libraries',
      },
      {
        title: 'Back End Development and APIs ',
        link: 'https://freecodecamp.org/certification/Kamehamehaa/back-end-development-and-apis',
      },
      {
        title: 'EF SET English Certificate 79/100 (C2 Proficient)',
        link: 'https://www.efset.org/cert/8gYArV',
      },
    ]
    return x.jsx('div', {
      className:
        'text-xl sm:max-xl:text-2xl xl:text-3xl  font-[Canopee] px-4 sm:px-10 flex flex-col sm:flex-row sm:items-center flex-wrap ',
      children: e.map((t, n) =>
        x.jsxs(x.Fragment, {
          children: [
            x.jsxs('li', {
              className:
                'xl:p-4 p-2 group m-1 hover:text-white list-decimal border-t-2 border-b-2 border-black',
              children: [
                t.title,
                x.jsx('a', {
                  href: t.link,
                  target: '_blank',
                  children: x.jsx($i, {
                    className:
                      'rounded-full hover:text-black  hover:bg-white inline mx-2 ',
                  }),
                }),
              ],
            }),
            x.jsx(Le.div, {
              initial: { height: 0 },
              whileInView: { height: '50px' },
              transition: { delay: 0.5 },
              className: 'w-[2px] mx-4 hidden sm:flex bg-black ',
            }),
          ],
        })
      ),
    })
  },
  y4 = () => {
    const e = [
        {
          title: 'JavaSript DSA Certification Projects',
          link: 'https://www.freecodecamp.org/certification/Kamehamehaa/javascript-algorithms-and-data-structures-v8',
        },
        {
          title: 'Back-End Development & APIs Certification Projects',
          link: 'https://www.freecodecamp.org/certification/Kamehamehaa/back-end-development-and-apis',
        },
        {
          title: 'Drum Pad ',
          link: 'https://github.com/kamehamehaa0000/Drum-Machine-with-React',
        },
        {
          title: 'JS Calculator ',
          link: 'https://github.com/kamehamehaa0000/JS-Calculator-with-React',
        },
        {
          title: 'Markdown Preview App',
          link: 'https://github.com/kamehamehaa0000/Markdown-Preview-with-React/blob/main/README.md',
        },
        {
          title: 'Pomodoro / 25+5 Clock App',
          link: 'https://github.com/kamehamehaa0000/25-5-Clock-with-React',
        },
        {
          title: 'Random Quote Generator',
          link: 'https://github.com/kamehamehaa0000/Random-Quote-Generator-with-React-/blob/main/README.md',
        },
      ],
      t = [
        {
          title: 'Restaurant Reservation Site',
          link: 'https://github.com/kamehamehaa0000/Restaurant-Reservation-Fullstack-Mini-Project/tree/main',
        },
      ],
      n = [
        {
          title: 'Audio Streaming Platform',
          link: 'https://github.com/kamehamehaa0000/Fullstack-Spotify-Clone',
        },
        {
          title: 'Backend for Video Platform',
          link: 'https://github.com/kamehamehaa0000/Video-Platform-backendProject',
        },
      ]
    return x.jsxs('div', {
      className:
        ' text-xl sm:max-xl:text-2xl xl:text-3xl  w-full font-[Canopee] px-4 xl:px-10 flex flex-col sm:max-xl:flex-row xl:flex-row items-center gap-5 xl:gap-10 flex-wrap ',
      children: [
        x.jsx('div', {
          className: 'w-full sm:w-1/2 ',
          children: e.map((r, i) =>
            x.jsx(x.Fragment, {
              children: x.jsxs('li', {
                className:
                  'p-4 group m-1 hover:text-white list-decimal border-t-2 border-b-2 border-black',
                children: [
                  r.title,
                  x.jsx('a', {
                    href: r.link,
                    target: '_blank',
                    children: x.jsx($i, {
                      className:
                        'rounded-full hover:text-black  hover:bg-white inline mx-2 ',
                    }),
                  }),
                ],
              }),
            })
          ),
        }),
        x.jsx(Le.div, {
          initial: { height: 0 },
          whileInView: { height: '500px' },
          transition: { delay: 0.5 },
          className: 'w-[2px] hidden sm:flex sm:max-xl:mx-2 xl:4 bg-black',
        }),
        x.jsxs('div', {
          className: 'xl:p-5 sm:max-xl:flex-grow',
          children: [
            x.jsxs('div', {
              className: 'xl:p-5',
              children: [
                x.jsx('h1', { children: 'Work In progress' }),
                n.map((r, i) =>
                  x.jsx(x.Fragment, {
                    children: x.jsxs('li', {
                      className:
                        'p-4 group m-1 hover:text-white list-decimal border-t-2 border-b-2 border-black',
                      children: [
                        r.title,
                        x.jsx('a', {
                          href: r.link,
                          target: '_blank',
                          children: x.jsx($i, {
                            className:
                              'rounded-full hover:text-black  hover:bg-white inline mx-2 ',
                          }),
                        }),
                      ],
                    }),
                  })
                ),
              ],
            }),
            x.jsxs('div', {
              className: 'xl:p-5',
              children: [
                x.jsx('h1', { children: 'small Fullstack Projects' }),
                t.map((r, i) =>
                  x.jsx(x.Fragment, {
                    children: x.jsxs('li', {
                      className:
                        'p-4 group m-1 hover:text-white list-decimal border-t-2 border-b-2 border-black',
                      children: [
                        r.title,
                        x.jsx('a', {
                          href: r.link,
                          target: '_blank',
                          children: x.jsx($i, {
                            className:
                              'rounded-full hover:text-black  hover:bg-white inline mx-2 ',
                          }),
                        }),
                      ],
                    }),
                  })
                ),
              ],
            }),
          ],
        }),
      ],
    })
  },
  x4 = () =>
    x.jsxs('div', {
      className:
        'w-full font-[Canopee] p-4 xl:p-14 flex flex-col sm:flex-row items-center xl:gap-16',
      children: [
        x.jsxs('div', {
          children: [
            x.jsx('h1', {
              className: 'text-3xl xl:text-6xl border-b-[1px] border-black',
              children: 'Want to Collab with me?',
            }),
            x.jsx('p', {
              className: 'font-[Gilroy] font-bold text:sm sm:text-lg',
              children:
                'Connect with me through email or any of the Socials above',
            }),
          ],
        }),
        x.jsx(Le.div, {
          initial: { height: 0 },
          whileInView: { height: '100px' },
          transition: { delay: 0.5 },
          className: 'w-[2px] mx-6 hidden md:block  bg-black',
        }),
        x.jsxs('div', {
          className: 'hidden lg:block',
          children: [
            x.jsx('h1', {
              className: 'text-3xl border-b-[1px] border-black',
              children: 'Email ',
            }),
            x.jsx('h1', {
              className: 'text-xl',
              children: 'gayush794@gmail.com',
            }),
          ],
        }),
        x.jsx(Le.div, {
          initial: { height: 0 },
          whileInView: { height: '100px' },
          transition: { delay: 0.5 },
          className: 'w-[2px] mx-6 hidden md:block  bg-black',
        }),
        x.jsx('a', {
          href: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gayush794@gmail.com',
          target: '_blank',
          children: x.jsx('button', {
            className:
              'text-2xl p-2 m-2 rounded-xl xl:p-5 border-2 border-black hover:bg-white',
            children: 'Send me a Mail',
          }),
        }),
      ],
    })
function w4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'LinkedIn' },
        child: [
          {
            tag: 'g',
            attr: {},
            child: [
              {
                tag: 'path',
                attr: {
                  d: 'M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z',
                },
                child: [],
              },
              {
                tag: 'g',
                attr: {},
                child: [
                  {
                    tag: 'path',
                    attr: {
                      d: 'M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z',
                    },
                    child: [],
                  },
                  {
                    tag: 'circle',
                    attr: { cx: '7.376', cy: '6.744', r: '1' },
                    child: [],
                  },
                  {
                    tag: 'path',
                    attr: {
                      d: 'M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z',
                    },
                    child: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })(e)
}
function S4(e) {
  return H({
    tag: 'svg',
    attr: { viewBox: '0 0 32 32' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 15.908203 9 C 11.989203 9 9 11.974766 9 15.884766 C 9 19.017766 10.967203 21.699578 13.783203 22.642578 C 14.148203 22.706578 14.275391 22.482781 14.275391 22.300781 C 14.275391 22.126781 14.267578 21.159453 14.267578 20.564453 C 14.267578 20.564453 12.283094 20.991656 11.871094 19.722656 C 11.871094 19.722656 11.547891 18.905406 11.087891 18.691406 C 11.087891 18.691406 10.444766 18.247859 11.134766 18.255859 C 11.134766 18.255859 11.833656 18.312328 12.222656 18.986328 C 12.840656 20.081328 13.878203 19.762078 14.283203 19.580078 C 14.346203 19.128078 14.530328 18.810906 14.736328 18.628906 C 13.157328 18.454906 11.5625 18.224719 11.5625 15.511719 C 11.5625 14.733719 11.776516 14.345703 12.228516 13.845703 C 12.156516 13.662703 11.911781 12.901781 12.300781 11.925781 C 12.895781 11.742781 14.251953 12.6875 14.251953 12.6875 C 14.814953 12.5365 15.424344 12.449219 16.027344 12.449219 C 16.630344 12.449219 17.241688 12.5365 17.804688 12.6875 C 17.804688 12.6875 19.160859 11.743781 19.755859 11.925781 C 20.143859 12.909781 19.897172 13.663703 19.826172 13.845703 C 20.278172 14.345703 20.556641 14.734719 20.556641 15.511719 C 20.556641 18.239719 18.8905 18.454906 17.3125 18.628906 C 17.5745 18.850906 17.796875 19.2715 17.796875 19.9375 C 17.796875 20.8895 17.789062 22.072734 17.789062 22.302734 C 17.789063 22.484734 17.916438 22.705578 18.273438 22.642578 C 21.088437 21.698578 23 19.017766 23 15.884766 C 23 11.974766 19.827203 9 15.908203 9 z M 11.5625 18.486328 C 11.5065 18.470328 11.459359 18.479719 11.443359 18.511719 C 11.427359 18.543719 11.449859 18.589094 11.505859 18.621094 C 11.553859 18.645094 11.609 18.637656 11.625 18.597656 C 11.641 18.565656 11.6185 18.517328 11.5625 18.486328 z M 11.816406 18.722656 C 11.789656 18.716656 11.764141 18.720234 11.744141 18.740234 C 11.704141 18.772234 11.711766 18.834625 11.759766 18.890625 C 11.807766 18.930625 11.870156 18.954062 11.910156 18.914062 C 11.950156 18.882062 11.942531 18.819672 11.894531 18.763672 C 11.870531 18.743672 11.843156 18.728656 11.816406 18.722656 z M 12.113281 19.089844 C 12.084531 19.079844 12.053297 19.081656 12.029297 19.097656 C 11.981297 19.129656 11.981297 19.202625 12.029297 19.265625 C 12.077297 19.328625 12.149453 19.360125 12.189453 19.328125 C 12.236453 19.296125 12.236453 19.216297 12.189453 19.154297 C 12.169453 19.122297 12.142031 19.099844 12.113281 19.089844 z M 12.4375 19.486328 C 12.404875 19.482328 12.375469 19.493578 12.355469 19.517578 C 12.316469 19.557578 12.331531 19.635406 12.394531 19.691406 C 12.457531 19.755406 12.536172 19.764797 12.576172 19.716797 C 12.616172 19.684797 12.593109 19.597016 12.537109 19.541016 C 12.505609 19.509016 12.470125 19.490328 12.4375 19.486328 z M 12.982422 19.802734 C 12.911422 19.786734 12.824594 19.809234 12.808594 19.865234 C 12.792594 19.921234 12.848734 19.985953 12.927734 20.001953 C 12.998734 20.033953 13.085562 20.000312 13.101562 19.945312 C 13.125563 19.890312 13.069422 19.826734 12.982422 19.802734 z M 14.052734 19.828125 C 13.973734 19.844125 13.917781 19.899891 13.925781 19.962891 C 13.933781 20.017891 14.012797 20.049203 14.091797 20.033203 C 14.178797 20.017203 14.23475 19.96225 14.21875 19.90625 C 14.21075 19.85025 14.132734 19.819125 14.052734 19.828125 z M 13.529297 19.890625 C 13.441297 19.890625 13.378906 19.938141 13.378906 19.994141 C 13.378906 20.057141 13.442109 20.105656 13.537109 20.097656 C 13.625109 20.097656 13.6875 20.050141 13.6875 19.994141 C 13.6875 19.930141 13.609297 19.882625 13.529297 19.890625 z',
        },
        child: [],
      },
    ],
  })(e)
}
const k4 = () => {
    const e = [
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/aayush-gupta-b17758130/',
        logo: x.jsx(w4, {
          className: 'text-4xl sm:max-xl:text-4xl xl:text-4xl inline',
        }),
      },
      {
        title: 'Github',
        link: 'https://github.com/kamehamehaa0000',
        logo: x.jsx(S4, {
          className: 'text-4xl sm:max-xl:text-4xl xl:text-4xl inline',
        }),
      },
      {
        title: 'CodePen',
        link: 'https://codepen.io/Aayush-Gupta-the-sans',
        logo: x.jsx(m5, {
          className: 'text-4xl sm:max-xl:text-4xl xl:text-4xl inline',
        }),
      },
      {
        title: 'LeetCode',
        link: 'https://leetcode.com/Kamehamehaa_Aayush/',
        logo: x.jsx(c4, {
          className: 'text-4xl sm:max-xl:text-4xl xl:text-4xl inline',
        }),
      },
    ]
    return x.jsx('div', {
      className:
        'w-full py-2 xl:px-10 flex  items-center font-[Gilroy] font-semibold',
      children: e.map((t, n) =>
        x.jsxs(x.Fragment, {
          children: [
            x.jsx(
              'div',
              {
                className:
                  ' sm:max-xl:text-xl xl:text-2xl sm:p-2 sm:m-2  hover:text-white',
                children: x.jsxs('a', {
                  href: t.link,
                  target: '_blank',
                  children: [
                    x.jsx('h1', {
                      className:
                        'hidden sm:inline border-b-2 xl:mx-1 border-black ',
                      children: t.title,
                    }),
                    t.logo,
                  ],
                }),
              },
              n + t.tilte
            ),
            x.jsx(
              Le.div,
              {
                initial: { height: 0 },
                whileInView: { height: '60px' },
                transition: { delay: 0.5 },
                className: 'w-[2px] xl:mx-6 mx-2  bg-black',
              },
              n + t.link
            ),
          ],
        })
      ),
    })
  },
  C4 = () => {
    const e = Z5({ query: '(min-width: 600px)' })
    return x.jsx('div', {
      id: 'noise',
      children: x.jsxs('div', {
        id: 'container',
        className:
          ' text w-screen h-screen py-4 px-2 md:max-lg:px-10 lg:px-16 md:max-lg:py-10 lg:py-10 dark:text-white overflow-x-hidden',
        children: [
          x.jsx(g5, { isDesktop: e }),
          x.jsx(wn, {
            title: 'About Me',
            isDesktop: e,
            content: x.jsx(J5, {}),
            isMaximised: !0,
          }),
          x.jsx(wn, {
            title: 'Skills',
            isDesktop: e,
            content: x.jsx(g4, {}),
            isMaximised: !1,
          }),
          x.jsx(wn, {
            title: 'Projects',
            isDesktop: e,
            content: x.jsx(y4, {}),
            isMaximised: !1,
          }),
          x.jsx(wn, {
            title: 'Certifications',
            isDesktop: e,
            content: x.jsx(v4, {}),
            isMaximised: !1,
          }),
          x.jsx(wn, {
            title: 'Socials',
            isDesktop: e,
            content: x.jsx(k4, {}),
            isMaximised: !1,
          }),
          x.jsx(wn, {
            title: 'Contact Me',
            isDesktop: e,
            content: x.jsx(x4, {}),
            isMaximised: !0,
          }),
        ],
      }),
    })
  }
function P4() {
  return x.jsx('div', { children: x.jsx(C4, {}) })
}
Vs.createRoot(document.getElementById('root')).render(x.jsx(P4, {}))
