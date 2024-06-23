import challenges from "./challanges.js";

let titles = ["beginner", "intermediate", "advanced"];
let topics = ["CSS", "HTML"];

const titleContainer = document.getElementById("titles-container");
function difficultyComponent(arrOfTopics, container) {
  for (let i = 0; i < arrOfTopics.length; i++) {
    const divContainer = document.createElement("div");
    divContainer.className = "diff-container";
    const title = document.createElement("div");
    title.innerHTML = arrOfTopics[i];
    title.className = "title-title";
    title.title = arrOfTopics[i];
    title.style.boxShadow = "2px 2px 5px";

    title.addEventListener("click", (e) => {
      container.innerHTML = "";
      let topic = String(e.target.title);
      let topicObject = challenges[topic];
      let cssTopics = Object.keys(topicObject);
      displayTitles(cssTopics, container, "challengesPage");
    });
    divContainer.appendChild(title);
    container.className = "table-container";
    container.appendChild(divContainer);
  }
}
function topicComponent(arrOfTopics, container) {
  for (let i = 0; i < arrOfTopics.length; i++) {
    container.className = "table-container";
    const divContainer = document.createElement("div");
    divContainer.className = "diff-container";
    const title = document.createElement("div");
    title.innerHTML = arrOfTopics[i];
    title.className = "title-title";
    title.title = arrOfTopics[i];
    title.style.boxShadow = "2px 2px 5px";
    title.addEventListener("click", (e) => {
      if (e.target.title === "HTML") {
        alert("Coming Sooon!!");
      } else {
        container.innerHTML = "";
        displayTitles(titles, container, "difficulityPage");
      }
    });
    container.className = "table-container";
    divContainer.appendChild(title);
    container.appendChild(divContainer);
  }
}

function challengesComponent(arrOfTopics, container) {
  container.innerHTML = "";
  for (let i = 0; i < arrOfTopics.length; i++) {
    const divContainer = document.createElement("div");
    const linker = document.createElement("a");
    linker.href = "./game.html";
    linker.style.textDecoration = "none";
    divContainer.className = "div-container";
    const title = document.createElement("div");
    title.innerHTML = arrOfTopics[i];
    title.className = "title-title";
    title.title = arrOfTopics[i];
    title.style.boxShadow = "2px 2px 5px";
    title.addEventListener("click", (e) => {
      container.innerHTML = "";
      console.log(e.target.title);
      let topic = String(e.target.title);
      localStorage.setItem("topic", topic);
    });
    linker.appendChild(title);
    divContainer.appendChild(linker);
    container.className = "titles-container";
    container.appendChild(divContainer);
  }
}

function displayTitles(arrOfTopics, container, pageName) {
  container.className = "";
  if (pageName === "challengesPage") {
    challengesComponent(arrOfTopics, container);
  }
  if (pageName === "homePage") {
    topicComponent(topics, container);
  }
  if (pageName === "difficulityPage") {
    difficultyComponent(titles, container);
  }
}

displayTitles(topics, titleContainer, "homePage");
