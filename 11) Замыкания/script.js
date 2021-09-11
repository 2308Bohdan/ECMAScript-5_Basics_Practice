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
	rectOption[2] = function () {
		var perimeter = 2 * (sideA + sideB);
		return perimeter;
	};
	rectOption[3] = function () {
		var square = sideA * sideB;
		return square;
	};
	return rectOption;
}

var options1 = rectangleOptions();
options1[0](2);
options1[1](3);
console.log(options1[2]());
console.log(options1[3]());


/* Задание доп
Есть следующий код:
var arr = [];

for (var i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); // в консоль должно быть выведено 0
arr[arr.length - 1](); // в консоль должно быть выведено 2
В коде создается массив, используя цикл, в массив записываются три функции.
Логика функций простая, в консоль выводится значение счетчика на момент создания
функции. С виду код выглядит логичным, но, если запустить текущий код без 
изменений, в консоль будет выведено два раза число 3. Используя механизм 
замыкания внесите в код изменения, чтобы в консоль вывелись число 0 и число 2.*/


function satana() {
	var arr = [];
	for (var i = 0; i <= 2; i++) {
		arr[i] = function(param) {
			return function () {
				console.log(param);
			};
		} (i);
	}
	return arr;
}

var kokos = satana();
kokos[0]();
kokos[kokos.length - 1]();

