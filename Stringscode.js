// this script will help with our page on strings and making palindromes
// the primary needs are to have a string identified. we will call this the original string
// once the primary string is identified we then want to reverse it
// we want to call a function to check if the orignal == reversed which means does it equal one another
// if it does then we want give feedback it is correct

function strings ()
// the name of the function is strings being reference 
{

var string1 = document.getElementById("firstString").value; 
//This code to the right can be added if we want more inputs -- var string2 = document.getElementById("secondString").value;
// these are the two strings we are using to reference for data. we need the document.getelementbyid to help pull the correct information which is firstString and secondString value. 



var splitStr = string1.split("");
// this splits the whole input into individual characters (ex. qwerty becomes q,w,e,r,t,y)

var reverseStr = splitStr.reverse(); 
// reverses the input (ex. qwerty becomes ytrewq)
var joinStr = reverseStr.join("");
// this rejoins what has been split (ex. q,w,e,r,t,y turns into qwerty again)

  if (string1 == joinStr)
  {
    document.getElementById("updates").innerHTML = "Ya figured it out smart cat";
  }
  // from this if statement we asking if string1 is equal to the valueo f joinStr. in our code we are asking it to know if by splitting, reversing, and rejoining is it still the same word
  else 
  {
    document.getElementById("updates").innerHTML = "try again buster";
  }
// otherwise else in this function if it is not equal then simply it is not a palindrome. Therefore, try again buster!

}




