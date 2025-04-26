import template from "./breadcrumb.html";

export function initBreadcrumb() {
  const el = document.getElementById("breadcrumb");
  if (!el) return;

  el.innerHTML = template;
}