
document.addEventListener("DOMContentLoaded" , init );

function init(){
    let btnSubmit = document.querySelector("button.btn");
    btnSubmit.addEventListener("click" , function(evt){
        console.log(evt);
        strAlert = validateFirstname(document.forms[0].firstname.value);
        strAlert += validateLastname(document.forms[0].lastname.value);
        strAlert += validateUsername(document.forms[0].username.value);
        strAlert += validateCity(document.forms[0].city.value);
        strAlert += validateState(document.forms[0].state.value);
        strAlert += validateZip(document.forms[0].zip.value);
        strAlert += validateAgreeToTerm(document.querySelector(".form-check-input").checked);

        // console.log(strAlert);
        if (strAlert == "") {
            document.getElementById("alertbox").setAttribute("style" ,"display:none");

        } else {
            document.getElementById("alertbox").setAttribute("style" ,"display:block");
            document.getElementById("alertbox").innerText = strAlert;    
            evt.preventDefault();        
        }
        
        
    })

    function validateFirstname(field){
        if (field.trim()== "") return "No Firstname was entered.\n";
        else if (/[^a-zA-Z]/.test(field)) return "Only a-z, A-Z in Firstname allowed!\n";
        return "";
    }

    function validateLastname(field){
        if (field.trim()== "") return "No Lastname was entered.\n";
        else if (/[^a-zA-Z]/.test(field)) return "Only a-z, A-Z in Lastname allowed!\n"; //[^a-zA-Z] means do not match a-zA-Z
        return "";
    }

    function validateUsername(field){
        if (field.trim()== "") return "No Username was entered.\n";
        else if (!(/^[a-z]*york\.cuny\.edu$/.test(field))) return "Only york.cuny.edu allowed!\n";
        return "";
    }

    function validateCity(field){
        if (field.trim()== "") return "No City was entered.\n";
        else if (/[^a-zA-Z]/.test(field)) return "Only a-z, A-Z in City allowed!\n"; //[^a-zA-Z] means do not match a-zA-Z
        return "";
    }

    function validateState(field){
        if (field.trim()== "") return "No State was selected.\n";
        return "";
    }

    function validateZip(field){
        if (field.trim()== "") return "No zip code was entered.\n";
        else if (!(/^[0-9]{5}$/.test(field))) return "Not a valid zip code (5 digits)\n"; 
        return "";
    }

    //document.querySelector(".form-check-input").checked  will return true of the checkbox is checked.
    function validateAgreeToTerm(field){
        if (field) return "";
        else return "You must agree to terms and conditions.!\n"

    }

    // Regular Expressions
    // used for pattern-matching within a single expression
    //every regular expression must be enclosed in slashes
    //TRY THIS
    // console.log(/[0-9]/.test("abbbc")); //expected output false
    // console.log(/[a-z]/.test("abbbc")); //expected output true
    // console.log(/a[a-z]/.test("abbbc")); //expected output true
    // console.log(/a[a-z]*/.test("abbbc")); //expected output true
    // console.log(/[a-z]\@york\.cuny\.edu/.test("abc@york.cuny.edu"));
    // console.log(/^[0-9]*$/.test(""));
    // console.log(/^[a-z]+\.cuny\.edu$/.test("york.cuny.edu"));
    // console.log(/a[a-z]/.test("abbbc"));


}






