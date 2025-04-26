import template from "./hero.html";

export function initHero() {
  const el = document.getElementById("hero");
  if (!el) return;

  el.innerHTML = template;
}