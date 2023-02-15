const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.noroff.dev/api/v1/books/" + id;
const selectedIdContainer = document.querySelector(".id");
const detailsContainer = document.querySelector(".details");

selectedIdContainer.innerHTML = id;

async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    createHtml(result);
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = error;
  }
}

fetchCharacter();

function createHtml(details) {
  detailsContainer.innerHTML = `<h1>${details.title}</h1>
    <div><b>${details.author}</b></div><div><img src="${details.image}" alt=""></div>`;
}
