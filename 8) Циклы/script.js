/*Задание №1. (while)
Даны положительные числа a и b (a > b). На отрезке длины a размещено максимально
возможное количество отрезков длины b (без наложений). Не используя операции 
умножения и деления, найдите длину незанятой части отрезка a.*/
var numA = 235;
var numB = 4;
var i = 1;
while (true) {
	if (numA < numB) {
		console.log(numA);
		break;
	}
	numA -= numB;
	i++
}

/*Задание №2. (while)
Дано целое число n (>0). Используя операции деления нацело и взятия 
остатка от деления, выведите все его цифры, начиная с самой правой (разряда единиц).*/
var numN = 987654321;
var numX = 1;
var i = 1;
while (i < numN) {
	numX = (numN / i) % 10;
	console.log(parseInt(numX));
	i = i * 10;
}

	
/*Задание №3. (for)
Даны два целых числа a и b (a < b). Найдите сумму всех целых чисел 
от a до b включительно.*/
var numA = 2;
var numB = 21;
var sum = 0;
for (var i = numA; i <= numB; i++) {
	sum += i;
}
console.log(sum);

/*Задание №4. (for)
Дано целое число n (n > 0). Найдите произведение n! = 1 * 2 * … * n.*/
var numN = 10;
var multyp = 1;
for (var i = 1; i <= numN; i++) {
	multyp *= i;
}
console.log(multyp);

/*Напишите код, который:
1. Запрашивает по очереди значения при помощи prompt() и сохраняет их в массиве;
2. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт "Отмена";
3. Выводит сумму всех значений массива.*/
/*var numberArray = [];
var i = 0;
while (true) {
	numberArray[i] = Number(prompt("Введите число", ""));
	if (numberArray[i] == null) {
		break;
	} else if (numberArray[i] == "") {
		break;
	} else if (numberArray[i] == NaN) {
		break;
	}
	i++;
}
console.log(numberArray);*/