// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// let username = prompt("Kullanici Adinizi Giriniz:")
// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

// if (username) {  // if kismi her zaman true ise calisir
//     console.log(`Kullanici Bilginiz ${username}`)
// } else {
//     console.log("bilgi yok")
// }


// let info = prompt("Plese enter your name");

// if (info) {
//     console.log(`Adınız: ${info} `)
// } else {
//     console.log("bilgi yok")
// }

var number = "";
var n = (1 <= n <= 100); var n = prompt("Please enter a number:")

if (n % 2 == 1) {
    number = "Weird";
}else if (n >= 2 && n <= 5) {
        number = "Not Weird";
} else if (n >= 6 && n <= 20) {
      number = "Weird";
} else if (n > 20) {
      number = "Not Weird";
}
  
console.log(number);