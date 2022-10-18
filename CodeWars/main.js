console.log( "welcome to JavaScript Dojo" )
/* 
Convert every character of the given word to an open parentheses('('), if the letter is repeated then it has to be closed parentheses.  
*/

function duplicateEncode(word) {
  let wordArray = word.toLowerCase().split("");
  let charCounter = {};

  wordArray.forEach((chars) => {
    if (charCounter[chars]) {
      charCounter[chars]++;
    } else {
      charCounter[chars] = 1;
    }
    return charCounter;
  });

  const encodedArray = wordArray.map((word) => {
    if (charCounter[word] > 1) {
      word = ")";
    } else {
      word = "(";
    }
    return word;
  });

  return encodedArray.join("");
}
console.log(duplicateEncode("CodeWars"));


/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/
function findOutlier ( integers ) {
    let lier ;
    const oddOrEven = integers.filter( ( integer ) => {
       return  integer % 2 ==  0 ;
    } );
    if ( oddOrEven.length == 1 ) {
        lier = integers.find( ( integer ) => {
           return integer % 2 == 0;
        })
    } else {
          lier = integers.find((integer) => {
           return  integer % 2 !== 0;
          });
    }
  
    return lier;
}

const numbers = [160, 3, 1719, 19, 11, 13, -21];
console.log( findOutlier( numbers ) );


/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

function XO(str) {
    let counter = { "x": 0, "o": 0 };
    const strArray = str.toLowerCase().split( '' );
    strArray.forEach( ( char ) => {
        if ( char === "x" ) {
            counter[ "x" ]++;
        } else if ( char === "o" ) {
            counter[ "o" ]++;
    }
    } )
    return counter[ "o" ] === counter[ "x" ];
}
console.log( XO( "xxxoo" ) );


/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

*/
function findShort ( str ) {
    const wordsArray = str.toLowerCase().match(/[a-z0-9]+/g);
    const sortedArray=wordsArray.sort( ( a, b ) => {
        return a.length - b.length
    } )
    const shortestWord = sortedArray.filter( ( word ) => {
       return word.length === sortedArray[0].length   
    } )
    if ( shortestWord.length === 1 ) {
        return `The shortest word is (${shortestWord[0]})`
    } else {
        return `(${shortestWord})`;
    }
}

findShort( "I love javaScript so much." );


/*
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/

function findNextSquare(sq) {
    const isSquared = Math.sqrt( sq );
    if ( Number.isInteger( isSquared ) ) {
        return Math.pow( isSquared+1, 2 );
    } else {
        return -1;
    }
}

console.log(findNextSquare(121));
