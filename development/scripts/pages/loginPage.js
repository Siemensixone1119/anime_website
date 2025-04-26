import renderCategoriesNav from "../render/renderCategoriesNav";
import getData from "../api/fetchAnimeData";

export default function loginPage() {
  getData().then((data) => {
    const ganres = new Set();

    data.forEach((item) => {
      ganres.add(item.ganre);
    });
    renderCategoriesNav(ganres);
  });
}
