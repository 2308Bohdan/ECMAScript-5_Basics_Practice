/*1) Дано расстояние L в сантиметрах. Используя операцию деления
нацело, найти количество полных метров в нем (1 метр = 100 см).*/

var lenghtSm = 78234;
var lenghtMeters = parseInt(lenghtSm / 100);

console.log(lenghtMeters);

/*2) Дана масса M в килограммах. Используя операцию деления нацело,
найти количество полных тонн в ней (1 тонна = 1000 кг).*/

var weightKg = 8932743;
var weightTons = parseInt(weightKg / 1000);

console.log(weightTons);

/*3) Дан размер файла в байтах. Используя операцию деления нацело,
найти количество полных килобайтов, которые занимает данный файл
(1 килобайт = 1024 байта).*/

var bytes = 293287544;
var kilobytes = parseInt(bytes / 1024);

console.log(kilobytes);

/*4) Даны целые положительные числа A и B (A > B). На отрезке длины A размещено максимально возможное количество отрезков длины B
(без наложений). Используя операцию деления нацело, найти количество
отрезков B, размещенных на отрезке A.*/

var lenghtA = 64;
var lenghtB = 13;
var quantity = parseInt(lenghtA / lenghtB);

console.log(quantity);

/*5) Даны целые положительные числа A и B (A > B). На отрезке длины A
размещено максимально возможное количество отрезков длины B (без
наложений). Используя операцию взятия остатка от деления нацело, найти
длину незанятой части отрезка A.*/

var lenghtA = 64;
var lenghtB = 13;
var lenghtSection = lenghtA % lenghtB;

console.log(lenghtSection);

/*6) Дано двузначное число. Вывести вначале его левую цифру (десятки), 
а затем — его правую цифру (единицы). Для нахождения десятков
использовать операцию деления нацело, для нахождения единиц — операцию
взятия остатка от деления.*/ 

var num = 34;
var dozens = parseInt(num / 10);
var units = num % 10;

console.log(dozens);
console.log(units);

//7) Дано двузначное число. Найти сумму и произведение его цифр.

var num = 79;
var dozens = parseInt(num / 10);
var units = num % 10;
var sum = dozens + units;
var multiplic = dozens * units;

console.log(sum);
console.log(multiplic);

/*8) Дано двузначное число. Вывести число, полученное при 
перестановке цифр исходного числа.*/

var num = 95;
var dozens = parseInt(num / 10);
var units = num % 10;
var str = String(units) + String(dozens);
var num = Number(str);

console.log(num);

/*9) Дано трехзначное число. Используя одну операцию деления нацело,
вывести первую цифру данного числа (сотни).*/

var num = 498;
var firstNum = parseInt(num / 100);

console.log(firstNum);

/*10) Дано трехзначное число. Вывести вначале его последнюю цифру
(единицы), а затем — его среднюю цифру (десятки).*/

var num = 735;
var lastNum = num % 10;
var averageNum = parseInt((num / 10) % 10);

console.log(lastNum);
console.log(averageNum);

//11) Дано трехзначное число. Найти сумму и произведение его цифр.

var num = 934;
var firstNum = parseInt(num / 100);
var averageNum = parseInt((num / 10) % 10);
var lastNum = num % 10;
var sum = firstNum + averageNum + lastNum;
var multiplic = firstNum * averageNum * lastNum;

console.log(sum);
console.log(multiplic);

/*12) Дано трехзначное число. Вывести число, полученное при прочтении
исходного числа справа налево.*/

var num = 845;
var firstNum = parseInt(num / 100);
var averageNum = parseInt((num / 10) % 10);
var lastNum = num % 10;
var str = String(lastNum) + String(averageNum) + String(firstNum);
var oppositeNum = Number(str);

console.log(oppositeNum);

/*13) Дано трехзначное число. В нем зачеркнули первую слева цифру и
приписали ее справа. Вывести полученное число.*/

var num = 738;
var firstNum = parseInt(num / 100);
var remainderNum = num % 100;
var str = String(remainderNum) + String(firstNum);
var newNum = Number(str);

console.log(newNum);

/*14)  Дано трехзначное число. В нем зачеркнули первую справа цифру
и приписали ее слева. Вывести полученное число.*/

var num = 234;
var lastNum = num % 10;
var remainderNum = parseInt(num / 10);
var str = String(lastNum) + String(remainderNum);
var newNum = Number(str);

console.log(newNum);

/*15)  Дано трехзначное число. Вывести число, полученное при перестановке
 цифр сотен и десятков исходного числа (например, 123 перейдет в 213).*/
 
var num = 123;
var firstNum = parseInt(num / 100);
var averageNum = parseInt((num / 10) % 10);
var lastNum = num % 10;
var str = String(averageNum) + String(firstNum) + String(lastNum);
var newNum = Number(str);

console.log(newNum);

/*16) Дано трехзначное число. Вывести число, полученное при перестановке цифр
 десятков и единиц исходного числа (например, 123 перейдет в 132).*/
 
var num = 123;
var firstNum = parseInt(num / 100);
var averageNum = parseInt((num / 10) % 10);
var lastNum = num % 10;
var str = String(firstNum) + String(lastNum) + String(averageNum);
var newNum = Number(str);

console.log(newNum);

/*17) Дано целое число, большее 999. Используя одну операцию деления нацело
и одну операцию взятия остатка от деления, найти цифру,
соответствующую разряду сотен в записи этого числа.*/

var num = 123456789;
var soughtNum = parseInt((num / 100) % 10);

console.log(soughtNum);

/*18) Дано целое число, большее 999. Используя одну операцию деления нацело
и одну операцию взятия остатка от деления, найти цифру,
соответствующую разряду тысяч в записи этого числа.*/

var num = 987654321;
var soughtNum = parseInt((num / 1000) % 10);

console.log(soughtNum);

/*19) С начала суток прошло N секунд (N — целое). Найти количество
полных минут, прошедших с начала суток.*/

var secN = 34532;
var minutes = parseInt(secN / 60);

console.log(minutes);

/*20) С начала суток прошло N секунд (N — целое). Найти количество
полных часов, прошедших с начала суток. */ 

var secN = 6585;
var hours = parseInt(secN / 360);

console.log(hours);

/*21) С начала суток прошло N секунд (N — целое). Найти количество
секунд, прошедших с начала последней минуты.*/

var secN = 680;
var sec = secN % 60;

console.log(sec);

/*22)  С начала суток прошло N секунд (N — целое). Найти количество
секунд, прошедших с начала последнего часа*/

var secN = 2345;
var sec = secN % 360;

console.log(sec);

/*23) С начала суток прошло N секунд (N — целое). Найти количество
полных минут, прошедших с начала последнего часа.*/

var secN = 6542;
var min = parseInt((secN % 360) / 60);

console.log(min);

/*24)  Дни недели пронумерованы следующим образом: 0 — воскресенье,
1 — понедельник, 2 — вторник, . . . , 6 — суббота. Дано целое число K,
лежащее в диапазоне 1–365. Определить номер дня недели для K-го дня
года, если известно, что в этом году 1 января было понедельником.*/

var dayK = 128;
var dayNumber = dayK % 7;

console.log(dayNumber);

/*25) Дни недели пронумерованы следующим образом: 0 — воскресенье,
1 — понедельник, 2 — вторник, . . . , 6 — суббота. Дано целое число K,
лежащее в диапазоне 1–365. Определить номер дня недели для K-го дня
года, если известно, что в этом году 1 января было четвергом.*/

var dayK = 45;
var dayNumber = (dayK + 3) % 7; //+3 т.к. это разница между чт(4)и пн(1)

console.log(dayNumber);