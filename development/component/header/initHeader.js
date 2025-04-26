import template from "./header.html";

export function initHeader() {
  const el = document.getElementById("header");
  if (!el) return;

  el.innerHTML = template;
}
