import template from "./modal.html";

export function initModal() {
  const el = document.getElementById("modal");
  if (!el) return;

  el.innerHTML = template;
}