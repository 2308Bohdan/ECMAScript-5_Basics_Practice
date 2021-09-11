/*Задание №1.
Напишите рекурсивную функцию digitSum(k), которая находит 
сумму цифр целого числа k, не используя циклы.*/

function digitSum(k) {
	if (k == 1) {
		return 1;
	} else {
		return k + digitSum(k - 1);
	}
}

var res = digitSum(10);
console.log(res);

/* На примере задания по задачнику:
Даны два целых числа A и B (A < B). Найти произведение всех целых
чисел от A до B включительно.*/

function multiplic(a, b) {
	if (a == b) {
		return a;
	} else {
		return b * multiplic(a, b - 1);
	}
}

var res = multiplic(3, 8);