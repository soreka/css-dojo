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
  },
  intermediate : {},
  advanced : {}

};
export default challenges

