import challanges from "./challanges.js";

let basicStyles = ["width", "height", "background-color"];


export function feedChallange(level = 1, type = 'colors',difficulty='beginner') {
  let challange = getChallange(type, level,difficulty);

  // get the target elements
  let description = document.getElementById("level-description");
  let cssTips = document.getElementById("css-tips");
  // update the challange description
  description.textContent = "Challange :" + challange.description;
  // add the css props
  cssTips.innerHTML=''
  for (let style in challange.styles) {
    const liElement = document.createElement("li");
    liElement.textContent = String(style);
    cssTips.appendChild(liElement);
  }
  // prepare the target element style 
  const styledDiv = document.getElementById("myDiv");
  let styles = {...challange.styles};
  styles = addBasicStyles(styles);
  styles = cssObjToTxt(styles);
  styledDiv.style = styles;
  return challange
  //// This is for a case that we get the styles as text and not as object
  //   let solutionStyles = challange.solution
  //     .split(";")
  //     .filter((e) => e != "")
  //     .map((e) => e.split(":"))
  //     .map((e) => e[0]);
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

export function cssObjToTxt(styleObj) {
  return Object.entries(styleObj)
    .map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value};`;
    })
    .join(" ");
}

export function addBasicStyles(styleObj) {
    let styledObj = {...styleObj}
  for (let style of basicStyles) {
    if (!(style in styledObj)) {
      styledObj[style] = getDeafultStyleValue(style);
    }
  }
  return styledObj
}

//// get random challange from the challanges  object with the wanted level 

function getChallange(type = "colors", level,difficulty) {
  let targetLevels = challanges[difficulty][type].filter((challange) => challange.level == level);  
  let randIndex = getRandomInt(0, targetLevels.length - 1);
  return targetLevels[randIndex];
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
