// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  /***************** first method array.reverse **********************/

  // return str.split( '' ).reverse().join( '' );

  /***************** second method decreasing for loop **********************/

  // let reversedStr = "";
  // for ( let i = str.length - 1 ; i >= 0; i-- ){
  //     reversedStr = reversedStr + str[i];
  // }
  // return reversedStr;

  /***************** third method increasing for loop **********************/

  // let reversedStr = "";
  //   for (let i = 0 ; i < str.length; i++) {
  //     reversedStr = str[i] + reversedStr ;
  //   }
  //   return reversedStr;

  /***************** fourth for (of) loop**********************/

  let reversedStr = "";
  for ( chars of str ) {
      reversedStr = chars + reversedStr;
  }
  return reversedStr;
}

console.log(reverseString("Hello Visitors"));


/*********** CHALLENGE 2: VALIDATE A PALINDROME ***********/ 
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

    const reversedStr = str.split( '' ).reverse().join( '' )
    
    return reversedStr === str;

}

console.log(isPalindrome("Kayak"));


/**********    CHALLENGE 3: REVERSE AN INTEGER    ***********/
// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(int) {
   
    const makeString = int.toString().split( '' ).reverse().join( '' );

    return parseInt( makeString) * Math.sign(int);
}

console.log(reverseInt(-491));


/***********    CHALLENGE 4: CAPITALIZE LETTERS    *********/ 
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters ( str ) {
  
  const arrayMaker = str
    .toLowerCase()
    .split(" ");
  
  for ( let i = 0; i < arrayMaker.length; i++ ){
      arrayMaker[ i ] = arrayMaker[ i ].substring( 0, 1 ).toUpperCase() + arrayMaker[ i ].substring( 1 );
  }
  return arrayMaker.join( ' ' );
}

console.log(capitalizeLetters("do you love javascript?"));


/***************  CHALLENGE 5: MAX CHARACTER   **************/ 
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter ( str ) {
  
     let charObject = {};
    let maxChar ;
    let maxNumber = 0;
    str.split('').forEach(chars => {
        if (charObject[chars]) {
              charObject[ chars ]++;
        } else {
             charObject[ chars ] = 1;
        }
    } );
    for ( chars in charObject ) {
        if (charObject[chars]> maxNumber) {
            maxNumber = charObject[ chars ];
            maxChar = chars;  
        }
    }
    return maxChar;
}

console.log(maxCharacter("javascript"));


/***************  CHALLENGE 6: FIZZBUZZ   ***********/ 
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz () {
      for ( i = 1; i <= 100; i++ ){
        if ( i % 15 === 0 ) {
            console.log("fizzBuzz")
        } else if(i%5 === 0){
            console.log('Buzz')
        } else if(i%3 === 0){
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz();






























































