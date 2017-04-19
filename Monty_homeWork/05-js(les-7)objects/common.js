
/*
var list = document.querySelectorAll('*'); - магическая строка создаст переменную list 
и запишет в нее объект со всеми тегами страницы.
1
2
'use strict';
var list = document.querySelectorAll('*');
Все манипуляции делать только с list, код запускать из консоли на странице: Тут
1. Выведите в консоль количество элементов на странице. (тут вам поможет цикл for..in)
2. Выведите в консоль каждый HTML-элемент страницы. (тот же перебор через цикл for..in)
3. Выведите в консоль тип каждого элемента страницы. (console.log(typeof...));
4. Создайте пустую строку, и в нее в столбик конкатенируйте название HTML-элемента. 
(list[key].nodeName - вернет вам название тега)
5. Узнайте сколько тегов span, div, p и a на странице (реализовать в 2 способа: 
indexof в цикле по строке, и перебор for..in по list c if совет: проверку вынести в функцию)
Внимание! При переборе list через цикл for..in у вас будет 5 лишних полей, 
это методы с типом "function" вам нужно делать проверку при переборе(typeof list[key]) 
если тип поля будет "function" его не учитывать. */
//var list = document.querySelectorAll('*');
//Количество элементов на странице
listed(someFunction)


function listed(someFunction) { 
    list = document.querySelectorAll('*');   
    return someFunction();
}
//1 количество элементов на странице
function elementsCount() {
	var counter  = 0;
    for(key in list) {
        if(typeof list[key] == 'function') {
            continue;
        }
        counter++;
    }
    return counter;
}

//2 каждый HTML-элемент страницы.
function allHtmlElements() {
    for(element in list) {
        if(typeof list[element] == 'function') {
            continue;
        }
        console.dir(list[element]);
    }
}
//3 тип каждого элемента страницы.
function elementsType() {
    for(element in list) {
        console.dir(typeof list[element])
    }
}    
//4
function allPageTags() {
var str = '',
    counter = 0;
    for(element in list) {
        if(list[element].nodeName == undefined) {
            continue;
        }
        str += counter + ' ' + list[element].nodeName + ' \n';
        counter++;
    }
        return str;
}
//5-1
function elementsCount() {
var p = 0,
    span = 0,
    div = 0,
    a = 0;
    for(element in list) {
        if (list[element].nodeName == 'P') {
            p++;
        } else 
        if(list[element].nodeName == 'SPAN') {
            span++;
        } else 
        if(list[element].nodeName == 'DIV') {
            div++;
        } else 
        if(list[element].nodeName == 'A') {
            a++;
        }
    }
    console.log("p на странице " + p + '\n' +
                "span на странице " + span + '\n' +
                "div на странице " + div + '\n' +
                "a на странице " + a)
}
//5-2
function elementsCount2() {
    var str = '' + a('span') + '\n'
            + a('p') + '\n'
            + a('div') + '\n'
            + a('a')  ;
    return str;
}

function a (tag) {
    var strBase = allPageTags().toLowerCase();
    var pos = 0;
    var count = 0;
    while(true) {
        var foundPos = strBase.indexOf(tag,pos);

        if(foundPos == -1) {
            break;
        }else
        if(strBase.substr(foundPos, tag.length+1)[tag.length] == ' ') {
            count++;
        }
        pos = foundPos + 1;
    }
    return 'Найдено ' + count + ' елементов типа ' + tag;
}

/*вызовы 1,2,3,4,5-1,5-2
listed(elementsCount); 
listed(allHtmlElements); 
listed(elementsType); 
listed(allPageTags); 
listed(elementsCount);
listed(elementsCount2);
*/

/*
2. idCard
Создайте объект с информацией о себе: имя, фамилия, дата рождения, количество копеек в кармане.
Переберите циклом все свойства и выведите их в консоль в виде:
1
2
3
4
5
6
'use strict';
0 name Дима
1 fname Учкин
2 coins 0
3 дата рождения 05.10.1982
...
3 Удалите свойство о содержании кармане.

*/
//1
var redmonty  = {
    name: 'Ivan',
    surname: 'Putivlenko',
    coins: 500
},
    count = 1;
Object.defineProperty(redmonty, 'dateOfBirthday', {
    value : '20.09.1989',
    enumerable : true,
    writable : false,
    configurable : true
})
//2
for(key in redmonty) {
    console.log(count + ' ' + key + ' ' + redmonty[key]);
    count++;
}
//3
delete redmonty.coins;
