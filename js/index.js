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
  compareStylesHandler(`{game:1,player:2}` ,`{game:1,player:3}` )

  let styleCode = cssCodeMirror.getValue();
  createStyle(styleCode);
}

const myButton = document.getElementById("run-code");
myButton.onclick = runCode;
//////////////

document.addEventListener('DOMContentLoaded', () => {
  feedChallange()
});
