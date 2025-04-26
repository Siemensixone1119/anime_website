import template from "./anime_detail.html";

export function initAnimeDetail() {
  const el = document.getElementById("anime__detail");
  if (!el) return;

  el.innerHTML = template;
}