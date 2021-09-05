/* 1)Даны целые числа K и N (N > 0). Вывести N раз число K*/
var numN = 4;
var numK = 5;
for (var i = 1; i <= numN; i++) {
	console.log(numK);
}

/* 2)Даны два целых числа A и B (A < B). Вывести в порядке возрастания все
целые числа, расположенные между A и B (включая сами числа A и B), а
также количество N этих чисел.*/
numA = 5;
numB = 19;
numN = 0;
for (var i = numA; i <= numB; i++) {
	console.log(i);
	numN += 1;
}
console.log("Количество " + numN);

/* 3)Даны два целых числа A и B (A < B). Вывести в порядке убывания все
целые числа, расположенные между A и B (не включая числа A и B), а
также количество N этих чисел.*/
numA = 5;
numB = 19;
var numN = 0;
for (var i = numB - 1; i > numA; i--) {
	console.log(i);
	numN += 1;
}
console.log(numN);

/* 4)Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1,
2, . . . , 10 кг конфет.*/
var priceFor1kg = 12;
var priceSweets;
for (var i = 1; i <= 10; i++) {
	priceSweets = i * priceFor1kg;
	console.log("Цена за " + i + " кг конфет: " + priceSweets);
}

/* 5)Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1,
0.2, . . . , 1 кг конфет.*/

var priceFor1kg = 12;
var priceSweets;
for (var i = 1; i <= 10; i++) { 
	priceSweets = (i / 10) * priceFor1kg;
	console.log(priceSweets);
}

/* 6)Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1.2,
1.4, . . . , 2 кг конфет.*/
var priceFor1kg = 12;
var coefficient = 1;
var priceSweets;
for (var i = 1; i <= 5; i++) { 
	coefficient = parseFloat(coefficient + 0.2);
	priceSweets = coefficient * priceFor1kg;
	alert(coefficient + " кг. Цена " + priceSweets);
}

/* 7)Даны два целых числа A и B (A < B). Найти сумму всех целых чисел
от A до B включительно.*/
var numA = 5;
var numB = 20;
var sum = 0;
for (var i = numA; i <= numB; i++) {
	sum += i;
}
alert(sum);

/* 8)Даны два целых числа A и B (A < B). Найти произведение всех целых
чисел от A до B включительно.*/
var numA = 5;
var numB = 20;
var multiplic = 1;
for (var i = numA; i <= numB; i++) {
	multiplic *= i;
}
alert(multiplic);

/* 9)Даны два целых числа A и B (A < B). Найти сумму квадратов всех целых
чисел от A до B включительно.*/
var numA = 5;
var numB = 12;
var sum = 0;
for (var i = numA; i <= numB; i++) {
	sum = sum + (i * i);
}
alert(sum);

/* 10)Дано целое число N (> 0). Найти сумму 1 + 1/2 + 1/3 + . . . + 1/N
(вещественное число)*/
var numN = 23;
var sum = 0;
for (var i = 1; i < numN; i++) {
	sum = sum + (1 / i);
}
alert(sum);


/*For11. Дано целое число N (> 0). Найти сумму
N2 + (N + 1)2 + (N + 2)2 + . . . + (2·N)2
(целое число).*/



/* 39)Даны целые положительные числа A и B (A < B). Вывести все целые
числа от A до B включительно; при этом каждое число должно выводиться
столько раз, каково его значение (например, число 3 выводится 3 раза).*/
var numA = 2;
var numB = 9;
for (var i = numA; i <= numB; i++) {
	for (var j = 1; j <= i; j++) {
		console.log(i);
	}
}

/* 40) Даны целые числа A и B (A < B). Вывести все целые числа от A до B
включительно; при этом число A должно выводиться 1 раз, число A + 1
должно выводиться 2 раза и т. д.*/
