// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
// console.log(NEW_PRODUCTS)


// aktif kullanicilar ??
const USERS = [
  {fullName: "Ayse Sumer", isActive: false},
  {fullName: "Ahmet Urgan", isActive: true},
  {fullName: "Bsya Basar", isActive: true},
  {fullName: "Aksel Durmaz", isActive: false},
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
// const ACTIVE_USERS = USERS.filter(user => user.isActive )
// console.log(ACTIVE_USERS[0].fullName)


const ALAR = USERS.filter(item => item.fullName[0] === "A");
console.log(ALAR);