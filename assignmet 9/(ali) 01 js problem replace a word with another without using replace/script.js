var title = "I love JavaScript";
var newTitle ="";
for(var i = 0; i < title.length; i++) {
const cahr = title[i];
if(cahr === "l" &&  title[3] === "e"){
    newTitle += "hate";
    i += 3;}
else{newTitle += cahr;}
}
console.log(newTitle);// I hate JavaScript