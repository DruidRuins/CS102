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


    document.getElementById("Die 1 = " + die1)
    // document.write allows us to print onto the webpage what we want it to show
    //you can also have it interchangeable context from adding variables as shown
    document.getElementById("<br />")
    //this puts a break in the screen so it isn't all mashed up
    document.getElementById("Die 2 = " + die2)
    document.getElementById("<br />")
    // shows the results of die 2
    document.getElementById("Sum = " + sum)
    document.getElementById("<br />")
    //shows the results of die 1 and 2 added together
   
if (sum == 7 || sum == 11)
//definitely important to have these parentheses, not just the brackets for us to know what we are looking for, then spell
// it out so we can tell the results as shown below

{
    document.getElementById("CRAPS you lose!")
    document.getElementById("<br/>")
}

else if (die1 == die2 && die1%2 == 0)

{
    document.getElementById("CRAPS ya got me!")
    document.getElementById("<br/>")

}

 



