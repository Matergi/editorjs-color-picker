(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-popover--inline .ce-popover--nested .ce-popover__container{width:auto!important;min-width:unset!important}.ce-popover--inline .ce-popover--nested .ce-popover__items{width:max-content}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var i = Object.defineProperty;
var r = (l, t, e) => t in l ? i(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var n = (l, t, e) => r(l, typeof t != "symbol" ? t + "" : t, e);
import { IconColor as c } from "@codexteam/icons";
class a {
  constructor(t) {
    n(this, "api");
    n(this, "tag", "SPAN");
    n(this, "class", "cdx-text-color");
    n(this, "defaultColor", "#2644FF");
    n(this, "lastRange", null);
    n(this, "colors", [
      "#182a4e",
      "#0055cc",
      "#1f6a83",
      "#206e4e",
      "#e56910",
      "#ae2e24",
      "#5e4db2",
      "#758195",
      "#1e7afd",
      "#2998bd",
      "#23a06b",
      "#fea363",
      "#c9372c",
      "#8270db"
    ]);
    n(this, "columns", 7);
    const { api: e, config: o } = t;
    this.api = e, o.colors && (this.colors = o.colors), o.columns && (this.columns = o.columns);
  }
  static get title() {
    return "Color";
  }
  static get isInline() {
    return !0;
  }
  render() {
    const t = document.createElement("button");
    return t.type = "button", t.innerHTML = c, t.classList.add(this.api.styles.inlineToolButton), t;
  }
  surround(t) {
    this.lastRange = t;
  }
  wrapAndColor(t, e) {
    if (!t)
      return;
    const o = t.extractContents(), s = document.createElement(this.tag);
    s.classList.add(this.class), s.appendChild(o), s.style.color = e, s.innerHTML = s.textContent || "", t.insertNode(s), this.api.selection.expandToTag(s);
  }
  renderActions() {
    const e = document.createElement("div");
    return e.style.display = "grid", e.style.gridTemplateColumns = "repeat(auto-fill, minmax(30px, 1fr))", e.style.gap = "5px", e.style.width = this.colors.length > this.columns ? `${30 * this.columns + 5 * (this.columns - 1)}px` : `${30 * this.colors.length + 5 * (this.colors.length - 1)}px`, this.colors.forEach((o) => {
      const s = document.createElement("div");
      s.style.width = "30px", s.style.height = "30px", s.style.cursor = "pointer", s.style.backgroundColor = o, s.onclick = () => {
        this.wrapAndColor(this.lastRange, o);
      }, e.append(s);
    }), e;
  }
  /**
   * Sanitizer rules
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      span: {
        style: {
          color: !0
        }
      }
    };
  }
}
class p extends a {
  static get sanitize() {
  }
}
export {
  p as ColorPickerWithoutSanitize,
  a as default
};
