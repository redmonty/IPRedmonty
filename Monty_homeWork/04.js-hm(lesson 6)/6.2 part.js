/*1. bigLetter
Напишите функцию bigLetter(str), которая возвращает строку str с заглавным первым символом*/

function bigLetter(str) {
	var firstLetter = str[0].toUpperCase();
	return firstLetter + str.substr(1, str.length);	
}
/*2. zEbRa
Напишите функцию zebra(str), которая возвращает строку str с заглавными символома под непарными номерами
Модифицируйте функции zebra(str, flag), которая возвращает строку str с заглавными символома под 
непарными номерами, если аргумент flag отсутствует или false, если флаг true - заглавные символы под 
парными номерами. (0 определять как парное число)
1
2
3
4
5
6
'use strict';
function zebra(str, flag) {
    ...
}
zebra('hello world', false); // "HeLlO WoRlD"
zebra('hello world', true); // "hElLo wOrLd"*/

function zebra(str, bool) {
	var len = str.length,
		zebraStr = '',
		upper = '',
		lower = '';
		for(var i = 0; i < len; i+=2){
            if(bool == true) {
			    upper = str[i].toUpperCase();
			    lower = str.substring(i+1,i+2).toLowerCase();
			    zebraStr += upper + lower;
            } else
            if(bool == false) {
                lower = str[i].toLowerCase();
	            upper = str.substring(i+1,i+2).toUpperCase();
                zebraStr += lower + upper;
            }
		}
	    return zebraStr;
}

/*3. includes
Напишите функцию includes(base, str), проверяет, включает ли одна строка в себя другую, возвращает true/false.
 (фичи ES6 использовать нельзя)*/

function includes(base, str) {	
	var a = base.indexOf(str);
	if(a == -1) {
		return false;
	}
	return true;
}
/*4. endsWith
Напишите функцию endsWith(base, str), возвращает true, если строка base заканчивается подстрокой str. 
(фичи ES6 использовать нельзя)*/

function endsWith(base, str) {
	var baseEnds = base.substring(base.length - str.length);
	return (a == baseEnds) ? true : false;
}
/*5. startsWith
Напишите функцию startsWith(base, str), возвращает true, если строка base начинается со строки str. 
(фичи ES6 использовать нельзя)*/

function startsWith(base, str) {
	var baseStarts = base.substring(0, str.length);
	return (baseStarts == str) ? true : false;
}
/*6. repeatString
Напишите функцию repeat(str, times), возвращает результат повторения строки str times раз. 
Внутри функции делать проверку аргумента : [times is целое число; times is Number; times > 0; 
times != NaN; times != Infinity]. Если times == 0 вернуть пустую строку.(фичи ES6 использовать нельзя)*/

function repeatString(str, times) {
	var newString = str;
	if((typeof times == 'number')&&
		(times > 0)&&
		(isFinite(times) != true)&&
		(times % 1 == 0)) {

		for(var i = 1; i < times; i++) {
			newString += str;
		}
		return newString;
	} else
	if(times == 0) {
		return '';
	}
}

/*7. reversit
Напишите функцию reversit(str), которая переворачивает строку str. Используйте цикл for, 
который меняет местами первый и последний символы, затем следующие и т. д. до предпоследнего.
Строка str должна передаваться в функцию reversit(str) как аргумент. 
Также организовать безопасность типов - проверять есть ли аргумент str строкой и преобразовать str в строку явно.*/

function reversit(str) {
	var reverseStr = '';
	if(typeof str != 'string') {
		str = '' + str;
	}
	for(var i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i];
	}
	return reverseStr;
}

/*8. getCharJavaScriptUltra+100500DoubleVersion
Напишите функцию require(n) предназначенную для получения денег данных от пользователя. 
Функция получает аргумент n - количество символов, которые нужно получить от пользователя. 
Использовать цикл и prompt, каждый раз запрашивать количество символов которое "должен" пользователь.*/

function require(n) {
  var n = parseInt(prompt('Сколько знаков хотите ввести?', 'n')), 
      str = '', 
      ins;
  
  while (n > 0) {
      ins = prompt('Введите ' + n + ' знаков', '');
      n -= ins.length;
      str += ins;
  }
  console.log(str);
}
/*9. randomStr
Напишите функцию randomStr(n), n - длина строки из случайно сгенерированных символов.*/

function randomStr(n) {
	var result = '',
		words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	for(var i = 0; i < n; i++) {
		position = Math.floor(Math.random() * (words.length - 1));
		result += words.substring(position, position + 1);
	}
	return result;
}

/*10. sliceKingdom (с анг. slices - скибочки:)
Создайте строку randomStr(100). Разбейте эту строку на отдельные слова случайной длины и выведите в консоль.*/
/*11. subKingdom
Используя результаты задания 10:
- Выведите в консоль подстроку с 6 по 20 символ включительно
- Выведите в консоль подстроку начиная с 3 символа, длиной 8 символов*/

function sliceKingdom() {
	var newStr = '';
	var str = randomStr(100);
	for(i = str.length; i >= 0; i = i - newStr.length+1) {
		position = Math.floor(Math.random() * (str.length - 1));
		newStr += str.substring(position, position + position) + ' ';
		
	}
	return newStr + '\n' + newStr.slice(6, 21) + '\n' + newStr.slice(3, 12);
}

/*12. phoneNumber
Дано телефонный номер в формате "0682091234". Нужно его преобразовать в формат "+38 (068) 209-12-34". 
Создайте функцию, которая выполняет эту задачу.*/

function phoneNumber() {
	var n = "0682091234";
	return '+38 (' + n.substring(0,3) + ') ' + n.slice(3,6) + '-' + n.substring(6,8) + '-' + n.slice(8);
}

/*13. myTrim
Функция Trim брезает пробельные символы в начале и в конце строки. Часть стандарта ECMAScript 5, 
но функции trimLeft() и trimRight() не стандартизированы. Напишите свои реализации trimLeft(str) и trimRight(str):
- trimLeft - Обрезает пробельные символы с левой стороны строки
- trimRight - Обрезает пробельные символы с правой стороны строки.*/

function trimRight(str) {
	str = str + '';
	while(str[str.length-1] == ' ') {
		str = str.substring(0, str.length-1);
	}
	return str;
}

function trimLeft(str) {
	var str = str + '';
	while(str[0] == ' ') {
		str = str.substring(1);
	}
	return str;
}


/*14. indexOfAll
Напишите функцию indexOfAll(base, str), которая возвращает список всех вхождений str в строке base
*/

function includes(base, str) {	
	base = base.toLowerCase(),
	str = str.toLowerCase();
	var	list = 'Список вхождений: ',
		count = 0;
	for (var i = base.indexOf(str); i >= 0; i = base.indexOf(str, i + 1)){
    	list+= ' ' +i;
		count++;
	}
	return 'Всего вхождений ' + count + '\n' + list;
}