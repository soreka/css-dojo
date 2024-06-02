const challenges = {
  shadows:[
    {
      "level": 1,
      "description": "Add a simple shadow to the box with a horizontal offset of 2px, vertical offset of 2px, and blur radius of 5px.",
      "solution": "box-shadow: 2px 2px 5px;",
      "styles": {
        "boxShadow": "2px 2px 5px"
      }
    },
    {
      "level": 2,
      "description": "Create a shadow with a horizontal offset of 4px, vertical offset of 4px, blur radius of 10px, and a shadow color of rgba(0, 0, 0, 0.5).",
      "solution": "box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);",
      "styles": {
        "boxShadow": "4px 4px 10px rgba(0, 0, 0, 0.5)"
      }
    },
    {
      "level": 3,
      "description": "Create an inset shadow with a horizontal offset of 0, vertical offset of 0, blur radius of 5px, and shadow color of rgba(0, 0, 0, 0.3).",
      "solution": "box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);",
      "styles": {
        "boxShadow": "inset 0 0 5px rgba(0, 0, 0, 0.3)"
      }
    },
    {
      "level": 4,
      "description": "Add a shadow to the text with a horizontal offset of 2px, vertical offset of 2px, and blur radius of 3px.",
      "solution": "text-shadow: 2px 2px 3px;",
      "styles": {
        "textShadow": "2px 2px 3px"
      }
    },
    {
      "level": 5,
      "description": "Create a multi-shadow effect on the box with the following shadows: (1px 1px 2px rgba(0, 0, 0, 0.2)), (2px 2px 4px rgba(0, 0, 0, 0.2)), (3px 3px 6px rgba(0, 0, 0, 0.2)).",
      "solution": "box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), 2px 2px 4px rgba(0, 0, 0, 0.2), 3px 3px 6px rgba(0, 0, 0, 0.2);",
      "styles": {
        "boxShadow": "1px 1px 2px rgba(0, 0, 0, 0.2), 2px 2px 4px rgba(0, 0, 0, 0.2), 3px 3px 6px rgba(0, 0, 0, 0.2)"
      }
    },
    {
      "level": 6,
      "description": "Create a shadow that mimics the appearance of a lifted card with the following properties: horizontal offset of 0px, vertical offset of 10px, blur radius of 15px, and shadow color of rgba(0, 0, 0, 0.2).",
      "solution": "box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);",
      "styles": {
        "boxShadow": "0px 10px 15px rgba(0, 0, 0, 0.2)"
      }
    },
    {
      "level": 7,
      "description": "Apply a shadow to an element that makes it look like it is floating. Use a horizontal offset of 0px, vertical offset of 5px, blur radius of 10px, spread radius of 2px, and shadow color rgba(0, 0, 0, 0.3).",
      "solution": "box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);",
      "styles": {
        "boxShadow": "0px 5px 10px 2px rgba(0, 0, 0, 0.3)"
      }
    },
    {
      "level": 8,
      "description": "Create a neon text shadow effect with the following properties: horizontal offset of 0px, vertical offset of 0px, blur radius of 10px, and shadow color of #0ff.",
      "solution": "text-shadow: 0px 0px 10px #0ff;",
      "styles": {
        "textShadow": "0px 0px 10px #0ff"
      }
    },
    {
      "level": 9,
      "description": "Create a deep shadow effect on the box with the following properties: horizontal offset of 0px, vertical offset of 20px, blur radius of 30px, and shadow color rgba(0, 0, 0, 0.4).",
      "solution": "box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.4);",
      "styles": {
        "boxShadow": "0px 20px 30px rgba(0, 0, 0, 0.4)"
      }
    },
    {
      "level": 10,
      "description": "Create a shadow that makes an element appear inset with the following properties: horizontal offset of -5px, vertical offset of -5px, blur radius of 15px, spread radius of 10px, and shadow color rgba(0, 0, 0, 0.3).",
      "solution": "box-shadow: inset -5px -5px 15px 10px rgba(0, 0, 0, 0.3);",
      "styles": {
        "boxShadow": "inset -5px -5px 15px 10px rgba(0, 0, 0, 0.3)"
      }
    }
  ]
  ,
  randomChallanges:[
    {
      level: 1,
      description: "Make the box have a blue background and a white border.",
      solution: 'background-color: blue; border: 10px solid white;',
      styles: {
        backgroundColor: 'blue',
        border: '10px solid white'
      }
    },
    {
      level: 1,
      description: "Change the challenge text color to orange and make it bold.",
      solution: 'color: orange; font-weight: bold;',
      styles: {
        color: 'orange',
        fontWeight: 'bold'
      }
    },
    {
      level: 1,
      description: "Add padding and a rounded border to the box.",
      solution: 'padding: 20px; border-radius: 10px;',
      styles: {
        padding: '20px',
        borderRadius: '10px'
      }
    },

    // Level 2 Challenges (and so on...)
      {
        level: 2,
        description: "Create a linear gradient background for the box (light blue to dark blue).",
        solution: 'background-image: linear-gradient(to bottom, lightblue, darkblue);',
        styles: {
          backgroundImage: 'linear-gradient(to bottom, lightblue, darkblue)'
        }
      }
    // ... Add remaining challenges following the same format ...
 ]
};
export default challenges

