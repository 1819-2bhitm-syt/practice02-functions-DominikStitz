let printCalculation = function (operator, calculate) {
    console.log("20 " + operator + " 3 = " + calculate(20, 3));
};

let sum = function (num1, num2) {
    return num1 + num2;
};

let difference = function (num1, num2) {
    return num1 - num2;
};

let multiplicate = function (num1, num2) {
    return num1 * num2;
};

let divide = function (num1, num2) {
    return num1 / num2;
};

let highUp = function (num1, num2) {
    return num1 ** num2;
};

let modulo = function (num1, num2) {
    return num1 % num2;
};

printCalculation("+", sum);
printCalculation("-", difference);
printCalculation("*", multiplicate);
printCalculation(":", divide);
printCalculation("^", function (num1, num2) {
    return num1 ** num2;
});
printCalculation("%", (num1, num2) => num1 % num2);