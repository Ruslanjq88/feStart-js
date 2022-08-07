let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
arr.reverse()

let ind = prompt("Введите индекс : ")
let coun = prompt("Введите количество : ")
arr.splice(ind, coun)

document.write(arr.join("\u2601"))
