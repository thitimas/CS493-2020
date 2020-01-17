let btn1 = document.getElementsByClassName("btn")[0];
let btnShowAlert = document.getElementsByClassName("btn")[4];
let btnAddMenu = document.getElementsByClassName("btn")[1];
let btnRemoveMenu = document.getElementsByClassName("btn")[2];
document.getElementById("btn-new-task").addEventListener("click" , addToDo);

// document.getElementById("btn-new-task").onclick = addToDo;
let todoList = document.getElementById("todo-tasks");

function addToDo(){

    console.log("addToDo is called!")
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let deleteButton = document.createElement("button");

    checkBox.setAttribute("type", "checkbox");

    checkBox.addEventListener("click", taskCompleted);
    deleteButton.addEventListener("click" , deleteTask);

    label.innerText = document.getElementById("new-task").value;
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerText = "X";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

}

function taskCompleted(){
    console.log(event.target);
    let checkbox = event.target;
    let label = checkbox.nextSibling;
    label.setAttribute("style","text-decoration:line-through");
}

function deleteTask(){
    let deleteB = event.target;
    let listItem = deleteB.parentNode;
    todoList.removeChild(listItem); //todoList is the ul

}


btn1.onclick = function(){
    document.getElementById("leadtext").innerText = "I love coding";
}

btnShowAlert.onclick = function(){
    let alertString = "<div class='alert alert-success'> You Clicked Alert </div>";

    document.getElementById("alertbox").innerHTML = alertString;
}

btnAddMenu.addEventListener("click" , addNewMenu);

function addNewMenu(){
    let newMenu = document.createElement("li")
    newMenu.innerHTML = '<a  class="nav-link" href="#">New Menu</a>';

    let parentNode = document.getElementsByClassName("nav")[0];

    parentNode.appendChild(newMenu);

}

btnRemoveMenu.addEventListener("click" , removeMenu);

function removeMenu(){
    let parentNode = document.querySelector("ul.nav");
    let lastChild =parentNode.lastChild;
    parentNode.removeChild(lastChild);
}
// parentNode.removeChild(parentNode.lastChild)


