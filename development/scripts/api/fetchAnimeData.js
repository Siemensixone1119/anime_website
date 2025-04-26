export default function mainData() {
  return fetch(
    "https://anime-be8cd-default-rtdb.europe-west1.firebasedatabase.app/anime.json"
  ).then((response) => response.json());
}
