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
	rectOption[2] = function (operation) {
		return operation(sideA, sideB);
	};
	return rectOption;
}

function paymentPerimter(a, b) {
	return 2 * (a + b);
}

function paymentSquare(a, b) {
	return a * b;
}

var options1 = rectangleOptions();
options1[0](2);
options1[1](3);
console.log(options1[2](paymentPerimter));
console.log(options1[2](paymentSquare));

var options2 = rectangleOptions();
options2[0](-5);
options2[1](5);
console.log(options2[2](paymentPerimter));
console.log(options2[2](paymentSquare));

var options3 = rectangleOptions();
options3[0](67);
options3[1](78);
console.log(options3[2](paymentPerimter));
console.log(options3[2](paymentSquare));

var options4 = rectangleOptions();
options4[0]("dfdfs");
options4[1](78);
console.log(options4[2](paymentPerimter));
console.log(options4[2](paymentSquare));
