const challenges = [
  // Level 1 Challenges
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
    },
  // ... Add remaining challenges following the same format ...

  {
    level: 7,
    description: "Style a horizontal navigation bar with links that change color on hover.",
    solution: `
      nav {
        display: flex;
        justify-content: space-between;
        padding: 10px;
      }
      nav a {
        color: #333;
        text-decoration: none;
        padding: 10px;
      }
      nav a:hover {
        color: #009900;
      }
    `,
    styles: {
      // All styles defined within the solution string
    }
  },
  {
    level: 7,
    description: "Create a simple image carousel that automatically rotates images using CSS animations.",
    solution: `
      .carousel {
        overflow: hidden;
        width: 100%;
      }
      .carousel img {
        width: 100%;
        animation: slide 5s infinite linear;
      }
      @keyframes slide {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
      }
    `,
    styles: {
      // All styles defined within the solution string
    }
  }
];
export default challenges

