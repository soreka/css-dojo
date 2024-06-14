function compareStyles(targetStyles, playerStyles) {
    const normalize = (str) => str.toLowerCase().trim();
    const normalizeStyles = (styles) => {
        let normalizedStyles = {};
        Object.keys(styles).forEach(key => {
            normalizedStyles[normalize(key)] = normalize(styles[key]);
        });
        return normalizedStyles;
    };

    const targetProperties = Object.keys(targetStyles).map(normalize);
    const playerProperties = Object.keys(playerStyles).map(normalize);
    const totalProperties = targetProperties.length;
    let matchingProperties = 0;
    let differences = {};
    let duplicateProperties = {};

    function findDuplicates(properties) {
        let counts = {};
        let duplicates = {};

        properties.forEach(property => {
            counts[property] = (counts[property] || 0) + 1;
            if (counts[property] > 1) {
                duplicates[property] = counts[property];
            }
        });

        return duplicates;
    }

    targetStyles = normalizeStyles(targetStyles);
    playerStyles = normalizeStyles(playerStyles);

    duplicateProperties = findDuplicates(playerProperties);

    targetProperties.forEach(property => {
        if (playerStyles.hasOwnProperty(property)) {
            if (targetStyles[property] === playerStyles[property]) {
                matchingProperties++;
            } else {
                differences[property] = {
                    target: targetStyles[property],
                    player: playerStyles[property]
                };
            }
        } else {
            differences[property] = {
                target: targetStyles[property],
                player: null
            };
        }
    });

    playerProperties.forEach(property => {
        if (!targetStyles.hasOwnProperty(property)) {
            differences[property] = {
                target: null,
                player: playerStyles[property]
            };
        }
    });

    let percentageMatch = (matchingProperties / totalProperties) * 100;

    return {
        differences: differences,
        percentageMatch: percentageMatch,
        duplicateProperties: duplicateProperties
    };
}

export function compareStylesHandler(targetStyles,playerStyles) {

    try {
        
        console.log('targetStyles',targetStyles);
        console.log('playerStyles',playerStyles);
       
        const result = compareStyles(targetStyles, playerStyles);

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<h2>Comparison Results</h2>
                                <p>Percentage Match: <strong>${result.percentageMatch.toFixed(2)}%</strong></p>
                                <h3>Differences:</h3>
                                <ul>`;
        
        for (let property in result.differences) {
            let values = result.differences[property];
            resultsDiv.innerHTML += `<li>${property}: Target(${values.target}) - Player(${values.player ?? 'null'})</li>`;
        }

        resultsDiv.innerHTML += `</ul>`;

        const progressElement = document.getElementById("progress");
        const messageElement = document.getElementById("message");

        progressElement.style.width = `${result.percentageMatch}%`;

        if (result.percentageMatch === 100) {
            messageElement.textContent = "Congratulations! You've completed the challenge.";
        } else {
            messageElement.textContent = "You can do it, you are almost there!";
        }

    } catch {
        alert('Invalid JSON input. Check the styles format.');
    }
}