import renderAnimeList from "./renderAnimeList";
import renderBreadcrumb from "./renderBreadcrumb";

export default function renderGanreList(arr, ganres) {
  const wrapper = document.querySelector(".product .col-lg-8");

  ganres.forEach((ganre) => {
    const productBlock = document.createElement("div");
    const listBlock = document.createElement("div");
    const page = document.body.dataset.page;

    let list;

    switch (page) {
      case "main":
        list = arr.filter((item) => item.ganre === ganre);
        break;
      case "categories":
        list = arr.filter((item) => item.tags.includes(ganre));
        break;
      default:
        list = [];
    }

    // renderBreadcrumb(ganre)

    listBlock.classList.add("row");
    productBlock.classList.add("mb-5");

    productBlock.append(listBlock);
    wrapper.append(productBlock);

    productBlock.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8">
          <div class="section-title">
            <h4>${ganre}</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="btn__all">
            <a href="/pages/categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
          </div>
        </div>
      </div>`
    );
    renderAnimeList(list, listBlock);
    
  });
}
