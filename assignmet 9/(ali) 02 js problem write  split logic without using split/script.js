// make split logic without using split
var abc = "Hello World";
var def = [];
var ghi = "";
for (var i = 0; i < abc.length; i++) {
if (abc[i] === " ") {
    def.push(ghi);
    ghi = "";} 
    else {
    ghi += abc[i];}
}
def.push(ghi);
console.log(def);




