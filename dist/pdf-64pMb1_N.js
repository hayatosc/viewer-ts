var nf = Object.defineProperty;
var Nc = (d) => {
  throw TypeError(d);
};
var rf = (d, t, e) => t in d ? nf(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var O = (d, t, e) => rf(d, typeof t != "symbol" ? t + "" : t, e), Kh = (d, t, e) => t.has(d) || Nc("Cannot " + e);
var r = (d, t, e) => (Kh(d, t, "read from private field"), e ? e.call(d) : t.get(d)), b = (d, t, e) => t.has(d) ? Nc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), p = (d, t, e, s) => (Kh(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), g = (d, t, e) => (Kh(d, t, "access private method"), e);
var qt = (d, t, e, s) => ({
  set _(i) {
    p(d, t, i, e);
  },
  get _() {
    return r(d, t, s);
  }
});
import { addChildClass as af } from "./index.js";
var da = {};
da.d = (d, t) => {
  for (var e in t)
    da.o(t, e) && !da.o(d, e) && Object.defineProperty(d, e, { enumerable: !0, get: t[e] });
};
da.o = (d, t) => Object.prototype.hasOwnProperty.call(d, t);
var B = globalThis.pdfjsLib = {};
da.d(B, {
  AbortException: () => (
    /* reexport */
    Hn
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    pc
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    H
  ),
  AnnotationEditorType: () => (
    /* reexport */
    U
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    In
  ),
  AnnotationLayer: () => (
    /* reexport */
    ig
  ),
  AnnotationMode: () => (
    /* reexport */
    Ys
  ),
  CMapCompressionType: () => (
    /* reexport */
    nl
  ),
  ColorPicker: () => (
    /* reexport */
    _h
  ),
  DOMSVGFactory: () => (
    /* reexport */
    Ec
  ),
  DrawLayer: () => (
    /* reexport */
    Ac
  ),
  FeatureTest: () => (
    /* reexport */
    re
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    zs
  ),
  ImageKind: () => (
    /* reexport */
    $o
  ),
  InvalidPDFException: () => (
    /* reexport */
    rd
  ),
  MissingPDFException: () => (
    /* reexport */
    On
  ),
  OPS: () => (
    /* reexport */
    Me
  ),
  OutputScale: () => (
    /* reexport */
    cl
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    eu
  ),
  PDFDateString: () => (
    /* reexport */
    pd
  ),
  PDFWorker: () => (
    /* reexport */
    Kn
  ),
  PasswordResponses: () => (
    /* reexport */
    cf
  ),
  PermissionFlag: () => (
    /* reexport */
    lf
  ),
  PixelsPerInch: () => (
    /* reexport */
    _i
  ),
  RenderingCancelledException: () => (
    /* reexport */
    Sc
  ),
  TextLayer: () => (
    /* reexport */
    pa
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    Gh
  ),
  Util: () => (
    /* reexport */
    L
  ),
  VerbosityLevel: () => (
    /* reexport */
    jh
  ),
  XfaLayer: () => (
    /* reexport */
    iu
  ),
  build: () => (
    /* reexport */
    Hp
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    pf
  ),
  fetchData: () => (
    /* reexport */
    Vh
  ),
  getDocument: () => (
    /* reexport */
    Mp
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    Cf
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    xf
  ),
  getXfaPageViewport: () => (
    /* reexport */
    Tf
  ),
  isDataScheme: () => (
    /* reexport */
    qh
  ),
  isPdfFile: () => (
    /* reexport */
    Cc
  ),
  noContextMenu: () => (
    /* reexport */
    Te
  ),
  normalizeUnicode: () => (
    /* reexport */
    vf
  ),
  setLayerDimensions: () => (
    /* reexport */
    Ln
  ),
  shadow: () => (
    /* reexport */
    X
  ),
  version: () => (
    /* reexport */
    Op
  )
});
const Vt = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), nd = [1, 0, 0, 1, 0, 0], il = [1e-3, 0, 0, 1e-3, 0, 0], of = 1e7, Qh = 1.35, pe = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Ys = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, hf = "pdfjs_internal_editor_", U = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, H = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, lf = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, zt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, $o = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, _t = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, Xr = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, jh = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, nl = {
  NONE: 0,
  BINARY: 1
}, Me = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93
}, cf = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Uh = jh.WARNINGS;
function df(d) {
  Number.isInteger(d) && (Uh = d);
}
function uf() {
  return Uh;
}
function $h(d) {
  Uh >= jh.INFOS && console.log(`Info: ${d}`);
}
function W(d) {
  Uh >= jh.WARNINGS && console.log(`Warning: ${d}`);
}
function vt(d) {
  throw new Error(d);
}
function Tt(d, t) {
  d || vt(t);
}
function ff(d) {
  switch (d == null ? void 0 : d.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function pf(d, t = null, e = null) {
  if (!d)
    return null;
  try {
    if (e && typeof d == "string") {
      if (e.addDefaultProtocol && d.startsWith("www.")) {
        const i = d.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
      }
      if (e.tryConvertEncoding)
        try {
          d = yf(d);
        } catch {
        }
    }
    const s = t ? new URL(d, t) : new URL(d);
    if (ff(s))
      return s;
  } catch {
  }
  return null;
}
function X(d, t, e, s = !1) {
  return Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const xi = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class rl extends xi {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class al extends xi {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class rd extends xi {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class On extends xi {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class Gh extends xi {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class gf extends xi {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Hn extends xi {
  constructor(t) {
    super(t, "AbortException");
  }
}
function ad(d) {
  (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && vt("Invalid argument for bytesToString");
  const t = d.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, d);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const n = Math.min(i + e, t), a = d.subarray(i, n);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
function Wh(d) {
  typeof d != "string" && vt("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function mf(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function wc(d) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, s] of d)
    t[e] = s;
  return t;
}
function bf() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function Af() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class re {
  static get isLittleEndian() {
    return X(this, "isLittleEndian", bf());
  }
  static get isEvalSupported() {
    return X(this, "isEvalSupported", Af());
  }
  static get isOffscreenCanvasSupported() {
    return X(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? X(this, "platform", {
      isMac: navigator.platform.includes("Mac"),
      isWindows: navigator.platform.includes("Win"),
      isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
    }) : X(this, "platform", {
      isMac: !1,
      isWindows: !1,
      isFirefox: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return X(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const Jh = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var Us, Go, ol;
class L {
  static makeHexColor(t, e, s) {
    return `#${Jh[t]}${Jh[e]}${Jh[s]}`;
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const s = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [s, i];
  }
  static applyInverseTransform(t, e) {
    const s = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, n = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
    return [i, n];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const s = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), n = this.applyTransform([t[0], t[3]], e), a = this.applyTransform([t[2], t[1]], e);
    return [Math.min(s[0], i[0], n[0], a[0]), Math.min(s[1], i[1], n[1], a[1]), Math.max(s[0], i[0], n[0], a[0]), Math.max(s[1], i[1], n[1], a[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], s = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], n = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], o = (s + a) / 2, h = Math.sqrt((s + a) ** 2 - 4 * (s * a - n * i)) / 2, l = o + h || 1, c = o - h || 1;
    return [Math.sqrt(l), Math.sqrt(c)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return n > a ? null : [s, n, i, a];
  }
  static bezierBoundingBox(t, e, s, i, n, a, o, h, l) {
    return l ? (l[0] = Math.min(l[0], t, o), l[1] = Math.min(l[1], e, h), l[2] = Math.max(l[2], t, o), l[3] = Math.max(l[3], e, h)) : l = [Math.min(t, o), Math.min(e, h), Math.max(t, o), Math.max(e, h)], g(this, Us, ol).call(this, t, s, n, o, e, i, a, h, 3 * (-t + 3 * (s - n) + o), 6 * (t - 2 * s + n), 3 * (s - t), l), g(this, Us, ol).call(this, t, s, n, o, e, i, a, h, 3 * (-e + 3 * (i - a) + h), 6 * (e - 2 * i + a), 3 * (i - e), l), l;
  }
}
Us = new WeakSet(), Go = function(t, e, s, i, n, a, o, h, l, c) {
  if (l <= 0 || l >= 1)
    return;
  const u = 1 - l, f = l * l, m = f * l, A = u * (u * (u * t + 3 * l * e) + 3 * f * s) + m * i, y = u * (u * (u * n + 3 * l * a) + 3 * f * o) + m * h;
  c[0] = Math.min(c[0], A), c[1] = Math.min(c[1], y), c[2] = Math.max(c[2], A), c[3] = Math.max(c[3], y);
}, ol = function(t, e, s, i, n, a, o, h, l, c, u, f) {
  if (Math.abs(l) < 1e-12) {
    Math.abs(c) >= 1e-12 && g(this, Us, Go).call(this, t, e, s, i, n, a, o, h, -u / c, f);
    return;
  }
  const m = c ** 2 - 4 * u * l;
  if (m < 0)
    return;
  const A = Math.sqrt(m), y = 2 * l;
  g(this, Us, Go).call(this, t, e, s, i, n, a, o, h, (-c + A) / y, f), g(this, Us, Go).call(this, t, e, s, i, n, a, o, h, (-c - A) / y, f);
}, b(L, Us);
function yf(d) {
  return decodeURIComponent(escape(d));
}
let Zh = null, Oc = null;
function vf(d) {
  return Zh || (Zh = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Oc = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Zh, (t, e, s) => e ? e.normalize("NFKC") : Oc.get(s));
}
function wf() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(d);
  else
    for (let t = 0; t < 32; t++)
      d[t] = Math.floor(Math.random() * 255);
  return ad(d);
}
const _c = "pdfjs_internal_id_", us = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
class od {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, n) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var ba;
class hd {
  constructor({
    enableHWA: t = !1
  }) {
    b(this, ba, !1);
    p(this, ba, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !r(this, ba)
      })
    };
  }
  reset(t, e, s) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    vt("Abstract method `_createCanvas` called.");
  }
}
ba = new WeakMap();
class ld {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""), s = this.isCompressed ? nl.BINARY : nl.NONE;
    return this._fetchData(e, s).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  _fetchData(t, e) {
    vt("Abstract method `_fetchData` called.");
  }
}
class cd {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetchData(e).catch((s) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  _fetchData(t) {
    vt("Abstract method `_fetchData` called.");
  }
}
class _f {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    vt("Abstract method `_createSVG` called.");
  }
}
const ps = "http://www.w3.org/2000/svg", Li = class Li {
};
O(Li, "CSS", 96), O(Li, "PDF", 72), O(Li, "PDF_TO_CSS_UNITS", Li.CSS / Li.PDF);
let _i = Li;
var Fi, Di, $e, bs, Ut, Sh, Ni, P, jt, jn, Un, Wo, $n, dd, hl, Gn, Qr, Jr, ll, Zr;
class Ef extends od {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    b(this, P);
    b(this, Fi);
    b(this, Di);
    b(this, $e);
    b(this, bs);
    b(this, Ut);
    b(this, Sh);
    b(this, Ni, 0);
    p(this, bs, e), p(this, Ut, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = r(this, P, jt).get(e);
    if (s)
      return s;
    const [i, n, a] = g(this, P, Wo).call(this, e), o = e.length === 1 ? i : `${i}${n}${a}`;
    if (s = r(this, P, jt).get(o), s)
      return r(this, P, jt).set(e, s), s;
    const h = `g_${r(this, bs)}_transfer_map_${qt(this, Ni)._++}`, l = g(this, P, $n).call(this, h);
    r(this, P, jt).set(e, l), r(this, P, jt).set(o, l);
    const c = g(this, P, Gn).call(this, h);
    return g(this, P, Jr).call(this, i, n, a, c), l;
  }
  addHCMFilter(e, s) {
    var A;
    const i = `${e}-${s}`, n = "base";
    let a = r(this, P, jn).get(n);
    if ((a == null ? void 0 : a.key) === i || (a ? ((A = a.filter) == null || A.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, r(this, P, jn).set(n, a)), !e || !s))
      return a.url;
    const o = g(this, P, Zr).call(this, e);
    e = L.makeHexColor(...o);
    const h = g(this, P, Zr).call(this, s);
    if (s = L.makeHexColor(...h), r(this, P, Un).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const l = new Array(256);
    for (let y = 0; y <= 255; y++) {
      const w = y / 255;
      l[y] = w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    }
    const c = l.join(","), u = `g_${r(this, bs)}_hcm_filter`, f = a.filter = g(this, P, Gn).call(this, u);
    g(this, P, Jr).call(this, c, c, c, f), g(this, P, hl).call(this, f);
    const m = (y, w) => {
      const v = o[y] / 255, _ = h[y] / 255, E = new Array(w + 1);
      for (let S = 0; S <= w; S++)
        E[S] = v + S / w * (_ - v);
      return E.join(",");
    };
    return g(this, P, Jr).call(this, m(0, 5), m(1, 5), m(2, 5), f), a.url = g(this, P, $n).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = r(this, P, jt).get(e);
    if (s)
      return s;
    const [i] = g(this, P, Wo).call(this, [e]), n = `alpha_${i}`;
    if (s = r(this, P, jt).get(n), s)
      return r(this, P, jt).set(e, s), s;
    const a = `g_${r(this, bs)}_alpha_map_${qt(this, Ni)._++}`, o = g(this, P, $n).call(this, a);
    r(this, P, jt).set(e, o), r(this, P, jt).set(n, o);
    const h = g(this, P, Gn).call(this, a);
    return g(this, P, ll).call(this, i, h), o;
  }
  addLuminosityFilter(e) {
    let s = r(this, P, jt).get(e || "luminosity");
    if (s)
      return s;
    let i, n;
    if (e ? ([i] = g(this, P, Wo).call(this, [e]), n = `luminosity_${i}`) : n = "luminosity", s = r(this, P, jt).get(n), s)
      return r(this, P, jt).set(e, s), s;
    const a = `g_${r(this, bs)}_luminosity_map_${qt(this, Ni)._++}`, o = g(this, P, $n).call(this, a);
    r(this, P, jt).set(e, o), r(this, P, jt).set(n, o);
    const h = g(this, P, Gn).call(this, a);
    return g(this, P, dd).call(this, h), e && g(this, P, ll).call(this, i, h), o;
  }
  addHighlightHCMFilter(e, s, i, n, a) {
    var _;
    const o = `${s}-${i}-${n}-${a}`;
    let h = r(this, P, jn).get(e);
    if ((h == null ? void 0 : h.key) === o || (h ? ((_ = h.filter) == null || _.remove(), h.key = o, h.url = "none", h.filter = null) : (h = {
      key: o,
      url: "none",
      filter: null
    }, r(this, P, jn).set(e, h)), !s || !i))
      return h.url;
    const [l, c] = [s, i].map(g(this, P, Zr).bind(this));
    let u = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), f = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [m, A] = [n, a].map(g(this, P, Zr).bind(this));
    f < u && ([u, f, m, A] = [f, u, A, m]), r(this, P, Un).style.color = "";
    const y = (E, S, x) => {
      const C = new Array(256), T = (f - u) / x, k = E / 255, F = (S - E) / (255 * x);
      let $ = 0;
      for (let D = 0; D <= x; D++) {
        const tt = Math.round(u + D * T), Y = k + D * F;
        for (let et = $; et <= tt; et++)
          C[et] = Y;
        $ = tt + 1;
      }
      for (let D = $; D < 256; D++)
        C[D] = C[$ - 1];
      return C.join(",");
    }, w = `g_${r(this, bs)}_hcm_${e}_filter`, v = h.filter = g(this, P, Gn).call(this, w);
    return g(this, P, hl).call(this, v), g(this, P, Jr).call(this, y(m[0], A[0], 5), y(m[1], A[1], 5), y(m[2], A[2], 5), v), h.url = g(this, P, $n).call(this, w), h.url;
  }
  destroy(e = !1) {
    e && r(this, P, jn).size !== 0 || (r(this, $e) && (r(this, $e).parentNode.parentNode.remove(), p(this, $e, null)), r(this, Di) && (r(this, Di).clear(), p(this, Di, null)), p(this, Ni, 0));
  }
}
Fi = new WeakMap(), Di = new WeakMap(), $e = new WeakMap(), bs = new WeakMap(), Ut = new WeakMap(), Sh = new WeakMap(), Ni = new WeakMap(), P = new WeakSet(), jt = function() {
  return r(this, Di) || p(this, Di, /* @__PURE__ */ new Map());
}, jn = function() {
  return r(this, Sh) || p(this, Sh, /* @__PURE__ */ new Map());
}, Un = function() {
  if (!r(this, $e)) {
    const e = r(this, Ut).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = r(this, Ut).createElementNS(ps, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), p(this, $e, r(this, Ut).createElementNS(ps, "defs")), e.append(i), i.append(r(this, $e)), r(this, Ut).body.append(e);
  }
  return r(this, $e);
}, Wo = function(e) {
  if (e.length === 1) {
    const l = e[0], c = new Array(256);
    for (let f = 0; f < 256; f++)
      c[f] = l[f] / 255;
    const u = c.join(",");
    return [u, u, u];
  }
  const [s, i, n] = e, a = new Array(256), o = new Array(256), h = new Array(256);
  for (let l = 0; l < 256; l++)
    a[l] = s[l] / 255, o[l] = i[l] / 255, h[l] = n[l] / 255;
  return [a.join(","), o.join(","), h.join(",")];
}, $n = function(e) {
  if (r(this, Fi) === void 0) {
    p(this, Fi, "");
    const s = r(this, Ut).URL;
    s !== r(this, Ut).baseURI && (qh(s) ? W('#createUrl: ignore "data:"-URL for performance reasons.') : p(this, Fi, s.split("#", 1)[0]));
  }
  return `url(${r(this, Fi)}#${e})`;
}, dd = function(e) {
  const s = r(this, Ut).createElementNS(ps, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, hl = function(e) {
  const s = r(this, Ut).createElementNS(ps, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, Gn = function(e) {
  const s = r(this, Ut).createElementNS(ps, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), r(this, P, Un).append(s), s;
}, Qr = function(e, s, i) {
  const n = r(this, Ut).createElementNS(ps, s);
  n.setAttribute("type", "discrete"), n.setAttribute("tableValues", i), e.append(n);
}, Jr = function(e, s, i, n) {
  const a = r(this, Ut).createElementNS(ps, "feComponentTransfer");
  n.append(a), g(this, P, Qr).call(this, a, "feFuncR", e), g(this, P, Qr).call(this, a, "feFuncG", s), g(this, P, Qr).call(this, a, "feFuncB", i);
}, ll = function(e, s) {
  const i = r(this, Ut).createElementNS(ps, "feComponentTransfer");
  s.append(i), g(this, P, Qr).call(this, i, "feFuncA", e);
}, Zr = function(e) {
  return r(this, P, Un).style.color = e, xc(getComputedStyle(r(this, P, Un)).getPropertyValue("color"));
};
class Sf extends hd {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
}
async function Vh(d, t = "text") {
  if (ta(d, document.baseURI)) {
    const e = await fetch(d);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", d, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class ud extends ld {
  _fetchData(t, e) {
    return Vh(t, this.isCompressed ? "arraybuffer" : "text").then((s) => ({
      cMapData: s instanceof ArrayBuffer ? new Uint8Array(s) : Wh(s),
      compressionType: e
    }));
  }
}
class fd extends cd {
  _fetchData(t) {
    return Vh(t, "arraybuffer").then((e) => new Uint8Array(e));
  }
}
class Ec extends _f {
  _createSVG(t) {
    return document.createElementNS(ps, t);
  }
}
class Do {
  constructor({
    viewBox: t,
    scale: e,
    rotation: s,
    offsetX: i = 0,
    offsetY: n = 0,
    dontFlip: a = !1
  }) {
    this.viewBox = t, this.scale = e, this.rotation = s, this.offsetX = i, this.offsetY = n;
    const o = (t[2] + t[0]) / 2, h = (t[3] + t[1]) / 2;
    let l, c, u, f;
    switch (s %= 360, s < 0 && (s += 360), s) {
      case 180:
        l = -1, c = 0, u = 0, f = 1;
        break;
      case 90:
        l = 0, c = 1, u = 1, f = 0;
        break;
      case 270:
        l = 0, c = -1, u = -1, f = 0;
        break;
      case 0:
        l = 1, c = 0, u = 0, f = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    a && (u = -u, f = -f);
    let m, A, y, w;
    l === 0 ? (m = Math.abs(h - t[1]) * e + i, A = Math.abs(o - t[0]) * e + n, y = (t[3] - t[1]) * e, w = (t[2] - t[0]) * e) : (m = Math.abs(o - t[0]) * e + i, A = Math.abs(h - t[1]) * e + n, y = (t[2] - t[0]) * e, w = (t[3] - t[1]) * e), this.transform = [l * e, c * e, u * e, f * e, m - l * e * o - u * e * h, A - c * e * o - f * e * h], this.width = y, this.height = w;
  }
  get rawDims() {
    const {
      viewBox: t
    } = this;
    return X(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: n = !1
  } = {}) {
    return new Do({
      viewBox: this.viewBox.slice(),
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  convertToViewportPoint(t, e) {
    return L.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = L.applyTransform([t[0], t[1]], this.transform), s = L.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    return L.applyInverseTransform([t, e], this.transform);
  }
}
class Sc extends xi {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function qh(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function Cc(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function Cf(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function xf(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (qh(d))
    return W('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(d);
  let n = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (n && (n = n[0], n.includes("%")))
    try {
      n = s.exec(decodeURIComponent(n))[0];
    } catch {
    }
  return n || t;
}
class Hc {
  constructor() {
    O(this, "started", /* @__PURE__ */ Object.create(null));
    O(this, "times", []);
  }
  time(t) {
    t in this.started && W(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || W(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: s
    } of this.times)
      e = Math.max(s.length, e);
    for (const {
      name: s,
      start: i,
      end: n
    } of this.times)
      t.push(`${s.padEnd(e)} ${n - i}ms
`);
    return t.join("");
  }
}
function ta(d, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(d, t) : new URL(d);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function Te(d) {
  d.preventDefault();
}
function Bc(d) {
  console.log("Deprecated API usage: " + d);
}
let zc;
class pd {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    zc || (zc = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = zc.exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let n = parseInt(e[3], 10);
    n = n >= 1 && n <= 31 ? n : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let h = parseInt(e[6], 10);
    h = h >= 0 && h <= 59 ? h : 0;
    const l = e[7] || "Z";
    let c = parseInt(e[8], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, l === "-" ? (a += c, o += u) : l === "+" && (a -= c, o -= u), new Date(Date.UTC(s, i, n, a, o, h));
  }
}
function Tf(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, n = [0, 0, parseInt(s), parseInt(i)];
  return new Do({
    viewBox: n,
    scale: t,
    rotation: e
  });
}
function xc(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (W(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function Rf(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, xc(s));
  }
  t.remove();
}
function ft(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: a
  } = d.getTransform();
  return [t, e, s, i, n, a];
}
function fs(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: a
  } = d.getTransform().invertSelf();
  return [t, e, s, i, n, a];
}
function Ln(d, t, e = !1, s = !0) {
  if (t instanceof Do) {
    const {
      pageWidth: i,
      pageHeight: n
    } = t.rawDims, {
      style: a
    } = d, o = re.isCSSRoundSupported, h = `var(--scale-factor) * ${i}px`, l = `var(--scale-factor) * ${n}px`, c = o ? `round(down, ${h}, var(--scale-round-x, 1px))` : `calc(${h})`, u = o ? `round(down, ${l}, var(--scale-round-y, 1px))` : `calc(${l})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = u) : (a.width = u, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class cl {
  constructor() {
    const t = window.devicePixelRatio || 1;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
}
var Ks, Oi, ke, Hi, Aa, ya, Ch, gd, Kt, md, bd, Vo, Ad, ul;
const gs = class gs {
  constructor(t) {
    b(this, Kt);
    b(this, Ks, null);
    b(this, Oi, null);
    b(this, ke);
    b(this, Hi, null);
    b(this, Aa, null);
    p(this, ke, t), r(gs, ya) || p(gs, ya, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const t = p(this, Ks, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = r(this, ke)._uiManager._signal;
    t.addEventListener("contextmenu", Te, {
      signal: e
    }), t.addEventListener("pointerdown", g(gs, Ch, gd), {
      signal: e
    });
    const s = p(this, Hi, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = r(this, ke).toolbarPosition;
    if (i) {
      const {
        style: n
      } = t, a = r(this, ke)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = `${100 * a}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return g(this, Kt, Ad).call(this), t;
  }
  get div() {
    return r(this, Ks);
  }
  hide() {
    var t;
    r(this, Ks).classList.add("hidden"), (t = r(this, Oi)) == null || t.hideDropdown();
  }
  show() {
    var t;
    r(this, Ks).classList.remove("hidden"), (t = r(this, Aa)) == null || t.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    g(this, Kt, Vo).call(this, e), r(this, Hi).prepend(e, r(this, Kt, ul)), p(this, Aa, t);
  }
  addColorPicker(t) {
    p(this, Oi, t);
    const e = t.renderButton();
    g(this, Kt, Vo).call(this, e), r(this, Hi).prepend(e, r(this, Kt, ul));
  }
  remove() {
    var t;
    r(this, Ks).remove(), (t = r(this, Oi)) == null || t.destroy(), p(this, Oi, null);
  }
};
Ks = new WeakMap(), Oi = new WeakMap(), ke = new WeakMap(), Hi = new WeakMap(), Aa = new WeakMap(), ya = new WeakMap(), Ch = new WeakSet(), gd = function(t) {
  t.stopPropagation();
}, Kt = new WeakSet(), md = function(t) {
  r(this, ke)._focusEventsAllowed = !1, t.preventDefault(), t.stopPropagation();
}, bd = function(t) {
  r(this, ke)._focusEventsAllowed = !0, t.preventDefault(), t.stopPropagation();
}, Vo = function(t) {
  const e = r(this, ke)._uiManager._signal;
  t.addEventListener("focusin", g(this, Kt, md).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", g(this, Kt, bd).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Te, {
    signal: e
  });
}, Ad = function() {
  const {
    editorType: t,
    _uiManager: e
  } = r(this, ke), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", r(gs, ya)[t]), g(this, Kt, Vo).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), r(this, Hi).append(s);
}, ul = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, b(gs, Ch), b(gs, ya, null);
let dl = gs;
var va, Bi, zi, Si, yd, vd, wd;
class Mf {
  constructor(t) {
    b(this, Si);
    b(this, va, null);
    b(this, Bi, null);
    b(this, zi);
    p(this, zi, t);
  }
  show(t, e, s) {
    const [i, n] = g(this, Si, vd).call(this, e, s), {
      style: a
    } = r(this, Bi) || p(this, Bi, g(this, Si, yd).call(this));
    t.append(r(this, Bi)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    r(this, Bi).remove();
  }
}
va = new WeakMap(), Bi = new WeakMap(), zi = new WeakMap(), Si = new WeakSet(), yd = function() {
  const t = p(this, Bi, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Te, {
    signal: r(this, zi)._signal
  });
  const e = p(this, va, document.createElement("div"));
  return e.className = "buttons", t.append(e), g(this, Si, wd).call(this), t;
}, vd = function(t, e) {
  let s = 0, i = 0;
  for (const n of t) {
    const a = n.y + n.height;
    if (a < s)
      continue;
    const o = n.x + (e ? n.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, wd = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = r(this, zi)._signal;
  t.addEventListener("contextmenu", Te, {
    signal: s
  }), t.addEventListener("click", () => {
    r(this, zi).highlightSelection("floating_button");
  }, {
    signal: s
  }), r(this, va).append(t);
};
function vh(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
function kf(d) {
  return Math.round(Math.min(255, Math.max(1, 255 * d))).toString(16).padStart(2, "0");
}
var xh;
class Pf {
  constructor() {
    b(this, xh, 0);
  }
  get id() {
    return `${hf}${qt(this, xh)._++}`;
  }
}
xh = new WeakMap();
var Qn, wa, $t, Jn, qo;
const Ic = class Ic {
  constructor() {
    b(this, Jn);
    b(this, Qn, wf());
    b(this, wa, 0);
    b(this, $t, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const n = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return X(this, "_isSVGFittingCanvas", n);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: n
    } = t;
    return g(this, Jn, qo).call(this, `${e}_${s}_${i}_${n}`, t);
  }
  async getFromUrl(t) {
    return g(this, Jn, qo).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return g(this, Jn, qo).call(this, t, s);
  }
  async getFromId(t) {
    r(this, $t) || p(this, $t, /* @__PURE__ */ new Map());
    const e = r(this, $t).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: s
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    r(this, $t) || p(this, $t, /* @__PURE__ */ new Map());
    let s = r(this, $t).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${r(this, Qn)}_${qt(this, wa)._++}`,
      refCounter: 1,
      isSvg: !1
    }, r(this, $t).set(t, s), r(this, $t).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = r(this, $t).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    r(this, $t) || p(this, $t, /* @__PURE__ */ new Map());
    const e = r(this, $t).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const n = new OffscreenCanvas(s.width, s.height);
      n.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = n.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${r(this, Qn)}_`);
  }
};
Qn = new WeakMap(), wa = new WeakMap(), $t = new WeakMap(), Jn = new WeakSet(), qo = async function(t, e) {
  r(this, $t) || p(this, $t, /* @__PURE__ */ new Map());
  let s = r(this, $t).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${r(this, Qn)}_${qt(this, wa)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Vh(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const n = Ic._isSVGFittingCanvas, a = new FileReader(), o = new Image(), h = new Promise((l, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, l();
        }, a.onload = async () => {
          const u = s.svgUrl = a.result;
          o.src = await n ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await h;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    console.error(i), s = null;
  }
  return r(this, $t).set(t, s), s && r(this, $t).set(s.id, s), s;
};
let fl = Ic;
var Mt, Qs, _a, kt;
class Lf {
  constructor(t = 128) {
    b(this, Mt, []);
    b(this, Qs, !1);
    b(this, _a);
    b(this, kt, -1);
    p(this, _a, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: n = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), r(this, Qs))
      return;
    const h = {
      cmd: t,
      undo: e,
      post: s,
      type: n
    };
    if (r(this, kt) === -1) {
      r(this, Mt).length > 0 && (r(this, Mt).length = 0), p(this, kt, 0), r(this, Mt).push(h);
      return;
    }
    if (a && r(this, Mt)[r(this, kt)].type === n) {
      o && (h.undo = r(this, Mt)[r(this, kt)].undo), r(this, Mt)[r(this, kt)] = h;
      return;
    }
    const l = r(this, kt) + 1;
    l === r(this, _a) ? r(this, Mt).splice(0, 1) : (p(this, kt, l), l < r(this, Mt).length && r(this, Mt).splice(l)), r(this, Mt).push(h);
  }
  undo() {
    if (r(this, kt) === -1)
      return;
    p(this, Qs, !0);
    const {
      undo: t,
      post: e
    } = r(this, Mt)[r(this, kt)];
    t(), e == null || e(), p(this, Qs, !1), p(this, kt, r(this, kt) - 1);
  }
  redo() {
    if (r(this, kt) < r(this, Mt).length - 1) {
      p(this, kt, r(this, kt) + 1), p(this, Qs, !0);
      const {
        cmd: t,
        post: e
      } = r(this, Mt)[r(this, kt)];
      t(), e == null || e(), p(this, Qs, !1);
    }
  }
  hasSomethingToUndo() {
    return r(this, kt) !== -1;
  }
  hasSomethingToRedo() {
    return r(this, kt) < r(this, Mt).length - 1;
  }
  destroy() {
    p(this, Mt, null);
  }
}
Mt = new WeakMap(), Qs = new WeakMap(), _a = new WeakMap(), kt = new WeakMap();
var Th, _d;
class No {
  constructor(t) {
    b(this, Th);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = re.platform;
    for (const [s, i, n = {}] of t)
      for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: n
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: i,
          options: n
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(g(this, Th, _d).call(this, e));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: n = !1,
        args: a = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (i.bind(t, ...a, e)(), n || (e.stopPropagation(), e.preventDefault()));
  }
}
Th = new WeakSet(), _d = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Rh = class Rh {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Rf(t), X(this, "_colors", t);
  }
  convert(t) {
    const e = xc(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((n, a) => n === e[a]))
        return Rh._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? L.makeHexColor(...e) : t;
  }
};
O(Rh, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let pl = Rh;
var Zn, oe, St, Dt, tr, As, er, Pe, Js, sr, ji, Ge, Le, Ui, Ea, Sa, ir, Ca, We, Zs, nr, ti, Ve, Mh, ei, xa, si, $i, Ta, Ra, Pt, Z, ys, Gi, Ma, ka, ii, qe, vs, Pa, ve, M, Xo, gl, Ed, Sd, Yo, Cd, xd, Td, ml, Rd, bl, Al, Md, Xt, Vs, kd, Pd, yl, Ld, ea, vl;
const Xn = class Xn {
  constructor(t, e, s, i, n, a, o, h, l, c, u) {
    b(this, M);
    b(this, Zn, new AbortController());
    b(this, oe, null);
    b(this, St, /* @__PURE__ */ new Map());
    b(this, Dt, /* @__PURE__ */ new Map());
    b(this, tr, null);
    b(this, As, null);
    b(this, er, null);
    b(this, Pe, new Lf());
    b(this, Js, null);
    b(this, sr, 0);
    b(this, ji, /* @__PURE__ */ new Set());
    b(this, Ge, null);
    b(this, Le, null);
    b(this, Ui, /* @__PURE__ */ new Set());
    b(this, Ea, !1);
    b(this, Sa, !1);
    b(this, ir, !1);
    b(this, Ca, null);
    b(this, We, null);
    b(this, Zs, null);
    b(this, nr, null);
    b(this, ti, !1);
    b(this, Ve, null);
    b(this, Mh, new Pf());
    b(this, ei, !1);
    b(this, xa, !1);
    b(this, si, null);
    b(this, $i, null);
    b(this, Ta, null);
    b(this, Ra, null);
    b(this, Pt, U.NONE);
    b(this, Z, /* @__PURE__ */ new Set());
    b(this, ys, null);
    b(this, Gi, null);
    b(this, Ma, null);
    b(this, ka, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    b(this, ii, [0, 0]);
    b(this, qe, null);
    b(this, vs, null);
    b(this, Pa, null);
    b(this, ve, null);
    const f = this._signal = r(this, Zn).signal;
    p(this, vs, t), p(this, Pa, e), p(this, tr, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
      signal: f
    }), i._on("pagechanging", this.onPageChanging.bind(this), {
      signal: f
    }), i._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: f
    }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: f
    }), i._on("setpreference", this.onSetPreference.bind(this), {
      signal: f
    }), i._on("switchannotationeditorparams", (m) => this.updateParams(m.type, m.value), {
      signal: f
    }), g(this, M, Cd).call(this), g(this, M, Md).call(this), g(this, M, ml).call(this), p(this, As, n.annotationStorage), p(this, Ca, n.filterFactory), p(this, Gi, a), p(this, nr, o || null), p(this, Ea, h), p(this, Sa, l), p(this, ir, c), p(this, Ra, u || null), this.viewParameters = {
      realScale: _i.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const t = Xn.prototype, e = (a) => r(a, vs).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: h
        } = o;
        return h !== "text" && h !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
    return X(this, "_keyboardManager", new No([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && r(a, vs).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && r(a, vs).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-n, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [n, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -n],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, n],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, s, i;
    (t = r(this, ve)) == null || t.resolve(), p(this, ve, null), (e = r(this, Zn)) == null || e.abort(), p(this, Zn, null), this._signal = null;
    for (const n of r(this, Dt).values())
      n.destroy();
    r(this, Dt).clear(), r(this, St).clear(), r(this, Ui).clear(), p(this, oe, null), r(this, Z).clear(), r(this, Pe).destroy(), (s = r(this, tr)) == null || s.destroy(), (i = r(this, Ve)) == null || i.hide(), p(this, Ve, null), r(this, We) && (clearTimeout(r(this, We)), p(this, We, null)), r(this, qe) && (clearTimeout(r(this, qe)), p(this, qe, null));
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return r(this, Ra);
  }
  get useNewAltTextFlow() {
    return r(this, Sa);
  }
  get useNewAltTextWhenAddingImage() {
    return r(this, ir);
  }
  get hcmFilter() {
    return X(this, "hcmFilter", r(this, Gi) ? r(this, Ca).addHCMFilter(r(this, Gi).foreground, r(this, Gi).background) : "none");
  }
  get direction() {
    return X(this, "direction", getComputedStyle(r(this, vs)).direction);
  }
  get highlightColors() {
    return X(this, "highlightColors", r(this, nr) ? new Map(r(this, nr).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return X(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setMainHighlightColorPicker(t) {
    p(this, Ta, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = r(this, tr)) == null || s.editAltText(this, t, e);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        p(this, ir, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    p(this, sr, t - 1);
  }
  focusMainContainer() {
    r(this, vs).focus();
  }
  findParent(t, e) {
    for (const s of r(this, Dt).values()) {
      const {
        x: i,
        y: n,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= n && e <= n + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    r(this, Pa).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    r(this, Ui).add(t);
  }
  removeShouldRescale(t) {
    r(this, Ui).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * _i.PDF_TO_CSS_UNITS;
    for (const e of r(this, Ui))
      e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: i,
      focusNode: n,
      focusOffset: a
    } = e, o = e.toString(), l = g(this, M, Xo).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(l);
    if (!c)
      return;
    e.empty();
    const u = g(this, M, gl).call(this, l), f = r(this, Pt) === U.NONE, m = () => {
      u == null || u.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: c,
        anchorNode: s,
        anchorOffset: i,
        focusNode: n,
        focusOffset: a,
        text: o
      }), f && this.showAllEditors("highlight", !0, !0);
    };
    if (f) {
      this.switchToMode(U.HIGHLIGHT, m);
      return;
    }
    m();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && r(this, As) && !r(this, As).has(t.id) && r(this, As).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, r(this, ti) && (p(this, ti, !1), g(this, M, Yo).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of r(this, Z))
      if (e.div.contains(t)) {
        p(this, $i, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!r(this, $i))
      return;
    const [t, e] = r(this, $i);
    p(this, $i, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    g(this, M, ml).call(this), g(this, M, bl).call(this);
  }
  removeEditListeners() {
    g(this, M, Rd).call(this), g(this, M, Al).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of r(this, Le))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of r(this, Le))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = r(this, oe)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of r(this, Z)) {
      const n = i.serialize(!0);
      n && e.push(n);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const n of e.items)
      for (const a of r(this, Le))
        if (a.isHandlingMimeForPasting(n.type)) {
          a.paste(n, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (n) {
      W(`paste: "${n.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const n = [];
      for (const h of s) {
        const l = await i.deserialize(h);
        if (!l)
          return;
        n.push(l);
      }
      const a = () => {
        for (const h of n)
          g(this, M, yl).call(this, h);
        g(this, M, vl).call(this, n);
      }, o = () => {
        for (const h of n)
          h.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (n) {
      W(`paste: "${n.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), r(this, Pt) !== U.NONE && !this.isEditorHandlingKeyboard && Xn._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, r(this, ti) && (p(this, ti, !1), g(this, M, Yo).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (g(this, M, xd).call(this), g(this, M, bl).call(this), g(this, M, Xt).call(this, {
      isEditing: r(this, Pt) !== U.NONE,
      isEmpty: g(this, M, ea).call(this),
      hasSomethingToUndo: r(this, Pe).hasSomethingToUndo(),
      hasSomethingToRedo: r(this, Pe).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (g(this, M, Td).call(this), g(this, M, Al).call(this), g(this, M, Xt).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!r(this, Le)) {
      p(this, Le, t);
      for (const e of r(this, Le))
        g(this, M, Vs).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return r(this, Mh).id;
  }
  get currentLayer() {
    return r(this, Dt).get(r(this, sr));
  }
  getLayer(t) {
    return r(this, Dt).get(t);
  }
  get currentPageIndex() {
    return r(this, sr);
  }
  addLayer(t) {
    r(this, Dt).set(t.pageIndex, t), r(this, ei) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    r(this, Dt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    if (r(this, Pt) !== t && !(r(this, ve) && (await r(this, ve).promise, !r(this, ve)))) {
      if (p(this, ve, Promise.withResolvers()), p(this, Pt, t), t === U.NONE) {
        this.setEditingState(!1), g(this, M, Pd).call(this), r(this, ve).resolve();
        return;
      }
      this.setEditingState(!0), await g(this, M, kd).call(this), this.unselectAll();
      for (const i of r(this, Dt).values())
        i.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), r(this, ve).resolve();
        return;
      }
      for (const i of r(this, St).values())
        i.annotationElementId === e ? (this.setSelected(i), i.enterInEditMode()) : i.unselect();
      r(this, ve).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== r(this, Pt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var s;
    if (r(this, Le)) {
      switch (t) {
        case H.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case H.HIGHLIGHT_DEFAULT_COLOR:
          (s = r(this, Ta)) == null || s.updateColor(e);
          break;
        case H.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (r(this, Ma) || p(this, Ma, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of r(this, Z))
        i.updateParams(t, e);
      for (const i of r(this, Le))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var n;
    for (const a of r(this, St).values())
      a.editorType === t && a.show(e);
    (((n = r(this, Ma)) == null ? void 0 : n.get(H.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && g(this, M, Vs).call(this, [[H.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (r(this, xa) !== t) {
      p(this, xa, t);
      for (const e of r(this, Dt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of r(this, St).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return r(this, St).get(t);
  }
  addEditor(t) {
    r(this, St).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (r(this, We) && clearTimeout(r(this, We)), p(this, We, setTimeout(() => {
      this.focusMainContainer(), p(this, We, null);
    }, 0))), r(this, St).delete(t.id), this.unselect(t), (!t.annotationElementId || !r(this, ji).has(t.annotationElementId)) && ((e = r(this, As)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    r(this, ji).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return r(this, ji).has(t);
  }
  removeDeletedAnnotationElement(t) {
    r(this, ji).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    r(this, oe) !== t && (p(this, oe, t), t && g(this, M, Vs).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    r(this, M, Ld) === t && g(this, M, Vs).call(this, t.propertiesToUpdate);
  }
  toggleSelected(t) {
    if (r(this, Z).has(t)) {
      r(this, Z).delete(t), t.unselect(), g(this, M, Xt).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    r(this, Z).add(t), t.select(), g(this, M, Vs).call(this, t.propertiesToUpdate), g(this, M, Xt).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    for (const e of r(this, Z))
      e !== t && e.unselect();
    r(this, Z).clear(), r(this, Z).add(t), t.select(), g(this, M, Vs).call(this, t.propertiesToUpdate), g(this, M, Xt).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return r(this, Z).has(t);
  }
  get firstSelectedEditor() {
    return r(this, Z).values().next().value;
  }
  unselect(t) {
    t.unselect(), r(this, Z).delete(t), g(this, M, Xt).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return r(this, Z).size !== 0;
  }
  get isEnterHandled() {
    return r(this, Z).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    r(this, Pe).undo(), g(this, M, Xt).call(this, {
      hasSomethingToUndo: r(this, Pe).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: g(this, M, ea).call(this)
    });
  }
  redo() {
    r(this, Pe).redo(), g(this, M, Xt).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: r(this, Pe).hasSomethingToRedo(),
      isEmpty: g(this, M, ea).call(this)
    });
  }
  addCommands(t) {
    r(this, Pe).add(t), g(this, M, Xt).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: g(this, M, ea).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const t = [...r(this, Z)], e = () => {
      for (const i of t)
        i.remove();
    }, s = () => {
      for (const i of t)
        g(this, M, yl).call(this, i);
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = r(this, oe)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return r(this, oe) || this.hasSelection;
  }
  selectAll() {
    for (const t of r(this, Z))
      t.commit();
    g(this, M, vl).call(this, r(this, St).values());
  }
  unselectAll() {
    if (!(r(this, oe) && (r(this, oe).commitOrRemove(), r(this, Pt) !== U.NONE)) && this.hasSelection) {
      for (const t of r(this, Z))
        t.unselect();
      r(this, Z).clear(), g(this, M, Xt).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    r(this, ii)[0] += t, r(this, ii)[1] += e;
    const [i, n] = r(this, ii), a = [...r(this, Z)], o = 1e3;
    r(this, qe) && clearTimeout(r(this, qe)), p(this, qe, setTimeout(() => {
      p(this, qe, null), r(this, ii)[0] = r(this, ii)[1] = 0, this.addCommands({
        cmd: () => {
          for (const h of a)
            r(this, St).has(h.id) && h.translateInPage(i, n);
        },
        undo: () => {
          for (const h of a)
            r(this, St).has(h.id) && h.translateInPage(-i, -n);
        },
        mustExec: !1
      });
    }, o));
    for (const h of a)
      h.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), p(this, Ge, /* @__PURE__ */ new Map());
      for (const t of r(this, Z))
        r(this, Ge).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!r(this, Ge))
      return !1;
    this.disableUserSelect(!1);
    const t = r(this, Ge);
    p(this, Ge, null);
    let e = !1;
    for (const [{
      x: i,
      y: n,
      pageIndex: a
    }, o] of t)
      o.newX = i, o.newY = n, o.newPageIndex = a, e || (e = i !== o.savedX || n !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const s = (i, n, a, o) => {
      if (r(this, St).has(i.id)) {
        const h = r(this, Dt).get(o);
        h ? i._setParentAndPosition(h, n, a) : (i.pageIndex = o, i.x = n, i.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: n,
          newY: a,
          newPageIndex: o
        }] of t)
          s(i, n, a, o);
      },
      undo: () => {
        for (const [i, {
          savedX: n,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(i, n, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (r(this, Ge))
      for (const s of r(this, Ge).keys())
        s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || r(this, Z).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return r(this, oe) === t;
  }
  getActive() {
    return r(this, oe);
  }
  getMode() {
    return r(this, Pt);
  }
  get imageManager() {
    return X(this, "imageManager", new fl());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let l = 0, c = e.rangeCount; l < c; l++)
      if (!t.contains(e.getRangeAt(l).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: i,
      width: n,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (l, c, u, f) => ({
          x: (c - i) / a,
          y: 1 - (l + u - s) / n,
          width: f / a,
          height: u / n
        });
        break;
      case "180":
        o = (l, c, u, f) => ({
          x: 1 - (l + u - s) / n,
          y: 1 - (c + f - i) / a,
          width: u / n,
          height: f / a
        });
        break;
      case "270":
        o = (l, c, u, f) => ({
          x: 1 - (c + f - i) / a,
          y: (l - s) / n,
          width: f / a,
          height: u / n
        });
        break;
      default:
        o = (l, c, u, f) => ({
          x: (l - s) / n,
          y: (c - i) / a,
          width: u / n,
          height: f / a
        });
        break;
    }
    const h = [];
    for (let l = 0, c = e.rangeCount; l < c; l++) {
      const u = e.getRangeAt(l);
      if (!u.collapsed)
        for (const {
          x: f,
          y: m,
          width: A,
          height: y
        } of u.getClientRects())
          A === 0 || y === 0 || h.push(o(f, m, A, y));
    }
    return h.length === 0 ? null : h;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (r(this, er) || p(this, er, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = r(this, er)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = r(this, er)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = r(this, As).getRawValue(e);
    s && (r(this, Pt) === U.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
};
Zn = new WeakMap(), oe = new WeakMap(), St = new WeakMap(), Dt = new WeakMap(), tr = new WeakMap(), As = new WeakMap(), er = new WeakMap(), Pe = new WeakMap(), Js = new WeakMap(), sr = new WeakMap(), ji = new WeakMap(), Ge = new WeakMap(), Le = new WeakMap(), Ui = new WeakMap(), Ea = new WeakMap(), Sa = new WeakMap(), ir = new WeakMap(), Ca = new WeakMap(), We = new WeakMap(), Zs = new WeakMap(), nr = new WeakMap(), ti = new WeakMap(), Ve = new WeakMap(), Mh = new WeakMap(), ei = new WeakMap(), xa = new WeakMap(), si = new WeakMap(), $i = new WeakMap(), Ta = new WeakMap(), Ra = new WeakMap(), Pt = new WeakMap(), Z = new WeakMap(), ys = new WeakMap(), Gi = new WeakMap(), Ma = new WeakMap(), ka = new WeakMap(), ii = new WeakMap(), qe = new WeakMap(), vs = new WeakMap(), Pa = new WeakMap(), ve = new WeakMap(), M = new WeakSet(), Xo = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, gl = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of r(this, Dt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, Ed = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = g(this, M, Xo).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (r(this, Ve) || p(this, Ve, new Mf(this)), r(this, Ve).show(s, i, this.direction === "ltr"));
}, Sd = function() {
  var n, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    r(this, ys) && ((n = r(this, Ve)) == null || n.hide(), p(this, ys, null), g(this, M, Xt).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === r(this, ys))
    return;
  const i = g(this, M, Xo).call(this, t).closest(".textLayer");
  if (!i) {
    r(this, ys) && ((a = r(this, Ve)) == null || a.hide(), p(this, ys, null), g(this, M, Xt).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = r(this, Ve)) == null || o.hide(), p(this, ys, e), g(this, M, Xt).call(this, {
    hasSelectedText: !0
  }), !(r(this, Pt) !== U.HIGHLIGHT && r(this, Pt) !== U.NONE) && (r(this, Pt) === U.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), p(this, ti, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const h = r(this, Pt) === U.HIGHLIGHT ? g(this, M, gl).call(this, i) : null;
    h == null || h.toggleDrawing();
    const l = new AbortController(), c = this.combinedSignal(l), u = (f) => {
      f.type === "pointerup" && f.button !== 0 || (l.abort(), h == null || h.toggleDrawing(!0), f.type === "pointerup" && g(this, M, Yo).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: c
    }), window.addEventListener("blur", u, {
      signal: c
    });
  }
}, Yo = function(t = "") {
  r(this, Pt) === U.HIGHLIGHT ? this.highlightSelection(t) : r(this, Ea) && g(this, M, Ed).call(this);
}, Cd = function() {
  document.addEventListener("selectionchange", g(this, M, Sd).bind(this), {
    signal: this._signal
  });
}, xd = function() {
  if (r(this, Zs))
    return;
  p(this, Zs, new AbortController());
  const t = this.combinedSignal(r(this, Zs));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Td = function() {
  var t;
  (t = r(this, Zs)) == null || t.abort(), p(this, Zs, null);
}, ml = function() {
  if (r(this, si))
    return;
  p(this, si, new AbortController());
  const t = this.combinedSignal(r(this, si));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, Rd = function() {
  var t;
  (t = r(this, si)) == null || t.abort(), p(this, si, null);
}, bl = function() {
  if (r(this, Js))
    return;
  p(this, Js, new AbortController());
  const t = this.combinedSignal(r(this, Js));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, Al = function() {
  var t;
  (t = r(this, Js)) == null || t.abort(), p(this, Js, null);
}, Md = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, Xt = function(t) {
  Object.entries(t).some(([s, i]) => r(this, ka)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(r(this, ka), t)
  }), r(this, Pt) === U.HIGHLIGHT && t.hasSelectedEditor === !1 && g(this, M, Vs).call(this, [[H.HIGHLIGHT_FREE, !0]]));
}, Vs = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, kd = async function() {
  if (!r(this, ei)) {
    p(this, ei, !0);
    const t = [];
    for (const e of r(this, Dt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of r(this, St).values())
      e.enable();
  }
}, Pd = function() {
  if (this.unselectAll(), r(this, ei)) {
    p(this, ei, !1);
    for (const t of r(this, Dt).values())
      t.disable();
    for (const t of r(this, St).values())
      t.disable();
  }
}, yl = function(t) {
  const e = r(this, Dt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Ld = function() {
  let t = null;
  for (t of r(this, Z))
    ;
  return t;
}, ea = function() {
  if (r(this, St).size === 0)
    return !0;
  if (r(this, St).size === 1)
    for (const t of r(this, St).values())
      return t.isEmpty();
  return !1;
}, vl = function(t) {
  for (const e of r(this, Z))
    e.unselect();
  r(this, Z).clear();
  for (const e of t)
    e.isEmpty() || (r(this, Z).add(e), e.select());
  g(this, M, Xt).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, O(Xn, "TRANSLATE_SMALL", 1), O(Xn, "TRANSLATE_BIG", 10);
let In = Xn;
var Lt, Xe, Ie, Ye, he, rr, Ke, te, ws, Wi, Qe, ar, hs, Ko, Qo;
const Rt = class Rt {
  constructor(t) {
    b(this, hs);
    b(this, Lt, null);
    b(this, Xe, !1);
    b(this, Ie, null);
    b(this, Ye, null);
    b(this, he, null);
    b(this, rr, !1);
    b(this, Ke, null);
    b(this, te, null);
    b(this, ws, null);
    b(this, Wi, null);
    b(this, Qe, !1);
    p(this, te, t), p(this, Qe, t._uiManager.useNewAltTextFlow), r(Rt, ar) || p(Rt, ar, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    Rt._l10nPromise || (Rt._l10nPromise = t);
  }
  async render() {
    const t = p(this, Ie, document.createElement("button"));
    t.className = "altText";
    let e;
    r(this, Qe) ? (t.classList.add("new"), e = await Rt._l10nPromise.get(r(Rt, ar).missing)) : e = await Rt._l10nPromise.get("pdfjs-editor-alt-text-button-label"), t.textContent = e, t.setAttribute("aria-label", e), t.tabIndex = "0";
    const s = r(this, te)._uiManager._signal;
    t.addEventListener("contextmenu", Te, {
      signal: s
    }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
      signal: s
    });
    const i = (n) => {
      n.preventDefault(), r(this, te)._uiManager.editAltText(r(this, te)), r(this, Qe) && r(this, te)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: r(this, hs, Ko)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (n) => {
      n.target === t && n.key === "Enter" && (p(this, rr, !0), i(n));
    }, {
      signal: s
    }), await g(this, hs, Qo).call(this), t;
  }
  finish() {
    r(this, Ie) && (r(this, Ie).focus({
      focusVisible: r(this, rr)
    }), p(this, rr, !1));
  }
  isEmpty() {
    return r(this, Qe) ? r(this, Lt) === null : !r(this, Lt) && !r(this, Xe);
  }
  hasData() {
    return r(this, Qe) ? r(this, Lt) !== null || !!r(this, ws) : this.isEmpty();
  }
  get guessedText() {
    return r(this, ws);
  }
  async setGuessedText(t) {
    r(this, Lt) === null && (p(this, ws, t), p(this, Wi, await Rt._l10nPromise.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer")({
      generatedAltText: t
    })), g(this, hs, Qo).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!r(this, Qe) || r(this, Lt)) {
      (e = r(this, Ke)) == null || e.remove(), p(this, Ke, null);
      return;
    }
    if (!r(this, Ke)) {
      const s = p(this, Ke, document.createElement("div"));
      s.className = "noAltTextBadge", r(this, te).div.append(s);
    }
    r(this, Ke).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = r(this, Lt);
    return !t && r(this, ws) === e && (e = r(this, Wi)), {
      altText: e,
      decorative: r(this, Xe),
      guessedText: r(this, ws),
      textWithDisclaimer: r(this, Wi)
    };
  }
  get data() {
    return {
      altText: r(this, Lt),
      decorative: r(this, Xe)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: n = !1
  }) {
    s && (p(this, ws, s), p(this, Wi, i)), !(r(this, Lt) === t && r(this, Xe) === e) && (n || (p(this, Lt, t), p(this, Xe, e)), g(this, hs, Qo).call(this));
  }
  toggle(t = !1) {
    r(this, Ie) && (!t && r(this, he) && (clearTimeout(r(this, he)), p(this, he, null)), r(this, Ie).disabled = !t);
  }
  shown() {
    r(this, te)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: r(this, hs, Ko)
      }
    });
  }
  destroy() {
    var t, e;
    (t = r(this, Ie)) == null || t.remove(), p(this, Ie, null), p(this, Ye, null), (e = r(this, Ke)) == null || e.remove(), p(this, Ke, null);
  }
};
Lt = new WeakMap(), Xe = new WeakMap(), Ie = new WeakMap(), Ye = new WeakMap(), he = new WeakMap(), rr = new WeakMap(), Ke = new WeakMap(), te = new WeakMap(), ws = new WeakMap(), Wi = new WeakMap(), Qe = new WeakMap(), ar = new WeakMap(), hs = new WeakSet(), Ko = function() {
  return r(this, Lt) && "added" || r(this, Lt) === null && this.guessedText && "review" || "missing";
}, Qo = async function() {
  var i, n;
  const t = r(this, Ie);
  if (!t)
    return;
  if (r(this, Qe)) {
    if (t.classList.toggle("done", !!r(this, Lt)), Rt._l10nPromise.get(r(Rt, ar)[r(this, hs, Ko)]).then((a) => {
      t.setAttribute("aria-label", a);
      for (const o of t.childNodes)
        if (o.nodeType === Node.TEXT_NODE) {
          o.textContent = a;
          break;
        }
    }), !r(this, Lt)) {
      (i = r(this, Ye)) == null || i.remove();
      return;
    }
  } else {
    if (!r(this, Lt) && !r(this, Xe)) {
      t.classList.remove("done"), (n = r(this, Ye)) == null || n.remove();
      return;
    }
    t.classList.add("done"), Rt._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((a) => {
      t.setAttribute("aria-label", a);
    });
  }
  let e = r(this, Ye);
  if (!e) {
    p(this, Ye, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${r(this, te).id}`;
    const a = 100, o = r(this, te)._uiManager._signal;
    o.addEventListener("abort", () => {
      clearTimeout(r(this, he)), p(this, he, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      p(this, he, setTimeout(() => {
        p(this, he, null), r(this, Ye).classList.add("show"), r(this, te)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, a));
    }, {
      signal: o
    }), t.addEventListener("mouseleave", () => {
      var h;
      r(this, he) && (clearTimeout(r(this, he)), p(this, he, null)), (h = r(this, Ye)) == null || h.classList.remove("show");
    }, {
      signal: o
    });
  }
  e.innerText = r(this, Xe) ? await Rt._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : r(this, Lt), e.parentNode || t.append(e);
  const s = r(this, te).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, b(Rt, ar, null), O(Rt, "_l10nPromise", null);
let wh = Rt;
var Vi, Fe, dt, or, qi, Nt, Xi, ni, La, Yi, ri, Ia, Ki, _s, Je, hr, lr, we, Fa, kh, G, wl, Da, _l, El, Id, Fd, Sl, Cl, xl, Dd, Tl, Nd, Od, Hd, Rl, sa;
const K = class K {
  constructor(t) {
    b(this, G);
    b(this, Vi, null);
    b(this, Fe, null);
    b(this, dt, null);
    b(this, or, !1);
    b(this, qi, !1);
    b(this, Nt, null);
    b(this, Xi, null);
    b(this, ni, null);
    b(this, La, "");
    b(this, Yi, !1);
    b(this, ri, null);
    b(this, Ia, !1);
    b(this, Ki, !1);
    b(this, _s, !1);
    b(this, Je, null);
    b(this, hr, 0);
    b(this, lr, 0);
    b(this, we, null);
    O(this, "_editToolbar", null);
    O(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    O(this, "_initialData", null);
    O(this, "_isVisible", !0);
    O(this, "_uiManager", null);
    O(this, "_focusEventsAllowed", !0);
    b(this, Fa, !1);
    b(this, kh, K._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: n,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [n, a];
    const [o, h] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / h, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = K.prototype._resizeWithKeyboard, e = In.TRANSLATE_SMALL, s = In.TRANSLATE_BIG;
    return X(this, "_resizerKeyboardManager", new No([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], K.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return X(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new If({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e, s) {
    if (K._l10nResizer || (K._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), K._l10nPromise || (K._l10nPromise = new Map([...["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-new-alt-text-added-button-label", "pdfjs-editor-new-alt-text-missing-button-label", "pdfjs-editor-new-alt-text-to-review-button-label"].map((n) => [n, t.get(n)]), ...["pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer"].map((n) => [n, t.get.bind(t, n)])])), s != null && s.strings)
      for (const n of s.strings)
        K._l10nPromise.set(n, t.get(n));
    if (K._borderLineWidth !== -1)
      return;
    const i = getComputedStyle(document.documentElement);
    K._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    vt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return r(this, Fa);
  }
  set _isDraggable(t) {
    var e;
    p(this, Fa, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = r(this, kh);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : g(this, G, sa).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (r(this, Yi) ? p(this, Yi, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [n, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / n, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  translate(t, e) {
    g(this, G, wl).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    r(this, ri) || p(this, ri, [this.x, this.y]), g(this, G, wl).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    r(this, ri) || p(this, ri, [this.x, this.y]);
    const [s, i] = this.parentDimensions;
    if (this.x += t / s, this.y += e / i, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: l,
        y: c
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, l, c) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: n,
      y: a
    } = this;
    const [o, h] = this.getBaseTranslation();
    n += o, a += h, this.div.style.left = `${(100 * n).toFixed(2)}%`, this.div.style.top = `${(100 * a).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!r(this, ri) && (r(this, ri)[0] !== this.x || r(this, ri)[1] !== this.y);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = K, i = s / t, n = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, n];
      case 180:
        return [i, n];
      case 270:
        return [i, -n];
      default:
        return [-i, -n];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const [e, s] = this.pageDimensions;
    let {
      x: i,
      y: n,
      width: a,
      height: o
    } = this;
    if (a *= e, o *= s, i *= e, n *= s, this._mustFixPosition)
      switch (t) {
        case 0:
          i = Math.max(0, Math.min(e - a, i)), n = Math.max(0, Math.min(s - o, n));
          break;
        case 90:
          i = Math.max(0, Math.min(e - o, i)), n = Math.min(s, Math.max(a, n));
          break;
        case 180:
          i = Math.min(e, Math.max(a, i)), n = Math.min(s, Math.max(o, n));
          break;
        case 270:
          i = Math.min(e, Math.max(o, i)), n = Math.max(0, Math.min(s - a, n));
          break;
      }
    this.x = i /= e, this.y = n /= s;
    const [h, l] = this.getBaseTranslation();
    i += h, n += l;
    const {
      style: c
    } = this.div;
    c.left = `${(100 * i).toFixed(2)}%`, c.top = `${(100 * n).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return g(s = K, Da, _l).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return g(s = K, Da, _l).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    } = this;
    return [e * t, s * t];
  }
  setDims(t, e) {
    const [s, i] = this.parentDimensions;
    this.div.style.width = `${(100 * t / s).toFixed(2)}%`, r(this, qi) || (this.div.style.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), n = !r(this, qi) && e.endsWith("%");
    if (i && n)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !r(this, qi) && !n && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var t;
    (t = r(this, dt)) == null || t.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || r(this, Ki) ? this._editToolbar : (this._editToolbar = new dl(this), this.div.append(this._editToolbar.render()), r(this, dt) && await this._editToolbar.addAltText(r(this, dt)), this._editToolbar);
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = r(this, dt)) == null || t.destroy());
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    r(this, dt) || (wh.initialize(K._l10nPromise), p(this, dt, new wh(this)), r(this, Vi) && (r(this, dt).data = r(this, Vi), p(this, Vi, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = r(this, dt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    r(this, dt) && (r(this, dt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = r(this, dt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = r(this, dt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = r(this, dt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!r(this, dt) && !r(this, dt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = r(this, dt)) == null ? void 0 : t.hasData()) ?? !1;
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = r(this, or) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), g(this, G, Tl).call(this);
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), vh(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = re.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (p(this, Yi, !0), this._isDraggable) {
      g(this, G, Dd).call(this, t);
      return;
    }
    g(this, G, xl).call(this, t);
  }
  moveInDOM() {
    r(this, Je) && clearTimeout(r(this, Je)), p(this, Je, setTimeout(() => {
      var t;
      p(this, Je, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [n, a] = this.pageDimensions, [o, h] = this.pageTranslation, l = t / i, c = e / i, u = this.x * n, f = this.y * a, m = this.width * n, A = this.height * a;
    switch (s) {
      case 0:
        return [u + l + o, a - f - c - A + h, u + l + m + o, a - f - c + h];
      case 90:
        return [u + c + o, a - f + l + h, u + c + A + o, a - f + l + m + h];
      case 180:
        return [u - l - m + o, a - f + c + h, u - l + o, a - f + c + A + h];
      case 270:
        return [u - c - A + o, a - f - l - m + h, u - c + o, a - f - l + h];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, n, a] = t, o = n - s, h = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, h];
      case 90:
        return [s, e - i, h, o];
      case 180:
        return [n, e - i, o, h];
      case 270:
        return [n, e - a, h, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    p(this, Ki, !0);
  }
  disableEditMode() {
    p(this, Ki, !1);
  }
  isInEditMode() {
    return r(this, Ki);
  }
  shouldGetKeyboardEvents() {
    return r(this, _s);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    g(this, G, Tl).call(this);
  }
  rotate(t) {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    vt("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s
    });
    i.rotation = t.rotation, p(i, Vi, t.accessibilityData);
    const [n, a] = i.pageDimensions, [o, h, l, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / n, i.y = h / a, i.width = l / n, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t;
    if ((t = r(this, ni)) == null || t.abort(), p(this, ni, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), r(this, Je) && (clearTimeout(r(this, Je)), p(this, Je, null)), g(this, G, sa).call(this), this.removeEditToolbar(), r(this, we)) {
      for (const e of r(this, we).values())
        clearTimeout(e);
      p(this, we, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (g(this, G, Id).call(this), r(this, Nt).classList.remove("hidden"), vh(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), p(this, Xi, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = r(this, Nt).children;
    if (!r(this, Fe)) {
      p(this, Fe, Array.from(e));
      const a = g(this, G, Nd).bind(this), o = g(this, G, Od).bind(this), h = this._uiManager._signal;
      for (const l of r(this, Fe)) {
        const c = l.getAttribute("data-resizer-name");
        l.setAttribute("role", "spinbutton"), l.addEventListener("keydown", a, {
          signal: h
        }), l.addEventListener("blur", o, {
          signal: h
        }), l.addEventListener("focus", g(this, G, Hd).bind(this, c), {
          signal: h
        }), l.setAttribute("data-l10n-id", K._l10nResizer[c]);
      }
    }
    const s = r(this, Fe)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (r(this, Fe).length / 4);
    if (n !== i) {
      if (n < i)
        for (let o = 0; o < i - n; o++)
          r(this, Nt).append(r(this, Nt).firstChild);
      else if (n > i)
        for (let o = 0; o < n - i; o++)
          r(this, Nt).firstChild.before(r(this, Nt).lastChild);
      let a = 0;
      for (const o of e) {
        const l = r(this, Fe)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", K._l10nResizer[l]);
      }
    }
    g(this, G, Rl).call(this, 0), p(this, _s, !0), r(this, Nt).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    r(this, _s) && g(this, G, Cl).call(this, r(this, La), {
      movementX: t,
      movementY: e
    });
  }
  _stopResizingWithKeyboard() {
    g(this, G, sa).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, n;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((n = this._editToolbar) == null || n.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (s = r(this, dt)) == null || s.toggleAltTextBadge(!1);
  }
  unselect() {
    var t, e, s, i, n;
    (t = r(this, Nt)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (n = r(this, dt)) == null || n.toggleAltTextBadge(!0);
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return r(this, Ia);
  }
  set isEditing(t) {
    p(this, Ia, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    p(this, qi, !0);
    const s = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = s, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      r(this, we) || p(this, we, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = r(this, we).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), r(this, we).delete(s), r(this, we).size === 0 && p(this, we, null);
      }, K._telemetryTimeout), r(this, we).set(s, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), p(this, or, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), p(this, or, !0);
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
Vi = new WeakMap(), Fe = new WeakMap(), dt = new WeakMap(), or = new WeakMap(), qi = new WeakMap(), Nt = new WeakMap(), Xi = new WeakMap(), ni = new WeakMap(), La = new WeakMap(), Yi = new WeakMap(), ri = new WeakMap(), Ia = new WeakMap(), Ki = new WeakMap(), _s = new WeakMap(), Je = new WeakMap(), hr = new WeakMap(), lr = new WeakMap(), we = new WeakMap(), Fa = new WeakMap(), kh = new WeakMap(), G = new WeakSet(), wl = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this.fixAndSetPosition();
}, Da = new WeakSet(), _l = function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, El = function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Id = function() {
  if (r(this, Nt))
    return;
  p(this, Nt, document.createElement("div")), r(this, Nt).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    r(this, Nt).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", g(this, G, Fd).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", Te, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(r(this, Nt));
}, Fd = function(t, e) {
  var A;
  e.preventDefault();
  const {
    isMac: s
  } = re.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (A = r(this, dt)) == null || A.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1;
  const n = new AbortController(), a = this._uiManager.combinedSignal(n);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", g(this, G, Cl).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("contextmenu", Te, {
    signal: a
  });
  const o = this.x, h = this.y, l = this.width, c = this.height, u = this.parent.div.style.cursor, f = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const m = () => {
    var y;
    n.abort(), this.parent.togglePointerEvents(!0), (y = r(this, dt)) == null || y.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = u, this.div.style.cursor = f, g(this, G, Sl).call(this, o, h, l, c);
  };
  window.addEventListener("pointerup", m, {
    signal: a
  }), window.addEventListener("blur", m, {
    signal: a
  });
}, Sl = function(t, e, s, i) {
  const n = this.x, a = this.y, o = this.width, h = this.height;
  n === t && a === e && o === s && h === i || this.addCommands({
    cmd: () => {
      this.width = o, this.height = h, this.x = n, this.y = a;
      const [l, c] = this.parentDimensions;
      this.setDims(l * o, c * h), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = s, this.height = i, this.x = t, this.y = e;
      const [l, c] = this.parentDimensions;
      this.setDims(l * s, c * i), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, Cl = function(t, e) {
  const [s, i] = this.parentDimensions, n = this.x, a = this.y, o = this.width, h = this.height, l = K.MIN_SIZE / s, c = K.MIN_SIZE / i, u = (N) => Math.round(N * 1e4) / 1e4, f = g(this, G, El).call(this, this.rotation), m = (N, z) => [f[0] * N + f[2] * z, f[1] * N + f[3] * z], A = g(this, G, El).call(this, 360 - this.rotation), y = (N, z) => [A[0] * N + A[2] * z, A[1] * N + A[3] * z];
  let w, v, _ = !1, E = !1;
  switch (t) {
    case "topLeft":
      _ = !0, w = (N, z) => [0, 0], v = (N, z) => [N, z];
      break;
    case "topMiddle":
      w = (N, z) => [N / 2, 0], v = (N, z) => [N / 2, z];
      break;
    case "topRight":
      _ = !0, w = (N, z) => [N, 0], v = (N, z) => [0, z];
      break;
    case "middleRight":
      E = !0, w = (N, z) => [N, z / 2], v = (N, z) => [0, z / 2];
      break;
    case "bottomRight":
      _ = !0, w = (N, z) => [N, z], v = (N, z) => [0, 0];
      break;
    case "bottomMiddle":
      w = (N, z) => [N / 2, z], v = (N, z) => [N / 2, 0];
      break;
    case "bottomLeft":
      _ = !0, w = (N, z) => [0, z], v = (N, z) => [N, 0];
      break;
    case "middleLeft":
      E = !0, w = (N, z) => [0, z / 2], v = (N, z) => [N, z / 2];
      break;
  }
  const S = w(o, h), x = v(o, h);
  let C = m(...x);
  const T = u(n + C[0]), k = u(a + C[1]);
  let F = 1, $ = 1, [D, tt] = this.screenToPageTranslation(e.movementX, e.movementY);
  if ([D, tt] = y(D / s, tt / i), _) {
    const N = Math.hypot(o, h);
    F = $ = Math.max(Math.min(Math.hypot(x[0] - S[0] - D, x[1] - S[1] - tt) / N, 1 / o, 1 / h), l / o, c / h);
  } else E ? F = Math.max(l, Math.min(1, Math.abs(x[0] - S[0] - D))) / o : $ = Math.max(c, Math.min(1, Math.abs(x[1] - S[1] - tt))) / h;
  const Y = u(o * F), et = u(h * $);
  C = m(...v(Y, et));
  const st = T - C[0], ht = k - C[1];
  this.width = Y, this.height = et, this.x = st, this.y = ht, this.setDims(s * Y, i * et), this.fixAndSetPosition();
}, xl = function(t) {
  const {
    isMac: e
  } = re.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Dd = function(t) {
  const e = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  const s = new AbortController(), i = this._uiManager.combinedSignal(s);
  if (e) {
    this.div.classList.add("moving"), p(this, hr, t.clientX), p(this, lr, t.clientY);
    const a = (o) => {
      const {
        clientX: h,
        clientY: l
      } = o, [c, u] = this.screenToPageTranslation(h - r(this, hr), l - r(this, lr));
      p(this, hr, h), p(this, lr, l), this._uiManager.dragSelectedEditors(c, u);
    };
    window.addEventListener("pointermove", a, {
      passive: !0,
      capture: !0,
      signal: i
    });
  }
  const n = () => {
    s.abort(), e && this.div.classList.remove("moving"), p(this, Yi, !1), this._uiManager.endDragSession() || g(this, G, xl).call(this, t);
  };
  window.addEventListener("pointerup", n, {
    signal: i
  }), window.addEventListener("blur", n, {
    signal: i
  });
}, Tl = function() {
  if (r(this, ni) || !this.div)
    return;
  p(this, ni, new AbortController());
  const t = this._uiManager.combinedSignal(r(this, ni));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Nd = function(t) {
  K._resizerKeyboardManager.exec(this, t);
}, Od = function(t) {
  var e;
  r(this, _s) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== r(this, Nt) && g(this, G, sa).call(this);
}, Hd = function(t) {
  p(this, La, r(this, _s) ? t : "");
}, Rl = function(t) {
  if (r(this, Fe))
    for (const e of r(this, Fe))
      e.tabIndex = t;
}, sa = function() {
  if (p(this, _s, !1), g(this, G, Rl).call(this, -1), r(this, Xi)) {
    const {
      savedX: t,
      savedY: e,
      savedWidth: s,
      savedHeight: i
    } = r(this, Xi);
    g(this, G, Sl).call(this, t, e, s, i), p(this, Xi, null);
  }
}, b(K, Da), O(K, "_l10nPromise", null), O(K, "_l10nResizer", null), O(K, "_borderLineWidth", -1), O(K, "_colorManager", new pl()), O(K, "_zIndex", 1), O(K, "_telemetryTimeout", 1e3);
let J = K;
class If extends J {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const jc = 3285377520, ye = 4294901760, Ue = 65535;
class Bd {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : jc, this.h2 = t ? t & 4294967295 : jc;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let y = 0, w = t.length; y < w; y++) {
        const v = t.charCodeAt(y);
        v <= 255 ? e[s++] = v : (e[s++] = v >>> 8, e[s++] = v & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, n = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, h = 0, l = this.h1, c = this.h2;
    const u = 3432918353, f = 461845907, m = u & Ue, A = f & Ue;
    for (let y = 0; y < i; y++)
      y & 1 ? (o = a[y], o = o * u & ye | o * m & Ue, o = o << 15 | o >>> 17, o = o * f & ye | o * A & Ue, l ^= o, l = l << 13 | l >>> 19, l = l * 5 + 3864292196) : (h = a[y], h = h * u & ye | h * m & Ue, h = h << 15 | h >>> 17, h = h * f & ye | h * A & Ue, c ^= h, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, n) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & ye | o * m & Ue, o = o << 15 | o >>> 17, o = o * f & ye | o * A & Ue, i & 1 ? l ^= o : c ^= o;
    }
    this.h1 = l, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & ye | t * 36045 & Ue, e = e * 4283543511 & ye | ((e << 16 | t >>> 16) * 2950163797 & ye) >>> 16, t ^= e >>> 1, t = t * 444984403 & ye | t * 60499 & Ue, e = e * 3301882366 & ye | ((e << 16 | t >>> 16) * 3120437893 & ye) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Ml = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Qi, Ji, It, Ph, zd;
class Tc {
  constructor() {
    b(this, Ph);
    b(this, Qi, !1);
    b(this, Ji, null);
    b(this, It, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = r(this, It).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return r(this, It).get(t);
  }
  remove(t) {
    if (r(this, It).delete(t), r(this, It).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of r(this, It).values())
        if (e instanceof J)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = r(this, It).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [n, a] of Object.entries(e))
        s[n] !== a && (i = !0, s[n] = a);
    else
      i = !0, r(this, It).set(t, e);
    i && g(this, Ph, zd).call(this), e instanceof J && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return r(this, It).has(t);
  }
  getAll() {
    return r(this, It).size > 0 ? wc(r(this, It)) : null;
  }
  setAll(t) {
    for (const [e, s] of Object.entries(t))
      this.setValue(e, s);
  }
  get size() {
    return r(this, It).size;
  }
  resetModified() {
    r(this, Qi) && (p(this, Qi, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new jd(this);
  }
  get serializable() {
    if (r(this, It).size === 0)
      return Ml;
    const t = /* @__PURE__ */ new Map(), e = new Bd(), s = [], i = /* @__PURE__ */ Object.create(null);
    let n = !1;
    for (const [a, o] of r(this, It)) {
      const h = o instanceof J ? o.serialize(!1, i) : o;
      h && (t.set(a, h), e.update(`${a}:${JSON.stringify(h)}`), n || (n = !!h.bitmap));
    }
    if (n)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : Ml;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of r(this, It).values()) {
      if (!(s instanceof J))
        continue;
      const i = s.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: n
      } = i;
      e.has(n) || e.set(n, Object.getPrototypeOf(s).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const a = t[n] || (t[n] = /* @__PURE__ */ new Map());
      for (const [o, h] of Object.entries(i)) {
        if (o === "type")
          continue;
        let l = a.get(o);
        l || (l = /* @__PURE__ */ new Map(), a.set(o, l));
        const c = l.get(h) ?? 0;
        l.set(h, c + 1);
      }
    }
    for (const [s, i] of e)
      t[s] = i.computeTelemetryFinalData(t[s]);
    return t;
  }
  resetModifiedIds() {
    p(this, Ji, null);
  }
  get modifiedIds() {
    if (r(this, Ji))
      return r(this, Ji);
    const t = [];
    for (const e of r(this, It).values())
      !(e instanceof J) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return p(this, Ji, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
}
Qi = new WeakMap(), Ji = new WeakMap(), It = new WeakMap(), Ph = new WeakSet(), zd = function() {
  r(this, Qi) || (p(this, Qi, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Na;
class jd extends Tc {
  constructor(e) {
    super();
    b(this, Na);
    const {
      map: s,
      hash: i,
      transfer: n
    } = e.serializable, a = structuredClone(s, n ? {
      transfer: n
    } : null);
    p(this, Na, {
      map: a,
      hash: i,
      transfer: n
    });
  }
  get print() {
    vt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return r(this, Na);
  }
  get modifiedIds() {
    return X(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Na = new WeakMap();
var cr;
class Ff {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    b(this, cr, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), r(this, cr).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || r(this, cr).has(t.loadedName))) {
      if (Tt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: n
        } = t, a = new FontFace(s, i, n);
        this.addNativeFontFace(a);
        try {
          await a.load(), r(this, cr).add(s), e == null || e(t);
        } catch {
          W(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
        }
        return;
      }
      vt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw W(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return X(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (Vt || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), X(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (Tt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const n = s.shift();
        setTimeout(n.callback, 0);
      }
    }
    const {
      loadingRequests: s
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return X(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(S, x) {
      return S.charCodeAt(x) << 24 | S.charCodeAt(x + 1) << 16 | S.charCodeAt(x + 2) << 8 | S.charCodeAt(x + 3) & 255;
    }
    function i(S, x, C, T) {
      const k = S.substring(0, x), F = S.substring(x + C);
      return k + T + F;
    }
    let n, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const h = o.getContext("2d");
    let l = 0;
    function c(S, x) {
      if (++l > 30) {
        W("Load test font never loaded."), x();
        return;
      }
      if (h.font = "30px " + S, h.fillText(".", 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0) {
        x();
        return;
      }
      setTimeout(c.bind(null, S, x));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let f = this._loadTestFont;
    f = i(f, 976, u.length, u);
    const A = 16, y = 1482184792;
    let w = s(f, A);
    for (n = 0, a = u.length - 3; n < a; n += 4)
      w = w - y + s(u, n) | 0;
    n < u.length && (w = w - y + s(u + "XXX", n) | 0), f = i(f, A, 4, mf(w));
    const v = `url(data:font/opentype;base64,${btoa(f)});`, _ = `@font-face {font-family:"${u}";src:${v}}`;
    this.insertRule(_);
    const E = this._document.createElement("div");
    E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
    for (const S of [t.loadedName, u]) {
      const x = this._document.createElement("span");
      x.textContent = "Hi", x.style.fontFamily = S, E.append(x);
    }
    this._document.body.append(E), c(u, () => {
      E.remove(), e.complete();
    });
  }
}
cr = new WeakMap();
class Df {
  constructor(t, {
    disableFontFace: e = !1,
    inspectFont: s = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in t)
      this[i] = t[i];
    this.disableFontFace = e === !0, this._inspectFont = s;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const s = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var i;
    if (!this.data || this.disableFontFace)
      return null;
    const t = ad(this.data), e = `url(data:${this.mimetype};base64,${btoa(t)});`;
    let s;
    if (!this.cssFontInfo)
      s = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
    else {
      let n = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (n += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), s = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${n}src:${e}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, e), s;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    let s;
    try {
      s = t.get(this.loadedName + "_path_" + e);
    } catch (n) {
      W(`getPathGenerator - ignoring character: "${n}".`);
    }
    if (!Array.isArray(s) || s.length === 0)
      return this.compiledGlyphs[e] = function(n, a) {
      };
    const i = [];
    for (let n = 0, a = s.length; n < a; )
      switch (s[n++]) {
        case us.BEZIER_CURVE_TO:
          {
            const [o, h, l, c, u, f] = s.slice(n, n + 6);
            i.push((m) => m.bezierCurveTo(o, h, l, c, u, f)), n += 6;
          }
          break;
        case us.MOVE_TO:
          {
            const [o, h] = s.slice(n, n + 2);
            i.push((l) => l.moveTo(o, h)), n += 2;
          }
          break;
        case us.LINE_TO:
          {
            const [o, h] = s.slice(n, n + 2);
            i.push((l) => l.lineTo(o, h)), n += 2;
          }
          break;
        case us.QUADRATIC_CURVE_TO:
          {
            const [o, h, l, c] = s.slice(n, n + 4);
            i.push((u) => u.quadraticCurveTo(o, h, l, c)), n += 4;
          }
          break;
        case us.RESTORE:
          i.push((o) => o.restore());
          break;
        case us.SAVE:
          i.push((o) => o.save());
          break;
        case us.SCALE:
          Tt(i.length === 2, "Scale command is only valid at the third position.");
          break;
        case us.TRANSFORM:
          {
            const [o, h, l, c, u, f] = s.slice(n, n + 6);
            i.push((m) => m.transform(o, h, l, c, u, f)), n += 6;
          }
          break;
        case us.TRANSLATE:
          {
            const [o, h] = s.slice(n, n + 2);
            i.push((l) => l.translate(o, h)), n += 2;
          }
          break;
      }
    return this.compiledGlyphs[e] = function(a, o) {
      i[0](a), i[1](a), a.scale(o, -o);
      for (let h = 2, l = i.length; h < l; h++)
        i[h](a);
    };
  }
}
if (Vt) {
  var kl = Promise.withResolvers(), ua = null;
  (async () => {
    const t = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.js"
    ), e = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.js"
    ), s = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.js"
    ), i = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.js"
    );
    let n, a;
    return new Map(Object.entries({
      fs: t,
      http: e,
      https: s,
      url: i,
      canvas: n,
      path2d: a
    }));
  })().then((t) => {
    ua = t, kl.resolve();
  }, (t) => {
    W(`loadPackages: ${t}`), ua = /* @__PURE__ */ new Map(), kl.resolve();
  });
}
class Ei {
  static get promise() {
    return kl.promise;
  }
  static get(t) {
    return ua == null ? void 0 : ua.get(t);
  }
}
const Ud = function(d) {
  return Ei.get("fs").promises.readFile(d).then((e) => new Uint8Array(e));
};
class Nf extends od {
}
class Of extends hd {
  _createCanvas(t, e) {
    return Ei.get("canvas").createCanvas(t, e);
  }
}
class Hf extends ld {
  _fetchData(t, e) {
    return Ud(t).then((s) => ({
      cMapData: s,
      compressionType: e
    }));
  }
}
class Bf extends cd {
  _fetchData(t) {
    return Ud(t);
  }
}
const Yt = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Pl(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class Rc {
  getPattern() {
    vt("Abstract method `getPattern` called.");
  }
}
class zf extends Rc {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops)
      e.addColorStop(s[0], s[1]);
    return e;
  }
  getPattern(t, e, s, i) {
    let n;
    if (i === Yt.STROKE || i === Yt.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, ft(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, h = Math.ceil(a[3] - a[1]) || 1, l = e.cachedCanvases.getCanvas("pattern", o, h), c = l.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = L.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), Pl(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), n = t.createPattern(l.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      n.setTransform(u);
    } else
      Pl(t, this._bbox), n = this._createGradient(t);
    return n;
  }
}
function tl(d, t, e, s, i, n, a, o) {
  const h = t.coords, l = t.colors, c = d.data, u = d.width * 4;
  let f;
  h[e + 1] > h[s + 1] && (f = e, e = s, s = f, f = n, n = a, a = f), h[s + 1] > h[i + 1] && (f = s, s = i, i = f, f = a, a = o, o = f), h[e + 1] > h[s + 1] && (f = e, e = s, s = f, f = n, n = a, a = f);
  const m = (h[e] + t.offsetX) * t.scaleX, A = (h[e + 1] + t.offsetY) * t.scaleY, y = (h[s] + t.offsetX) * t.scaleX, w = (h[s + 1] + t.offsetY) * t.scaleY, v = (h[i] + t.offsetX) * t.scaleX, _ = (h[i + 1] + t.offsetY) * t.scaleY;
  if (A >= _)
    return;
  const E = l[n], S = l[n + 1], x = l[n + 2], C = l[a], T = l[a + 1], k = l[a + 2], F = l[o], $ = l[o + 1], D = l[o + 2], tt = Math.round(A), Y = Math.round(_);
  let et, st, ht, N, z, Ti, be, cs;
  for (let Bt = tt; Bt <= Y; Bt++) {
    if (Bt < w) {
      const at = Bt < A ? 0 : (A - Bt) / (A - w);
      et = m - (m - y) * at, st = E - (E - C) * at, ht = S - (S - T) * at, N = x - (x - k) * at;
    } else {
      let at;
      Bt > _ ? at = 1 : w === _ ? at = 0 : at = (w - Bt) / (w - _), et = y - (y - v) * at, st = C - (C - F) * at, ht = T - (T - $) * at, N = k - (k - D) * at;
    }
    let wt;
    Bt < A ? wt = 0 : Bt > _ ? wt = 1 : wt = (A - Bt) / (A - _), z = m - (m - v) * wt, Ti = E - (E - F) * wt, be = S - (S - $) * wt, cs = x - (x - D) * wt;
    const zn = Math.round(Math.min(et, z)), ds = Math.round(Math.max(et, z));
    let Ae = u * Bt + zn * 4;
    for (let at = zn; at <= ds; at++)
      wt = (et - at) / (et - z), wt < 0 ? wt = 0 : wt > 1 && (wt = 1), c[Ae++] = st - (st - Ti) * wt | 0, c[Ae++] = ht - (ht - be) * wt | 0, c[Ae++] = N - (N - cs) * wt | 0, c[Ae++] = 255;
  }
}
function jf(d, t, e) {
  const s = t.coords, i = t.colors;
  let n, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, h = Math.floor(s.length / o) - 1, l = o - 1;
      for (n = 0; n < h; n++) {
        let c = n * o;
        for (let u = 0; u < l; u++, c++)
          tl(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), tl(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (n = 0, a = s.length; n < a; n += 3)
        tl(d, e, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Uf extends Rc {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), h = Math.floor(this._bounds[1]), l = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - h, u = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3e3), f = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), m = l / u, A = c / f, y = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -h,
      scaleX: 1 / m,
      scaleY: 1 / A
    }, w = u + 2 * 2, v = f + 2 * 2, _ = s.getCanvas("mesh", w, v), E = _.context, S = E.createImageData(u, f);
    if (e) {
      const C = S.data;
      for (let T = 0, k = C.length; T < k; T += 4)
        C[T] = e[0], C[T + 1] = e[1], C[T + 2] = e[2], C[T + 3] = 255;
    }
    for (const C of this._figures)
      jf(S, C, y);
    return E.putImageData(S, 2, 2), {
      canvas: _.canvas,
      offsetX: o - 2 * m,
      offsetY: h - 2 * A,
      scaleX: m,
      scaleY: A
    };
  }
  getPattern(t, e, s, i) {
    Pl(t, this._bbox);
    let n;
    if (i === Yt.SHADING)
      n = L.singularValueDecompose2dScale(ft(t));
    else if (n = L.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const o = L.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * o[0], n[1] * o[1]];
    }
    const a = this._createMeshCanvas(n, i === Yt.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Yt.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class $f extends Rc {
  getPattern() {
    return "hotpink";
  }
}
function Gf(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new zf(d);
    case "Mesh":
      return new Uf(d);
    case "Dummy":
      return new $f();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const Uc = {
  COLORED: 1,
  UNCOLORED: 2
}, Lh = class Lh {
  constructor(t, e, s, i, n) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = n;
  }
  createPatternCanvas(t) {
    const {
      bbox: e,
      operatorList: s,
      paintType: i,
      tilingType: n,
      color: a,
      canvasGraphicsFactory: o
    } = this;
    let {
      xstep: h,
      ystep: l
    } = this;
    h = Math.abs(h), l = Math.abs(l), $h("TilingType: " + n);
    const c = e[0], u = e[1], f = e[2], m = e[3], A = f - c, y = m - u, w = L.singularValueDecompose2dScale(this.matrix), v = L.singularValueDecompose2dScale(this.baseTransform), _ = w[0] * v[0], E = w[1] * v[1];
    let S = A, x = y, C = !1, T = !1;
    const k = Math.ceil(h * _), F = Math.ceil(l * E), $ = Math.ceil(A * _), D = Math.ceil(y * E);
    k >= $ ? S = h : C = !0, F >= D ? x = l : T = !0;
    const tt = this.getSizeAndScale(S, this.ctx.canvas.width, _), Y = this.getSizeAndScale(x, this.ctx.canvas.height, E), et = t.cachedCanvases.getCanvas("pattern", tt.size, Y.size), st = et.context, ht = o.createCanvasGraphics(st);
    if (ht.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(ht, i, a), st.translate(-tt.scale * c, -Y.scale * u), ht.transform(tt.scale, 0, 0, Y.scale, 0, 0), st.save(), this.clipBbox(ht, c, u, f, m), ht.baseTransform = ft(ht.ctx), ht.executeOperatorList(s), ht.endDrawing(), st.restore(), C || T) {
      const N = et.canvas;
      C && (S = h), T && (x = l);
      const z = this.getSizeAndScale(S, this.ctx.canvas.width, _), Ti = this.getSizeAndScale(x, this.ctx.canvas.height, E), be = z.size, cs = Ti.size, Bt = t.cachedCanvases.getCanvas("pattern-workaround", be, cs), wt = Bt.context, zn = C ? Math.floor(A / h) : 0, ds = T ? Math.floor(y / l) : 0;
      for (let Ae = 0; Ae <= zn; Ae++)
        for (let at = 0; at <= ds; at++)
          wt.drawImage(N, be * Ae, cs * at, be, cs, 0, 0, be, cs);
      return {
        canvas: Bt.canvas,
        scaleX: z.scale,
        scaleY: Ti.scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: et.canvas,
      scaleX: tt.scale,
      scaleY: Y.scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(Lh.MAX_PATTERN_SIZE, e);
    let n = Math.ceil(t * s);
    return n >= i ? n = i : s = n / t, {
      scale: s,
      size: n
    };
  }
  clipBbox(t, e, s, i, n) {
    const a = i - e, o = n - s;
    t.ctx.rect(e, s, a, o), t.current.updateRectMinMax(ft(t.ctx), [e, s, i, n]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, n = t.current;
    switch (e) {
      case Uc.COLORED:
        const a = this.ctx;
        i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, n.fillColor = a.fillStyle, n.strokeColor = a.strokeStyle;
        break;
      case Uc.UNCOLORED:
        const o = L.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, n.fillColor = o, n.strokeColor = o;
        break;
      default:
        throw new gf(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, s, i) {
    let n = s;
    i !== Yt.SHADING && (n = L.transform(n, e.baseTransform), this.matrix && (n = L.transform(n, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(n);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const h = t.createPattern(a.canvas, "repeat");
    return h.setTransform(o), h;
  }
};
O(Lh, "MAX_PATTERN_SIZE", 3e3);
let Ll = Lh;
function Wf({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: n = 4294967295,
  inverseDecode: a = !1
}) {
  const o = re.isLittleEndian ? 4278190080 : 255, [h, l] = a ? [n, o] : [o, n], c = s >> 3, u = s & 7, f = d.length;
  e = new Uint32Array(e.buffer);
  let m = 0;
  for (let A = 0; A < i; A++) {
    for (const w = t + c; t < w; t++) {
      const v = t < f ? d[t] : 255;
      e[m++] = v & 128 ? l : h, e[m++] = v & 64 ? l : h, e[m++] = v & 32 ? l : h, e[m++] = v & 16 ? l : h, e[m++] = v & 8 ? l : h, e[m++] = v & 4 ? l : h, e[m++] = v & 2 ? l : h, e[m++] = v & 1 ? l : h;
    }
    if (u === 0)
      continue;
    const y = t < f ? d[t++] : 255;
    for (let w = 0; w < u; w++)
      e[m++] = y & 1 << 7 - w ? l : h;
  }
  return {
    srcPos: t,
    destPos: m
  };
}
const $c = 16, Gc = 100, Vf = 15, Wc = 10, Vc = 1e3, ie = 16;
function qf(d, t) {
  if (d._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  d.__originalSave = d.save, d.__originalRestore = d.restore, d.__originalRotate = d.rotate, d.__originalScale = d.scale, d.__originalTranslate = d.translate, d.__originalTransform = d.transform, d.__originalSetTransform = d.setTransform, d.__originalResetTransform = d.resetTransform, d.__originalClip = d.clip, d.__originalMoveTo = d.moveTo, d.__originalLineTo = d.lineTo, d.__originalBezierCurveTo = d.bezierCurveTo, d.__originalRect = d.rect, d.__originalClosePath = d.closePath, d.__originalBeginPath = d.beginPath, d._removeMirroring = () => {
    d.save = d.__originalSave, d.restore = d.__originalRestore, d.rotate = d.__originalRotate, d.scale = d.__originalScale, d.translate = d.__originalTranslate, d.transform = d.__originalTransform, d.setTransform = d.__originalSetTransform, d.resetTransform = d.__originalResetTransform, d.clip = d.__originalClip, d.moveTo = d.__originalMoveTo, d.lineTo = d.__originalLineTo, d.bezierCurveTo = d.__originalBezierCurveTo, d.rect = d.__originalRect, d.closePath = d.__originalClosePath, d.beginPath = d.__originalBeginPath, delete d._removeMirroring;
  }, d.save = function() {
    t.save(), this.__originalSave();
  }, d.restore = function() {
    t.restore(), this.__originalRestore();
  }, d.translate = function(s, i) {
    t.translate(s, i), this.__originalTranslate(s, i);
  }, d.scale = function(s, i) {
    t.scale(s, i), this.__originalScale(s, i);
  }, d.transform = function(s, i, n, a, o, h) {
    t.transform(s, i, n, a, o, h), this.__originalTransform(s, i, n, a, o, h);
  }, d.setTransform = function(s, i, n, a, o, h) {
    t.setTransform(s, i, n, a, o, h), this.__originalSetTransform(s, i, n, a, o, h);
  }, d.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, d.rotate = function(s) {
    t.rotate(s), this.__originalRotate(s);
  }, d.clip = function(s) {
    t.clip(s), this.__originalClip(s);
  }, d.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, d.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, d.bezierCurveTo = function(e, s, i, n, a, o) {
    t.bezierCurveTo(e, s, i, n, a, o), this.__originalBezierCurveTo(e, s, i, n, a, o);
  }, d.rect = function(e, s, i, n) {
    t.rect(e, s, i, n), this.__originalRect(e, s, i, n);
  }, d.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, d.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class Xf {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Ho(d, t, e, s, i, n, a, o, h, l) {
  const [c, u, f, m, A, y] = ft(d);
  if (u === 0 && f === 0) {
    const _ = a * c + A, E = Math.round(_), S = o * m + y, x = Math.round(S), C = (a + h) * c + A, T = Math.abs(Math.round(C) - E) || 1, k = (o + l) * m + y, F = Math.abs(Math.round(k) - x) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(m), E, x), d.drawImage(t, e, s, i, n, 0, 0, T, F), d.setTransform(c, u, f, m, A, y), [T, F];
  }
  if (c === 0 && m === 0) {
    const _ = o * f + A, E = Math.round(_), S = a * u + y, x = Math.round(S), C = (o + l) * f + A, T = Math.abs(Math.round(C) - E) || 1, k = (a + h) * u + y, F = Math.abs(Math.round(k) - x) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(f), 0, E, x), d.drawImage(t, e, s, i, n, 0, 0, F, T), d.setTransform(c, u, f, m, A, y), [F, T];
  }
  d.drawImage(t, e, s, i, n, a, o, h, l);
  const w = Math.hypot(c, u), v = Math.hypot(f, m);
  return [w * h, v * l];
}
function Yf(d) {
  const {
    width: t,
    height: e
  } = d;
  if (t > Vc || e > Vc)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), n = t + 1;
  let a = new Uint8Array(n * (e + 1)), o, h, l;
  const c = t + 7 & -8;
  let u = new Uint8Array(c * e), f = 0;
  for (const v of d.data) {
    let _ = 128;
    for (; _ > 0; )
      u[f++] = v & _ ? 0 : 255, _ >>= 1;
  }
  let m = 0;
  for (f = 0, u[f] !== 0 && (a[0] = 1, ++m), h = 1; h < t; h++)
    u[f] !== u[f + 1] && (a[h] = u[f] ? 2 : 1, ++m), f++;
  for (u[f] !== 0 && (a[h] = 2, ++m), o = 1; o < e; o++) {
    f = o * c, l = o * n, u[f - c] !== u[f] && (a[l] = u[f] ? 1 : 8, ++m);
    let v = (u[f] ? 4 : 0) + (u[f - c] ? 8 : 0);
    for (h = 1; h < t; h++)
      v = (v >> 2) + (u[f + 1] ? 4 : 0) + (u[f - c + 1] ? 8 : 0), i[v] && (a[l + h] = i[v], ++m), f++;
    if (u[f - c] !== u[f] && (a[l + h] = u[f] ? 2 : 4, ++m), m > s)
      return null;
  }
  for (f = c * (e - 1), l = o * n, u[f] !== 0 && (a[l] = 8, ++m), h = 1; h < t; h++)
    u[f] !== u[f + 1] && (a[l + h] = u[f] ? 4 : 8, ++m), f++;
  if (u[f] !== 0 && (a[l + h] = 4, ++m), m > s)
    return null;
  const A = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]), y = new Path2D();
  for (o = 0; m && o <= e; o++) {
    let v = o * n;
    const _ = v + t;
    for (; v < _ && !a[v]; )
      v++;
    if (v === _)
      continue;
    y.moveTo(v % n, o);
    const E = v;
    let S = a[v];
    do {
      const x = A[S];
      do
        v += x;
      while (!a[v]);
      const C = a[v];
      C !== 5 && C !== 10 ? (S = C, a[v] = 0) : (S = C & 51 * S >> 4, a[v] &= S >> 2 | S << 2), y.lineTo(v % n, v / n | 0), a[v] || --m;
    } while (E !== v);
    --o;
  }
  return u = null, a = null, function(v) {
    v.save(), v.scale(1 / t, -1 / e), v.translate(0, -e), v.fill(y), v.beginPath(), v.restore();
  };
}
class qc {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = nd, this.textMatrixScale = 1, this.fontMatrix = il, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = zt.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, s) {
    [e, s] = L.applyTransform([e, s], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(t, e) {
    const s = L.applyTransform(e, t), i = L.applyTransform(e.slice(2), t), n = L.applyTransform([e[0], e[3]], t), a = L.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, s[0], i[0], n[0], a[0]), this.minY = Math.min(this.minY, s[1], i[1], n[1], a[1]), this.maxX = Math.max(this.maxX, s[0], i[0], n[0], a[0]), this.maxY = Math.max(this.maxY, s[1], i[1], n[1], a[1]);
  }
  updateScalingPathMinMax(t, e) {
    L.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, s, i, n, a, o, h, l, c) {
    const u = L.bezierBoundingBox(e, s, i, n, a, o, h, l, c);
    c || this.updateRectMinMax(t, u);
  }
  getPathBoundingBox(t = Yt.FILL, e = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === Yt.STROKE) {
      e || vt("Stroke bounding box must include transform.");
      const i = L.singularValueDecompose2dScale(e), n = i[0] * this.lineWidth / 2, a = i[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= a, s[2] += n, s[3] += a;
    }
    return s;
  }
  updateClipFromPath() {
    const t = L.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = Yt.FILL, e = null) {
    return L.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Xc(d, t) {
  if (typeof ImageData < "u" && t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % ie, n = (e - i) / ie, a = i === 0 ? n : n + 1, o = d.createImageData(s, ie);
  let h = 0, l;
  const c = t.data, u = o.data;
  let f, m, A, y;
  if (t.kind === $o.GRAYSCALE_1BPP) {
    const w = c.byteLength, v = new Uint32Array(u.buffer, 0, u.byteLength >> 2), _ = v.length, E = s + 7 >> 3, S = 4294967295, x = re.isLittleEndian ? 4278190080 : 255;
    for (f = 0; f < a; f++) {
      for (A = f < n ? ie : i, l = 0, m = 0; m < A; m++) {
        const C = w - h;
        let T = 0;
        const k = C > E ? s : C * 8 - 7, F = k & -8;
        let $ = 0, D = 0;
        for (; T < F; T += 8)
          D = c[h++], v[l++] = D & 128 ? S : x, v[l++] = D & 64 ? S : x, v[l++] = D & 32 ? S : x, v[l++] = D & 16 ? S : x, v[l++] = D & 8 ? S : x, v[l++] = D & 4 ? S : x, v[l++] = D & 2 ? S : x, v[l++] = D & 1 ? S : x;
        for (; T < k; T++)
          $ === 0 && (D = c[h++], $ = 128), v[l++] = D & $ ? S : x, $ >>= 1;
      }
      for (; l < _; )
        v[l++] = 0;
      d.putImageData(o, 0, f * ie);
    }
  } else if (t.kind === $o.RGBA_32BPP) {
    for (m = 0, y = s * ie * 4, f = 0; f < n; f++)
      u.set(c.subarray(h, h + y)), h += y, d.putImageData(o, 0, m), m += ie;
    f < a && (y = s * i * 4, u.set(c.subarray(h, h + y)), d.putImageData(o, 0, m));
  } else if (t.kind === $o.RGB_24BPP)
    for (A = ie, y = s * A, f = 0; f < a; f++) {
      for (f >= n && (A = i, y = s * A), l = 0, m = y; m--; )
        u[l++] = c[h++], u[l++] = c[h++], u[l++] = c[h++], u[l++] = 255;
      d.putImageData(o, 0, f * ie);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Yc(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % ie, n = (e - i) / ie, a = i === 0 ? n : n + 1, o = d.createImageData(s, ie);
  let h = 0;
  const l = t.data, c = o.data;
  for (let u = 0; u < a; u++) {
    const f = u < n ? ie : i;
    ({
      srcPos: h
    } = Wf({
      src: l,
      srcPos: h,
      dest: c,
      width: s,
      height: f,
      nonBlackColor: 0
    })), d.putImageData(o, 0, u * ie);
  }
}
function Yr(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function Bo(d) {
  if (d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0), !Vt) {
    const {
      filter: t
    } = d;
    t !== "none" && t !== "" && (d.filter = "none");
  }
}
function Kc(d, t) {
  if (t)
    return !0;
  const e = L.singularValueDecompose2dScale(d);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * _i.PDF_TO_CSS_UNITS);
  return e[0] <= s && e[1] <= s;
}
const Kf = ["butt", "round", "square"], Qf = ["miter", "round", "bevel"], Jf = {}, Qc = {};
var Ci, Il, Fl;
const Fc = class Fc {
  constructor(t, e, s, i, n, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, h, l) {
    b(this, Ci);
    this.ctx = t, this.current = new qc(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new Xf(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = h, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }) {
    const n = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, n, a), this.ctx.fillStyle = o, s) {
      const h = this.cachedCanvases.getCanvas("transparent", n, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = h.canvas, this.ctx = h.context, this.ctx.save(), this.ctx.transform(...ft(this.compositeCtx));
    }
    this.ctx.save(), Bo(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = ft(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const n = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const h = n.length;
    if (h === o)
      return o;
    const l = h - o > Wc && typeof s == "function", c = l ? Date.now() + Vf : 0;
    let u = 0;
    const f = this.commonObjs, m = this.objs;
    let A;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (A = a[o], A !== Me.dependency)
        this[A].apply(this, n[o]);
      else
        for (const y of n[o]) {
          const w = y.startsWith("g_") ? f : m;
          if (!w.has(y))
            return w.get(y, s), o;
        }
      if (o++, o === h)
        return o;
      if (l && ++u > Wc) {
        if (Date.now() > c)
          return s(), o;
        u = 0;
      }
    }
  }
  endDrawing() {
    g(this, Ci, Il).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), g(this, Ci, Fl).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width, i = t.height;
    let n = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, h = i, l = "prescale1", c, u;
    for (; n > 2 && o > 1 || a > 2 && h > 1; ) {
      let f = o, m = h;
      n > 2 && o > 1 && (f = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), n /= o / f), a > 2 && h > 1 && (m = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2, a /= h / m), c = this.cachedCanvases.getCanvas(l, f, m), u = c.context, u.clearRect(0, 0, f, m), u.drawImage(t, 0, 0, o, h, 0, 0, f, m), t = c.canvas, o = f, h = m, l = l === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: h
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: s,
      height: i
    } = t, n = this.current.fillColor, a = this.current.patternFill, o = ft(e);
    let h, l, c, u;
    if ((t.bitmap || t.data) && t.count > 1) {
      const k = t.bitmap || t.data.buffer;
      l = JSON.stringify(a ? o : [o.slice(0, 4), n]), h = this._cachedBitmapsMap.get(k), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(k, h));
      const F = h.get(l);
      if (F && !a) {
        const $ = Math.round(Math.min(o[0], o[2]) + o[4]), D = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: F,
          offsetX: $,
          offsetY: D
        };
      }
      c = F;
    }
    c || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), Yc(u.context, t));
    let f = L.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    f = L.transform(f, [1, 0, 0, 1, 0, -i]);
    const [m, A, y, w] = L.getAxialAlignedBoundingBox([0, 0, s, i], f), v = Math.round(y - m) || 1, _ = Math.round(w - A) || 1, E = this.cachedCanvases.getCanvas("fillCanvas", v, _), S = E.context, x = m, C = A;
    S.translate(-x, -C), S.transform(...f), c || (c = this._scaleImage(u.canvas, fs(S)), c = c.img, h && a && h.set(l, c)), S.imageSmoothingEnabled = Kc(ft(S), t.interpolate), Ho(S, c, 0, 0, c.width, c.height, 0, 0, s, i), S.globalCompositeOperation = "source-in";
    const T = L.transform(fs(S), [1, 0, 0, 1, -x, -C]);
    return S.fillStyle = a ? n.getPattern(e, this, T, Yt.FILL) : n, S.fillRect(0, 0, s, i), h && !a && (this.cachedCanvases.delete("fillCanvas"), h.set(l, E.canvas)), {
      canvas: E.canvas,
      offsetX: Math.round(x),
      offsetY: Math.round(C)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = Kf[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = Qf[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(t), s.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, s] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, t, e);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const n = this.ctx;
    n.setTransform(...ft(this.suspendedCtx)), Yr(this.suspendedCtx, n), qf(n, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Yr(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const n = i[0], a = i[1], o = i[2] - n, h = i[3] - a;
    o === 0 || h === 0 || (this.genericComposeSMask(e.context, s, o, h, e.subtype, e.backdrop, e.transferMap, n, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, n, a, o, h, l, c, u) {
    let f = t.canvas, m = h - c, A = l - u;
    if (a) {
      if (m < 0 || A < 0 || m + s > f.width || A + i > f.height) {
        const w = this.cachedCanvases.getCanvas("maskExtension", s, i), v = w.context;
        v.drawImage(f, -m, -A), a.some((_) => _ !== 0) && (v.globalCompositeOperation = "destination-atop", v.fillStyle = L.makeHexColor(...a), v.fillRect(0, 0, s, i), v.globalCompositeOperation = "source-over"), f = w.canvas, m = A = 0;
      } else if (a.some((w) => w !== 0)) {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const w = new Path2D();
        w.rect(m, A, s, i), t.clip(w), t.globalCompositeOperation = "destination-atop", t.fillStyle = L.makeHexColor(...a), t.fillRect(m, A, s, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : n === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const y = new Path2D();
    y.rect(h, l, s, i), e.clip(y), e.globalCompositeOperation = "destination-in", e.drawImage(f, m, A, s, i, h, l, s, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (Yr(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Yr(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, s, i, n, a) {
    this.ctx.transform(t, e, s, i, n, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    const i = this.ctx, n = this.current;
    let a = n.x, o = n.y, h, l;
    const c = ft(i), u = c[0] === 0 && c[3] === 0 || c[1] === 0 && c[2] === 0, f = u ? s.slice(0) : null;
    for (let m = 0, A = 0, y = t.length; m < y; m++)
      switch (t[m] | 0) {
        case Me.rectangle:
          a = e[A++], o = e[A++];
          const w = e[A++], v = e[A++], _ = a + w, E = o + v;
          i.moveTo(a, o), w === 0 || v === 0 ? i.lineTo(_, E) : (i.lineTo(_, o), i.lineTo(_, E), i.lineTo(a, E)), u || n.updateRectMinMax(c, [a, o, _, E]), i.closePath();
          break;
        case Me.moveTo:
          a = e[A++], o = e[A++], i.moveTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Me.lineTo:
          a = e[A++], o = e[A++], i.lineTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Me.curveTo:
          h = a, l = o, a = e[A + 4], o = e[A + 5], i.bezierCurveTo(e[A], e[A + 1], e[A + 2], e[A + 3], a, o), n.updateCurvePathMinMax(c, h, l, e[A], e[A + 1], e[A + 2], e[A + 3], a, o, f), A += 6;
          break;
        case Me.curveTo2:
          h = a, l = o, i.bezierCurveTo(a, o, e[A], e[A + 1], e[A + 2], e[A + 3]), n.updateCurvePathMinMax(c, h, l, a, o, e[A], e[A + 1], e[A + 2], e[A + 3], f), a = e[A + 2], o = e[A + 3], A += 4;
          break;
        case Me.curveTo3:
          h = a, l = o, a = e[A + 2], o = e[A + 3], i.bezierCurveTo(e[A], e[A + 1], a, o, a, o), n.updateCurvePathMinMax(c, h, l, e[A], e[A + 1], a, o, a, o, f), A += 4;
          break;
        case Me.closePath:
          i.closePath();
          break;
      }
    u && n.updateScalingPathMinMax(c, f), n.setCurrentPoint(a, o);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, s = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (e.save(), e.strokeStyle = s.getPattern(e, this, fs(e), Yt.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let n = !1;
    i && (e.save(), e.fillStyle = s.getPattern(e, this, fs(e), Yt.FILL), n = !0);
    const a = this.current.getClippedPathBoundingBox();
    this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), n && e.restore(), t && this.consumePath(a);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = Jf;
  }
  eoClip() {
    this.pendingClip = Qc;
  }
  beginText() {
    this.current.textMatrix = nd, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    e.save(), e.beginPath();
    for (const s of t)
      e.setTransform(...s.transform), e.translate(s.x, s.y), s.addToPath(e, s.fontSize);
    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var c;
    const s = this.commonObjs.get(t), i = this.current;
    if (!s)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = s.fontMatrix || il, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && W("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const n = s.loadedName || "sans-serif", a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${n}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const h = s.italic ? "italic" : "normal";
    let l = e;
    e < $c ? l = $c : e > Gc && (l = Gc), this.current.fontSizeScale = e / l, this.ctx.font = `${h} ${o} ${l}px ${a}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, s, i, n, a) {
    this.current.textMatrix = [t, e, s, i, n, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, s, i) {
    const n = this.ctx, a = this.current, o = a.font, h = a.textRenderingMode, l = a.fontSize / a.fontSizeScale, c = h & zt.FILL_STROKE_MASK, u = !!(h & zt.ADD_TO_PATH_FLAG), f = a.patternFill && !o.missingFile;
    let m;
    (o.disableFontFace || u || f) && (m = o.getPathGenerator(this.commonObjs, t)), o.disableFontFace || f ? (n.save(), n.translate(e, s), n.beginPath(), m(n, l), i && n.setTransform(...i), (c === zt.FILL || c === zt.FILL_STROKE) && n.fill(), (c === zt.STROKE || c === zt.FILL_STROKE) && n.stroke(), n.restore()) : ((c === zt.FILL || c === zt.FILL_STROKE) && n.fillText(t, e, s), (c === zt.STROKE || c === zt.FILL_STROKE) && n.strokeText(t, e, s)), u && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: ft(n),
      x: e,
      y: s,
      fontSize: l,
      addToPath: m
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        s = !0;
        break;
      }
    return X(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const n = this.ctx, a = e.fontSizeScale, o = e.charSpacing, h = e.wordSpacing, l = e.fontDirection, c = e.textHScale * l, u = t.length, f = s.vertical, m = f ? 1 : -1, A = s.defaultVMetrics, y = i * e.fontMatrix[0], w = e.textRenderingMode === zt.FILL && !s.disableFontFace && !e.patternFill;
    n.save(), n.transform(...e.textMatrix), n.translate(e.x, e.y + e.textRise), l > 0 ? n.scale(c, -1) : n.scale(c, 1);
    let v;
    if (e.patternFill) {
      n.save();
      const C = e.fillColor.getPattern(n, this, fs(n), Yt.FILL);
      v = ft(n), n.restore(), n.fillStyle = C;
    }
    let _ = e.lineWidth;
    const E = e.textMatrixScale;
    if (E === 0 || _ === 0) {
      const C = e.textRenderingMode & zt.FILL_STROKE_MASK;
      (C === zt.STROKE || C === zt.FILL_STROKE) && (_ = this.getSinglePixelWidth());
    } else
      _ /= E;
    if (a !== 1 && (n.scale(a, a), _ /= a), n.lineWidth = _, s.isInvalidPDFjsFont) {
      const C = [];
      let T = 0;
      for (const k of t)
        C.push(k.unicode), T += k.width;
      n.fillText(C.join(""), 0, 0), e.x += T * y * c, n.restore(), this.compose();
      return;
    }
    let S = 0, x;
    for (x = 0; x < u; ++x) {
      const C = t[x];
      if (typeof C == "number") {
        S += m * C * i / 1e3;
        continue;
      }
      let T = !1;
      const k = (C.isSpace ? h : 0) + o, F = C.fontChar, $ = C.accent;
      let D, tt, Y = C.width;
      if (f) {
        const st = C.vmetric || A, ht = -(C.vmetric ? st[1] : Y * 0.5) * y, N = st[2] * y;
        Y = st ? -st[0] : Y, D = ht / a, tt = (S + N) / a;
      } else
        D = S / a, tt = 0;
      if (s.remeasure && Y > 0) {
        const st = n.measureText(F).width * 1e3 / i * a;
        if (Y < st && this.isFontSubpixelAAEnabled) {
          const ht = Y / st;
          T = !0, n.save(), n.scale(ht, 1), D /= ht;
        } else Y !== st && (D += (Y - st) / 2e3 * i / a);
      }
      if (this.contentVisible && (C.isInFont || s.missingFile)) {
        if (w && !$)
          n.fillText(F, D, tt);
        else if (this.paintChar(F, D, tt, v), $) {
          const st = D + i * $.offset.x / a, ht = tt - i * $.offset.y / a;
          this.paintChar($.fontChar, st, ht, v);
        }
      }
      const et = f ? Y * y - k * l : Y * y + k * l;
      S += et, T && n.restore();
    }
    f ? e.y -= S : e.x += S * c, n.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, n = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, h = s.charSpacing, l = s.wordSpacing, c = s.textHScale * a, u = s.fontMatrix || il, f = t.length, m = s.textRenderingMode === zt.INVISIBLE;
    let A, y, w, v;
    if (!(m || n === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(c, a), A = 0; A < f; ++A) {
        if (y = t[A], typeof y == "number") {
          v = o * y * n / 1e3, this.ctx.translate(v, 0), s.x += v * c;
          continue;
        }
        const _ = (y.isSpace ? l : 0) + h, E = i.charProcOperatorList[y.operatorListId];
        if (!E) {
          W(`Type3 character "${y.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = y, this.save(), e.scale(n, n), e.transform(...u), this.executeOperatorList(E), this.restore()), w = L.applyTransform([y.width, 0], u)[0] * n + _, e.translate(w, 0), s.x += w * c;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, s, i, n, a) {
    this.ctx.rect(s, i, n - s, a - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const s = t[1], i = this.baseTransform || ft(this.ctx), n = {
        createCanvasGraphics: (a) => new Fc(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new Ll(t, s, this.ctx, n, i);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, s) {
    this.ctx.strokeStyle = this.current.strokeColor = L.makeHexColor(t, e, s);
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
  }
  setFillRGBColor(t, e, s) {
    this.ctx.fillStyle = this.current.fillColor = L.makeHexColor(t, e, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let s;
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = Gf(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, fs(e), Yt.SHADING);
    const i = fs(e);
    if (i) {
      const {
        width: n,
        height: a
      } = e.canvas, [o, h, l, c] = L.getAxialAlignedBoundingBox([0, 0, n, a], i);
      this.ctx.fillRect(o, h, l - o, c - h);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    vt("Should not call beginInlineImage");
  }
  beginImageData() {
    vt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = ft(this.ctx), e)) {
      const s = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(ft(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || $h("TODO: Support non-isolated groups."), t.knockout && W("Knockout groups not supported.");
    const s = ft(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = L.getAxialAlignedBoundingBox(t.bbox, ft(e));
    const n = [0, 0, e.canvas.width, e.canvas.height];
    i = L.intersect(i, n) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), o = Math.floor(i[1]), h = Math.max(Math.ceil(i[2]) - a, 1), l = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, h, l]);
    let c = "groupAt" + this.groupLevel;
    t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const u = this.cachedCanvases.getCanvas(c, h, l), f = u.context;
    f.translate(-a, -o), f.transform(...s), t.smask ? this.smaskStack.push({
      canvas: u.canvas,
      context: f,
      offsetX: a,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), Yr(e, f), this.ctx = f, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = ft(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const n = L.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(n);
    }
  }
  beginAnnotation(t, e, s, i, n) {
    if (g(this, Ci, Il).call(this), Bo(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (n && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o;
        const [h, l] = L.singularValueDecompose2dScale(ft(this.ctx)), {
          viewportScale: c
        } = this, u = Math.ceil(a * this.outputScaleX * c), f = Math.ceil(o * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(u, f);
        const {
          canvas: m,
          context: A
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, m), this.annotationCanvas.savedCtx = this.ctx, this.ctx = A, this.ctx.save(), this.ctx.setTransform(h, 0, 0, -l, 0, o * l), Bo(this.ctx);
      } else
        Bo(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new qc(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), g(this, Ci, Fl).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = Yf(t)), i.compiled)) {
      i.compiled(s);
      return;
    }
    const n = this._createMaskCanvas(t), a = n.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, n.offsetX, n.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, n, a) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const o = this.ctx;
    o.save();
    const h = ft(o);
    o.transform(e, s, i, n, 0, 0);
    const l = this._createMaskCanvas(t);
    o.setTransform(1, 0, 0, 1, l.offsetX - h[4], l.offsetY - h[5]);
    for (let c = 0, u = a.length; c < u; c += 2) {
      const f = L.transform(h, [e, s, i, n, a[c], a[c + 1]]), [m, A] = L.applyTransform([0, 0], f);
      o.drawImage(l.canvas, m, A);
    }
    o.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const n of t) {
      const {
        data: a,
        width: o,
        height: h,
        transform: l
      } = n, c = this.cachedCanvases.getCanvas("maskCanvas", o, h), u = c.context;
      u.save();
      const f = this.getObject(a, n);
      Yc(u, f), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, fs(e), Yt.FILL) : s, u.fillRect(0, 0, o, h), u.restore(), e.save(), e.transform(...l), e.scale(1, -1), Ho(e, c.canvas, 0, 0, o, h, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      W("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, s, i) {
    if (!this.contentVisible)
      return;
    const n = this.getObject(t);
    if (!n) {
      W("Dependent image isn't ready yet");
      return;
    }
    const a = n.width, o = n.height, h = [];
    for (let l = 0, c = i.length; l < c; l += 2)
      h.push({
        transform: [e, 0, 0, s, i[l], i[l + 1]],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
    this.paintInlineImageXObjectGroup(n, h);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: s,
      height: i
    } = t, n = this.cachedCanvases.getCanvas("inlineImage", s, i), a = n.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", n.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, s = t.height, i = this.ctx;
    if (this.save(), !Vt) {
      const {
        filter: o
      } = i;
      o !== "none" && o !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / s);
    let n;
    if (t.bitmap)
      n = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      n = t;
    else {
      const h = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
      Xc(h, t), n = this.applyTransferMapsToCanvas(h);
    }
    const a = this._scaleImage(n, fs(i));
    i.imageSmoothingEnabled = Kc(ft(i), t.interpolate), Ho(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const n = t.width, a = t.height, h = this.cachedCanvases.getCanvas("inlineImage", n, a).context;
      Xc(h, t), i = this.applyTransferMapsToCanvas(h);
    }
    for (const n of e)
      s.save(), s.transform(...n.transform), s.scale(1, -1), Ho(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const s = this.ctx;
    this.pendingClip && (e || (this.pendingClip === Qc ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = ft(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: s,
        c: i,
        d: n
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
        const h = Math.abs(e), l = Math.abs(n);
        if (h === l)
          if (t === 0)
            a = o = 1 / h;
          else {
            const c = h * t;
            a = o = c < 1 ? 1 / c : 1;
          }
        else if (t === 0)
          a = 1 / h, o = 1 / l;
        else {
          const c = h * t, u = l * t;
          a = c < 1 ? 1 / c : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const h = Math.abs(e * n - s * i), l = Math.hypot(e, s), c = Math.hypot(i, n);
        if (t === 0)
          a = c / h, o = l / h;
        else {
          const u = t * h;
          a = c > u ? c / u : 1, o = l > u ? l / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: s
    } = this.current, [i, n] = this.getScaleForStroking();
    if (e.lineWidth = s || 1, i === 1 && n === 1) {
      e.stroke();
      return;
    }
    const a = e.getLineDash();
    if (t && e.save(), e.scale(i, n), a.length > 0) {
      const o = Math.max(i, n);
      e.setLineDash(a.map((h) => h / o)), e.lineDashOffset /= o;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
Ci = new WeakSet(), Il = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Fl = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
};
let Yn = Fc;
for (const d in Me)
  Yn.prototype[d] !== void 0 && (Yn.prototype[Me[d]] = Yn.prototype[d]);
var Oa, Ha;
class zs {
  static get workerPort() {
    return r(this, Oa);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    p(this, Oa, t);
  }
  static get workerSrc() {
    return r(this, Ha);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    p(this, Ha, t);
  }
}
Oa = new WeakMap(), Ha = new WeakMap(), b(zs, Oa, null), b(zs, Ha, "");
const zo = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, bt = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function ae(d) {
  switch (d instanceof Error || typeof d == "object" && d !== null || vt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new Hn(d.message);
    case "MissingPDFException":
      return new On(d.message);
    case "PasswordException":
      return new rl(d.message, d.code);
    case "UnexpectedResponseException":
      return new Gh(d.message, d.status);
    case "UnknownErrorException":
      return new al(d.message, d.details);
    default:
      return new al(d.message, d.toString());
  }
}
var ls, $d, Gd, Jo;
class ia {
  constructor(t, e, s) {
    b(this, ls);
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (i) => {
      const n = i.data;
      if (n.targetName !== this.sourceName)
        return;
      if (n.stream) {
        g(this, ls, Gd).call(this, n);
        return;
      }
      if (n.callback) {
        const o = n.callbackId, h = this.callbackCapabilities[o];
        if (!h)
          throw new Error(`Cannot resolve callback ${o}`);
        if (delete this.callbackCapabilities[o], n.callback === zo.DATA)
          h.resolve(n.data);
        else if (n.callback === zo.ERROR)
          h.reject(ae(n.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const a = this.actionHandler[n.action];
      if (!a)
        throw new Error(`Unknown action from worker: ${n.action}`);
      if (n.callbackId) {
        const o = this.sourceName, h = n.sourceName;
        new Promise(function(l) {
          l(a(n.data));
        }).then(function(l) {
          s.postMessage({
            sourceName: o,
            targetName: h,
            callback: zo.DATA,
            callbackId: n.callbackId,
            data: l
          });
        }, function(l) {
          s.postMessage({
            sourceName: o,
            targetName: h,
            callback: zo.ERROR,
            callbackId: n.callbackId,
            reason: ae(l)
          });
        });
        return;
      }
      if (n.streamId) {
        g(this, ls, $d).call(this, n);
        return;
      }
      a(n.data);
    }, s.addEventListener("message", this._onComObjOnMessage);
  }
  on(t, e) {
    const s = this.actionHandler;
    if (s[t])
      throw new Error(`There is already an actionName called "${t}"`);
    s[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const i = this.callbackId++, n = Promise.withResolvers();
    this.callbackCapabilities[i] = n;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (a) {
      n.reject(a);
    }
    return n.promise;
  }
  sendWithStream(t, e, s, i) {
    const n = this.streamId++, a = this.sourceName, o = this.targetName, h = this.comObj;
    return new ReadableStream({
      start: (l) => {
        const c = Promise.withResolvers();
        return this.streamControllers[n] = {
          controller: l,
          startCall: c,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, h.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: n,
          data: e,
          desiredSize: l.desiredSize
        }, i), c.promise;
      },
      pull: (l) => {
        const c = Promise.withResolvers();
        return this.streamControllers[n].pullCall = c, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: bt.PULL,
          streamId: n,
          desiredSize: l.desiredSize
        }), c.promise;
      },
      cancel: (l) => {
        Tt(l instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[n].cancelCall = c, this.streamControllers[n].isClosed = !0, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: bt.CANCEL,
          streamId: n,
          reason: ae(l)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
ls = new WeakSet(), $d = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this, o = this.actionHandler[t.action], h = {
    enqueue(l, c = 1, u) {
      if (this.isCancelled)
        return;
      const f = this.desiredSize;
      this.desiredSize -= c, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
        sourceName: s,
        targetName: i,
        stream: bt.ENQUEUE,
        streamId: e,
        chunk: l
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: bt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(l) {
      Tt(l instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: bt.ERROR,
        streamId: e,
        reason: ae(l)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  h.sinkCapability.resolve(), h.ready = h.sinkCapability.promise, this.streamSinks[e] = h, new Promise(function(l) {
    l(o(t.data, h));
  }).then(function() {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: bt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(l) {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: bt.START_COMPLETE,
      streamId: e,
      reason: ae(l)
    });
  });
}, Gd = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case bt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(ae(t.reason));
      break;
    case bt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(ae(t.reason));
      break;
    case bt.PULL:
      if (!o) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: bt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, new Promise(function(h) {
        var l;
        h((l = o.onPull) == null ? void 0 : l.call(o));
      }).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: bt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: bt.PULL_COMPLETE,
          streamId: e,
          reason: ae(h)
        });
      });
      break;
    case bt.ENQUEUE:
      if (Tt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case bt.CLOSE:
      if (Tt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), g(this, ls, Jo).call(this, a, e);
      break;
    case bt.ERROR:
      Tt(a, "error should have stream controller"), a.controller.error(ae(t.reason)), g(this, ls, Jo).call(this, a, e);
      break;
    case bt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(ae(t.reason)), g(this, ls, Jo).call(this, a, e);
      break;
    case bt.CANCEL:
      if (!o)
        break;
      new Promise(function(h) {
        var l;
        h((l = o.onCancel) == null ? void 0 : l.call(o, ae(t.reason)));
      }).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: bt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: bt.CANCEL_COMPLETE,
          streamId: e,
          reason: ae(h)
        });
      }), o.sinkCapability.reject(ae(t.reason)), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Jo = async function(t, e) {
  var s, i, n;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (n = t.cancelCall) == null ? void 0 : n.promise]), delete this.streamControllers[e];
};
var Zi, Ba;
class Zf {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    b(this, Zi);
    b(this, Ba);
    p(this, Zi, t), p(this, Ba, e);
  }
  getRaw() {
    return r(this, Ba);
  }
  get(t) {
    return r(this, Zi).get(t) ?? null;
  }
  getAll() {
    return wc(r(this, Zi));
  }
  has(t) {
    return r(this, Zi).has(t);
  }
}
Zi = new WeakMap(), Ba = new WeakMap();
const qs = Symbol("INTERNAL");
var za, ja, Ua, dr;
class tp {
  constructor(t, {
    name: e,
    intent: s,
    usage: i
  }) {
    b(this, za, !1);
    b(this, ja, !1);
    b(this, Ua, !1);
    b(this, dr, !0);
    p(this, za, !!(t & pe.DISPLAY)), p(this, ja, !!(t & pe.PRINT)), this.name = e, this.intent = s, this.usage = i;
  }
  get visible() {
    if (r(this, Ua))
      return r(this, dr);
    if (!r(this, dr))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return r(this, za) ? (e == null ? void 0 : e.viewState) !== "OFF" : r(this, ja) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== qs && vt("Internal method `_setVisible` called."), p(this, Ua, s), p(this, dr, e);
  }
}
za = new WeakMap(), ja = new WeakMap(), Ua = new WeakMap(), dr = new WeakMap();
var ai, it, ur, fr, $a, Dl;
class ep {
  constructor(t, e = pe.DISPLAY) {
    b(this, $a);
    b(this, ai, null);
    b(this, it, /* @__PURE__ */ new Map());
    b(this, ur, null);
    b(this, fr, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, p(this, fr, t.order);
      for (const s of t.groups)
        r(this, it).set(s.id, new tp(e, s));
      if (t.baseState === "OFF")
        for (const s of r(this, it).values())
          s._setVisible(qs, !1);
      for (const s of t.on)
        r(this, it).get(s)._setVisible(qs, !0);
      for (const s of t.off)
        r(this, it).get(s)._setVisible(qs, !1);
      p(this, ur, this.getHash());
    }
  }
  isVisible(t) {
    if (r(this, it).size === 0)
      return !0;
    if (!t)
      return $h("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return r(this, it).has(t.id) ? r(this, it).get(t.id).visible : (W(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return g(this, $a, Dl).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!r(this, it).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (r(this, it).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!r(this, it).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (!r(this, it).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!r(this, it).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (!r(this, it).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!r(this, it).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (r(this, it).get(e).visible)
            return !1;
        }
        return !0;
      }
      return W(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return W(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0) {
    const s = r(this, it).get(t);
    if (!s) {
      W(`Optional content group not found: ${t}`);
      return;
    }
    s._setVisible(qs, !!e, !0), p(this, ai, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const n = r(this, it).get(i);
      if (n)
        switch (s) {
          case "ON":
            n._setVisible(qs, !0);
            break;
          case "OFF":
            n._setVisible(qs, !1);
            break;
          case "Toggle":
            n._setVisible(qs, !n.visible);
            break;
        }
    }
    p(this, ai, null);
  }
  get hasInitialVisibility() {
    return r(this, ur) === null || this.getHash() === r(this, ur);
  }
  getOrder() {
    return r(this, it).size ? r(this, fr) ? r(this, fr).slice() : [...r(this, it).keys()] : null;
  }
  getGroups() {
    return r(this, it).size > 0 ? wc(r(this, it)) : null;
  }
  getGroup(t) {
    return r(this, it).get(t) || null;
  }
  getHash() {
    if (r(this, ai) !== null)
      return r(this, ai);
    const t = new Bd();
    for (const [e, s] of r(this, it))
      t.update(`${e}:${s.visible}`);
    return p(this, ai, t.hexdigest());
  }
}
ai = new WeakMap(), it = new WeakMap(), ur = new WeakMap(), fr = new WeakMap(), $a = new WeakSet(), Dl = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const n = t[i];
    let a;
    if (Array.isArray(n))
      a = g(this, $a, Dl).call(this, n);
    else if (r(this, it).has(n))
      a = r(this, it).get(n).visible;
    else
      return W(`Optional content group not found: ${n}`), !0;
    switch (s) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return s === "And";
};
class sp {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    Tt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: n,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (n == null ? void 0 : n.length) > 0) {
      const h = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
      this._queuedChunks.push(h);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((h, l) => {
      this._onReceiveData({
        begin: h,
        chunk: l
      });
    }), t.addProgressListener((h, l) => {
      this._onProgress({
        loaded: h,
        total: l
      });
    }), t.addProgressiveReadListener((h) => {
      this._onReceiveData({
        chunk: h
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(n) {
        return n._begin !== t ? !1 : (n._enqueue(s), !0);
      });
      Tt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, s, i, n;
    t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, {
      loaded: t.loaded
    }) : (n = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || n.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    Tt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new ip(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new np(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeReaders.slice(0))
      s.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class ip {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = Cc(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const n of this._queuedChunks)
      this._loaded += n.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class np {
  constructor(t, e, s) {
    this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const s of this._requests)
          s.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function rp(d) {
  let t = !0, e = s("filename\\*", "i").exec(d);
  if (e) {
    e = e[1];
    let c = o(e);
    return c = unescape(c), c = h(c), c = l(c), n(c);
  }
  if (e = a(d), e) {
    const c = l(e);
    return n(c);
  }
  if (e = s("filename", "i").exec(d), e) {
    e = e[1];
    let c = o(e);
    return c = l(c), n(c);
  }
  function s(c, u) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function i(c, u) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const f = new TextDecoder(c, {
          fatal: !0
        }), m = Wh(u);
        u = f.decode(m), t = !1;
      } catch {
      }
    }
    return u;
  }
  function n(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  function a(c) {
    const u = [];
    let f;
    const m = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (f = m.exec(c)) !== null; ) {
      let [, y, w, v] = f;
      if (y = parseInt(y, 10), y in u) {
        if (y === 0)
          break;
        continue;
      }
      u[y] = [w, v];
    }
    const A = [];
    for (let y = 0; y < u.length && y in u; ++y) {
      let [w, v] = u[y];
      v = o(v), w && (v = unescape(v), y === 0 && (v = h(v))), A.push(v);
    }
    return A.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const u = c.slice(1).split('\\"');
      for (let f = 0; f < u.length; ++f) {
        const m = u[f].indexOf('"');
        m !== -1 && (u[f] = u[f].slice(0, m), u.length = f + 1), u[f] = u[f].replaceAll(/\\(.)/g, "$1");
      }
      c = u.join('"');
    }
    return c;
  }
  function h(c) {
    const u = c.indexOf("'");
    if (u === -1)
      return c;
    const f = c.slice(0, u), A = c.slice(u + 1).replace(/^[^']*'/, "");
    return i(f, A);
  }
  function l(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, f, m, A) {
      if (m === "q" || m === "Q")
        return A = A.replaceAll("_", " "), A = A.replaceAll(/=([0-9a-fA-F]{2})/g, function(y, w) {
          return String.fromCharCode(parseInt(w, 16));
        }), i(f, A);
      try {
        A = atob(A);
      } catch {
      }
      return i(f, A);
    });
  }
  return "";
}
function Mc(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function kc({
  responseHeaders: d,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, n = parseInt(d.get("Content-Length"), 10);
  return !Number.isInteger(n) || (i.suggestedLength = n, n <= 2 * e) || s || !t || d.get("Accept-Ranges") !== "bytes" || (d.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function Pc(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = rp(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (Cc(e))
      return e;
  }
  return null;
}
function Xh(d, t) {
  return d === 404 || d === 0 && t.startsWith("file:") ? new On('Missing PDF "' + t + '".') : new Gh(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d);
}
function Wd(d) {
  return d === 200 || d === 206;
}
function Vd(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function qd(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (W(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class Jc {
  constructor(t) {
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Mc(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Tt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new ap(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new op(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class ap {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, Vd(s, this._withCredentials, this._abortController)).then((n) => {
      if (!Wd(n.status))
        throw Xh(n.status, i);
      this._reader = n.body.getReader(), this._headersCapability.resolve();
      const a = n.headers, {
        allowRangeRequests: o,
        suggestedLength: h
      } = kc({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = h || this._contentLength, this._filename = Pc(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Hn("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: qd(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class op {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const n = new Headers(t.headers);
    n.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, Vd(n, this._withCredentials, this._abortController)).then((o) => {
      if (!Wd(o.status))
        throw Xh(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: qd(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const el = 200, sl = 206;
function hp(d) {
  const t = d.response;
  return typeof t != "string" ? t : Wh(t).buffer;
}
class lp {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Mc(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(t, e, s) {
    const i = {
      begin: t,
      end: e
    };
    for (const n in s)
      i[n] = s[n];
    return this.request(i);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [n, a] of this.headers)
      e.setRequestHeader(n, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = sl) : i.expectedStatus = el, e.responseType = "arraybuffer", t.onError && (e.onerror = function(n) {
      t.onError(e.status);
    }), e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    var i;
    const s = this.pendingRequests[t];
    s && ((i = s.onProgress) == null || i.call(s, e));
  }
  onStateChange(t, e) {
    var h, l, c;
    const s = this.pendingRequests[t];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      (h = s.onError) == null || h.call(s, i.status);
      return;
    }
    const n = i.status || el;
    if (!(n === el && s.expectedStatus === sl) && n !== s.expectedStatus) {
      (l = s.onError) == null || l.call(s, i.status);
      return;
    }
    const o = hp(i);
    if (n === sl) {
      const u = i.getResponseHeader("Content-Range"), f = /bytes (\d+)-(\d+)\/(\d+)/.exec(u);
      s.onDone({
        begin: parseInt(f[1], 10),
        chunk: o
      });
    } else o ? s.onDone({
      begin: 0,
      chunk: o
    }) : (c = s.onError) == null || c.call(s, i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class cp {
  constructor(t) {
    this._source = t, this._manager = new lp(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Tt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new dp(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new up(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class dp {
  constructor(t, e) {
    this._manager = t;
    const s = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = e.url, this._fullRequestId = t.requestFull(s), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t), s = new Headers(e.getAllResponseHeaders().trim().split(/[\r\n]+/).map((a) => {
      const [o, ...h] = a.split(": ");
      return [o, h.join(": ")];
    })), {
      allowRangeRequests: i,
      suggestedLength: n
    } = kc({
      responseHeaders: s,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    i && (this._isRangeSupported = !0), this._contentLength = n || this._contentLength, this._filename = Pc(s), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = Xh(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class up {
  constructor(t, e, s) {
    this._manager = t;
    const i = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = t.url, this._requestId = t.requestRange(e, s, i), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const s of this._requests)
      s.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError = Xh(t, this._url);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const fp = /^[a-z][a-z0-9\-+.]+:/i;
function pp(d) {
  if (fp.test(d))
    return new URL(d);
  const t = Ei.get("url");
  return new URL(t.pathToFileURL(d));
}
function Xd(d, t, e) {
  return d.protocol === "http:" ? Ei.get("http").request(d, {
    headers: t
  }, e) : Ei.get("https").request(d, {
    headers: t
  }, e);
}
class gp {
  constructor(t) {
    this.source = t, this.url = pp(t.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.headers = Mc(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Tt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new Ap(this) : new mp(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = this.isFsUrl ? new yp(this, t, e) : new bp(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Yd {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Hn("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class Kd {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const e = t.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class mp extends Yd {
  constructor(t) {
    super(t);
    const e = Object.fromEntries(t.headers), s = (i) => {
      if (i.statusCode === 404) {
        const h = new On(`Missing PDF "${this._url}".`);
        this._storedError = h, this._headersCapability.reject(h);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(i);
      const n = new Headers(this._readableStream.headers), {
        allowRangeRequests: a,
        suggestedLength: o
      } = kc({
        responseHeaders: n,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = a, this._contentLength = o || this._contentLength, this._filename = Pc(n);
    };
    this._request = Xd(this._url, e, s), this._request.on("error", (i) => {
      this._storedError = i, this._headersCapability.reject(i);
    }), this._request.end();
  }
}
class bp extends Kd {
  constructor(t, e, s) {
    super(t);
    const i = Object.fromEntries(t.headers);
    i.Range = `bytes=${e}-${s - 1}`;
    const n = (a) => {
      if (a.statusCode === 404) {
        const o = new On(`Missing PDF "${this._url}".`);
        this._storedError = o;
        return;
      }
      this._setReadableStream(a);
    };
    this._request = Xd(this._url, i, n), this._request.on("error", (a) => {
      this._storedError = a;
    }), this._request.end();
  }
}
class Ap extends Yd {
  constructor(t) {
    super(t);
    const e = Ei.get("fs");
    e.promises.lstat(this._url).then((s) => {
      this._contentLength = s.size, this._setReadableStream(e.createReadStream(this._url)), this._headersCapability.resolve();
    }, (s) => {
      s.code === "ENOENT" && (s = new On(`Missing PDF "${this._url}".`)), this._storedError = s, this._headersCapability.reject(s);
    });
  }
}
class yp extends Kd {
  constructor(t, e, s) {
    super(t);
    const i = Ei.get("fs");
    this._setReadableStream(i.createReadStream(this._url, {
      start: e,
      end: s - 1
    }));
  }
}
const vp = 1e5, Jt = 30, wp = 0.8;
var id, oi, ee, Ga, Wa, tn, Es, Va, qa, en, pr, gr, hi, mr, Xa, br, sn, Ya, Ka, nn, rn, Qa, li, Ar, Gs, Qd, Jd, Nl, me, Zo, Ol, Zd, tu;
const Et = class Et {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    b(this, Gs);
    b(this, oi, Promise.withResolvers());
    b(this, ee, null);
    b(this, Ga, !1);
    b(this, Wa, !!((id = globalThis.FontInspector) != null && id.enabled));
    b(this, tn, null);
    b(this, Es, null);
    b(this, Va, 0);
    b(this, qa, 0);
    b(this, en, null);
    b(this, pr, null);
    b(this, gr, 0);
    b(this, hi, 0);
    b(this, mr, /* @__PURE__ */ Object.create(null));
    b(this, Xa, []);
    b(this, br, null);
    b(this, sn, []);
    b(this, Ya, /* @__PURE__ */ new WeakMap());
    b(this, Ka, null);
    var h;
    if (t instanceof ReadableStream)
      p(this, br, t);
    else if (typeof t == "object")
      p(this, br, new ReadableStream({
        start(l) {
          l.enqueue(t), l.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    p(this, ee, p(this, pr, e)), p(this, hi, s.scale * (globalThis.devicePixelRatio || 1)), p(this, gr, s.rotation), p(this, Es, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: n,
      pageX: a,
      pageY: o
    } = s.rawDims;
    p(this, Ka, [1, 0, 0, -1, -a, o + n]), p(this, qa, i), p(this, Va, n), g(h = Et, me, Zd).call(h), Ln(e, s), r(this, oi).promise.finally(() => {
      r(Et, Ar).delete(this), p(this, Es, null), p(this, mr, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = re.platform;
    return X(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      r(this, en).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          r(this, oi).resolve();
          return;
        }
        r(this, tn) ?? p(this, tn, e.lang), Object.assign(r(this, mr), e.styles), g(this, Gs, Qd).call(this, e.items), t();
      }, r(this, oi).reject);
    };
    return p(this, en, r(this, br).getReader()), r(Et, Ar).add(this), t(), r(this, oi).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var n;
    const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== r(this, gr) && (e == null || e(), p(this, gr, i), Ln(r(this, pr), {
      rotation: i
    })), s !== r(this, hi)) {
      e == null || e(), p(this, hi, s);
      const a = {
        div: null,
        properties: null,
        ctx: g(n = Et, me, Zo).call(n, r(this, tn))
      };
      for (const o of r(this, sn))
        a.properties = r(this, Ya).get(o), a.div = o, g(this, Gs, Nl).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new Hn("TextLayer task cancelled.");
    (e = r(this, en)) == null || e.cancel(t).catch(() => {
    }), p(this, en, null), r(this, oi).reject(t);
  }
  get textDivs() {
    return r(this, sn);
  }
  get textContentItemsStr() {
    return r(this, Xa);
  }
  static cleanup() {
    if (!(r(this, Ar).size > 0)) {
      r(this, nn).clear();
      for (const {
        canvas: t
      } of r(this, rn).values())
        t.remove();
      r(this, rn).clear();
    }
  }
};
oi = new WeakMap(), ee = new WeakMap(), Ga = new WeakMap(), Wa = new WeakMap(), tn = new WeakMap(), Es = new WeakMap(), Va = new WeakMap(), qa = new WeakMap(), en = new WeakMap(), pr = new WeakMap(), gr = new WeakMap(), hi = new WeakMap(), mr = new WeakMap(), Xa = new WeakMap(), br = new WeakMap(), sn = new WeakMap(), Ya = new WeakMap(), Ka = new WeakMap(), nn = new WeakMap(), rn = new WeakMap(), Qa = new WeakMap(), li = new WeakMap(), Ar = new WeakMap(), Gs = new WeakSet(), Qd = function(t) {
  var i, n;
  if (r(this, Ga))
    return;
  (n = r(this, Es)).ctx ?? (n.ctx = g(i = Et, me, Zo).call(i, r(this, tn)));
  const e = r(this, sn), s = r(this, Xa);
  for (const a of t) {
    if (e.length > vp) {
      W("Ignoring additional textDivs for performance reasons."), p(this, Ga, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = r(this, ee);
        p(this, ee, document.createElement("span")), r(this, ee).classList.add("markedContent"), a.id !== null && r(this, ee).setAttribute("id", `${a.id}`), o.append(r(this, ee));
      } else a.type === "endMarkedContent" && p(this, ee, r(this, ee).parentNode);
      continue;
    }
    s.push(a.str), g(this, Gs, Jd).call(this, a);
  }
}, Jd = function(t) {
  var y;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  r(this, sn).push(e);
  const i = L.transform(r(this, Ka), t.transform);
  let n = Math.atan2(i[1], i[0]);
  const a = r(this, mr)[t.fontName];
  a.vertical && (n += Math.PI / 2);
  let o = r(this, Wa) && a.fontSubstitution || a.fontFamily;
  o = Et.fontFamilyMap.get(o) || o;
  const h = Math.hypot(i[2], i[3]), l = h * g(y = Et, me, tu).call(y, o, r(this, tn));
  let c, u;
  n === 0 ? (c = i[4], u = i[5] - l) : (c = i[4] + l * Math.sin(n), u = i[5] - l * Math.cos(n));
  const f = "calc(var(--scale-factor)*", m = e.style;
  r(this, ee) === r(this, pr) ? (m.left = `${(100 * c / r(this, qa)).toFixed(2)}%`, m.top = `${(100 * u / r(this, Va)).toFixed(2)}%`) : (m.left = `${f}${c.toFixed(2)}px)`, m.top = `${f}${u.toFixed(2)}px)`), m.fontSize = `${f}${(r(Et, li) * h).toFixed(2)}px)`, m.fontFamily = o, s.fontSize = h, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, r(this, Wa) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
  let A = !1;
  if (t.str.length > 1)
    A = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const w = Math.abs(t.transform[0]), v = Math.abs(t.transform[3]);
    w !== v && Math.max(w, v) / Math.min(w, v) > 1.5 && (A = !0);
  }
  if (A && (s.canvasWidth = a.vertical ? t.height : t.width), r(this, Ya).set(e, s), r(this, Es).div = e, r(this, Es).properties = s, g(this, Gs, Nl).call(this, r(this, Es)), s.hasText && r(this, ee).append(e), s.hasEOL) {
    const w = document.createElement("br");
    w.setAttribute("role", "presentation"), r(this, ee).append(w);
  }
}, Nl = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: n
  } = e;
  let a = "";
  if (r(Et, li) > 1 && (a = `scale(${1 / r(Et, li)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: h
    } = n, {
      canvasWidth: l,
      fontSize: c
    } = s;
    g(o = Et, me, Ol).call(o, i, c * r(this, hi), h);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${l * r(this, hi) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (n.transform = a);
}, me = new WeakSet(), Zo = function(t = null) {
  let e = r(this, rn).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), r(this, rn).set(t, e), r(this, Qa).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Ol = function(t, e, s) {
  const i = r(this, Qa).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, Zd = function() {
  if (r(this, li) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), p(this, li, t.getBoundingClientRect().height), t.remove();
}, tu = function(t, e) {
  const s = r(this, nn).get(t);
  if (s)
    return s;
  const i = g(this, me, Zo).call(this, e);
  i.canvas.width = i.canvas.height = Jt, g(this, me, Ol).call(this, i, Jt, t);
  const n = i.measureText("");
  let a = n.fontBoundingBoxAscent, o = Math.abs(n.fontBoundingBoxDescent);
  if (a) {
    const c = a / (a + o);
    return r(this, nn).set(t, c), i.canvas.width = i.canvas.height = 0, c;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, Jt, Jt), i.strokeText("g", 0, 0);
  let h = i.getImageData(0, 0, Jt, Jt).data;
  o = 0;
  for (let c = h.length - 1 - 3; c >= 0; c -= 4)
    if (h[c] > 0) {
      o = Math.ceil(c / 4 / Jt);
      break;
    }
  i.clearRect(0, 0, Jt, Jt), i.strokeText("A", 0, Jt), h = i.getImageData(0, 0, Jt, Jt).data, a = 0;
  for (let c = 0, u = h.length; c < u; c += 4)
    if (h[c] > 0) {
      a = Jt - Math.floor(c / 4 / Jt);
      break;
    }
  i.canvas.width = i.canvas.height = 0;
  const l = a ? a / (a + o) : wp;
  return r(this, nn).set(t, l), l;
}, b(Et, me), b(Et, nn, /* @__PURE__ */ new Map()), b(Et, rn, /* @__PURE__ */ new Map()), b(Et, Qa, /* @__PURE__ */ new WeakMap()), b(Et, li, null), b(Et, Ar, /* @__PURE__ */ new Set());
let pa = Et;
class ga {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(n) {
      var h;
      if (!n)
        return;
      let a = null;
      const o = n.name;
      if (o === "#text")
        a = n.value;
      else if (ga.shouldBuildText(o))
        (h = n == null ? void 0 : n.attributes) != null && h.textContent ? a = n.attributes.textContent : n.value && (a = n.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!n.children)
        for (const l of n.children)
          i(l);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const _p = 65536, Ep = 100, Sp = 5e3, Cp = Vt ? Of : Sf, xp = Vt ? Hf : ud, Tp = Vt ? Nf : Ef, Rp = Vt ? Bf : fd;
function Mp(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new Hl(), {
    docId: e
  } = t, s = d.url ? kp(d.url) : null, i = d.data ? Pp(d.data) : null, n = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, h = d.range instanceof eu ? d.range : null, l = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : _p;
  let c = d.worker instanceof Kn ? d.worker : null;
  const u = d.verbosity, f = typeof d.docBaseUrl == "string" && !qh(d.docBaseUrl) ? d.docBaseUrl : null, m = typeof d.cMapUrl == "string" ? d.cMapUrl : null, A = d.cMapPacked !== !1, y = d.CMapReaderFactory || xp, w = typeof d.standardFontDataUrl == "string" ? d.standardFontDataUrl : null, v = d.StandardFontDataFactory || Rp, _ = d.stopAtErrors !== !0, E = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, S = d.isEvalSupported !== !1, x = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !Vt, C = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, T = typeof d.disableFontFace == "boolean" ? d.disableFontFace : Vt, k = d.fontExtraProperties === !0, F = d.enableXfa === !0, $ = d.ownerDocument || globalThis.document, D = d.disableRange === !0, tt = d.disableStream === !0, Y = d.disableAutoFetch === !0, et = d.pdfBug === !0, st = d.CanvasFactory || Cp, ht = d.FilterFactory || Tp, N = d.enableHWA === !0, z = h ? h.length : d.length ?? NaN, Ti = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !Vt && !T, be = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : y === ud && v === fd && m && w && ta(m, document.baseURI) && ta(w, document.baseURI);
  d.canvasFactory && Bc("`canvasFactory`-instance option, please use `CanvasFactory` instead."), d.filterFactory && Bc("`filterFactory`-instance option, please use `FilterFactory` instead.");
  const cs = null;
  df(u);
  const Bt = {
    canvasFactory: new st({
      ownerDocument: $,
      enableHWA: N
    }),
    filterFactory: new ht({
      docId: e,
      ownerDocument: $
    }),
    cMapReaderFactory: be ? null : new y({
      baseUrl: m,
      isCompressed: A
    }),
    standardFontDataFactory: be ? null : new v({
      baseUrl: w
    })
  };
  if (!c) {
    const ds = {
      verbosity: u,
      port: zs.workerPort
    };
    c = ds.port ? Kn.fromPort(ds) : new Kn(ds), t._worker = c;
  }
  const wt = {
    docId: e,
    apiVersion: "4.7.76",
    data: i,
    password: o,
    disableAutoFetch: Y,
    rangeChunkSize: l,
    length: z,
    docBaseUrl: f,
    enableXfa: F,
    evaluatorOptions: {
      maxImageSize: E,
      disableFontFace: T,
      ignoreErrors: _,
      isEvalSupported: S,
      isOffscreenCanvasSupported: x,
      canvasMaxAreaInBytes: C,
      fontExtraProperties: k,
      useSystemFonts: Ti,
      cMapUrl: be ? m : null,
      standardFontDataUrl: be ? w : null
    }
  }, zn = {
    disableFontFace: T,
    fontExtraProperties: k,
    ownerDocument: $,
    pdfBug: et,
    styleElement: cs,
    loadingParams: {
      disableAutoFetch: Y,
      enableXfa: F
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const ds = c.messageHandler.sendWithPromise("GetDocRequest", wt, i ? [i.buffer] : null);
    let Ae;
    if (h)
      Ae = new sp(h, {
        disableRange: D,
        disableStream: tt
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let at;
      Vt ? at = typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype && ta(s) ? Jc : gp : at = ta(s) ? Jc : cp, Ae = new at({
        url: s,
        length: z,
        httpHeaders: n,
        withCredentials: a,
        rangeChunkSize: l,
        disableRange: D,
        disableStream: tt
      });
    }
    return ds.then((at) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const Yh = new ia(e, at, c.port), sf = new Dp(Yh, t, Ae, zn, Bt);
      t._transport = sf, Yh.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function kp(d) {
  if (d instanceof URL)
    return d.href;
  try {
    return new URL(d, window.location).href;
  } catch {
    if (Vt && typeof d == "string")
      return d;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Pp(d) {
  if (Vt && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return Wh(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Zc(d) {
  return typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
}
var Ih;
const Fh = class Fh {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${qt(Fh, Ih)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (i) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, i;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
Ih = new WeakMap(), b(Fh, Ih, 0);
let Hl = Fh;
class eu {
  constructor(t, e, s = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const s of this._rangeListeners)
      s(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const s of this._progressListeners)
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    vt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class Lp {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return X(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var ci, Ss, Ce, Wn, th;
class Ip {
  constructor(t, e, s, i = !1) {
    b(this, Ce);
    b(this, ci, null);
    b(this, Ss, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new Hc() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new su(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: n = !1
  } = {}) {
    return new Do({
      viewBox: this.view,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return X(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: s = "display",
    annotationMode: i = Ys.ENABLE,
    transform: n = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: h = null,
    pageColors: l = null,
    printAnnotationStorage: c = null,
    isEditing: u = !1
  }) {
    var S, x;
    (S = this._stats) == null || S.time("Overall");
    const f = this._transport.getRenderingIntent(s, i, c, u), {
      renderingIntent: m,
      cacheKey: A
    } = f;
    p(this, Ss, !1), g(this, Ce, th).call(this), o || (o = this._transport.getOptionalContentConfig(m));
    let y = this._intentStates.get(A);
    y || (y = /* @__PURE__ */ Object.create(null), this._intentStates.set(A, y)), y.streamReaderCancelTimeout && (clearTimeout(y.streamReaderCancelTimeout), y.streamReaderCancelTimeout = null);
    const w = !!(m & pe.PRINT);
    y.displayReadyCapability || (y.displayReadyCapability = Promise.withResolvers(), y.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (x = this._stats) == null || x.time("Page Request"), this._pumpOperatorList(f));
    const v = (C) => {
      var T;
      y.renderTasks.delete(_), (this._maybeCleanupAfterRender || w) && p(this, Ss, !0), g(this, Ce, Wn).call(this, !w), C ? (_.capability.reject(C), this._abortOperatorList({
        intentState: y,
        reason: C instanceof Error ? C : new Error(C)
      })) : _.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (T = globalThis.Stats) != null && T.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, _ = new zl({
      callback: v,
      params: {
        canvasContext: t,
        viewport: e,
        transform: n,
        background: a
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: h,
      operatorList: y.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !w,
      pdfBug: this._pdfBug,
      pageColors: l
    });
    (y.renderTasks || (y.renderTasks = /* @__PURE__ */ new Set())).add(_);
    const E = _.task;
    return Promise.all([y.displayReadyCapability.promise, o]).then(([C, T]) => {
      var k;
      if (this.destroyed) {
        v();
        return;
      }
      if ((k = this._stats) == null || k.time("Rendering"), !(T.renderingIntent & m))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      _.initializeGraphics({
        transparency: C,
        optionalContentConfig: T
      }), _.operatorListChanged();
    }).catch(v), E;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Ys.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var l;
    function n() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(h));
    }
    const a = this._transport.getRenderingIntent(t, e, s, i, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let h;
    return o.opListReadCapability || (h = /* @__PURE__ */ Object.create(null), h.operatorListChanged = n, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(h), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (l = this._stats) == null || l.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((s) => ga.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function n() {
        a.read().then(function({
          value: h,
          done: l
        }) {
          if (l) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = h.lang), Object.assign(o.styles, h.styles), o.items.push(...h.items), n();
        }, i);
      }
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      n();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const s of e.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), p(this, Ss, !1), g(this, Ce, th).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    p(this, Ss, !0);
    const e = g(this, Ce, Wn).call(this, !1);
    return t && e && this._stats && (this._stats = new Hc()), e;
  }
  _startRenderPage(t, e) {
    var i, n;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (n = s.displayReadyCapability) == null || n.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && g(this, Ce, Wn).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: n,
      transfer: a
    } = s, h = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: n,
      modifiedIds: i
    }, a).getReader(), l = this._intentStates.get(e);
    l.streamReader = h;
    const c = () => {
      h.read().then(({
        value: u,
        done: f
      }) => {
        if (f) {
          l.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, l), c());
      }, (u) => {
        if (l.streamReader = null, !this._transport.destroyed) {
          if (l.operatorList) {
            l.operatorList.lastChunk = !0;
            for (const f of l.renderTasks)
              f.operatorListChanged();
            g(this, Ce, Wn).call(this, !0);
          }
          if (l.displayReadyCapability)
            l.displayReadyCapability.reject(u);
          else if (l.opListReadCapability)
            l.opListReadCapability.reject(u);
          else
            throw u;
        }
      });
    };
    c();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof Sc) {
          let i = Ep;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new Hn(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, n] of this._intentStates)
          if (n === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
ci = new WeakMap(), Ss = new WeakMap(), Ce = new WeakSet(), Wn = function(t = !1) {
  if (g(this, Ce, th).call(this), !r(this, Ss) || this.destroyed)
    return !1;
  if (t)
    return p(this, ci, setTimeout(() => {
      p(this, ci, null), g(this, Ce, Wn).call(this, !1);
    }, Sp)), !1;
  for (const {
    renderTasks: e,
    operatorList: s
  } of this._intentStates.values())
    if (e.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), p(this, Ss, !1), !0;
}, th = function() {
  r(this, ci) && (clearTimeout(r(this, ci)), p(this, ci, null));
};
var an, Dh;
class Fp {
  constructor() {
    b(this, an, /* @__PURE__ */ new Set());
    b(this, Dh, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    r(this, Dh).then(() => {
      for (const i of r(this, an))
        i.call(this, s);
    });
  }
  addEventListener(t, e) {
    r(this, an).add(e);
  }
  removeEventListener(t, e) {
    r(this, an).delete(e);
  }
  terminate() {
    r(this, an).clear();
  }
}
an = new WeakMap(), Dh = new WeakMap();
var Nh, on, hn, yr, eh, vr, sh;
const lt = class lt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = uf()
  } = {}) {
    b(this, yr);
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = r(lt, hn)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (r(lt, hn) || p(lt, hn, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return Vt ? Promise.all([Ei.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new ia("main", "worker", t), this._messageHandler.on("ready", function() {
    }), g(this, yr, eh).call(this);
  }
  _initialize() {
    if (r(lt, on) || r(lt, vr, sh)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: t
    } = lt;
    try {
      lt._isSameOrigin(window.location.href, t) || (t = lt._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), s = new ia("main", "worker", e), i = () => {
        n.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, n = new AbortController();
      e.addEventListener("error", () => {
        this._webWorker || i();
      }, {
        signal: n.signal
      }), s.on("test", (o) => {
        if (n.abort(), this.destroyed || !o) {
          i();
          return;
        }
        this._messageHandler = s, this._port = e, this._webWorker = e, g(this, yr, eh).call(this);
      }), s.on("ready", (o) => {
        if (n.abort(), this.destroyed) {
          i();
          return;
        }
        try {
          a();
        } catch {
          this._setupFakeWorker();
        }
      });
      const a = () => {
        const o = new Uint8Array();
        s.send("test", o, [o.buffer]);
      };
      a();
      return;
    } catch {
      $h("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    r(lt, on) || (W("Setting up fake worker."), p(lt, on, !0)), lt._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new Fp();
      this._port = e;
      const s = `fake${qt(lt, Nh)._++}`, i = new ia(s + "_worker", s, e);
      t.setup(i, e), this._messageHandler = new ia(s, s + "_worker", e), g(this, yr, eh).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (t = r(lt, hn)) == null || t.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(t) {
    var s;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (s = r(this, hn)) == null ? void 0 : s.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new lt(t);
  }
  static get workerSrc() {
    if (zs.workerSrc)
      return zs.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return X(this, "_setupFakeWorkerGlobal", (async () => r(this, vr, sh) ? r(this, vr, sh) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Nh = new WeakMap(), on = new WeakMap(), hn = new WeakMap(), yr = new WeakSet(), eh = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, vr = new WeakSet(), sh = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, b(lt, vr), b(lt, Nh, 0), b(lt, on, !1), b(lt, hn), Vt && (p(lt, on, !0), zs.workerSrc || (zs.workerSrc = "./pdf.worker.mjs")), lt._isSameOrigin = (t, e) => {
  let s;
  try {
    if (s = new URL(t), !s.origin || s.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(e, s);
  return s.origin === i.origin;
}, lt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let Kn = lt;
var Cs, Ze, wr, _r, ts, ln, na;
class Dp {
  constructor(t, e, s, i, n) {
    b(this, ln);
    b(this, Cs, /* @__PURE__ */ new Map());
    b(this, Ze, /* @__PURE__ */ new Map());
    b(this, wr, /* @__PURE__ */ new Map());
    b(this, _r, /* @__PURE__ */ new Map());
    b(this, ts, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new su(), this.fontLoader = new Ff({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return X(this, "annotationStorage", new Tc());
  }
  getRenderingIntent(t, e = Ys.ENABLE, s = null, i = !1, n = !1) {
    let a = pe.DISPLAY, o = Ml;
    switch (t) {
      case "any":
        a = pe.ANY;
        break;
      case "display":
        break;
      case "print":
        a = pe.PRINT;
        break;
      default:
        W(`getRenderingIntent - invalid intent: ${t}`);
    }
    const h = a & pe.PRINT && s instanceof jd ? s : this.annotationStorage;
    switch (e) {
      case Ys.DISABLE:
        a += pe.ANNOTATIONS_DISABLE;
        break;
      case Ys.ENABLE:
        break;
      case Ys.ENABLE_FORMS:
        a += pe.ANNOTATIONS_FORMS;
        break;
      case Ys.ENABLE_STORAGE:
        a += pe.ANNOTATIONS_STORAGE, o = h.serializable;
        break;
      default:
        W(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += pe.IS_EDITING), n && (a += pe.OPLIST);
    const {
      ids: l,
      hash: c
    } = h.modifiedIds, u = [a, o.hash, c];
    return {
      renderingIntent: a,
      cacheKey: u.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: l
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = r(this, ts)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of r(this, Ze).values())
      t.push(i._destroy());
    r(this, Ze).clear(), r(this, wr).clear(), r(this, _r).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i;
      this.commonObjs.clear(), this.fontLoader.clear(), r(this, Cs).clear(), this.filterFactory.destroy(), pa.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Hn("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      Tt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
        this._lastProgress = {
          loaded: n.loaded,
          total: n.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: n,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          Tt(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [n]);
        }).catch((n) => {
          i.error(n);
        });
      }, i.onCancel = (n) => {
        this._fullReader.cancel(n), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", (s) => {
      const i = Promise.withResolvers(), n = this._fullReader;
      return n.headersReady.then(() => {
        var a;
        (!n.isStreamingSupported || !n.isRangeSupported) && (this._lastProgress && ((a = e.onProgress) == null || a.call(e, this._lastProgress)), n.onProgress = (o) => {
          var h;
          (h = e.onProgress) == null || h.call(e, {
            loaded: o.loaded,
            total: o.total
          });
        }), i.resolve({
          isStreamingSupported: n.isStreamingSupported,
          isRangeSupported: n.isRangeSupported,
          contentLength: n.contentLength
        });
      }, i.reject), i.promise;
    }), t.on("GetRangeReader", (s, i) => {
      Tt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const n = this._networkStream.getRangeReader(s.begin, s.end);
      if (!n) {
        i.close();
        return;
      }
      i.onPull = () => {
        n.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          Tt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        n.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Lp(s, this));
    }), t.on("DocException", function(s) {
      let i;
      switch (s.name) {
        case "PasswordException":
          i = new rl(s.message, s.code);
          break;
        case "InvalidPDFException":
          i = new rd(s.message);
          break;
        case "MissingPDFException":
          i = new On(s.message);
          break;
        case "UnexpectedResponseException":
          i = new Gh(s.message, s.status);
          break;
        case "UnknownErrorException":
          i = new al(s.message, s.details);
          break;
        default:
          vt("DocException - expected a valid Error.");
      }
      e._capability.reject(i);
    }), t.on("PasswordRequest", (s) => {
      if (p(this, ts, Promise.withResolvers()), e.onPassword) {
        const i = (n) => {
          n instanceof Error ? r(this, ts).reject(n) : r(this, ts).resolve({
            password: n
          });
        };
        try {
          e.onPassword(i, s.code);
        } catch (n) {
          r(this, ts).reject(n);
        }
      } else
        r(this, ts).reject(new rl(s.message, s.code));
      return r(this, ts).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      r(this, Ze).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, n]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: o,
            fontExtraProperties: h,
            pdfBug: l
          } = this._params;
          if ("error" in n) {
            const m = n.error;
            W(`Error during font loading: ${m}`), this.commonObjs.resolve(s, m);
            break;
          }
          const c = l && ((a = globalThis.FontInspector) != null && a.enabled) ? (m, A) => globalThis.FontInspector.fontAdded(m, A) : null, u = new Df(n, {
            disableFontFace: o,
            inspectFont: c
          });
          this.fontLoader.bind(u).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !h && u.data && (u.data = null), this.commonObjs.resolve(s, u);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: f
          } = n;
          Tt(f, "The imageRef must be defined.");
          for (const m of r(this, Ze).values())
            for (const [, A] of m.objs)
              if ((A == null ? void 0 : A.ref) === f)
                return A.dataLen ? (this.commonObjs.resolve(s, structuredClone(A)), A.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, n);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, n, a]) => {
      var h;
      if (this.destroyed)
        return;
      const o = r(this, Ze).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (h = a == null ? void 0 : a.bitmap) == null || h.close();
          return;
        }
        switch (n) {
          case "Image":
            o.objs.resolve(s, a), (a == null ? void 0 : a.dataLen) > of && (o._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${n}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: s.loaded,
        total: s.total
      });
    }), t.on("FetchBuiltInCMap", (s) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(s) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), t.on("FetchStandardFontData", (s) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(s) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && W("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = r(this, wr).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((n) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      n.refStr && r(this, _r).set(n.refStr, t);
      const a = new Ip(e, n, this, this._params.pdfBug);
      return r(this, Ze).set(e, a), a;
    });
    return r(this, wr).set(e, i), i;
  }
  getPageIndex(t) {
    return Zc(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return g(this, ln, na).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return g(this, ln, na).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return g(this, ln, na).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return g(this, ln, na).call(this, "GetOptionalContentConfig").then((e) => new ep(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = r(this, Cs).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var n, a;
      return {
        info: i[0],
        metadata: i[1] ? new Zf(i[1]) : null,
        contentDispositionFilename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return r(this, Cs).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of r(this, Ze).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), r(this, Cs).clear(), this.filterFactory.destroy(!0), pa.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Zc(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return r(this, _r).get(e) ?? null;
  }
}
Cs = new WeakMap(), Ze = new WeakMap(), wr = new WeakMap(), _r = new WeakMap(), ts = new WeakMap(), ln = new WeakSet(), na = function(t, e = null) {
  const s = r(this, Cs).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return r(this, Cs).set(t, i), i;
};
const jo = Symbol("INITIAL_DATA");
var De, Ja, Bl;
class su {
  constructor() {
    b(this, Ja);
    b(this, De, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = g(this, Ja, Bl).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = r(this, De)[t];
    if (!s || s.data === jo)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = r(this, De)[t];
    return !!e && e.data !== jo;
  }
  resolve(t, e = null) {
    const s = g(this, Ja, Bl).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in r(this, De)) {
      const {
        data: s
      } = r(this, De)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    p(this, De, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in r(this, De)) {
      const {
        data: e
      } = r(this, De)[t];
      e !== jo && (yield [t, e]);
    }
  }
}
De = new WeakMap(), Ja = new WeakSet(), Bl = function(t) {
  var e;
  return (e = r(this, De))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: jo
  });
};
var di;
class Np {
  constructor(t) {
    b(this, di, null);
    p(this, di, t), this.onContinue = null;
  }
  get promise() {
    return r(this, di).capability.promise;
  }
  cancel(t = 0) {
    r(this, di).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = r(this, di).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = r(this, di);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
di = new WeakMap();
var ui, cn;
const Ii = class Ii {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: n,
    operatorList: a,
    pageIndex: o,
    canvasFactory: h,
    filterFactory: l,
    useRequestAnimationFrame: c = !1,
    pdfBug: u = !1,
    pageColors: f = null
  }) {
    b(this, ui, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = h, this.filterFactory = l, this._pdfBug = u, this.pageColors = f, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Np(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var o, h;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (r(Ii, cn).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      r(Ii, cn).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: n,
      background: a
    } = this.params;
    this.gfx = new Yn(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: n,
      viewport: i,
      transparency: t,
      background: a
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (h = this.graphicsReadyCallback) == null || h.call(this);
  }
  cancel(t = null, e = 0) {
    var s;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), r(this, ui) && (window.cancelAnimationFrame(r(this, ui)), p(this, ui, null)), r(Ii, cn).delete(this._canvas), this.callback(t || new Sc(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? p(this, ui, window.requestAnimationFrame(() => {
      p(this, ui, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), r(Ii, cn).delete(this._canvas), this.callback())));
  }
};
ui = new WeakMap(), cn = new WeakMap(), b(Ii, cn, /* @__PURE__ */ new WeakSet());
let zl = Ii;
const Op = "4.7.76", Hp = "8b73b828b";
function td(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function Kr(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class ed {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Kr(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = td(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Kr);
  }
  static RGB_HTML(t) {
    return `#${t.map(td).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [Kr(1 - Math.min(1, t + i)), Kr(1 - Math.min(1, s + i)), Kr(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, n = 1 - e, a = 1 - s, o = Math.min(i, n, a);
    return ["CMYK", i, n, a, o];
  }
}
class iu {
  static setupStorage(t, e, s, i, n) {
    const a = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), n === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), n === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), n === "print")
            break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of s.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const h = o.target.options, l = h.selectedIndex === -1 ? "" : h[h.selectedIndex].value;
          i.setValue(e, {
            value: l
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: i,
    linkService: n
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
    for (const [h, l] of Object.entries(a))
      if (l != null)
        switch (h) {
          case "class":
            l.length && t.setAttribute(h, l.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", l);
            break;
          case "style":
            Object.assign(t.style, l);
            break;
          case "textContent":
            t.textContent = l;
            break;
          default:
            (!o || h !== "href" && h !== "newWindow") && t.setAttribute(h, l);
        }
    o && n.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    var u, f;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, n = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: n,
      linkService: s
    });
    const o = n !== "richText", h = t.div;
    if (h.append(a), t.viewport) {
      const m = `matrix(${t.viewport.transform.join(",")})`;
      h.style.transform = m;
    }
    o && h.setAttribute("class", "xfaLayer xfaFont");
    const l = [];
    if (i.children.length === 0) {
      if (i.value) {
        const m = document.createTextNode(i.value);
        a.append(m), o && ga.shouldBuildText(i.name) && l.push(m);
      }
      return {
        textDivs: l
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [m, A, y] = c.at(-1);
      if (A + 1 === m.children.length) {
        c.pop();
        continue;
      }
      const w = m.children[++c.at(-1)[1]];
      if (w === null)
        continue;
      const {
        name: v
      } = w;
      if (v === "#text") {
        const E = document.createTextNode(w.value);
        l.push(E), y.append(E);
        continue;
      }
      const _ = (u = w == null ? void 0 : w.attributes) != null && u.xmlns ? document.createElementNS(w.attributes.xmlns, v) : document.createElement(v);
      if (y.append(_), w.attributes && this.setAttributes({
        html: _,
        element: w,
        storage: e,
        intent: n,
        linkService: s
      }), ((f = w.children) == null ? void 0 : f.length) > 0)
        c.push([w, -1, _]);
      else if (w.value) {
        const E = document.createTextNode(w.value);
        o && ga.shouldBuildText(v) && l.push(E), _.append(E);
      }
    }
    for (const m of h.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      m.setAttribute("readOnly", !0);
    return {
      textDivs: l
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Oo = 1e3, Bp = 9, Fn = /* @__PURE__ */ new WeakSet();
function js(d) {
  return {
    width: d[2] - d[0],
    height: d[3] - d[1]
  };
}
class zp {
  static create(t) {
    switch (t.data.annotationType) {
      case _t.LINK:
        return new nu(t);
      case _t.TEXT:
        return new jp(t);
      case _t.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new Up(t);
          case "Btn":
            return t.data.radioButton ? new ou(t) : t.data.checkBox ? new Gp(t) : new Wp(t);
          case "Ch":
            return new Vp(t);
          case "Sig":
            return new $p(t);
        }
        return new Bn(t);
      case _t.POPUP:
        return new Ul(t);
      case _t.FREETEXT:
        return new uu(t);
      case _t.LINE:
        return new Xp(t);
      case _t.SQUARE:
        return new Yp(t);
      case _t.CIRCLE:
        return new Kp(t);
      case _t.POLYLINE:
        return new fu(t);
      case _t.CARET:
        return new Jp(t);
      case _t.INK:
        return new Lc(t);
      case _t.POLYGON:
        return new Qp(t);
      case _t.HIGHLIGHT:
        return new pu(t);
      case _t.UNDERLINE:
        return new Zp(t);
      case _t.SQUIGGLY:
        return new tg(t);
      case _t.STRIKEOUT:
        return new eg(t);
      case _t.STAMP:
        return new gu(t);
      case _t.FILEATTACHMENT:
        return new sg(t);
      default:
        return new mt(t);
    }
  }
}
var dn, Er, Sr, Za, jl;
const Dc = class Dc {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    b(this, Za);
    b(this, dn, null);
    b(this, Er, !1);
    b(this, Sr, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: s
  }) {
    return !!(t != null && t.str || e != null && e.str || s != null && s.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return Dc._hasPopupData(this.data);
  }
  updateEdited(t) {
    var s;
    if (!this.container)
      return;
    r(this, dn) || p(this, dn, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && g(this, Za, jl).call(this, e), (s = r(this, Sr)) == null || s.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    r(this, dn) && (g(this, Za, jl).call(this, r(this, dn).rect), (t = r(this, Sr)) == null || t.popup.resetEdited(), p(this, dn, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, n = document.createElement("section");
    n.setAttribute("data-annotation-id", e.id), this instanceof Bn || (n.tabIndex = Oo);
    const {
      style: a
    } = n;
    if (a.zIndex = this.parent.zIndex++, e.popupRef && n.setAttribute("aria-haspopup", "dialog"), e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof Ul) {
      const {
        rotation: y
      } = e;
      return !e.hasOwnCanvas && y !== 0 && this.setRotation(y, n), n;
    }
    const {
      width: o,
      height: h
    } = js(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const y = e.borderStyle.horizontalCornerRadius, w = e.borderStyle.verticalCornerRadius;
      if (y > 0 || w > 0) {
        const _ = `calc(${y}px * var(--scale-factor)) / calc(${w}px * var(--scale-factor))`;
        a.borderRadius = _;
      } else if (this instanceof ou) {
        const _ = `calc(${o}px * var(--scale-factor)) / calc(${h}px * var(--scale-factor))`;
        a.borderRadius = _;
      }
      switch (e.borderStyle.style) {
        case Xr.SOLID:
          a.borderStyle = "solid";
          break;
        case Xr.DASHED:
          a.borderStyle = "dashed";
          break;
        case Xr.BEVELED:
          W("Unimplemented border style: beveled");
          break;
        case Xr.INSET:
          W("Unimplemented border style: inset");
          break;
        case Xr.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (p(this, Er, !0), a.borderColor = L.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0)) : a.borderWidth = 0;
    }
    const l = L.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: u,
      pageX: f,
      pageY: m
    } = i.rawDims;
    a.left = `${100 * (l[0] - f) / c}%`, a.top = `${100 * (l[1] - m) / u}%`;
    const {
      rotation: A
    } = e;
    return e.hasOwnCanvas || A === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * h / u}%`) : this.setRotation(A, n), n;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: n,
      height: a
    } = js(this.data.rect);
    let o, h;
    t % 180 === 0 ? (o = 100 * n / s, h = 100 * a / i) : (o = 100 * a / s, h = 100 * n / i), e.style.width = `${o}%`, e.style.height = `${h}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const n = i.detail[e], a = n[0], o = n.slice(1);
      i.target.style[s] = ed[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: ed[`${a}_rgb`](o)
      });
    };
    return X(this, "_commonActions", {
      display: (e) => {
        const {
          display: s
        } = e.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const n = t[i] || s[i];
      n == null || n(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, n] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = {
          detail: {
            [i]: n
          },
          target: t
        };
        a(o), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, s, i, n] = this.data.rect.map((y) => Math.fround(y));
    if (t.length === 8) {
      const [y, w, v, _] = t.subarray(2, 6);
      if (i === y && n === w && e === v && s === _)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (r(this, Er)) {
      const {
        borderColor: y,
        borderWidth: w
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${y}" stroke-width="${w}">`], this.container.classList.add("hasBorder");
    }
    const h = i - e, l = n - s, {
      svgFactory: c
    } = this, u = c.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
    const f = c.createElement("defs");
    u.append(f);
    const m = c.createElement("clipPath"), A = `clippath_${this.data.id}`;
    m.setAttribute("id", A), m.setAttribute("clipPathUnits", "objectBoundingBox"), f.append(m);
    for (let y = 2, w = t.length; y < w; y += 8) {
      const v = t[y], _ = t[y + 1], E = t[y + 2], S = t[y + 3], x = c.createElement("rect"), C = (E - e) / h, T = (n - _) / l, k = (v - E) / h, F = (_ - S) / l;
      x.setAttribute("x", C), x.setAttribute("y", T), x.setAttribute("width", k), x.setAttribute("height", F), m.append(x), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${C}" y="${T}" width="${k}" height="${F}"/>`);
    }
    r(this, Er) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${A})`;
  }
  _createPopup() {
    const {
      container: t,
      data: e
    } = this;
    t.setAttribute("aria-haspopup", "dialog");
    const s = p(this, Sr, new Ul({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: e.modificationDate,
        contentsObj: e.contentsObj,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(s.render());
  }
  render() {
    vt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: n,
          id: a,
          exportValues: o
        } of i) {
          if (n === -1 || a === e)
            continue;
          const h = typeof o == "string" ? o : null, l = document.querySelector(`[data-element-id="${a}"]`);
          if (l && !Fn.has(l)) {
            W(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          s.push({
            id: a,
            exportValue: h,
            domElement: l
          });
        }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: n
      } = i, a = i.getAttribute("data-element-id");
      a !== e && Fn.has(i) && s.push({
        id: a,
        exportValue: n,
        domElement: i
      });
    }
    return s;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e
      });
    });
  }
};
dn = new WeakMap(), Er = new WeakMap(), Sr = new WeakMap(), Za = new WeakSet(), jl = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: n,
          pageHeight: a,
          pageX: o,
          pageY: h
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...t);
  const {
    width: l,
    height: c
  } = js(t);
  e.left = `${100 * (t[0] - o) / n}%`, e.top = `${100 * (a - t[3] + h) / a}%`, i === 0 ? (e.width = `${100 * l / n}%`, e.height = `${100 * c / a}%`) : this.setRotation(i);
};
let mt = Dc;
var ge, Ri, ru, au;
class nu extends mt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    b(this, ge);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let n = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), n = !0) : e.action ? (this._bindNamedAction(i, e.action), n = !0) : e.attachment ? (g(this, ge, ru).call(this, i, e.attachment, e.attachmentDest), n = !0) : e.setOCGState ? (g(this, ge, au).call(this, i, e.setOCGState), n = !0) : e.dest ? (this._bindLink(i, e.dest), n = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), n = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), n = !0) : this.isTooltipOnly && !n && (this._bindLink(i, ""), n = !0)), this.container.classList.add("linkAnnotation"), n && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && g(this, ge, Ri).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), g(this, ge, Ri).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const n of Object.keys(s.actions)) {
      const a = i.get(n);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: s.id,
            name: n
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), g(this, ge, Ri).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), g(this, ge, Ri).call(this), !this._fieldObjects) {
      W('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var u;
      i == null || i();
      const {
        fields: n,
        refs: a,
        include: o
      } = s, h = [];
      if (n.length !== 0 || a.length !== 0) {
        const f = new Set(a);
        for (const m of n) {
          const A = this._fieldObjects[m] || [];
          for (const {
            id: y
          } of A)
            f.add(y);
        }
        for (const m of Object.values(this._fieldObjects))
          for (const A of m)
            f.has(A.id) === o && h.push(A);
      } else
        for (const f of Object.values(this._fieldObjects))
          h.push(...f);
      const l = this.annotationStorage, c = [];
      for (const f of h) {
        const {
          id: m
        } = f;
        switch (c.push(m), f.type) {
          case "text": {
            const y = f.defaultValue || "";
            l.setValue(m, {
              value: y
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const y = f.defaultValue === f.exportValues;
            l.setValue(m, {
              value: y
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const y = f.defaultValue || "";
            l.setValue(m, {
              value: y
            });
            break;
          }
          default:
            continue;
        }
        const A = document.querySelector(`[data-element-id="${m}"]`);
        if (A) {
          if (!Fn.has(A)) {
            W(`_bindResetFormAction - element not allowed: ${m}`);
            continue;
          }
        } else continue;
        A.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: c,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
ge = new WeakSet(), Ri = function() {
  this.container.setAttribute("data-internal-link", "");
}, ru = function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => {
    var n;
    return (n = this.downloadManager) == null || n.openOrDownloadData(s.content, s.filename, i), !1;
  }, g(this, ge, Ri).call(this);
}, au = function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), g(this, ge, Ri).call(this);
};
class jp extends mt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class Bn extends mt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return re.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, n) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(s, (a) => {
      var o;
      if (s === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (s === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      n && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, s, i) {
    var n, a, o;
    for (const [h, l] of s)
      (l === "Action" || (n = this.data.actions) != null && n[l]) && ((l === "Focus" || l === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, h, l, i), l === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : l === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : L.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Bp, n = t.style;
    let a;
    const o = 2, h = (l) => Math.round(10 * l) / 10;
    if (this.data.multiLine) {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(l / (Qh * i)) || 1, u = l / c;
      a = Math.min(i, h(u / Qh));
    } else {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, h(l / Qh));
    }
    n.fontSize = `calc(${a}px * var(--scale-factor))`, n.color = L.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class Up extends Bn {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const n = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), n.setValue(a.id, {
        [i]: s
      });
  }
  render() {
    var i, n;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = a.value || "";
      const h = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      h && o.length > h && (o = o.slice(0, h));
      let l = a.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      l && this.data.comb && (l = l.replaceAll(/\s+/g, ""));
      const c = {
        userValue: o,
        formattedValue: l,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = l ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", l ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), Fn.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Oo, this._setRequired(s, this.data.required), h && (s.maxLength = h), s.addEventListener("input", (f) => {
        t.setValue(e, {
          value: f.target.value
        }), this.setPropertyOnSiblings(s, "value", f.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (f) => {
        const m = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = m, c.formattedValue = null;
      });
      let u = (f) => {
        const {
          formattedValue: m
        } = c;
        m != null && (f.target.value = m), f.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (m) => {
          var y;
          if (c.focused)
            return;
          const {
            target: A
          } = m;
          c.userValue && (A.value = c.userValue), c.lastCommittedValue = A.value, c.commitKey = 1, (y = this.data.actions) != null && y.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (m) => {
          this.showElementAndHideCanvas(m.target);
          const A = {
            value(y) {
              c.userValue = y.detail.value ?? "", t.setValue(e, {
                value: c.userValue.toString()
              }), y.target.value = c.userValue;
            },
            formattedValue(y) {
              const {
                formattedValue: w
              } = y.detail;
              c.formattedValue = w, w != null && y.target !== document.activeElement && (y.target.value = w), t.setValue(e, {
                formattedValue: w
              });
            },
            selRange(y) {
              y.target.setSelectionRange(...y.detail.selRange);
            },
            charLimit: (y) => {
              var E;
              const {
                charLimit: w
              } = y.detail, {
                target: v
              } = y;
              if (w === 0) {
                v.removeAttribute("maxLength");
                return;
              }
              v.setAttribute("maxLength", w);
              let _ = c.userValue;
              !_ || _.length <= w || (_ = _.slice(0, w), v.value = c.userValue = _, t.setValue(e, {
                value: _
              }), (E = this.linkService.eventBus) == null || E.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: _,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: v.selectionStart,
                  selEnd: v.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(A, m);
        }), s.addEventListener("keydown", (m) => {
          var w;
          c.commitKey = 1;
          let A = -1;
          if (m.key === "Escape" ? A = 0 : m.key === "Enter" && !this.data.multiLine ? A = 2 : m.key === "Tab" && (c.commitKey = 3), A === -1)
            return;
          const {
            value: y
          } = m.target;
          c.lastCommittedValue !== y && (c.lastCommittedValue = y, c.userValue = y, (w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: y,
              willCommit: !0,
              commitKey: A,
              selStart: m.target.selectionStart,
              selEnd: m.target.selectionEnd
            }
          }));
        });
        const f = u;
        u = null, s.addEventListener("blur", (m) => {
          var y, w;
          if (!c.focused || !m.relatedTarget)
            return;
          (y = this.data.actions) != null && y.Blur || (c.focused = !1);
          const {
            value: A
          } = m.target;
          c.userValue = A, c.lastCommittedValue !== A && ((w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: A,
              willCommit: !0,
              commitKey: c.commitKey,
              selStart: m.target.selectionStart,
              selEnd: m.target.selectionEnd
            }
          })), f(m);
        }), (n = this.data.actions) != null && n.Keystroke && s.addEventListener("beforeinput", (m) => {
          var x;
          c.lastCommittedValue = null;
          const {
            data: A,
            target: y
          } = m, {
            value: w,
            selectionStart: v,
            selectionEnd: _
          } = y;
          let E = v, S = _;
          switch (m.inputType) {
            case "deleteWordBackward": {
              const C = w.substring(0, v).match(/\w*[^\w]*$/);
              C && (E -= C[0].length);
              break;
            }
            case "deleteWordForward": {
              const C = w.substring(v).match(/^[^\w]*\w*/);
              C && (S += C[0].length);
              break;
            }
            case "deleteContentBackward":
              v === _ && (E -= 1);
              break;
            case "deleteContentForward":
              v === _ && (S += 1);
              break;
          }
          m.preventDefault(), (x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: w,
              change: A || "",
              willCommit: !1,
              selStart: E,
              selEnd: S
            }
          });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (m) => m.target.value);
      }
      if (u && s.addEventListener("blur", u), this.data.comb) {
        const m = (this.data.rect[2] - this.data.rect[0]) / h;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${m}px * var(--scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class $p extends Bn {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Gp extends Bn {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const n = document.createElement("input");
    return Fn.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.setAttribute("exportValue", e.exportValue), n.tabIndex = Oo, n.addEventListener("change", (a) => {
      const {
        name: o,
        checked: h
      } = a.target;
      for (const l of this._getElementsByName(o, s)) {
        const c = h && l.exportValue === e.exportValue;
        l.domElement && (l.domElement.checked = c), t.setValue(l.id, {
          value: c
        });
      }
      t.setValue(s, {
        value: h
      });
    }), n.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(h) {
          h.target.checked = h.detail.value !== "Off", t.setValue(s, {
            value: h.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class ou extends Bn {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
      value: i
    })), i)
      for (const a of this._getElementsByName(e.fieldName, s))
        t.setValue(a.id, {
          value: !1
        });
    const n = document.createElement("input");
    if (Fn.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.tabIndex = Oo, n.addEventListener("change", (a) => {
      const {
        name: o,
        checked: h
      } = a.target;
      for (const l of this._getElementsByName(o, s))
        t.setValue(l.id, {
          value: !1
        });
      t.setValue(s, {
        value: h
      });
    }), n.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      n.addEventListener("updatefromsandbox", (o) => {
        const h = {
          value: (l) => {
            const c = a === l.detail.value;
            for (const u of this._getElementsByName(l.target.name)) {
              const f = c && u.id === s;
              u.domElement && (u.domElement.checked = f), t.setValue(u.id, {
                value: f
              });
            }
          }
        };
        this._dispatchEventFromSandbox(h, o);
      }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class Wp extends nu {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class Vp extends Bn {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    Fn.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Oo;
    let n = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const u = this.data.defaultFieldValue;
      for (const f of i.options)
        f.selected = f.value === u;
    });
    for (const c of this.data.options) {
      const u = document.createElement("option");
      u.textContent = c.displayValue, u.value = c.exportValue, s.value.includes(c.exportValue) && (u.setAttribute("selected", !0), n = !1), i.append(u);
    }
    let a = null;
    if (n) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), i.prepend(c), a = () => {
        c.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const o = (c) => {
      const u = c ? "value" : "textContent", {
        options: f,
        multiple: m
      } = i;
      return m ? Array.prototype.filter.call(f, (A) => A.selected).map((A) => A[u]) : f.selectedIndex === -1 ? null : f[f.selectedIndex][u];
    };
    let h = o(!1);
    const l = (c) => {
      const u = c.target.options;
      return Array.prototype.map.call(u, (f) => ({
        displayValue: f.textContent,
        exportValue: f.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const u = {
        value(f) {
          a == null || a();
          const m = f.detail.value, A = new Set(Array.isArray(m) ? m : [m]);
          for (const y of i.options)
            y.selected = A.has(y.value);
          t.setValue(e, {
            value: o(!0)
          }), h = o(!1);
        },
        multipleSelection(f) {
          i.multiple = !0;
        },
        remove(f) {
          const m = i.options, A = f.detail.remove;
          m[A].selected = !1, i.remove(A), m.length > 0 && Array.prototype.findIndex.call(m, (w) => w.selected) === -1 && (m[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: l(f)
          }), h = o(!1);
        },
        clear(f) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), h = o(!1);
        },
        insert(f) {
          const {
            index: m,
            displayValue: A,
            exportValue: y
          } = f.detail.insert, w = i.children[m], v = document.createElement("option");
          v.textContent = A, v.value = y, w ? w.before(v) : i.append(v), t.setValue(e, {
            value: o(!0),
            items: l(f)
          }), h = o(!1);
        },
        items(f) {
          const {
            items: m
          } = f.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const A of m) {
            const {
              displayValue: y,
              exportValue: w
            } = A, v = document.createElement("option");
            v.textContent = y, v.value = w, i.append(v);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: l(f)
          }), h = o(!1);
        },
        indices(f) {
          const m = new Set(f.detail.indices);
          for (const A of f.target.options)
            A.selected = m.has(A.index);
          t.setValue(e, {
            value: o(!0)
          }), h = o(!1);
        },
        editable(f) {
          f.target.disabled = !f.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, c);
    }), i.addEventListener("input", (c) => {
      var m;
      const u = o(!0), f = o(!1);
      t.setValue(e, {
        value: u
      }), c.preventDefault(), (m = this.linkService.eventBus) == null || m.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: h,
          change: f,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (c) => c.target.value)) : i.addEventListener("input", function(c) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class Ul extends mt {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: mt._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new qp({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const s of this.elements)
      s.popup = t, e.push(s.data.id), s.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((s) => `${_c}${s}`).join(",")), this.container;
  }
}
var Cr, Oh, Hh, xr, un, pt, xs, Tr, to, eo, Rr, Ts, Ne, Rs, so, Ms, io, fn, pn, nt, ih, $l, hu, lu, cu, du, nh, rh, Gl;
class qp {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: n,
    contentsObj: a,
    richText: o,
    parent: h,
    rect: l,
    parentRect: c,
    open: u
  }) {
    b(this, nt);
    b(this, Cr, g(this, nt, cu).bind(this));
    b(this, Oh, g(this, nt, Gl).bind(this));
    b(this, Hh, g(this, nt, rh).bind(this));
    b(this, xr, g(this, nt, nh).bind(this));
    b(this, un, null);
    b(this, pt, null);
    b(this, xs, null);
    b(this, Tr, null);
    b(this, to, null);
    b(this, eo, null);
    b(this, Rr, null);
    b(this, Ts, !1);
    b(this, Ne, null);
    b(this, Rs, null);
    b(this, so, null);
    b(this, Ms, null);
    b(this, io, null);
    b(this, fn, null);
    b(this, pn, !1);
    var f;
    p(this, pt, t), p(this, io, i), p(this, xs, a), p(this, Ms, o), p(this, eo, h), p(this, un, e), p(this, so, l), p(this, Rr, c), p(this, to, s), p(this, Tr, pd.toDateObject(n)), this.trigger = s.flatMap((m) => m.getElementsToTriggerPopup());
    for (const m of this.trigger)
      m.addEventListener("click", r(this, xr)), m.addEventListener("mouseenter", r(this, Hh)), m.addEventListener("mouseleave", r(this, Oh)), m.classList.add("popupTriggerArea");
    for (const m of s)
      (f = m.container) == null || f.addEventListener("keydown", r(this, Cr));
    r(this, pt).hidden = !0, u && g(this, nt, nh).call(this);
  }
  render() {
    if (r(this, Ne))
      return;
    const t = p(this, Ne, document.createElement("div"));
    if (t.className = "popup", r(this, un)) {
      const n = t.style.outlineColor = L.makeHexColor(...r(this, un));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : t.style.backgroundColor = L.makeHexColor(...r(this, un).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = r(this, io), t.append(e), r(this, Tr)) {
      const n = document.createElement("span");
      n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: r(this, Tr).valueOf()
      })), e.append(n);
    }
    const i = r(this, nt, ih);
    if (i)
      iu.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const n = this._formatContents(r(this, xs));
      t.append(n);
    }
    r(this, pt).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let n = 0, a = i.length; n < a; ++n) {
      const o = i[n];
      s.append(document.createTextNode(o)), n < a - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var s;
    r(this, fn) || p(this, fn, {
      contentsObj: r(this, xs),
      richText: r(this, Ms)
    }), t && p(this, Rs, null), e && (p(this, Ms, g(this, nt, lu).call(this, e)), p(this, xs, null)), (s = r(this, Ne)) == null || s.remove(), p(this, Ne, null);
  }
  resetEdited() {
    var t;
    r(this, fn) && ({
      contentsObj: qt(this, xs)._,
      richText: qt(this, Ms)._
    } = r(this, fn), p(this, fn, null), (t = r(this, Ne)) == null || t.remove(), p(this, Ne, null), p(this, Rs, null));
  }
  forceHide() {
    p(this, pn, this.isVisible), r(this, pn) && (r(this, pt).hidden = !0);
  }
  maybeShow() {
    r(this, pn) && (r(this, Ne) || g(this, nt, rh).call(this), p(this, pn, !1), r(this, pt).hidden = !1);
  }
  get isVisible() {
    return r(this, pt).hidden === !1;
  }
}
Cr = new WeakMap(), Oh = new WeakMap(), Hh = new WeakMap(), xr = new WeakMap(), un = new WeakMap(), pt = new WeakMap(), xs = new WeakMap(), Tr = new WeakMap(), to = new WeakMap(), eo = new WeakMap(), Rr = new WeakMap(), Ts = new WeakMap(), Ne = new WeakMap(), Rs = new WeakMap(), so = new WeakMap(), Ms = new WeakMap(), io = new WeakMap(), fn = new WeakMap(), pn = new WeakMap(), nt = new WeakSet(), ih = function() {
  const t = r(this, Ms), e = r(this, xs);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && r(this, Ms).html || null;
}, $l = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, nt, ih)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, hu = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, nt, ih)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, lu = function(t) {
  const e = [], s = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: r(this, nt, hu),
      fontSize: r(this, nt, $l) ? `calc(${r(this, nt, $l)}px * var(--scale-factor))` : ""
    }
  };
  for (const n of t.split(`
`))
    e.push({
      name: "span",
      value: n,
      attributes: i
    });
  return s;
}, cu = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && r(this, Ts)) && g(this, nt, nh).call(this);
}, du = function() {
  if (r(this, Rs) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: i,
        pageY: n
      }
    }
  } = r(this, eo);
  let a = !!r(this, Rr), o = a ? r(this, Rr) : r(this, so);
  for (const A of r(this, to))
    if (!o || L.intersect(A.data.rect, o) !== null) {
      o = A.data.rect, a = !0;
      break;
    }
  const h = L.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, u = h[0] + c, f = h[1];
  p(this, Rs, [100 * (u - i) / e, 100 * (f - n) / s]);
  const {
    style: m
  } = r(this, pt);
  m.left = `${r(this, Rs)[0]}%`, m.top = `${r(this, Rs)[1]}%`;
}, nh = function() {
  p(this, Ts, !r(this, Ts)), r(this, Ts) ? (g(this, nt, rh).call(this), r(this, pt).addEventListener("click", r(this, xr)), r(this, pt).addEventListener("keydown", r(this, Cr))) : (g(this, nt, Gl).call(this), r(this, pt).removeEventListener("click", r(this, xr)), r(this, pt).removeEventListener("keydown", r(this, Cr)));
}, rh = function() {
  r(this, Ne) || this.render(), this.isVisible ? r(this, Ts) && r(this, pt).classList.add("focused") : (g(this, nt, du).call(this), r(this, pt).hidden = !1, r(this, pt).style.zIndex = parseInt(r(this, pt).style.zIndex) + 1e3);
}, Gl = function() {
  r(this, pt).classList.remove("focused"), !(r(this, Ts) || !this.isVisible) && (r(this, pt).hidden = !0, r(this, pt).style.zIndex = parseInt(r(this, pt).style.zIndex) - 1e3);
};
class uu extends mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = U.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var no;
class Xp extends mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, no, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = js(e.rect), n = this.svgFactory.create(s, i, !0), a = p(this, no, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), n.append(a), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, no);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
no = new WeakMap();
var ro;
class Yp extends mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, ro, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = js(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = p(this, ro, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, ro);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ro = new WeakMap();
var ao;
class Kp extends mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, ao, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = js(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = p(this, ao, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, ao);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ao = new WeakMap();
var oo;
class fu extends mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, oo, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: n
      }
    } = this;
    if (!s)
      return this.container;
    const {
      width: a,
      height: o
    } = js(e), h = this.svgFactory.create(a, o, !0);
    let l = [];
    for (let u = 0, f = s.length; u < f; u += 2) {
      const m = s[u] - e[0], A = e[3] - s[u + 1];
      l.push(`${m},${A}`);
    }
    l = l.join(" ");
    const c = p(this, oo, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", l), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), h.append(c), this.container.append(h), !n && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, oo);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
oo = new WeakMap();
class Qp extends fu {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Jp extends mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var ho;
class Lc extends mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, ho, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? U.HIGHLIGHT : U.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        inkLists: s,
        borderStyle: i,
        popupRef: n
      }
    } = this, {
      width: a,
      height: o
    } = js(e), h = this.svgFactory.create(a, o, !0);
    for (const l of s) {
      let c = [];
      for (let f = 0, m = l.length; f < m; f += 2) {
        const A = l[f] - e[0], y = e[3] - l[f + 1];
        c.push(`${A},${y}`);
      }
      c = c.join(" ");
      const u = this.svgFactory.createElement(this.svgElementName);
      r(this, ho).push(u), u.setAttribute("points", c), u.setAttribute("stroke-width", i.width || 1), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), !n && this.hasPopupData && this._createPopup(), h.append(u);
    }
    return this.container.append(h), this._editOnDoubleClick(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, ho);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ho = new WeakMap();
class pu extends mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = U.HIGHLIGHT;
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
  }
}
class Zp extends mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class tg extends mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class eg extends mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class gu extends mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = U.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var lo, co, Wl;
class sg extends mt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    b(this, co);
    b(this, lo, null);
    const {
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: s
    } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", g(this, co, Wl).bind(this)), p(this, lo, i);
    const {
      isMac: n
    } = re.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (n ? a.metaKey : a.ctrlKey) && g(this, co, Wl).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return r(this, lo);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
lo = new WeakMap(), co = new WeakSet(), Wl = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var uo, gn, mn, fo, Dn, mu, Vl;
class ig {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: n,
    viewport: a,
    structTreeLayer: o
  }) {
    b(this, Dn);
    b(this, uo, null);
    b(this, gn, null);
    b(this, mn, /* @__PURE__ */ new Map());
    b(this, fo, null);
    this.div = t, p(this, uo, e), p(this, gn, s), p(this, fo, o || null), this.page = n, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return r(this, mn).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    Ln(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), n = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Ec(),
      annotationStorage: t.annotationStorage || new Tc(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const h = o.annotationType === _t.POPUP;
      if (h) {
        const u = i.get(o.id);
        if (!u)
          continue;
        n.elements = u;
      } else {
        const {
          width: u,
          height: f
        } = js(o.rect);
        if (u <= 0 || f <= 0)
          continue;
      }
      n.data = o;
      const l = zp.create(n);
      if (!l.isRenderable)
        continue;
      if (!h && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(l) : i.set(o.popupRef, [l]);
      }
      const c = l.render();
      o.hidden && (c.style.visibility = "hidden"), await g(this, Dn, mu).call(this, c, o.id), l._isEditable && (r(this, mn).set(l.data.id, l), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(l));
    }
    g(this, Dn, Vl).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, Ln(e, {
      rotation: t.rotation
    }), g(this, Dn, Vl).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(r(this, mn).values());
  }
  getEditableAnnotation(t) {
    return r(this, mn).get(t);
  }
}
uo = new WeakMap(), gn = new WeakMap(), mn = new WeakMap(), fo = new WeakMap(), Dn = new WeakSet(), mu = async function(t, e) {
  var a, o;
  const s = t.firstChild || t, i = s.id = `${_c}${e}`, n = await ((a = r(this, fo)) == null ? void 0 : a.getAriaAttributes(i));
  if (n)
    for (const [h, l] of n)
      s.setAttribute(h, l);
  this.div.append(t), (o = r(this, uo)) == null || o.moveElementInDOM(this.div, t, s, !1);
}, Vl = function() {
  if (!r(this, gn))
    return;
  const t = this.div;
  for (const [e, s] of r(this, gn)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: n
    } = i;
    n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
  }
  r(this, gn).clear();
};
const Uo = /\r\n?|\n/g;
var Oe, le, po, bn, ce, yt, bu, Au, yu, ah, $s, oh, hh, vu, Xl, wu;
const ot = class ot extends J {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    b(this, yt);
    b(this, Oe);
    b(this, le, "");
    b(this, po, `${this.id}-editor`);
    b(this, bn, null);
    b(this, ce);
    p(this, Oe, e.color || ot._defaultColor || J._defaultLineColor), p(this, ce, e.fontSize || ot._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = ot.prototype, s = (a) => a.isEmpty(), i = In.TRANSLATE_SMALL, n = In.TRANSLATE_BIG;
    return X(this, "_keyboardManager", new No([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-n, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [n, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -n],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, n],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    J.initialize(e, s, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case H.FREETEXT_SIZE:
        ot._defaultFontSize = s;
        break;
      case H.FREETEXT_COLOR:
        ot._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case H.FREETEXT_SIZE:
        g(this, yt, bu).call(this, s);
        break;
      case H.FREETEXT_COLOR:
        g(this, yt, Au).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[H.FREETEXT_SIZE, ot._defaultFontSize], [H.FREETEXT_COLOR, ot._defaultColor || J._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[H.FREETEXT_SIZE, r(this, ce)], [H.FREETEXT_COLOR, r(this, Oe)]];
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-ot._internalPadding * e, -(ot._internalPadding + r(this, ce)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(U.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), p(this, bn, new AbortController());
    const e = this._uiManager.combinedSignal(r(this, bn));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    });
  }
  disableEditMode() {
    var e;
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", r(this, po)), this._isDraggable = !0, (e = r(this, bn)) == null || e.abort(), p(this, bn, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var e;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (e = this._initialOptions) != null && e.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = r(this, le), s = p(this, le, g(this, yt, yu).call(this).trimEnd());
    if (e === s)
      return;
    const i = (n) => {
      if (p(this, le, n), !n) {
        this.remove();
        return;
      }
      g(this, yt, hh).call(this), this._uiManager.rebuild(this), g(this, yt, ah).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), g(this, yt, ah).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    ot._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this.width && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", r(this, po)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), J._l10nPromise.get("pdfjs-free-text-default-content").then((n) => {
      var a;
      return (a = this.editorDiv) == null ? void 0 : a.setAttribute("default-content", n);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${r(this, ce)}px * var(--scale-factor))`, i.color = r(this, Oe), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), vh(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [n, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [h, l] = this.getInitialTranslation();
        [h, l] = this.pageTranslationToScreen(h, l);
        const [c, u] = this.pageDimensions, [f, m] = this.pageTranslation;
        let A, y;
        switch (this.rotation) {
          case 0:
            A = e + (o[0] - f) / c, y = s + this.height - (o[1] - m) / u;
            break;
          case 90:
            A = e + (o[0] - f) / c, y = s - (o[1] - m) / u, [h, l] = [l, -h];
            break;
          case 180:
            A = e - this.width + (o[0] - f) / c, y = s - (o[1] - m) / u, [h, l] = [-h, -l];
            break;
          case 270:
            A = e + (o[0] - f - this.height * u) / c, y = s + (o[1] - m - this.width * c) / u, [h, l] = [-l, h];
            break;
        }
        this.setAt(A * n, y * a, h, l);
      } else
        this.setAt(e * n, s * a, this.width * n, this.height * a);
      g(this, yt, hh).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var A, y, w;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const n = g(A = ot, $s, Xl).call(A, s.getData("text") || "").replaceAll(Uo, `
`);
    if (!n)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!n.includes(`
`)) {
      o.insertNode(document.createTextNode(n)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: h,
      startOffset: l
    } = o, c = [], u = [];
    if (h.nodeType === Node.TEXT_NODE) {
      const v = h.parentElement;
      if (u.push(h.nodeValue.slice(l).replaceAll(Uo, "")), v !== this.editorDiv) {
        let _ = c;
        for (const E of this.editorDiv.childNodes) {
          if (E === v) {
            _ = u;
            continue;
          }
          _.push(g(y = ot, $s, oh).call(y, E));
        }
      }
      c.push(h.nodeValue.slice(0, l).replaceAll(Uo, ""));
    } else if (h === this.editorDiv) {
      let v = c, _ = 0;
      for (const E of this.editorDiv.childNodes)
        _++ === l && (v = u), v.push(g(w = ot, $s, oh).call(w, E));
    }
    p(this, le, `${c.join(`
`)}${n}${u.join(`
`)}`), g(this, yt, hh).call(this);
    const f = new Range();
    let m = c.reduce((v, _) => v + _.length, 0);
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const _ = v.nodeValue.length;
        if (m <= _) {
          f.setStart(v, m), f.setEnd(v, m);
          break;
        }
        m -= _;
      }
    a.removeAllRanges(), a.addRange(f);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let n = null;
    if (e instanceof uu) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: h,
            fontColor: l
          },
          rect: c,
          rotation: u,
          id: f,
          popupRef: m
        },
        textContent: A,
        textPosition: y,
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = e;
      if (!A || A.length === 0)
        return null;
      n = e = {
        annotationType: U.FREETEXT,
        color: Array.from(l),
        fontSize: h,
        value: A.join(`
`),
        position: y,
        pageIndex: w - 1,
        rect: c.slice(0),
        rotation: u,
        id: f,
        deleted: !1,
        popupRef: m
      };
    }
    const a = await super.deserialize(e, s, i);
    return p(a, ce, e.fontSize), p(a, Oe, L.makeHexColor(...e.color)), p(a, le, g(o = ot, $s, Xl).call(o, e.value)), a.annotationElementId = e.id || null, a._initialData = n, a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = ot._internalPadding * this.parentScale, i = this.getRect(s, s), n = J._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : r(this, Oe)), a = {
      annotationType: U.FREETEXT,
      color: n,
      fontSize: r(this, ce),
      value: g(this, yt, vu).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !g(this, yt, wu).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${r(this, ce)}px * var(--scale-factor))`, i.color = r(this, Oe), s.replaceChildren();
    for (const a of r(this, le).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const n = ot._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(n, n),
      popupContent: r(this, le)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
Oe = new WeakMap(), le = new WeakMap(), po = new WeakMap(), bn = new WeakMap(), ce = new WeakMap(), yt = new WeakSet(), bu = function(e) {
  const s = (n) => {
    this.editorDiv.style.fontSize = `calc(${n}px * var(--scale-factor))`, this.translate(0, -(n - r(this, ce)) * this.parentScale), p(this, ce, n), g(this, yt, ah).call(this);
  }, i = r(this, ce);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Au = function(e) {
  const s = (n) => {
    p(this, Oe, this.editorDiv.style.color = n);
  }, i = r(this, Oe);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, yu = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const n of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && n.nodeName === "BR" || (e.push(g(i = ot, $s, oh).call(i, n)), s = n);
  return e.join(`
`);
}, ah = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: n,
      div: a
    } = this, o = a.style.display, h = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", n.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", h);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, $s = new WeakSet(), oh = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Uo, "");
}, hh = function() {
  if (this.editorDiv.replaceChildren(), !!r(this, le))
    for (const e of r(this, le).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, vu = function() {
  return r(this, le).replaceAll(" ", " ");
}, Xl = function(e) {
  return e.replaceAll(" ", " ");
}, wu = function(e) {
  const {
    value: s,
    fontSize: i,
    color: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, h) => o !== n[h]) || e.pageIndex !== a;
}, b(ot, $s), O(ot, "_freeTextDefaultContent", ""), O(ot, "_internalPadding", 0), O(ot, "_defaultColor", null), O(ot, "_defaultFontSize", 10), O(ot, "_type", "freetext"), O(ot, "_editorType", U.FREETEXT);
let ql = ot;
var go, fi, He, Qt, _u, lh, Eu, Su, Yl;
class sd {
  constructor(t, e = 0, s = 0, i = !0) {
    b(this, Qt);
    b(this, go);
    b(this, fi, []);
    b(this, He, []);
    let n = 1 / 0, a = -1 / 0, o = 1 / 0, h = -1 / 0;
    const c = 10 ** -4;
    for (const {
      x: v,
      y: _,
      width: E,
      height: S
    } of t) {
      const x = Math.floor((v - e) / c) * c, C = Math.ceil((v + E + e) / c) * c, T = Math.floor((_ - e) / c) * c, k = Math.ceil((_ + S + e) / c) * c, F = [x, T, k, !0], $ = [C, T, k, !1];
      r(this, fi).push(F, $), n = Math.min(n, x), a = Math.max(a, C), o = Math.min(o, T), h = Math.max(h, k);
    }
    const u = a - n + 2 * s, f = h - o + 2 * s, m = n - s, A = o - s, y = r(this, fi).at(i ? -1 : -2), w = [y[0], y[2]];
    for (const v of r(this, fi)) {
      const [_, E, S] = v;
      v[0] = (_ - m) / u, v[1] = (E - A) / f, v[2] = (S - A) / f;
    }
    p(this, go, {
      x: m,
      y: A,
      width: u,
      height: f,
      lastPoint: w
    });
  }
  getOutlines() {
    r(this, fi).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of r(this, fi))
      e[3] ? (t.push(...g(this, Qt, Yl).call(this, e)), g(this, Qt, Eu).call(this, e)) : (g(this, Qt, Su).call(this, e), t.push(...g(this, Qt, Yl).call(this, e)));
    return g(this, Qt, _u).call(this, t);
  }
}
go = new WeakMap(), fi = new WeakMap(), He = new WeakMap(), Qt = new WeakSet(), _u = function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, h, l] = a;
    e.push([o, h, a], [o, l, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const h = e[a][2], l = e[a + 1][2];
    h.push(l), l.push(h), s.add(h), s.add(l);
  }
  const i = [];
  let n;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, h, l, c, u] = a;
    s.delete(a);
    let f = o, m = h;
    for (n = [o, l], i.push(n); ; ) {
      let A;
      if (s.has(c))
        A = c;
      else if (s.has(u))
        A = u;
      else
        break;
      s.delete(A), [o, h, l, c, u] = A, f !== o && (n.push(f, m, o, m === h ? h : l), f = o), m = m === h ? l : h;
    }
    n.push(f, m);
  }
  return new ng(i, r(this, go));
}, lh = function(t) {
  const e = r(this, He);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const n = s + i >> 1, a = e[n][0];
    if (a === t)
      return n;
    a < t ? s = n + 1 : i = n - 1;
  }
  return i + 1;
}, Eu = function([, t, e]) {
  const s = g(this, Qt, lh).call(this, t);
  r(this, He).splice(s, 0, [t, e]);
}, Su = function([, t, e]) {
  const s = g(this, Qt, lh).call(this, t);
  for (let i = s; i < r(this, He).length; i++) {
    const [n, a] = r(this, He)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, He).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [n, a] = r(this, He)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, He).splice(i, 1);
      return;
    }
  }
}, Yl = function(t) {
  const [e, s, i] = t, n = [[e, s, i]], a = g(this, Qt, lh).call(this, i);
  for (let o = 0; o < a; o++) {
    const [h, l] = r(this, He)[o];
    for (let c = 0, u = n.length; c < u; c++) {
      const [, f, m] = n[c];
      if (!(l <= f || m <= h)) {
        if (f >= h) {
          if (m > l)
            n[c][1] = l;
          else {
            if (u === 1)
              return [];
            n.splice(c, 1), c--, u--;
          }
          continue;
        }
        n[c][2] = h, m > l && n.push([e, l, m]);
      }
    }
  }
  return n;
};
class Cu {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof Ql;
  }
}
var mo, Mr;
class ng extends Cu {
  constructor(e, s) {
    super();
    b(this, mo);
    b(this, Mr);
    p(this, Mr, e), p(this, mo, s);
  }
  toSVGPath() {
    const e = [];
    for (const s of r(this, Mr)) {
      let [i, n] = s;
      e.push(`M${i} ${n}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], h = s[a + 1];
        o === i ? (e.push(`V${h}`), n = h) : h === n && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, n], a) {
    const o = [], h = i - e, l = n - s;
    for (const c of r(this, Mr)) {
      const u = new Array(c.length);
      for (let f = 0; f < c.length; f += 2)
        u[f] = e + c[f] * h, u[f + 1] = n - c[f + 1] * l;
      o.push(u);
    }
    return o;
  }
  get box() {
    return r(this, mo);
  }
}
mo = new WeakMap(), Mr = new WeakMap();
var es, ks, kr, Pr, ss, q, An, yn, bo, Ao, Lr, Ir, pi, yo, Bh, zh, vo, Kl;
const ms = class ms {
  constructor({
    x: t,
    y: e
  }, s, i, n, a, o = 0) {
    b(this, vo);
    b(this, es);
    b(this, ks, []);
    b(this, kr);
    b(this, Pr);
    b(this, ss, []);
    b(this, q, new Float64Array(18));
    b(this, An);
    b(this, yn);
    b(this, bo);
    b(this, Ao);
    b(this, Lr);
    b(this, Ir);
    b(this, pi, []);
    p(this, es, s), p(this, Ir, n * i), p(this, Pr, a), r(this, q).set([NaN, NaN, NaN, NaN, t, e], 6), p(this, kr, o), p(this, Ao, r(ms, yo) * i), p(this, bo, r(ms, zh) * i), p(this, Lr, i), r(this, pi).push(t, e);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(r(this, q)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var F;
    p(this, An, t), p(this, yn, e);
    const [s, i, n, a] = r(this, es);
    let [o, h, l, c] = r(this, q).subarray(8, 12);
    const u = t - l, f = e - c, m = Math.hypot(u, f);
    if (m < r(this, bo))
      return !1;
    const A = m - r(this, Ao), y = A / m, w = y * u, v = y * f;
    let _ = o, E = h;
    o = l, h = c, l += w, c += v, (F = r(this, pi)) == null || F.push(t, e);
    const S = -v / A, x = w / A, C = S * r(this, Ir), T = x * r(this, Ir);
    return r(this, q).set(r(this, q).subarray(2, 8), 0), r(this, q).set([l + C, c + T], 4), r(this, q).set(r(this, q).subarray(14, 18), 12), r(this, q).set([l - C, c - T], 16), isNaN(r(this, q)[6]) ? (r(this, ss).length === 0 && (r(this, q).set([o + C, h + T], 2), r(this, ss).push(NaN, NaN, NaN, NaN, (o + C - s) / n, (h + T - i) / a), r(this, q).set([o - C, h - T], 14), r(this, ks).push(NaN, NaN, NaN, NaN, (o - C - s) / n, (h - T - i) / a)), r(this, q).set([_, E, o, h, l, c], 6), !this.isEmpty()) : (r(this, q).set([_, E, o, h, l, c], 6), Math.abs(Math.atan2(E - h, _ - o) - Math.atan2(v, w)) < Math.PI / 2 ? ([o, h, l, c] = r(this, q).subarray(2, 6), r(this, ss).push(NaN, NaN, NaN, NaN, ((o + l) / 2 - s) / n, ((h + c) / 2 - i) / a), [o, h, _, E] = r(this, q).subarray(14, 18), r(this, ks).push(NaN, NaN, NaN, NaN, ((_ + o) / 2 - s) / n, ((E + h) / 2 - i) / a), !0) : ([_, E, o, h, l, c] = r(this, q).subarray(0, 6), r(this, ss).push(((_ + 5 * o) / 6 - s) / n, ((E + 5 * h) / 6 - i) / a, ((5 * o + l) / 6 - s) / n, ((5 * h + c) / 6 - i) / a, ((o + l) / 2 - s) / n, ((h + c) / 2 - i) / a), [l, c, o, h, _, E] = r(this, q).subarray(12, 18), r(this, ks).push(((_ + 5 * o) / 6 - s) / n, ((E + 5 * h) / 6 - i) / a, ((5 * o + l) / 6 - s) / n, ((5 * h + c) / 6 - i) / a, ((o + l) / 2 - s) / n, ((h + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = r(this, ss), e = r(this, ks), s = r(this, q).subarray(4, 6), i = r(this, q).subarray(16, 18), [n, a, o, h] = r(this, es), [l, c, u, f] = g(this, vo, Kl).call(this);
    if (isNaN(r(this, q)[6]) && !this.isEmpty())
      return `M${(r(this, q)[2] - n) / o} ${(r(this, q)[3] - a) / h} L${(r(this, q)[4] - n) / o} ${(r(this, q)[5] - a) / h} L${l} ${c} L${u} ${f} L${(r(this, q)[16] - n) / o} ${(r(this, q)[17] - a) / h} L${(r(this, q)[14] - n) / o} ${(r(this, q)[15] - a) / h} Z`;
    const m = [];
    m.push(`M${t[4]} ${t[5]}`);
    for (let A = 6; A < t.length; A += 6)
      isNaN(t[A]) ? m.push(`L${t[A + 4]} ${t[A + 5]}`) : m.push(`C${t[A]} ${t[A + 1]} ${t[A + 2]} ${t[A + 3]} ${t[A + 4]} ${t[A + 5]}`);
    m.push(`L${(s[0] - n) / o} ${(s[1] - a) / h} L${l} ${c} L${u} ${f} L${(i[0] - n) / o} ${(i[1] - a) / h}`);
    for (let A = e.length - 6; A >= 6; A -= 6)
      isNaN(e[A]) ? m.push(`L${e[A + 4]} ${e[A + 5]}`) : m.push(`C${e[A]} ${e[A + 1]} ${e[A + 2]} ${e[A + 3]} ${e[A + 4]} ${e[A + 5]}`);
    return m.push(`L${e[4]} ${e[5]} Z`), m.join(" ");
  }
  getOutlines() {
    var v;
    const t = r(this, ss), e = r(this, ks), s = r(this, q), i = s.subarray(4, 6), n = s.subarray(16, 18), [a, o, h, l] = r(this, es), c = new Float64Array((((v = r(this, pi)) == null ? void 0 : v.length) ?? 0) + 2);
    for (let _ = 0, E = c.length - 2; _ < E; _ += 2)
      c[_] = (r(this, pi)[_] - a) / h, c[_ + 1] = (r(this, pi)[_ + 1] - o) / l;
    c[c.length - 2] = (r(this, An) - a) / h, c[c.length - 1] = (r(this, yn) - o) / l;
    const [u, f, m, A] = g(this, vo, Kl).call(this);
    if (isNaN(s[6]) && !this.isEmpty()) {
      const _ = new Float64Array(36);
      return _.set([NaN, NaN, NaN, NaN, (s[2] - a) / h, (s[3] - o) / l, NaN, NaN, NaN, NaN, (s[4] - a) / h, (s[5] - o) / l, NaN, NaN, NaN, NaN, u, f, NaN, NaN, NaN, NaN, m, A, NaN, NaN, NaN, NaN, (s[16] - a) / h, (s[17] - o) / l, NaN, NaN, NaN, NaN, (s[14] - a) / h, (s[15] - o) / l], 0), new Ql(_, c, r(this, es), r(this, Lr), r(this, kr), r(this, Pr));
    }
    const y = new Float64Array(r(this, ss).length + 24 + r(this, ks).length);
    let w = t.length;
    for (let _ = 0; _ < w; _ += 2) {
      if (isNaN(t[_])) {
        y[_] = y[_ + 1] = NaN;
        continue;
      }
      y[_] = t[_], y[_ + 1] = t[_ + 1];
    }
    y.set([NaN, NaN, NaN, NaN, (i[0] - a) / h, (i[1] - o) / l, NaN, NaN, NaN, NaN, u, f, NaN, NaN, NaN, NaN, m, A, NaN, NaN, NaN, NaN, (n[0] - a) / h, (n[1] - o) / l], w), w += 24;
    for (let _ = e.length - 6; _ >= 6; _ -= 6)
      for (let E = 0; E < 6; E += 2) {
        if (isNaN(e[_ + E])) {
          y[w] = y[w + 1] = NaN, w += 2;
          continue;
        }
        y[w] = e[_ + E], y[w + 1] = e[_ + E + 1], w += 2;
      }
    return y.set([NaN, NaN, NaN, NaN, e[4], e[5]], w), new Ql(y, c, r(this, es), r(this, Lr), r(this, kr), r(this, Pr));
  }
};
es = new WeakMap(), ks = new WeakMap(), kr = new WeakMap(), Pr = new WeakMap(), ss = new WeakMap(), q = new WeakMap(), An = new WeakMap(), yn = new WeakMap(), bo = new WeakMap(), Ao = new WeakMap(), Lr = new WeakMap(), Ir = new WeakMap(), pi = new WeakMap(), yo = new WeakMap(), Bh = new WeakMap(), zh = new WeakMap(), vo = new WeakSet(), Kl = function() {
  const t = r(this, q).subarray(4, 6), e = r(this, q).subarray(16, 18), [s, i, n, a] = r(this, es);
  return [(r(this, An) + (t[0] - e[0]) / 2 - s) / n, (r(this, yn) + (t[1] - e[1]) / 2 - i) / a, (r(this, An) + (e[0] - t[0]) / 2 - s) / n, (r(this, yn) + (e[1] - t[1]) / 2 - i) / a];
}, b(ms, yo, 8), b(ms, Bh, 2), b(ms, zh, r(ms, yo) + r(ms, Bh));
let ma = ms;
var Fr, vn, Ps, wo, de, _o, gt, ne, ra, aa, xu;
class Ql extends Cu {
  constructor(e, s, i, n, a, o) {
    super();
    b(this, ne);
    b(this, Fr);
    b(this, vn, null);
    b(this, Ps);
    b(this, wo);
    b(this, de);
    b(this, _o);
    b(this, gt);
    p(this, gt, e), p(this, de, s), p(this, Fr, i), p(this, _o, n), p(this, Ps, a), p(this, wo, o), g(this, ne, xu).call(this, o);
    const {
      x: h,
      y: l,
      width: c,
      height: u
    } = r(this, vn);
    for (let f = 0, m = e.length; f < m; f += 2)
      e[f] = (e[f] - h) / c, e[f + 1] = (e[f + 1] - l) / u;
    for (let f = 0, m = s.length; f < m; f += 2)
      s[f] = (s[f] - h) / c, s[f + 1] = (s[f + 1] - l) / u;
  }
  toSVGPath() {
    const e = [`M${r(this, gt)[4]} ${r(this, gt)[5]}`];
    for (let s = 6, i = r(this, gt).length; s < i; s += 6) {
      if (isNaN(r(this, gt)[s])) {
        e.push(`L${r(this, gt)[s + 4]} ${r(this, gt)[s + 5]}`);
        continue;
      }
      e.push(`C${r(this, gt)[s]} ${r(this, gt)[s + 1]} ${r(this, gt)[s + 2]} ${r(this, gt)[s + 3]} ${r(this, gt)[s + 4]} ${r(this, gt)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, n], a) {
    const o = i - e, h = n - s;
    let l, c;
    switch (a) {
      case 0:
        l = g(this, ne, ra).call(this, r(this, gt), e, n, o, -h), c = g(this, ne, ra).call(this, r(this, de), e, n, o, -h);
        break;
      case 90:
        l = g(this, ne, aa).call(this, r(this, gt), e, s, o, h), c = g(this, ne, aa).call(this, r(this, de), e, s, o, h);
        break;
      case 180:
        l = g(this, ne, ra).call(this, r(this, gt), i, s, -o, h), c = g(this, ne, ra).call(this, r(this, de), i, s, -o, h);
        break;
      case 270:
        l = g(this, ne, aa).call(this, r(this, gt), i, n, -o, -h), c = g(this, ne, aa).call(this, r(this, de), i, n, -o, -h);
        break;
    }
    return {
      outline: Array.from(l),
      points: [Array.from(c)]
    };
  }
  get box() {
    return r(this, vn);
  }
  getNewOutline(e, s) {
    const {
      x: i,
      y: n,
      width: a,
      height: o
    } = r(this, vn), [h, l, c, u] = r(this, Fr), f = a * c, m = o * u, A = i * c + h, y = n * u + l, w = new ma({
      x: r(this, de)[0] * f + A,
      y: r(this, de)[1] * m + y
    }, r(this, Fr), r(this, _o), e, r(this, wo), s ?? r(this, Ps));
    for (let v = 2; v < r(this, de).length; v += 2)
      w.add({
        x: r(this, de)[v] * f + A,
        y: r(this, de)[v + 1] * m + y
      });
    return w.getOutlines();
  }
}
Fr = new WeakMap(), vn = new WeakMap(), Ps = new WeakMap(), wo = new WeakMap(), de = new WeakMap(), _o = new WeakMap(), gt = new WeakMap(), ne = new WeakSet(), ra = function(e, s, i, n, a) {
  const o = new Float64Array(e.length);
  for (let h = 0, l = e.length; h < l; h += 2)
    o[h] = s + e[h] * n, o[h + 1] = i + e[h + 1] * a;
  return o;
}, aa = function(e, s, i, n, a) {
  const o = new Float64Array(e.length);
  for (let h = 0, l = e.length; h < l; h += 2)
    o[h] = s + e[h + 1] * n, o[h + 1] = i + e[h] * a;
  return o;
}, xu = function(e) {
  const s = r(this, gt);
  let i = s[4], n = s[5], a = i, o = n, h = i, l = n, c = i, u = n;
  const f = e ? Math.max : Math.min;
  for (let v = 6, _ = s.length; v < _; v += 6) {
    if (isNaN(s[v]))
      a = Math.min(a, s[v + 4]), o = Math.min(o, s[v + 5]), h = Math.max(h, s[v + 4]), l = Math.max(l, s[v + 5]), u < s[v + 5] ? (c = s[v + 4], u = s[v + 5]) : u === s[v + 5] && (c = f(c, s[v + 4]));
    else {
      const E = L.bezierBoundingBox(i, n, ...s.slice(v, v + 6));
      a = Math.min(a, E[0]), o = Math.min(o, E[1]), h = Math.max(h, E[2]), l = Math.max(l, E[3]), u < E[3] ? (c = E[2], u = E[3]) : u === E[3] && (c = f(c, E[2]));
    }
    i = s[v + 4], n = s[v + 5];
  }
  const m = a - r(this, Ps), A = o - r(this, Ps), y = h - a + 2 * r(this, Ps), w = l - o + 2 * r(this, Ps);
  p(this, vn, {
    x: m,
    y: A,
    width: y,
    height: w,
    lastPoint: [c, u]
  });
};
var Eo, So, Be, wn, Dr, Ct, Co, Nr, xo, To, ze, Or, Ro, rt, Jl, Zl, Tu, Mi, Ru, Xs;
const Zt = class Zt {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    b(this, rt);
    b(this, Eo, g(this, rt, Tu).bind(this));
    b(this, So, g(this, rt, Ru).bind(this));
    b(this, Be, null);
    b(this, wn, null);
    b(this, Dr);
    b(this, Ct, null);
    b(this, Co, !1);
    b(this, Nr, !1);
    b(this, xo, null);
    b(this, To);
    b(this, ze, null);
    b(this, Or);
    var s;
    t ? (p(this, Nr, !1), p(this, Or, H.HIGHLIGHT_COLOR), p(this, xo, t)) : (p(this, Nr, !0), p(this, Or, H.HIGHLIGHT_DEFAULT_COLOR)), p(this, ze, (t == null ? void 0 : t._uiManager) || e), p(this, To, r(this, ze)._eventBus), p(this, Dr, (t == null ? void 0 : t.color) || ((s = r(this, ze)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), r(Zt, Ro) || p(Zt, Ro, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return X(this, "_keyboardManager", new No([[["Escape", "mac+Escape"], Zt.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], Zt.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], Zt.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], Zt.prototype._moveToPrevious], [["Home", "mac+Home"], Zt.prototype._moveToBeginning], [["End", "mac+End"], Zt.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = p(this, Be, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = r(this, ze)._signal;
    t.addEventListener("click", g(this, rt, Mi).bind(this), {
      signal: e
    }), t.addEventListener("keydown", r(this, Eo), {
      signal: e
    });
    const s = p(this, wn, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = r(this, Dr), t.append(s), t;
  }
  renderMainDropdown() {
    const t = p(this, Ct, g(this, rt, Jl).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === r(this, Be)) {
      g(this, rt, Mi).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && g(this, rt, Zl).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!r(this, rt, Xs)) {
      g(this, rt, Mi).call(this, t);
      return;
    }
    if (t.target === r(this, Be)) {
      (e = r(this, Ct).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = r(this, Ct)) == null ? void 0 : e.firstChild) || t.target === r(this, Be)) {
      r(this, rt, Xs) && this._hideDropdownFromKeyboard();
      return;
    }
    r(this, rt, Xs) || g(this, rt, Mi).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!r(this, rt, Xs)) {
      g(this, rt, Mi).call(this, t);
      return;
    }
    (e = r(this, Ct).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!r(this, rt, Xs)) {
      g(this, rt, Mi).call(this, t);
      return;
    }
    (e = r(this, Ct).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t;
    (t = r(this, Ct)) == null || t.classList.add("hidden"), window.removeEventListener("pointerdown", r(this, So));
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!r(this, Nr)) {
      if (!r(this, rt, Xs)) {
        (t = r(this, xo)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), r(this, Be).focus({
        preventScroll: !0,
        focusVisible: r(this, Co)
      });
    }
  }
  updateColor(t) {
    if (r(this, wn) && (r(this, wn).style.backgroundColor = t), !r(this, Ct))
      return;
    const e = r(this, ze).highlightColors.values();
    for (const s of r(this, Ct).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = r(this, Be)) == null || t.remove(), p(this, Be, null), p(this, wn, null), (e = r(this, Ct)) == null || e.remove(), p(this, Ct, null);
  }
};
Eo = new WeakMap(), So = new WeakMap(), Be = new WeakMap(), wn = new WeakMap(), Dr = new WeakMap(), Ct = new WeakMap(), Co = new WeakMap(), Nr = new WeakMap(), xo = new WeakMap(), To = new WeakMap(), ze = new WeakMap(), Or = new WeakMap(), Ro = new WeakMap(), rt = new WeakSet(), Jl = function() {
  const t = document.createElement("div"), e = r(this, ze)._signal;
  t.addEventListener("contextmenu", Te, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of r(this, ze).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", r(Zt, Ro)[s]);
    const a = document.createElement("span");
    n.append(a), a.className = "swatch", a.style.backgroundColor = i, n.setAttribute("aria-selected", i === r(this, Dr)), n.addEventListener("click", g(this, rt, Zl).bind(this, i), {
      signal: e
    }), t.append(n);
  }
  return t.addEventListener("keydown", r(this, Eo), {
    signal: e
  }), t;
}, Zl = function(t, e) {
  e.stopPropagation(), r(this, To).dispatch("switchannotationeditorparams", {
    source: this,
    type: r(this, Or),
    value: t
  });
}, Tu = function(t) {
  Zt._keyboardManager.exec(this, t);
}, Mi = function(t) {
  if (r(this, rt, Xs)) {
    this.hideDropdown();
    return;
  }
  if (p(this, Co, t.detail === 0), window.addEventListener("pointerdown", r(this, So), {
    signal: r(this, ze)._signal
  }), r(this, Ct)) {
    r(this, Ct).classList.remove("hidden");
    return;
  }
  const e = p(this, Ct, g(this, rt, Jl).call(this));
  r(this, Be).append(e);
}, Ru = function(t) {
  var e;
  (e = r(this, Ct)) != null && e.contains(t.target) || this.hideDropdown();
}, Xs = function() {
  return r(this, Ct) && !r(this, Ct).classList.contains("hidden");
}, b(Zt, Ro, null);
let _h = Zt;
var Hr, Mo, Ls, _n, Br, _e, ko, Po, En, je, Gt, se, zr, Is, xt, jr, Ee, Lo, j, tc, ch, Mu, ku, Pu, ec, ki, xe, Vn, Lu, dh, oa, Iu, Fu, Du, Nu, Ou;
const Q = class Q extends J {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    b(this, j);
    b(this, Hr, null);
    b(this, Mo, 0);
    b(this, Ls);
    b(this, _n, null);
    b(this, Br, null);
    b(this, _e, null);
    b(this, ko, null);
    b(this, Po, 0);
    b(this, En, null);
    b(this, je, null);
    b(this, Gt, null);
    b(this, se, !1);
    b(this, zr, null);
    b(this, Is);
    b(this, xt, null);
    b(this, jr, "");
    b(this, Ee);
    b(this, Lo, "");
    this.color = e.color || Q._defaultColor, p(this, Ee, e.thickness || Q._defaultThickness), p(this, Is, e.opacity || Q._defaultOpacity), p(this, Ls, e.boxes || null), p(this, Lo, e.methodOfCreation || ""), p(this, jr, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (p(this, se, !0), g(this, j, ch).call(this, e), g(this, j, ki).call(this)) : r(this, Ls) && (p(this, Hr, e.anchorNode), p(this, Mo, e.anchorOffset), p(this, ko, e.focusNode), p(this, Po, e.focusOffset), g(this, j, tc).call(this), g(this, j, ki).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = Q.prototype;
    return X(this, "_keyboardManager", new No([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: r(this, se) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: r(this, Ee),
      methodOfCreation: r(this, Lo)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    var i;
    J.initialize(e, s), Q._defaultColor || (Q._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case H.HIGHLIGHT_DEFAULT_COLOR:
        Q._defaultColor = s;
        break;
      case H.HIGHLIGHT_THICKNESS:
        Q._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return r(this, zr);
  }
  updateParams(e, s) {
    switch (e) {
      case H.HIGHLIGHT_COLOR:
        g(this, j, Mu).call(this, s);
        break;
      case H.HIGHLIGHT_THICKNESS:
        g(this, j, ku).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[H.HIGHLIGHT_DEFAULT_COLOR, Q._defaultColor], [H.HIGHLIGHT_THICKNESS, Q._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[H.HIGHLIGHT_COLOR, this.color || Q._defaultColor], [H.HIGHLIGHT_THICKNESS, r(this, Ee) || Q._defaultThickness], [H.HIGHLIGHT_FREE, r(this, se)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (p(this, Br, new _h({
      editor: this
    })), e.addColorPicker(r(this, Br))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(g(this, j, oa).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, g(this, j, oa).call(this));
  }
  onceAdded() {
    this.annotationElementId || this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    g(this, j, ec).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (g(this, j, ki).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? g(this, j, ec).call(this) : e && (g(this, j, ki).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var n, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    r(this, se) ? (e = (e - this.rotation + 360) % 360, i = g(n = Q, xe, Vn).call(n, r(this, je).box, e)) : i = g(a = Q, xe, Vn).call(a, this, e), s.rotate(r(this, Gt), e), s.rotate(r(this, xt), e), s.updateBox(r(this, Gt), i), s.updateBox(r(this, xt), g(o = Q, xe, Vn).call(o, r(this, _e).box, e));
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    r(this, jr) && (e.setAttribute("aria-label", r(this, jr)), e.setAttribute("role", "mark")), r(this, se) ? e.classList.add("free") : this.div.addEventListener("keydown", g(this, j, Lu).bind(this), {
      signal: this._uiManager._signal
    });
    const s = p(this, En, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = r(this, _n);
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), vh(this, r(this, En), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    this.parent.drawLayer.addClass(r(this, xt), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(r(this, xt), "hovered");
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        g(this, j, dh).call(this, !0);
        break;
      case 1:
      case 3:
        g(this, j, dh).call(this, !1);
        break;
    }
  }
  select() {
    var e, s;
    super.select(), r(this, xt) && ((e = this.parent) == null || e.drawLayer.removeClass(r(this, xt), "hovered"), (s = this.parent) == null || s.drawLayer.addClass(r(this, xt), "selected"));
  }
  unselect() {
    var e;
    super.unselect(), r(this, xt) && ((e = this.parent) == null || e.drawLayer.removeClass(r(this, xt), "selected"), r(this, se) || g(this, j, dh).call(this, !1));
  }
  get _mustFixPosition() {
    return !r(this, se);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.show(r(this, Gt), e), this.parent.drawLayer.show(r(this, xt), e));
  }
  static startHighlighting(e, s, {
    target: i,
    x: n,
    y: a
  }) {
    const {
      x: o,
      y: h,
      width: l,
      height: c
    } = i.getBoundingClientRect(), u = new AbortController(), f = e.combinedSignal(u), m = (y) => {
      y.preventDefault(), y.stopPropagation();
    }, A = (y) => {
      u.abort(), g(this, xe, Nu).call(this, e, y);
    };
    window.addEventListener("blur", A, {
      signal: f
    }), window.addEventListener("pointerup", A, {
      signal: f
    }), window.addEventListener("pointerdown", m, {
      capture: !0,
      passive: !1,
      signal: f
    }), window.addEventListener("contextmenu", Te, {
      signal: f
    }), i.addEventListener("pointermove", g(this, xe, Du).bind(this, e), {
      signal: f
    }), this._freeHighlight = new ma({
      x: n,
      y: a
    }, [o, h, l, c], e.scale, this._defaultThickness / 2, s, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static async deserialize(e, s, i) {
    var y, w, v, _;
    let n = null;
    if (e instanceof pu) {
      const {
        data: {
          quadPoints: E,
          rect: S,
          rotation: x,
          id: C,
          color: T,
          opacity: k,
          popupRef: F
        },
        parent: {
          page: {
            pageNumber: $
          }
        }
      } = e;
      n = e = {
        annotationType: U.HIGHLIGHT,
        color: Array.from(T),
        opacity: k,
        quadPoints: E,
        boxes: null,
        pageIndex: $ - 1,
        rect: S.slice(0),
        rotation: x,
        id: C,
        deleted: !1,
        popupRef: F
      };
    } else if (e instanceof Lc) {
      const {
        data: {
          inkLists: E,
          rect: S,
          rotation: x,
          id: C,
          color: T,
          borderStyle: {
            rawWidth: k
          },
          popupRef: F
        },
        parent: {
          page: {
            pageNumber: $
          }
        }
      } = e;
      n = e = {
        annotationType: U.HIGHLIGHT,
        color: Array.from(T),
        thickness: k,
        inkLists: E,
        boxes: null,
        pageIndex: $ - 1,
        rect: S.slice(0),
        rotation: x,
        id: C,
        deleted: !1,
        popupRef: F
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: h,
      opacity: l
    } = e, c = await super.deserialize(e, s, i);
    c.color = L.makeHexColor(...a), p(c, Is, l || 1), h && p(c, Ee, e.thickness), c.annotationElementId = e.id || null, c._initialData = n;
    const [u, f] = c.pageDimensions, [m, A] = c.pageTranslation;
    if (o) {
      const E = p(c, Ls, []);
      for (let S = 0; S < o.length; S += 8)
        E.push({
          x: (o[S] - m) / u,
          y: 1 - (o[S + 1] - A) / f,
          width: (o[S + 2] - o[S]) / u,
          height: (o[S + 1] - o[S + 5]) / f
        });
      g(y = c, j, tc).call(y), g(w = c, j, ki).call(w), c.rotate(c.rotation);
    } else if (h) {
      p(c, se, !0);
      const E = h[0], S = {
        x: E[0] - m,
        y: f - (E[1] - A)
      }, x = new ma(S, [0, 0, u, f], 1, r(c, Ee) / 2, !0, 1e-3);
      for (let k = 0, F = E.length; k < F; k += 2)
        S.x = E[k] - m, S.y = f - (E[k + 1] - A), x.add(S);
      const {
        id: C,
        clipPathId: T
      } = s.drawLayer.highlight(x, c.color, c._defaultOpacity, !0);
      g(v = c, j, ch).call(v, {
        highlightOutlines: x.getOutlines(),
        highlightId: C,
        clipPathId: T
      }), g(_ = c, j, ki).call(_);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = J._colorManager.convert(this.color), n = {
      annotationType: U.HIGHLIGHT,
      color: i,
      opacity: r(this, Is),
      thickness: r(this, Ee),
      quadPoints: g(this, j, Iu).call(this),
      outlines: g(this, j, Fu).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: g(this, j, oa).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !g(this, j, Ou).call(this, n) ? null : (n.id = this.annotationElementId, n);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Hr = new WeakMap(), Mo = new WeakMap(), Ls = new WeakMap(), _n = new WeakMap(), Br = new WeakMap(), _e = new WeakMap(), ko = new WeakMap(), Po = new WeakMap(), En = new WeakMap(), je = new WeakMap(), Gt = new WeakMap(), se = new WeakMap(), zr = new WeakMap(), Is = new WeakMap(), xt = new WeakMap(), jr = new WeakMap(), Ee = new WeakMap(), Lo = new WeakMap(), j = new WeakSet(), tc = function() {
  const e = new sd(r(this, Ls), 1e-3);
  p(this, je, e.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = r(this, je).box;
  const s = new sd(r(this, Ls), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  p(this, _e, s.getOutlines());
  const {
    lastPoint: i
  } = r(this, _e).box;
  p(this, zr, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, ch = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var u, f;
  if (p(this, je, e), p(this, _e, e.getNewOutline(r(this, Ee) / 2 + 1.5, 25e-4)), s >= 0)
    p(this, Gt, s), p(this, _n, i), this.parent.drawLayer.finalizeLine(s, e), p(this, xt, this.parent.drawLayer.highlightOutline(r(this, _e)));
  else if (this.parent) {
    const m = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(r(this, Gt), e), this.parent.drawLayer.updateBox(r(this, Gt), g(u = Q, xe, Vn).call(u, r(this, je).box, (m - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(r(this, xt), r(this, _e)), this.parent.drawLayer.updateBox(r(this, xt), g(f = Q, xe, Vn).call(f, r(this, _e).box, m));
  }
  const {
    x: a,
    y: o,
    width: h,
    height: l
  } = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = h, this.height = l;
      break;
    case 90: {
      const [m, A] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = h * A / m, this.height = l * m / A;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = h, this.height = l;
      break;
    case 270: {
      const [m, A] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = h * A / m, this.height = l * m / A;
      break;
    }
  }
  const {
    lastPoint: c
  } = r(this, _e).box;
  p(this, zr, [(c[0] - a) / h, (c[1] - o) / l]);
}, Mu = function(e) {
  const s = (a, o) => {
    var h, l, c;
    this.color = a, (h = this.parent) == null || h.drawLayer.changeColor(r(this, Gt), a), (l = r(this, Br)) == null || l.updateColor(a), p(this, Is, o), (c = this.parent) == null || c.drawLayer.changeOpacity(r(this, Gt), o);
  }, i = this.color, n = r(this, Is);
  this.addCommands({
    cmd: s.bind(this, e, Q._defaultOpacity),
    undo: s.bind(this, i, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, ku = function(e) {
  const s = r(this, Ee), i = (n) => {
    p(this, Ee, n), g(this, j, Pu).call(this, n);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Pu = function(e) {
  if (!r(this, se))
    return;
  g(this, j, ch).call(this, {
    highlightOutlines: r(this, je).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, ec = function() {
  r(this, Gt) === null || !this.parent || (this.parent.drawLayer.remove(r(this, Gt)), p(this, Gt, null), this.parent.drawLayer.remove(r(this, xt)), p(this, xt, null));
}, ki = function(e = this.parent) {
  r(this, Gt) === null && ({
    id: qt(this, Gt)._,
    clipPathId: qt(this, _n)._
  } = e.drawLayer.highlight(r(this, je), this.color, r(this, Is)), p(this, xt, e.drawLayer.highlightOutline(r(this, _e))), r(this, En) && (r(this, En).style.clipPath = r(this, _n)));
}, xe = new WeakSet(), Vn = function({
  x: e,
  y: s,
  width: i,
  height: n
}, a) {
  switch (a) {
    case 90:
      return {
        x: 1 - s - n,
        y: e,
        width: n,
        height: i
      };
    case 180:
      return {
        x: 1 - e - i,
        y: 1 - s - n,
        width: i,
        height: n
      };
    case 270:
      return {
        x: s,
        y: 1 - e - i,
        width: n,
        height: i
      };
  }
  return {
    x: e,
    y: s,
    width: i,
    height: n
  };
}, Lu = function(e) {
  Q._keyboardManager.exec(this, e);
}, dh = function(e) {
  if (!r(this, Hr))
    return;
  const s = window.getSelection();
  e ? s.setPosition(r(this, Hr), r(this, Mo)) : s.setPosition(r(this, ko), r(this, Po));
}, oa = function() {
  return r(this, se) ? this.rotation : 0;
}, Iu = function() {
  if (r(this, se))
    return null;
  const [e, s] = this.pageDimensions, [i, n] = this.pageTranslation, a = r(this, Ls), o = new Float32Array(a.length * 8);
  let h = 0;
  for (const {
    x: l,
    y: c,
    width: u,
    height: f
  } of a) {
    const m = l * e + i, A = (1 - c - f) * s + n;
    o[h] = o[h + 4] = m, o[h + 1] = o[h + 3] = A, o[h + 2] = o[h + 6] = m + u * e, o[h + 5] = o[h + 7] = A + f * s, h += 8;
  }
  return o;
}, Fu = function(e) {
  return r(this, je).serialize(e, g(this, j, oa).call(this));
}, Du = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, Nu = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.removeFreeHighlight(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Ou = function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, n) => i !== s[n]);
}, b(Q, xe), O(Q, "_defaultColor", null), O(Q, "_defaultOpacity", 1), O(Q, "_defaultThickness", 12), O(Q, "_type", "highlight"), O(Q, "_editorType", U.HIGHLIGHT), O(Q, "_freeHighlightId", -1), O(Q, "_freeHighlight", null), O(Q, "_freeHighlightClipId", "");
let Eh = Q;
var Sn, Cn, is, Fs, Se, xn, Tn, Rn, Ds, Ur, Mn, kn, gi, R, Hu, Bu, zu, ju, ic, Uu, nc, $u, Gu, Wu, Vu, qu, Pi, rc, ac, oc, uh, fh, qn, hc, ph, Ws, Xu, lc, Yu, Ku, cc, gh, ha;
const ct = class ct extends J {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    b(this, R);
    b(this, Sn, 0);
    b(this, Cn, 0);
    b(this, is, null);
    b(this, Fs, new Path2D());
    b(this, Se, !1);
    b(this, xn, null);
    b(this, Tn, !1);
    b(this, Rn, !1);
    b(this, Ds, null);
    b(this, Ur, null);
    b(this, Mn, 0);
    b(this, kn, 0);
    b(this, gi, null);
    this.color = e.color || null, this.thickness = e.thickness || null, this.opacity = e.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(e, s) {
    J.initialize(e, s);
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case H.INK_THICKNESS:
        ct._defaultThickness = s;
        break;
      case H.INK_COLOR:
        ct._defaultColor = s;
        break;
      case H.INK_OPACITY:
        ct._defaultOpacity = s / 100;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case H.INK_THICKNESS:
        g(this, R, Hu).call(this, s);
        break;
      case H.INK_COLOR:
        g(this, R, Bu).call(this, s);
        break;
      case H.INK_OPACITY:
        g(this, R, zu).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[H.INK_THICKNESS, ct._defaultThickness], [H.INK_COLOR, ct._defaultColor || J._defaultLineColor], [H.INK_OPACITY, Math.round(ct._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[H.INK_THICKNESS, this.thickness || ct._defaultThickness], [H.INK_COLOR, this.color || ct._defaultColor || J._defaultLineColor], [H.INK_OPACITY, Math.round(100 * (this.opacity ?? ct._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (g(this, R, uh).call(this), g(this, R, fh).call(this)), this.isAttachedToDOM || (this.parent.add(this), g(this, R, qn).call(this)), g(this, R, ha).call(this)));
  }
  remove() {
    var e;
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, r(this, is) && (clearTimeout(r(this, is)), p(this, is, null)), (e = r(this, Ds)) == null || e.disconnect(), p(this, Ds, null), super.remove());
  }
  setParent(e) {
    !this.parent && e ? this._uiManager.removeShouldRescale(this) : this.parent && e === null && this._uiManager.addShouldRescale(this), super.setParent(e);
  }
  onScaleChanging() {
    const [e, s] = this.parentDimensions, i = this.width * e, n = this.height * s;
    this.setDimensions(i, n);
  }
  enableEditMode() {
    r(this, Se) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, g(this, R, rc).call(this));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), g(this, R, ac).call(this));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    r(this, Se) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), p(this, Se, !0), this.div.classList.add("disabled"), g(this, R, ha).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), this.enableEditMode());
  }
  canvasPointerdown(e) {
    e.button !== 0 || !this.isInEditMode() || r(this, Se) || (this.setInForeground(), e.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), g(this, R, Uu).call(this, e.offsetX, e.offsetY));
  }
  canvasPointermove(e) {
    e.preventDefault(), g(this, R, nc).call(this, e.offsetX, e.offsetY);
  }
  canvasPointerup(e) {
    e.preventDefault(), g(this, R, oc).call(this, e);
  }
  canvasPointerleave(e) {
    g(this, R, oc).call(this, e);
  }
  get isResizable() {
    return !this.isEmpty() && r(this, Se);
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this.width && (e = this.x, s = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [i, n, a, o] = g(this, R, ju).call(this);
    if (this.setAt(i, n, 0, 0), this.setDims(a, o), g(this, R, uh).call(this), this.width) {
      const [h, l] = this.parentDimensions;
      this.setAspectRatio(this.width * h, this.height * l), this.setAt(e * h, s * l, this.width * h, this.height * l), p(this, Rn, !0), g(this, R, qn).call(this), this.setDims(this.width * h, this.height * l), g(this, R, Pi).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return g(this, R, fh).call(this), this.div;
  }
  setDimensions(e, s) {
    const i = Math.round(e), n = Math.round(s);
    if (r(this, Mn) === i && r(this, kn) === n)
      return;
    p(this, Mn, i), p(this, kn, n), this.canvas.style.visibility = "hidden";
    const [a, o] = this.parentDimensions;
    this.width = e / a, this.height = s / o, this.fixAndSetPosition(), r(this, Se) && g(this, R, hc).call(this, e, s), g(this, R, qn).call(this), g(this, R, Pi).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static async deserialize(e, s, i) {
    var w, v, _;
    if (e instanceof Lc)
      return null;
    const n = await super.deserialize(e, s, i);
    n.thickness = e.thickness, n.color = L.makeHexColor(...e.color), n.opacity = e.opacity;
    const [a, o] = n.pageDimensions, h = n.width * a, l = n.height * o, c = n.parentScale, u = e.thickness / 2;
    p(n, Se, !0), p(n, Mn, Math.round(h)), p(n, kn, Math.round(l));
    const {
      paths: f,
      rect: m,
      rotation: A
    } = e;
    for (let {
      bezier: E
    } of f) {
      E = g(w = ct, Ws, Yu).call(w, E, m, A);
      const S = [];
      n.paths.push(S);
      let x = c * (E[0] - u), C = c * (E[1] - u);
      for (let k = 2, F = E.length; k < F; k += 6) {
        const $ = c * (E[k] - u), D = c * (E[k + 1] - u), tt = c * (E[k + 2] - u), Y = c * (E[k + 3] - u), et = c * (E[k + 4] - u), st = c * (E[k + 5] - u);
        S.push([[x, C], [$, D], [tt, Y], [et, st]]), x = et, C = st;
      }
      const T = g(this, Ws, Xu).call(this, S);
      n.bezierPath2D.push(T);
    }
    const y = g(v = n, R, cc).call(v);
    return p(n, Cn, Math.max(J.MIN_SIZE, y[2] - y[0])), p(n, Sn, Math.max(J.MIN_SIZE, y[3] - y[1])), g(_ = n, R, hc).call(_, h, l), n;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const e = this.getRect(0, 0), s = J._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: U.INK,
      color: s,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: g(this, R, Ku).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, e),
      pageIndex: this.pageIndex,
      rect: e,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
Sn = new WeakMap(), Cn = new WeakMap(), is = new WeakMap(), Fs = new WeakMap(), Se = new WeakMap(), xn = new WeakMap(), Tn = new WeakMap(), Rn = new WeakMap(), Ds = new WeakMap(), Ur = new WeakMap(), Mn = new WeakMap(), kn = new WeakMap(), gi = new WeakMap(), R = new WeakSet(), Hu = function(e) {
  const s = (n) => {
    this.thickness = n, g(this, R, ha).call(this);
  }, i = this.thickness;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Bu = function(e) {
  const s = (n) => {
    this.color = n, g(this, R, Pi).call(this);
  }, i = this.color;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, zu = function(e) {
  const s = (n) => {
    this.opacity = n, g(this, R, Pi).call(this);
  };
  e /= 100;
  const i = this.opacity;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, ju = function() {
  const {
    parentRotation: e,
    parentDimensions: [s, i]
  } = this;
  switch (e) {
    case 90:
      return [0, i, i, s];
    case 180:
      return [s, i, s, i];
    case 270:
      return [s, 0, i, s];
    default:
      return [0, 0, s, i];
  }
}, ic = function() {
  const {
    ctx: e,
    color: s,
    opacity: i,
    thickness: n,
    parentScale: a,
    scaleFactor: o
  } = this;
  e.lineWidth = n * a / o, e.lineCap = "round", e.lineJoin = "round", e.miterLimit = 10, e.strokeStyle = `${s}${kf(i)}`;
}, Uu = function(e, s) {
  this.canvas.addEventListener("contextmenu", Te, {
    signal: this._uiManager._signal
  }), g(this, R, ac).call(this), p(this, xn, new AbortController());
  const i = this._uiManager.combinedSignal(r(this, xn));
  this.canvas.addEventListener("pointerleave", this.canvasPointerleave.bind(this), {
    signal: i
  }), this.canvas.addEventListener("pointermove", this.canvasPointermove.bind(this), {
    signal: i
  }), this.canvas.addEventListener("pointerup", this.canvasPointerup.bind(this), {
    signal: i
  }), this.isEditing = !0, r(this, Rn) || (p(this, Rn, !0), g(this, R, qn).call(this), this.thickness || (this.thickness = ct._defaultThickness), this.color || (this.color = ct._defaultColor || J._defaultLineColor), this.opacity ?? (this.opacity = ct._defaultOpacity)), this.currentPath.push([e, s]), p(this, Tn, !1), g(this, R, ic).call(this), p(this, gi, () => {
    g(this, R, Wu).call(this), r(this, gi) && window.requestAnimationFrame(r(this, gi));
  }), window.requestAnimationFrame(r(this, gi));
}, nc = function(e, s) {
  const [i, n] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && e === i && s === n)
    return;
  const a = this.currentPath;
  let o = r(this, Fs);
  if (a.push([e, s]), p(this, Tn, !0), a.length <= 2) {
    o.moveTo(...a[0]), o.lineTo(e, s);
    return;
  }
  a.length === 3 && (p(this, Fs, o = new Path2D()), o.moveTo(...a[0])), g(this, R, Vu).call(this, o, ...a.at(-3), ...a.at(-2), e, s);
}, $u = function() {
  if (this.currentPath.length === 0)
    return;
  const e = this.currentPath.at(-1);
  r(this, Fs).lineTo(...e);
}, Gu = function(e, s) {
  p(this, gi, null), e = Math.min(Math.max(e, 0), this.canvas.width), s = Math.min(Math.max(s, 0), this.canvas.height), g(this, R, nc).call(this, e, s), g(this, R, $u).call(this);
  let i;
  if (this.currentPath.length !== 1)
    i = g(this, R, qu).call(this);
  else {
    const l = [e, s];
    i = [[l, l.slice(), l.slice(), l]];
  }
  const n = r(this, Fs), a = this.currentPath;
  this.currentPath = [], p(this, Fs, new Path2D());
  const o = () => {
    this.allRawPaths.push(a), this.paths.push(i), this.bezierPath2D.push(n), this._uiManager.rebuild(this);
  }, h = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (g(this, R, uh).call(this), g(this, R, fh).call(this)), g(this, R, ha).call(this));
  };
  this.addCommands({
    cmd: o,
    undo: h,
    mustExec: !0
  });
}, Wu = function() {
  if (!r(this, Tn))
    return;
  p(this, Tn, !1);
  const e = Math.ceil(this.thickness * this.parentScale), s = this.currentPath.slice(-3), i = s.map((o) => o[0]), n = s.map((o) => o[1]);
  Math.min(...i) - e, Math.max(...i) + e, Math.min(...n) - e, Math.max(...n) + e;
  const {
    ctx: a
  } = this;
  a.save(), a.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const o of this.bezierPath2D)
    a.stroke(o);
  a.stroke(r(this, Fs)), a.restore();
}, Vu = function(e, s, i, n, a, o, h) {
  const l = (s + n) / 2, c = (i + a) / 2, u = (n + o) / 2, f = (a + h) / 2;
  e.bezierCurveTo(l + 2 * (n - l) / 3, c + 2 * (a - c) / 3, u + 2 * (n - u) / 3, f + 2 * (a - f) / 3, u, f);
}, qu = function() {
  const e = this.currentPath;
  if (e.length <= 2)
    return [[e[0], e[0], e.at(-1), e.at(-1)]];
  const s = [];
  let i, [n, a] = e[0];
  for (i = 1; i < e.length - 2; i++) {
    const [m, A] = e[i], [y, w] = e[i + 1], v = (m + y) / 2, _ = (A + w) / 2, E = [n + 2 * (m - n) / 3, a + 2 * (A - a) / 3], S = [v + 2 * (m - v) / 3, _ + 2 * (A - _) / 3];
    s.push([[n, a], E, S, [v, _]]), [n, a] = [v, _];
  }
  const [o, h] = e[i], [l, c] = e[i + 1], u = [n + 2 * (o - n) / 3, a + 2 * (h - a) / 3], f = [l + 2 * (o - l) / 3, c + 2 * (h - c) / 3];
  return s.push([[n, a], u, f, [l, c]]), s;
}, Pi = function() {
  if (this.isEmpty()) {
    g(this, R, ph).call(this);
    return;
  }
  g(this, R, ic).call(this);
  const {
    canvas: e,
    ctx: s
  } = this;
  s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, e.width, e.height), g(this, R, ph).call(this);
  for (const i of this.bezierPath2D)
    s.stroke(i);
}, rc = function() {
  if (r(this, Ur))
    return;
  p(this, Ur, new AbortController());
  const e = this._uiManager.combinedSignal(r(this, Ur));
  this.canvas.addEventListener("pointerdown", this.canvasPointerdown.bind(this), {
    signal: e
  });
}, ac = function() {
  var e;
  (e = this.pointerdownAC) == null || e.abort(), this.pointerdownAC = null;
}, oc = function(e) {
  var s;
  (s = r(this, xn)) == null || s.abort(), p(this, xn, null), g(this, R, rc).call(this), r(this, is) && clearTimeout(r(this, is)), p(this, is, setTimeout(() => {
    p(this, is, null), this.canvas.removeEventListener("contextmenu", Te);
  }, 10)), g(this, R, Gu).call(this, e.offsetX, e.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, uh = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, fh = function() {
  p(this, Ds, new ResizeObserver((e) => {
    const s = e[0].contentRect;
    s.width && s.height && this.setDimensions(s.width, s.height);
  })), r(this, Ds).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var e;
    (e = r(this, Ds)) == null || e.disconnect(), p(this, Ds, null);
  }, {
    once: !0
  });
}, qn = function() {
  if (!r(this, Rn))
    return;
  const [e, s] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * e), this.canvas.height = Math.ceil(this.height * s), g(this, R, ph).call(this);
}, hc = function(e, s) {
  const i = g(this, R, gh).call(this), n = (e - i) / r(this, Cn), a = (s - i) / r(this, Sn);
  this.scaleFactor = Math.min(n, a);
}, ph = function() {
  const e = g(this, R, gh).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e, this.translationY * this.scaleFactor + e);
}, Ws = new WeakSet(), Xu = function(e) {
  const s = new Path2D();
  for (let i = 0, n = e.length; i < n; i++) {
    const [a, o, h, l] = e[i];
    i === 0 && s.moveTo(...a), s.bezierCurveTo(o[0], o[1], h[0], h[1], l[0], l[1]);
  }
  return s;
}, lc = function(e, s, i) {
  const [n, a, o, h] = s;
  switch (i) {
    case 0:
      for (let l = 0, c = e.length; l < c; l += 2)
        e[l] += n, e[l + 1] = h - e[l + 1];
      break;
    case 90:
      for (let l = 0, c = e.length; l < c; l += 2) {
        const u = e[l];
        e[l] = e[l + 1] + n, e[l + 1] = u + a;
      }
      break;
    case 180:
      for (let l = 0, c = e.length; l < c; l += 2)
        e[l] = o - e[l], e[l + 1] += a;
      break;
    case 270:
      for (let l = 0, c = e.length; l < c; l += 2) {
        const u = e[l];
        e[l] = o - e[l + 1], e[l + 1] = h - u;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Yu = function(e, s, i) {
  const [n, a, o, h] = s;
  switch (i) {
    case 0:
      for (let l = 0, c = e.length; l < c; l += 2)
        e[l] -= n, e[l + 1] = h - e[l + 1];
      break;
    case 90:
      for (let l = 0, c = e.length; l < c; l += 2) {
        const u = e[l];
        e[l] = e[l + 1] - a, e[l + 1] = u - n;
      }
      break;
    case 180:
      for (let l = 0, c = e.length; l < c; l += 2)
        e[l] = o - e[l], e[l + 1] -= a;
      break;
    case 270:
      for (let l = 0, c = e.length; l < c; l += 2) {
        const u = e[l];
        e[l] = h - e[l + 1], e[l + 1] = o - u;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Ku = function(e, s, i, n) {
  var c, u;
  const a = [], o = this.thickness / 2, h = e * s + o, l = e * i + o;
  for (const f of this.paths) {
    const m = [], A = [];
    for (let y = 0, w = f.length; y < w; y++) {
      const [v, _, E, S] = f[y];
      if (v[0] === S[0] && v[1] === S[1] && w === 1) {
        const Y = e * v[0] + h, et = e * v[1] + l;
        m.push(Y, et), A.push(Y, et);
        break;
      }
      const x = e * v[0] + h, C = e * v[1] + l, T = e * _[0] + h, k = e * _[1] + l, F = e * E[0] + h, $ = e * E[1] + l, D = e * S[0] + h, tt = e * S[1] + l;
      y === 0 && (m.push(x, C), A.push(x, C)), m.push(T, k, F, $, D, tt), A.push(T, k), y === w - 1 && A.push(D, tt);
    }
    a.push({
      bezier: g(c = ct, Ws, lc).call(c, m, n, this.rotation),
      points: g(u = ct, Ws, lc).call(u, A, n, this.rotation)
    });
  }
  return a;
}, cc = function() {
  let e = 1 / 0, s = -1 / 0, i = 1 / 0, n = -1 / 0;
  for (const a of this.paths)
    for (const [o, h, l, c] of a) {
      const u = L.bezierBoundingBox(...o, ...h, ...l, ...c);
      e = Math.min(e, u[0]), i = Math.min(i, u[1]), s = Math.max(s, u[2]), n = Math.max(n, u[3]);
    }
  return [e, i, s, n];
}, gh = function() {
  return r(this, Se) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, ha = function(e = !1) {
  if (this.isEmpty())
    return;
  if (!r(this, Se)) {
    g(this, R, Pi).call(this);
    return;
  }
  const s = g(this, R, cc).call(this), i = g(this, R, gh).call(this);
  p(this, Cn, Math.max(J.MIN_SIZE, s[2] - s[0])), p(this, Sn, Math.max(J.MIN_SIZE, s[3] - s[1]));
  const n = Math.ceil(i + r(this, Cn) * this.scaleFactor), a = Math.ceil(i + r(this, Sn) * this.scaleFactor), [o, h] = this.parentDimensions;
  this.width = n / o, this.height = a / h, this.setAspectRatio(n, a);
  const l = this.translationX, c = this.translationY;
  this.translationX = -s[0], this.translationY = -s[1], g(this, R, qn).call(this), g(this, R, Pi).call(this), p(this, Mn, n), p(this, kn, a), this.setDims(n, a);
  const u = e ? i / this.scaleFactor / 2 : 0;
  this.translate(l - this.translationX - u, c - this.translationY - u);
}, b(ct, Ws), O(ct, "_defaultColor", null), O(ct, "_defaultOpacity", 1), O(ct, "_defaultThickness", 1), O(ct, "_type", "ink"), O(ct, "_editorType", U.INK);
let sc = ct;
var ut, Ot, mi, Ns, bi, $r, ns, Os, rs, ue, Gr, V, la, ca, mh, uc, Qu, bh, fc, Ah, Ju, Zu;
const fa = class fa extends J {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    b(this, V);
    b(this, ut, null);
    b(this, Ot, null);
    b(this, mi, null);
    b(this, Ns, null);
    b(this, bi, null);
    b(this, $r, "");
    b(this, ns, null);
    b(this, Os, null);
    b(this, rs, null);
    b(this, ue, !1);
    b(this, Gr, !1);
    p(this, Ns, e.bitmapUrl), p(this, bi, e.bitmapFile);
  }
  static initialize(e, s) {
    J.initialize(e, s);
  }
  static get supportedTypes() {
    return X(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`));
  }
  static get supportedTypesStr() {
    return X(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor(U.STAMP, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: n,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, h = await i.guess({
      name: "altText",
      request: {
        data: n,
        width: a,
        height: o,
        channels: n.length / (a * o)
      }
    });
    if (!h)
      throw new Error("No response from the AI service.");
    if (h.error)
      throw new Error("Error from the AI service.");
    if (h.cancel)
      return null;
    if (!h.output)
      throw new Error("No valid response from the AI service.");
    const l = h.output;
    return await this.setGuessedAltText(l), s && !this.hasAltTextData() && (this.altTextData = {
      alt: l,
      decorative: !1
    }), l;
  }
  remove() {
    var e, s;
    r(this, Ot) && (p(this, ut, null), this._uiManager.imageManager.deleteId(r(this, Ot)), (e = r(this, ns)) == null || e.remove(), p(this, ns, null), (s = r(this, Os)) == null || s.disconnect(), p(this, Os, null), r(this, rs) && (clearTimeout(r(this, rs)), p(this, rs, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      r(this, Ot) && g(this, V, mh).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (r(this, Ot) && r(this, ns) === null && g(this, V, mh).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(r(this, mi) || r(this, ut) || r(this, Ns) || r(this, bi) || r(this, Ot));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    if (this.width && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), r(this, ut) ? g(this, V, uc).call(this) : g(this, V, mh).call(this), this.width && !this.annotationElementId) {
      const [i, n] = this.parentDimensions;
      this.setAt(e * i, s * n, this.width * i, this.height * n);
    }
    return this.div;
  }
  copyCanvas(e, s, i = !1) {
    var m;
    e || (e = 224);
    const {
      width: n,
      height: a
    } = r(this, ut), o = new cl();
    let h = r(this, ut), l = n, c = a, u = null;
    if (s) {
      if (n > s || a > s) {
        const k = Math.min(s / n, s / a);
        l = Math.floor(n * k), c = Math.floor(a * k);
      }
      u = document.createElement("canvas");
      const A = u.width = Math.ceil(l * o.sx), y = u.height = Math.ceil(c * o.sy);
      r(this, ue) || (h = g(this, V, bh).call(this, A, y));
      const w = u.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let v = "white", _ = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? _ = "black" : (m = window.matchMedia) != null && m.call(window, "(prefers-color-scheme: dark)").matches && (v = "#8f8f9d", _ = "#42414d");
      const E = 15, S = E * o.sx, x = E * o.sy, C = new OffscreenCanvas(S * 2, x * 2), T = C.getContext("2d");
      T.fillStyle = v, T.fillRect(0, 0, S * 2, x * 2), T.fillStyle = _, T.fillRect(0, 0, S, x), T.fillRect(S, x, S, x), w.fillStyle = w.createPattern(C, "repeat"), w.fillRect(0, 0, A, y), w.drawImage(h, 0, 0, h.width, h.height, 0, 0, A, y);
    }
    let f = null;
    if (i) {
      let A, y;
      if (o.symmetric && h.width < e && h.height < e)
        A = h.width, y = h.height;
      else if (h = r(this, ut), n > e || a > e) {
        const _ = Math.min(e / n, e / a);
        A = Math.floor(n * _), y = Math.floor(a * _), r(this, ue) || (h = g(this, V, bh).call(this, A, y));
      }
      const v = new OffscreenCanvas(A, y).getContext("2d", {
        willReadFrequently: !0
      });
      v.drawImage(h, 0, 0, h.width, h.height, 0, 0, A, y), f = {
        width: A,
        height: y,
        data: v.getImageData(0, 0, A, y).data
      };
    }
    return {
      canvas: u,
      width: l,
      height: c,
      imageData: f
    };
  }
  getImageForAltText() {
    return r(this, ns);
  }
  static async deserialize(e, s, i) {
    var y;
    let n = null;
    if (e instanceof gu) {
      const {
        data: {
          rect: w,
          rotation: v,
          id: _,
          structParent: E,
          popupRef: S
        },
        container: x,
        parent: {
          page: {
            pageNumber: C
          }
        }
      } = e, T = x.querySelector("canvas"), k = i.imageManager.getFromCanvas(x.id, T);
      T.remove();
      const F = ((y = await s._structTree.getAriaAttributes(`${_c}${_}`)) == null ? void 0 : y.get("aria-label")) || "";
      n = e = {
        annotationType: U.STAMP,
        bitmapId: k.id,
        bitmap: k.bitmap,
        pageIndex: C - 1,
        rect: w.slice(0),
        rotation: v,
        id: _,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: F
        },
        isSvg: !1,
        structParent: E,
        popupRef: S
      };
    }
    const a = await super.deserialize(e, s, i), {
      rect: o,
      bitmap: h,
      bitmapUrl: l,
      bitmapId: c,
      isSvg: u,
      accessibilityData: f
    } = e;
    c && i.imageManager.isValidId(c) ? (p(a, Ot, c), h && p(a, ut, h)) : p(a, Ns, l), p(a, ue, u);
    const [m, A] = a.pageDimensions;
    return a.width = (o[2] - o[0]) / m, a.height = (o[3] - o[1]) / A, a.annotationElementId = e.id || null, f && (a.altTextData = f), a._initialData = n, p(a, Gr, !!n), a;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: U.STAMP,
      bitmapId: r(this, Ot),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: r(this, ue),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = g(this, V, Ah).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: n,
      altText: a
    } = this.serializeAltText(!1);
    if (!n && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const h = g(this, V, Zu).call(this, i);
      if (h.isSame)
        return null;
      h.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = r(this, ue) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(r(this, Ot)))
      s.stamps.set(r(this, Ot), {
        area: o,
        serialized: i
      }), i.bitmap = g(this, V, Ah).call(this, !1);
    else if (r(this, ue)) {
      const h = s.stamps.get(r(this, Ot));
      o > h.area && (h.area = o, h.serialized.bitmap.close(), h.serialized.bitmap = g(this, V, Ah).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
ut = new WeakMap(), Ot = new WeakMap(), mi = new WeakMap(), Ns = new WeakMap(), bi = new WeakMap(), $r = new WeakMap(), ns = new WeakMap(), Os = new WeakMap(), rs = new WeakMap(), ue = new WeakMap(), Gr = new WeakMap(), V = new WeakSet(), la = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  p(this, ut, e.bitmap), s || (p(this, Ot, e.id), p(this, ue, e.isSvg)), e.file && p(this, $r, e.file.name), g(this, V, uc).call(this);
}, ca = function() {
  if (p(this, mi, null), this._uiManager.enableWaiting(!1), !!r(this, ns)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, ut)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, ut)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, mh = function() {
  if (r(this, Ot)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(r(this, Ot)).then((i) => g(this, V, la).call(this, i, !0)).finally(() => g(this, V, ca).call(this));
    return;
  }
  if (r(this, Ns)) {
    const i = r(this, Ns);
    p(this, Ns, null), this._uiManager.enableWaiting(!0), p(this, mi, this._uiManager.imageManager.getFromUrl(i).then((n) => g(this, V, la).call(this, n)).finally(() => g(this, V, ca).call(this)));
    return;
  }
  if (r(this, bi)) {
    const i = r(this, bi);
    p(this, bi, null), this._uiManager.enableWaiting(!0), p(this, mi, this._uiManager.imageManager.getFromFile(i).then((n) => g(this, V, la).call(this, n)).finally(() => g(this, V, ca).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = fa.supportedTypesStr;
  const s = this._uiManager._signal;
  p(this, mi, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const n = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), g(this, V, la).call(this, n);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => g(this, V, ca).call(this))), e.click();
}, uc = function() {
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = r(this, ut);
  const [n, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * n, i = this.height * a;
  else if (s > o * n || i > o * a) {
    const u = Math.min(o * n / s, o * a / i);
    s *= u, i *= u;
  }
  const [h, l] = this.parentDimensions;
  this.setDims(s * h / n, i * l / a), this._uiManager.enableWaiting(!1);
  const c = p(this, ns, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), g(this, V, fc).call(this, s, i), g(this, V, Ju).call(this), r(this, Gr) || (this.parent.addUndoableEditor(this), p(this, Gr, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), r(this, $r) && c.setAttribute("aria-label", r(this, $r));
}, Qu = function(e, s) {
  var o;
  const [i, n] = this.parentDimensions;
  this.width = e / i, this.height = s / n, (o = this._initialOptions) != null && o.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, r(this, rs) !== null && clearTimeout(r(this, rs)), p(this, rs, setTimeout(() => {
    p(this, rs, null), g(this, V, fc).call(this, e, s);
  }, 200));
}, bh = function(e, s) {
  const {
    width: i,
    height: n
  } = r(this, ut);
  let a = i, o = n, h = r(this, ut);
  for (; a > 2 * e || o > 2 * s; ) {
    const l = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(h, 0, 0, l, c, 0, 0, a, o), h = u.transferToImageBitmap();
  }
  return h;
}, fc = function(e, s) {
  const i = new cl(), n = Math.ceil(e * i.sx), a = Math.ceil(s * i.sy), o = r(this, ns);
  if (!o || o.width === n && o.height === a)
    return;
  o.width = n, o.height = a;
  const h = r(this, ue) ? r(this, ut) : g(this, V, bh).call(this, n, a), l = o.getContext("2d");
  l.filter = this._uiManager.hcmFilter, l.drawImage(h, 0, 0, h.width, h.height, 0, 0, n, a);
}, Ah = function(e) {
  if (e) {
    if (r(this, ue)) {
      const n = this._uiManager.imageManager.getSvgUrl(r(this, Ot));
      if (n)
        return n;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = r(this, ut), s.getContext("2d").drawImage(r(this, ut), 0, 0), s.toDataURL();
  }
  if (r(this, ue)) {
    const [s, i] = this.pageDimensions, n = Math.round(this.width * s * _i.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * _i.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(n, a);
    return o.getContext("2d").drawImage(r(this, ut), 0, 0, r(this, ut).width, r(this, ut).height, 0, 0, n, a), o.transferToImageBitmap();
  }
  return structuredClone(r(this, ut));
}, Ju = function() {
  this._uiManager._signal && (p(this, Os, new ResizeObserver((e) => {
    const s = e[0].contentRect;
    s.width && s.height && g(this, V, Qu).call(this, s.width, s.height);
  })), r(this, Os).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var e;
    (e = r(this, Os)) == null || e.disconnect(), p(this, Os, null);
  }, {
    once: !0
  }));
}, Zu = function(e) {
  var l;
  const {
    rect: s,
    pageIndex: i,
    accessibilityData: {
      altText: n
    }
  } = this._initialData, a = e.rect.every((c, u) => Math.abs(c - s[u]) < 1), o = e.pageIndex === i, h = (((l = e.accessibilityData) == null ? void 0 : l.alt) || "") === n;
  return {
    isSame: a && o && h,
    isSameAltText: h
  };
}, O(fa, "_type", "stamp"), O(fa, "_editorType", U.STAMP);
let dc = fa;
var Pn, Wr, as, Ai, Hs, fe, yi, Vr, qr, Wt, Bs, I, vi, Ht, tf, gc, mc, bc, yh;
const Re = class Re {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: n,
    annotationLayer: a,
    drawLayer: o,
    textLayer: h,
    viewport: l,
    l10n: c
  }) {
    b(this, Ht);
    b(this, Pn);
    b(this, Wr, !1);
    b(this, as, null);
    b(this, Ai, null);
    b(this, Hs, null);
    b(this, fe, /* @__PURE__ */ new Map());
    b(this, yi, !1);
    b(this, Vr, !1);
    b(this, qr, !1);
    b(this, Wt, null);
    b(this, Bs, null);
    b(this, I);
    const u = [...r(Re, vi).values()];
    if (!Re._initialized) {
      Re._initialized = !0;
      for (const f of u)
        f.initialize(c, t);
    }
    t.registerEditorTypes(u), p(this, I, t), this.pageIndex = e, this.div = s, p(this, Pn, n), p(this, as, a), this.viewport = l, p(this, Wt, h), this.drawLayer = o, this._structTree = i, r(this, I).addLayer(this);
  }
  get isEmpty() {
    return r(this, fe).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && r(this, I).getMode() === U.NONE;
  }
  updateToolbar(t) {
    r(this, I).updateToolbar(t);
  }
  updateMode(t = r(this, I).getMode()) {
    switch (g(this, Ht, yh).call(this), t) {
      case U.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case U.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case U.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of r(Re, vi).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = r(this, Wt)) == null ? void 0 : e.div);
  }
  addInkEditorIfNeeded(t) {
    if (r(this, I).getMode() !== U.INK)
      return;
    if (!t) {
      for (const s of r(this, fe).values())
        if (s.isEmpty()) {
          s.setInBackground();
          return;
        }
    }
    this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, !1).setInBackground();
  }
  setEditingState(t) {
    r(this, I).setEditingState(t);
  }
  addCommands(t) {
    r(this, I).addCommands(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = r(this, as)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of r(this, fe).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (r(this, I).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!r(this, as))
      return;
    const e = r(this, as).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), r(this, I).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
  }
  disable() {
    var i;
    p(this, qr, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const n of r(this, fe).values())
      if (n.disableEditing(), !!n.annotationElementId) {
        if (n.serialize() !== null) {
          t.set(n.annotationElementId, n);
          continue;
        } else
          e.set(n.annotationElementId, n);
        (i = this.getEditableAnnotation(n.annotationElementId)) == null || i.show(), n.remove();
      }
    if (r(this, as)) {
      const n = r(this, as).getEditableAnnotations();
      for (const a of n) {
        const {
          id: o
        } = a.data;
        if (r(this, I).isDeletedAnnotationElement(o))
          continue;
        let h = e.get(o);
        if (h) {
          h.resetAnnotationElement(a), h.show(!1), a.show();
          continue;
        }
        h = t.get(o), h && (r(this, I).addChangedExistingAnnotation(h), h.renderAnnotationElement(a) && h.show(!1)), a.show();
      }
    }
    g(this, Ht, yh).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of r(Re, vi).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), p(this, qr, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = r(this, as)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    r(this, I).getActive() !== t && r(this, I).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = r(this, Wt)) != null && t.div && !r(this, Bs)) {
      p(this, Bs, new AbortController());
      const e = r(this, I).combinedSignal(r(this, Bs));
      r(this, Wt).div.addEventListener("pointerdown", g(this, Ht, tf).bind(this), {
        signal: e
      }), r(this, Wt).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = r(this, Wt)) != null && t.div && r(this, Bs) && (r(this, Bs).abort(), p(this, Bs, null), r(this, Wt).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (r(this, Ai))
      return;
    p(this, Ai, new AbortController());
    const t = r(this, I).combinedSignal(r(this, Ai));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    }), this.div.addEventListener("pointerup", this.pointerup.bind(this), {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = r(this, Ai)) == null || t.abort(), p(this, Ai, null);
  }
  attach(t) {
    r(this, fe).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && r(this, I).isDeletedAnnotationElement(e) && r(this, I).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    r(this, fe).delete(t.id), (e = r(this, Pn)) == null || e.removePointerInTextLayer(t.contentDiv), !r(this, qr) && t.annotationElementId && r(this, I).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), r(this, I).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1, r(this, Vr) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (r(this, I).addDeletedAnnotationElement(t.annotationElementId), J.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), r(this, I).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(), r(this, I).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !r(this, Hs) && (t._focusEventsAllowed = !1, p(this, Hs, setTimeout(() => {
      p(this, Hs, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: r(this, I)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = r(this, Pn)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getNextId() {
    return r(this, I).getId();
  }
  combinedSignal(t) {
    return r(this, I).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = r(this, Ht, gc)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    r(this, I).updateToolbar(t), r(this, I).updateMode(t);
    const {
      offsetX: s,
      offsetY: i
    } = g(this, Ht, bc).call(this), n = this.getNextId(), a = g(this, Ht, mc).call(this, {
      parent: this,
      id: n,
      x: s,
      y: i,
      uiManager: r(this, I),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = r(Re, vi).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, r(this, I))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), n = g(this, Ht, mc).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: r(this, I),
      isCentered: e,
      ...s
    });
    return n && this.add(n), n;
  }
  addNewEditor() {
    this.createAndAddNewEditor(g(this, Ht, bc).call(this), !0);
  }
  setSelected(t) {
    r(this, I).setSelected(t);
  }
  toggleSelected(t) {
    r(this, I).toggleSelected(t);
  }
  isSelected(t) {
    return r(this, I).isSelected(t);
  }
  unselect(t) {
    r(this, I).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = re.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && r(this, yi)) {
      if (p(this, yi, !1), !r(this, Wr)) {
        p(this, Wr, !0);
        return;
      }
      if (r(this, I).getMode() === U.STAMP) {
        r(this, I).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    if (r(this, I).getMode() === U.HIGHLIGHT && this.enableTextSelection(), r(this, yi)) {
      p(this, yi, !1);
      return;
    }
    const {
      isMac: e
    } = re.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    p(this, yi, !0);
    const s = r(this, I).getActive();
    p(this, Wr, !s || s.isEmpty());
  }
  findNewParent(t, e, s) {
    const i = r(this, I).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  destroy() {
    var t, e;
    ((t = r(this, I).getActive()) == null ? void 0 : t.parent) === this && (r(this, I).commitOrRemove(), r(this, I).setActiveEditor(null)), r(this, Hs) && (clearTimeout(r(this, Hs)), p(this, Hs, null));
    for (const s of r(this, fe).values())
      (e = r(this, Pn)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, r(this, fe).clear(), r(this, I).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, Ln(this.div, t);
    for (const e of r(this, I).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    r(this, I).commitOrRemove(), g(this, Ht, yh).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, Ln(this.div, {
      rotation: s
    }), e !== s)
      for (const i of r(this, fe).values())
        i.rotate(s);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return r(this, I).viewParameters.realScale;
  }
};
Pn = new WeakMap(), Wr = new WeakMap(), as = new WeakMap(), Ai = new WeakMap(), Hs = new WeakMap(), fe = new WeakMap(), yi = new WeakMap(), Vr = new WeakMap(), qr = new WeakMap(), Wt = new WeakMap(), Bs = new WeakMap(), I = new WeakMap(), vi = new WeakMap(), Ht = new WeakSet(), tf = function(t) {
  r(this, I).unselectAll();
  const {
    target: e
  } = t;
  if (e === r(this, Wt).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && r(this, Wt).div.contains(e)) {
    const {
      isMac: s
    } = re.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    r(this, I).showAllEditors("highlight", !0, !0), r(this, Wt).div.classList.add("free"), this.toggleDrawing(), Eh.startHighlighting(this, r(this, I).direction === "ltr", {
      target: r(this, Wt).div,
      x: t.x,
      y: t.y
    }), r(this, Wt).div.addEventListener("pointerup", () => {
      r(this, Wt).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: r(this, I)._signal
    }), t.preventDefault();
  }
}, gc = function() {
  return r(Re, vi).get(r(this, I).getMode());
}, mc = function(t) {
  const e = r(this, Ht, gc);
  return e ? new e.prototype.constructor(t) : null;
}, bc = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), n = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), h = Math.min(window.innerHeight, e + i), l = (n + o) / 2 - t, c = (a + h) / 2 - e, [u, f] = this.viewport.rotation % 180 === 0 ? [l, c] : [c, l];
  return {
    offsetX: u,
    offsetY: f
  };
}, yh = function() {
  p(this, Vr, !0);
  for (const t of r(this, fe).values())
    t.isEmpty() && t.remove();
  p(this, Vr, !1);
}, O(Re, "_initialized", !1), b(Re, vi, new Map([ql, sc, dc, Eh].map((t) => [t._editorType, t])));
let pc = Re;
var os, Io, At, wi, Fo, yc, Nn, vc, ef;
const Ft = class Ft {
  constructor({
    pageIndex: t
  }) {
    b(this, Nn);
    b(this, os, null);
    b(this, Io, 0);
    b(this, At, /* @__PURE__ */ new Map());
    b(this, wi, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!r(this, os)) {
      p(this, os, t);
      return;
    }
    if (r(this, os) !== t) {
      if (r(this, At).size > 0)
        for (const e of r(this, At).values())
          e.remove(), t.append(e);
      p(this, os, t);
    }
  }
  static get _svgFactory() {
    return X(this, "_svgFactory", new Ec());
  }
  highlight(t, e, s, i = !1) {
    const n = qt(this, Io)._++, a = g(this, Nn, vc).call(this, t.box);
    a.classList.add("highlight"), t.free && a.classList.add("free");
    const o = Ft._svgFactory.createElement("defs");
    a.append(o);
    const h = Ft._svgFactory.createElement("path");
    o.append(h);
    const l = `path_p${this.pageIndex}_${n}`;
    h.setAttribute("id", l), h.setAttribute("d", t.toSVGPath()), i && r(this, wi).set(n, h);
    const c = g(this, Nn, ef).call(this, o, l), u = Ft._svgFactory.createElement("use");
    return a.append(u), a.setAttribute("fill", e), a.setAttribute("fill-opacity", s), u.setAttribute("href", `#${l}`), r(this, At).set(n, a), {
      id: n,
      clipPathId: `url(#${c})`
    };
  }
  highlightOutline(t) {
    const e = qt(this, Io)._++, s = g(this, Nn, vc).call(this, t.box);
    s.classList.add("highlightOutline");
    const i = Ft._svgFactory.createElement("defs");
    s.append(i);
    const n = Ft._svgFactory.createElement("path");
    i.append(n);
    const a = `path_p${this.pageIndex}_${e}`;
    n.setAttribute("id", a), n.setAttribute("d", t.toSVGPath()), n.setAttribute("vector-effect", "non-scaling-stroke");
    let o;
    if (t.free) {
      s.classList.add("free");
      const c = Ft._svgFactory.createElement("mask");
      i.append(c), o = `mask_p${this.pageIndex}_${e}`, c.setAttribute("id", o), c.setAttribute("maskUnits", "objectBoundingBox");
      const u = Ft._svgFactory.createElement("rect");
      c.append(u), u.setAttribute("width", "1"), u.setAttribute("height", "1"), u.setAttribute("fill", "white");
      const f = Ft._svgFactory.createElement("use");
      c.append(f), f.setAttribute("href", `#${a}`), f.setAttribute("stroke", "none"), f.setAttribute("fill", "black"), f.setAttribute("fill-rule", "nonzero"), f.classList.add("mask");
    }
    const h = Ft._svgFactory.createElement("use");
    s.append(h), h.setAttribute("href", `#${a}`), o && h.setAttribute("mask", `url(#${o})`);
    const l = h.cloneNode();
    return s.append(l), h.classList.add("mainOutline"), l.classList.add("secondaryOutline"), r(this, At).set(e, s), e;
  }
  finalizeLine(t, e) {
    const s = r(this, wi).get(t);
    r(this, wi).delete(t), this.updateBox(t, e.box), s.setAttribute("d", e.toSVGPath());
  }
  updateLine(t, e) {
    r(this, At).get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath());
  }
  removeFreeHighlight(t) {
    this.remove(t), r(this, wi).delete(t);
  }
  updatePath(t, e) {
    r(this, wi).get(t).setAttribute("d", e.toSVGPath());
  }
  updateBox(t, e) {
    var s;
    g(s = Ft, Fo, yc).call(s, r(this, At).get(t), e);
  }
  show(t, e) {
    r(this, At).get(t).classList.toggle("hidden", !e);
  }
  rotate(t, e) {
    r(this, At).get(t).setAttribute("data-main-rotation", e);
  }
  changeColor(t, e) {
    r(this, At).get(t).setAttribute("fill", e);
  }
  changeOpacity(t, e) {
    r(this, At).get(t).setAttribute("fill-opacity", e);
  }
  addClass(t, e) {
    r(this, At).get(t).classList.add(e);
  }
  removeClass(t, e) {
    r(this, At).get(t).classList.remove(e);
  }
  getSVGRoot(t) {
    return r(this, At).get(t);
  }
  remove(t) {
    r(this, os) !== null && (r(this, At).get(t).remove(), r(this, At).delete(t));
  }
  destroy() {
    p(this, os, null);
    for (const t of r(this, At).values())
      t.remove();
    r(this, At).clear();
  }
};
os = new WeakMap(), Io = new WeakMap(), At = new WeakMap(), wi = new WeakMap(), Fo = new WeakSet(), yc = function(t, {
  x: e = 0,
  y: s = 0,
  width: i = 1,
  height: n = 1
} = {}) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * n}%`;
}, Nn = new WeakSet(), vc = function(t) {
  var s;
  const e = Ft._svgFactory.create(1, 1, !0);
  return r(this, os).append(e), e.setAttribute("aria-hidden", !0), g(s = Ft, Fo, yc).call(s, e, t), e;
}, ef = function(t, e) {
  const s = Ft._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const n = Ft._svgFactory.createElement("use");
  return s.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), i;
}, b(Ft, Fo);
let Ac = Ft;
B.AbortException;
B.AnnotationEditorLayer;
B.AnnotationEditorParamsType;
B.AnnotationEditorType;
B.AnnotationEditorUIManager;
B.AnnotationLayer;
B.AnnotationMode;
B.CMapCompressionType;
B.ColorPicker;
B.DOMSVGFactory;
B.DrawLayer;
B.FeatureTest;
var rg = B.GlobalWorkerOptions;
B.ImageKind;
B.InvalidPDFException;
B.MissingPDFException;
B.OPS;
B.OutputScale;
B.PDFDataRangeTransport;
B.PDFDateString;
B.PDFWorker;
B.PasswordResponses;
B.PermissionFlag;
B.PixelsPerInch;
B.RenderingCancelledException;
B.TextLayer;
B.UnexpectedResponseException;
B.Util;
B.VerbosityLevel;
B.XfaLayer;
B.build;
B.createValidAbsoluteUrl;
B.fetchData;
var ag = B.getDocument;
B.getFilenameFromUrl;
B.getPdfFilenameFromUrl;
B.getXfaPageViewport;
B.isDataScheme;
B.isPdfFile;
B.noContextMenu;
B.normalizeUnicode;
B.setLayerDimensions;
B.shadow;
B.version;
rg.workerSrc = "../node_modules/pdfjs-dist/build/pdf.worker.mjs";
const lg = async (d, t, e) => {
  t.innerHTML = "", ag(d).promise.then((i) => {
    for (let n = 1; n <= i.numPages; n++)
      i.getPage(n).then((a) => {
        const o = document.createElement("canvas");
        t.appendChild(o);
        const h = o.getContext("2d"), c = a.getViewport({ scale: 4 });
        o.height = c.height, o.width = c.width;
        const u = {
          canvasContext: h,
          viewport: c
        };
        a.render(u);
      }).then(() => {
        var a;
        af(t, "viewer_ts__page"), (a = t.querySelector(`canvas:nth-child(${e})`)) == null || a.classList.add("viewer_ts__page__active");
      });
  });
};
export {
  lg as renderPDF
};
