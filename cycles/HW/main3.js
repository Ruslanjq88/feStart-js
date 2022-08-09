// Прямоугольник
document.write("<div>")
for (var row = 0; row < 8; row++) {
    for (var amo = 0; amo < 38; amo++) {
        document.write("*")
    }
    document.write("<br>")
}
document.write("</div>")


// Прямоугольный треугольник
document.write("<div>")
for (var row = 0; row < 15; row++) {
    for (var amo = 0; amo <= row; amo++) {
        document.write("*")
    }
    document.write("<br>")
}
document.write("</div>")


// Равносторонний треугольник
document.write("<div>")
var ran = 15
for (var rowN = 1; rowN <= ran; rowN++) {
    for (var spc = 1; spc <= ran - rowN; spc++) {
        document.write("&nbsp" + "&nbsp")
    }

    for (var str = 0; str < 2 * rowN -1; str++) {
        document.write("*")
    }
    document.write("<br>")
}
document.write("</div>")


// Ромб
for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10 - i; k++) {
        document.write("&nbsp" + "&nbsp")
    }

    for (let j = 1; j <= i; j++) {
        document.write("*")
    }

    for (let j = 2; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>")
}

for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= i; k++) {
        document.write("&nbsp" + "&nbsp")
    }

    for (let j = 1; j <= 10 - i; j++) {
        document.write("*")
    }

    for (let j = 2; j <= 10 - i; j++) {
        document.write("*")
    }
    document.write("<br>")
}
