/*Задание №1.
Дано целое число. Если оно является положительным, то прибавьте к нему 1;
 если отрицательным, то вычтите из него 2; если нулевым, то замените его 
 на 10. Выведите полученное число.*/
 var num = prompt("Введите целое число", "");
 num = Number(num);
 if (num > 0) {
	 num += 1;
 } else if (num < 0) {
	 num -= 2;
 } else {
	 num = 10;
 }
 alert(num);
 
 /*Задание №2.
Дано целое число. Определите и выведите его строку-описание вида:
– "нулевое число";
– "положительное четное число";
– "положительное нечетное число";
– "отрицательное четное число";
– "отрицательное нечетное число".*/
var num = prompt("Введите целое число", "");
num = Number(num);
if (num === 0) {
	alert("нулевое число");
} else if (num > 0 && num % 2 == 0) {
	alert("положительное четное число");
} else if (num > 0 && num % 2 != 0) {
	alert("положительное нечетное число");
} else if (num < 0 && num % 2 == 0) {
	alert("отрицательное четное число");
} else {
	alert("отрицательное нечетное число");
}
*/
/*Задание №3.
Даны четыре целых числа, одно из которых отлично от трех других, 
равных между собой. Определите порядковый номер числа, отличного от остальных.*/
var someArray = [3, 3, 2, 3];
if (someArray[0] != someArray[1] && someArray[0] != someArray[2]) {
	console.log("Порядковый номер числа - 1");
} else if (someArray[1] != someArray[0] && someArray[1] != someArray[2]) {
	console.log("Порядковый номер числа - 2");
} else if (someArray[2] != someArray[3] && someArray[2] != someArray[1]) {
	console.log("Порядковый номер числа - 3");
} else {
	console.log("Порядковый номер числа - 4");
}

/*Задание №4.
Дано целое число k. Выведите строку-описание оценки, соответствующей числу k
(1 – "плохо", 2 – "неудовлетворительно", 3 – "удовлетворительно", 4 – "хорошо",
 5 – "отлично"). Если k не лежит в диапазоне 1–5, то вывести строку "ошибка".*/
 var numK = prompt("Введите целое положительное число, желательно от 1 до 5", "");
 numK = Number(numK);
 switch (numK) {
	 case 1:
		alert("плохо");
		break;
	case 2:
		alert("неудовлетворительно");
		break;
	case 3:
		alert("удовлетворительно");
		break;
	case 4:
		alert("хорошо");
		break;
	case 5:
		alert("отлично");
		break;
	default:
		alert("ошибка");
		break;
 }
