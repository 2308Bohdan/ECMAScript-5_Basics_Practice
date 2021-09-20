/* 1)Описать процедуру PowerA3(A, B), вычисляющую третью степень числа A и 
возвращающую ее в переменной B (A — входной, B — выходной
параметр; оба параметра являются вещественными). С помощью этой
процедуры найти третьи степени пяти данных чисел.*/
function powerA3(a) {
	var b = Math.pow(a, 3); //var b = a * a * a;
	return b;
}
powerA3(2);
powerA3(5);
powerA3(10);

/* 2)Описать процедуру PowerA234(A, B, C, D), вычисляющую вторую,
третью и четвертую степень числа A и возвращающую эти степени соответственно
в переменных B, C и D (A — входной, B, C, D — выходные параметры; все параметры 
являются вещественными). С помощью этой процедуры найти вторую, третью и четвертую 
степень пяти данных чисел. */

function powerA234(a) {
	var arr = [];
	arr[0] = a * a;
	arr[1] = a * a * a;
	arr[2] = Math.pow(a, 4);
	return arr;
}

powerA234(3);

// 2 вариант

function powerA234(a) {
	var b = a * a;
	var c = a * a * a;
	var d = Math.pow(a, 4);
	return "2 степень - " + b + "," + " 3 степень - " + c + "," + " 4 степень - " + d;
}

powerA234(3);

/* 3)Описать процедуру Mean(X, Y, AMean, GMean), вычисляющую
среднее арифметическое AMean = (X+Y)/2 и среднее геометрическое
GMean =√X·Y двух положительных чисел X и Y (X и Y — входные,
AMean и GMean — выходные параметры вещественного типа). С помощью
этой процедуры найти среднее арифметическое и среднее геометрическое
для пар (A, B), (A, C), (A, D), если даны A, B, C, D.*/
var numA = 64;
var numB = 23;
var numC = 232;
var numD = 987;
function mean(par1, par2) {
	var aMean = (par1 + par2) / 2;
	var gMean = Math.sqrt((par1 * par2));
	return "AMean = " + aMean + "," + " GMean = " + gMean;
}
mean(numA, numB);
mean(numA, numC);
mean(numA, numD);

/* 4)Описать процедуру TrianglePS(a, P, S), вычисляющую по стороне a
равностороннего треугольника его периметр P = 3·a и площадь S = a2·√3/4
(a — входной, P и S — выходные параметры; все параметры являются вещественными). 
С помощью этой процедуры найти периметры и площади трех равносторонних треугольников 
с данными сторонами.*/

function trianglePS(sideA) {
	var perimeter = 3 * sideA;
	var square = sideA * sideA * Math.sqrt((3 / 4));
	return "Perimeter= " + perimeter + "," + " square= " + square;
}

trianglePS(3);
trianglePS(23);
trianglePS(65);

/* 5)Описать процедуру RectPS(x1, y1, x2, y2, P, S), вычисляющую периметр P
и площадь S прямоугольника со сторонами, параллельными осям координат, по координатам 
(x1, y1), (x2, y2) его противоположных вершин (x1, y1, x2, y2 — входные, 
P и S — выходные параметры вещественного типа). С помощью этой процедуры 
найти периметры и площади трех прямоугольников с данными противоположными вершинами.*/

function rectPS(numX1, numX2, numY1, numY2) {
	var sideA = Math.abs((numX2 - numX1)); // т.к. возможен вариант x2 < x1
	var sedeB = Math.abs((numY2 - numY1)); // аналогично
	var perimeter = 2 * (sideA + sedeB);
	var square = sideA * sedeB;
	return "Perimeter= " + perimeter + "," + " square= " + square;
}

rectPS(2, 10, 4, 15);
rectPS(14, 2, 16, 3);

/* 6)Описать процедуру DigitCountSum(K, C, S), находящую количество C
цифр целого положительного числа K, а также их сумму S (K — входной,
C и S — выходные параметры целого типа). С помощью этой процедуры
найти количество и сумму цифр для каждого из пяти данных целых чисел.*/

function digitCountSum(numK) {
	var sum = 0;
	var amountOfDigits = 0;
	var i = 1;
	
	while (i < numK) {
		sum += parseInt((numK / i) % 10);
		amountOfDigits += 1;
		i = i * 10;
	}
	return "Sum = " + sum + ", " + "amount of digits = " + amountOfDigits;
}




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

/* 28)Описать функцию IsPrime(N) логического типа, возвращающую TRUE,
если целый параметр N (> 1) является простым числом, и FALSE в противном случае 
(число, большее 1, называется простым, если оно не имеет положительных делителей, 
кроме 1 и самого себя). Дан набор из 10 целых чисел, больших 1. С помощью функции 
IsPrime найти количество простых чисел в данном наборе.*/





