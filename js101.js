// console.log("hello, Matt");
//
// var first = [1, 2, 3];
// var second = [4, 5, 6];
//
// var newArray = first.concat(second);
// var stringArray = newArray.join(' plus one equals ');
//
// console.log(first);
// console.log(second);
// console.log(newArray);
// console.log(stringArray);

// function hello(name) {
//   name = name || "world";
//   console.log("hello, " + name);
// }
//
// hello("Matt");
// hello();
//
// function madlib(name, subject){
//   return name + "'s favorite subject is " + subject + ".";
// }
//
// console.log(madlib("Matt", "Science"));
//
// function billCalc(bill, service, guests){
//   if (service == 'good') {
//     tip = 0.20 * bill;
//     total = bill + tip;
//     splitBill = total / guests;
//     console.log("This is your tip: " + tip);
//     console.log("This is your total: " + total);
//     console.log("This is your portion: " + splitBill);
//   }
//   else if (service == 'fair') {
//     tip = 0.15 * bill;
//     console.log("This is your tip: " + tip);
//     console.log("This is your total: " + total);
//     console.log("This is your portion: " + splitBill);
//   }
//   else {
//     tip = 0.10 * bill;
//     console.log("This is your tip: " + tip);
//     console.log("This is your total: " + total);
//     console.log("This is your portion: " + splitBill);
//   }
// }
//
// billCalc(100, 'good', 5);

// function printNumbers(start, finish) {
//   for (start; start <= finish; start++) {
//   console.log("This is your count: " + start);
//   }
// }

// function printNumbers(start, finish) {
//   while (start <= finish) {
//     console.log("This is your count: " + start);
//     start++;
//   }
// }
//
// printNumbers(1, 10);

// function printSquare(number) {
//   var row = [];
//   for (number; number > 0; number--) {
//     row.push('*');
//   }
//   number = row.length;
//   row = row.join('');
//   for (number; number > 0; number--) {
//     console.log(row);
//   }
// }
//
// printSquare(6);

// function printBox (width, height) {
//   var bar = '';
//   var middle = '';
//   for (var i = width; i > 0; i--) {
//     bar += '*';
//   }
//   console.log(bar);
//   for (var m = (width -2); m > 0; m--) {
//     middle += ' ';
//   }
//   middle = '*' + middle + '*';
//   for (var h = (height - 2); h > 0; h--) {
//     console.log(middle);
//   }
//   console.log(bar);
// }
//
// printBox(10, 8);

// function printBanner(phrase) {
//   var bar = '';
//   for (var i = (phrase.length + 4); i > 0; i--) {
//     bar += '*';
//   }
//   middle = '* ' + phrase + ' *';
//   console.log(bar);
//   console.log(middle);
//   console.log(bar);
// }
//
// printBanner("hey everybody!");

// function factoring(number) {
//   var factors = [];
//   for (var i = number; i > 0; i--) {
//     if (number % i === 0) {
//       factors.push(i);
//     }
//   }
//   console.log(factors);
// }
//
// factoring(81);


function cipher(number, text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var firstOffset = alphabet.slice(0, number);
  var secondOffset = alphabet.slice(number, 27);
  var finalOffset = secondOffset.concat(firstOffset);
  var cipher = '';

  for (i = 0; i < text.length; i++ ) {
    startSlice = 0;
    if (text[i] === ' ') {


    }
    char = finalOffset.search(text[i]);
    console.log(char);
    cipher = cipher.concat(finalOffset[char]);
    console.log(text[i]);
  }
  console.log(cipher);
}

cipher(10, 'hey, how are you?');

// function sumNumbers(numbers) {
//   var finalValue = 0;
//   for (i = 0; i < numbers.length; i++ ) {
//     finalValue = finalValue + numbers[i];
//   }
//   console.log(finalValue);
// }
//
// sumNumbers([1, 2, 3]);

// function positveNumbers(numbers) {
//   positives = [];
//   for (i = 0; i < numbers.length; i++ ) {
//     if (numbers[i] >= 0) {
//       positives.push(numbers[i]);
//     }
//   }
//   console.log(positives);
// }
//
// positveNumbers([-1, 3, 8, 9, -10, 4, -6, 0]);

// function matrixAdd(matrix1, matrix2) {
//   var newMatrix = [[], []];
//   for (i = 0; i < matrix1[0].length; i++) {
//     newMatrix[0][0] = matrix1[i] + matrix2[i];
//   }
// }
// function playRPS() {
//   play = true;
//   if (play === true) {
//
//   }
//
// }
//
// function beats(input1, input2) {
//   var rock = 'rock';
//   var paper = 'paper';
//   var scissors = 'scissors';
//   if ((input1 === rock) && (input2 == scissors)) {
//     return true;
//   } else if ((input1 === scissors) && (input2 === paper)) {
//     return true;
//   } else if ((input1 === paper) && (input2 === rock)) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function rockPaperScissors(userInput) {
//   var computerThrow = Math.random();
//   var win = 'You win! Humans rule!';
//   var lose = 'You lost. To a computer.';
//   if (computerThrow < 0.33) {
//     computerThrow = 'rock';
//   } else if (0.67 < computerThrow) {
//     computerThrow = 'paper';
//   } else { computerThrow = 'scissors';
//   }
//   console.log('User throws ' + userInput);
//   console.log('Computer throws ' + computerThrow);
//   if (computerThrow === userInput.toLowerCase()) {
//     console.log('You tied!');
//   } else if (beats(computerThrow, userInput.toLowerCase())) {
//     console.log(win);
//   } else {
//     console.log(lose);
//   }
// }
//
// rockPaperScissors('rock');
