

//Функции с числовыми параметрами

/* 16)Описать функцию Sign(X) целого типа, возвращающую для вещественного 
числа X следующие значения: −1, если X < 0; 0, если X = 0; 1, если X > 0.
С помощью этой функции найти значение выражения Sign(A) + Sign(B)
для данных вещественных чисел A и B.*/
function Sign(x) {
	var res;
	if (x < 0) {
		res = -1;
	} else if (x > 0) {
		res = 1;
	} else {
		res = 0;
	}
	return res;
}
var numA = 4;
var numB = -4;
var sum = Sign(numA) + Sign(numB);
console.log(sum);

/* 18)Описать функцию CircleS(R) вещественного типа, находящую площадь круга радиуса
R (R — вещественное). С помощью этой функции найти площади трех кругов с данными 
радиусами. Площадь круга радиуса R вычисляется по формуле S = π·R2
. В качестве значения π использовать 3.14.*/
function circleS(r) {
	var PI = 3.14;
	var squareS = PI * Math.pow(r, 2);
	return squareS;
}

var firstCircle = circleS(5);
console.log(firstCircle);
var secondCircle = circleS(1);
console.log(secondCircle);
var thirdCircle = circleS(123);
console.log(thirdCircle);

/* 19)Описать функцию RingS(R1, R2) вещественного типа, находящую площадь кольца, 
заключенного между двумя окружностями с общим центром
и радиусами R1 и R2 (R1 и R2 — вещественные, R1 > R2). С ее помощью
найти площади трех колец, для которых даны внешние и внутренние радиусы.
 Воспользоваться формулой площади круга радиуса R: S = π·R2. В
качестве значения π использовать 3.14.*/
function ringS(r1, r2) {
	var PI = 3.14;
	var squareS1 = PI * (r1 * r1);
	var squareS2 = PI * (r2 * r2);
	var squareRing = squareS1 - squareS2;
	return squareRing;
}

var ring1 = ringS(122, 35);
console.log(ring1);
var ring2 = ringS(6, 3);
console.log(ring2);
var ring3 = ringS(25, 15);
console.log(ring3);

/* 20)Описать функцию TriangleP(a, h), находящую периметр равнобедренного треугольника 
по его основанию a и высоте h, проведенной к основанию (a и h — вещественные). С 
помощью этой функции найти периметры трех треугольников, для которых даны основания 
и высоты. Для нахождения боковой стороны b треугольника использовать теорему
Пифагора:b2 = (a/2)2 + h2.*/
function triangleP(a, h) {
	var squareB = (a / 2) * (a * 2) + Math.pow(h , 2);
	var b = Math.sqrt(squareB);
	var perimeter = 2 * a + b;
	return perimeter;
}

var triangle1 = triangleP(5, 5);
console.log(triangle1);
var triangle2 = triangleP(3, 50);
console.log(triangle2);
var triangle3 = triangleP(67, 125);
console.log(triangle3);

/* 21)Описать функцию SumRange(A, B) целого типа, находящую сумму всех целых чисел
от A до B включительно (A и B — целые). Если A > B, то функция возвращает 0. С 
помощью этой функции найти суммы чисел от A до B и от B до C, если даны числа A, B, C.*/
function sumRange(a, b) {
	var sum = 0;
	for (var i = a; i <= b; i++) {
		sum += i;
	}
	return sum;
}
var numA = 3;
var numB = 12;
var numC = 25;
var res1 = sumRange(numA, numB);
console.log(res1);
var res2 = sumRange(numB, numC);
console.log(res2);

/* 22)Описать функцию Calc(A, B, Op) вещественного типа, выполняющую над ненулевыми 
вещественными числами A и B одну из арифметических операций и возвращающую ее 
результат. Вид операции определяется целым параметром Op: 1 — вычитание, 
2 — умножение, 3 — деление, остальные значения — сложение. С помощью Calc выполнить
для данных A и B операции, определяемые данными целыми N1, N2, N3.*/
function calc(a, b, op) {
	var arithOperation;
	switch (op){
		case 1: 
			arithOperation = a - b;
			break;
		case 2:
			arithOperation = a * b;
			break;
		case 3:
			arithOperation = a / b;
			break;
		default:
			arithOperation = a + b;
			break;
	}
	return arithOperation;
}

var numA = 4; 
var numB = 20;
var numN1 = 1;
var numN2 = 3;
var numN3 = 10;
var res1 = calc(numA, numB, numN1);
console.log(res1);
var res2 = calc(numA, numB, numN2);
console.log(res2);
var res3 = calc(numA, numB, numN3);
console.log(res3);

