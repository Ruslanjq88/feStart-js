let res


var x = 6
var y = 14
var z = 4

res = x += y - x++ * z
document.write("(x += y - x++ * z) : " + res + "<br>" + "<hr>")


var x = 6
var y = 14
var z = 4

res = z = --x - y * 5
document.write("(z = --x - y * 5) : " + res + "<br>" + "<hr>")


var x = 6
var y = 14
var z = 4

res = y /= x + 5 % z
document.write("(y /= x + 5 % z) : " + res + "<br>" + "<hr>")


var x = 6
var y = 14
var z = 4

res = z - x++ + y * 5
document.write("(z - x++ + y * 5) : " + res + "<br>" + "<hr>")


var x = 6
var y = 14
var z = 4

res = x = y - x++ * z
document.write("(x = y - x++ * z) : " + res)
