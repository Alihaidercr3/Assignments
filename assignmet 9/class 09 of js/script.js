var title = "I love JavaScript";
console.log(title.toUpperCase());//it will convert the string into uppercase
console.log(title.toLowerCase());//it will convert the string into lowercase
console.log(title.length);//16
console.log(title.charAt(0));
console.log(title.charAt(1));
console.log(title.charAt(2));
console.log(title.charCodeAt(2));//108
console.log(title.slice(7,17));//JavaScript
console.log(title.slice(2));
console.log(title.indexOf("love"));//2 
console.log(title.indexOf("hate"));//-1 if a character is not found
console.log(title.replace("love", "like"));// it will replace love with like
console.log(title.split(" "));//it will split the string into array of words
console.log(title.split(""));//it will split the string into array of characters
console.log(title.trim());//it will remove the white spaces from the string
console.log(title.concat("!!!"));//it will add !!! at the end of the string
console.log(title.repeat());//it will repeat the string
console.log(title.startsWith("I"));//true
console.log(title.endsWith("I"));//false
console.log(title.includes("like"));//true
console.log(title.includes("hate"));//false
console.log(title.match(/love/g));//it will return the array of matched words
console.log(title.match(/hate/g));//null
console.log(title.match(/hate/g).length);//1
