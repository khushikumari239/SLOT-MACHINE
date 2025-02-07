// 1.Deposite some money ✅
// 2. Determine no. of lines to bet on ✅
// 3. collect a bet amount ✅
// 4. Spin the slot machine ✅                        TO RUN Copy Paste :-  node project.js💓
// 5. check if user won
// 6. give user their winnings 
// 7. play again 

// function Deposite() {
//     return 1
// }


// 1.

const prompt = require('prompt-sync') ();

// 4.

const ROWS = 3;
const COLS = 3;

// 👇 Keys mapped with different values | Object in JS
const SYMBOLS_COUNT = {
    "A": 2,                 
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUES = {
    "A": 5,                 
    "B": 4,
    "C": 3,
    "D": 2
}






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

const spin = () => {
    const symbols = [];
    for ( const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
        console.log(symbol, count)
        for(let i =0; i<count; i++ ) {
            symbols.push(symbol);
        }
    }
    // console.log(symbols);

    const reels = [[],[],[]];
    for(let i=0; i< COLS; i++) {
        // if No. of cols different from 3 
        reels.push([]);
        const reelSymbols = [...symbols];
        // copy of the available symbols to remove them after getting them
       
        for(let j=0; j< ROWS; j++){
            const randomIndex = Math.floor (Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);

        }

    }
    return reels;
};

// spin();


const transpose = (reels) => {
    const rows = [];

    for (let i=0; i< ROWS; i++ ) {
        rows.push([])
        for (let j=0; j< COLS; j++) {
            rows[i].push(reels[j][i])
        }

    }
    

    return rows ;
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "A ";
        for (const [i, symbol] of rows.entries()) {
            rowString += symbol
        }

    }
}


// const DepositAmount = Deposit();
// console.log(DepositAmount);
let balance = Deposit();
const NumberOfLines = getNumberOfLines();
const bet = getBet(balance , NumberOfLines);
const reels = spin();
const rows = transpose(reels);
console.log(reels);
console.log(rows);


