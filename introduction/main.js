let x = 6
let y = 14
let z = 4

let res

res = x += y - x++ * z
document.write("(x += y - x++ * z) : " + res + "<br>" + "<hr>")


res = z = --x - y * 5
document.write("(z = --x - y * 5) : " + res + "<br>" + "<hr>")


res = y /= x + 5 % z
document.write("(y /= x + 5 % z) : " + res + "<br>" + "<hr>")


res = z - x++ + y * 5
document.write("(z - x++ + y * 5) : " + res + "<br>" + "<hr>")


res = x = y - x++ * z
document.write("(x = y - x++ * z) : " + res)
