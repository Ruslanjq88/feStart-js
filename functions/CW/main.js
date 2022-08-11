function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

let a = parseInt(prompt("Введите первое число :"))
let sign = prompt("Введите знак (+ , - , * , /) :")
let b = parseInt(prompt("Введите второе число :"))

a = isNaN(a) ? 0 : a
b = isNaN(b) ? 0 : b

function calculate(a, b, callback) {
    let result = callback(a, b)
    if (arguments.length === 3) {
        document.write(a + sign + b + " = " + result)
    } else {
        document.write("ERROR - Требуется три аргумента при вызове. Функция вызвана с " + arguments.length + " параметрами!")
    }
}

switch (sign) {
    case "+" :
        calculate(a, b, add)
        break
    case "-" :
        calculate(a, b, sub)
        break
    case "*" :
        calculate(a, b, mul)
        break
    case "/" :
        if (a !== 0 && b !== 0) {
           calculate(a, b, div) 
        } else {
            document.write("Деление на 0 запрещено!!!")
        }
        break
    default :
        document.write(sign + " - не является знаком арифметической операции.")
}
