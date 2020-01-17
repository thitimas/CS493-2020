//Object Creation
let animal = new Object();
animal.legs = 4;
animal.color = "brown";
animal.eyeColor = "blue";
animal.wings = false;

console.log("My animal's color is " + animal.color);
console.log(animal);

animal.wings = true;

//Object Literal
let dog = {
    name : "Cookie",
    breed: "Pomeranian",
    color : "Brown",
    age: 8,
    "previous owners":  ["Joan", "John", "Jay"],
    likes: ["Food", "Toy", "Go Out"],
}

console.log("My dog's name is :" + dog.name + "and he likes " + dog.likes);

let studentA ={
    name : "Jill",
    age : 24,
    ID : "12345567",
    address : {
        number : "123",
        street : "Main St.",
        city : "Brooklyn",
        zip: "12345",
        state: "NY"
    },
    courses : ["CS493", "CS351" , "CS494"],
    getAddress : function(){
        return this.address.number  + " " + this.address.street + " " + this.address.city + " " + this.address.zip;
    }
}

console.log(studentA.getAddress());



document.getElementById("txtName").innerText = studentA.name;
document.getElementById("txtAge").innerText = studentA.age;
document.getElementById("txtID").innerText = studentA.ID;
document.getElementById("txtAddress").innerText = studentA.getAddress();
document.getElementById("txtCourses").innerText = studentA.courses;



let empList =[
    {
        "fname": "Sharad",
        "lname": "Volz"
    },
    {
        "fname": "Constance",
        "lname": "Dech"
    },
    {
        "fname": "Myra",
        "lname": "Comeau"
    },
    {
        "fname": "Noriess",
        "lname": "Dabbs"
    },
    {
        "fname": "Esperanza",
        "lname": "Shrestha"
    },
    {
        "fname": "Eugene",
        "lname": "Barron"
    },
    {
        "fname": "Petr",
        "lname": "Ravenelle"
    },
    {
        "fname": "Cristina",
        "lname": "Terry"
    },
    {
        "fname": "Victoria",
        "lname": "Aresti"
    },
    {
        "fname": "Byron",
        "lname": "Yarber"
    }
];

// for (i = 0 ; i <empList.length; i ++){
//     console.log(empList[i]);
// }
rowData = document.getElementById("empData");

for (let n of empList){
    console.log(n.fname + " " + n.lname);
    let row = document.createElement("tr");
    let colName = document.createElement("td");
    let colLastName = document.createElement("td");

    colName.innerText = n.fname;
    colLastName.innerText = n.lname;
    row.appendChild(colName);
    row.appendChild(colLastName);
    rowData.appendChild(row);
}

//Another way to populate empList to the table using innerHTML and string concatenation
// rowData.innerHTML = "";
// let rowDataInnerHTML = "";
// for (let n of empList){
//     rowDataInnerHTML += "<tr><td>"+ n.fname+"</td><td>" + n.lname + "</td</tr>"
// }

// rowData.innerHTML = rowDataInnerHTML;
