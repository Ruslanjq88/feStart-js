// if (a + b < 4) {
//     result = "Мало"
// } else {
//     result = "Много"
// }

let a = 2
let b = 1
let result

a + b < 4 ? result = "Мало" : result = "Много"
console.log(result)




// var message

// if (login == "Вася") {
//     message = "Привет"
// } else if (login == "Директор") {
//     message = "Здравствуйте"
// } else if (login == "") {
//     message = "Нет логина"
// } else {
//     message = ""
// }

let login = prompt("Enter your login :")
var message

login == "Вася" ? message = "Привет" :
login == "Директор" ? message = "Здравствуйте" :
login == "" ? message = "Нет логина" :
message = ""

console.log(message)
