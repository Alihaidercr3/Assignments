var num1 = +prompt("Enter first Number") 

var num2 = +prompt("Enter 2nd Number")

if (isNaN(num1) || isNaN(num2)){alert("Plese enter only numbers.");}

else if(num1>num2){alert(num1+ " is Greater")}

else if(num1<num2){alert(num2+ " is Greater")} 

else if(num1=num2){alert("Number 1 and 2 are equal")} 