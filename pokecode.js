// Benton Marcum Java Script


function RPS()

{

    var result = Math.ceil(Math.random() *2);
    // helps generate a random # between 1 and 2 and shown by the #2 referenced above
    
    

    var heads = "charmanderderp.png";
    var tails = "squirtlederp.png";
    // photos for reference being used. 
// 

if (result == 1)
    {
        document.getElementById("resultImg").src = heads;
    }
    
    else  
    {
        document.getElementById("resultImg").src = tails;
    }


    


        if (result == 1)
           { 
            document.getElementById("finalResult").innerHTML = "Tails";
           }

           else
           {
            document.getElementById("finalResult").innerHTML = "Heads";
           }
// if result is equal to one then we are going to do tails. Otherwise it will be heads
}

