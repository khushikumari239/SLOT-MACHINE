// 1.Deposite some money ✅
// 2. Determine no. of lines to bet on ✅
// 3. collect a bet amount ✅
// 4. Spin the slot machine                          TO RUN Copy Paste :-  node project.js💓
// 5. check if user won
// 6. give user their winnings 
// 7. play again 

// function Deposite() {
//     return 1
// }


// 1.

const prompt = require('prompt-sync') ();

const Deposit = () => {
    while (true) {
    const DepositAmount = prompt("Enter a deposit amount : ");
    const numberDepositAmount = parseFloat(DepositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount , try again :) ");
    } else {
        return numberDepositAmount;
    }
  }
};

// 2.

const getNumberOfLines = () => {
    while (true) {
        const Lines = prompt("Enter the no. of lines to bet on (1-3) : ");
        const NumberOfLines = parseFloat(Lines);
    
        if (isNaN(NumberOfLines) || NumberOfLines <= 0 || NumberOfLines >3 ) {
            console.log("Invalid No. of Lines , try again :) ");
        } else {
            return NumberOfLines;
        }

    }
};

// 3.

const getBet = (balance , Lines) => {

    while (true) {
        const Bet = prompt("Enter the bet per line : ");
        const numberBet = parseFloat(Bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / Lines ) {
            console.log("Invalid Bet , try again :) ");
        } else {
            return numberBet;
        }

    }
    
};


// const DepositAmount = Deposit();
// console.log(DepositAmount);
let balance = Deposit();
const NumberOfLines = getNumberOfLines();
const bet = getBet(balance , NumberOfLines);