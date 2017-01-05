/* Bonfire: Validate US Telephone Numbers
Difficulty: 4/5

Return true if the passed string is a valid US phone number

The user may fill out the form field any way they choose as long as it is a valid US number. The
following are all valid formats for US numbers:

555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555, 5555555555, 1 555 555 5555

For this challenge you will be presented with a string such as "800-692-7753" or "8oo-
six427676;laskdjf". Your job is to validate or reject the US phone number based on any combination
of the formats provided above. The area code is required. If the country code is provided, you must
confirm that the country code is "1". Return true if the string is a valid US phone number;
otherwise false.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp

Code by Rafael Rodriguez & @dting @guyjoseph 
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function telephoneCheck(str) {
  // Good luck!
  return /^(1|1\s)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/.test(str);
}

telephoneCheck("555-555-5555");
