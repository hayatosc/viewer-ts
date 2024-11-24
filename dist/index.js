import './index2.css';var c = Object.defineProperty;
var p = (s, e, t) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => p(s, typeof e != "symbol" ? e + "" : e, t);
const l = {
  display: "auto",
  duration: 600,
  page: 1,
  gradients: !0,
  turnCorners: ["bl", "br"]
};
class u {
  constructor(e, t) {
    n(this, "element");
    n(this, "options");
    n(this, "_page");
    n(this, "window");
    this.element = typeof e == "string" ? d(e) : e, this.options = { ...l, ...t }, this._page = this.options.page || 1, this.window = window, this.eventListeners();
  }
  async mount() {
    var e;
    if (this.element.classList.add("viewer_ts__container"), this.options.type === "pdf") {
      if (this.options.src)
        try {
          const { renderPDF: t } = await import("./pdf-64pMb1_N.js");
          await t(this.options.src, this.element, this._page);
        } catch (t) {
          console.error("Error occurred in PDF", t);
        }
    } else
      _(this.element, "viewer_ts__page"), (e = this.element.querySelector(`canvas:nth-child(${this.page})`)) == null || e.classList.add("viewer_ts__page__active");
  }
  get page() {
    return this._page;
  }
  set page(e) {
    var t, a, o;
    this._page = e, e < 1 && (this._page = 1), (t = this.element.querySelector(".viewer_ts__page__active")) == null || t.classList.remove("viewer_ts__page__active"), (a = this.element.querySelector(`.viewer_ts__page:nth-child(${this._page})`)) == null || a.classList.add("viewer_ts__page__active"), (o = this.options.hooks) != null && o.onPageUpdate && this.options.hooks.onPageUpdate(this._page);
  }
  next() {
    this.page += 1, console.log(this.page);
  }
  previous() {
    this.page -= 1, console.log(this.page);
  }
  eventListeners() {
    let e = 0, t = 0, a = 0, o = 0;
    this.element.addEventListener("touchstart", (i) => {
      e = i.touches[0].pageX, t = i.touches[0].pageY;
    }), this.element.addEventListener("touchmove", (i) => {
      a = i.touches[0].pageX, o = i.touches[0].pageY;
    }), this.element.addEventListener("touchend", (i) => {
      const r = e - a, h = t - o;
      Math.abs(r) < 100 && Math.abs(h) < 100 || Math.abs(r) > Math.abs(h) && (r > 0 ? this.next() : this.previous());
    });
  }
}
const d = (s) => {
  const e = document.querySelector(s);
  if (!e)
    throw new Error(`cannot find selector: '${s}'`);
  return e;
}, _ = (s, e) => {
  s.querySelectorAll("*").forEach((t) => {
    t.classList.add(e);
  });
};
export {
  u as Viewer,
  _ as addChildClass
};
