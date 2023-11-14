// alert("Hello guys")

// let yourName = prompt("What is your name?");
// let yourAge = prompt("What is your age?");

// alert("Your name is " + yourName + " and you are " + yourAge + " years old");


console.log(Math.pow(2,3));


//*************** word.length, word.slice, .toUppercase(), .toLowerCase() *************

let word = "adEYeMi";

console.log(word.length);

console.log(word.slice(0));


let firstChar = word.slice(0,1);
let firstCap = firstChar.toUpperCase();
let otherChar = word.slice(1);
let otherSmall = otherChar.toLowerCase();

console.log(firstCap + otherSmall);


//**************RANDOM NUMBER GENERATOR

let n = Math.random();
//FOR DICE
n = n*6
n = Math.floor(n);

let dice = n + 1;

console.log(dice);


//************* FUNCTIONS ************
// Take input as both money and price per bottle to calculate number of bottles of milk and change to receive

function getMilk(money, priceOfMilk) {
    if (remainingChange(money,priceOfMilk) > 0) {
    console.log("You are to buy " + numOfBottles(money, priceOfMilk) + " bottles of milk and your change is $" + remainingChange(money, priceOfMilk) );
    } else {
        console.log( "You are to buy " + numOfBottles(money, priceOfMilk) + " bottles of milk and you have no change");
    }
}

function numOfBottles(money, priceOfMilk) { //FOR CALCULATING NUMBER OF BOTTLES
    let bottles = Math.floor(money/priceOfMilk);
    return bottles;
}

function remainingChange(money, priceOfMilk) { //FOR CALCULATING REMAINING CHANGE
    let remChange = money % priceOfMilk;
    return remChange;
}

(getMilk(100, 9));

//************ ROUND UP OF NUMBERS

console.log(Math.round(2.5));


//ANOTHER SHORTER METHOD FOR THE FUNCTION ABOVE
function getMilk2(money2, priceOfMilk2) {
    if ((money2 % priceOfMilk2) > 0) {
    console.log("You are to buy " + Math.floor(money2 / priceOfMilk2) + " bottles of milk and your change is $" + (money2 % priceOfMilk2) );
    } else {
        console.log( "You are to buy " + Math.floor(money2 / priceOfMilk2) + " bottles of milk and you have no change");
    }
}

getMilk2(100 , 9)


// ****************************************************FIBONACCI *****************************
const fibonacci = (n) => {
    output = [];

        if (n === 1) {
            output = [0];
        } else if (n === 2) {
            output= [0, 1];
        } else{
            output= [0, 1];
            for (let i = 2; i < n; i++) {
                output.push(output[output.length-1] + output[output.length-2])
            }
            
        }
    
    return output
}


console.log(fibonacci(9));