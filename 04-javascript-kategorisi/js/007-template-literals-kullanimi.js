// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// let username = "hakan"
// const DOMAIN = "kodluyoruz.org"

// let email = username + "@" + DOMAIN

// // console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

// let info = `
// Merhaba ${username} sitemize hosgeldin.. 
// mail adresin: ${email}

// mail adresinin uzunlugu: ${email.length}
// borcunuz: ${(2 + 3) * 10} TL
// gunun saat bilgisi : ${new Date().getHours()}

// kisa isminiz: ${username[0]}.
// `

// console.log(info)

let kullanıcıAdı = "Halid";
const DOMAIN = "coredetechnology.org"

let email = kullanıcıAdı + "@" + DOMAIN

console.log("Merhaba", kullanıcıAdı, "sitemize hosgeldin ", "mail adresiniz", email);


let info = `
Merhaba ${kullanıcıAdı} sitemize hoşgeldin...

Mail adresiniz ${email}

günün saat bilgisi ${new Date().getHours()}`

console.log(info);