/* 1)Дано целое число A. Проверить истинность высказывания: 
«Число A является положительным».*/
var numA = 54;
console.log(numA > 0);

/* 2)Дано целое число A. Проверить истинность высказывания:
 «Число A является нечетным»*/
 var numA = 22;
 var exam = !(numA % 2 == 0);
 console.log(exam);
 
 /* 3)Дано целое число A. Проверить истинность 
 высказывания: «Число A является четным».*/
 var numA = 48;
 var exam = numA % 2 == 0;
 console.log(exam);

/* 4)Даны два целых числа: A, B. Проверить истинность высказывания:
«Справедливы неравенства A > 2 и B ≤ 3».*/
var numA = 32;
var numB = 4;
var res = numA > 2 && numB <= 3;
console.log(res);

/* 5)Даны два целых числа: A, B. Проверить истинность высказывания:
«Справедливы неравенства A ≥ 0 или B < −2».*/
var numA = 3;
var numB = -5;
var res = numA >= 0 || numB < -2;
console.log(res);

/* 6)Даны три целых числа: A, B, C. Проверить истинность 
высказывания: «Справедливо двойное неравенство A < B < C».*/
var numA = 3;
var numB = 23;
var numC = 48;
var res = numA < numB && numB < numC;
console.log(res);

/* 7)Даны три целых числа: A, B, C. Проверить истинность
 высказывания: «Число B находится между числами A и C».*/
var numA = 89;
var numB = 123;
var numC = 334;
var res = numA < numB && numB < numC;
console.log(res);

/* 8)Даны два целых числа: A, B. Проверить истинность высказывания:
«Каждое из чисел A и B нечетное»*/
var numA = 33; 
var numB = 22;
var res = !(numA % 2 == 0) && !(numB % 2 == 0);
console.log(res);

/* 9)Даны два целых числа: A, B. Проверить истинность высказывания:
«Хотя бы одно из чисел A и B нечетное».*/
var numA = 33; 
var numB = 22;
var res = !(numA % 2 == 0) || !(numB % 2 == 0);
console.log(res);

/* 10)Даны два целых числа: A, B. Проверить истинность 
высказывания: «Ровно одно из чисел A и B нечетное».*/
var numA = 12; 
var numB = 13;
var resA = numA % 2 == 0;
var resB = numB % 2 == 0;
var res = resA != resB;
console.log(res);

/* 11)Даны два целых числа: A, B. Проверить истинность 
высказывания: «Числа A и B имеют одинаковую четность».*/
var numA = 127; 
var numB = 1021;
var resA = numA % 2 == 0;
var resB = numB % 2 == 0;
var res = resA == resB;
console.log(res);

/* 12) Даны три целых числа: A, B, C. Проверить истинность
 высказывания: «Каждое из чисел A, B, C положительное».*/
 var numA = 4;
 var numB = 34523;
 var numC = 23;
 var res = numA > 0 && numB > 0 && numC > 0;
 console.log(res);
 
 /* 13)Даны три целых числа: A, B, C. Проверить истинность 
 высказывания: «Хотя бы одно из чисел A, B, C положительное».*/
 var numA = 170;
 var numB = -15;
 var numC = 65;
 var res = numA > 0 || numB > 0 || numC > 0;
 console.log(res);
 
 /* 14)Даны три целых числа: A, B, C. Проверить истинность 
 высказывания: «Ровно одно из чисел A, B, C положительное».*/
 var numA = -170;
 var numB = 15;
 var numC = -65;
 var res1 = numA > 0 && numB < 0 && numC < 0;
 var res2 = numA < 0 && numB > 0 && numC < 0;
 var res3 = numA < 0 && numB < 0 && numC > 0;
 var mainRes = res1 || res2 || res3;
 console.log(mainRes);
 
 /* 15)Даны три целых числа: A, B, C. Проверить истинность
 высказывания: «Ровно два из чисел A, B, C являются положительными»*/
 var numA = 170;
 var numB = 15;
 var numC = -65;
 var res1 = numA > 0 && numB > 0 && numC < 0;
 var res2 = numA < 0 && numB > 0 && numC > 0;
 var res3 = numA > 0 && numB < 0 && numC > 0;
 var mainRes = res1 || res2 || res3;
 console.log(mainRes);
 
 /* 16)Дано целое положительное число. Проверить истинность 
 высказывания: «Данное число является четным двузначным»*/
 var num = 88;
 var res = num % 2 == 0 && num > 9 && num < 100
 console.log(res);
 
 /* 17)Дано целое положительное число. Проверить истинность 
 высказывания: «Данное число является нечетным трехзначным».*/
 var num = 88;
 var res = !(num % 2 == 0) && num > 99 && num <1000;
 console.log(res);
 
 /* 18)Проверить истинность высказывания: «Среди трех данных целых
чисел есть хотя бы одна пара совпадающих».*/
var num1 = 23;
var num2 = 541;
var num3 = 32;
var res = num1 == num2 || num1 == num3 || num2 == num3;
console.log(res); //не уверен что правильно понял условие задачи

