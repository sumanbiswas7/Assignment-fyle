import "./style.css";
import { loadData } from "./scripts/load-data.js";

document.querySelector("#app").innerHTML = `
<main>
  <div id="loader" class="loader"></div>
  <div class="flex gap user-cont" id="userContainer"></div>
  <div id="selectContainer"></div>
  <div class="grid" id="reposContainer"></div>
</main>
`;

// load data from github api and append in dom
loadData();
