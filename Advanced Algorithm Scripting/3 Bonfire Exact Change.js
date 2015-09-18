/* Bonfire: Exact Change
Difficulty: 4/5
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function drawer(price, cash, cid) {

  // Total Amoount to return to client
  var totalChange = +(cash - price).toFixed(2);

  //Standard currency Value
  var stdCurr = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  //Name of current currency
  var currType;

  // How many of the current standard currency
  var stdCurrAmount;
  var currCurrency;

  // Change to be returned in proper format.
  var changeArr = [];

  var totalCash = +cid.map(function(money) {
    // Gets 1D array of values
    return money[1];
  }).reduce(function(cash1, cash2) {
    // Reduces the values to one number
    return cash1 + cash2;

    // Rounds to two decimal places
  }).toFixed(2);

  // Handle the case where we don't have enough money or will be left without money.
  if (totalChange > totalCash) {
    return 'Insufficient Funds';
  } else if (totalChange === totalCash) {
    return 'Closed';
  }

  // Loops array from right to left.
  for (var i = +cid.length - 1; i >= 0; i--) {
    // Gets the monetary value of the current array and the type.
    currCurrency = +cid[i][1].toFixed(2);
    currType = cid[i][0];

    //If the currency is less than the change left to hand then get the right ammount from the current type of change.
    if (+stdCurr[i].toFixed(2) <= +totalChange.toFixed(2)) {

      stdCurrAmount = Math.floor(currCurrency / stdCurr[i]);

      if ((stdCurr[i] * stdCurrAmount) >= totalChange) {
        stdCurrAmount = Math.floor(totalChange / stdCurr[i]);
      }

      //Get the current currency to use and udate the amount left to hand out.
      currCurrency = +(stdCurr[i] * stdCurrAmount).toFixed(2);
      totalChange = +(totalChange - currCurrency).toFixed(2);

      // Update the values so we always have the current amount left in the register.
      cid[i][1] = currCurrency;

      //Push the change right change to hand out
      changeArr.push([currType, currCurrency]);
    }
  }

  return changeArr;
};

console.log(
  drawer(3.26, 100.00, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.10],
    ['QUARTER', 4.25],
    ['ONE', 90.00],
    ['FIVE', 55.00],
    ['TEN', 20.00],
    ['TWENTY', 60.00],
    ['ONE HUNDRED', 100.00]
  ])
);

/*
[['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15], ['ONE', 1], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04] ]
*/
