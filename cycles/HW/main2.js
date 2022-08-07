// task 1
var A = 0
var B = 10
var sum = 0

while (A <= B) {
    sum += A
    A++
}
document.write(sum + "<br>")


// task 2
var A = 0
var B = 10

while (A < B) {
    A++
    if (A % 2 !== 0) {
        document.write(A)
    }
}
