import styles from "./index.css";
import _ from "lodash";
import "./clearButton";

const button = document.getElementById("btn-1");
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
button.classList.add([styles.button]);
