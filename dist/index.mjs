(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-popover--inline .ce-popover--nested .ce-popover__container{width:min-content!important;min-width:unset!important}.ce-popover--inline .ce-popover--nested .ce-popover__items{width:max-content}.editorjs__color-selector-container{display:grid;gap:10px}.editorjs__color-selector__container-item{width:30px;height:30px;display:block;cursor:pointer;border-radius:360px}.editorjs__color-selector__container-item{width:30px;height:30px;display:block;cursor:pointer;border-radius:360px;transition:transform .2s ease}.editorjs__color-selector__container-item:hover{transform:scale(1.2)}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var c = Object.defineProperty;
var i = (n, t, e) => t in n ? c(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var s = (n, t, e) => i(n, typeof t != "symbol" ? t + "" : t, e);
import { IconColor as a } from "@codexteam/icons";
class l {
  constructor(t) {
    s(this, "api");
    s(this, "tag", "SPAN");
    s(this, "class", "cdx-text-color");
    s(this, "defaultColor", "#2644FF");
    s(this, "lastRange", null);
    s(this, "colors", [
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
    s(this, "columns", 7);
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
    return t.type = "button", t.innerHTML = a, t.classList.add(this.api.styles.inlineToolButton), t;
  }
  surround(t) {
    this.lastRange = t;
  }
  wrapAndColor(t, e) {
    if (!t)
      return;
    const o = t.extractContents(), r = document.createElement(this.tag);
    r.classList.add(this.class), r.appendChild(o), r.style.color = e, r.innerHTML = r.textContent || "", t.insertNode(r), this.api.selection.expandToTag(r);
  }
  renderActions() {
    const t = document.createElement("div");
    return t.classList.add("editorjs__color-selector-container"), t.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`, this.colors.forEach((e) => {
      const o = document.createElement("div");
      o.classList.add("editorjs__color-selector__container-item"), o.style.backgroundColor = e, o.onclick = () => {
        this.wrapAndColor(this.lastRange, e);
      }, t.append(o);
    }), t;
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
class p extends l {
  static get sanitize() {
  }
}
export {
  p as ColorPickerWithoutSanitize,
  l as default
};
