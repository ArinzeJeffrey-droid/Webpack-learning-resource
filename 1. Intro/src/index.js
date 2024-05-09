import _ from "lodash";

document.getElementById("btn-1").addEventListener("click", () => {
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
