const count = document.querySelector(".count");
const inputArea = document.querySelector("input");

inputArea.addEventListener("input", countCharacters);

function countCharacters() {
  count.innerHTML = inputArea.value.length;
}
