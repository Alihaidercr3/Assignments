var num1 = +prompt ( "Enter first Number") 

var num2 = +prompt ("Enter Second Number")

var num3 = +prompt ("enter third Number")

if (isNaN(num1) || isNaN(num2) || isNaN(num3)){alert("Plese enter only numbers.");}

else if(num1>num2 && num1>num3){alert(num1+ " is Greater")}

else if(num1<num2 && num2>num3){alert(num2+ " is Greater")} 

else if (num1 === num2 || num1 === num3 || num2 === num3){alert("All numbers match!")}

else{alert(num3+ " is greater")}