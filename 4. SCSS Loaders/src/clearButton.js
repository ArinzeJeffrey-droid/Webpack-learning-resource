import styles from "./clearButton.scss";

const clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
clearButton.classList.add([styles.button]);
clearButton.onclick = () => alert("Clicked!!");
document.body.appendChild(clearButton);
