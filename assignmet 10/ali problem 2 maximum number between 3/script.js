//function that finds the largest number
function largest() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var Result = document.getElementById("result").value;
    Result = document.getElementById("result");
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        Result.innerHTML = "enter a Number";
    }
    else if (num1 > num2 && num1 > num3) {
        Result.innerHTML =num1+ " is the greatest";
    
    }
    else if (num1 < num2 && num2 > num3) {
        Result.innerHTML =num2+ " is the greatest";  
    }
    else if (num1 === num2 || num1 === num3 || num2 === num3) {
        Result.innerHTML = "two numbers are equal";
    }
    else { Result.innerHTML =num3+ " is the greatest"; 
    }
}