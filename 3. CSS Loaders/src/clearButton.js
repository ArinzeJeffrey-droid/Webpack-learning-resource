import style from "./clearButton.css";

const clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
clearButton.classList.add([style.button]);
clearButton.onclick = () => alert("Clicked!!");
document.body.appendChild(clearButton);
