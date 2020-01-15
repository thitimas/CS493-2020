const btn1 = document.getElementById("btnOne");
const btn2 = document.getElementById("btnTwo");
const btn3 = document.getElementById("btnThree");
const btn4 = document.getElementById("btnFour");
const btn5 = document.getElementById("btnFive");
const btn6 = document.getElementById("btnSix");

console.log("Ex10!!!");

// alert(document.getElementById("paraOne"));

let aVar = '5'
console.log(typeof(aVar)); //string

if (aVar == '5')
    console.log("aVar == '5' YES");

if (aVar == 5)
    console.log("aVar == 5 YES");

//strict equality operator
if (aVar === 5)
    console.log("aVar === 5 YES"); //will not show because they are of different data types

if (parseInt(aVar) === 5)
    console.log("parseInt(aVar) === 5 YES");

count = 10;
for (i=1; i<=count; i=i+1)
    console.log(i);

count = 100;

for (i=5; i<=count; i=i+5){
    console.log(i);

}
count = 2048;
for (i=1; i<=count; i=i*2){
    console.log(i);

}

let listName = ['Kevin','Bryan','Sam','Theodore','Jordan'];
console.log(listName[0] + " " + listName[2]);

//for Loops
//for (expr1 ; expr2; expr3)
//The initialization expression is executed at the start of the first iteration
//The conditional expression is tested, and the loop is entered only if the condition is true
//The modification expression is exectuted at the end of each iteration.

for (i=0; i<listName.length; i++){
    console.log(listName[i]);
}

name ="";
for (i=0; i<listName.length; i++){
    name = name + listName[i] + " ";
}
console.log(name);

let listBox = document.getElementsByClassName("box");
for (i = 0; i < listBox.length ; i++)
    console.log(listBox[i].innerHTML);

for (i = 0; i < document.getElementsByClassName("box").length ; i++)
    console.log(document.getElementsByClassName("box")[i].innerHTML);

//JavaScript Functions
//Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
//Function names are case-sensitive.
//Common naming convention for functions in JavaScript: camelCase

function countByFive(){
    let count = 100;
    for (i=5; i<=count; i=i+5){
        console.log(i);
    }
}

countByFive();

function addTwo(x, y){
    return x+y;

}

console.log(addTwo(5,7));

function changeColor(){
    document.getElementById("top").style.color = "red";
}

document.getElementById("top").ondblclick = changeColor;

btn1.onclick = incrementCount;
count = 1;
function incrementCount(){
    document.getElementById("paraOne").innerHTML = count;
    count++;
}

btn2.onclick = changeTextColor;
const para2 = document.getElementById("paraTwo");
let listColor = ["red", "oranage", "green", "blue", "maroon", "yellow"];
let index = 0;
function changeTextColor(){
    para2.style.color = listColor[index];
    index = (index +1)%6;
}

// btn3.onclick = changeBGColor;
const para3 = document.getElementById("divBG");
index = 0;
// function changeBGColor(){
//     para3.style.backgroundColor = listColor[index];
//     index = (index +1)%6;
// }

btn3.onclick = function(){
    para3.style.backgroundColor = listColor[index];
    index = (index +1)%6;

}

const para4 = document.getElementById("paraFour");

btn4.onclick = function(){
    let initNumber = document.getElementById("txtNumber").value;
    
    let sum = 0;
    for (i = 1 ; i<= initNumber ; i ++){
        sum = sum + i;
    }
    para4.innerHTML = sum;
}

btn5.onclick = function(){
    let value1 = parseInt(document.getElementById("numberOne").value);
    let value2 = parseInt(document.getElementById("numberTwo").value);
    let result = value1 * value2;
    document.getElementById("paraFive").innerText = result;
}

btn6.onclick = function(){
    let strToDoItem = document.getElementById("listItem").value;
    let newToDo = document.createElement("li");
    newToDo.innerText= strToDoItem;
    newToDo.style.color = "red";
    let parentNode = document.getElementById("shoppingList");
    parentNode.appendChild(newToDo);
}

//Another way to do the above task
// btn6.onclick = function(){
//     let strToDoItem = document.getElementById("listItem").value;
//     let prevHTML = document.getElementById("shoppingList").innerHTML;
//     document.getElementById("shoppingList").innerHTML = 
//                         prevHTML + "<li>" + strToDoItem + "</li>";
// }