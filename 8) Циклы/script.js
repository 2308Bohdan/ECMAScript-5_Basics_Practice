/*Задание №1. (while)
Даны положительные числа a и b (a > b). На отрезке длины a размещено максимально
возможное количество отрезков длины b (без наложений). Не используя операции 
умножения и деления, найдите длину незанятой части отрезка a.*/
var numA = 235;
var numB = 4;
while (true) {
	if (numA < numB) {
		console.log(numA);
		break;
	}
	numA -= numB;
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

/*Задание №5.
Напишите код, который:
1. Запрашивает по очереди значения при помощи prompt() и сохраняет их в массиве;
2. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт "Отмена";
3. Выводит сумму всех значений массива.*/
var numberArray = [];
var mean;
var i = 0;
var sum = 0;
while (true) {
	mean = Number(prompt("Введите число", ""));
	if (!mean) {
		break;
	} else if (mean === NaN) {
		break;
	}
	numberArray[i] = mean;
	sum += numberArray[i];
	i++;
}
alert(sum);

/*Задание №6.
Даны целые числа a и b (a < b). Выведите все целые числа от a до b 
включительно; при этом число a должно выводиться 1 раз, число a + 1 
должно выводиться 2 раза и т.д.*/
var numA = 1;
var numB = 10;
for (numA; numA <= numB; numA++) {
	alert("Число А " + numA);
	if (numA == 10) {
		break;
	}
	for (var i = 1; i < 3; i++) {
		alert(numA + 1);
	}
}