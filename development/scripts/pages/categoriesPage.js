import getData from "../api/fetchAnimeData";
import renderTopAnime from "../render/renderTopAnime";
import renderGanreList from "../render/renderGanreList";
import renderCategoriesNav from "../render/renderCategoriesNav";
import renderBreadcrumb from "../render/renderBreadcrumb";

export default function categoriesPage() {
  getData().then((data) => {
    const ganres = new Set();
    const ganreParams = new URLSearchParams(window.location.search).get(
      "ganre"
    );
    console.log(ganreParams);

    data.forEach((item) => {
      ganres.add(item.ganre);
    });

    renderTopAnime(
      data
        .sort((a, b) => a.views - b.views)
        .reverse()
        .slice(0, 5)
    );
    if (ganreParams) {
      renderGanreList(data.reverse(), [ganreParams]);
    } else {
      renderGanreList(data.reverse(), ganres);
    }
    renderCategoriesNav(ganres);
    renderBreadcrumb(data, ganreParams);
  });
}
