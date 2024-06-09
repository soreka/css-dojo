const challenges = {
  beginner : {
    colors: [
      {
        level: 1,
        description: "Set the background color of the box to blue.",
        solution: "background-color: blue;",
        styles: {
          backgroundColor: "blue"
        }
      },
      {
        level: 2,
        description: "Set the text color of the paragraph to red.",
        solution: "color: red;",
        styles: {
          color: "red"
        }
      },
      {
        level: 3,
        description: "Set the border color of the box to green.",
        solution: "border-color: green;",
        styles: {
          borderColor: "green"
        }
      },
      {
        level: 4,
        description: "Set the background color of the box to #3498db.",
        solution: "background-color: #3498db;",
        styles: {
          backgroundColor: "#3498db"
        }
      },
      {
        level: 5,
        description: "Set the text color of the paragraph to rgb(255, 99, 71).",
        solution: "color: rgb(255, 99, 71);",
        styles: {
          color: "rgb(255, 99, 71)"
        }
      },
      {
        level: 6,
        description: "Set the border color of the box to hsl(120, 100%, 50%).",
        solution: "border-color: hsl(120, 100%, 50%);",
        styles: {
          borderColor: "hsl(120, 100%, 50%)"
        }
      },
      {
        level: 7,
        description: "Set the background color of the box to rgba(255, 165, 0, 0.5).",
        solution: "background-color: rgba(255, 165, 0, 0.5);",
        styles: {
          backgroundColor: "rgba(255, 165, 0, 0.5)"
        }
      },
      {
        level: 8,
        description: "Set the text color of the paragraph to hsl(240, 100%, 50%).",
        solution: "color: hsl(240, 100%, 50%);",
        styles: {
          color: "hsl(240, 100%, 50%)"
        }
      },
      {
        level: 9,
        description: "Set the border color of the box to #FF5733.",
        solution: "border-color: #FF5733;",
        styles: {
          borderColor: "#FF5733"
        }
      },
      {
        level: 10,
        description: "Set the background color of the box to a linear gradient going from red to yellow.",
        solution: "background: linear-gradient(to right, red, yellow);",
        styles: {
          background: "linear-gradient(to right, red, yellow)"
        }
      }
    ],
    backgrounds: [
      {
        level: 1,
        description: "Set the background color of the box to lightgrey.",
        solution: "background-color: lightgrey;",
        styles: {
          backgroundColor: "lightgrey"
        }
      },
      {
        level: 2,
        description: "Set the opacity of the box to 0.5.",
        solution: "opacity: 0.5;",
        styles: {
          opacity: "0.5"
        }
      },
      {
        level: 3,
        description: "Set the background color of the box to rgba(255, 0, 0, 0.3).",
        solution: "background-color: rgba(255, 0, 0, 0.3);",
        styles: {
          backgroundColor: "rgba(255, 0, 0, 0.3)"
        }
      },
      {
        level: 4,
        description: "Set the background color of the box to lightblue.",
        solution: "background-color: lightblue;",
        styles: {
          backgroundColor: "lightblue"
        }
      },
      {
        level: 5,
        description: "Set a background image for the box using the URL 'https://www.w3schools.com/css/img_tree.png'.",
        solution: "background-image: url('https://www.w3schools.com/css/img_tree.png');",
        styles: {
          backgroundImage: "url('https://www.w3schools.com/css/img_tree.png')"
        }
      },
      {
        level: 6,
        description: "Set the background image of the box to not repeat.",
        solution: "background-repeat: no-repeat;",
        styles: {
          backgroundRepeat: "no-repeat"
        }
      },
      {
        level: 7,
        description: "Set the position of the background image to be centered.",
        solution: "background-position: center;",
        styles: {
          backgroundPosition: "center"
        }
      },
      {
        level: 8,
        description: "Set the background color of the element to cyan.",
        solution: "background-color: cyan;",
        styles: {
          backgroundColor: "cyan"
        }
      },
      {
        level: 9,
        description: "Set the background image of the box to be fixed in place.",
        solution: "background-attachment: fixed;",
        styles: {
          backgroundAttachment: "fixed"
        }
      },
      {
        level: 10,
        description: "Set a linear gradient background from blue to green.",
        solution: "background-image: linear-gradient(to right, blue, green);",
        styles: {
          backgroundImage: "linear-gradient(to right, blue, green)"
        }
      }
    ],
    borders: [
      {
        level: 1,
        description: "Set the border style of the box to solid.",
        solution: "border-style: solid;",
        styles: {
          borderStyle: "solid"
        }
      },
      {
        level: 2,
        description: "Set the border width of the box to 2px.",
        solution: "border-width: 2px;",
        styles: {
          borderWidth: "2px"
        }
      },
      {
        level: 3,
        description: "Set the border color of the box to red.",
        solution: "border-color: red;",
        styles: {
          borderColor: "red"
        }
      },
      {
        level: 4,
        description: "Set the border of the box to have a different style for each side: top - dotted, right - dashed, bottom - solid, left - double.",
        solution: "border-top-style: dotted; border-right-style: dashed; border-bottom-style: solid; border-left-style: double;",
        styles: {
          borderTopStyle: "dotted",
          borderRightStyle: "dashed",
          borderBottomStyle: "solid",
          borderLeftStyle: "double"
        }
      },
      {
        level: 5,
        description: "Use the shorthand property to set the border of the box to be 2px solid black.",
        solution: "border: 2px solid black;",
        styles: {
          border: "2px solid black"
        }
      },
      {
        level: 6,
        description: "Set the border radius of the box to 5px.",
        solution: "border-radius: 5px;",
        styles: {
          borderRadius: "5px"
        }
      },
      {
        level: 7,
        description: "Set the border radius of the box to 50%.",
        solution: "border-radius: 50%;",
        styles: {
          borderRadius: "50%"
        }
      },
      {
        level: 8,
        description: "Set the border radius of the box to 10px for the top-left corner, 20px for the top-right corner, 30px for the bottom-right corner, and 40px for the bottom-left corner.",
        solution: "border-radius: 10px 20px 30px 40px;",
        styles: {
          borderRadius: "10px 20px 30px 40px"
        }
      },
      {
        level: 9,
        description: "Set the border width of the box to 5px, with a solid style and a blue color.",
        solution: "border: 5px solid blue;",
        styles: {
          border: "5px solid blue"
        }
      },
      {
        level: 10,
        description: "Create a bordered box with a dashed border, a width of 3px, and a color of green.",
        solution: "border: 3px dashed green;",
        styles: {
          border: "3px dashed green"
        }
      }
    ],
    margins: [
      {
        level: 1,
        description: "Set the margin of the box to 10 pixels on all sides.",
        solution: "margin: 10px;",
        styles: {
          margin: "10px"
        }
      },
      {
        level: 2,
        description: "Use the shorthand property to set the margin of the box to 20 pixels on all sides.",
        solution: "margin: 20px;",
        styles: {
          margin: "20px"
        }
      },
      {
        level: 3,
        description: "Set the margin of the box using the shorthand property to 10 pixels on all sides, except for the left margin, which should be 0 pixels.",
        solution: "margin: 10px 0 10px 10px;",
        styles: {
          margin: "10px 0 10px 10px"
        }
      },
      {
        level: 4,
        description: "Set the margin of the box using the shorthand property to 15 pixels on all sides, with the auto value applied to the left and right margins.",
        solution: "margin: 15px auto;",
        styles: {
          margin: "15px auto"
        }
      },
      {
        level: 5,
        description: "Set the margin of the box to 5 pixels on the top side, 10 pixels on the right side, 15 pixels on the bottom side, and 20 pixels on the left side.",
        solution: "margin: 5px 10px 15px 20px;",
        styles: {
          margin: "5px 10px 15px 20px"
        }
      },
      {
        level: 6,
        description: "Set the top margin of the box to 30 pixels and the bottom margin to 40 pixels. Make use of margin collapse.",
        solution: "margin-top: 30px; margin-bottom: 40px;",
        styles: {
          marginTop: "30px",
          marginBottom: "40px"
        }
      },
      {
        level: 7,
        description: "Set the margin of the box to 30 pixels on all sides using the shorthand property. Ensure that margin collapse does not occur.",
        solution: "margin: 30px;",
        styles: {
          margin: "30px"
        }
      },
      {
        level: 8,
        description: "Set the right margin of the box to inherit.",
        solution: "margin-right: inherit;",
        styles: {
          marginRight: "inherit"
        }
      },
      {
        level: 9,
        description: "Set the margin of the box using the shorthand property to 20 pixels on all sides, with the exception of the top margin, which should be 0 pixels.",
        solution: "margin: 0 20px 20px 20px;",
        styles: {
          margin: "0 20px 20px 20px"
        }
      },
      {
        level: 10,
        description: "Set the left margin of the box to auto.",
        solution: "margin-left: auto;",
        styles: {
          marginLeft: "auto"
        }
      }
    ],
    padding: [
      {
        level: 1,
        description: "Set the padding of the box to 10 pixels on all sides.",
        solution: "padding: 10px;",
        styles: {
          padding: "10px"
        }
      },
      {
        level: 2,
        description: "Use the shorthand property to set the padding of the box to 20 pixels on all sides.",
        solution: "padding: 20px;",
        styles: {
          padding: "20px"
        }
      },
      {
        level: 3,
        description: "Set the padding of the box to 5 pixels on the top side, 10 pixels on the right side, 15 pixels on the bottom side, and 20 pixels on the left side.",
        solution: "padding: 5px 10px 15px 20px;",
        styles: {
          padding: "5px 10px 15px 20px"
        }
      },
      {
        level: 4,
        description: "Set the padding of the box to 30 pixels on all sides using the shorthand property.",
        solution: "padding: 30px;",
        styles: {
          padding: "30px"
        }
      },
      {
        level: 5,
        description: "Set the padding of the box using the shorthand property to 10 pixels on all sides, except for the left padding, which should be 0 pixels.",
        solution: "padding: 10px 10px 10px 0;",
        styles: {
          padding: "10px 10px 10px 0"
        }
      },
      {
        level: 6,
        description: "Set the top padding of the box to 30 pixels and the bottom padding to 40 pixels.",
        solution: "padding-top: 30px; padding-bottom: 40px;",
        styles: {
          paddingTop: "30px",
          paddingBottom: "40px"
        }
      },
      {
        level: 7,
        description: "Set the padding of the box using the shorthand property to 20 pixels on all sides, with the exception of the top padding, which should be 0 pixels.",
        solution: "padding: 0 20px 20px 20px;",
        styles: {
          padding: "0 20px 20px 20px"
        }
      },
      {
        level: 8,
        description: "Set the right padding of the box to inherit.",
        solution: "padding-right: inherit;",
        styles: {
          paddingRight: "inherit"
        }
      },
      {
        level: 9,
        description: "Set the left padding of the box to auto.",
        solution: "padding-left: auto;",
        styles: {
          paddingLeft: "auto"
        }
      },
      {
        level: 10,
        description: "Set the padding of the box to 15 pixels on all sides, with the auto value applied to the left and right paddings.",
        solution: "padding: 15px auto;",
        styles: {
          padding: "15px auto"
        }
      }
    ],
    boxModel: [
      {
        level: 1,
        description: "Set the width of the box to 100 pixels.",
        solution: "width: 100px;",
        styles: {
          width: "100px",
        }
      },
      {
        level: 2,
        description: "Set the height of the box to 150 pixels.",
        solution: "height: 150px;",
        styles: {
          height: "150px",
        }
      },
      {
        level: 3,
        description: "Set both the width and height of the box to 200 pixels.",
        solution: "width: 200px; height: 200px;",
        styles: {
          width: "200px",
          height: "200px",
        }
      },
      {
        level: 4,
        description: "Set the width of the box to 300 pixels, add a padding of 20 pixels, and a background color of light pink.",
        solution: "width: 300px; padding: 20px; background-color: lightpink;",
        styles: {
          width: "300px",
          padding: "20px",
          backgroundColor: "lightpink"
        }
      },
      {
        level: 5,
        description: "Set the height of the box to 250 pixels, add a margin of 10 pixels, and a background color of light gray.",
        solution: "height: 250px; margin: 10px; background-color: lightgray;",
        styles: {
          height: "250px",
          margin: "10px",
          backgroundColor: "lightgray"
        }
      },
      {
        level: 6,
        description: "Float the box to the left and set a width of 200 pixels.",
        solution: "float: left; width: 200px;",
        styles: {
          float: "left",
          width: "200px",
        }
      },
      {
        level: 7,
        description: "Set the height of the box to 300 pixels, add a margin of 15 pixels, a border of 2 pixels dashed red, and a background color of light yellow.",
        solution: "height: 300px; margin: 15px; border: 2px dashed red; background-color: lightyellow;",
        styles: {
          height: "300px",
          margin: "15px",
          border: "2px dashed red",
          backgroundColor: "lightyellow"
        }
      },
      {
        level: 8,
        description: "Position the box absolutely with respect to its nearest positioned ancestor, 20 pixels from the top and 30 pixels from the left.",
        solution: "position: absolute; top: 20px; left: 30px;",
        styles: {
          position: "absolute",
          top: "20px",
          left: "30px",
        }
      },
      {
        level: 9,
        description: "Set the height of the box to 400 pixels, add a margin of 20 pixels, a padding of 15 pixels, a border of 4 pixels solid green, and a background color of light pink.",
        solution: "height: 400px; margin: 20px; padding: 15px; border: 4px solid green; background-color: lightpink;",
        styles: {
          height: "400px",
          margin: "20px",
          padding: "15px",
          border: "4px solid green",
          backgroundColor: "lightpink"
        }
      },
      {
        level: 10,
        description: "Set the width of the box to 450 pixels, set the height to 200 pixels, add a margin of 25 pixels, a padding of 20 pixels, a border of 5 pixels solid orange, and a background color of light gray.",
        solution: "width: 450px; height: 200px; margin: 25px; padding: 20px; border: 5px solid orange; background-color: lightgray;",
        styles: {
          width: "450px",
          height: "200px",
          margin: "25px",
          padding: "20px",
          border: "5px solid orange",
          backgroundColor: "lightgray"
        }
      }
    ],
    outline: [
      {
        level: 1,
        description: "Set the outline style of the box to solid.",
        solution: "outline-style: solid;",
        styles: {
          outlineStyle: "solid"
        }
      },
      {
        level: 2,
        description: "Set the outline width of the box to 2 pixels.",
        solution: "outline-width: 2px;",
        styles: {
          outlineWidth: "2px"
        }
      },
      {
        level: 3,
        description: "Set the outline color of the box to red using HEX value.",
        solution: "outline-color: #ff0000;",
        styles: {
          outlineColor: "#ff0000"
        }
      },
      {
        level: 4,
        description: "Set the outline color of the box to green using RGB value.",
        solution: "outline-color: rgb(0, 255, 0);",
        styles: {
          outlineColor: "rgb(0, 255, 0)"
        }
      },
      {
        level: 5,
        description: "Set the outline color of the box to blue using HSL value.",
        solution: "outline-color: hsl(240, 100%, 50%);",
        styles: {
          outlineColor: "hsl(240, 100%, 50%)"
        }
      },
      {
        level: 6,
        description: "Set the outline to dashed with a width of 3 pixels.",
        solution: "outline: 3px dashed;",
        styles: {
          outline: "3px dashed"
        }
      },
      {
        level: 7,
        description: "Set the outline to double with a width of 4 pixels.",
        solution: "outline: 4px double;",
        styles: {
          outline: "4px double"
        }
      },
      {
        level: 8,
        description: "Set the outline to groove with a width of 5 pixels.",
        solution: "outline: 5px groove;",
        styles: {
          outline: "5px groove"
        }
      },
      {
        level: 9,
        description: "Set the outline to inset with a width of 6 pixels.",
        solution: "outline: 6px inset;",
        styles: {
          outline: "6px inset"
        }
      },
      {
        level: 10,
        description: "Set the outline to outset with a width of 7 pixels.",
        solution: "outline: 7px outset;",
        styles: {
          outline: "7px outset"
        }
      }
    ],
    text: [
      {
        level: 1,
        description: "Set the text color to black.",
        solution: "color: black;",
        styles: {
          color: "black"
        }
      },
      {
        level: 2,
        description: "Set the text color to white and the background color to blue.",
        solution: "color: white; background-color: blue;",
        styles: {
          color: "white",
          backgroundColor: "blue"
        }
      },
      {
        level: 3,
        description: "Align the text to the center and set the text direction to right to left.",
        solution: "text-align: center; direction: rtl;",
        styles: {
          textAlign: "center",
          direction: "rtl"
        }
      },
      {
        level: 4,
        description: "Set the vertical alignment of the text to middle.",
        solution: "vertical-align: middle;",
        styles: {
          verticalAlign: "middle"
        }
      },
      {
        level: 5,
        description: "Add an underline to the text.",
        solution: "text-decoration: underline;",
        styles: {
          textDecoration: "underline"
        }
      },
      {
        level: 6,
        description: "Specify the color of the decoration line as red.",
        solution: "text-decoration-color: red;",
        styles: {
          textDecorationColor: "red"
        }
      },
      {
        level: 7,
        description: "Specify the style of the decoration line as dashed.",
        solution: "text-decoration-style: dashed;",
        styles: {
          textDecorationStyle: "dashed"
        }
      },
      {
        level: 8,
        description: "Specify the thickness of the decoration line as 2 pixels.",
        solution: "text-decoration-width: 2px;",
        styles: {
          textDecorationWidth: "2px"
        }
      },
      {
        level: 9,
        description: "Set the letter spacing to 2 pixels.",
        solution: "letter-spacing: 2px;",
        styles: {
          letterSpacing: "2px"
        }
      },
      {
        level: 10,
        description: "Apply text shadow with a shadow color of rgba(0, 0, 0, 0.5), horizontal offset of 2 pixels, vertical offset of 2 pixels, and blur radius of 3 pixels.",
        solution: "text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);",
        styles: {
          textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"
        }
      }
    ],
    beginnerRandomChallenges: [
      {
        level: 1,
        description: "Create a box with a red background, white text, and a solid black border.",
        solution: "background-color: red; color: white; border: 2px solid black;",
        styles: {
          backgroundColor: "red",
          color: "white",
          border: "2px solid black"
        }
      },
      {
        level: 2,
        description: "Design a button with a blue background, white text, and 10 pixels of padding.",
        solution: "background-color: blue; color: white; padding: 10px;",
        styles: {
          backgroundColor: "blue",
          color: "white",
          padding: "10px"
        }
      },
      {
        level: 3,
        description: "Create a card-like element with a light gray background, a solid border, and 20 pixels of padding.",
        solution: "background-color: lightgray; border: 1px solid black; padding: 20px;",
        styles: {
          backgroundColor: "lightgray",
          border: "1px solid black",
          padding: "20px"
        }
      },
      {
        level: 4,
        description: "Create a sidebar with a fixed width of 200 pixels, a gray background, and 15 pixels of margin.",
        solution: "width: 200px; background-color: gray; margin: 15px;",
        styles: {
          width: "200px",
          backgroundColor: "gray",
          margin: "15px"
        }
      },
      {
        level: 5,
        description: "Design a footer with a dark background color, centered text, and 20 pixels of padding.",
        solution: "background-color: darkgray; text-align: center; padding: 20px;",
        styles: {
          backgroundColor: "darkgray",
          textAlign: "center",
          padding: "20px"
        }
      },
      {
        level: 6,
        description: "Create a form with input fields, labels, and a submit button, all vertically aligned.",
        solution: "position: relative; display: block;",
        styles: {
          position: "relative",
          display: "block"
        }
      },
      {
        level: 7,
        description: "Set up a navigation menu with horizontal links evenly spaced and 10 pixels of padding.",
        solution: "display: inline-block; padding: 10px;",
        styles: {
          display: "inline-block",
          padding: "10px"
        }
      },
      {
        level: 8,
        description: "Design a banner with a background image, centered text, and 10 pixels of padding.",
        solution: "background-image: url('banner.jpg'); background-size: cover; text-align: center; padding: 10px;",
        styles: {
          backgroundImage: "url('banner.jpg')",
          backgroundSize: "cover",
          textAlign: "center",
          padding: "10px"
        }
      },
      {
        level: 9,
        description: "Create a layout with three equally spaced columns and 15 pixels of padding between them.",
        solution: "display: inline-block; width: calc(33.33% - 5px); margin-right: 15px;",
        styles: {
          display: "inline-block",
          width: "calc(33.33% - 5px)",
          marginRight: "15px"
        }
      },
      {
        level: 10,
        description: "Create a bordered box with a dashed border, a width of 3px, and a color of green, and centered text with 15 pixels of padding.",
        solution: "border: 3px dashed green; text-align: center; padding: 15px;",
        styles: {
          border: "3px dashed green",
          textAlign: "center",
          padding: "15px"
        }
      }
    ]
  },
  intermediate : {
    opacity: [
      {
        level: 1,
        description: "Apply a basic opacity of 0.5 to an element.",
        solution: "opacity: 0.5;",
        styles: {
          opacity: 0.5
        }
      },
      {
        level: 2,
        description: "Add a hover effect that changes the opacity to 1 on mouseover.",
        solution: "opacity: 1;",
        styles: {
          ":hover": {
            opacity: 1
          }
        }
      },
      {
        level: 3,
        description: "Apply opacity to an image to create a semi-transparent effect.",
        solution: "opacity: 0.7;",
        styles: {
          opacity: 0.7
        }
      },
      {
        level: 4,
        description: "Use RGBA color to set an element's background color with opacity.",
        solution: "background-color: rgba(255, 0, 0, 0.5);",
        styles: {
          backgroundColor: "rgba(255, 0, 0, 0.5)"
        }
      },
      {
        level: 5,
        description: "Apply opacity to text to create a semi-transparent text effect.",
        solution: "color: rgba(0, 0, 255, 0.7);",
        styles: {
          color: "rgba(0, 0, 255, 0.7)"
        }
      },
      {
        level: 6,
        description: "Use opacity to fade out an element over time using CSS transitions.",
        solution: "transition: opacity 0.5s ease-in-out; opacity: 0;",
        styles: {
          transition: "opacity 0.5s ease-in-out",
          opacity: 0
        }
      },
      {
        level: 7,
        description: "Create a smooth hover effect that fades in and out with opacity.",
        solution: "transition: opacity 0.5s ease-in-out; &:hover { opacity: 0.7; }",
        styles: {
          transition: "opacity 0.5s ease-in-out",
          ":hover": {
            opacity: 0.7
          }
        }
      },
      {
        level: 8,
        description: "Use opacity to create a frosted glass effect on a background image.",
        solution: "background-color: rgba(255, 255, 255, 0.5);",
        styles: {
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        }
      },
      {
        level: 9,
        description: "Apply opacity to a pseudo-element to overlay a semi-transparent layer.",
        solution: "&::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); }",
        styles: {
          "&::after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      },
      {
        level: 10,
        description: "Create a fading slideshow by changing the opacity of multiple images.",
        solution: "transition: opacity 0.5s ease-in-out; &:hover { opacity: 0.5; }",
        styles: {
          transition: "opacity 0.5s ease-in-out",
          ":hover": {
            opacity: 0.5
          }
        }
      }
    ], 
    lists: [
      {
        level: 1,
        description: "Change the list item markers to squares.",
        solution: "list-style-type: square;",
        styles: {
          listStyleType: "square"
        }
      },
      {
        level: 2,
        description: "Position the list item markers to the outside of the list items.",
        solution: "list-style-position: outside;",
        styles: {
          listStylePosition: "outside"
        }
      },
      {
        level: 3,
        description: "Remove default settings for list styling.",
        solution: "list-style: none;",
        styles: {
          listStyle: "none"
        }
      },
      {
        level: 4,
        description: "Use the list shorthand property to set list style to none, position to inside, and image to 'url('image.png')'.",
        solution: "list-style: none inside url('image.png');",
        styles: {
          listStyle: "none inside url('image.png')"
        }
      },
      {
        level: 5,
        description: "Style the list items with different background colors.",
        solution: "background-color: #f0f0f0;",
        styles: {
          backgroundColor: "#f0f0f0"
        }
      },
      {
        level: 6,
        description: "Change the list item markers to circles and position them inside the list items.",
        solution: "list-style-type: circle; list-style-position: inside;",
        styles: {
          listStyleType: "circle",
          listStylePosition: "inside"
        }
      },
      {
        level: 7,
        description: "Set a custom image as the list item marker.",
        solution: "list-style-image: url('custom-marker.png');",
        styles: {
          listStyleImage: "url('custom-marker.png')"
        }
      },
      {
        level: 8,
        description: "Apply alternating background colors to list items using nth-child selector.",
        solution: "background-color: #f0f0f0; &:nth-child(even) { background-color: #e0e0e0; }",
        styles: {
          backgroundColor: "#f0f0f0",
          "&:nth-child(even)": {
            backgroundColor: "#e0e0e0"
          }
        }
      },
      {
        level: 9,
        description: "Add padding and margin to list items for spacing.",
        solution: "padding: 10px; margin-bottom: 5px;",
        styles: {
          padding: "10px",
          marginBottom: "5px"
        }
      },
      {
        level: 10,
        description: "Style the list with a border and box shadow.",
        solution: "border: 1px solid #ccc; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);",
        styles: {
          border: "1px solid #ccc",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
        }
      }
    ],
    tables: [
      {
        level: 1,
        description: "Add borders to all table cells.",
        solution: "border: 1px solid black;",
        styles: {
          border: "1px solid black"
        }
      },
      {
        level: 2,
        description: "Create a full-width table that spans the entire width of its container.",
        solution: "width: 100%;",
        styles: {
          width: "100%"
        }
      },
      {
        level: 3,
        description: "Collapse table borders to avoid doubled lines.",
        solution: "border-collapse: collapse;",
        styles: {
          borderCollapse: "collapse"
        }
      },
      {
        level: 4,
        description: "Set the table width to 500 pixels and height to 300 pixels.",
        solution: "width: 500px; height: 300px;",
        styles: {
          width: "500px",
          height: "300px"
        }
      },
      {
        level: 5,
        description: "Align table content horizontally to the center.",
        solution: "text-align: center;",
        styles: {
          textAlign: "center"
        }
      },
      {
        level: 6,
        description: "Align table content vertically to the middle.",
        solution: "vertical-align: middle;",
        styles: {
          verticalAlign: "middle"
        }
      },
      {
        level: 7,
        description: "Add padding to table cells for spacing.",
        solution: "padding: 10px;",
        styles: {
          padding: "10px"
        }
      },
      {
        level: 8,
        description: "Create horizontal dividers between table rows.",
        solution: "border-bottom: 1px solid black;",
        styles: {
          borderBottom: "1px solid black"
        }
      },
      {
        level: 9,
        description: "Make the table rows change color on hover.",
        solution: "transition: background-color 0.3s ease; &:hover { background-color: #f0f0f0; }",
        styles: {
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#f0f0f0"
          }
        }
      },
      {
        level: 10,
        description: "Create striped rows alternating colors.",
        solution: "&:nth-child(even) { background-color: #f0f0f0; }",
        styles: {
          "&:nth-child(even)": {
            backgroundColor: "#f0f0f0"
          }
        }
      }
    ],
    counters: [
      {
        level: 1,
        description: "Use a counter to number the list items in an ordered list.",
        solution: "counter-reset: item;",
        styles: {
          counterReset: "item"
        }
      },
      {
        level: 2,
        description: "Increment the counter for each list item.",
        solution: "counter-increment: item;",
        styles: {
          counterIncrement: "item"
        }
      },
      {
        level: 3,
        description: "Display the counter value before each list item.",
        solution: "content: counter(item) '. ';",
        styles: {
          content: "counter(item) '. '"
        }
      },
      {
        level: 4,
        description: "Style the counter value with a different color.",
        solution: "color: blue;",
        styles: {
          color: "blue"
        }
      },
      {
        level: 5,
        description: "Change the counter style to uppercase letters.",
        solution: "list-style-type: upper-alpha;",
        styles: {
          listStyleType: "upper-alpha"
        }
      },
      {
        level: 6,
        description: "Reset the counter for nested list items.",
        solution: "counter-reset: subitem;",
        styles: {
          counterReset: "subitem"
        }
      },
      {
        level: 7,
        description: "Increment the counter for nested list items.",
        solution: "counter-increment: subitem;",
        styles: {
          counterIncrement: "subitem"
        }
      },
      {
        level: 8,
        description: "Display the nested counter value before each list item.",
        solution: "content: counter(item) '.' counter(subitem) '. ';",
        styles: {
          content: "counter(item) '.' counter(subitem) '. '"
        }
      },
      {
        level: 9,
        description: "Style the nested counter value with a different color.",
        solution: "color: red;",
        styles: {
          color: "red"
        }
      },
      {
        level: 10,
        description: "Change the nested counter style to lowercase Roman numerals.",
        solution: "list-style-type: lower-roman;",
        styles: {
          listStyleType: "lower-roman"
        }
      }
    ],
    pagination: [
      {
        level: 1,
        description: "Style the pagination links with a background color of white and black text color.",
        solution: "background-color: white; color: black;",
        styles: {
          backgroundColor: "white",
          color: "black"
        }
      },
      {
        level: 2,
        description: "Add padding to the pagination links to increase spacing between text and border.",
        solution: "padding: 8px 12px;",
        styles: {
          padding: "8px 12px"
        }
      },
      {
        level: 3,
        description: "Apply a border to the pagination links with a solid style, 1px width, and grey color.",
        solution: "border: 1px solid grey;",
        styles: {
          border: "1px solid grey"
        }
      },
      {
        level: 4,
        description: "Add a hover effect that changes the background color to light grey and text color to white.",
        solution: "background-color: lightgrey; color: white;",
        styles: {
          ":hover": {
            backgroundColor: "lightgrey",
            color: "white"
          }
        }
      },
      {
        level: 5,
        description: "Apply a transition effect to smoothly animate color changes over 0.3 seconds.",
        solution: "transition: color 0.3s, background-color 0.3s;",
        styles: {
          transition: "color 0.3s, background-color 0.3s"
        }
      },
      {
        level: 6,
        description: "Add rounded corners to the pagination links with a border-radius of 4px.",
        solution: "border-radius: 4px;",
        styles: {
          borderRadius: "4px"
        }
      },
      {
        level: 7,
        description: "Create a pagination container with centered alignment.",
        solution: "display: flex; justify-content: center; align-items: center;",
        styles: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      },
      {
        level: 8,
        description: "Style the active pagination link with a background color of grey and white text color.",
        solution: "background-color: grey; color: white;",
        styles: {
          "&.active": {
            backgroundColor: "grey",
            color: "white"
          }
        }
      },
      {
        level: 9,
        description: "Add a box shadow to the pagination links for a raised effect.",
        solution: "box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);",
        styles: {
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
        }
      },
      {
        level: 10,
        description: "Customize the pagination style with additional properties such as font size and font weight.",
        solution: "font-size: 14px; font-weight: bold;",
        styles: {
          fontSize: "14px",
          fontWeight: "bold"
        }
      }
    ],
    transforms: [
      {
        level: 1,
        description: "Rotate the element by 45 degrees.",
        solution: "transform: rotate(45deg);",
        styles: {
          transform: "rotate(45deg)"
        }
      },
      {
        level: 2,
        description: "Scale the element to be twice its original size.",
        solution: "transform: scale(2);",
        styles: {
          transform: "scale(2)"
        }
      },
      {
        level: 3,
        description: "Translate the element 50 pixels to the right and 20 pixels down.",
        solution: "transform: translate(50px, 20px);",
        styles: {
          transform: "translate(50px, 20px)"
        }
      },
      {
        level: 4,
        description: "Skew the element horizontally by 30 degrees.",
        solution: "transform: skewX(30deg);",
        styles: {
          transform: "skewX(30deg)"
        }
      },
      {
        level: 5,
        description: "Rotate the element around the X-axis by 45 degrees.",
        solution: "transform: rotateX(45deg);",
        styles: {
          transform: "rotateX(45deg)"
        }
      },
      {
        level: 6,
        description: "Rotate the element around the Y-axis by 30 degrees.",
        solution: "transform: rotateY(30deg);",
        styles: {
          transform: "rotateY(30deg)"
        }
      },
      {
        level: 7,
        description: "Rotate the element around the Z-axis by 60 degrees.",
        solution: "transform: rotateZ(60deg);",
        styles: {
          transform: "rotateZ(60deg)"
        }
      },
      {
        level: 8,
        description: "Apply a perspective to the element.",
        solution: "transform: perspective(500px);",
        styles: {
          transform: "perspective(500px)"
        }
      },
      {
        level: 9,
        description: "Rotate the element in 3D space around the X, Y, and Z axes.",
        solution: "transform: rotateX(45deg) rotateY(30deg) rotateZ(60deg);",
        styles: {
          transform: "rotateX(45deg) rotateY(30deg) rotateZ(60deg)"
        }
      },
      {
        level: 10,
        description: "Translate the element along the X-axis by 50 pixels.",
        solution: "transform: translateX(50px);",
        styles: {
          transform: "translateX(50px)"
        }
      }
    ],
  },
  advanced : {}

};
export default challenges

