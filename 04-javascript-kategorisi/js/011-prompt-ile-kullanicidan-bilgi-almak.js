// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

// let fullName = prompt("Lutfen Adinizi Giriniz: ")
let lastName = prompt("Plesase enter your last name")
console.log(lastName);

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${lastName}</small>`