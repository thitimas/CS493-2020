document.querySelector('button.btn').addEventListener("click" , function(){
    let requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";


    fetch(requestURL)
    .then(response => response.json())
    .then (data => populateList(data));

    function populateList(data){

        studentList = data;
        for (let n of studentList){
            var previousHTML = studentData.innerHTML;
            var string = "<tr><td >"+n.fname+"</td><td >"+ n.lname+"</td>";
            string += "<td >"+n.address + " " + n.city + " " + n.zip + "</td><td >"+ n.tel+"</td></tr>";
            studentData.innerHTML = previousHTML+string;   
        }

    }
})

