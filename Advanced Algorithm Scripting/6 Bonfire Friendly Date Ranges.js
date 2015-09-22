/*Bonfire: Friendly Date Ranges
Difficulty: 4/5

Implement a way of converting two dates into a more friendly date range that could be presented to a user.

It must not show any redundant information in the date range.

For example, if the year and month are the same then only the day range should be displayed.

Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.

Input date is formatted as YYYY-MM-DD

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.split()
String.substr()
parseInt()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function friendly(str) {
  var date1 = str[0].split('-');
  var date2 = str[1].split('-');
  var year = [];
  var month = [];
  var day = [];

  function checkYear() {
    if (date1[0] != date2[0]) {
      year.push(date1[0]);
      year.push(date2[0]);
    } else {
      year.push(date1[0]);
    }

  }

  function checkMonth() {
    if (date1[1] != date2[1]) {
      month.push(date1[1]);
      month.push(date2[1]);
    } else {
      month.push(date1[1]);
    }

  }

  function checkDay() {
    if (date1[2] != date2[2]) {
      day.push(date1[2]);
      day.push(date2[2]);
    } else {
      day.push(date1[2]);
    }

  }

  checkYear();
  checkMonth();
  checkDay();

  console.log(year, month, day);
  return str;
}

friendly(['2015-07-01', '2015-07-04']);
