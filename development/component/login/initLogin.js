import template from "./login.html";

export function initLogin() {
  const el = document.getElementById("login");
  if (!el) return;

  el.innerHTML = template;
}