/* 19) */

/* 20)Дано трехзначное число. Проверить истинность высказывания:
«Все цифры данного числа различны».*/
var num = 432;
var firstNum = parseInt(num / 100);
var secondNum = parseInt ((num / 10) % 10);
var thirdNum = num % 10;
var res = firstNum != secondNum && firstNum != thirdNum && secondNum != thirdNum;
console.log(res);

/* 21) Дано трехзначное число. Проверить истинность высказывания:
«Цифры данного числа образуют возрастающую последовательность».*/
var num = 432;
var firstNum = parseInt(num / 100);
var secondNum = parseInt ((num / 10) % 10);
var thirdNum = num % 10;
var res = firstNum < secondNum && secondNum < thirdNum;
console.log(res);

/* 22)Дано трехзначное число. Проверить истинность высказывания:
«Цифры данного числа образуют возрастающую или убывающую последовательность».*/
var num = 432;
var firstNum = parseInt(num / 100);
var secondNum = parseInt ((num / 10) % 10);
var thirdNum = num % 10;
var firstRes = firstNum < secondNum && secondNum < thirdNum;
var secondRes = firstNum > secondNum && secondNum > thirdNum;
var mainRes = firstRes || secondRes;
console.log(mainRes);

/* 23)Дано четырехзначное число. Проверить истинность высказывания:
 «Данное число читается одинаково слева направо и справа налево».*/
var num = 7887;
var firstNum = parseInt(num / 1000);
var secondNum = parseInt((num / 100) % 10);
var thirdNum = parseInt((num / 10) % 10);
var fourthNum = num % 10;
var res = firstNum === fourthNum && secondNum === thirdNum;
console.log(res);

/* 24)*/


/* 25)Даны числа x, y. Проверить истинность высказывания: «Точка с
координатами (x, y) лежит во второй координатной четверти».*/
var numX = 5;
var numY = 6;
/*Если координата x отрицательна,
 а y положительна, то точка находится во второй четверти.*/
var res = numX < 0 && numY > 0;
console.log(res);

/* 26)Даны числа x, y. Проверить истинность высказывания: «Точка с
координатами (x, y) лежит в четвертой координатной четверти».*/
var numX = 5;
var numY = -6;
/*Если x положительна, а y отрицательна, то точка находится в IV четверти.*/
var res = numX > 0 && numY < 0;
console.log(res);

/* 27)Даны числа x, y. Проверить истинность высказывания: «Точка с
координатами (x, y) лежит во второй или третьей координатной четверти».*/
var numX = -5;
var numY = -6;
var res = numX < 0 && numY > 0 || numX < 0 && numY < 0;
console.log(res);

/* 28)Даны числа x, y. Проверить истинность высказывания: «Точка с
координатами (x, y) лежит в первой или третьей координатной четверти»*/
var numX = 5;
var numY = 6;
var res = numX > 0 && numY > 0 || numX < 0 && numY < 0;
console.log(res);

/* 29)Даны числа x, y, x1, y1, x2, y2. Проверить истинность высказывания: «Точка 
с координатами (x, y) лежит внутри прямоугольника, левая
верхняя вершина которого имеет координаты (x1, y1), правая нижняя —
(x2, y2), а стороны параллельны координатным осям».*/
var numX = 5;
var numY = 4;
var numX1 = 2;
var numY1 = 6;
var numX2 = 9;
var numY2 = 2;
var resX = numX > numX1 && numX < numX2;
var resY = numY > numY2 && numY < numY1;
var mainRes = resX && resY;
console.log(mainRes);

/* 30)Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника. 
Проверить истинность высказывания: «Треугольник со сторонами a, b, c является 
равносторонним».*/
var numA = 5;
var numB = 7;
var numC = 5;
var res = numA === numB && numA === numC && numB === numC;
console.log(res);

