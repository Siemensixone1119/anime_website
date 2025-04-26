import bgElement from "../utils/set_bg";

export default function renderTopAnime(arr) {
  const wrapper = document.querySelector(".filter__gallery");
  arr.forEach((item) => {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="product__sidebar__view__item set-bg" data-setbg="${item.image}">
          <div class="ep">${item.rating} / 10</div>
          <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
          <h5><a href="/pages/details.html?itemId=${item.id}">${item.title}</a></h5>
        </div>`
    );
  });
  bgElement();
}
