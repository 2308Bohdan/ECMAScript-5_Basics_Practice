/* 1)Даны положительные числа A и B (A > B). На отрезке длины A
размещено максимально возможное количество отрезков длины B (без
наложений). Не используя операции умножения и деления, найти длину
незанятой части отрезка A.*/
var numA = 235;
var numB = 4;
while (true) {
	if (numA < numB) {
		console.log(numA);
		break;
	}
	numA -= numB;
}

/* 2)Даны положительные числа A и B (A > B). На отрезке длины A размещено максимально
возможное количество отрезков длины B (без наложений). Не используя 
операции умножения и деления, найти количество отрезков B, размещенных на отрезке A.*/
var numA = 235;
var numB = 4;
var number = 0;
while (true) {
	if (numA < numB) {
		break;
	}
	numA -= numB;
	number += 1;
}
console.log(number);

/* 3)Даны целые положительные числа N и K. Используя только операции
сложения и вычитания, найти частное от деления нацело N на K, а также
остаток от этого деления.*/
var numN = 38;
var numK = 7;
var par1 = 0;
while (true) {
	if (numN < numK) {
		break;
	}
	par1 += 1;
	numN -= numK;
}
console.log(par1);
console.log(numN);

/* 4)Дано целое число N (> 0). Если оно является степенью числа 3, то
вывести TRUE, если не является — вывести FALSE.*/
var numN = 729;
while (true) {
	numN /= 3;
	if (numN === 1) {
		console.log(true);
		break;
	} else if (numN < 1) {
		console.log(false);
		break;
	}
}

/* 5)Дано целое число N (> 0), являющееся некоторой степенью числа 2:
N = 2K. Найти целое число K — показатель этой степени.*/
var numN = 4096;
var parK = 0;
while (true) {
	numN /= 2;
	parK += 1;
	if (numN === 2) {
		break;
	}
}
alert(parK);

/* 6)Дано целое число N (> 0). Найти двойной факториал N:
N!! = N·(N−2)·(N−4)·. . .
(последний сомножитель равен 2, если N — четное, и 1, если N — нечетное). 
Чтобы избежать  целочисленного переполнения, вычислять это произведение с 
помощью вещественной переменной и вывести его как вещественное число.*/


/* 7)Дано целое число N (> 0). Найти наименьшее целое положительное
число K, квадрат которого превосходит N: K
2 > N. Функцию извлечения квадратного корня не использовать.*/
var numN = 15;
var square = 0;
var i = 1;
while (true) {
	i++;
	square = i * i;
	if (square > numN) {
		console.log(i);
		break;
	}
}

/* 8)Дано целое число N (> 0). Найти наибольшее целое число K, квадрат
которого не превосходит N: K2 ≤ N. Функцию извлечения квадратного
корня не использовать.*/

var numN = 165;
var square = 0;
var i = 1;
while (true) {
	square = i * i;
	if (square === numN) {
		console.log(i);
		break;
	} else if (square > numN) {
		console.log(i - 1);
		break;
	}
	i++;
}

/* 9)Дано целое число N (> 1). Найти наименьшее целое число K, при
котором выполняется неравенство 3K > N.*/
var numN = 123;
var par = 1;
var numK = 0;
while (true) {
	numK += 1;
	par *= 3;
	if (par > numN) {
		console.log(numK);
		break;
	}
}

/* 10)Дано целое число N (> 1). Найти наибольшее целое число K, при
котором выполняется неравенство 3K < N.*/
var numN = 123;
var par = 1;
var numK = 0;
while (true) {
	numK += 1;
	par *= 3;
	if (par > numN) {
		console.log(numK - 1);
		break;
	}
}
