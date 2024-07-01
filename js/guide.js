// JavaScript for Tour Guide

const steps = [
    { id: "level-description", text: "Welcome to the CSS Ninja Dojo. Let's start the tour!\nThis is the task you need to complete." },
    { id: "level-selection", text: "Check out the current levels and navigate to others to progress." },
    { id: "hint-icon", text: "Use the hint label if you get stuck on any level." },
    { id: "target-element", text: "This is the target element you need to create." },
    { id: "css-container", text: "In the code editor (Code Mirror), let's try to write 'background-color'." },
    { id: "run-code", text: "Click the 'Run' button to see if you've achieved your target." },
    { id: "styled-element", text: "Here is the styled element you've crafted!" },
    { id: "score-tracker", text: "Keep an eye on your score to track your progress." }
];

let currentStepIndex = 0;
const tooltip = document.getElementById('tourTooltip');
const tooltipText = document.getElementById('tooltipText');

function initializeTour() {
    document.getElementById('startTour').onclick = startTour;
    document.getElementById('nextStep').onclick = nextStep;
    document.getElementById('prevStep').onclick = prevStep;
    document.getElementById('skipTour').onclick = endTour;
}

function startTour() {
    currentStepIndex = 0;
    showStep(); // Call showStep() here to start the tour
    document.querySelectorAll('#cssBlur').forEach(element => {
        element.classList.add('blurred');
    });
}

function nextStep() {
    if (currentStepIndex < steps.length - 1) {
        hideStep(currentStepIndex);
        currentStepIndex++;
        showStep();
    } else {
        endTour();
    }
}

function prevStep() {
    if (currentStepIndex > 0) {
        hideStep(currentStepIndex);
        currentStepIndex--;
        showStep();
    }
}

function endTour() {
    steps.forEach(step => {
        getElementForStep(step.id).classList.remove('blurred', 'highlight');
    });
    tooltip.style.display = 'none';
    document.querySelectorAll('#cssBlur').forEach(element => {
        element.classList.remove('blurred');
    });
}

function showStep() {
    steps.forEach(step => {
        getElementForStep(step.id).classList.add('blurred');
    });
    const currentElement = getElementForStep(steps[currentStepIndex].id);
    currentElement.classList.remove('blurred');
    currentElement.classList.add('highlight');

    const rect = currentElement.getBoundingClientRect();
    tooltipText.innerText = steps[currentStepIndex].text;

    if (steps[currentStepIndex].id === 'run-code') {
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
    } else {
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    }

    tooltip.style.display = 'block';
}

function hideStep(index) {
    const element = getElementForStep(steps[index].id);
    element.classList.remove('highlight');
}

function getElementForStep(stepId) {
    return document.getElementById(stepId);
}
