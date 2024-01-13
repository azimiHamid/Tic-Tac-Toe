let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-btn');
let newGameBtn = document.querySelector('.new-game-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turnO = true;
    msgContainer.classList.add("hide");
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
})
// added newly, under work
const showDraw = () => {
    msg.innerText = "It's a draw";
    msgContainer.classList.remove('hide');
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congrates, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
        }
    }
}


resetButton.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
