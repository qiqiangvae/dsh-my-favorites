window.__ModuleLoader__.load({ id: 'dsh-my-favorites', factory: (require) => { var module = { exports: {} }; var exports = module.exports;
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.tsx
var client_exports = {};
__export(client_exports, {
  NS: () => NS,
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var import_react = require("react");
var ReactDOM = __toESM(require("react-dom"), 1);

// src/constants.ts
var MIN_RECENT = 5;
var MAX_RECENT = 20;
var DEFAULT_RECENT = 10;

// src/client.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var NS = "my-favorites";
var STYLE_ID = "dsh-my-favorites";
function ensureStyles() {
  if (document.querySelector(`style[data-plugin="${STYLE_ID}"]`)) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = STYLE_ID;
  style.textContent = `
.mf-switcher-toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:9999;background:var(--dsw-alias-bg-module-platform,#fff);border:1px solid var(--dsw-alias-border-l2,#d9dce1);border-radius:8px;padding:8px 14px;font-size:13px;color:var(--dsw-alias-label-primary,#1f2329);box-shadow:0 4px 16px rgba(0,0,0,.12)}.mf-sessionSettings{display:flex;flex-direction:column;gap:10px}.mf-modeGroup{display:flex;gap:14px;align-items:center;flex-wrap:wrap}.mf-modeGroup label{display:inline-flex;align-items:center;gap:5px;font-size:13px;cursor:pointer}.mf-sessionSettings .mf-countRow{display:flex;align-items:center;gap:8px}.mf-sessionSettings .mf-countRow input{width:70px}.mf-sessionSettings .mf-modeNote{color:var(--dsw-alias-label-secondary,#697586);font-size:12px}
.mf-headerButton,.mf-iconButton,.mf-urlTag{border:0;background:transparent;color:var(--dsw-alias-label-secondary,#697586);font:inherit;cursor:pointer}.mf-headerButton,.mf-iconButton{align-items:center;justify-content:center;display:inline-flex;border-radius:7px;width:30px;height:30px}.mf-headerButton:hover,.mf-iconButton:hover,.mf-urlTag:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(0,0,0,.07));color:var(--dsw-alias-label-primary,#1f2329)}.mf-headerButton[data-active=true]{color:var(--dsw-alias-state-warn-primary,#e7a100)}.mf-belowNewSessionBridge{position:relative;padding:4px 8px;margin:4px 0}.mf-favorites{display:flex;flex-direction:column;gap:6px}.mf-urlTags{display:flex;flex-wrap:wrap;gap:6px}.mf-urlTag{align-items:center;justify-content:center;border:1px solid var(--dsw-alias-border-l2,#d9dce1);border-radius:7px;display:inline-flex;min-width:30px;max-width:72px;height:30px;padding:0 7px;overflow:hidden;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.mf-favicon{width:16px;height:16px;max-width:16px;max-height:16px;min-width:0;min-height:0;object-fit:contain;flex:0 0 16px;align-self:center}.mf-folderButton{box-sizing:border-box;align-items:center;gap:6px;border:0;background:transparent;border-radius:8px;display:flex;width:100%;height:34px;padding:0 8px;color:var(--dsw-alias-label-primary,#1f2329);font:inherit;font-size:14px;line-height:20px;text-align:left;cursor:pointer;user-select:none}.mf-folderButton:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(0,0,0,.07))}.mf-folderIcon{width:16px;height:20px;color:var(--dsw-alias-state-warn-primary,#e7a100);justify-content:center;align-items:center;display:inline-flex;flex:none;font-size:14px;line-height:20px}.mf-folderLabel{flex:1;min-width:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mf-caret{width:16px;height:20px;color:var(--dsw-alias-label-caption,#9aa4b2);justify-content:center;align-items:center;display:inline-flex;flex:none;transition:transform .15s var(--ds-ease-in-out,ease)}.mf-folderButton[data-open=true] .mf-caret{transform:rotate(90deg)}.mf-sessionFolder{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow:auto;padding-top:2px}.mf-sessionRow{align-items:center;box-sizing:border-box;height:32px;border-radius:8px;cursor:pointer;user-select:none;color:var(--dsw-alias-label-primary,#1f2329);display:flex;gap:0}.mf-slot{width:16px;height:20px;color:var(--dsw-alias-label-tertiary,#9aa4b2);justify-content:center;align-items:center;display:inline-flex;flex:none}.mf-sessionRow:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(0,0,0,.07))}.mf-sessionRow[data-drag-ready=true]{cursor:grab}.mf-sessionRow[data-dragging=true]{opacity:.45}.mf-sessionRow[data-drop-target=true]{box-shadow:inset 0 2px 0 var(--dsw-alias-state-business-primary,#2468f2)}.mf-sessionRow[data-active=true] .mf-sessionButton{color:var(--dsw-alias-state-business-primary,#2468f2)}.mf-sessionButton{border:0;background:transparent;color:var(--dsw-alias-label-primary,#1f2329);font:inherit;cursor:pointer;flex:1;min-width:0;overflow:hidden;margin:0 6px 0 4px;text-align:left;text-overflow:ellipsis;white-space:nowrap;font-size:14px;line-height:20px}.mf-switcher-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.32);display:flex;align-items:center;justify-content:center}.mf-switcher-panel{background:var(--dsw-specific-menu,var(--dsw-alias-bg-module-platform,#fff));border:1px solid var(--dsw-alias-border-inverted,var(--dsw-alias-border-l2,#d9dce1));border-radius:12px;min-width:320px;max-width:560px;max-height:60vh;display:flex;flex-direction:column;box-shadow:var(--dsw-shadow-lv3,0 12px 40px rgba(0,0,0,.22));overflow:hidden}.mf-switcher-head{padding:12px 16px;border-bottom:1px solid var(--dsw-alias-border-l1,#d9dce1)}.mf-switcher-head strong{display:block;font-size:14px;line-height:20px;color:var(--dsw-alias-label-primary,#1f2329);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mf-switcher-head small{display:block;margin-top:2px;font-size:11px;color:var(--dsw-alias-label-caption,#697586);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mf-switcher-list{display:flex;flex-direction:column;padding:6px;overflow-y:auto}.mf-switcher-item{display:flex;align-items:center;height:32px;padding:0 8px;border-radius:8px;border:0;background:transparent;color:var(--dsw-alias-label-primary,#1f2329);cursor:pointer;user-select:none;appearance:none}
mf-switcher-item:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(0,0,0,.07))}.mf-switcher-item[data-active=true]{background:var(--dsw-alias-interactive-bg-hover,rgba(0,0,0,.07))}.mf-switcher-item .mf-switcher-title{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;line-height:20px}.mf-switcher-item .mf-switcher-workspace{flex:none;margin-left:8px;padding:0 6px;border-radius:4px;background:var(--dsw-alias-interactive-bg-hover,rgba(0,0,0,.06));color:var(--dsw-alias-label-caption,#697586);font-size:11px;line-height:18px;max-width:40%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mf-switcher-item[data-active=true] .mf-switcher-workspace{background:rgba(255,255,255,.2);color:inherit}.mf-switcher-hint{padding:8px 16px;border-top:1px solid var(--dsw-alias-border-l1,#d9dce1);font-size:11px;color:var(--dsw-alias-label-caption,#697586)}.mf-invalid{color:var(--dsw-alias-label-tertiary,#9aa4b2);text-decoration:line-through}.mf-remove{color:var(--dsw-alias-label-tertiary,#9aa4b2);flex:none;opacity:0;pointer-events:none;transition:opacity .12s}.mf-sessionRow:hover .mf-remove,.mf-sessionRow:focus-within .mf-remove{opacity:1;pointer-events:auto}.mf-empty{color:var(--dsw-alias-label-tertiary,#9aa4b2);font-size:12px;line-height:1.5;padding:7px 8px}.mf-settings{max-width:760px;display:flex;flex-direction:column;gap:16px}.mf-settings h2{margin:0}.mf-card{border:1px solid var(--dsw-alias-border-l2,#d9dce1);border-radius:12px;padding:16px}.mf-toggleRow{display:inline-flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;margin-top:12px}.mf-form{display:grid;grid-template-columns:1.1fr 2fr 1fr auto auto;gap:8px;align-items:center;margin-top:12px}.mf-urlRow{display:grid;grid-template-columns:1.1fr 2fr 1fr auto auto auto;gap:8px;align-items:center}.mf-field{border:1px solid var(--dsw-alias-border-l2,#d9dce1);border-radius:7px;background:transparent;color:inherit;padding:7px 8px;font:inherit;min-width:0}.mf-primary{border:0;border-radius:7px;background:var(--dsw-alias-state-business-primary,#2468f2);color:var(--dsw-alias-label-primary-inverted,#fff);padding:8px 12px;cursor:pointer}.mf-danger{color:var(--dsw-alias-state-error-primary,#d03050)}.mf-urlList{display:flex;flex-direction:column;gap:8px;margin-top:12px}.mf-error{color:var(--dsw-alias-state-error-primary,#d03050);font-size:12px;margin:8px 0 0}@media(max-width:600px){.mf-form,.mf-urlRow{grid-template-columns:1fr}}
`;
  document.head.append(style);
  return () => style.remove();
}
function useSettings(scope) {
  const snapshot = (0, import_react.useSyncExternalStore)(scope.subscribe.bind(scope), scope.getSnapshot.bind(scope));
  const value = snapshot.value ?? { sessions: [], urls: [] };
  return { sessions: value.sessions ?? [], urls: value.urls ?? [], mode: value.mode ?? "favorites", recentCount: clampRecentCount(value.recentCount ?? DEFAULT_RECENT), urlsEnabled: value.urlsEnabled ?? true };
}
function clampRecentCount(value) {
  const num = Number.isFinite(value) ? value : DEFAULT_RECENT;
  return Math.min(MAX_RECENT, Math.max(MIN_RECENT, Math.round(num)));
}
function sessionTitle(session, fallback) {
  return session?.displayTitle ?? session?.title ?? fallback;
}
function workspaceTitleOf(title, path) {
  if (title != null && title !== "") return title;
  if (path != null && path !== "") {
    const base = path.replace(/[/\\]+$/, "").split(/[/\\]/).pop() ?? "";
    if (base) return base;
  }
  return "";
}
function validUrl(value) {
  try {
    return ["http:", "https:", "mailto:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}
function Star({ filled }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: filled ? "\u2605" : "\u2606" });
}
function FavoriteToggle({ sessionId, useSessions, scope }) {
  const value = useSettings(scope);
  const favorite = value.sessions.find((item) => item.id === sessionId);
  const liveTitle = useSessions((state) => sessionTitle(state.byId?.[sessionId], sessionId));
  const title = liveTitle === sessionId ? favorite?.title ?? sessionId : liveTitle;
  const toggle = () => scope.set("sessions", favorite ? value.sessions.filter((item) => item.id !== sessionId) : [...value.sessions, { id: sessionId, title }]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "mf-headerButton", "data-active": Boolean(favorite), type: "button", onClick: toggle, title: favorite ? "\u53D6\u6D88\u6536\u85CF\u4F1A\u8BDD" : "\u6536\u85CF\u4F1A\u8BDD", "aria-label": favorite ? "\u53D6\u6D88\u6536\u85CF\u4F1A\u8BDD" : "\u6536\u85CF\u4F1A\u8BDD", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { filled: Boolean(favorite) }) });
}
function faviconUrl(value) {
  try {
    const parsed = new URL(value);
    return `${parsed.protocol}//${parsed.host}/favicon.ico`;
  } catch {
    return "";
  }
}
function UrlTag({ item }) {
  const [faviconFailed, setFaviconFailed] = (0, import_react.useState)(false);
  const favicon = item.useFavicon && !faviconFailed ? faviconUrl(item.url) : "";
  const fallback = item.icon || item.name;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "mf-urlTag", type: "button", title: `${item.name}
${item.url}`, "aria-label": `\u6253\u5F00\u7F51\u5740\uFF1A${item.name}`, onClick: () => {
    if (validUrl(item.url)) window.open(item.url, "_blank", "noopener,noreferrer");
  }, children: favicon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "mf-favicon", src: favicon, alt: "", onError: () => setFaviconFailed(true) }) : fallback });
}
function UrlTags({ urls }) {
  if (!urls.length) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-urlTags", "aria-label": "\u6536\u85CF\u7F51\u5740", children: urls.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UrlTag, { item }, item.id)) });
}
function SessionFolder({ sessions, scope, useSessions, openSession }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [commandDown, setCommandDown] = (0, import_react.useState)(false);
  const [dragging, setDragging] = (0, import_react.useState)(null);
  const [target, setTarget] = (0, import_react.useState)(null);
  const roster = useSessions((state) => state.byId ?? {});
  const current = useSessions((state) => state.current);
  (0, import_react.useEffect)(() => {
    const down = (event) => setCommandDown(event.metaKey);
    const up = () => setCommandDown(false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", up);
    };
  }, []);
  const reorder = async (sourceId, targetId) => {
    if (sourceId === targetId) return;
    const next = [...sessions];
    const source = next.findIndex((item2) => item2.id === sourceId);
    const destination = next.findIndex((item2) => item2.id === targetId);
    if (source < 0 || destination < 0) return;
    const [item] = next.splice(source, 1);
    next.splice(destination, 0, item);
    await scope.set("sessions", next);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "mf-folderButton", "data-open": open, type: "button", onClick: () => setOpen((value) => !value), "aria-expanded": open, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mf-folderIcon", "aria-hidden": "true", children: "\u2605" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mf-caret", "aria-hidden": "true", children: "\u203A" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "mf-folderLabel", children: [
        "\u4F1A\u8BDD (",
        sessions.length,
        ")"
      ] })
    ] }),
    open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-sessionFolder", "aria-label": "\u6536\u85CF\u4F1A\u8BDD", children: sessions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-empty", children: "\u5C1A\u672A\u6536\u85CF\u4F1A\u8BDD\uFF1B\u5728\u4F1A\u8BDD\u6807\u9898\u680F\u70B9\u51FB \u2606 \u6536\u85CF\u5F53\u524D\u4F1A\u8BDD\u3002" }) : sessions.map((item) => {
      const live = roster[item.id];
      const title = sessionTitle(live, item.title);
      const invalid = !live;
      const dragReady = commandDown;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-sessionRow", "data-active": item.id === current, "data-drag-ready": dragReady, "data-dragging": dragging === item.id, "data-drop-target": target === item.id, draggable: dragReady, title: dragReady ? "\u6309\u4F4F \u2318 \u62D6\u52A8\u4EE5\u6392\u5E8F" : void 0, onDragStart: (event) => {
        if (!commandDown) {
          event.preventDefault();
          return;
        }
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", item.id);
        setDragging(item.id);
      }, onDragOver: (event) => {
        if (!dragging || dragging === item.id) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        setTarget(item.id);
      }, onDrop: (event) => {
        event.preventDefault();
        const source = event.dataTransfer.getData("text/plain");
        if (source) reorder(source, item.id);
        setDragging(null);
        setTarget(null);
      }, onDragEnd: () => {
        setDragging(null);
        setTarget(null);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mf-slot", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: `mf-sessionButton ${invalid ? "mf-invalid" : ""}`, type: "button", disabled: invalid, title: invalid ? `${item.title}\uFF08\u5DF2\u5931\u6548\uFF09` : title, onClick: () => {
          openSession(item.id);
        }, children: invalid ? `${item.title}\uFF08\u5DF2\u5931\u6548\uFF09` : title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "mf-iconButton mf-remove", type: "button", title: "\u79FB\u9664\u6536\u85CF", "aria-label": `\u79FB\u9664\u6536\u85CF\uFF1A${item.title}`, onClick: () => scope.set("sessions", sessions.filter((entry) => entry.id !== item.id)), children: "\xD7" })
      ] }, item.id);
    }) })
  ] });
}
function FavoritesLauncher({ scope, useSessions, openSession }) {
  const value = useSettings(scope);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-favorites", children: [
    value.urlsEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UrlTags, { urls: value.urls }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionFolder, { sessions: value.sessions, scope, useSessions, openSession })
  ] });
}
function SidebarBelowNewSessionBridge({ scope, useSessions, openSession, wide }) {
  const [host, setHost] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    const candidates = [...document.querySelectorAll('button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"], button[aria-label="New session"]')];
    const newSession = candidates.find((button) => button.className.includes("newSession"));
    if (!newSession?.parentElement) return;
    const container = document.createElement("div");
    container.className = "mf-belowNewSessionBridge";
    newSession.insertAdjacentElement("afterend", container);
    setHost(container);
    return () => container.remove();
  }, []);
  (0, import_react.useEffect)(() => {
    if (host) host.style.display = wide ? "" : "none";
  }, [host, wide]);
  if (!wide) return null;
  return host ? ReactDOM.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavoritesLauncher, { scope, useSessions, openSession }), host) : null;
}
function UrlSettingsCard({ scope }) {
  const value = useSettings(scope);
  const [draft, setDraft] = (0, import_react.useState)({ name: "", url: "", icon: "", useFavicon: false });
  const [error, setError] = (0, import_react.useState)("");
  const add = async () => {
    if (!draft.name.trim()) return setError("\u8BF7\u586B\u5199\u540D\u79F0\u3002");
    if (!validUrl(draft.url.trim())) return setError("\u7F51\u5740\u4EC5\u652F\u6301 http\u3001https \u6216 mailto\u3002");
    await scope.set("urls", [...value.urls, { id: crypto.randomUUID(), name: draft.name.trim(), url: draft.url.trim(), icon: draft.icon.trim(), useFavicon: draft.useFavicon }]);
    setDraft({ name: "", url: "", icon: "", useFavicon: false });
    setError("");
  };
  const update = (id, patch) => scope.set("urls", value.urls.map((entry) => entry.id === id ? { ...entry, ...patch } : entry));
  const move = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= value.urls.length) return;
    const next = [...value.urls];
    [next[index], next[target]] = [next[target], next[index]];
    scope.set("urls", next);
  };
  const fields = (item, patch) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "mf-field", "aria-label": "\u540D\u79F0", value: item.name, onChange: (e) => patch({ name: e.target.value }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "mf-field", "aria-label": "\u7F51\u5740", value: item.url, onChange: (e) => patch({ url: e.target.value }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "mf-field", "aria-label": "\u81EA\u5B9A\u4E49\u56FE\u6807", placeholder: "\u81EA\u5B9A\u4E49 icon", value: item.icon, onChange: (e) => patch({ icon: e.target.value }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { title: "\u4F7F\u7528 {\u534F\u8BAE}://{\u57DF\u540D}/favicon.ico\uFF1B\u52A0\u8F7D\u5931\u8D25\u65F6\u56DE\u9000\u4E3A\u81EA\u5B9A\u4E49 icon \u6216\u540D\u79F0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox", checked: item.useFavicon, onChange: (e) => patch({ useFavicon: e.target.checked }) }),
      " \u4F7F\u7528\u7F51\u7AD9\u56FE\u6807"
    ] })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\u7F51\u5740\u8BBE\u7F6E" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "mf-toggleRow", title: "\u5173\u95ED\u540E\u4FA7\u680F\u4E0D\u518D\u663E\u793A\u7F51\u5740\u5FEB\u6377\u6807\u7B7E", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox", checked: value.urlsEnabled, onChange: (e) => scope.set("urlsEnabled", e.target.checked) }),
      " \u542F\u7528\u6536\u85CF\u7684\u7F51\u7AD9"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-urlList", children: value.urls.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-urlRow", children: [
      fields(item, (patch) => update(item.id, patch)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "mf-iconButton", type: "button", onClick: () => move(index, -1), disabled: index === 0, children: "\u2191" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "mf-iconButton mf-danger", type: "button", onClick: () => scope.set("urls", value.urls.filter((entry) => entry.id !== item.id)), children: "\xD7" })
    ] }, item.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "mf-field", placeholder: "\u540D\u79F0", value: draft.name, onChange: (e) => setDraft({ ...draft, name: e.target.value }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "mf-field", placeholder: "https://example.com", value: draft.url, onChange: (e) => setDraft({ ...draft, url: e.target.value }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "mf-field", placeholder: "\u81EA\u5B9A\u4E49 icon\uFF08\u53EF\u9009\uFF09", value: draft.icon, onChange: (e) => setDraft({ ...draft, icon: e.target.value }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { title: "\u4F7F\u7528\u7F51\u7AD9\u81EA\u5DF1\u7684 favicon", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox", checked: draft.useFavicon, onChange: (e) => setDraft({ ...draft, useFavicon: e.target.checked }) }),
        " \u4F7F\u7528\u7F51\u7AD9\u56FE\u6807"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "mf-primary", type: "button", onClick: add, children: "\u6DFB\u52A0" })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-error", children: error })
  ] });
}
function SessionSettingsCard({ scope }) {
  const value = useSettings(scope);
  const [countDraft, setCountDraft] = (0, import_react.useState)(String(value.recentCount ?? DEFAULT_RECENT));
  (0, import_react.useEffect)(() => setCountDraft(String(value.recentCount ?? DEFAULT_RECENT)), [value.recentCount]);
  const commitCount = () => {
    const parsed = clampRecentCount(Number(countDraft));
    setCountDraft(String(parsed));
    if (parsed !== value.recentCount) scope.set("recentCount", parsed);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\u4F1A\u8BDD\u5207\u6362" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-sessionSettings", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-modeGroup", role: "radiogroup", "aria-label": "\u5207\u6362\u6A21\u5F0F", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "radio", name: "switcher-mode", checked: value.mode !== "recent", onChange: () => {
            if (value.mode !== "favorites") scope.set("mode", "favorites");
          } }),
          " \u6536\u85CF\u7684\u4F1A\u8BDD"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "radio", name: "switcher-mode", checked: value.mode === "recent", onChange: () => {
            if (value.mode !== "recent") scope.set("mode", "recent");
          } }),
          " \u6700\u8FD1\u7684\u4F1A\u8BDD"
        ] })
      ] }),
      value.mode === "recent" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-countRow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: "mf-recent-count", children: "\u6700\u8FD1 N \u4E2A\u4F1A\u8BDD" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { id: "mf-recent-count", className: "mf-field", type: "number", min: MIN_RECENT, max: MAX_RECENT, value: countDraft, onChange: (e) => setCountDraft(e.target.value), onBlur: commitCount, onKeyDown: (e) => {
          if (e.key === "Enter") e.target.blur();
        } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "mf-modeNote", children: [
        "\u5FEB\u6377\u952E ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "\u2318\u2325`" }),
        " / ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "Ctrl+`" }),
        " \u5FEB\u901F\u5207\u6362\uFF1B\u6309\u4F4F\u5F39\u51FA\u5217\u8868\u5FAA\u73AF\u9009\u62E9\u3002\u300C\u6700\u8FD1\u300D\u6309\u4F1A\u8BDD\u6700\u8FD1\u6D3B\u52A8\u65F6\u95F4\u5012\u5E8F\uFF08\u542B\u5F53\u524D\u4F1A\u8BDD\uFF09\u3002"
      ] })
    ] })
  ] });
}
function SettingsCard({ scope }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "mf-settings", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u6536\u85CF" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u7F51\u5740\u6807\u7B7E\u5C55\u793A\u4F18\u5148\u7EA7\uFF1A\u7F51\u7AD9\u56FE\u6807 \u2192 \u81EA\u5B9A\u4E49 icon \u2192 \u540D\u79F0\u3002" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionSettingsCard, { scope }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UrlSettingsCard, { scope })
  ] });
}
var SWITCHER_HOLD_MS = 250;
var SWITCHER_STEP_MS = 160;
var SWITCHER_FIRST_STEP_MS = 500;
function primaryModifier(event) {
  const isMac = navigator.platform.startsWith("Mac") || navigator.userAgent.includes("Macintosh");
  if (isMac) return event.metaKey && event.altKey;
  return event.ctrlKey;
}
function touchOrder(list, id) {
  const without = list.filter((entry) => entry !== id);
  return [id, ...without];
}
var SwitcherMachine = class {
  listeners = /* @__PURE__ */ new Set();
  lru = [];
  current;
  sessions = [];
  roster = {};
  recentIds = [];
  listPhase = "pending";
  mode = "favorites";
  recentCount = DEFAULT_RECENT;
  open = false;
  activeIndex = 0;
  hint = null;
  hintTimer = null;
  phase = "idle";
  lastStepAt = 0;
  holdTimer = null;
  openSession = () => {
  };
  disposers = [];
  /** session id → 所属工作区项目名（title，缺失时回退 path basename）。 */
  workspaceTitleById = {};
  start(opts) {
    this.openSession = opts.openSession;
    const sync = () => {
      const list = opts.getList();
      this.roster = list.byId ?? {};
      this.recentIds = list.ids ?? [];
      this.listPhase = list.phase ?? "pending";
      if (list.current && list.current !== this.current) {
        this.lru = touchOrder(this.lru, list.current);
      }
      this.current = list.current;
      const settings = opts.getSettings();
      this.sessions = settings.sessions ?? [];
      this.mode = settings.mode ?? "favorites";
      this.recentCount = clampRecentCount(settings.recentCount ?? DEFAULT_RECENT);
      const wsTitles = {};
      const wsItems = opts.getWorkspaces().items ?? [];
      for (const ws of wsItems) {
        const name = workspaceTitleOf(ws.title, ws.path);
        if (name && ws.sessionIds) for (const sid of ws.sessionIds) wsTitles[sid] = name;
      }
      this.workspaceTitleById = wsTitles;
      this.lru = this.lru.filter((id) => this.roster[id]);
      if (this.listPhase === "ready") {
        const alive = this.sessions.filter((s) => this.roster[s.id]);
        if (alive.length !== this.sessions.length) {
          this.sessions = alive;
          void opts.setSettings("sessions", alive);
        }
      }
      this.emit();
    };
    this.disposers = [opts.subscribeList(() => sync()), opts.subscribeSettings(() => sync()), opts.subscribeWorkspaces(() => sync())];
    sync();
    this.disposers.push(this.installKeyboard());
  }
  installKeyboard() {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (this.open) {
          event.preventDefault();
          this.close();
        }
        return;
      }
      if (event.code !== "Backquote") return;
      if (!primaryModifier(event)) return;
      event.preventDefault();
      if (event.repeat) {
        if (this.open) {
          this.step();
        }
        return;
      }
      if (this.open) {
        this.step();
        return;
      }
      this.phase = "pending";
      this.clearHold();
      this.holdTimer = window.setTimeout(() => {
        this.holdTimer = null;
        if (this.phase !== "pending") return;
        this.phase = "idle";
        this.openList();
      }, SWITCHER_HOLD_MS);
    };
    const onKeyUp = (event) => {
      const isMod = event.key === "Meta" || event.key === "Control" || event.key === "Alt";
      if (this.open) {
        if (isMod) {
          this.confirm();
        }
        return;
      }
      if (this.phase === "pending" && isMod) {
        this.phase = "idle";
        this.clearHold();
        this.quickStep();
      }
    };
    const onBlur = () => this.close();
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("keyup", onKeyUp, true);
    window.addEventListener("blur", onBlur, true);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("keyup", onKeyUp, true);
      window.removeEventListener("blur", onBlur, true);
      this.clearHold();
    };
  }
  clearHold() {
    if (this.holdTimer != null) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
  }
  items() {
    if (this.mode === "recent") return this.recentItems();
    return this.favoriteItems();
  }
  /** 收藏模式：当前会话 + LRU（最近访问）+ 剩余收藏。 */
  favoriteItems() {
    const favLookup = new Set(this.sessions.map((s) => s.id).filter((id) => this.roster[id]));
    const lruFav = this.lru.filter((id) => favLookup.has(id));
    const currentIn = this.current && favLookup.has(this.current) ? this.current : null;
    const ordered = currentIn ? [currentIn, ...lruFav.filter((id) => id !== currentIn)] : lruFav;
    for (const id of this.sessions.map((s) => s.id)) if (favLookup.has(id) && !ordered.includes(id)) ordered.push(id);
    return ordered.map((id) => ({ id, title: sessionTitle(this.roster[id], id), sub: this.roster[id]?.cwd, workspaceTitle: this.workspaceTitleById[id] }));
  }
  /** 最近模式：以 LRU（最近访问）为排序源，冷启动时用宿主 updatedAt 倒序 ids 兜底；过滤空会话（blank）与子 agent 会话后取前 N。 */
  recentItems() {
    const ordered = [...this.lru.filter((id) => this.roster[id])];
    for (const id of this.recentIds) if (this.roster[id] && !ordered.includes(id)) ordered.push(id);
    const windowSize = this.recentCount + 32;
    return ordered.slice(0, windowSize).map((id) => this.roster[id]).filter((session) => !session.blank && !session.origin).slice(0, this.recentCount).map((session) => ({ id: session.id, title: sessionTitle(session, session.id), sub: session.cwd, workspaceTitle: this.workspaceTitleById[session.id] }));
  }
  openList() {
    const list = this.items();
    if (list.length === 0) {
      this.showHint("\u6CA1\u6709\u53EF\u5207\u6362\u7684\u4F1A\u8BDD\u3002");
      return;
    }
    const currentIdx = list.findIndex((item) => item.id === this.current);
    this.activeIndex = currentIdx === 0 && list.length > 1 ? 1 : 0;
    this.lastStepAt = Date.now() + (SWITCHER_FIRST_STEP_MS - SWITCHER_STEP_MS);
    this.open = true;
    this.emit();
  }
  step() {
    const list = this.items();
    if (!list.length) return;
    const now = Date.now();
    if (now - this.lastStepAt < SWITCHER_STEP_MS) return;
    this.lastStepAt = now;
    this.activeIndex = (this.activeIndex + 1) % list.length;
    this.emit();
  }
  confirm() {
    const list = this.items();
    const target = list[Math.min(Math.max(this.activeIndex, 0), list.length - 1)];
    const wasOpen = this.open;
    this.open = false;
    this.emit();
    if (wasOpen && target && target.id !== this.current) this.openSession(target.id);
  }
  close() {
    this.phase = "idle";
    this.clearHold();
    if (this.open) {
      this.open = false;
      this.emit();
    }
  }
  /** 鼠标点击列表项：确认并切换。 */
  focusById(id) {
    const list = this.items();
    const idx = list.findIndex((item) => item.id === id);
    if (idx >= 0) this.activeIndex = idx;
    this.confirm();
  }
  /** 鼠标点击遮罩：取消（不切换）。 */
  cancelById() {
    this.close();
  }
  quickStep() {
    const list = this.items();
    if (list.length === 0) {
      this.showHint("\u6CA1\u6709\u53EF\u5207\u6362\u7684\u4F1A\u8BDD\u3002");
      return;
    }
    if (list.length === 1) {
      if (list[0].id !== this.current) this.openSession(list[0].id);
      else this.showHint("\u6CA1\u6709\u5176\u4ED6\u4F1A\u8BDD\u53EF\u5207\u6362\u3002");
      return;
    }
    const currentIdx = list.findIndex((item) => item.id === this.current);
    if (currentIdx < 0) {
      if (list[0].id !== this.current) this.openSession(list[0].id);
      return;
    }
    const prev = list[(currentIdx + 1) % list.length];
    if (prev.id !== this.current) this.openSession(prev.id);
    else this.showHint("\u6CA1\u6709\u5176\u4ED6\u4F1A\u8BDD\u53EF\u5207\u6362\u3002");
  }
  emit() {
    this.snapshot = { open: this.open, activeIndex: this.activeIndex, items: this.items(), hint: this.hint };
    for (const fn of this.listeners) fn();
  }
  snapshot = { open: false, activeIndex: 0, items: [], hint: null };
  getSnapshot = () => this.snapshot;
  subscribe = (fn) => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };
  dispose() {
    for (const d of this.disposers) {
      try {
        d();
      } catch {
      }
    }
    this.disposers = [];
    this.listeners.clear();
    this.open = false;
    this.clearHint();
  }
  /** 短暂提示（无目标可切等边界场景）。 */
  showHint(message) {
    this.hint = message;
    this.emit();
    this.clearHint();
    this.hintTimer = window.setTimeout(() => {
      this.hint = null;
      this.emit();
    }, 1600);
  }
  clearHint() {
    if (this.hintTimer != null) {
      clearTimeout(this.hintTimer);
      this.hintTimer = null;
    }
  }
};
var switcherMachine = new SwitcherMachine();
function SessionSwitcherOverlay({ items, activeId, hint, onConfirm, onCancel }) {
  const active = items.find((item) => item.id === activeId) ?? items[1] ?? items[0];
  const visible = items.slice(0, 20);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-switcher-overlay", onClick: onCancel, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mf-switcher-panel", onClick: (event) => event.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-switcher-head", children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: active.title }),
      active.workspaceTitle || active.sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: active.workspaceTitle || active.sub }) : null
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\u6536\u85CF\u4F1A\u8BDD" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-switcher-list", children: visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "mf-switcher-item", "data-active": item.id === active?.id, "data-anchor": visible.indexOf(item) === 0, onClick: () => onConfirm(item.id), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mf-switcher-title", children: item.title }),
      item.workspaceTitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mf-switcher-workspace", children: item.workspaceTitle }) : null
    ] }, item.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-switcher-hint", children: "\u7EE7\u7EED\u6309 ` / ~ \u5FAA\u73AF\u9009\u62E9 \xB7 \u677E\u5F00\u786E\u8BA4 \xB7 Esc \u53D6\u6D88" })
  ] }) });
}
function SwitcherHintHost() {
  const snap = (0, import_react.useSyncExternalStore)(switcherMachine.subscribe, switcherMachine.getSnapshot);
  if (!snap.hint) return null;
  return ReactDOM.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mf-switcher-toast", role: "status", children: snap.hint }), document.body);
}
function SessionSwitcherHost() {
  const snap = (0, import_react.useSyncExternalStore)(switcherMachine.subscribe, switcherMachine.getSnapshot);
  if (!snap.open) return null;
  const activeId = snap.items[snap.activeIndex]?.id ?? null;
  return ReactDOM.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionSwitcherOverlay, { items: snap.items, activeId, hint: snap.hint, onConfirm: (id) => {
    switcherMachine.focusById(id);
  }, onCancel: () => switcherMachine.cancelById() }), document.body);
}
var inject = ["slots", "settingsScope", "sessions", "workspaces"];
function apply(ctx) {
  const scope = ctx.settingsScope.bind({ namespace: NS });
  ctx.effect(() => ensureStyles(), "my-favorites: styles");
  ctx.effect(() => {
    try {
      const sessionsList = ctx.sessions.list;
      const workspacesList = ctx.workspaces.list;
      switcherMachine.start({ openSession: (id) => ctx.sessions.open(id), getList: () => sessionsList.getSnapshot(), subscribeList: (fn) => sessionsList.subscribe(fn), getWorkspaces: () => workspacesList.getSnapshot(), subscribeWorkspaces: (fn) => workspacesList.subscribe(fn), getSettings: () => scope.getSnapshot().value ?? { sessions: [], urls: [], mode: "favorites", recentCount: DEFAULT_RECENT }, subscribeSettings: (fn) => scope.subscribe(fn), setSettings: (field, value) => scope.set(field, value) });
    } catch (e) {
      console.error("[my-favorites] switcher start FAILED", e);
    }
    return () => switcherMachine.dispose();
  }, "my-favorites: switcher");
  ctx.slots.inject("conversation.session.header.actions", () => ctx.slots.register({ name: "conversation.session.header.actions", id: "my-favorites-toggle", order: -5, inject: () => ({ scope }) }, FavoriteToggle));
  ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({ name: "sidebar.footer.action", id: "my-favorites-below-new-session-bridge", order: 5, inject: () => ({ scope, openSession: (id) => ctx.sessions.open(id) }) }, SidebarBelowNewSessionBridge));
  ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({ name: "sidebar.footer.action", id: "my-favorites-session-switcher", order: 6, inject: () => ({}) }, SessionSwitcherHost));
  ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({ name: "sidebar.footer.action", id: "my-favorites-switcher-hint", order: 7, inject: () => ({}) }, SwitcherHintHost));
  ctx.slots.inject("settings.plugins.tab", () => ctx.slots.register({ name: "settings.plugins.tab", id: "my-favorites", order: 30, label: () => "\u6536\u85CF", inject: () => ({ scope }) }, SettingsCard));
}
return module.exports; } });
