import template from "./footer.html";

export function initFooter() {
  const el = document.getElementById("footer");
  if (!el) return;

  el.innerHTML = template;
}