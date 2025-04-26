import getData from "../api/fetchAnimeData";
import renderAnimeList from "../render/renderGanreList";
import renderTopAnime from "../render/renderTopAnime";
import renderCategoriesNav from "../render/renderCategoriesNav";
import bgElement from "../utils/set_bg";
import slider from "../utils/slider";

export default function mainPage() {
  getData().then((data) => {
    const ganres = new Set();

    data.forEach((item) => {
      ganres.add(item.ganre);
    });

    renderTopAnime(
      data
        .sort((a, b) => a.views - b.views)
        .reverse()
        .slice(0, 5)
    );
    renderAnimeList(data.reverse(), ganres);
    renderCategoriesNav(ganres);
  });
  bgElement();
  slider();
}