/* 29)Описать функцию DigitCount(K) целого типа, находящую количество
цифр целого положительного числа K. Используя эту функцию, найти количество
цифр для каждого из пяти данных целых положительных чисел.*/
function digitCount(k) {
	var quantity = 0;
	var coeff = 10;
	var res;
	while (true) {
		res = k / coeff;
		coeff *= 10;
		quantity++;
		if (res < 1) {
			break;
		}
	}
	return quantity;
}

/* 30)Была в основном домашнем задании
Описать функцию DigitN(K, N) целого типа, возвращающую N-ю цифру целого положительного числа
K (цифры в числе нумеруются справа налево). Если количество цифр в числе K меньше N, то функция
возвращает −1. Для каждого из пяти данных целых положительных чисел K1, K2, . . ., K5 вызвать 
функцию DigitN с параметром N, изменяющимся от 1 до 5.*/
function digitN(k, n) {
	var firstCoeff = 10;
	var secondCoeff = 1;
	var res;
	for (var i = 1; i <= n; i++) {
		res = parseInt((k % firstCoeff) / secondCoeff);
		firstCoeff *= 10;
		secondCoeff *= 10;
		if (res < 1) {
			res = -1;
			break
		}
	}
	return res;
}

/* 31)Описать функцию IsPalindrom(K), возвращающую TRUE, если целый параметр K (> 0) 
является палиндромом (то есть его запись читается одинаково слева направо и справа налево),
и FALSE в противном случае. С ее помощью найти количество палиндромов в наборе из 10 целых 
положительных чисел. При описании функции можно использовать функции DigitCount и DigitN из 
заданий Proc29 и Proc30.*/

function isPalindrom(k) {
	var res;
	var arrLeftRight = [];
	var arrRightLeft = [];
	
	var firstCoeff = 10;
	var secondCoeff = 1;
	//Первый массив
	for (var i = 0; i < k; i++) { 
		res = k / firstCoeff;
		arrRightLeft[i] = parseInt((k % firstCoeff) / secondCoeff);
		firstCoeff *= 10;
		secondCoeff *= 10;
		if (res < 1) {
			break;
		}
	}
	//Второй массив
	for (var j = 0; j < arrRightLeft.length; j++) {
		arrLeftRight[j] = arrRightLeft[arrRightLeft.length - 1];
		arrRightLeft.length--;
	}
	
	var middle = parseInt(arrRightLeft.length / 2);
	res = true;
	for (var k = 0; k <= middle; k++) {
		if (arrRightLeft[k] !== arrLeftRight[k]) {
			res = false;
			break;
		}
	}
	
	return res;
}

var par1 = isPalindrom(123456);
var par2 = isPalindrom(12321);
var par3 = isPalindrom(12344321);
console.log(par1);
console.log(par2);
console.log(par3);

/* 32)Описать функцию DegToRad(D) вещественного типа, находящую величину угла 
в радианах, если дана его величина D в градусах (D — вещественное число, 0 < D < 360).
Воспользоваться следующим соотношением: 180◦ = π радианов. В качестве значения π 
использовать 3.14. С помощью функции DegToRad перевести из градусов в радианы пять 
данных углов.*/
function degToRad(d) {
	var PI = 3.14;
	var rad = (d * (PI / 180)).toFixed(7);
	return rad;
}


/* 33)Описать функцию RadToDeg(R) вещественного типа, находящую величину 
угла в градусах, если дана его величина R в радианах (R — вещественное число,
0 < R < 2·π). Воспользоваться следующим соотношением: 180◦ = π радианов. 
В качестве значения π использовать 3.14. С помощью функции RadToDeg перевести 
из радианов в градусы пять данных углов.*/
function radToDeg(r) {
	var PI = 3.14;
	var res = 0;
	if (r > 0 && r < (2 * PI)) {
		res = (r * (180 / PI)).toFixed(3);
	}
	return res;
}

//2 вариант, если соблюдается: R — вещественное число, 0 < R < 2·π)
function radToDeg(r) {
	return (r * (180 / 3.14)).toFixed(3);
}


/* 34)Описать функцию Fact(N) вещественного типа, вычисляющую значение факториала 
N! = 1·2·. . .·N (N > 0 — параметр целого типа; вещественное возвращаемое значение 
используется для того, чтобы избежать целочисленного переполнения при больших 
значениях N). С помощью этой функции найти факториалы пяти данных целых чисел.*/
function fact(n) {
	var res = 1;
	for (var i = 1; i <= n; i++){
		res *= i;
	}
	return res;
}


/* 35)Описать функцию Fact2(N) вещественного типа, вычисляющую двойной факториал:
N!! = 1·3·5·. . .·N, если N — нечетное;
N!! = 2·4·6·. . .·N, если N — четное
(N > 0 — параметр целого типа; вещественное возвращаемое значение используется 
для того, чтобы избежать целочисленного переполнения при
больших значениях N). С помощью этой функции найти двойные факто-
Процедуры и функции 37
риалы пяти данных целых чисел.*/
function fact2(n) {
	var res = 1;
	var i = 1;
	if (n % 2 === 0) {
		i = 2;
	}
	while (i <= n) {
		res *= i;
		i += 2;
	}
	return res;
}