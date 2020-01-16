
document.addEventListener("DOMContentLoaded" , init );

function init(){
    document.getElementsByClassName("btn")[0].addEventListener("click", showText);
    document.getElementsByClassName("btn")[1].addEventListener("click", addNewMenu);
    document.getElementsByClassName("btn")[2].addEventListener("click", removeMenu);
    document.getElementsByClassName("btn")[3].addEventListener("click", changeImage);
    document.getElementsByClassName("btn")[4].addEventListener("click", showAlert);


    document.getElementById("btn-new-task").addEventListener("click", addToDo );
    let todoList = document.getElementById("todo-tasks");
    let newtask = document.getElementById("new-task");

    function addToDo(msg){
        // alert("hello ");
        let listItem = document.createElement("li");
        let checkBox = document.createElement("input");
        let label = document.createElement("label");
        let deleteButton = document.createElement("button");

        checkBox.type ="checkbox";
        deleteButton.className ="delete";
        deleteButton.innerText = "X";
        if (typeof(msg)=='string'){
            label.innerText = msg;
        } else {
            label.innerText = newtask.value;
        }

        

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);

        checkBox.addEventListener("click", taskCompleted);
        deleteButton.addEventListener("click", deleteTask);



    }

    let todoArrayList = ["Pay Bills", "Buy Stuff", "Get cash", "finish work"];
    for (var i=0; i< todoArrayList.length; i++){

        addToDo(todoArrayList[i]);
    }


    function taskCompleted(){
        console.log(this);
        var label = this.nextSibling;
        label.setAttribute("style", "text-decoration:line-through;");

    }

    function deleteTask(){

        // console.log(this.parentNode.parentNode);
        todoList.removeChild(this.parentNode);

    }


    function addNewMenu(){
        let ulist = document.querySelector("ul.nav");
        let listitem = document.createElement("li");
        let anchor = document.createElement("a");
        anchor.innerHTML="New Menu";
        anchor.setAttribute("class","nav-link");
        anchor.setAttribute("href","#");
        listitem.appendChild(anchor);
        ulist.appendChild(listitem);
    }
    function removeMenu(){
        let ulist = document.querySelector("ul.nav");
        let lastchild = ulist.lastElementChild;
        ulist.removeChild(lastchild);
    }

    function showAlert(){
        if (document.getElementsByClassName("btn")[4].innerHTML.toLowerCase() == "Show Alert".toLowerCase()){
            var alertString="<div class='alert alert-success'>";
            alertString += "You clicked the button!" + "</div>";
            document.getElementById("alertbox").innerHTML= alertString;
            document.getElementsByClassName("btn")[4].innerHTML = "Hide Alert"; 
        } else {
            console.log("Enter here");
            document.getElementById("alertbox").innerHTML ="";
            document.getElementsByClassName("btn")[4].innerHTML = "Show Alert"; 

        }
    }
    function showText(){
        let showText="I love coding!!!";
        document.getElementById("leadtext").innerHTML= showText;
    }

    function changeImage(){

        let myImage = document.querySelector("img");
        let imageFile = myImage.getAttribute("src");
        
        if (imageFile == "image/YorkLogo-1.png") {
            myImage.setAttribute("src","image/YorkLogo-2.png");
        } else {
            myImage.setAttribute("src","image/YorkLogo-1.png");
        }
    }

}






