/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}


/**
   * Returns the length of given string.
   *
   * @param {string} value
   * @return {number}
   *
   * @example
   *   'aaaaa' => 5
   *   'b'     => 1
   *   ''      => 0
   */
function getStringLength(value) {
  return value.length;
}

/**
   * Returns the result of string template and given parameters firstName and lastName.
   * Please do not use concatenation, use template string :
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
   *
   * @param {string} firstName
   * @param {string} lastName
   * @return {string}
   *
   * @example
   *   'John','Doe'      => 'Hello, John Doe!'
   *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
   */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
   * Extracts a name from template string 'Hello, First_Name Last_Name!'.
   *
   * @param {string} value
   * @return {string}
   *
   * @example
   *   'Hello, John Doe!' => 'John Doe'
   *   'Hello, Chuck Norris!' => 'Chuck Norris'
   */
function extractNameFromTemplate(value) {
  value[value.length - 1] = '';
  value = value.substring(7);
  return value;
}


/**
   * Returns a first char of the given string.
   *
   * @param {string} value
   * @return {string}
   *
   * @example
   *   'John Doe'  => 'J'
   *   'cat'       => 'c'
   */
function getFirstChar(value) {
  return value[0];
}

/**
   * Removes a leading and trailing whitespace characters from string.
   *
   * @param {string} value
   * @return {string}
   *
   * @example
   *   '  Abracadabra'    => 'Abracadabra'
   *   'cat'              => 'cat'
   *   '\tHello, World! ' => 'Hello, World!'
   */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim().replace(/^\s+|\s+$/g, '');
}

/**
   * Returns a string that repeated the specified number of times.
   *
   * @param {string} value
   * @param {string} count
   * @return {string}
   *
   * @example
   *   'A', 5  => 'AAAAA'
   *   'cat', 3 => 'catcatcat'
   */
function repeatString(value, count) {
  let str = '';
  for (let i = 0; i < count; i++) {
    str += value;
  }
  return str;
}

/**
   * Remove the first occurrence of string inside another string
   *
   * @param {string} str
   * @param {string} value
   * @return {string}
   *
   * @example
   *   'To be or not to be', 'not'  => 'To be or  to be'
   *   'I like legends', 'end' => 'I like legs',
   *   'ABABAB','BA' => 'ABAB'
   */
function removeFirstOccurrences(str, value) {
  for (let i = 0; i < str.length; i++) {
    if (value[i] === str[0]) {
      if (value.substring(i, i + str.length) === str) {
        return value.substring(i, i + str.length);
      }
    }
  }
}

/**
   * Remove the first and last angle brackets from tag string
   *
   * @param {string} str
   * @return {string}
   *
   * @example
   *   '<div>' => 'div'
   *   '<span>' => 'span'
   *   '<a>' => 'a'
   */
function unbracketTag(str) {
  str[0] = '';
  str[str.length] = '';
  return str;
}


/**
   * Converts all characters of the specified string into the upper case
   *
   * @param {string} str
   * @return {string}
   *
   * @example
   *   'Thunderstruck' => 'THUNDERSTRUCK'
   *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
   * Extracts e-mails from single string with e-mails list delimeted by semicolons
   *
   * @param {string} str
   * @return {array}
   *
   * @example
   *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
   *   => [
   *      'angus.young@gmail.com',
   *      'brian.johnson@hotmail.com',
   *      'bon.scott@yahoo.com'
   *   ],
   *   'info@gmail.com' => ['info@gmail.com']
   */
function extractEmails(str) {
  const emails = str.split(';');

  for (let i = 0; i < emails.length; i++) {
    emails[i] = emails[i].trim();
  }
  return emails;
}

/**
   * Returns the string representation of rectangle with specified width and height
   * using pseudograhic chars
   *
   * @param {number} width
   * @param {number} height
   * @return {string}
   *
   * @example
   *
   *            '┌────┐\n'+
   *  (6,4) =>  '│    │\n'+
   *            '│    │\n'+
   *            '└────┘\n'
   *
   *  (2,2) =>  '┌┐\n'+
   *            '└┘\n'
   *
   *             '┌──────────┐\n'+
   *  (12,3) =>  '│          │\n'+
   *             '└──────────┘\n'
   *
   */
function getRectangleString(width, height) {
  let cube = '';
  cube += `┌${'─'.repeat(width - 2)}┐\n`;
  for (let i = 0; i < height - 2; i++) {
    cube += `│${' '.repeat(width - 2)}│\n`;
  }
  cube += `└${'─'.repeat(width - 2)}┘\n`;

  return cube;
}


/**
   * Encode specified string with ROT13 cipher
   * See details:  https://en.wikipedia.org/wiki/ROT13
   *
   * @param {string} str
   * @return {string}
   *
   * @example
   *
   *   'hello' => 'uryyb'
   *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
   *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
   *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
   *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
   *
   */
function encodeToRot13(/* str */) {
  let Str = '';

  for (let i = 0; i < str.length; i++) {
    let sec = str[i];
    let Code = str.charCodeAt(i);

    if (sec.match(/[A-Za-z]/)) {
      if ((sec >= 'A' && sec <= 'M') || (sec >= 'a' && sec <= 'm')) {
        Code += 13;
      } else {
        Code -= 13;
      }

      sec = String.fromCharCode(Code);
    }

    Str += sec;
  }

  return Str;
}

/**
   * Returns true if the value is string; otherwise false.
   * @param {string} value
   * @return {boolean}
   *
   * @example
   *   isString() => false
   *   isString(null) => false
   *   isString([]) => false
   *   isString({}) => false
   *   isString('test') => true
   *   isString(new String('test')) => true
   */
function isString(value) {
  return typeof value === 'string';
}


/**
   * Returns playid card id.
   *
   * Playing cards inittial deck inclides the cards in the following order:
   *
   *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
   *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
   *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
   *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
   *
   * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
   * Function returns the zero-based index of specified card in the initial deck above.
   *
   * @param {string} value
   * @return {number}
   *
   * @example
   *   'A♣' => 0
   *   '2♣' => 1
   *   '3♣' => 2
   *     ...
   *   'Q♠' => 50
   *   'K♠' => 51
   */
function getCardId(value) {
  const card = {
    'A♣': 1,
    '2♣': 2,
    '3♣': 3,
    '4♣': 4,
    '5♣': 5,
    '6♣': 6,
    '7♣': 7,
    '8♣': 8,
    '9♣': 9,
    '10♣': 10,
    'J♣': 11,
    'Q♣': 12,
    'K♣': 13,
    'A♦': 14,
    '2♦': 15,
    '3♦': 16,
    '4♦': 17,
    '5♦': 18,
    '6♦': 19,
    '7♦': 20,
    '8♦': 21,
    '9♦': 22,
    '10♦': 23,
    'J♦': 24,
    'Q♦': 25,
    'K♦': 26,
    'A♥': 27,
    '2♥': 28,
    '3♥': 29,
    '4♥': 30,
    '5♥': 31,
    '6♥': 32,
    '7♥': 33,
    '8♥': 34,
    '9♥': 35,
    '10♥': 36,
    'J♥': 37,
    'Q♥': 38,
    'K♥': 39,
    'A♠': 40,
    '2♠': 41,
    '3♠': 42,
    '4♠': 43,
    '5♠': 44,
    '6♠': 45,
    '7♠': 46,
    '8♠': 47,
    '9♠': 48,
    '10♠': 49,
    'J♠': 50,
    'Q♠': 51,
    'K♠': 52,
  };
  return card[value];
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
