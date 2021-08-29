//1) Дана сторона квадрата а. Найти его периметр Р = 4*а.

var lenghtA = 5;
var perimeter = 4 * lenghtA;
console.log(perimeter);

//2) Задача была в предыдущем д/з.
//3) Даны стороны прямоугольника a и b. Найти его площадь S = a*b и периметр P = 2*(a+b).

var sideA = 7;
var sideB = 12;
var perimeter = 2 * (sideA + sideB);
var areaS = sideA * sideB;

console.log(perimeter);
console.log(areaS);

/*4) Дан диаметр окружности d. Найти ее длину L = P*d. В качестве значения 
Р использовать 3.14.*/

var diameter = 15;
var PI = 3.14;
var lenghtCircle = PI * diameter;

console.log(lenghtCircle);

/*5) Дана длина ребра куба a. Найти объем куба V = a3 и площадь его
поверхности S = 6·a2.*/

var lenghtA = 56;
var volum = lenghtA * lenghtA * lenghtA;
var areaS = 6 * (lenghtA * lenghtA);

console.log(volum);
console.log(areaS);

/*6) Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти
его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c).*/

var lenghtA = 10;
var lenghtB = 8;
var lenghtC = 12;
var volum = lenghtA * lenghtB * lenghtC;
var areaS = 2 * (lenghtA * lenghtB + lenghtB * lenghtC + lenghtA * lenghtC);

console.log(volum);
console.log(areaS);

/*7) Найти длину окружности L и площадь круга S заданного радиуса R:
L = 2·π·R, S = π·R2.
В качестве значения π использовать 3.14. */

var radius = 23;
var PI = 3.14;
var lenghtCircle = 2 * PI * radius;
var areaS = PI * (radius * radius);

console.log(lenghtCircle);
console.log(areaS);

/*8) Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2. */

var numA = 23;
var numB = 8;
var average = (numA + numB) / 2;

console.log(average);

/*9) Даны два неотрицательных числа a и b. Найти их среднее геометрическое,
 то есть квадратный корень из их произведения: √a·b.*/
 
 var numA = 12;
 var numB = 13;
 var geometricMean = Math.sqrt(numA * numB);
 
 console.log(geometricMean);
 
 /*10) Даны два ненулевых числа. Найти сумму, разность, произведение и
частное их квадратов.*/

var firstNum = 12;
var secondNum = -7;
var firstSquare = Math.pow(firstNum, 2);
var secondSquare = Math.pow(secondNum, 2);
var sum = firstSquare + secondSquare;
var difference = firstSquare - secondSquare;
var multiplic = firstSquare * secondSquare;
var division = firstSquare / secondSquare;

console.log(sum);
console.log(difference);
console.log(multiplic);
console.log(division);

/*11)Даны два ненулевых числа. Найти сумму, разность, произведение и
частное их модулей.*/
var firstNum = 3;
var secondNum = -10;
var firstMod = Math.abs(firstNum);
var secondMod = Math.abs(secondNum);
var sum = firstMod + secondMod;
var difference = firstMod - secondMod;
var multiplic = firstMod * secondMod;
var division = firstMod / secondMod;

console.log(sum);
console.log(difference);
console.log(multiplic);
console.log(division);

/*12)Даны катеты прямоугольного треугольника a и b. Найти его 
гипотенузу c и периметр P.*/
var numA = 23;
var numB = 12;
var numC = Math.sqrt(Math.pow(numA, 2) + Math.pow(numB, 2));
var perimeter = numA + numB + numC;

console.log(numC);
console.log(perimeter);

/*13)Даны два круга с общим центром и радиусами R1 и R2 (R1 > R2).
Найти площади этих кругов S1 и S2, а также площадь S3 кольца, внешний
радиус которого равен R1, а внутренний радиус равен R2.
В качестве значения π использовать 3.14.*/
var numR1 = 100;
var numR2 = 50;
var PI = 3.14;
var squareS1 = PI * Math.pow(numR1, 2);
var squareS2 = PI * Math.pow(numR2, 2);
var squareS3 = squareS1 - squareS2;
console.log(squareS1);
console.log(squareS2);
console.log(squareS3);

