function updateText(){


document.getElementById("heading").innerHTML 
= "Roll your chances?";

}




// craps logic


import java.util.Scanner;
import java.util.Random;

public class Craps{

    public static void main(String[] args) {
        Scanner scan - new Scanner(System.in);
int userScore = 0;
int cpuScore = 0;

System.out.printIn("How many rounds?: ");
int rounds = scan.nextInt();




for (int x- 0; x < rounds; x++) {
    int userChoice = rand.nextInt(6) +1;
    int cpuChoice = rand.nextInt(6) +1;

    if (cpuChoice > userChoice) {

        cpuScore += 1;

    else if(cpuChoice < userChoice) {

        userScore += 1;
    }
    }
}


System.out.printf("User Score %d/n cpuScore: %d/n", userScore, cpuScore);

if(cpuScore > userScore) {

    System.out.printIn("I'm smarter!");
}
    else if(cpuScore < userScore) {
System.out.pringIn("Wow you actually did it!");
    }

    else{
        System.out.pringIn("Tied....for now");
            }

}}
