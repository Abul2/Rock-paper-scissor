// paper0 crushes rock1
//  scissor 2 crushes paper 0
// rock crushes scissor
// let user_action = "paper"
function checker(user_action) {
    const chng = document.querySelector('h5')
    let computer_action = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random() * computer_action.length);
    // random()0-9*10, 0-9
    const compChoice = computer_action[num];
    chng.textContent = compChoice;

    if (user_action === compChoice) {
        return ("Both players selected. It's a tie!");
    } else if (user_action === "rock") {
        if (compChoice === "scissors") {
            return ("Rock smashes scissors! You win!");
        } else {
            return ("Paper covers rock! You lose.");
        }
    } else if (user_action === "paper") {
        if (compChoice === "rock") {
            return ("Paper covers rock! You win!");
        } else {
            return ("Scissor cuts paper! You lose.");
        }
    } else if (user_action === "scissor") {
        if (compChoice === "paper") {
            return ("Scissors cuts paper! You win!");
        } else {
            return ("Rock smashes scissors! You lose.");
        }
    }
}

// checker(user_action)

const userChoice = document.querySelector('#userselect')
const display = document.querySelector('h3')
console.log(userChoice.value)
userChoice.addEventListener('change', () => {
    // checker(userChoice.value)
    display.textContent = checker(userChoice.value)
})