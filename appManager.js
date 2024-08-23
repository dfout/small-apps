const apps = ['sudoku.js']
let currentAppIndex = 0;

function loadApp(){
    const script = document.createElement('script');
    script.scr = apps[currentAppIndex];
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
        clearCurrentApp;
        currentAppIndex --;
        loadApp()
    }
})

document.getElementById('button-right').addEventListener('click', ()=>{
    if(currentAppIndex < apps.length - 1) {
        clearCurrentApp;
        currentAppIndex ++;
        loadApp()
    }
})


document.addEventListener('DOMContentLoaded', loadApp)