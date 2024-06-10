const challenges = {
  beginner: {
    colors: [
      {
        level: 1,
        description: "Set the background color of the box to blue.",
        solution: "background-color: blue;",
        styles: {
          backgroundColor: "blue"
        },
        hints: [
          "Hint 1: Picture the webpage as a canvas. What's the first thing you'd change?",
          "Hint 2: Look for a CSS property that sets the backdrop of an element.",
          "Hint 3: This property involves the background and a specific attribute of it.",
          "Hint 4: Consider a color often associated with oceans and calmness.",
          "Hint 5: Combine 'background-color' with the serene color of the ocean."
        ]
      },
      {
        level: 2,
        description: "Set the text color of the paragraph to red.",
        solution: "color: red;",
        styles: {
          color: "red"
        },
        hints: [
          "Hint 1: Imagine the text as a brush stroke on the canvas. How would you alter its hue?",
          "Hint 2: Search for a CSS property that affects the color of text.",
          "Hint 3: This property deals directly with the visual aspect of text.",
          "Hint 4: Think about the color of something hot or fiery.",
          "Hint 5: Combine 'color' with the intense hue of fire."
        ]
      },
      {
        level: 3,
        description: "Set the border color of the box to green.",
        solution: "border-color: green;",
        styles: {
          borderColor: "green"
        },
        hints: [
          "Hint 1: Envision outlining the edges of your canvas. What tool would you use?",
          "Hint 2: Explore CSS properties that define the border appearance.",
          "Hint 3: This property modifies the color of the border surrounding an element.",
          "Hint 4: Consider the color of leaves on a healthy plant.",
          "Hint 5: Pair 'border-color' with the vibrant green of fresh foliage."
        ]
      },
      {
        level: 4,
        description: "Set the background color of the box to #3498db.",
        solution: "background-color: #3498db;",
        styles: {
          backgroundColor: "#3498db"
        },
        hints: [
          "Hint 1: Visualize painting a specific area with a precise shade. What method would you use?",
          "Hint 2: Search for a way to represent colors using hexadecimal values in CSS.",
          "Hint 3: This property involves setting the background color using hexadecimal notation.",
          "Hint 4: Think about a color often associated with clear skies and tranquility.",
          "Hint 5: Utilize 'background-color' with the soothing hue of a cloudless sky."
        ]
      },
      {
        level: 5,
        description: "Set the text color of the paragraph to rgb(255, 99, 71).",
        solution: "color: rgb(255, 99, 71);",
        styles: {
          color: "rgb(255, 99, 71)"
        },
        hints: [
          "Hint 1: Imagine mixing light in varying intensities to create a specific color. What method does this resemble?",
          "Hint 2: Look for a CSS property that allows you to specify colors using red, green, and blue values.",
          "Hint 3: This property enables precise control over the text color using RGB values.",
          "Hint 4: Consider the color of ripe tomatoes or strawberries.",
          "Hint 5: Incorporate 'color' with the rich red of a ripe fruit."
        ]
      },
      {
        level: 6,
        description: "Set the border color of the box to hsl(120, 100%, 50%).",
        solution: "border-color: hsl(120, 100%, 50%);",
        styles: {
          borderColor: "hsl(120, 100%, 50%)"
        },
          hints: [
            "Hint 1: Imagine adjusting the border appearance using a specific method. What could it be?",
            "Hint 2: Look for a CSS property that allows you to define border color in a unique way.",
            "Hint 3: This property involves specifying the border color using a different color representation.",
            "Hint 4: Consider the color wheel and how different color systems can be represented.",
            "Hint 5: Use 'border-color' with the specified hue, saturation, and lightness values."
          ]
      },
      {
        level: 7,
        description: "Set the background color of the box to rgba(255, 165, 0, 0.5).",
        solution: "background-color: rgba(255, 165, 0, 0.5);",
        styles: {
          backgroundColor: "rgba(255, 165, 0, 0.5)"
        },
        hints: [
          "Hint 1: Picture the background of the box as a translucent layer. How would you describe it?",
          "Hint 2: Explore CSS properties related to setting background color with transparency.",
          "Hint 3: This property involves specifying the background color with an alpha channel.",
          "Hint 4: Think about representing colors with a combination of red, green, blue, and opacity.",
          "Hint 5: Combine 'background-color' with the RGBA color values provided."
        ]
      },
      {
        level: 8,
        description: "Set the text color of the paragraph to hsl(240, 100%, 50%).",
        solution: "color: hsl(240, 100%, 50%);",
        styles: {
          color: "hsl(240, 100%, 50%)"
        },
        hints: [
          "Hint 1: Visualize the text color as a beam of light. How would you manipulate it?",
          "Hint 2: Search for a CSS property that allows you to define text color using a different color model.",
          "Hint 3: This property involves specifying the text color using hue, saturation, and lightness values.",
          "Hint 4: Consider the color spectrum and how hues are represented in different color systems.",
          "Hint 5: Utilize 'color' with the specified hue, saturation, and lightness values."
        ]
      },
      {
        level: 9,
        description: "Set the border color of the box to #FF5733.",
        solution: "border-color: #FF5733;",
        styles: {
          borderColor: "#FF5733"
        },
        hints: [
          "Hint 1: Imagine painting the borders of the box with a specific color. What notation could you use?",
          "Hint 2: Look for a way to represent colors using hexadecimal values in CSS.",
          "Hint 3: This property involves setting the border color using hexadecimal notation.",
          "Hint 4: Consider the hexadecimal representation of the specified color.",
          "Hint 5: Utilize 'border-color' with the specified hexadecimal color."
        ]
      },
      {
        level: 10,
        description: "Set the background color of the box to a linear gradient going from red to yellow.",
        solution: "background: linear-gradient(to right, red, yellow);",
        styles: {
          background: "linear-gradient(to right, red, yellow)"
        },
        hints: [
          "Hint 1: Envision the background transitioning smoothly from one color to another. What technique would you use?",
          "Hint 2: Explore CSS properties related to creating gradients.",
          "Hint 3: This property involves setting the background using a linear gradient.",
          "Hint 4: Consider the direction and colors specified in the linear gradient.",
          "Hint 5: Use 'background' with the linear gradient specified from red to yellow."
        ]
      }
    ],
    backgrounds : [
      {
        level: 1,
        description: "Set the background color of the box to lightgrey.",
        solution: "background-color: lightgrey;",
        styles: {
          backgroundColor: "lightgrey"
        },
        hints: [
          "Hint 1: Consider how to set the background color of an element. What CSS property allows you to do this?",
          "Hint 2: Look for a CSS property that controls the background color.",
          "Hint 3: This property involves setting the color of the background to a specific value.",
          "Hint 4: Consider how you can make the background light grey.",
          "Hint 5: Utilize the 'background-color' property with the specified value for light grey."
        ]
      },
      {
        level: 2,
        description: "Set the background color of the box to teal and the border style to dashed.",
        solution: "background-color: teal; border-style: dashed;",
        styles: {
          backgroundColor: "teal",
          borderStyle: "dashed"
        },
        hints: [
          "Hint 1: Visualize changing the background color and border style of the box. What CSS properties might you use?",
          "Hint 2: Look for CSS properties that control the background color and border style.",
          "Hint 3: These properties involve setting the color of the background and the style of the border.",
          "Hint 4: Consider how you can make the background teal and the border style dashed.",
          "Hint 5: Utilize the 'background-color' and 'border-style' properties with the specified values."
        ]
      },
      {
        level: 3,
        description: "Set the background color of the box to rgba(255, 0, 0, 0.3).",
        solution: "background-color: rgba(255, 0, 0, 0.3);",
        styles: {
          backgroundColor: "rgba(255, 0, 0, 0.3)"
        },
        hints: [
          "Hint 1: Imagine setting the background color of the box with a specific opacity. What CSS property could you use?",
          "Hint 2: Look for a CSS property that allows you to specify the opacity of an element.",
          "Hint 3: This property involves setting the opacity of the background color.",
          "Hint 4: Consider how you can make the background red with 30% opacity.",
          "Hint 5: Utilize the 'background-color' property with the specified value for red and opacity."
        ]
      },
      {
        level: 4,
        description: "Set the background color of the box to lightblue.",
        solution: "background-color: lightblue;",
        styles: {
          backgroundColor: "lightblue"
        },
        hints: [
          "Hint 1: Think about how to set the background color of the box. What CSS property might you use?",
          "Hint 2: Look for a CSS property that controls the background color.",
          "Hint 3: This property involves setting the color of the background to a specific value.",
          "Hint 4: Consider how you can make the background light blue.",
          "Hint 5: Utilize the 'background-color' property with the specified value for light blue."
        ]
      },
      {
        level: 5,
        description: "Set the background color of the box to cornsilk and the border style to solid.",
        solution: "background-color: cornsilk; border-style: solid;",
        styles: {
          backgroundColor: "cornsilk",
          borderStyle: "solid"
        },
        hints: [
          "Hint 1: Visualize changing the background color and border style of the box. What CSS properties might you use?",
          "Hint 2: Look for CSS properties that control the background color and border style.",
          "Hint 3: These properties involve setting the color of the background and the style of the border.",
          "Hint 4: Consider how you can make the background cornsilk and the border style solid.",
          "Hint 5: Utilize the 'background-color' and 'border-style' properties with the specified values."
        ]
      },
      {
        level: 6,
        description: "Set the background color of the box to salmon.",
        solution: "background-color: salmon;",
        styles: {
          backgroundColor: "salmon"
        },
        hints: [
          "Hint 1: Imagine setting the background color of the box. What CSS property could you use?",
          "Hint 2: Look for a CSS property that controls the background color.",
          "Hint 3: This property involves setting the color of the background to a specific value.",
          "Hint 4: Consider how you can make the background salmon.",
          "Hint 5: Utilize the 'background-color' property with the specified value for salmon."
        ]
      },
      {
        level: 7,
        description: "Set the background color of the box to violet and the opacity to 0.7.",
        solution: "background-color: violet; opacity: 0.7;",
        styles: {
          backgroundColor: "violet",
          opacity: "0.7"
        },
        hints: [
          "Hint 1: Think about setting the background color of the box with a specific opacity. What CSS property might you use?",
          "Hint 2: Look for a CSS property that allows you to specify the opacity of an element.",
          "Hint 3: This property involves setting the opacity of the background color.",
          "Hint 4: Consider how you can make the background violet with 70% opacity.",
          "Hint 5: Utilize the 'background-color' property with the specified value for violet and opacity."
        ]
      },
      {
        level: 8,
        description: "Set the background color of the box to peachpuff.",
        solution: "background-color: peachpuff;",
        styles: {
          backgroundColor: "peachpuff"
        },
        hints: [
          "Hint 1: Visualize changing the background color of the box. What CSS property might you use?",
          "Hint 2: Look for a CSS property that controls the background color.",
          "Hint 3: This property involves setting the color of the background to a specific value.",
          "Hint 4: Consider how you can make the background peachpuff.",
          "Hint 5: Utilize the 'background-color' property with the specified value for peachpuff."
        ]
      },
      {
        level: 9,
        description: "Set the background color of the box to lightcoral, the border style to dotted, and the opacity to 0.6.",
        solution: "background-color: lightcoral; border-style: dotted; opacity: 0.6;",
        styles: {
          backgroundColor: "lightcoral",
          borderStyle: "dotted",
          opacity: "0.6"
        },
        hints: [
          "Hint 1: Imagine changing the background color and border style of the box, along with its opacity. What CSS properties could you use?",
          "Hint 2: Look for CSS properties that control the background color, border style, and opacity.",
          "Hint 3: These properties involve setting the color of the background, the style of the border, and the opacity.",
          "Hint 4: Consider how you can make the background light coral, the border style dotted, and the opacity 60%.",
          "Hint 5: Utilize the 'background-color', 'border-style', and 'opacity' properties with the specified values."
        ]
      },
      {
        level: 10,
        description: "Set a linear gradient background from red to yellow.",
        solution: "background-image: linear-gradient(to right, red, yellow);",
        styles: {
          backgroundImage: "linear-gradient(to right, red, yellow)"
        },
        hints: [
          "Hint 1: Think about creating a linear gradient background for the box. What CSS property might you use?",
          "Hint 2: Look for a CSS property that allows you to create gradients.",
          "Hint 3: This property involves specifying the type and colors of the gradient.",
          "Hint 4: Consider how you can create a linear gradient from red to yellow.",
          "Hint 5: Utilize the 'background-image' property with the specified linear gradient values."
        ]  
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
        description: "Design a banner with a solid background color, centered text, and 10 pixels of padding.",
        solution: "background-color: lightblue; text-align: center; padding: 10px;",
        styles: {
          backgroundColor: "lightblue",
          textAlign: "center",
          padding: "10px"
        }
      },
      {
        level: 9,
        description: "Create a layout with three equally spaced columns and 15 pixels of padding between them.",
        solution: "display: inline-block; width: 30%; margin-right: 5%;",
        styles: {
          display: "inline-block",
          width: "30%",
          marginRight: "5%"
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
  intermediate: {
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
        description: "Use the list shorthand property to set list style to none, position to inside, and color to 'lightgreen'.",
        solution: "list-style: none inside lightgreen;",
        styles: {
          listStyle: "none inside lightgreen"
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
        description: "Set a custom color as the list item marker.",
        solution: "list-style: disc lightblue;",
        styles: {
          listStyle: "disc lightblue"
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
    position: [
      {
        level: 1,
        description: "Set the element's position to relative.",
        solution: "position: relative;",
        styles: {
          position: "relative",
        }
      },
      {
        level: 2,
        description: "Position the element 20 pixels from the top of its containing element.",
        solution: "position: relative; top: 20px;",
        styles: {
          position: "relative",
          top: "20px",
        }
      },
      {
        level: 3,
        description: "Float the element to the right within its containing element.",
        solution: "float: right;",
        styles: {
          float: "right",
        }
      },
      {
        level: 4,
        description: "Center the element horizontally within its containing element.",
        solution: "position: absolute; left: 50%; transform: translateX(-50%);",
        styles: {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }
      },
      {
        level: 5,
        description: "Place the element at the top-right corner of its containing element.",
        solution: "position: absolute; top: 0; right: 0;",
        styles: {
          position: "absolute",
          top: "0",
          right: "0",
        }
      },
      {
        level: 6,
        description: "Stack the element on top of its siblings.",
        solution: "position: absolute; z-index: 1;",
        styles: {
          position: "absolute",
          zIndex: "1",
        }
      },
      {
        level: 7,
        description: "Overlap the element with its adjacent sibling.",
        solution: "position: relative; left: -20px;",
        styles: {
          position: "relative",
          left: "-20px",
        }
      },
      {
        level: 8,
        description: "Make the element stay fixed at the bottom of the viewport.",
        solution: "position: fixed; bottom: 0;",
        styles: {
          position: "fixed",
          bottom: "0",
        }
      },
      {
        level: 9,
        description: "Create a sticky element that remains within its container while scrolling.",
        solution: "position: sticky; top: 0;",
        styles: {
          position: "sticky",
          top: "0",
        }
      },
      {
        level: 10,
        description: "Make the element cover the entire viewport.",
        solution: "position: fixed; top: 0; left: 0; width: 100%; height: 100%;",
        styles: {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }
      },
    ],
    navigationBar: [
      {
        level: 1,
        description: "Style the navigation bar with a background color of black and white text color.",
        solution: "background-color: black; color: white;",
        styles: {
          backgroundColor: "black",
          color: "white"
        }
      },
      {
        level: 2,
        description: "Add padding to the navigation links to increase spacing.",
        solution: "padding: 10px 20px;",
        styles: {
          padding: "10px 20px"
        }
      },
      {
        level: 3,
        description: "Apply a border to the navigation bar with a solid style, 1px width, and grey color.",
        solution: "border-bottom: 1px solid grey;",
        styles: {
          borderBottom: "1px solid grey"
        }
      },
      {
        level: 4,
        description: "Add a hover effect that changes the background color to grey and text color to black.",
        solution: "background-color: grey; color: black;",
        styles: {
          ":hover": {
            backgroundColor: "grey",
            color: "black"
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
        description: "Add rounded corners to the navigation links with a border-radius of 4px.",
        solution: "border-radius: 4px;",
        styles: {
          borderRadius: "4px"
        }
      },
      {
        level: 7,
        description: "Create a navigation container with centered alignment.",
        solution: "display: flex; justify-content: center;",
        styles: {
          display: "flex",
          justifyContent: "center"
        }
      },
      {
        level: 8,
        description: "Style the active navigation link with a background color of grey and white text color.",
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
        description: "Add a box shadow to the navigation bar for a raised effect.",
        solution: "box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);",
        styles: {
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
        }
      },
      {
        level: 10,
        description: "Customize the navigation bar style with additional properties such as font size and font weight.",
        solution: "font-size: 16px; font-weight: bold;",
        styles: {
          fontSize: "16px",
          fontWeight: "bold"
        }
      }
    ],
    mediaQueries: [
      {
        level: 1,
        description: "Create a media query that targets screens smaller than 600px and changes the background color.",
        solution: "@media (max-width: 600px) { body { background-color: lightblue; } }",
        styles: {
          "@media (max-width: 600px)": {
            body: {
              backgroundColor: "lightblue"
            }
          }
        }
      },
      {
        level: 2,
        description: "Target screens between 600px and 900px and change the font size.",
        solution: "@media (min-width: 600px) and (max-width: 900px) { body { font-size: 16px; } }",
        styles: {
          "@media (min-width: 600px) and (max-width: 900px)": {
            body: {
              fontSize: "16px"
            }
          }
        }
      },
      {
        level: 3,
        description: "Adjust padding and margin for tablets with a width greater than 900px.",
        solution: "@media (min-width: 900px) { .container { padding: 20px; margin: 0 auto; } }",
        styles: {
          "@media (min-width: 900px)": {
            ".container": {
              padding: "20px",
              margin: "0 auto"
            }
          }
        }
      },
      {
        level: 4,
        description: "Target landscape orientation and adjust the layout.",
        solution: "@media (orientation: landscape) { .container { flex-direction: row; } }",
        styles: {
          "@media (orientation: landscape)": {
            ".container": {
              flexDirection: "row"
            }
          }
        }
      },
      {
        level: 5,
        description: "Change the navigation layout for screens larger than 1200px.",
        solution: "@media (min-width: 1200px) { .nav { display: flex; justify-content: space-between; } }",
        styles: {
          "@media (min-width: 1200px)": {
            ".nav": {
              display: "flex",
              justifyContent: "space-between"
            }
          }
        }
      },
      {
        level: 6,
        description: "Target high-resolution displays and adjust image quality.",
        solution: "@media (min-width: 1024px) { img { image-rendering: auto; } }",
        styles: {
          "@media (min-width: 1024px)": {
            img: {
              imageRendering: "auto"
            }
          }
        }
      },
      {
        level: 7,
        description: "Adjust font styles for screens with a pixel density above 1.5.",
        solution: "@media (max-width: 768px) { body { font-size: 16px; } }",
        styles: {
          "@media (max-width: 768px)": {
            body: {
              fontSize: "16px"
            }
          }
        }
      },  
      {
        level: 8,
        description: "Target print media and adjust page layout.",
        solution: "@media print { body { background-color: white; color: black; } }",
        styles: {
          "@media print": {
            body: {
              backgroundColor: "white",
              color: "black"
            }
          }
        }
      },
      {
        level: 9,
        description: "Create a media query for devices with a max-width of 320px and adjust the layout.",
        solution: "@media (max-width: 320px) { .container { width: 100%; } }",
        styles: {
          "@media (max-width: 320px)": {
            ".container": {
              width: "100%"
            }
          }
        }
      },
      {
        level: 10,
        description: "Combine multiple media features to create a complex media query targeting specific device configurations.",
        solution: "@media (min-width: 800px) and (orientation: landscape), (min-width: 1200px) { .container { max-width: 1000px; } }",
        styles: {
          "@media (min-width: 800px) and (orientation: landscape), (min-width: 1200px)": {
            ".container": {
              maxWidth: "1000px"
            }
          }
        }
      }
    ],
    intermediateRandomChallenges: [
      {
        level: 1,
        description: "Create a semi-transparent overlay with opacity and a background color.",
        solution: "position: relative; &::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); }",
        styles: {
          position: "relative",
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
        level: 2,
        description: "Style a list with alternating background colors and custom bullet points.",
        solution: "list-style-type: none; li { padding: 10px; &:nth-child(even) { background-color: #f0f0f0; } &:before { content: '•'; color: blue; margin-right: 10px; } }",
        styles: {
          listStyleType: "none",
          li: {
            padding: "10px",
            "&:nth-child(even)": {
              backgroundColor: "#f0f0f0"
            },
            "&:before": {
              content: "'•'",
              color: "blue",
              marginRight: "10px"
            }
          }
        }
      },
      {
        level: 3,
        description: "Create a table with borders and centered content.",
        solution: "border: 1px solid #ccc; td { text-align: center; }",
        styles: {
          border: "1px solid #ccc",
          td: {
            textAlign: "center"
          }
        }
      },
      {
        level: 4,
        description: "Number the list items using counters and style them differently.",
        solution: "counter-reset: item; li { counter-increment: item; &:before { content: counter(item) '. '; color: red; } }",
        styles: {
          counterReset: "item",
          li: {
            counterIncrement: "item",
            "&:before": {
              content: "counter(item) '. '",
              color: "red"
            }
          }
        }
      },
      {
        level: 5,
        description: "Create a pagination system with links and hover effects.",
        solution: "a { text-decoration: none; &:hover { text-decoration: underline; } }",
        styles: {
          a: {
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline"
            }
          }
        }
      },
      {
        level: 6,
        description: "Apply various transform effects to an element.",
        solution: "transform: rotate(45deg) scale(1.5) translate(50px, 20px) skewX(30deg);",
        styles: {
          transform: "rotate(45deg) scale(1.5) translate(50px, 20px) skewX(30deg)"
        }
      },
      {
        level: 7,
        description: "Style a navigation bar with hover effects and a box shadow.",
        solution: "box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); a { &:hover { background-color: #f0f0f0; } }",
        styles: {
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          a: {
            "&:hover": {
              backgroundColor: "#f0f0f0"
            }
          }
        }
      },
      {
        level: 8,
        description: "Create media queries to adjust layout for different screen sizes.",
        solution: "@media (max-width: 768px) { .container { width: 100%; } }",
        styles: {
          "@media (max-width: 768px)": {
            ".container": {
              width: "100%"
            }
          }
        }
      },
      {
        level: 9,
        description: "Design a card component with rounded corners and a background image.",
        solution: "border-radius: 8px; background-image: url('card-bg.jpg');",
        styles: {
          borderRadius: "8px",
          backgroundImage: "url('card-bg.jpg')"
        }
      },
      {
        level: 10,
        description: "Implement a responsive grid layout using CSS Grid or Flexbox.",
        solution: "display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;",
        styles: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }
      }
    ]
  },
  advanced: {
    multipleColumns: [
      {
        level: 1,
        description: "Create a basic two-column layout with equal width.",
        solution: "column-count: 2;",
        styles: {
          columnCount: 2
        }
      },
      {
        level: 2,
        description: "Set the gap between columns to 20 pixels.",
        solution: "column-gap: 20px;",
        styles: {
          columnGap: "20px"
        }
      },
      {
        level: 3,
        description: "Apply a rule to balance the height of columns.",
        solution: "column-fill: balance;",
        styles: {
          columnFill: "balance"
        }
      },
      {
        level: 4,
        description: "Create a three-column layout with equal width and increased gap.",
        solution: "column-count: 3; column-gap: 30px;",
        styles: {
          columnCount: 3,
          columnGap: "30px"
        }
      },
      {
        level: 5,
        description: "Set the column width to 200 pixels for a fixed layout.",
        solution: "column-width: 200px;",
        styles: {
          columnWidth: "200px"
        }
      },
      {
        level: 6,
        description: "Create a magazine-style layout with varied column widths.",
        solution: "column-count: auto; column-width: 200px;",
        styles: {
          columnCount: "auto",
          columnWidth: "200px"
        }
      },
      {
        level: 7,
        description: "Set the column rule to provide visual separation between columns.",
        solution: "column-rule: 2px solid #ccc;",
        styles: {
          columnRule: "2px solid #ccc"
        }
      },
      {
        level: 8,
        description: "Apply a rule to break column layout only at specified breakpoints.",
        solution: "@media (min-width: 800px) { .container { column-count: 2; } }",
        styles: {
          "@media (min-width: 800px)": {
            ".container": {
              columnCount: 2
            }
          }
        }
      },
      {
        level: 9,
        description: "Create a complex layout with multiple column spans and widths.",
        solution: ".column1 { width: 30%; } .column2 { width: 70%; }",
        styles: {
          ".column1": {
            width: "30%"
          },
          ".column2": {
            width: "70%"
          }
        }
      },
      {
        level: 10,
        description: "Implement a responsive column layout that adjusts based on screen size.",
        solution: "@media (min-width: 600px) { .container { column-count: 2; } }",
        styles: {
          "@media (min-width: 600px)": {
            ".container": {
              columnCount: 2
            }
          }
        }
      }
    ],
    forms: [
      {
        level: 1,
        description: "Style the text input fields with a border, padding, and background color.",
        solution: "input[type='text'] { border: 1px solid #ccc; padding: 5px; background-color: #f9f9f9; }",
        styles: {
          "input[type='text']": {
            border: "1px solid #ccc",
            padding: "5px",
            backgroundColor: "#f9f9f9"
          }
        }
      },
      {
        level: 2,
        description: "Add a box shadow effect to the text input fields.",
        solution: "input[type='text'] { box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); }",
        styles: {
          "input[type='text']": {
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
          }
        }
      },
      {
        level: 3,
        description: "Style the submit button with a background color, padding, and border radius.",
        solution: "input[type='submit'] { background-color: #4CAF50; padding: 10px 20px; border: none; border-radius: 5px; color: white; }",
        styles: {
          "input[type='submit']": {
            backgroundColor: "#4CAF50",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            color: "white"
          }
        }
      },
      {
        level: 4,
        description: "Create a custom checkbox style using pseudo-elements.",
        solution: "input[type='checkbox'] { position: relative; } input[type='checkbox']::before { content: ''; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; background-color: #ccc; border-radius: 3px; } input[type='checkbox']:checked::before { background-color: #4CAF50; }",
        styles: {
          "input[type='checkbox']": {
            position: "relative"
          },
          "input[type='checkbox']::before": {
            content: "''",
            display: "block",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
            backgroundColor: "#ccc",
            borderRadius: "3px"
          },
          "input[type='checkbox']:checked::before": {
            backgroundColor: "#4CAF50"
          }
        }
      },
      {
        level: 5,
        description: "Style the select dropdown with custom arrow icons.",
        solution: "select { appearance: none; background: url('arrow.svg') no-repeat right; padding-right: 20px; }",
        styles: {
          select: {
            appearance: "none",
            background: "url('arrow.svg') no-repeat right",
            paddingRight: "20px"
          }
        }
      },
      {
        level: 6,
        description: "Create a custom radio button style using pseudo-elements.",
        solution: "input[type='radio'] { position: relative; } input[type='radio']::before { content: ''; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; border-radius: 50%; border: 1px solid #ccc; } input[type='radio']:checked::before { background-color: #4CAF50; }",
        styles: {
          "input[type='radio']": {
            position: "relative"
          },
          "input[type='radio']::before": {
            content: "''",
            display: "block",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "1px solid #ccc"
          },
          "input[type='radio']:checked::before": {
            backgroundColor: "#4CAF50"
          }
        }
      },
      {
        level: 7,
        description: "Style the textarea with a border, padding, and background color.",
        solution: "textarea { border: 1px solid #ccc; padding: 5px; background-color: #f9f9f9; }",
        styles: {
          textarea: {
            border: "1px solid #ccc",
            padding: "5px",
            backgroundColor: "#f9f9f9"
          }
        }
      },
      {
        level: 8,
        description: "Apply a hover effect to form elements.",
        solution: "input:hover, textarea:hover, select:hover { box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); }",
        styles: {
          "input:hover, textarea:hover, select:hover": {
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"
          }
        }
      },
      {
        level: 9,
        description: "Style the form elements to have rounded corners.",
        solution: "input, textarea, select { border-radius: 5px; }",
        styles: {
          "input, textarea, select": {
            borderRadius: "5px"
          }
        }
      },
      {
        level: 10,
        description: "Add a transition effect to form elements.",
        solution: "input, textarea, select { transition: all 0.3s ease; }",
        styles: {
          "input, textarea, select": {
            transition: "all 0.3s ease"
          }
        }
      }
    ],
    grid: [
      {
        level: 1,
        description: "Create a simple grid layout.",
        solution: 'display: grid; grid-template-columns: repeat(3, 1fr);',
        styles: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)'
        }
      },
      {
        level: 2,
        description: "Create a grid with different column spans.",
        solution: 'grid-column: span 2;',
        styles: {
          gridColumn: 'span 2'
        }
      },
      {
        level: 3,
        description: "Place an item in the second column and second row.",
        solution: "grid-column: 2; grid-row: 2;",
        styles: {
          gridColumn: "2",
          gridRow: "2"
        }
      },
      {
        level: 4,
        description: "Create a grid with 2 columns where the first column takes up twice the space of the second.",
        solution: "grid-template-columns: 2fr 1fr;",
        styles: {
          gridTemplateColumns: "2fr 1fr"
        }
      },
      {
        level: 5,
        description: "Align items in the grid to the center both horizontally and vertically.",
        solution: "justify-items: center; align-items: center;",
        styles: {
          justifyItems: "center",
          alignItems: "center"
        }
      },
      {
        level: 6,
        description: "Make the first column of the grid auto-sized.",
        solution: "grid-template-columns: auto 1fr 1fr;",
        styles: {
          gridTemplateColumns: "auto 1fr 1fr"
        }
      },
      {
        level: 7,
        description: "Create a grid where items automatically span across multiple columns.",
        solution: "grid-template-columns: repeat(3, 1fr);",
        styles: {
          gridTemplateColumns: "repeat(3, 1fr)"
        }
      },
      {
        level: 8,
        description: "Place an item in the last row and last column.",
        solution: "grid-column: 3; grid-row: 3;",
        styles: {
          gridColumn: "3",
          gridRow: "3"
        }
      },
      {
        level: 9,
        description: "Overlap two grid items within the same cell.",
        solution: "grid-column: span 2; grid-row: span 2;",
        styles: {
          gridColumn: "span 2",
          gridRow: "span 2"
        }
      },
      {
        level: 10,
        description: "Create a responsive grid with auto-sized columns that adapt to the available space.",
        solution: "grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));",
        styles: {
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))"
        }
      }
    ],
    shadows: [
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
    ],
    transforms: [
      {
        level: 1,
        description: "Rotate a box by 45 degrees.",
        solution: 'transform: rotate(45deg);',
        styles: {
          transform: 'rotate(45deg)'
        }
      },
      {
        level: 2,
        description: "Scale a box to 1.5 times its size.",
        solution: 'transform: scale(1.5);',
        styles: {
          transform: 'scale(1.5)'
        }
      },
      {
        level: 3,
        description: "Translate an element 20 pixels to the right.",
        solution: "transform: translateX(20px);",
        styles: {
          transform: "translateX(20px)"
        }
      },
      {
        level: 4,
        description: "Skew an element along the X-axis by 30 degrees.",
        solution: "transform: skewX(30deg);",
        styles: {
          transform: "skewX(30deg)"
        }
      },
      {
        level: 5,
        description: "Skew an element along the Y-axis by -20 degrees.",
        solution: "transform: skewY(-20deg);",
        styles: {
          transform: "skewY(-20deg)"
        }
      },
      {
        level: 6,
        description: "Combine scaling and rotation to create a diagonal stretch effect.",
        solution: "transform: scale(1.5) rotate(45deg);",
        styles: {
          transform: "scale(1.5) rotate(45deg)"
        }
      },
      {
        level: 7,
        description: "Translate an element 50 pixels down and 30 pixels to the right.",
        solution: "transform: translate(30px, 50px);",
        styles: {
          transform: "translate(30px, 50px)"
        }
      },
      {
        level: 8,
        description: "Rotate an element 180 degrees while scaling it to 0.5 times its original size.",
        solution: "transform: rotate(180deg) scale(0.5);",
        styles: {
          transform: "rotate(180deg) scale(0.5)"
        }
      },
      {
        level: 9,
        description: "Combine rotation and skew to create a twisted effect.",
        solution: "transform: rotate(45deg) skewX(30deg);",
        styles: {
          transform: "rotate(45deg) skewX(30deg)"
        }
      },
      {
        level: 10,
        description: "Create a perspective effect by applying a 3D transformation.",
        solution: "transform: perspective(500px) rotateY(45deg);",
        styles: {
          transform: "perspective(500px) rotateY(45deg)"
        }
      }
    ],
    buttons: [
      {
        level: 1,
        description: "Style the button with a background color of blue and white text color.",
        solution: "background-color: blue; color: white;",
        styles: {
          backgroundColor: "blue",
          color: "white"
        }
      },
      {
        level: 2,
        description: "Add a border to the button with a solid style, 2px width, and black color.",
        solution: "border: 2px solid black;",
        styles: {
          border: "2px solid black"
        }
      },
      {
        level: 3,
        description: "Apply padding to the button to increase spacing between text and border.",
        solution: "padding: 10px 20px;",
        styles: {
          padding: "10px 20px"
        }
      },
      {
        level: 4,
        description: "Add a hover effect that changes the background color to red and text color to white.",
        solution: "background-color: red; color: white;",
        styles: {
          ":hover": {
            backgroundColor: "red",
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
        description: "Add rounded corners to the button with a border-radius of 5px.",
        solution: "border-radius: 5px;",
        styles: {
          borderRadius: "5px"
        }
      },
      {
        level: 7,
        description: "Create a button with a gradient background.",
        solution: "background-image: linear-gradient(to right, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);",
        styles: {
          backgroundImage: "linear-gradient(to right, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)"
        }
      },
      {
        level: 8,
        description: "Add a box shadow to the button for a raised effect.",
        solution: "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);",
        styles: {
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
        }
      },
      {
        level: 9,
        description: "Create a button with a 3D effect using perspective and transform properties.",
        solution: "transform-style: preserve-3d; perspective: 1000px; transform: rotateY(45deg);",
        styles: {
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transform: "rotateY(45deg)"
        }
      },
      {
        level: 10,
        description: "Customize the button style with additional properties such as font size, font weight, and text shadow.",
        solution: "font-size: 18px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);",
        styles: {
          fontSize: "18px",
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
        }
      }
    ], 
    flexBox: [
      {
        level: 1,
        description: "Center a box using Flexbox.",
        solution: 'display: flex; justify-content: center; align-items: center;',
        styles: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      {
        level: 2,
        description: "Create a flexible layout with space between items.",
        solution: 'display: flex; justify-content: space-between;',
        styles: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      },
      {
        level: 3,
        description: "Space all items evenly along the main axis.",
        solution: "justify-content: space-between;",
        styles: {
          justifyContent: "space-between"
        }
      },
      {
        level: 4,
        description: "Distribute extra space evenly among items along the main axis.",
        solution: "justify-content: space-around;",
        styles: {
          justifyContent: "space-around"
        }
      },
      {
        level: 5,
        description: "Align all items in the flex container to the end of the main axis.",
        solution: "justify-content: flex-end;",
        styles: {
          justifyContent: "flex-end"
        }
      },
      {
        level: 6,
        description: "Make items in the flex container align to the start of the cross axis.",
        solution: "align-items: flex-start;",
        styles: {
          alignItems: "flex-start"
        }
      },
      {
        level: 7,
        description: "Center all items in the flex container along the cross axis.",
        solution: "align-items: center;",
        styles: {
          alignItems: "center"
        }
      },
      {
        level: 8,
        description: "Make items in the flex container align to the end of the cross axis.",
        solution: "align-items: flex-end;",
        styles: {
          alignItems: "flex-end"
        }
      },
      {
        level: 9,
        description: "Stretch all items in the flex container to fill the cross axis.",
        solution: "align-items: stretch;",
        styles: {
          alignItems: "stretch"
        }
      },
      {
        level: 10,
        description: "Align the items in the flex container at the baseline of the cross axis.",
        solution: "align-items: baseline;",
        styles: {
          alignItems: "baseline"
        }
      }
    ],
    animations: [
      {
        level: 1,
        description: "Create a simple fade-in animation.",
        solution: `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            animation: fadeIn 1s ease-in-out;
          `,
        styles: {
          animation: 'fadeIn 1s ease-in-out'
        },
        keyframes: `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `
      },
      {
        level: 2,
        description: "Create a bouncing animation.",
        solution: `
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-30px); }
              60% { transform: translateY(-15px); }
            }
            animation: bounce 2s infinite;
          `,
        styles: {
          animation: 'bounce 2s infinite'
        },
        keyframes: `
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-30px); }
              60% { transform: translateY(-15px); }
            }
          `
      },
      {
        level: 3,
        description: "Create a bouncing animation effect.",
        solution: "animation: bounce 0.5s infinite alternate;",
        styles: {
          animation: "bounce 0.5s infinite alternate"
        },
        keyframes: `
          @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-20px); }
          }
        `
      },
      {
        level: 4,
        description: "Fade in an element smoothly over 1 second.",
        solution: "animation: fadeIn 1s;",
        styles: {
          animation: "fadeIn 1s"
        },
        keyframes: `
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `
      },
      {
        level: 5,
        description: "Make an element move from left to right infinitely.",
        solution: "animation: moveRight 3s linear infinite;",
        styles: {
          animation: "moveRight 3s linear infinite"
        },
        keyframes: `
          @keyframes moveRight {
            0% { left: 0; }
            100% { left: 100%; }
          }
        `
      },
      {
        level: 6,
        description: "Create a pulsating effect on an element.",
        solution: "animation: pulse 1s infinite alternate;",
        styles: {
          animation: "pulse 1s infinite alternate"
        },
        keyframes: `
          @keyframes pulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `
      },
      {
        level: 7,
        description: "Make an element fade out and disappear smoothly.",
        solution: "animation: fadeOut 1s forwards;",
        styles: {
          animation: "fadeOut 1s forwards"
        },
        keyframes: `
          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
        `
      },
      {
        level: 8,
        description: "Create a shaking effect on an element.",
        solution: "animation: shake 0.5s infinite alternate;",
        styles: {
          animation: "shake 0.5s infinite alternate"
        },
        keyframes: `
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
          }
        `
      },
      {
        level: 9,
        description: "Animate the scaling of an element to grow and shrink continuously.",
        solution: "animation: scale 2s infinite alternate;",
        styles: {
          animation: "scale 2s infinite alternate"
        },
        keyframes: `
          @keyframes scale {
            0% { transform: scale(1); }
            100% { transform: scale(1.5); }
          }
        `
      },
      {
        level: 10,
        description: "Create a rotating animation with varying easing.",
        solution: "animation: rotateEase 2s ease-in-out infinite;",
        styles: {
          animation: "rotateEase 2s ease-in-out infinite"
        },
        keyframes: `
          @keyframes rotateEase {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }
    ],
    advanceRandomChallenges: [
      {
        level: 1,
        description: "Create a simple form layout using Flexbox.",
        solution: "position: relative; ::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); }",
        styles: {
          ".container": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "10px"
          },
          "input[type='text'], input[type='submit']": {
            "padding": "10px",
            "borderRadius": "5px",
            "border": "1px solid #ccc"
          }
        }
      },
      {
        level: 2,
        description: "Design a responsive grid layout with multiple columns for displaying data.",
        solution: ".container { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; } .item { background-color: #f0f0f0; padding: 10px; border-radius: 5px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); }",
        styles: {
          ".container": { "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))", "gap": "20px" },
          ".item": { "backgroundColor": "#f0f0f0", "padding": "10px", "borderRadius": "5px", "boxShadow": "0px 0px 5px rgba(0, 0, 0, 0.1)" }
        }
      },
      {
        level: 3,
        description: "Create a button with a shadow effect on hover.",
        solution: "button { transition: box-shadow 0.3s ease; } button:hover { box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); }",
        styles: {
          "button": { "transition": "box-shadow 0.3s ease" },
          "button:hover": { "boxShadow": "0px 0px 10px rgba(0, 0, 0, 0.3)" }
        }
      },
      {
        level: 4,
        description: "Implement form validation styles for required input fields.",
        solution: "input:required { border-color: red; } input:valid { border-color: green; }",
        styles: {
          "input:required": { "borderColor": "red" },
          "input:valid": { "borderColor": "green" }
        }
      },
      {
        level: 5,
        description: "Create a responsive layout with a fixed sidebar and fluid content area.",
        solution: ".container { display: flex; } .sidebar { width: 200px; flex: 0 0 auto; } .content { flex: 1; }",
        styles: {
          ".container": { "display": "flex" },
          ".sidebar": { "width": "200px", "flex": "0 0 auto" },
          ".content": { "flex": "1" }
        }
      },
      {
        level: 6,
        description: "Create a grid layout with multiple columns and rows.",
        solution: ".grid-container { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, auto); gap: 20px; } .grid-item { background-color: #f0f0f0; padding: 20px; }",
        styles: {
          ".grid-container": { "display": "grid", "gridTemplateColumns": "repeat(3, 1fr)", "gridTemplateRows": "repeat(2, auto)", "gap": "20px" },
          ".grid-item": { "backgroundColor": "#f0f0f0", "padding": "20px" }
        }
      },
      {
        level: 7,
        description: "Create a button that rotates 360 degrees on hover.",
        solution: "button { transition: transform 0.5s; } button:hover { transform: rotate(360deg); }",
        styles: {
          "button": { "transition": "transform 0.5s" },
          "button:hover": { "transform": "rotate(360deg)" }
        }
      },
      {
        level: 8,
        description: "Implement a flexbox layout with vertically centered content.",
        solution: ".container { display: flex; align-items: center; }",
        styles: {
          ".container": { "display": "flex", "alignItems": "center" }
        }
      },      
      {
        level: 9,
        description: "Create an animated effect where the shadow of an element expands and contracts.",
        solution: ".element { transition: box-shadow 0.5s; } .element:hover { box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); }",
        styles: {
          ".element": { "transition": "box-shadow 0.5s" },
          ".element:hover": { "boxShadow": "0 0 20px rgba(0, 0, 0, 0.5)" }
        }
      },
      {
        level: 10,
        description: "Create a form with input fields and style them using transforms to scale up on focus.",
        solution: "input { transition: transform 0.3s; } input:focus { transform: scale(1.1); }",
        styles: {
          "input": { "transition": "transform 0.3s" },
          "input:focus": { "transform": "scale(1.1)" }
        }
      }
    ]
  }
};
export default challenges

