export default function renderAnimeDetails(arr, itemId) {
  const animeObj = arr.find((item) => item.id == itemId);
  const imageBlock = document.querySelector(".anime__details__pic");
  const viewsBlock = imageBlock.querySelector(".view");
  const titleBlock = document.querySelector(".anime__details__content h3");
  const subTitleBlock = document.querySelector(".anime__details__content span");
  const descriptionBlock = document.querySelector(".anime__details__content p");
  const widgetList = document.querySelectorAll(".anime__details__widget ul li");
  console.log(2);

  if (animeObj) {
    imageBlock.dataset.setbg = animeObj.image;
    

    viewsBlock.insertAdjacentHTML(
      "beforeend",
      `<i class="fa fa-eye"> ${animeObj.views}</i>`
    );

    titleBlock.textContent = animeObj.title;
    subTitleBlock.textContent = animeObj["original-title"];
    descriptionBlock.textContent = animeObj.description;

    widgetList[0].insertAdjacentHTML(
      "beforeend",
      `<span>Date aired:</span> ${animeObj.date}`
    );
    widgetList[1].insertAdjacentHTML(
      "beforeend",
      `<span>Rating:</span> ${animeObj.rating}`
    );
    widgetList[2].insertAdjacentHTML(
      "beforeend",
      `<span>Genre:</span> ${animeObj.tags.join(", ")}`
    );

  } else {
    console.log("404");
  }
}
