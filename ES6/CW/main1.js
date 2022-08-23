// task 1,2
class CreateNewUser {
    constructor() {
        this.newUser = {}
        this.newUser.firstName = prompt("Enter your first name :")
        this.newUser.lastName = prompt("Enter your last name :")
        this.newUser.birthday = prompt("Enter your date of birth( format : dd.mm.yyyy ) :")
    }
    getLogin() {
        let log = (this.newUser.firstName.charAt(0) + this.newUser.lastName).toLowerCase()
        return log
    }
    getAge() {
        let currentYear = new Date().getFullYear()
        let partsD = this.newUser.birthday.split(".")
        let birthYear = new Date(partsD[2], partsD[1] - 1, partsD[0]).getFullYear()
        let age = currentYear - birthYear
        return age
    }
    getPassword() {
        let partsD = this.newUser.birthday.split(".")
        let birthYear = new Date(partsD[2], partsD[1] - 1, partsD[0]).getFullYear()
        let password = this.newUser.firstName.charAt(0).toUpperCase() + this.newUser.lastName.toLowerCase() + birthYear
        return password
    }
}
let res1 = new CreateNewUser()
console.log(`Login : ${res1.getLogin()}`)
console.log(`Age : ${res1.getAge()}`)
console.log(`Password : ${res1.getPassword()}`)


// task 3
const filterBy = (arr, dataT) => arr.filter(el => typeof el !== typeof dataT)
let res3 = filterBy([42, "hello", false, 88, "bla-bla"], 'string')
console.log(res3)
