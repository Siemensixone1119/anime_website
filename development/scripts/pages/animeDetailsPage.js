import getData from "../api/fetchAnimeData";
import bgElement from "../utils/set_bg";
import renderBreadcrumb from "../render/renderBreadcrumb";
import renderAnimeDetails from "../render/renderAnimeDetails";
import renderCategoriesNav from "../render/renderCategoriesNav";

export default function detailsPage() {
  getData().then((data) => {
    const ganres = new Set();
    const ganreParams = new URLSearchParams(window.location.search).get(
      "itemId"
    );

    data.forEach((item) => {
      ganres.add(item.ganre);
    });

    renderBreadcrumb(data, ganreParams);
    renderAnimeDetails(data, ganreParams);
    renderCategoriesNav(ganres)
    bgElement();
  });
}
