import { feedChallange } from "./challangeCreator.js"
import {compareStylesHandler} from "./scoreBar.js"

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
  console.log(playerStyle);
  compareStylesHandler(targetStyle ,playerStyle )
  console.log('i am here',challenge);
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

document.getElementById('hint-icon').addEventListener('click',toggleHintBar);
document.getElementById('drop-down-icon').addEventListener('click',toggleHintBar);








const myButton = document.getElementById("run-code");
myButton.onclick = runCode;
//////////////
var challenge = null
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    challenge = feedChallange(1,localStorage.getItem('topic'))
  }, 0);
});




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