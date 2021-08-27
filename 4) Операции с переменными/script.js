//1) Дана сторона квадрата a. Найдите его площадь s = a * a.

var lenghtA = 8; //вместо "а" подставляем число
var squareArea = lenghtA * lenghtA;

console.log(squareArea);

/*
  2) Дано двузначное число. Выведите на консоль вначале его левую цифру (десятки),
 а затем – его правую цифру (единицы). Для нахождения десятков использовать операцию
 деления нацело, для нахождения единиц – операцию взятия остатка от деления.
*/

var num = 34;
var dozens = parseInt(num / 10);
var units = num % 10;

console.log(dozens);
console.log(units);

//3) Даны два целых числа: a, b. Проверьте истинность высказывания: a > 2 и b ≤ 3

var numA = 4;
var numB = 3;
var result = numA > 2 && numB <= 3;

console.log(result);

//4) Даны три целых числа: a, b, c. Проверьте истинность высказывания: a < b < c.

var numA = 10;
var numB = 12;
var numC = 5;
var result = numA < numB && numB < numC;

console.log(result);

/*5) Дано целое положительное число. Проверьте истинность 
высказывания: данное число является нечетным трехзначным.
*/

var num = 342; 
var result = num > 99 && num % 2 == 0;

console.log(result);