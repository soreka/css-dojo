import { feedChallange } from "./challangeCreator.js"
import {compareStylesHandler} from "./scoreBar.js"
import {buildLevelsModal} from "./ChallangeSelector.js"
import challenges from './challanges.js'


var challenge = null
var difficulty
var cssCodeMirror = CodeMirror(
  document.getElementById("css-code-editor"),
  {
    value: "/*Write Your Styles Here #!#!*/\n",
    mode: "css",
    autoCloseTags: true,
    theme: "ttcn",
    lineNumbers: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },

  }

);

//////////
function createStyle(cssText) {
  const viewElement = document.getElementById('toShow')
  viewElement.style = cssText;
}


//// code for viewing the code live on the game screen
function runCode() {
  let targetStyle = challenge.styles
  let playerStyle = cssCodeMirror.getValue()
  playerStyle = styleStringToObject(playerStyle)
  compareStylesHandler(targetStyle ,playerStyle )
  let styleCode = cssCodeMirror.getValue();
  createStyle(styleCode);
}


function toggleHintBar(e) {
  var hiddenElement = document.getElementById('hintBar');
  var iconElement = document.getElementById('hint-icon')
  if (hiddenElement.classList.contains('hidden')) {
      //hide
      iconElement.classList.remove('hint-icon')
      iconElement.classList.add('hidden')
      //show
      hiddenElement.classList.remove('hidden');
      hiddenElement.classList.add('hint-bar-outer-container')
  } else {
      //hide
      hiddenElement.classList.remove('hint-bar-outer-container')
      hiddenElement.classList.add('hidden');
      //show 
      iconElement.classList.remove('hidden')
      iconElement.classList.add('hint-icon')
  }
}
//hint bar toggle 
document.getElementById('hint-icon').addEventListener('click',toggleHintBar);
document.getElementById('drop-down-icon').addEventListener('click',toggleHintBar);
//hint bar right left buttons
document.getElementById('leftArrow').addEventListener('click',changeHint)
document.getElementById('rightArrow').addEventListener('click',changeHint)





function changeHint (e) {
  const hintRange = document.getElementById('hintTracker')
  let index = String(hintRange.textContent).split('-')[0]
  index = Number(index)
  if(e.target.textContent === 'NEXT' && challenge.hints.length > index ){
     displayHint(challenge.hints,index+1)
   }
   
   if(e.target.textContent === 'PREV'&& 0 < (index - 1) ){
    displayHint(challenge.hints, index - 1)
   }
}



function displayHint (hints,lvl = 1) {
    const hintDescription = document.getElementById('hintText')
    const hintRange = document.getElementById('hintTracker')
    const hintTitle =document.getElementById("hint-bar-title")
    
    let hint = hints[lvl -1]
    let hintTitleNumber  = hint.split(':')[0]
    let hintText = hint.split(':')[1]
    //clear html elements
    hintTitle.innerHTML = ''
    hintDescription.innerHTML = ''
    hintRange.innerHTML = ''
    //fill elements
    hintTitle.textContent = hintTitleNumber
    hintDescription.textContent = hintText
    hintRange.textContent = `${lvl} - ${hints.length}`
}




const myButton = document.getElementById("run-code");
myButton.onclick = runCode;
//////////////
// var challenge = null
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    let topic = localStorage.getItem('topic')
    difficulty =  getDifficulty(topic)
    challenge = feedChallange(1,topic,difficulty)
    buildLevelsModal(topic,difficulty)
    displayHint(challenge.hints,1)


  }, 0);
});


function getDifficulty (topic) {
  let difficulties = Object.keys(challenges)
  for(let diff of difficulties){
    if(Object.keys(challenges[diff]).includes(topic)){
      return diff
    }
  }
}





function styleStringToObject(styleString) {
  const result = {};
  const styleArray = styleString.split(';');

  styleArray.forEach(style => {
      const [key, value] = style.split(':');
      if (key && value) {
          const trimmedKey = key.trim();
          const trimmedValue = value.trim();
          result[trimmedKey] = trimmedValue;
      }
  });

  return result;
}



