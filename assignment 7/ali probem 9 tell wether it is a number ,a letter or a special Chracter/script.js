var char =prompt("Enter any chracter")
if(char >='a' && char <= 'z' || char >= 'A' && char <= 'Z')
{alert(char+" is a alphabet")}
else if(char > 0 || char < 0 || char == 0)
{alert(char+" is a number")}
else
{alert(char+" is special chracter")}