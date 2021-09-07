/*Задание №1.
Есть следующий код.
Допишите код, чтобы функция createArrayIterator() возвращала функцию-перечислитель
для массива, который задается через параметр array.*/

function createArrayIterator(array) {
   var i = 0;
   return function () {
	   return array[i++];
   };
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

/*Задание №2.
Напишите код для "безопасного" вычисления периметра и площади прямоугольника.
Сторонами прямоугольника может быть только число (тип данных Number, значения 
других типов данных нельзя устанавливать), значение которого, строго больше 0.*/

function rectangleOptions() {
	var rectOption = [];
	var sideA;
	var sideB;
	var perimeter;
	var square;
	rectOption[0] = function (a) {
		var numA = Number(a);
		if (numA > 0) {
			sideA = numA;
		}
	};
	rectOption[1] = function (b) {
		var numB = Number(b);
		if (numB > 0) {
			sideB = numB;
		} 
	};
	rectOption[2] = function () {
		perimeter = 2 * (sideA + sideB);
		return perimeter;
	};
	rectOption[3] = function () {
		square = sideA * sideB;
		return square;
	}
	return rectOption;
}

var haha = rectangleOptions();
haha[0](2);
haha[1](3);
console.log(haha[2]());
console.log(haha[3]());
