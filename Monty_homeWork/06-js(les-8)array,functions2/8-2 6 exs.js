/*
6. nodeList
var list = document.querySelectorAll('*'); - магическая строка создаст переменную list и запишет в нее объект со всеми тегами страницы.
1
2
'use strict';
var list = document.querySelectorAll('*');
1. Создайте массив arrList из элементов list.
2. Создайте строку из названий nodeName используя Array.prototype.join()
3. Создайте строку из названий nodeName через разделитель используя Array.prototype.join()
4. Отсортируйте массив arrList от функций, используя sort()
5. Отсортируйте массив arrList по названию тега в алфавитном порядке
6. Отсортируйте массив arrList по названию тега в обратном от задания №5 порядке(не используя Array.reverse())
7. Заданние №6 используя Array.reverse()
9. Создайте массив arrListPlusChildren из элементов массива arrList и их потомков.
10. Создайте массив из 100 элементов массива arrList используя slice().
11. Выведите в консоль все элементы arrList не используя циклов.
11. Создайте массив из nodeName элементов arrList не используя циклов.
12. Создайте массив из withoutSpan c элементов arrList не используя циклов, откинув все span элементы.
13. Создайте массив из withoutElemens c элементов arrList не используя циклов, откинув все elemets.
 Написать функции с 2 аргументами, 1 - масиив, 2 - строка с названием элемента.

 var arr2 =  [{x : 1}, {x : 3}, {x : 4}, {x : 2}];
arr2.forEach((e) => {
 e.toString = function(){return this};
});

var arr2 =  [{x : 1}, {x : 3}, {x : 4}, {x : 2}].sort(function(a, b) {
 return a.x > b.x;
});
*/
var list = document.querySelectorAll('*');
//1
// var arrList = [];
// for(key in list) {
//     array.push(list[key]);

// }
function arrList(obj) {
    var arr = [];
    obj = obj || list;
    for(key in obj) {
        arr.push(obj[key]);
    }
    return arr;
    
}
var arr2 = arrList(list);


//2
// function allPageTags(obj) {
// var str = '',
//     arr = [];
//     for(element in obj) {
//         if(obj[element].nodeName == undefined) {
//             continue;
//         }
//         arr.push(obj[element])
//         str = arr.join('');
//     }
//         return str;
// }

//2 && 3
var arrListJoin = arr2.map(function(e) {
    return e.nodeName;
    
}).join(' ;');


//9
var arrListPlusChildren = [];
var arr3 = [];
for (var key in list) {
	(typeof list[key] !== 'function' && typeof list[key] !== 'number') ?
	arr3.push(list[key]): false;
}

arr3.forEach(function (e) {
	arrListPlusChildren.push(e);
	for (var key in e.children) {
		(typeof e.children[key] !== 'function' && typeof e.children[key] !== 'number') ?
		arrListPlusChildren.push(e.children[key]): false;
	}
});
console.dir(list);
console.dir(arrListPlusChildren);

//10
var sliceList = arrList.slice(0.100);
console.log(sliceList);

//11

arrList.forEach(function (e) {
	console.log(e);
});

//11-2
var nodeNameList = arrList.map(e => e.nodeName);

//12
var arrFilter = arr2.filter(e=> e.nodeName !== 'SPAN');



