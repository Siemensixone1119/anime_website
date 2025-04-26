import template from "./product.html";

export function initProduct() {
  const el = document.getElementById("product");
  if (!el) return;

  el.innerHTML = template;
}