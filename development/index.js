// style
import "./index.scss";
import "./style/css/bootstrap.min.css";
import "./style/css/elegant-icons.css";
import "./style/css/font-awesome.min.css";
import "./style/css/style.css";
// style

// init HTML
import { initHeader } from "./component/header/initHeader";
import { initHero } from "./component/hero/initHero";
import { initProduct } from "./component/product/initProduct";
import { initTopViews } from "./component/top_views/initTopViews";
import { initModal } from "./component/modal/initModal";
import { initFooter } from "./component/footer/initFooter";
import { initBreadcrumb } from "./component/breadcrumb/initBreadcrumb";
import { initAnimeDetail } from "./component/anime_detail/initAnimeDetail";
import { initLogin } from "./component/login/initLogin";

initHeader();
initHero();
initProduct();
initTopViews();
initModal();
initFooter();
initBreadcrumb();
initAnimeDetail();
initLogin();
// init HTML

// scripts
import bgElement from "./scripts/utils/set_bg";
import scrollTop from "./scripts/utils/scrollToTop";
import openModal from "./scripts/utils/openModal";
import preloader from "./scripts/utils/preloader";

bgElement();
scrollTop();
openModal();
preloader();
// scripts

//Data
import mainPage from "./scripts/pages/mainPage";
import categoriesPage from "./scripts/pages/categoriesPage";
import detailsPage from "./scripts/pages/animeDetailsPage";
import loginPage from "./scripts/pages/loginPage";

const page = document.body.dataset.page;

switch (page) {
  case "main":
    mainPage();
    break;
  case "categories":
    categoriesPage();
    break;
  case "details":
    detailsPage();
    break;
  case "login":
    loginPage();
    break;
}
//Data
