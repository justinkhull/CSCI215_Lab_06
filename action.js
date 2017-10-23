function checkForBracket()
{
 var regExp = new RegExp('<');
 if (regExp.test(document.getElementById('name').value))
 {
     console.log("Invalid character entered: " + document.getElementById('name'));
     document.getElementById('name').style.backgroundColor = "red";
 }
 else
 {
     document.getElementById('name').style.backgroundColor = '';
 }
}


function checkEmail(email) {
    //console.log("Made it to email");

    var inputEmail = document.getElementById('email').value;
    console.log(inputEmail);

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = re.test(inputEmail);

    if (isValid == false)
    {
        alert("Invalid email. Please enter a valid email address.");
        event.preventDefault();
    }
    else
    {
        //alert("Good email");
        myAjax();
    }

}

function myAjax()
{
    alert("Ajax submitted");
}



function checkAge() {
    var regEx = new RegExp('[^0-9]');
    var age = document.getElementById('age').value;

    if(regEx.test(age))
    {
        document.getElementById('age').style.backgroundColor = "red";
        console.log("Non-number character entered: " + document.getElementById('age').value);
    }
    else
    {
        document.getElementById('age').style.backgroundColor = '';
    }
}
