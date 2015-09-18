/* Bonfire: Exact Change
Difficulty: 4/5
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object
*/

function drawer(price, cash, cid) {

  // Total Amoount to return to client
  var totalChange = cash - price;

  //Standard currency Value
  var stdCurr = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  //Name of current currency
  var currType;

  // How many of the current standard currency
  var stdCurrAmount;
  var currCurrency;

  // Change to be returned in proper format.
  var changeArr = [];

  var totalCash = +cid.map(function(a) {
    return a[1];
  }).reduce(function(a, b) {
    return a + b;
  }).toFixed(2);

  if (totalChange > totalCash) {
    return 'Insificient Funds';
  } else if (totalChange === totalCash) {
    return 'Closed';
  }

  for (var i = +cid.length - 1; i >= 0; i--) {
    currCurrency = +cid[i][1];
    currType = cid[i][0];
    if (stdCurr[i] <= totalChange) {
      stdCurrAmount = Math.floor(totalChange / stdCurr[i]);
      currCurrency = currCurrency - (stdCurr[i] * stdCurrAmount);
      cid[i][1] = currCurrency;
      changeArr.push([currType, totalChange]);
      break;
    }
  }

  return changeArr;
};

console.log(drawer(19.50, 20.00, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.10],
  ['QUARTER', 4.25],
  ['ONE', 90.00],
  ['FIVE', 55.00],
  ['TEN', 20.00],
  ['TWENTY', 60.00],
  ['ONE HUNDRED', 100.00]
]));
