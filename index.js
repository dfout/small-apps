let appList = Object.values(apps);

const appTitle = document.getElementById('app-name');
const display = document.getElementById('display');
// const map = document.getElementById('map')
const options = document.getElementById('options');
const favicon = document.querySelector('link[rel="shortcut icon"]');

const reset = () => {
    display.innerHTML = '';
    options.innerHTML = '';
    // map.innerHTML ="";
    document.body.style.color = '#000000';
    document.body.style.backgroundColor = '#FFFFFF';
};

const render = (app) => {

    reset();
    switch(app) {
        case('Sudoku'):
            generateSudoku()
            break;
        case('Tacos Finder'):
            // createKey()
            // createMap()
            initMap()
            break;
        default:
            break;
    };
 
    document.addEventListener('keydown', keyDown);
};

const setDisplay = () => {
    let selectedApp = appList[0];
    appTitle.innerHTML = selectedApp.name;
    // appTitle.style.fontFamily = selectedApp.fontFamily;
    appTitle.style.color = selectedApp.color;
    favicon.href = selectedApp.icon;
    document.title = selectedApp.title;
    render(selectedApp.name);
};

const rotateRight = () => {
    appList.push(appList.shift());
    setDisplay();
};

const rotateLeft = () => {
    appList.unshift(appList.pop());
    setDisplay();
};

document.getElementById('button-right').onclick = rotateRight;
document.getElementById('button-left').onclick = rotateLeft;

const keyDown = e => {
    switch(e.keyCode) {
        case(37):
            rotateLeft()
            break;
        case(39):
            rotateRight()
            break;
    };
};

document.addEventListener('keydown', keyDown);

document.addEventListener('DOMContentLoaded', () => {
    setDisplay();
});