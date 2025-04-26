export default function renderCategoriesNav(ganres) {
  const dropDownBlock = document.querySelector(".header__menu .dropdown");

  ganres.forEach((ganre) => {
    dropDownBlock.insertAdjacentHTML(
      "afterbegin",
      `
       <li>
        <a href="/pages/categories.html?ganre=${ganre}">${ganre}</a>
      </li>
      `
    );
  });
}
