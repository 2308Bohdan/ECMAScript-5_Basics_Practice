/*Задание №1.
Напишите функцию pow(x, n), которая возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.*/
function pow(x, n) {
	var numberPow = x;
	for (var i = 1; i < n; i++) {
		numberPow *= x;
	}
	return numberPow;
}

/*Задание №2.
Напишите функцию minMax(x, y), которая возвращает минимальное из x и y.*/
function minMax(x, y) {
	if (x > y) {
		return y;
	} else if (x < y) {
		return x;
	} else {
		return "Равны";
	}
}

/*Задание №3.
Напишите функцию sign(x) целого типа, возвращающую для вещественного числа x следующие значения:
– -1, если x < 0;
– 0, если x = 0;
– 1, если x > 0.*/
function sign(x) {
	var res;
	if (x < 0) {
		res = -1;
		return res;
	} else if (x > 0) {
		res = 1;
		return res;
	} else {
		res = 0;
		return res;
	}
}

/*Задание №4.
Напишите функцию calc(a, b, op), которая выполняет над числами a и b одну
 из арифметических операций и возвращает ее результат. Вид операции определяется
 целым числом op: 1 – вычитание, 2 – умножение, 3 – деление, остальные значения 
 – сложение.*/
 
function calc(a, b, op) {
	var arithOperation;
	if (op === 1) {
		arithOperation = a - b;
		return arithOperation;
	} else if (op === 2) {
		arithOperation = a * b;
		return arithOperation;
	} else if (op === 3) {
		arithOperation = a / b;
		return arithOperation;
	} else {
		arithOperation = a + b;
		return arithOperation;
	}
}

/*Задание №5.
Напишите функцию digitN(k, n), которая возвращает n-ю цифру целого 
положительного числа k (цифры в числе нумеруются справа налево). 
Если количество цифр в числе k меньше n, то функция возвращает -1.*/
function digitN(k, n) {
	var firstCoeff = 10;
	var secondCoeff = 1;
	var res;
	for (var i = 1; i <= n; i++) {
		res = parseInt((k % firstCoeff) / secondCoeff);
		firstCoeff *= 10;
		secondCoeff *= 10;
	}
	if (res === 0) {
		res = -1;
		return res;
	}
	return res;
}


/*Проверку оставил, опишу подробнее почему в сообщении
var li = digitN(123456789, 1);
console.log(li);
var jk = digitN(5462342, 5);
console.log(jk);
var ok = digitN(234, 12);
console.log(ok);
*/



