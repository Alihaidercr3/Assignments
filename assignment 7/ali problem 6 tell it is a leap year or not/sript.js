var year = +prompt("Enter any year")

if(isNaN(year) || year == 0)
    { alert("Enter a valid year")}
else if(year % 4 == 0)
    { alert(year+ " is leap a year")}
else 
    {alert(year+" is not a leap year")}