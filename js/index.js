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
  console.log(playerStyle);
  compareStylesHandler(targetStyle ,playerStyle )
  console.log('i am here',challenge);
  let styleCode = cssCodeMirror.getValue();
  createStyle(styleCode);
}

const myButton = document.getElementById("run-code");
myButton.onclick = runCode;
//////////////
var challenge = null
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    challenge = feedChallange(1,localStorage.getItem('topic'))
  }, 0);
});
