import { feedChallange } from "./challangeCreator.js";

document.addEventListener("DOMContentLoaded", function () {
    const levelButtons = document.querySelectorAll(".level-button");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");
    const levelContainer = document.getElementById("level-container");

    levelButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            modal.style.display = "block";
            const totalLevels = 10;
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

    function generateLevelCircles(totalLevels) {
        levelContainer.innerHTML = "";
        for (let i = 1; i <= totalLevels; i++) {
            const levelButton = document.createElement("button");
            levelButton.classList.add("level-button1");
            levelButton.title = i;
            levelButton.textContent = i;
            levelButton.addEventListener("click", (e) => {
                console.log("Level " + i + " clicked.");
                feedChallange(e.target.title, 'shadows');
            });
            levelContainer.appendChild(levelButton);
        }
    }


});