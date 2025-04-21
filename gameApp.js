let yourScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("It's a draw!");
}

const showWinner = (yourWin) => {
    if (yourWin) {
        console.log("You win!");
        msg.innerHTML = "You win!";
    } else {
        console.log("you lose");
    }

}


const playGame = ((yourChoice) => {
    console.log("your choice", yourChoice);
    const compChoice = genCompChoice();

    if(yourChoice === compChoice) {
        drawGame();
    } else {
        let yourChoice = true;
        if (yourChoice === 'rock') {
            yourWin = compChoice === "paper" ?  false : true;
            
        } else if (yourChoice === "paper") {
           yourWin =  compChoice === "scissors" ? false : true;
        } else {
           yourWin =  compChoice === "rock" ? false : true;
        }
        showWinner(yourWin);
    }
})
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choices = choice.getAttribute("id");
        console.log("choice was clicked", choiceId);
        console.log("choice was clicked", yourChoice);
        playGame(yourChoice);
    })
})