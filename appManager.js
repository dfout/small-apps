const apps = ['sudoku.js']
let currentAppIndex = 0;

function loadApp() {
    // Clear the previous script if it exists
    const existingScript = document.querySelector(`script[src="${apps[currentAppIndex]}"]`);
    if (existingScript) {
        existingScript.remove();
    }

    // Create and load the new script
    const script = document.createElement('script');
    script.src = apps[currentAppIndex];  // Fixed the typo
    script.onload = () => {
        console.log(`${apps[currentAppIndex]} loaded successfully`);
    };
    script.onerror = () => {
        console.error(`Failed to load ${apps[currentAppIndex]}`);
    };
    document.head.appendChild(script);
}
function clearCurrentApp(){
    const displayDiv = document.getElementById('display')
    const optionsDiv = document.getElementById('options')
    displayDiv.innerHTML =''
    optionsDiv.innerHTML =''
}

document.getElementById('button-left').addEventListener('click', ()=>{
    if(currentAppIndex > 0) {
        clearCurrentApp()
        currentAppIndex --;
        loadApp()
    }
})

document.getElementById('button-right').addEventListener('click', ()=>{
    if(currentAppIndex < apps.length - 1) {
        clearCurrentApp()
        currentAppIndex ++;
        loadApp()
    }
})


document.addEventListener('DOMContentLoaded', loadApp)