export default function renderBreadcrumb(arr, itemId) {
  const page = document.body.dataset.page;
  const breadcrumb = document.querySelector(".breadcrumb__links");
  let animeObj;
  
  // Вставляем ссылку "Home" один раз
  breadcrumb.insertAdjacentHTML("beforeend", `
    <a href="/index.html"><i class="fa fa-home"></i> Home</a>
  `);

  switch (page) {
    case "categories":
      animeObj = arr.find((item) => item.ganre == itemId)
      // Предполагается, что genres — это массив строк
        breadcrumb.insertAdjacentHTML("beforeend", `<span>${animeObj.ganre}</span>`);
      break;

    case "details":
      animeObj = arr.find((item) => item.id == itemId)
      // Предполагается, что genres — это массив строк или объектов (например: [{ genre: "Action" }])
        breadcrumb.insertAdjacentHTML("beforeend", `
          <a href="/pages/categories.html?ganre=${animeObj.ganre}">${animeObj.ganre}</a>
        `);

      breadcrumb.insertAdjacentHTML("beforeend", `<span>${animeObj.title}</span>`);
      break;
  }
}
