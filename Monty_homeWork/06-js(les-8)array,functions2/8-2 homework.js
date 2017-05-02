/*
1. compareFunctionNumber
Напишите функцию compareFunctionNumber(a, b), которая принимает 2 аргумента и возвращает true 
если первый больше второго и false в ином случае. Приводить к числу оба аргумента внутри функции.
*/

function compareFunctionNumber(a, b) {
   a = parseFloat(a), 
   b = parseFloat(b);

   if(!isFinite(a) || !isFinite(b)) {
       throw new Error('Неверно введены аргументы!!!');
   }
   return a > b ? true : false;
}

/*
2. compareFunctionString
Напишите функцию compareFunctionString(a, b), которая сравнивает строки, 
принимает 2 аргумента и возвращает true если первый больше второго и false в ином случае. 
Если тип одного из аргументов не строка, возвращать false.
*/

// Метод str1.localeCompare(str2)возвращает ‐1, если str1<str2, 1, если str1>str2и 0, если они равны.
function compareFunctionString(a, b) {
    var a , b;
    if((typeof a != 'string') || (typeof a != 'string')) {
        return 'Введите строку FALSE'
    }
    return (a.localeCompare(b) == -1) ? false : (a.localeCompare(b) == 0) ? 'Равны' : true;
}


/*
3. compareFunctionString
Напишите функцию compareFunctionType(a, type), которая принимает 2 аргумента 
(первый - значение, второй - строка из типом или подтипом) и возвращает true 
если первый принадлежит к типу второго, false в ином случае.
Список типов и подтипов, которые должна обрабатывать функция:
- undefined
- null
- Number
- NaN
- Infinity
- String
- Boolean
- Object
- Array
- Function
Обратите внимание: строка 'Function', 'function', 'functiOn' должны обрабатываться одинаково 
(опускаем значения аргумента type в нижний регистр).
 */
function compareFunctionType(a, type) {
    if((type === 'Function') ||  (type === 'functiOn') ) {
        type.toLowerCase();
    }
    return (typeof a === type) ? true : false;   
}

/*
4. singleExemplar
Напишите функцию singleExemplar(a), которая принимает 1 аргумент (массив, реализовать безопасность типов) 
и возвращает новый массив, где все элементы уникальны в пространстве массива.
singleExemplar(a) { .. }
var myArray = [null, 1, 2, 2, 3, [1, 2], NaN, 'str', '1', {1}, null, NaN, 1, 3];
singleExemplar(singleExemplar); // [null, 1, 2, 3, [1, 2], NaN, 'str', '1', {1}]
Помните: NaN не равен ничему включая себя.
*/
//4 и 5е задание 
function singleExemplar(arr) {
    //var unique = [...new Set(array)];
    var unique=[], 
		hashes={};
	for(var i = 0; i < arr.length; i++) {
		if(!hashes[JSON.stringify(arr[i])]){
            if(arr[i] == null) {
                unique.push(arr[i]); 
                continue;}
			unique.push(arr[i]);
			hashes[JSON.stringify(arr[i])] = true;
		}
	}
	return [...new Set(unique)];
}
//только у NaN и null будут одинаковые хэши. Для всех false-значений можно предварительно преобразовывать их в строку перед посчетом хэша. 
 //n = unique.indexOf(el) + 1;
/*
5. singleExemplarStrict
Напишите функцию singleExemplarStrict(a), которая принимает 1 аргумент (массив, реализовать безопасность типов) 
и возвращает новый массив, где все элементы уникальны в пространстве массива.
1
2
3
4
'use strict';
singleExemplar(a) { .. }
var myArray = [null, 1, 2, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4], [1, 2, 3]];
singleExemplar(singleExemplar); // [null, 1, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4]]
singleExemplar и singleExemplarStrict работают с примитивами работают аналогично. Но singleExemplarStrict считает массивы 
одинаковими если: 1 - их длины одинаковые, 2 - под одинаковыми индексами стоят одинаковые значения. 
В контексте функции singleExemplarStrict объекты одинаковые если: 1 - у них одинаковое количество ключей
 */
function getType(a ,b) {
        //0
        if (a === undefined ||  a === null || typeof a === 'number' || typeof a === 'string') {
            return a == b;
        }
        else 
        if (b === undefined ||  b === null || typeof b === 'number' || typeof b === 'string') {
            return a == b;
        }
        /*
        var counter = 0;
        for (var key in a) {
            counter++;
        }
        for (var key in b) {
            counter--;
        }
        //2
        if (counter === 0) return false;
        */
        else
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        //3
        var aK = Object.keys(a);
        var bK = Object.keys(b);
        for (var i = 0, max = aK.length; i < max; i++) {
            if (aK[i] !== bK[i]) {
                return false;
            }
        }
        return true;
    }