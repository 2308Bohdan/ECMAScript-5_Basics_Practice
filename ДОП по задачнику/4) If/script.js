/*1) Дано целое число. Если оно является положительным, то прибавить к
нему 1; в противном случае не изменять его. Вывести полученное число.*/
var num = 45;
if (num >= 0) {
	num += 1;
} 
console.log(num);

/*2) Дано целое число. Если оно является положительным, то прибавить к
нему 1; в противном случае вычесть из него 2. Вывести полученное число.*/
var num = -23;
if (num >= 0) {
	num += 1;
} else {
	num -= 2;
}
console.log(num);

/*3) Дано целое число. Если оно является положительным, то прибавить к
нему 1; если отрицательным, то вычесть из него 2; если нулевым, то
заменить его на 10. Вывести полученное число.*/
var num = 0;
if (num > 0) {
	num += 1;
} else if (num < 0) {
	num -= 2;
} else {
	num = 10;
}
console.log(num);

//4) Даны три целых числа. Найти количество положительных чисел в исходном наборе.
var num1 = 2;
var num2 = 203;
var num3 = -3;
if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
	console.log("3 числа положительные");
} else if (num1 >= 0 && num2 < 0 && num3 >= 0) {
	console.log("2 числа положительные");
} else if (num1 >= 0 && num2 < 0 && num3 < 0) {
	console.log("1 число положительные");
} else if (num1 >= 0 && num2 >= 0 && num3 < 0) {
	console.log("2 числа положительные");
} else if (num1 < 0 && num2 >= 0 && num3 >= 0) {
	console.log("2 числа положительные");
} else if (num1 < 0 && num2 >= 0 && num3 < 0) {
	console.log("1 числo положительные");
} else if (num1 < 0 && num2 < 0 && num3 >= 0) {
	console.log("1 числo положительные");
} else {
	console.log("0 чисeл положительныx");
}

/* 5)Даны три целых числа. Найти количество положительных и количество
отрицательных чисел в исходном наборе.*/
var num1 = 2;
var num2 = 203;
var num3 = -3;
if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
	console.log("3 числа положительные");
} else if (num1 >= 0 && num2 < 0 && num3 >= 0) {
	console.log("2 числа положительные, 1 отрицательное");
} else if (num1 >= 0 && num2 < 0 && num3 < 0) {
	console.log("1 число положительные, 2 отрицательных");
} else if (num1 >= 0 && num2 >= 0 && num3 < 0) {
	console.log("2 числа положительные, 1 отрицательное");
} else if (num1 < 0 && num2 >= 0 && num3 >= 0) {
	console.log("2 числа положительные, 1 отрицательное");
} else if (num1 < 0 && num2 >= 0 && num3 < 0) {
	console.log("1 числo положительные, 2 отрицательных");
} else if (num1 < 0 && num2 < 0 && num3 >= 0) {
	console.log("1 числo положительные, 2 отрицательных");
} else {
	console.log("3 числа отрицательны");
}

//6) Даны два числа. Вывести большее из них.
var num1 = 23;
var num2 = 2342345345;
if (num1 > num2) {
	console.log(num1);
} else if (num1 < num2) {
	console.log(num2);
} else {
	console.log("Они равны");
}

// 7)Даны два числа. Вывести порядковый номер меньшего из них.

/*В этом задании я не понял выводить порядковый номер относительно 0 начала отсчета,
или порядковый номер меньше, принимая большее число от начала отсчета. По этому 
я сделал два варианта */

//1
var num1 = 3901;
var num2 = 234768112;
if (num1 > num2) {
	console.log(num2);
} else if (num1 < num2) {
	console.log(num1)
} else {
	console.log(num1); //они равны
}

//2
var num1 = 3901;
var num2 = 23476;
if (num1 > num2) {
	console.log(num1 - num2);
} else if (num1 < num2) {
	console.log(num2 - num1)
} else {
	console.log(0);
}

// 8)Даны два числа. Вывести вначале большее, а затем меньшее из них.
var num1 = 324;
var num2 = 1;
if (num1 > num2) {
	console.log(num1);
	console.log(num2);
} else if (num1 < num2) {
	console.log(num2);
	console.log(num1);
} else {
	console.log(num1)
	console.log("Числа равны");
}

/* 9) Даны две переменные вещественного типа: A, B. Перераспределить значения 
данных переменных так, чтобы в A оказалось меньшее из значений,
а в B — большее. Вывести новые значения переменных A и B.*/
var numA = 2328;
var numB = 1;
var numC = 0;
var numD = 0;
if (numA > numB) {
	numC = numA;
	numD = numB;
	numA = numD;
	numB = numC;
	console.log(numA);
	console.log(numB);
} else {
	console.log(numA);
	console.log(numB);
}

/* 10)Даны две переменные целого типа: A и B. Если их значения не равны,
то присвоить каждой переменной сумму этих значений, а если равны,
то присвоить переменным нулевые значения. Вывести новые значения
переменных A и B.*/
var numA = 12312;
var numB = 432;
var sum = 0;
if (numA != numB) {
	sum = numA + numB;
	numA = sum;
	numB = sum;
	console.log("A " + numA);
	console.log("B " + numB);
} else {
	numA = 0;
	numB = 0;
	console.log("A " + numA);
	console.log("B " + numB);
}