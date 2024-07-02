// JavaScript for Tour Guide


export function initializeGuideTour() {
    const startGuideModal = document.getElementById('startTheGuide');
    const skipGuideButton = document.getElementById('skipGuide');
    const startGuideButton = document.getElementById('startGuide');

    // Show the modal
    startGuideModal.style.display = 'block';

    // Event listener for the "Skip" button
    skipGuideButton.onclick = () => {
        startGuideModal.style.display = 'none';
    };

    // Event listener for the "Start" button
    startGuideButton.onclick = () => {
        startGuideModal.style.display = 'none';
        startTour();
    };

    document.getElementById('startTour').onclick = startTour;
    document.getElementById('nextStep').onclick = nextStep;
    document.getElementById('prevStep').onclick = prevStep;
    document.getElementById('skipTour').onclick = endTour;
}

const steps = [
    { id: "level-description", text: "This is the task you need to complete." },
    { id: "level-selection", text: "Check out the current levels and navigate to others to progress." },
    { id: "hint-icon", text: "Use the hint label if you get stuck on any level." },
    { id: "target-element", text: "This is the target element you need to create." },
    { id: "css-container", text: "Write any CSS properties in the code editor to style the target element." },
    { id: "run-code", text: "Click the 'Run' button to see if you've achieved your target." },
    { id: "styled-element", text: "Here is the styled element you've crafted!" },
    { id: "score-tracker", text: "Keep an eye on your score to track your progress." }
];

let currentStepIndex = 0;
const tooltip = document.getElementById('tourTooltip');
const tooltipText = document.getElementById('tooltipText');

// Starts the guided tour by showing the first step.
function startTour() {
    showStep();
}

// Advances the tour to the next step.
function nextStep() {
    if (currentStepIndex < steps.length - 1) {
        removeHighlight(currentStepIndex);
        currentStepIndex++;
        showStep();
    } else {
        endTour();
    }
}

// Moves the tour back to the previous step.
function prevStep() {
    if (currentStepIndex > 0) {
        removeHighlight(currentStepIndex);
        currentStepIndex--;
        showStep();
    }
}

// Ends the tour and removes all highlights and tooltips.
function endTour() {
    document.querySelectorAll('.blurred').forEach(el => el.classList.remove('blurred'));
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    tooltip.style.display = 'none';
}

// Removes the highlight from the element associated with the given step index.
function removeHighlight(index) {
    const element = getElementForStep(steps[index].id);
    element.classList.remove('highlight');
}


// Shows the current step in the tour, highlighting the relevant element and displaying the tooltip.
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
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
    } else {
        // Default positioning for other steps
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    }

    tooltip.style.display = 'block';
    for (const child of tool.children) {
        child.classList.remove('blurred');
    }
}


// Blurs all elements except the current step element and its ancestors.
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

// Retrieves the DOM element associated with a given step ID.
function getElementForStep(stepId) {
    return document.getElementById(stepId);
}
