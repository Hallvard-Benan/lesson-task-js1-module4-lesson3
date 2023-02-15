const selector = document.querySelector("select");
const listContainer = document.querySelector(".list");

selector.addEventListener("change", makeList);

function makeList(event) {
  console.log(event.target.value);
  const amount = event.target.value;

  listContainer.innerHTML = "";

  for (let i = 1; i <= amount; i++) {
    listContainer.innerHTML += `<a class="item" href="details.html?id=${i}">${i}
        </a>`;
  }
}
