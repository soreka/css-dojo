import challanges from "./challanges.js";

let basicStyles = ["width", "height", "background-color"];
const currentChallange = null
export function feedChallange(level = 2) {
  let challange = getChallange(level);
  currentChallange = challange
  let description = document.getElementById("level-description");
  let cssTips = document.getElementById("css-tips");
  description.textContent = "Challange :" + challange.description;
  for (let style in challange.styles) {
    const liElement = document.createElement("li");
    liElement.textContent = String(style);
    cssTips.appendChild(liElement);
  }
  const styledDiv = document.getElementById("myDiv");
  let styles = challange.styles;
  styles = addBasicStyles(styles);
  styles = cssObjToTxt(styles);
  styledDiv.style = styles;
  //// This is for a case that we get the styles as text and not as object
  //   let solutionStyles = challange.solution
  //     .split(";")
  //     .filter((e) => e != "")
  //     .map((e) => e.split(":"))
  //     .map((e) => e[0]);
}

function buildStylesString(stylesObj) {
  let styles = "";
  for (style in stylesObj) {
  }
}

function getDeafultStyleValue(style) {
  switch (style) {
    case "width":
      return "250px";

    case "height":
      return "50px";

    case "background-color":
      return "blue";

    default:
      break;
  }
}

function cssObjToTxt(styleObj) {
  return Object.entries(styleObj)
    .map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value};`;
    })
    .join(" ");
}

function addBasicStyles(styleObj) {

  for (let style of basicStyles) {
    if (!(style in styleObj)) {
      styleObj[style] = getDeafultStyleValue(style);
    }
  }
  return styleObj
}

function getChallange(level) {
  let targetLevels = challanges.filter((lvl) => lvl.level == level);
  let randIndex = getRandomInt(0, targetLevels.length - 1);
  return targetLevels[randIndex];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
