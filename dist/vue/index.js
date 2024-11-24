import { defineComponent as c, ref as u, useTemplateRef as i, onMounted as f, openBlock as l, createElementBlock as _ } from "vue";
import { Viewer as m } from "../index.js";
import '../index.css';const d = /* @__PURE__ */ c({
  __name: "Viewer",
  props: {
    options: {}
  },
  setup(o, { expose: n }) {
    let e;
    const r = o, t = u(0), a = {
      ...r.options,
      hooks: {
        onPageUpdate: (p) => {
          t.value = p;
        }
      }
    }, s = i("book");
    return f(() => {
      if (!s.value) return new Error("Viewer: dom is not found");
      e = new m(s.value, a), e.mount();
    }), n({
      next: () => e.next(),
      previous: () => e.previous(),
      page: t.value
      // In the future, we can control the current page but now it's read-only.
    }), (p, k) => (l(), _("div", {
      ref_key: "book",
      ref: e
    }, null, 512));
  }
}), v = (o, n) => {
  const e = o.__vccOpts || o;
  for (const [r, t] of n)
    e[r] = t;
  return e;
}, V = /* @__PURE__ */ v(d, [["__scopeId", "data-v-e45789b9"]]);
export {
  V as default
};
