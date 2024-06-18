import { feedChallange } from "./challangeCreator.js";
import challenges from "./challanges.js";
import { state } from "./index.js";

export function buildLevelsModal (topic,difficulty) {
    const levelButtons = document.querySelectorAll(".level-button");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");
    const levelContainer = document.getElementById("level-container");
    const decrementButtoLevel = document.querySelector(".arrow-left");
    const IncrementButtonLvel = document.querySelector(".arrow-right");

    levelButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            modal.style.display = "block";
            const totalLevels = challenges.advanced.shadows.length;
            generateLevelCircles(totalLevels);
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    //this function for change level using the button of right and left 
    function ChangeLevel (level){
    }
    //
    function generateLevelCircles(totalLevels) {
        levelContainer.innerHTML = "";
        for (let i = 1; i <= totalLevels; i++) {
            const levelButton = document.createElement("button");
            levelButton.classList.add("level-button1");
            levelButton.title = i;
            levelButton.textContent = i;
            levelButton.addEventListener("click", (e) => {
                const challenge = feedChallange(e.target.title, topic,difficulty);
                state.setState({...state.getState(),challenge})
            });
            levelContainer.appendChild(levelButton);
        }
    }

}