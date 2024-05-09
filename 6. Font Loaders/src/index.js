import "./index.css";
import _ from "lodash";
import ImageFile from "./assets/anime.jpg";
import "./assets/fonts/SedanSC-Regular.ttf";
// import "./clearButton";

const button = document.getElementById("btn-1");
const image = document.getElementById("image");

button.addEventListener("click", () => {
  const header = document.getElementById("header");
  header.innerHTML = "Updated text";

  const listItems = ["Apple", "Orange", "Banana"];
  const ul = document.getElementById("list");
  _.forEach(listItems, (item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });
});
button.classList.add(["button"]);
image.src = ImageFile;
