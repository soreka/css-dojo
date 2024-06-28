 // JavaScript for Tour Guide

 document.getElementById('startTour').onclick = function () {
    startTour();
};

document.getElementById('nextStep').onclick = function () {
    nextStep();
};

document.getElementById('prevStep').onclick = function () {
    prevStep();
};

document.getElementById('skipTour').onclick = function () {
    endTour();
};

let currentStep = 0;
let steps = Array.from(document.querySelectorAll('.tour-step'));
const tooltip = document.getElementById('tourTooltip');
const tooltipText = document.getElementById('tooltipText');

// Sort steps based on data-step attribute
steps.sort((a, b) => {
    return parseInt(a.getAttribute('data-step')) - parseInt(b.getAttribute('data-step'));
});

function startTour() {
    currentStep = 0; // Start from the first step in the sorted list
    showStep();
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('highlight'); 
        currentStep++;
        showStep();
    } else {
        endTour();
    }
}

function prevStep() {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('highlight'); 
        currentStep--;
        showStep();
    }
}

function endTour() {
    document.querySelectorAll('.tour-step').forEach(step => step.classList.remove('blurred'));
    tooltip.style.display = 'none';
    steps.forEach(step => step.classList.remove('highlight'));
}


function showStep() {
    // Blur all tour steps except the current step
    steps.forEach(step => step.classList.add('blurred'));
    steps[currentStep].classList.remove('blurred');

    // Update tooltip position
    const rect = steps[currentStep].getBoundingClientRect();
    tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    tooltip.style.left = `${rect.left + window.scrollX}px`;

    // Fetch tooltip text from data-step attribute
    const stepNumber = steps[currentStep].getAttribute('data-step');

    switch (stepNumber) {
        case '1':
            tooltipText.innerText = "Welcome to the challenge! This is the task you need to complete.";
            break;
        case '2':
            tooltipText.innerText = "Check out the current levels and navigate to others to progress.";
            break;
        case '3':
            tooltipText.innerText = "Use the hint label if you get stuck on any level.";
            break;
        case '4':
            tooltipText.innerText = "This is the target element you need to create.";
            break;
        case '5':
            tooltipText.innerText = "In the code editor (Code Mirror), write 'background-color' to assist you.";
            break;
        case '6':
            tooltipText.innerText = "Click the 'Run' button to see if you've achieved your target.";
            break;
        case '7':
            tooltipText.innerText = "Here is the styled element you've crafted!";
            break;
        case '8':
            tooltipText.innerText = "Keep an eye on your score to track your progress.";
            break;
        default:
            tooltipText.innerText = "Tooltip text for step " + stepNumber; 
    }

    tooltip.style.display = 'block';
    steps[currentStep].classList.add('highlight'); 
}