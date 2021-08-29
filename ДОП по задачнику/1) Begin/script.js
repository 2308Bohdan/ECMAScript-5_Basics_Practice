//1) Дана сторона квадрата а. Найти его периметр Р = 4*а.

var lenghtA = 5;
var perimeter = 4 * lenghtA;
console.log(perimeter);

//2) Задача была в предыдущем д/з.
//3) Даны стороны прямоугольника a и b. Найти его площадь S = a*b и периметр P = 2*(a+b).

var sideA = 7;
var sideB = 12;
var perimeter = 2 * (sideA + sideB);
var square = sideA * sideB;

console.log(perimeter);
console.log(square);

/*4) Дан диаметр окружности d. Найти ее длину L = P*d. В качестве значения 
Р использовать 3.14.*/

var diameter = 15;
var PI = 3.14;
var lenghtCircle = PI * diameter;

console.log(lenghtCircle);

/*5) Дана длина ребра куба a. Найти объем куба V = a3 и площадь его
поверхности S = 6·a2.*/

var lenghtA = 56;
var volum = lenghtA * lenghtA * lenghtA;
var square = 6 * (lenghtA * lenghtA);

console.log(volum);
console.log(square);

/*6) Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти
его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c).*/

var lenghtA = 10;
var lenghtB = 8;
var lenghtC = 12;
var volum = lenghtA * lenghtB * lenghtC;
var square = 2 * (lenghtA * lenghtB + lenghtB * lenghtC + lenghtA * lenghtC);

console.log(volum);
console.log(square);

/*7) Найти длину окружности L и площадь круга S заданного радиуса R:
L = 2·π·R, S = π·R2.
В качестве значения π использовать 3.14. */

var radius = 23;
var PI = 3.14;
var lenghtCircle = 2 * PI * radius;
var square = PI * (radius * radius);

console.log(lenghtCircle);
console.log(square);

/*8) Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2. */

var numA = 23;
var numB = 8;
var average = (numA + numB) / 2;

console.log(average);

/*9) Даны два неотрицательных числа a и b. Найти их среднее геометрическое,
 то есть квадратный корень из их произведения: √a·b.*/
 
 var numA = 12;
 var numB = 13;
 var geometricMean = Math.sqrt(numA * numB);
 
 console.log(geometricMean);
 
 /*10) Даны два ненулевых числа. Найти сумму, разность, произведение и
частное их квадратов.*/

var firstNum = 12;
var secondNum = -7;
var firstSquare = Math.pow(firstNum, 2);
var secondSquare = Math.pow(secondNum, 2);
var sum = firstSquare + secondSquare;
var difference = firstSquare - secondSquare;
var multiplic = firstSquare * secondSquare;
var division = firstSquare / secondSquare;

console.log(sum);
console.log(difference);
console.log(multiplic);
console.log(division);