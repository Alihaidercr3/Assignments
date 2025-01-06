var Num = prompt ("enter number")
if (isNaN(Num) || Num ==="") {
    alert("Error:Invalid input.Please enter a number.");}
     
else if(Num%2==0){
    alert(Num+ " is even")
}
else if(Num%2!==0){
    alert(Num+ " is odd")
}