/* 31)Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника. 
Проверить истинность высказывания: «Треугольник со сторонами a, b, c является 
равнобедренным».*/
var numA = 5;
var numB = 7;
var numC = 5;
var res = numA === numB || numA === numC || numB === numC;
console.log(res);

/* 32)Даны целые числа a, b, c, являющиеся сторонами некоторого
 треугольника. Проверить истинность высказывания: «Треугольник со
 сторонами a, b, c является прямоугольным».*/
 var sideA = 5;
 var sideB = 5;
 var sideC = 10;
 var squareA = Math.pow(sideA, 2);
 var squareB = Math.pow(sideB, 2);
 var squareC = Math.pow(sideC, 2);
 var res1 = squareC === (squareA + squareB);
 var res2 = squareB === (squareA + squareC);
 var res3 = squareA === (squareB + squareC);
 var mainRes = res1 || res2 || res3;
 console.log(mainRes);

/* 33)Даны целые числа a, b, c. Проверить истинность высказывания:
«Существует треугольник со сторонами a, b, c».*/

/*Я руководствовался: треугольник существует когда сумма длин любых его двух сторон
больше третьей стороный*/
var sideA = 5;
var sideB = 7;
var sideC = 8;
var res1 = sideA < (sideB + sideC);
var res2 = sideB < (sideA + sideC);
var res3 = sideC < (sideA + sideB);
var mainRes = res1 && res2 && res3;

console.log(mainRes);

/* 34)Даны координаты поля шахматной доски x, y (целые числа, лежащие в 
диапазоне 1–8). Учитывая, что левое нижнее поле доски (1, 1)
является черным, проверить истинность высказывания: «Данное поле является белым».*/

/*Если я правильно нарисовал, то поле будет черным если координаты:
или обе нечетные, или обе четные.*/
var numX = 4;
var numY = 5;
var parityX = numX % 2 == 0;
var parityY = numY % 2 == 0;
var fieldWhite = parityX != parityY;

console.log(fieldWhite);

/* 35)Даны координаты двух различных полей шахматной доски x1,
y1, x2, y2 (целые числа, лежащие в диапазоне 1–8). Проверить истинность
высказывания: «Данные поля имеют одинаковый цвет».*/

//Решил испоьзовать тот же  как и в прошлой задачи
var numX1 = 4;
var numY1 = 5;
var parityX1 = numX1 % 2 == 0;
var parityY1 = numY1 % 2 == 0;
var fieldWhiteFirst = parityX1 != parityY1;
var numX2 = 8;
var numY2 = 7;
var parityX2 = numX2 % 2 == 0;
var parityY2 = numY2 % 2 == 0;
var fieldWhiteSecond = parityX2 != parityY2;
var sameColor = fieldWhiteFirst === fieldWhiteSecond;

console.log(sameColor);

/* 36)Даны координаты двух различных полей шахматной доски x1, y1,
x2, y2 (целые числа, лежащие в диапазоне 1–8). Проверить истинность 
высказывания: «Ладья за один ход может перейти с одного поля на другое»*/
var numX1 = 1;
var numY1 = 1;
var numX2 = 8;
var numY2 = 8;
//Руководствовался что ладья ходит по горизонт. или вертик., т.е по оси Х или Y
var rook = numX1 === numX2 || numY1 === numY2;
console.log(rook);

/* 37)Даны координаты двух различных полей шахматной доски x1, y1, x2, y2 
(целые числа, лежащие в диапазоне 1–8). Проверить истинность
высказывания: «Король за один ход может перейти с одного поля на другое».*/
var numX1 = 5;
var numY1 = 5;
var numX2 = 7;
var numY2 = 7;
/*Если король не на крайних полях, а к примеру в центре шахматной доски,
то имеется 8 вариантов куда может пойти король.*/
var option1 = (numY2 - numY1) === 1 && numX1 === numX2;
var option2 = (numY2 - numY1) === -1 && numX1 === numX2;
var option3 = (numX2 - numX1) === 1 && numY1 === numY2;
var option4 = (numX2 - numX1) === -1 && numY1 === numY2;
var option5 = (numX2 - numX1) === 1 && (numY2 - numY1) === 1;
var option6 = (numX2 - numX1) === -1 && (numY2 - numY1) === -1;
var option7 = (numX2 - numX1) === 1 && (numY2 - numY1) === -1;
var option8 = (numX2 - numX1) === -1 && (numY2 - numY1) === 1;
var res = option1 || option2 || option3 || option4 || option5 || option6 ||option7 || option8;
console.log(res);