/*14)Дана длина L окружности. Найти ее радиус R и площадь S круга,
ограниченного этой окружностью, учитывая, что L = 2·π·R, S = π·R2. 
В качестве значения π использовать 3.14.*/
var lenghtL = 520;
var PI = 3.14;
var radiusR = lenghtL / (2 * PI);
var squareS = PI * Math.pow(radiusR, 2);
console.log(radiusR);
console.log(squareS);

/*15) Дана площадь S круга. Найти его диаметр D и длину L окружности,
ограничивающей этот круг, учитывая, что L = 2·π·R, S = π·R2. В качестве
значения π использовать 3.14.*/
var squareS = 100;
var PI = 3.14;
var radius = Math.sqrt((squareS / PI));
var diameterD = 2 * radius;
var lenghtL = 2 * PI * radius;
console.log(diameterD);
console.log(lenghtL);

/*16)Найти расстояние между двумя точками 
с заданными координатами x1 и x2 на числовой оси: |x2 − x1|.*/
var numX1 = 12;
var numX2 = 5;
var distance = Math.abs((numX2 - numX1));
console.log(distance);

/*17) Даны три точки A, B, C на числовой оси. Найти длины отрезков AC
и BC и их сумму.*/
var numA = 23;
var numB = 12;
var numC = 74;
var distAc = Math.abs((numA - numC));
var distBc = Math.abs((numB - numC));
var distSum = distAc + distBc;
console.log(distAc);
console.log(distBc);
console.log(distSum);

/*18)Даны три точки A, B, C на числовой оси. Точка C расположена
между точками A и B. Найти произведение длин отрезков AC и BC.*/
var numA = 3;
var numB = 983;
var numC = 5;
var miltiplic = (numC - numA) * (numB - numC);
console.log(miltiplic);

/*19) Даны координаты двух противоположных вершин прямоугольника:
(x1, y1), (x2, y2). Стороны прямоугольника параллельны осям координат.
Найти периметр и площадь данного прямоугольника.*/
var numX1 = 2;
var numY1 = 4;
var numX2 = 6;
var numY2 = 1;
var lenghtA = Math.abs((numX2 - numX1));
var lenghtB = Math.abs((numY2 - numY1));
var areaRect = lenghtA * lenghtB;
var perimeter = 2 * (lenghtA + lenghtB);
console.log(areaRect);
console.log(perimeter);

/*20)Найти расстояние между двумя точками с заданными координатами
(x1, y1) и (x2, y2) на плоскости. Расстояние вычисляется по формуле*/
var numX1 = 2132;
var numY1 = 4293;
var numX2 = 6;
var numY2 = 1;
var squareDiffX = Math.pow((numX2 - numX1), 2);
var squareDiffY = Math.pow((numY2 - numY1), 2);
var distance = Math.sqrt((squareDiffX + squareDiffY));
console.log(distance);

/*21)Даны координаты трех вершин треугольника: (x1, y1), (x2, y2), (x3, y3).
Найти его периметр и площадь, используя формулу для расстояния между двумя точками на плоскости (см. задание Begin20). Для нахождения
площади треугольника со сторонами a, b, c использовать формулу Герона*/
var numX1 = 25;
var numY1 = 30;
var numX2 = 16;
var numY2 = -7;
var numX3 = 2;
var numY3 = 3;
//Объединил только  из-за того что задачей ранее расписывал:
var lenghtA = Math.sqrt((Math.pow((numX2 - numX1), 2) + Math.pow((numY2 - numY1), 2)));
var lenghtB = Math.sqrt((Math.pow((numX3 - numX1), 2) + Math.pow((numY3 - numY1), 2)));
var lenghtC = Math.sqrt((Math.pow((numX3 - numX2), 2) + Math.pow((numY3 - numY2), 2)));
var perimeterP = (lenghtA + lenghtB + lenghtC) / 2;
var partGeron = perimeterP * (perimeterP - lenghtA) * (perimeterP - lenghtB) * (perimeterP - lenghtC);
var areaS = Math.sqrt(partGeron);
console.log(parseInt(areaS)); //Стоит ли делать целам числом?
