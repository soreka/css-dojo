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
    //currentStepIndex = 0;
    showStep();
}

function nextStep() {
    if (currentStepIndex < steps.length - 1) {
        endTour();
        removeHighlight(currentStepIndex);
        currentStepIndex++;
        showStep();
    } else {
        endTour();
    }
}

function prevStep() {
    if (currentStepIndex > 0) {
        endTour();
        removeHighlight(currentStepIndex);
        currentStepIndex--;
        showStep();
    }
}

function endTour() {
    document.querySelectorAll('.blurred').forEach(el => el.classList.remove('blurred'));
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    tooltip.style.display = 'none';
}

function removeHighlight(index) {
    const element = getElementForStep(steps[index].id);
    element.classList.remove('highlight');
}

function showStep() {
    const tool = document.getElementById('tourTooltip');
    blurAllExceptCurrent();
    tool.classList.remove('blurred');

    const currentElement = getElementForStep(steps[currentStepIndex].id);
    currentElement.classList.add('highlight');

    const rect = currentElement.getBoundingClientRect();
    tooltipText.innerText = steps[currentStepIndex].text;

    // Position the tooltip above the "Run" button with increased margin for more top space
    if (steps[currentStepIndex].id === 'run-code') {
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 100}px`;
    } else {
        // Default positioning for other steps
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    }

    tooltip.style.display = 'block';
    for (child of tool.children) {
        child.classList.remove('blurred');
    }
}


function blurAllExceptCurrent() {
    const currentStepId = steps[currentStepIndex].id;
    const currentElement = getElementForStep(currentStepId);
    
    document.querySelectorAll('body *').forEach(el => {
        if (el !== currentElement && !currentElement.contains(el)) {
            el.classList.add('blurred');
        } else {
            el.classList.remove('blurred');
        }
    });

    currentElement.querySelectorAll('*').forEach(child => {
        child.classList.remove('blurred');
    });

    let node = currentElement;
    while (node !== document.body) {
        node.classList.remove('blurred');
        node = node.parentNode;
    }
}



function getElementForStep(stepId) {
    return document.getElementById(stepId);
}

