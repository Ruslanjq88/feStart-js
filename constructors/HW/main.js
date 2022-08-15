// task 1

function Human() {
    this.arr = [5, 3, 2, 4, 1, 10, 50, 30, 3]

    Human.prototype.mod = function(age) {
        if (age === "more") {
            this.arr.sort(function(a, b) {
                if (a > b) return 1
                if (a < b) return -1
                return 0
            })
        } else if (age === "less") {
            this.arr.sort(function(a, b) {
                if (a > b) return -1
                if (a < b) return 1
                return 0
            })
        } else {
            return "Error!!!"
        }
        return this.arr
    }
}

let result = new Human()
console.log(result.mod("more"))


// task 2

// function Human() {
//     this.employees = [
//         {name: "David", salary: 35000, hireDate: "August 1, 2019"},
//         {name: "John", salary: 50000, hireDate: "July 16, 2017"},
//         {name: "Ana", salary: 73000, hireDate: "December 7, 2021"},
//         {name: "Christina", salary: 105000, hireDate: "March 24, 2015"}
//     ]

//     Human.prototype.date = function() {
//         this.employees.sort(function(x, y) {
//             let a = new Date(x.hireDate),
//                 b = new Date(y.hireDate)
//             return a - b
//         })
//         return this.employees
//     }
// }

// let result = new Human()
// console.table(result.date())
