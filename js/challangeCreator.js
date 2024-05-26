import challanges from "./challanges.js";
export function feedChallange(level = 1) {
    let challange = getChallange(level);
    let description = document.getElementById("level-description")
    let cssTips = document.getElementById("css-tips")
    description.textContent = challange.description
    for(let style in challange.styles){
        const liElement = document.createElement("li")
        liElement.textContent = String(style)
        cssTips.appendChild(liElement)
    }
    const styledDiv = document.getElementById("myDiv")
    styledDiv.style = challange.solution
    //// This is for a case that we get the styles as text and not as object 
      //   let solutionStyles = challange.solution
      //     .split(";")
      //     .filter((e) => e != "")
      //     .map((e) => e.split(":"))
      //     .map((e) => e[0]);
}
function writeStyleFromArray (arr) {
    
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

