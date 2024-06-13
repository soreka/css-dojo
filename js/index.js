import { feedChallange } from "./challangeCreator.js"
var cssCodeMirror = CodeMirror.fromTextArea(
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
var htmlCodeMirror = CodeMirror(document.getElementById("js-code-editor"), {
  value: "<!-- write your HTML Here -->\n",
  mode: "xml",
  autoCloseTags: true,
  theme: "xq-light",
  lineNumbers: true,
  extraKeys: { "Ctrl-Space": "autocomplete" },

});
//////////
function createStyle(cssText) {
  const style = document.createElement("style");
  style.textContent = cssText;
  document.head.appendChild(style);
}


//// code for viewing the code live on the game screen
function runCode() {
  // if (currentChallange === null){
  //   console.log("there is no challange yet ");
  // }
  let styleCode = cssCodeMirror.getValue();
  let htmlCode = htmlCodeMirror.getValue();
  let viewElement = document.getElementById("toShow");
  viewElement.innerHTML = htmlCode
  createStyle(styleCode);
}

const myButton = document.getElementById("run-code");
myButton.onclick = runCode;
//////////////

function changeMode() {
  const cssEditor = document.getElementById("css-container");
  const jsEditor = document.getElementById("js-container")
  const buttonName = this.name;
  if (buttonName === "css" && cssEditor.style.display == "") {
    cssCodeMirror.getWrapperElement().style.display = "block";
    htmlCodeMirror.getWrapperElement().style.display = "none";
  }
  if (buttonName === "js" && jsEditor.style.display == "") {
    htmlCodeMirror.getWrapperElement().style.display = "block";
    cssCodeMirror.getWrapperElement().style.display = "none";
  }
}



const cssModeButton = document.getElementById("css-mode-button");
const jsModeButton = document.getElementById("js-mode-button");
cssModeButton.onclick = changeMode;
jsModeButton.onclick = changeMode;



document.addEventListener('DOMContentLoaded', () => {
  feedChallange()
});
