const apps = ['sudoku.js', 'maps.js'];
let currentAppIndex = 0;

function loadApp() {
    // Remove all existing app scripts from the document
    removeExistingAppScripts();

    // Create and load the new script
    const script = document.createElement('script');
    script.src = apps[currentAppIndex];
    script.defer = true
    script.onload = () => {
        console.log(`${apps[currentAppIndex]} loaded successfully`);
    };
    script.onerror = () => {
        console.error(`Failed to load ${apps[currentAppIndex]}`);
    };
    document.head.appendChild(script);
}

function removeExistingAppScripts() {
    // Select all scripts that match the ones in the `apps` array
    const existingScripts = document.querySelectorAll('script');
    existingScripts.forEach((script) => {
        const src = script.getAttribute('src');
        if (src && apps.includes(src)) {
            script.remove();
        }
    });
}

function clearCurrentApp() {
    const displayDiv = document.getElementById('display');
    const optionsDiv = document.getElementById('options');
    displayDiv.innerHTML = '';
    optionsDiv.innerHTML = '';
}

document.getElementById('button-left').addEventListener('click', () => {
    if (currentAppIndex > 0) {
        clearCurrentApp();
        currentAppIndex--;
        loadApp();
    }
});

document.getElementById('button-right').addEventListener('click', () => {
    if (currentAppIndex < apps.length - 1) {
        clearCurrentApp();
        currentAppIndex++;
        loadApp();
    }
});

document.addEventListener('DOMContentLoaded', loadApp);