/* 23)Описать функцию Quarter(x, y) целого типа, определяющую номер
координатной четверти, в которой находится точка с ненулевыми вещественными 
координатами (x, y). С помощью этой функции найти номера
координатных четвертей для трех точек с данными ненулевыми координатами.*/
function quarter(x, y) {
	var number;
	if (x > 0 && y > 0) {
		number = 1;
	} else if (x < 0 && y > 0) {
		number = 2;
	} else if (x < 0 && y < 0) {
		number = 3;
	} else {
		number = 4;
	}
	return number;
}

var point1 = quarter(2, 3);
console.log(point1);
var point2 = quarter(2, -3);
console.log(point2);
var point3 = quarter(-2, -3);
console.log(point3);

/* 24)Описать функцию Even(K) логического типа, возвращающую TRUE,
если целый параметр K является четным, и FALSE в противном случае. С
ее помощью найти количество четных чисел в наборе из 10 целых чисел.*/
function even(k) {
	var res;
	if (k % 2 == 0) {
		res = true;
	} else {
		res = false;
	}
	return res;
}
var num1 = even(2);
console.log(num1);
var num2 = even(7);
console.log(num2);
var num3 = even(22);
console.log(num3);
var num4 = even(123);
console.log(num4);
var num5 = even(111);
console.log(num5);
var num6 = even(877);
console.log(num6);
var num7 = even(21);
console.log(num7);
var num8 = even(84);
console.log(num8);
var num9 = even(323);
console.log(num9);
var num10 = even(1234567);
console.log(num10);

/* 25)Описать функцию IsSquare(K) логического типа, возвращающую TRUE, если целый 
параметр K (> 0) является квадратом некоторого целого числа, и FALSE в противном 
случае. С ее помощью найти количество квадратов в наборе из 10 целых положительных 
чисел.*/
function isSquare(k) {
	var square = Math.sqrt(k);
	var res;
	if (Number.isInteger(square)) {
		res = true;
	} else {
		res = false;
	}
	return res;
}
var num1 = isSquare(4);
console.log(num1);
var num2 = isSquare(7);
console.log(num2);
var num3 = isSquare(9);
console.log(num3);
var num4 = isSquare(123);
console.log(num4);
var num5 = isSquare(144);
console.log(num5);
var num6 = isSquare(877);
console.log(num6);
var num7 = isSquare(81);
console.log(num7);
var num8 = isSquare(84);
console.log(num8);
var num9 = isSquare(16);
console.log(num9);
var num10 = isSquare(1234567);
console.log(num10);

/* 26)Описать функцию IsPower5(K) логического типа, возвращающую
TRUE, если целый параметр K (> 0) является степенью числа 5, и FALSE в
противном случае. С ее помощью найти количество степеней числа 5 в
наборе из 10 целых положительных чисел.*/
function isPower5(k) {
	var res;
	var coef = k;
    var i = 1;
	while (true) {
		coef /= 5;
        i++;
		if (coef == 5) {
			res = true;
			break;
		} else if (coef < 1) {
			res = false;
			break;
		}
	}
	return "Результат " + res + ", степень числа " + i;
}

var num1 = isPower5(125);
console.log(num1);
var num2 = isPower5(7);
console.log(num2);
var num3 = isPower5(500);
console.log(num3);
var num4 = isPower5(15625);
console.log(num4);
var num5 = isPower5(100);
console.log(num5);

/* 27) Описать функцию IsPowerN(K, N) логического типа, возвращающую
TRUE, если целый параметр K (> 0) является степенью числа N (> 1), и
FALSE в противном случае. Дано число N (> 1) и набор из 10 целых положительных чисел. 
С помощью функции IsPowerN найти количество
степеней числа N в данном наборе.*/
function isPowerN(k, n) {
	var coef = k;
	var res;
	while (true) {
		coef /= n;
		if (coef === n) {
			res = true;
			break;
		} else if (coef < 1) {
			res = false;
			break
		}
	}
	return res;
}

var num1 = isPowerN(125, 5)
console.log(num1);
var num2 = isPowerN(22, 5)
console.log(num2);
var num3 = isPowerN(25, 5)
console.log(num3);
var num4 = isPowerN(9, 5)
console.log(num4);
var num5 = isPowerN(129, 5)
console.log(num5);