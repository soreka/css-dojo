import { feedChallange } from "./challangeCreator.js"
import {compareStylesHandler} from "./scoreBar.js"
import {addBasicStyles,cssObjToTxt} from "./challangeCreator.js"
import {buildLevelsModal} from "./ChallangeSelector.js"
import challenges from './challanges.js'

var maxLines = 0 
var challenge = null
var difficulty = null
var widgetEditor;
var cssCodeMirror = CodeMirror(
  document.getElementById("css-code-editor"),
  {
    value: "/*Write Your Styles Here #!#!*/\n",
    mode: "css",
    autoCloseTags: true,
    theme: "xq-light",
    readOnly: "nocursor",
    lineNumbers: true,
  }

);

function subtractObjects(obj1, obj2) {
  const result = {};
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) && !obj2.hasOwnProperty(key)) {
      result[key] = obj1[key];
    }
  }
  return result;
}

function prepareStaticStyle (challange) {
  let fromLine = 0
  let toLine = 0
  let styleObj = {}
  let convertedTypeStyles = {...challange.styles} ;
  convertedTypeStyles = styleStringToObject(cssObjToTxt(convertedTypeStyles))
  styleObj = addBasicStyles(styleObj)
  styleObj = subtractObjects(styleObj,convertedTypeStyles)


  let formattedString = '.yourStyle{\n';

  for (let key in styleObj) {
    if (styleObj.hasOwnProperty(key)) {
      formattedString += `       ${key}: ${styleObj[key]};\n`;
      fromLine += 1 
    }
  }
  toLine = fromLine
  for(let key in challange.styles ){
    formattedString += `\n`
    toLine += 1 
  }
  fromLine += 1
  let linesObj = {fromLine:fromLine,toLine:toLine}
  formattedString += '\n}';
  return {format:formattedString,linesObj:linesObj};
}


function addMultiLineWidget(editor, fromLine, toLine) {
  const startCh = 7;
  const fromLineHandle = editor.getLineHandle(fromLine);
  const toLineHandle = editor.getLineHandle(toLine);

  const fromLineInfo = editor.lineInfo(fromLineHandle);
  const toLineInfo = editor.lineInfo(toLineHandle);
  var widgetNode = document.createElement("div");
  widgetNode.contentEditable = true;
  widgetNode.className = "editable-widget";
  // widgetNode.innerText = 'Editable content here';

  //to be revised
  // const widgetNode = document.createElement("div");
  // widgetNode.className = "multi-line-widget";

  // Calculate the left offset based on the starting character
  const chWidth = editor.defaultCharWidth();
  const leftOffset = startCh * chWidth;

  // Calculate the top and height of the widget based on the line heights
  const lineHeight = editor.defaultTextHeight();
  const topOffset = fromLineInfo.top;
  const widgetHeight = (toLine - fromLine + 1) * lineHeight;

  widgetNode.style.top = `${topOffset}px`;
  widgetNode.style.height = `${widgetHeight}px`;
  widgetNode.style.marginLeft = `${leftOffset}px`;

  // creating the widget container which will contain the codemirror instance
  var widgetContainer = document.createElement("div");
  widgetContainer.className = "widget-container";
  widgetEditor = CodeMirror(widgetContainer, {
    value: "content",
    mode: "css",
    theme: "lucario",
    lineWrapping: true,
    lineNumbers: false,
    scrollbarStyle: null,
    readOnly: false, // The widget itself should be editable
    extraKeys: {
      "Enter": function(cm) {
          var lineCount = cm.lineCount();
           // Set your desired maximum number of lines
          if (lineCount >= maxLines) {
              return; // Prevent adding a new line
          }
          cm.execCommand('newlineAndIndent'); // Allow adding a new line if limit is not reached
      }
  }
  });

  widgetEditor.setSize(null, "100%");
  widgetContainer.style.height = `${widgetHeight + 10}px`;
  widgetNode.appendChild(widgetContainer);
  // Add the widget node as a line widget to the first line, spanning the height of multiple lines
  editor.addLineWidget(fromLineHandle, widgetNode, {
    above: true,
    coverGutter: false,
    noHScroll: true,
  });
}



//////////
function createStyle(cssObj) {
  const viewElement = document.getElementById('toShow')
  Object.assign(viewElement.style,cssObj) 
}


//// code for viewing the code live on the game screen
function runCode() {
  let targetStyle = challenge.styles
  targetStyle = styleStringToObject(cssObjToTxt(targetStyle))
  let playerStyle = widgetEditor.getValue()
  playerStyle = styleStringToObject(playerStyle)
  compareStylesHandler(targetStyle ,playerStyle )
  let styleObj = addBasicStyles(playerStyle)
  styleObj = subtractObjects(styleObj,targetStyle)
  let playerEndStyle = {...styleObj,...playerStyle}
  console.log('player finalStyle',playerEndStyle);
  createStyle(playerEndStyle);
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
    const { format , linesObj:{fromLine,toLine} } = prepareStaticStyle(challenge)
    cssCodeMirror.setValue(format)
    maxLines = Object.keys(challenge.styles).length
    addMultiLineWidget(cssCodeMirror,fromLine,toLine)

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



