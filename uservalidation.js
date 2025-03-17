

// Benton Marcum cs102 code


function checkCreds()
{
var firstName = document.getElementById("fName").value;
// usering the variable firstName to access what is in the fName box
var lastName = document.getElementById("lName").value;
var fullName = firstName + " "  + lastName;
var zipcode = document.getElementById("zip").value;
// using firstName comment as explanation, remaining variables grab first and last and combine them for a full name. zipcode variable is an additional input value for the user needed

    if (fullName.length >= 20)
    // checking if the full name is less than or = to 20, otherwise it will return below that names must have value. see comments below
{
    document.getElementById("loginstatus").innerHTML = "Names must have values";
    // if not valid, then this message will appear 
}
    else if ((zipcode<10000) || (zipcode>99999))
{
    document.getElementById("loginstatus").innerHTML = "Invalid Zipcode";
    // if not valid, then this message will appear 
}

    else 
{
    document.getElementById("loginstatus").innerHTML = "Welcome!" + " " + fullName; 
    location.replace ("secretmessage.html");
    // if evertying checks out and doesn't get stuck on the earlier checks then it says, "welcome + fullname and takes them to the page for the secret sauce"
}


}


