/* 1)Дано целое число в диапазоне 1–7. Вывести строку — название дня
недели, соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.).*/
var day = 4;
switch (day) {
	case 1:
		alert("Понедельник");
		break;
	case 2:
		alert("Вторник");
		break;
	case 3:
		alert("Среда");
		break;
	case 4:
		alert("Четверг");
		break;
	case 5:
		alert("Пятница");
		break;
	case 6:
		alert("Суббота");
		break;
	case 7:
		alert("Воскресенье");
		break;
	default:
		alert("Попробуй снова");
		break;
}

/* 2)Дано целое число K. Вывести строку-описание оценки, соответствующей 
числу K (1 — «плохо», 2 — «неудовлетворительно», 3 — «удовлетворительно», 
4 — «хорошо», 5 — «отлично»). Если K не лежит в диапазоне 1–5,
то вывести строку «ошибка».*/
var numK = 6;
switch (numK) {
	case 1:
		alert("Плохо");
		break;
	case 2:
		alert("Неудовлетворительно");
		break;
	case 3:
		alert("Удовлетворительно");
		break;
	case 4:
		alert("Хорошо");
		break;
	case 5:
		alert("Отлично");
		break;
	default:
		alert("Ошибка");
		break;
}

/* 3)Дан номер месяца — целое число в диапазоне 1–12 (1 — январь, 2 — февраль
 и т. д.). Вывести название соответствующего времени года («зима»,
«весна», «лето», «осень»).*/
var month = 11;
switch (month) {
	case 1:
	case 2:
	case 12:
		alert("Зима");
		break;
	case 3:
	case 4:
	case 5:
		alert("Весна");
		break;
	case 6:
	case 7:
	case 8:
		alert("Лето");
		break;
	case 9:
	case 10:
	case 11:
		alert("Осень");
		break;
	default:
		alert("Введите число от 1 до 12");
		break;
}

/* 4)Дан номер месяца — целое число в диапазоне 1–12 (1 — январь, 2 —
февраль и т. д.). Определить количество дней в этом месяце для невисокосного года.*/
var numMonth = 7;
switch (numMonth) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		alert(31);
		break;
	case 2:
		alert(28);
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		alert(30);
		break;
	default:
		alert("Другое число");
		break;
}

/* 5) Арифметические действия над числами пронумерованы следующим
образом: 1 — сложение, 2 — вычитание, 3 — умножение, 4 — деление. Дан
номер действия N (целое число в диапазоне 1–4) и вещественные числа A
и B (В не равно 0). Выполнить над числами указанное действие и вывести
результат*/
var maths = 2;
var num1 = 223;
var num2 = 21;
switch (maths) {
	case 1:
		console.log(num1 + num2);
		break;
	case 2:
		console.log(num1 - num2);
		break;
	case 3:
		console.log(num1 * num2);
		break;
	case 4:
		console.log(num1 / num2);
		break;
	default:
		console.log("Другое число");
		break;
}

/* 6)Единицы длины пронумерованы следующим образом: 1 — дециметр,
2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. Дан номер
единицы длины (целое число в диапазоне 1–5) и длина отрезка в этих
единицах (вещественное число). Найти длину отрезка в метрах.*/
var unitsLenght = 2;
var lenght = 234;
var lenghtMeters = 0;
switch (unitsLenght) {
	case 1:
		lenghtMeters = lenght / 10;
		console.log(lenghtMeters);
		break;
	case 2:
		lenghtMeters = lenght * 1000;
		console.log(lenghtMeters);
		break;
	case 3:
		lenghtMeters = lenght;
		console.log(lenghtMeters);
		break;
	case 4:
		lenghtMeters = lenght / 1000;
		console.log(lenghtMeters);
		break;
	case 5:
		lenghtMeters = lenght / 100;
		console.log(lenghtMeters);
		break;
	default:
		console.log("Ошибка");
		break;
}

/* 7)Единицы массы пронумерованы следующим образом: 1 — килограмм,
2 — миллиграмм, 3 — грамм, 4 — тонна, 5 — центнер. Дан номер единицы массы (целое число в диапазоне 1–5) и масса тела в этих единицах
(вещественное число). Найти массу тела в килограммах*/

var unitsWeight = 5;
var weight = 12345;
var weightKg = 0;
switch (unitsWeight) {
	case 1:
		weightKg = weight;
		console.log(weightKg);
		break;
	case 2:
		weightKg = weight / 10000;
		console.log(weightKg);
		break;
	case 3:
		weightKg = weight / 1000;
		console.log(weightKg);
		break;
	case 4:
		weightKg = weight * 1000;
		console.log(weightKg);
		break;
	case 5:
		weightKg = weight * 100;
		console.log(weightKg);
		break;
	default:
		console.log("Ошибка");
		break;
}

/* 8)Даны два целых числа: D (день) и M (месяц), определяющие правильную дату 
невисокосного года. Вывести значения D и M для даты,
предшествующей указанной.*/
var dayD = 2;
var monthM = 2;
var date = 0;
switch (monthM) {
	case 1:
		switch(dayD) {
			case 1:
				console.log("31 12 last year");
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
				date = dayD - 1;
				console.log(date + " 0" + monthM);
				break;
			default:
				console.log("Ошибка");
				break;
		}
		break;
	default:
		console.log("Ошибка");
		break;
	case 2:
		switch(dayD) {
			case 1:
				console.log("31 01");
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
				date = dayD - 1;
				console.log(date + " " + monthM);
				break;
			default:
				console.log("Ошибка");
				break;	
		}
		break;
	default:
		console.log("Ошибка");
		break;
}

/* 10)Робот может перемещаться в четырех направлениях («С» — север,
«З» — запад, «Ю» — юг, «В» — восток) и принимать три цифровые команды:
0 — продолжать движение, 1 — поворот налево, −1 — поворот
направо. Дан символ C — исходное направление робота и целое число N — посланная 
ему команда. Вывести направление робота после выполнения полученной команды.*/

var direction = ;
var command = ;
switch (direction) {
	case "N":
		switch(command) {
			case 0: 
				alert("Север. Продолжать движение");
				break;
			case 1:
				alert("Север. Поворот налево");
				break;
			case -1:
				alert("Север. Поворот направо");
				break;
			default:
				console.log("Ошибка");
				break;
		}
		break;
	case "S":
		switch(command) {
			case 0: 
				alert("Юг. Продолжать движение");
				break;
			case 1:
				alert("Юг. Поворот налево");
				break;
			case -1:
				alert("Юг. Поворот направо");
				break;
			default:
				console.log("Ошибка");
				break;
		}
		break;
	case "W":
		switch(command) {
			case 0: 
				alert("Запад. Продолжать движение");
				break;
			case 1:
				alert("Запад. Поворот налево");
				break;
			case -1:
				alert("Запад. Поворот направо");
				break;
			default:
				console.log("Ошибка");
				break;
		}
		break;
	case "E":
		switch(command) {
			case 0: 
				alert("Восток. Продолжать движение");
				break;
			case 1:
				alert("Восток. Поворот налево");
				break;
			case -1:
				alert("Восток. Поворот направо");
				break;
			default:
				console.log("Ошибка");
				break;
		}
		break;
	default:
		console.log("Ошибка");
		break;
}
	
