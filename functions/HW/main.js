// task 1
function map(array, fn) {
    fn(array)
    return array
}

let num = new Array(1, 2, 3, 4, 5, 6)

let mod = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2
    }
}

map(num, mod)
console.log(num)


// task 2
function checkAge(age) {
    let result = age > 18 ? true : confirm('Родители разрешили?')
    console.log(result)
}

checkAge(19)
