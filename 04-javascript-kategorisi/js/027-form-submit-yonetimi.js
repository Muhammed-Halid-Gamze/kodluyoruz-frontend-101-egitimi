// FORM SUBMIT:

let myForm = document.querySelector("#userForm")
myForm.addEventListener("click",mySubmit)

function mySubmit(event) {
    event.preventDefault();
    console.log("işlem gerçekleşti")
    let domSubmit = document.querySelector("#score")
    console.log(domSubmit.value);
    localStorage.setItem("score", domSubmit.value)
 

}