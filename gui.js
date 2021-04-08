// Game interface

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', clickButton));
console.log(buttons);

function clickButton() {
    console.log(this.dataset.move);
};