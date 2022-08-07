let nameY = prompt("Enter your name")
let surName = prompt("Enter your surname")
let age = prompt("Enter your age")

let numberA = prompt("Enter first number")
let numberB = prompt("Enter second number")
let numberC = prompt("Enter third number")

let A = parseInt(numberA)
let B = parseInt(numberB)
let C = parseInt(numberC)

let average = (A + B + C) / 3;

document.write("<header></header>")
document.write("<main>")
document.write("<nav></nav>")
document.write("<section>")
document.write("Your name is : " + nameY + "<br>" 
                + "Your surname is : " + surName + "<br>"
                + "Your age is : " + age + "<br>")
document.write("Average is : " + average)
document.write("</section>")
document.write("</main>")
document.write("<footer></footer>")
