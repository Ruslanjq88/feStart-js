function Calculator() {
    Calculator.prototype.read = function() {
        this.num1 = parseInt(prompt("Enter first number :"))
        this.num2 = parseInt(prompt("Enter second number :"))
    }
    Calculator.prototype.sum = function() {
        return this.num1 + this.num2
    }
    Calculator.prototype.mul = function() {
        return this.num1 * this.num2
    }
}

let result = new Calculator()
result.read()
document.write("Addition result : " + result.sum() + "<br>" + "Multiplication result : " + result.mul())
