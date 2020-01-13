// alert("JavaScript is useful!");
/*
a =5; b = 10;
c = a+b;
alert(c);
*/

helloworld = "Finally, it's 'Friday'!!!\n";
helloworld = 'Finally "Friday"!!!\n';
greeting = helloworld;
//check datatype of variables, use typeof

console.log(greeting.length);

document.write(greeting);

count =1;
count +=1; // count = count +1;

console.log(count);

//Conditionals
//Conditionals alter programs flow. 
//There are three types of nonlooping conditionals: the if statement, the switch statement and the ? operator.
//Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

//The if statement

if (count > 0) {
    console.log("It is greater than 0");
} else {
    console.log("It is not greather than 0!")
}





document.getElementById("leadtext").style.color="blue";

let age = 50;
const age1 = 70;
age = 40;
// age1 = 40;

//The else Statement
if (age > 18) {
    console.log("Old Enough!")
} else {
    console.log("Too Young!")
}






let temp = 55;

if (temp< 32) {
    document.write("Freezing weather");
} else if (temp > 32 && temp < 42) {
    document.write("Very Cold weather");
} else if (temp > 42 && temp < 52) {
    document.write("Cold weather");
} else if (temp > 52 && temp < 62) {
    document.write("It's nice today!");
} else  {
    document.write("It's warm today");
}

age=document.forms[0].elements.namedItem("age").value = 19

if (age > 18) {
    console.log("Old Enough!")
} else {
    console.log("Too Young!")
}

//The switch statement
//Useful when one variable or the result of an expression can have multiple values
page = "Home";
switch (page){
    case "Home" :
        console.log("You selected Home");
        break;
    case "About" :
        console.log("You selected About");
        break;
    case "News" :
        console.log("You selected Login");
        break;
}

//The ? Operator
//The ternary operator (?) combined with : character, provides a quick way of doing if...else tests.
//You can write an expression to evaluate followed with a ? symbol
//and the code to execute if the expression is true.
//After that place a : and the code to execute if the expression evaluates to false

let stringVar = age < 18 ? "Too Young" : "Old Enough";

document.write("Write: " + stringVar)

