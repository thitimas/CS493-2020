//For exercise#13

//Object Literal
let student = {
    name : "Amy",
    lastname: "Doe",
    courses : [{
        coursenumber : "CS291",
        coursename: "CS II"
    } ,{
        coursenumber : "CS341",
        coursename: "Data structures"
    }],
    music : ["Let it go", "ABC" , "Memories"],
    year : 2020,
    bio: function (){
    return ("My name is " + this.name + " " + this.lastname +  " and I like " + this.music);
    },
    coursesDone: function (){
        let course ="";
        for (let i of this.courses){
            course += i.coursenumber + " : " + i.coursename + "\n";
        }
        return (course);
    }
};



console.log(student.bio());
console.log(student.coursesDone());


