/*Задание №1.
Есть следующий код.
Допишите код, чтобы функция createArrayIterator() возвращала функцию-перечислитель
для массива, который задается через параметр array.*/

function createArrayIterator(array) {
   var newArray = array; //ввел новую переменную, для того что бы работать с ней(возможно менять что-то), а не с входящими параметрами. Правильно? 
   var i = 0; // "счетчик" для прохождения по массиву
   return function () {
	   return newArray[i++];
   };
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

/*Вопрос: 
Что нужно сделать что бы "обнулить" i?
Потому как если повторно 2, 3, 10 раз еще писать  
console.log(itr()); 
результат после будет только undefined.

Я так понимаю нужно сделать по новой 
var arr2 = [5, 3, 7];
var itr2 = createArrayIterator(arr2);
Правильно?*/