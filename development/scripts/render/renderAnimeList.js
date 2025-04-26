import bgElement from "../utils/set_bg";
// import renderGanreHead from "./renderGanreHead";

export default function renderAnimeList(list, listBlock) {
  list.forEach((item) => {
    const tagsBlock = document.createElement("ul");

    item.tags.forEach((tag) => {
      tagsBlock.insertAdjacentHTML(
        "afterbegin",
        `
        <li>${tag}</li>
        `
      );
    });

    listBlock.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
          <div class="product__item__pic set-bg" data-setbg="${item.image}">
            <div class="ep">${item.rating} / 10</div>
            <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
          </div>
          <div class="product__item__text">
            ${tagsBlock.outerHTML}
            <h5><a href="/pages/details.html?itemId=${item.id}">${item.title}</a></h5>
          </div>
        </div>
      </div>`
    );
  });
  bgElement();
}
/* <h5><a href="./anime-details.html?itemId=${item.id}">${item.title}</a></h5> */
