const choices = ['Rock','Paper','Scissors'];

let computerResult = document.getElementById('computerResult');
let playerResult = document.getElementById('playerResult');
let finalresult = document.getElementById('finalresult');
let result;

function play(choice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (computerChoice == choice) {
        result = `GAME TIE!`;
    }
    else {
        if (choice == 'Rock') {
            result = computerChoice == 'Scissor' ? 'YOU WIN!' : 'YOU LOSE!';
        }
        else if (choice == 'Paper') {
            result = computerChoice == 'Rock' ? 'YOU WIN!' : 'YOU LOSE!';
        }
        else {
            result = computerChoice == 'Paper' ? 'YOU WIN!' : 'YOU LOSE!';
        }
    }
    update(computerChoice, choice);

}

function update(computerChoice, choice) {
    computerResult.textContent = `Computer Choice : ${computerChoice}`;
    playerResult.textContent = `Player Choice : ${choice}`;
    finalresult.textContent = `${result}`;

    finalresult.classList.remove('win', 'lose');

    switch (result){
        case 'YOU WIN!':
            finalresult.classList.add('win');
            break;
        case 'YOU LOSE!':
            finalresult.classList.add('lose');
            break;
    }
}


