import template from "./top_views.html";

export function initTopViews() {
  const el = document.getElementById("top_views");
  if (!el) return;

  el.innerHTML = template;
}