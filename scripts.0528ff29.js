parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    il2D: [
      function (require, module, exports) {
        "use strict";
        function e(e, r, t) {
          void 0 === t && (t = {});
          var o = { type: "Feature" };
          return (
            (0 === t.id || t.id) && (o.id = t.id),
            t.bbox && (o.bbox = t.bbox),
            (o.properties = r || {}),
            (o.geometry = e),
            o
          );
        }
        function r(e, r, o) {
          switch ((void 0 === o && (o = {}), e)) {
            case "Point":
              return t(r).geometry;
            case "LineString":
              return s(r).geometry;
            case "Polygon":
              return n(r).geometry;
            case "MultiPoint":
              return m(r).geometry;
            case "MultiLineString":
              return d(r).geometry;
            case "MultiPolygon":
              return c(r).geometry;
            default:
              throw new Error(e + " is invalid");
          }
        }
        function t(r, t, o) {
          return (
            void 0 === o && (o = {}), e({ type: "Point", coordinates: r }, t, o)
          );
        }
        function o(e, r, o) {
          return (
            void 0 === o && (o = {}),
            u(
              e.map(function (e) {
                return t(e, r);
              }),
              o
            )
          );
        }
        function n(r, t, o) {
          void 0 === o && (o = {});
          for (var n = 0, i = r; n < i.length; n++) {
            var s = i[n];
            if (s.length < 4)
              throw new Error(
                "Each LinearRing of a Polygon must have 4 or more Positions."
              );
            for (var a = 0; a < s[s.length - 1].length; a++)
              if (s[s.length - 1][a] !== s[0][a])
                throw new Error("First and last Position are not equivalent.");
          }
          return e({ type: "Polygon", coordinates: r }, t, o);
        }
        function i(e, r, t) {
          return (
            void 0 === t && (t = {}),
            u(
              e.map(function (e) {
                return n(e, r);
              }),
              t
            )
          );
        }
        function s(r, t, o) {
          if ((void 0 === o && (o = {}), r.length < 2))
            throw new Error(
              "coordinates must be an array of two or more positions"
            );
          return e({ type: "LineString", coordinates: r }, t, o);
        }
        function a(e, r, t) {
          return (
            void 0 === t && (t = {}),
            u(
              e.map(function (e) {
                return s(e, r);
              }),
              t
            )
          );
        }
        function u(e, r) {
          void 0 === r && (r = {});
          var t = { type: "FeatureCollection" };
          return (
            r.id && (t.id = r.id),
            r.bbox && (t.bbox = r.bbox),
            (t.features = e),
            t
          );
        }
        function d(r, t, o) {
          return (
            void 0 === o && (o = {}),
            e({ type: "MultiLineString", coordinates: r }, t, o)
          );
        }
        function m(r, t, o) {
          return (
            void 0 === o && (o = {}),
            e({ type: "MultiPoint", coordinates: r }, t, o)
          );
        }
        function c(r, t, o) {
          return (
            void 0 === o && (o = {}),
            e({ type: "MultiPolygon", coordinates: r }, t, o)
          );
        }
        function l(r, t, o) {
          return (
            void 0 === o && (o = {}),
            e({ type: "GeometryCollection", geometries: r }, t, o)
          );
        }
        function h(e, r) {
          if ((void 0 === r && (r = 0), r && !(r >= 0)))
            throw new Error("precision must be a positive number");
          var t = Math.pow(10, r || 0);
          return Math.round(e * t) / t;
        }
        function p(e, r) {
          void 0 === r && (r = "kilometers");
          var t = exports.factors[r];
          if (!t) throw new Error(r + " units is invalid");
          return e * t;
        }
        function f(e, r) {
          void 0 === r && (r = "kilometers");
          var t = exports.factors[r];
          if (!t) throw new Error(r + " units is invalid");
          return e / t;
        }
        function x(e, r) {
          return w(f(e, r));
        }
        function g(e) {
          var r = e % 360;
          return r < 0 && (r += 360), r;
        }
        function w(e) {
          return (180 * (e % (2 * Math.PI))) / Math.PI;
        }
        function b(e) {
          return ((e % 360) * Math.PI) / 180;
        }
        function v(e, r, t) {
          if (
            (void 0 === r && (r = "kilometers"),
            void 0 === t && (t = "kilometers"),
            !(e >= 0))
          )
            throw new Error("length must be a positive number");
          return p(f(e, r), t);
        }
        function y(e, r, t) {
          if (
            (void 0 === r && (r = "meters"),
            void 0 === t && (t = "kilometers"),
            !(e >= 0))
          )
            throw new Error("area must be a positive number");
          var o = exports.areaFactors[r];
          if (!o) throw new Error("invalid original units");
          var n = exports.areaFactors[t];
          if (!n) throw new Error("invalid final units");
          return (e / o) * n;
        }
        function E(e) {
          return (
            !isNaN(e) && null !== e && !Array.isArray(e) && !/^\s*$/.test(e)
          );
        }
        function R(e) {
          return !!e && e.constructor === Object;
        }
        function P(e) {
          if (!e) throw new Error("bbox is required");
          if (!Array.isArray(e)) throw new Error("bbox must be an Array");
          if (4 !== e.length && 6 !== e.length)
            throw new Error("bbox must be an Array of 4 or 6 numbers");
          e.forEach(function (e) {
            if (!E(e)) throw new Error("bbox must only contain numbers");
          });
        }
        function T(e) {
          if (!e) throw new Error("id is required");
          if (-1 === ["string", "number"].indexOf(typeof e))
            throw new Error("id must be a number or a string");
        }
        function M() {
          throw new Error("method has been renamed to `radiansToDegrees`");
        }
        function k() {
          throw new Error("method has been renamed to `degreesToRadians`");
        }
        function A() {
          throw new Error("method has been renamed to `lengthToDegrees`");
        }
        function L() {
          throw new Error("method has been renamed to `lengthToRadians`");
        }
        function D() {
          throw new Error("method has been renamed to `radiansToLength`");
        }
        function F() {
          throw new Error("method has been renamed to `bearingToAzimuth`");
        }
        function S() {
          throw new Error("method has been renamed to `convertLength`");
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.earthRadius = 6371008.8),
          (exports.factors = {
            centimeters: 100 * exports.earthRadius,
            centimetres: 100 * exports.earthRadius,
            degrees: exports.earthRadius / 111325,
            feet: 3.28084 * exports.earthRadius,
            inches: 39.37 * exports.earthRadius,
            kilometers: exports.earthRadius / 1e3,
            kilometres: exports.earthRadius / 1e3,
            meters: exports.earthRadius,
            metres: exports.earthRadius,
            miles: exports.earthRadius / 1609.344,
            millimeters: 1e3 * exports.earthRadius,
            millimetres: 1e3 * exports.earthRadius,
            nauticalmiles: exports.earthRadius / 1852,
            radians: 1,
            yards: exports.earthRadius / 1.0936,
          }),
          (exports.unitsFactors = {
            centimeters: 100,
            centimetres: 100,
            degrees: 1 / 111325,
            feet: 3.28084,
            inches: 39.37,
            kilometers: 0.001,
            kilometres: 0.001,
            meters: 1,
            metres: 1,
            miles: 1 / 1609.344,
            millimeters: 1e3,
            millimetres: 1e3,
            nauticalmiles: 1 / 1852,
            radians: 1 / exports.earthRadius,
            yards: 1 / 1.0936,
          }),
          (exports.areaFactors = {
            acres: 247105e-9,
            centimeters: 1e4,
            centimetres: 1e4,
            feet: 10.763910417,
            inches: 1550.003100006,
            kilometers: 1e-6,
            kilometres: 1e-6,
            meters: 1,
            metres: 1,
            miles: 3.86e-7,
            millimeters: 1e6,
            millimetres: 1e6,
            yards: 1.195990046,
          }),
          (exports.feature = e),
          (exports.geometry = r),
          (exports.point = t),
          (exports.points = o),
          (exports.polygon = n),
          (exports.polygons = i),
          (exports.lineString = s),
          (exports.lineStrings = a),
          (exports.featureCollection = u),
          (exports.multiLineString = d),
          (exports.multiPoint = m),
          (exports.multiPolygon = c),
          (exports.geometryCollection = l),
          (exports.round = h),
          (exports.radiansToLength = p),
          (exports.lengthToRadians = f),
          (exports.lengthToDegrees = x),
          (exports.bearingToAzimuth = g),
          (exports.radiansToDegrees = w),
          (exports.degreesToRadians = b),
          (exports.convertLength = v),
          (exports.convertArea = y),
          (exports.isNumber = E),
          (exports.isObject = R),
          (exports.validateBBox = P),
          (exports.validateId = T),
          (exports.radians2degrees = M),
          (exports.degrees2radians = k),
          (exports.distanceToDegrees = A),
          (exports.distanceToRadians = L),
          (exports.radiansToDistance = D),
          (exports.bearingToAngle = F),
          (exports.convertDistance = S);
      },
      {},
    ],
    MNcG: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("@turf/helpers");
        function t(e, r, n) {
          if (null !== e)
            for (
              var o,
                i,
                a,
                u,
                l,
                s,
                c,
                g,
                f = 0,
                p = 0,
                h = e.type,
                y = "FeatureCollection" === h,
                d = "Feature" === h,
                v = y ? e.features.length : 1,
                P = 0;
              P < v;
              P++
            ) {
              l = (g =
                !!(c = y ? e.features[P].geometry : d ? e.geometry : e) &&
                "GeometryCollection" === c.type)
                ? c.geometries.length
                : 1;
              for (var m = 0; m < l; m++) {
                var w = 0,
                  x = 0;
                if (null !== (u = g ? c.geometries[m] : c)) {
                  s = u.coordinates;
                  var b = u.type;
                  switch (
                    ((f =
                      !n || ("Polygon" !== b && "MultiPolygon" !== b) ? 0 : 1),
                    b)
                  ) {
                    case null:
                      break;
                    case "Point":
                      if (!1 === r(s, p, P, w, x)) return !1;
                      p++, w++;
                      break;
                    case "LineString":
                    case "MultiPoint":
                      for (o = 0; o < s.length; o++) {
                        if (!1 === r(s[o], p, P, w, x)) return !1;
                        p++, "MultiPoint" === b && w++;
                      }
                      "LineString" === b && w++;
                      break;
                    case "Polygon":
                    case "MultiLineString":
                      for (o = 0; o < s.length; o++) {
                        for (i = 0; i < s[o].length - f; i++) {
                          if (!1 === r(s[o][i], p, P, w, x)) return !1;
                          p++;
                        }
                        "MultiLineString" === b && w++, "Polygon" === b && x++;
                      }
                      "Polygon" === b && w++;
                      break;
                    case "MultiPolygon":
                      for (o = 0; o < s.length; o++) {
                        for (x = 0, i = 0; i < s[o].length; i++) {
                          for (a = 0; a < s[o][i].length - f; a++) {
                            if (!1 === r(s[o][i][a], p, P, w, x)) return !1;
                            p++;
                          }
                          x++;
                        }
                        w++;
                      }
                      break;
                    case "GeometryCollection":
                      for (o = 0; o < u.geometries.length; o++)
                        if (!1 === t(u.geometries[o], r, n)) return !1;
                      break;
                    default:
                      throw new Error("Unknown Geometry Type");
                  }
                }
              }
            }
        }
        function r(e, r, n, o) {
          var i = n;
          return (
            t(
              e,
              function (e, t, o, a, u) {
                i = 0 === t && void 0 === n ? e : r(i, e, t, o, a, u);
              },
              o
            ),
            i
          );
        }
        function n(e, t) {
          var r;
          switch (e.type) {
            case "FeatureCollection":
              for (
                r = 0;
                r < e.features.length && !1 !== t(e.features[r].properties, r);
                r++
              );
              break;
            case "Feature":
              t(e.properties, 0);
          }
        }
        function o(e, t, r) {
          var o = r;
          return (
            n(e, function (e, n) {
              o = 0 === n && void 0 === r ? e : t(o, e, n);
            }),
            o
          );
        }
        function i(e, t) {
          if ("Feature" === e.type) t(e, 0);
          else if ("FeatureCollection" === e.type)
            for (
              var r = 0;
              r < e.features.length && !1 !== t(e.features[r], r);
              r++
            );
        }
        function a(e, t, r) {
          var n = r;
          return (
            i(e, function (e, o) {
              n = 0 === o && void 0 === r ? e : t(n, e, o);
            }),
            n
          );
        }
        function u(e) {
          var r = [];
          return (
            t(e, function (e) {
              r.push(e);
            }),
            r
          );
        }
        function l(e, t) {
          var r,
            n,
            o,
            i,
            a,
            u,
            l,
            s,
            c,
            g,
            f = 0,
            p = "FeatureCollection" === e.type,
            h = "Feature" === e.type,
            y = p ? e.features.length : 1;
          for (r = 0; r < y; r++) {
            for (
              u = p ? e.features[r].geometry : h ? e.geometry : e,
                s = p ? e.features[r].properties : h ? e.properties : {},
                c = p ? e.features[r].bbox : h ? e.bbox : void 0,
                g = p ? e.features[r].id : h ? e.id : void 0,
                a = (l = !!u && "GeometryCollection" === u.type)
                  ? u.geometries.length
                  : 1,
                o = 0;
              o < a;
              o++
            )
              if (null !== (i = l ? u.geometries[o] : u))
                switch (i.type) {
                  case "Point":
                  case "LineString":
                  case "MultiPoint":
                  case "Polygon":
                  case "MultiLineString":
                  case "MultiPolygon":
                    if (!1 === t(i, f, s, c, g)) return !1;
                    break;
                  case "GeometryCollection":
                    for (n = 0; n < i.geometries.length; n++)
                      if (!1 === t(i.geometries[n], f, s, c, g)) return !1;
                    break;
                  default:
                    throw new Error("Unknown Geometry Type");
                }
              else if (!1 === t(null, f, s, c, g)) return !1;
            f++;
          }
        }
        function s(e, t, r) {
          var n = r;
          return (
            l(e, function (e, o, i, a, u) {
              n = 0 === o && void 0 === r ? e : t(n, e, o, i, a, u);
            }),
            n
          );
        }
        function c(t, r) {
          l(t, function (t, n, o, i, a) {
            var u,
              l = null === t ? null : t.type;
            switch (l) {
              case null:
              case "Point":
              case "LineString":
              case "Polygon":
                return (
                  !1 !== r(e.feature(t, o, { bbox: i, id: a }), n, 0) && void 0
                );
            }
            switch (l) {
              case "MultiPoint":
                u = "Point";
                break;
              case "MultiLineString":
                u = "LineString";
                break;
              case "MultiPolygon":
                u = "Polygon";
            }
            for (var s = 0; s < t.coordinates.length; s++) {
              var c = { type: u, coordinates: t.coordinates[s] };
              if (!1 === r(e.feature(c, o), n, s)) return !1;
            }
          });
        }
        function g(e, t, r) {
          var n = r;
          return (
            c(e, function (e, o, i) {
              n = 0 === o && 0 === i && void 0 === r ? e : t(n, e, o, i);
            }),
            n
          );
        }
        function f(r, n) {
          c(r, function (r, o, i) {
            var a = 0;
            if (r.geometry) {
              var u = r.geometry.type;
              if ("Point" !== u && "MultiPoint" !== u) {
                var l,
                  s = 0,
                  c = 0,
                  g = 0;
                return (
                  !1 !==
                    t(r, function (t, u, f, p, h) {
                      if (void 0 === l || o > s || p > c || h > g)
                        return (l = t), (s = o), (c = p), (g = h), void (a = 0);
                      var y = e.lineString([l, t], r.properties);
                      if (!1 === n(y, o, i, h, a)) return !1;
                      a++, (l = t);
                    }) && void 0
                );
              }
            }
          });
        }
        function p(e, t, r) {
          var n = r,
            o = !1;
          return (
            f(e, function (e, i, a, u, l) {
              (n = !1 === o && void 0 === r ? e : t(n, e, i, a, u, l)),
                (o = !0);
            }),
            n
          );
        }
        function h(t, r) {
          if (!t) throw new Error("geojson is required");
          c(t, function (t, n, o) {
            if (null !== t.geometry) {
              var i = t.geometry.type,
                a = t.geometry.coordinates;
              switch (i) {
                case "LineString":
                  if (!1 === r(t, n, o, 0, 0)) return !1;
                  break;
                case "Polygon":
                  for (var u = 0; u < a.length; u++)
                    if (!1 === r(e.lineString(a[u], t.properties), n, o, u))
                      return !1;
              }
            }
          });
        }
        function y(e, t, r) {
          var n = r;
          return (
            h(e, function (e, o, i, a) {
              n = 0 === o && void 0 === r ? e : t(n, e, o, i, a);
            }),
            n
          );
        }
        function d(t, r) {
          if (((r = r || {}), !e.isObject(r)))
            throw new Error("options is invalid");
          var n,
            o = r.featureIndex || 0,
            i = r.multiFeatureIndex || 0,
            a = r.geometryIndex || 0,
            u = r.segmentIndex || 0,
            l = r.properties;
          switch (t.type) {
            case "FeatureCollection":
              o < 0 && (o = t.features.length + o),
                (l = l || t.features[o].properties),
                (n = t.features[o].geometry);
              break;
            case "Feature":
              (l = l || t.properties), (n = t.geometry);
              break;
            case "Point":
            case "MultiPoint":
              return null;
            case "LineString":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
              n = t;
              break;
            default:
              throw new Error("geojson is invalid");
          }
          if (null === n) return null;
          var s = n.coordinates;
          switch (n.type) {
            case "Point":
            case "MultiPoint":
              return null;
            case "LineString":
              return (
                u < 0 && (u = s.length + u - 1),
                e.lineString([s[u], s[u + 1]], l, r)
              );
            case "Polygon":
              return (
                a < 0 && (a = s.length + a),
                u < 0 && (u = s[a].length + u - 1),
                e.lineString([s[a][u], s[a][u + 1]], l, r)
              );
            case "MultiLineString":
              return (
                i < 0 && (i = s.length + i),
                u < 0 && (u = s[i].length + u - 1),
                e.lineString([s[i][u], s[i][u + 1]], l, r)
              );
            case "MultiPolygon":
              return (
                i < 0 && (i = s.length + i),
                a < 0 && (a = s[i].length + a),
                u < 0 && (u = s[i][a].length - u - 1),
                e.lineString([s[i][a][u], s[i][a][u + 1]], l, r)
              );
          }
          throw new Error("geojson is invalid");
        }
        function v(t, r) {
          if (((r = r || {}), !e.isObject(r)))
            throw new Error("options is invalid");
          var n,
            o = r.featureIndex || 0,
            i = r.multiFeatureIndex || 0,
            a = r.geometryIndex || 0,
            u = r.coordIndex || 0,
            l = r.properties;
          switch (t.type) {
            case "FeatureCollection":
              o < 0 && (o = t.features.length + o),
                (l = l || t.features[o].properties),
                (n = t.features[o].geometry);
              break;
            case "Feature":
              (l = l || t.properties), (n = t.geometry);
              break;
            case "Point":
            case "MultiPoint":
              return null;
            case "LineString":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
              n = t;
              break;
            default:
              throw new Error("geojson is invalid");
          }
          if (null === n) return null;
          var s = n.coordinates;
          switch (n.type) {
            case "Point":
              return e.point(s, l, r);
            case "MultiPoint":
              return i < 0 && (i = s.length + i), e.point(s[i], l, r);
            case "LineString":
              return u < 0 && (u = s.length + u), e.point(s[u], l, r);
            case "Polygon":
              return (
                a < 0 && (a = s.length + a),
                u < 0 && (u = s[a].length + u),
                e.point(s[a][u], l, r)
              );
            case "MultiLineString":
              return (
                i < 0 && (i = s.length + i),
                u < 0 && (u = s[i].length + u),
                e.point(s[i][u], l, r)
              );
            case "MultiPolygon":
              return (
                i < 0 && (i = s.length + i),
                a < 0 && (a = s[i].length + a),
                u < 0 && (u = s[i][a].length - u),
                e.point(s[i][a][u], l, r)
              );
          }
          throw new Error("geojson is invalid");
        }
        (exports.coordEach = t),
          (exports.coordReduce = r),
          (exports.propEach = n),
          (exports.propReduce = o),
          (exports.featureEach = i),
          (exports.featureReduce = a),
          (exports.coordAll = u),
          (exports.geomEach = l),
          (exports.geomReduce = s),
          (exports.flattenEach = c),
          (exports.flattenReduce = g),
          (exports.segmentEach = f),
          (exports.segmentReduce = p),
          (exports.lineEach = h),
          (exports.lineReduce = y),
          (exports.findSegment = d),
          (exports.findPoint = v);
      },
      { "@turf/helpers": "il2D" },
    ],
    lhdg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("@turf/meta");
        function r(r) {
          var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
          return (
            e.coordEach(r, function (e) {
              t[0] > e[0] && (t[0] = e[0]),
                t[1] > e[1] && (t[1] = e[1]),
                t[2] < e[0] && (t[2] = e[0]),
                t[3] < e[1] && (t[3] = e[1]);
            }),
            t
          );
        }
        exports.default = r;
      },
      { "@turf/meta": "MNcG" },
    ],
    ZA2Y: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("@turf/helpers");
        function r(e) {
          if (!e) throw new Error("coord is required");
          if (!Array.isArray(e)) {
            if (
              "Feature" === e.type &&
              null !== e.geometry &&
              "Point" === e.geometry.type
            )
              return e.geometry.coordinates;
            if ("Point" === e.type) return e.coordinates;
          }
          if (
            Array.isArray(e) &&
            e.length >= 2 &&
            !Array.isArray(e[0]) &&
            !Array.isArray(e[1])
          )
            return e;
          throw new Error("coord must be GeoJSON Point or an Array of numbers");
        }
        function t(e) {
          if (Array.isArray(e)) return e;
          if ("Feature" === e.type) {
            if (null !== e.geometry) return e.geometry.coordinates;
          } else if (e.coordinates) return e.coordinates;
          throw new Error(
            "coords must be GeoJSON Feature, Geometry Object or an Array"
          );
        }
        function o(r) {
          if (r.length > 1 && e.isNumber(r[0]) && e.isNumber(r[1])) return !0;
          if (Array.isArray(r[0]) && r[0].length) return o(r[0]);
          throw new Error("coordinates must only contain numbers");
        }
        function n(e, r, t) {
          if (!r || !t) throw new Error("type and name required");
          if (!e || e.type !== r)
            throw new Error(
              "Invalid input to " + t + ": must be a " + r + ", given " + e.type
            );
        }
        function i(e, r, t) {
          if (!e) throw new Error("No feature passed");
          if (!t) throw new Error(".featureOf() requires a name");
          if (!e || "Feature" !== e.type || !e.geometry)
            throw new Error(
              "Invalid input to " + t + ", Feature with geometry required"
            );
          if (!e.geometry || e.geometry.type !== r)
            throw new Error(
              "Invalid input to " +
                t +
                ": must be a " +
                r +
                ", given " +
                e.geometry.type
            );
        }
        function u(e, r, t) {
          if (!e) throw new Error("No featureCollection passed");
          if (!t) throw new Error(".collectionOf() requires a name");
          if (!e || "FeatureCollection" !== e.type)
            throw new Error(
              "Invalid input to " + t + ", FeatureCollection required"
            );
          for (var o = 0, n = e.features; o < n.length; o++) {
            var i = n[o];
            if (!i || "Feature" !== i.type || !i.geometry)
              throw new Error(
                "Invalid input to " + t + ", Feature with geometry required"
              );
            if (!i.geometry || i.geometry.type !== r)
              throw new Error(
                "Invalid input to " +
                  t +
                  ": must be a " +
                  r +
                  ", given " +
                  i.geometry.type
              );
          }
        }
        function a(e) {
          return "Feature" === e.type ? e.geometry : e;
        }
        function y(e, r) {
          return "FeatureCollection" === e.type
            ? "FeatureCollection"
            : "GeometryCollection" === e.type
            ? "GeometryCollection"
            : "Feature" === e.type && null !== e.geometry
            ? e.geometry.type
            : e.type;
        }
        (exports.getCoord = r),
          (exports.getCoords = t),
          (exports.containsNumber = o),
          (exports.geojsonType = n),
          (exports.featureOf = i),
          (exports.collectionOf = u),
          (exports.getGeom = a),
          (exports.getType = y);
      },
      { "@turf/helpers": "il2D" },
    ],
    HpwF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var r = require("@turf/invariant");
        function e(e, o, i) {
          if ((void 0 === i && (i = {}), !e))
            throw new Error("point is required");
          if (!o) throw new Error("polygon is required");
          var u = r.getCoord(e),
            a = r.getGeom(o),
            f = a.type,
            g = o.bbox,
            l = a.coordinates;
          if (g && !1 === t(u, g)) return !1;
          "Polygon" === f && (l = [l]);
          for (var d = !1, v = 0; v < l.length && !d; v++)
            if (n(u, l[v][0], i.ignoreBoundary)) {
              for (var h = !1, s = 1; s < l[v].length && !h; )
                n(u, l[v][s], !i.ignoreBoundary) && (h = !0), s++;
              h || (d = !0);
            }
          return d;
        }
        function n(r, e, n) {
          var t = !1;
          e[0][0] === e[e.length - 1][0] &&
            e[0][1] === e[e.length - 1][1] &&
            (e = e.slice(0, e.length - 1));
          for (var o = 0, i = e.length - 1; o < e.length; i = o++) {
            var u = e[o][0],
              a = e[o][1],
              f = e[i][0],
              g = e[i][1];
            if (
              r[1] * (u - f) + a * (f - r[0]) + g * (r[0] - u) == 0 &&
              (u - r[0]) * (f - r[0]) <= 0 &&
              (a - r[1]) * (g - r[1]) <= 0
            )
              return !n;
            a > r[1] != g > r[1] &&
              r[0] < ((f - u) * (r[1] - a)) / (g - a) + u &&
              (t = !t);
          }
          return t;
        }
        function t(r, e) {
          return e[0] <= r[0] && e[1] <= r[1] && e[2] >= r[0] && e[3] >= r[1];
        }
        exports.default = e;
      },
      { "@turf/invariant": "ZA2Y" },
    ],
    OMlY: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var t = require("@turf/invariant");
        function a(a, r, n) {
          void 0 === n && (n = {});
          for (
            var s = t.getCoord(a), o = t.getCoords(r), h = 0;
            h < o.length - 1;
            h++
          ) {
            var b = !1;
            if (
              (n.ignoreEndVertices &&
                (0 === h && (b = "start"),
                h === o.length - 2 && (b = "end"),
                0 === h && h + 1 === o.length - 1 && (b = "both")),
              e(o[h], o[h + 1], s, b))
            )
              return !0;
          }
          return !1;
        }
        function e(t, a, e, r) {
          var n = e[0],
            s = e[1],
            o = t[0],
            h = t[1],
            b = a[0],
            i = a[1],
            u = b - o,
            d = i - h;
          return (
            0 == (e[0] - o) * d - (e[1] - h) * u &&
            (r
              ? "start" === r
                ? Math.abs(u) >= Math.abs(d)
                  ? u > 0
                    ? o < n && n <= b
                    : b <= n && n < o
                  : d > 0
                  ? h < s && s <= i
                  : i <= s && s < h
                : "end" === r
                ? Math.abs(u) >= Math.abs(d)
                  ? u > 0
                    ? o <= n && n < b
                    : b < n && n <= o
                  : d > 0
                  ? h <= s && s < i
                  : i < s && s <= h
                : "both" === r &&
                  (Math.abs(u) >= Math.abs(d)
                    ? u > 0
                      ? o < n && n < b
                      : b < n && n < o
                    : d > 0
                    ? h < s && s < i
                    : i < s && s < h)
              : Math.abs(u) >= Math.abs(d)
              ? u > 0
                ? o <= n && n <= b
                : b <= n && n <= o
              : d > 0
              ? h <= s && s <= i
              : i <= s && s <= h)
          );
        }
        exports.default = a;
      },
      { "@turf/invariant": "ZA2Y" },
    ],
    jWcY: [
      function (require, module, exports) {
        "use strict";
        var e =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var t = e(require("@turf/bbox")),
          r = e(require("@turf/boolean-point-in-polygon")),
          n = e(require("@turf/boolean-point-on-line")),
          o = require("@turf/invariant");
        function i(e, t) {
          var i = o.getGeom(e),
            g = o.getGeom(t),
            y = o.getType(e),
            P = o.getType(t),
            h = o.getCoords(e),
            v = o.getCoords(t);
          switch (y) {
            case "Point":
              switch (P) {
                case "Point":
                  return p(h, v);
                default:
                  throw new Error("feature2 " + P + " geometry not supported");
              }
            case "MultiPoint":
              switch (P) {
                case "Point":
                  return u(i, g);
                case "MultiPoint":
                  return a(i, g);
                default:
                  throw new Error("feature2 " + P + " geometry not supported");
              }
            case "LineString":
              switch (P) {
                case "Point":
                  return n.default(g, i, { ignoreEndVertices: !0 });
                case "LineString":
                  return l(i, g);
                case "MultiPoint":
                  return s(i, g);
                default:
                  throw new Error("feature2 " + P + " geometry not supported");
              }
            case "Polygon":
              switch (P) {
                case "Point":
                  return r.default(g, i, { ignoreBoundary: !0 });
                case "LineString":
                  return d(i, g);
                case "Polygon":
                  return c(i, g);
                case "MultiPoint":
                  return f(i, g);
                default:
                  throw new Error("feature2 " + P + " geometry not supported");
              }
            default:
              throw new Error("feature1 " + y + " geometry not supported");
          }
        }
        function u(e, t) {
          var r,
            n = !1;
          for (r = 0; r < e.coordinates.length; r++)
            if (p(e.coordinates[r], t.coordinates)) {
              n = !0;
              break;
            }
          return n;
        }
        function a(e, t) {
          for (var r = 0, n = t.coordinates; r < n.length; r++) {
            for (
              var o = n[r], i = !1, u = 0, a = e.coordinates;
              u < a.length;
              u++
            ) {
              if (p(o, a[u])) {
                i = !0;
                break;
              }
            }
            if (!i) return !1;
          }
          return !0;
        }
        function s(e, t) {
          for (var r = !1, o = 0, i = t.coordinates; o < i.length; o++) {
            var u = i[o];
            if (
              (n.default(u, e, { ignoreEndVertices: !0 }) && (r = !0),
              !n.default(u, e))
            )
              return !1;
          }
          return !!r;
        }
        function f(e, t) {
          for (var n = 0, o = t.coordinates; n < o.length; n++) {
            var i = o[n];
            if (!r.default(i, e, { ignoreBoundary: !0 })) return !1;
          }
          return !0;
        }
        function l(e, t) {
          for (var r = !1, o = 0, i = t.coordinates; o < i.length; o++) {
            var u = i[o];
            if (
              (n.default({ type: "Point", coordinates: u }, e, {
                ignoreEndVertices: !0,
              }) && (r = !0),
              !n.default({ type: "Point", coordinates: u }, e, {
                ignoreEndVertices: !1,
              }))
            )
              return !1;
          }
          return r;
        }
        function d(e, n) {
          var o = !1,
            i = 0;
          if (!g(t.default(e), t.default(n))) return !1;
          for (; i < n.coordinates.length - 1; i++) {
            var u = y(n.coordinates[i], n.coordinates[i + 1]);
            if (
              r.default({ type: "Point", coordinates: u }, e, {
                ignoreBoundary: !0,
              })
            ) {
              o = !0;
              break;
            }
          }
          return o;
        }
        function c(e, n) {
          if ("Feature" === e.type && null === e.geometry) return !1;
          if ("Feature" === n.type && null === n.geometry) return !1;
          if (!g(t.default(e), t.default(n))) return !1;
          for (var i = 0, u = o.getGeom(n).coordinates; i < u.length; i++)
            for (var a = 0, s = u[i]; a < s.length; a++) {
              var f = s[a];
              if (!r.default(f, e)) return !1;
            }
          return !0;
        }
        function g(e, t) {
          return (
            !(e[0] > t[0]) && !(e[2] < t[2]) && !(e[1] > t[1]) && !(e[3] < t[3])
          );
        }
        function p(e, t) {
          return e[0] === t[0] && e[1] === t[1];
        }
        function y(e, t) {
          return [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2];
        }
        (exports.default = i),
          (exports.isPointInMultiPoint = u),
          (exports.isMultiPointInMultiPoint = a),
          (exports.isMultiPointOnLine = s),
          (exports.isMultiPointInPoly = f),
          (exports.isLineOnLine = l),
          (exports.isLineInPoly = d),
          (exports.isPolyInPoly = c),
          (exports.doBBoxOverlap = g),
          (exports.compareCoords = p),
          (exports.getMidpoint = y);
      },
      {
        "@turf/bbox": "lhdg",
        "@turf/boolean-point-in-polygon": "HpwF",
        "@turf/boolean-point-on-line": "OMlY",
        "@turf/invariant": "ZA2Y",
      },
    ],
    JN7f: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.sg_geojson = void 0);
        var e = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [103.59489440917969, 1.2715630876314767],
                    [103.59077453613281, 1.2296876901489255],
                    [103.58940124511719, 1.1987955811436186],
                    [103.61618041992188, 1.1658436142465605],
                    [103.64639282226562, 1.1356373055193174],
                    [103.6834716796875, 1.1438754213781501],
                    [103.73291015625, 1.1541730329228161],
                    [103.77960205078125, 1.176141145843977],
                    [103.85581970214844, 1.2029145493452873],
                    [103.87195587158203, 1.2386120110295982],
                    [103.89083862304688, 1.2712198493992468],
                    [103.97666931152344, 1.2887249407943617],
                    [104.02713775634766, 1.3038272759700005],
                    [104.09065246582031, 1.334718132769963],
                    [104.08035278320312, 1.3498201887565244],
                    [104.08721923828125, 1.3807104645408492],
                    [104.09271240234374, 1.4006173190275208],
                    [104.07829284667969, 1.4308204986633148],
                    [104.04945373535156, 1.4466083666436405],
                    [104.0185546875, 1.4445490857204621],
                    [103.99658203125, 1.425329040790274],
                    [103.941650390625, 1.4294476354255539],
                    [103.90731811523438, 1.4267019064882447],
                    [103.87298583984375, 1.4514133481911609],
                    [103.83316040039062, 1.474065265973824],
                    [103.79745483398438, 1.4754381021049132],
                    [103.75419616699219, 1.4493540716333067],
                    [103.71299743652344, 1.4555318956783565],
                    [103.67523193359375, 1.435625513519856],
                    [103.65463256835938, 1.4019901993378632],
                    [103.59489440917969, 1.2715630876314767],
                  ],
                ],
              },
            },
          ],
        };
        exports.sg_geojson = e;
      },
      {},
    ],
    VJtr: [
      function (require, module, exports) {
        "use strict";
        var e = n(require("@turf/boolean-contains")),
          o = require("@turf/helpers"),
          t = require("./consts");
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        window.downloadResume = function () {
          navigator.geolocation
            ? navigator.geolocation.getCurrentPosition(
                function (n) {
                  var d = (0, o.point)([n.coords.longitude, n.coords.latitude]),
                    r = (0, o.polygon)(
                      t.sg_geojson.features[0].geometry.coordinates
                    );
                  (0, e.default)(r, d)
                    ? document.getElementById("download-local").click()
                    : document.getElementById("download-resume").click();
                },
                function () {
                  document.getElementById("download-resume").click();
                }
              )
            : document.getElementById("download-resume").click();
        };
      },
      {
        "@turf/boolean-contains": "jWcY",
        "@turf/helpers": "il2D",
        "./consts": "JN7f",
      },
    ],
  },
  {},
  ["VJtr"],
  null
);
//# sourceMappingURL=/scripts.0528ff29.js.map
