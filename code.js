function updateText(){

    //function calls an update to the getElementByID which is labeled under header
    //because of HTML we can attach it to update to the words listed below
    //Then have it change to different words


document.getElementById("heading").innerHTML
    = "WEll, CRAP!";


}



//script is being referenced in game.html

    var die1 = 4
    // first variable being used for dice in this part
    var die2 = 4
    //second variable for dice being used
    var sum = die1 + die2
    //the total amount or sum of dice 1 and 2 to be calculated


    document.write("Die 1 = " + die1)
    // document.write allows us to print onto the webpage what we want it to show
    //you can also have it interchangeable context from adding variables as shown
    document.write("<br />")
    //this puts a break in the screen so it isn't all mashed up
    document.write("Die 2 = " + die2)
    document.write("<br />")
    // shows the results of die 2
    document.write("Sum = " + sum)
    document.write("<br />")
    //shows the results of die 1 and 2 added together
   
if (sum == 7 || sum == 11)
//definitely important to have these parentheses, not just the brackets for us to know what we are looking for, then spell
// it out so we can tell the results as shown below

{
    document.write("CRAPS you lose!")
    document.write("<br/>")
}

else if (die1 == die2 && die1%2 == 0)

{
    document.write("CRAPS ya got me!")
    document.write("<br/>")

}

 



import java.util.Random;

  int rand_int1 = rand.nextInt(6);
  int rand_int2 = rand.nextInt(6);
  // pulls a random number between 1-6

document.write("random #1 = " + rand_int2)
document.write("random #2 = " + rand_int1)

// writes the number that is rolled for the random integers
