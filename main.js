let burger = document.querySelector('#burger').addEventListener('click', toggleOpen);
let close = document.querySelector('#close').addEventListener('click', toggleClose);

let toggleBar = document.querySelector('.links');

function toggleOpen() {
    toggleBar.style.right = 0;
}
function toggleClose() {
    toggleBar.style.right = '-400px';
}