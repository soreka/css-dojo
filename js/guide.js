// JavaScript for Tour Guide

const steps = [
    { id: "level-description", text: "Welcome to the challenge! This is the task you need to complete." },
    { id: "level-selection", text: "Check out the current levels and navigate to others to progress." },
    { id: "hint-icon", text: "Use the hint label if you get stuck on any level." },
    { id: "target-element", text: "This is the target element you need to create." },
    { id: "css-container", text: "In the code editor (Code Mirror), write 'background-color' to assist you." },
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
    showStep();
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
    steps.forEach(step => getElementForStep(step.id).classList.remove('blurred', 'highlight'));
    tooltip.style.display = 'none';
}

function showStep() {
    steps.forEach(step => getElementForStep(step.id).classList.add('blurred')); // Blur all steps
    const currentElement = getElementForStep(steps[currentStepIndex].id);
    currentElement.classList.remove('blurred'); // Unblur the current step
    currentElement.classList.add('highlight'); // Highlight the current step

    // Update tooltip position and text
    const rect = currentElement.getBoundingClientRect();
    tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltipText.innerText = steps[currentStepIndex].text;
    tooltip.style.display = 'block';
}

function hideStep(index) {
    const element = getElementForStep(steps[index].id);
    element.classList.remove('highlight');
}

function getElementForStep(stepId) {
    return document.getElementById(stepId);
}
