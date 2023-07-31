let score = JSON.parse(localStorage.getItem('score')) || {
    fitore: 0,
    humbje: 0,
    barazime: 0
}

const paragraf = document.getElementById('p');
const paragraf1 = document.getElementById('p1');

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }

};

function playGame(playerMove) {
    const computerMove = pickComputerMove()

    let result = '';

    if (playerMove === 'Gur') {
        if (computerMove === 'Gur') {
            result = 'Baraz';
        } else if (computerMove === 'Leter') {
            result = 'Humbe';
        } else if (computerMove === 'Gershere') {
            result = 'Fitove';
        }
    } else if (playerMove === 'Leter') {
        if (computerMove === 'Gur') {
            result = 'Fitove';
        } else if (computerMove === 'Leter') {
            result = 'Baraz';
        } else if (computerMove === 'Gershere') {
            result = 'Humbe';
        }
    } else if (playerMove === 'Gershere') {
        if (computerMove === 'Gur') {
            result = 'Humbe';
        } else if (computerMove === 'Leter') {
            result = 'Fitove';
        } else if (computerMove === 'Gershere') {
            result = 'Baraz';
        }
    }
    if (result === 'Fitove') {
        score.fitore += 1;
    } else if (result === 'Humbe') {
        score.humbje += 1;
    } else if (result === 'Baraz') {
        score.barazime += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));



    updateScoreElement();

    paragraf.innerHTML = `${result}! <br/><br/>
    Ti
        <img class="move-icon" style="width: 20px;
        height: 20px;
        margin-left: 10px;
        border-radius: 50%;
        cursor: pointer;
        border: 3px solid rpg(6, 21, 21);" src="${playerMove}.png">
        <img class="move-icon" style="width: 20px;
        height: 20px;
        margin-left: 10px;
        border-radius: 50%;
        cursor: pointer;
        border: 3px solid rpg(6, 21, 21);" src="${computerMove}.png">
        Kompjuteri`


}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Gur';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Leter';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Gershere';
    }
    return computerMove;
}

function updateScoreElement() {
    paragraf1.innerHTML = `
    Fitore: ${score.fitore}, Humbje: ${score.humbje}, Barazime: ${score.barazime}</p>`
}

function RestartGame() {
    score.fitore = 0;
    score.humbje = 0;
    score.barazime = 0;

    localStorage.removeItem('score');

}
