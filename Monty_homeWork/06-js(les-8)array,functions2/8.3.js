// 6.14 Напишите функцию createWithoutElemens(arr, str), arr - массив элементов, str - строка 
// с названием эле­мен­тов, которые нужно отсеять в процессе работы функции. 
// Функция возвращает новый массив.
function createWithoutElemens(arr, str) {
  str = str.toUpperCase() + '';
  var filterArr = arr.filter(function(e) {
    return e.nodeName !== str;
  });
  return filterArr;
}
// 6.15 Напишите аналог функции createWithoutElemens(arr, str), arr - массив элементов, 
// str - строка с названием эле­мен­тов или массив таких строк, 
// которые нужно отсеять в процессе работы функции. Функция возвращает новый массив.
function createWithoutElemens2(arr,str) { 
  for(var i = 0 ; i < str.length;i++) {
    var el = str[i].toUpperCase();
    var arr = createWithoutElemens(arr, el);
  }
  return arr;
}

/*7. Напишите функцию createRectangle(m, n), Функция возвращает пустой
 прямоугольный массив m на n. m - количество столбиков, 
n - количество рядов. n и m генерировать рандомно ( 2 < n 12, 4 < m 6).

Напишите функцию createLetter(). Функция возвращает объект - письмо.
Письмо:
- адресат (destination) - создайте массив people, где каждый элемент объект person и 
случайным образом получайте это поле.
- адресант (addressee) - также из массива people.
- время создания (creationTime) - случайное число 0 - new Date().getTime();
- тема (subject) - создайте функцию генерирующую тему из случайного количества слов (1 - 4) 
каждое слово размером 2 - 8 символов.
- сообщение (message) - создайте функцию генерирующую message, можно использовать функцию 
из задания №10 в уроке 6.2.

Положите на случайные позиции массива созданого функциией createRectangle, 
случайное количество писем из случайным содержимым.
Подсчитайте количество писем в массиве.
Наклейте на каждое письмо марку с картинкой, картинки найти в google. (Добавляем поле stamp из ссылкой на картинку).
*/
function getRandomIn(min, max) {//берет случайное число в нужном диапазоне
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createRectangle(m, n) {
    //n = getRandomIn(3, 11);???
    m = getRandomIn(5, 6);
    var rect = [];
    for (var i=0;i<m; i++) {
        rect.push([]);
    }
    return rect;
}
var People = (function() { // конструктор создающий людей
    var People = function(firstName,lastName,address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }  
    return People;
})();
var people = []; // массив с людьми
//создаем людей и наполняем массив
var person1 = new People('Superman','SSS','Kripton Planet');
people.push(person1);
var person2 = new People('Flash','Allen','New York, USA');
people.push(person2);
var person3 = new People('Deadpool','Crazy','Chornobul, Kiev, UA');
people.push(person3);
var person4 = new People('Briuse','Vaine','Gothem city');
people.push(person4);
var person5 = new People('Vlad','Dracula','Transilvania');
people.push(person5);

//функиция выберает случайный аргумент из массива
function rand(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    randomObj = arr[rand];
    return randomObj;
} 
//генерирует случайную строку
function randomStr(n) {
	var result = '',
		words = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	for(var i = 0; i < n; i++) {
		position = Math.floor(Math.random() * (words.length - 1));
		result += words.substring(position, position + 1);
	}
	return result;
}
//случайные слова из случайной строки
function sliceKingdom(n) {
	var newStr = '';
	var str = randomStr(n);
	for(i = str.length; i >= 0; i = i - newStr.length+1) {
		position = Math.floor(Math.random() * (str.length - 1));
		newStr += str.substring(position, position + position) + ' ';
		
	}
	return newStr; //+ '\n' + newStr.slice(6, 21) + '\n' + newStr.slice(3, 12);
}
//конструируем письмо
var createLetter =  (function() {
    var Letter = function(){
        this.destination = rand(people);
        this.addressee = rand(people);
        this.creationTime = new Date().getTime();
        this.subject = sliceKingdom(20);
        this.message = sliceKingdom(100);
    }
    
    return Letter;
})();
var myRect = createRectangle(); 
//заполняем созданный recnangle, в случайном порядке новыми письмами
for(var i = 0, countLetters = getRandomIn(0, myRect.length); i <countLetters; i++) {
    myRect[getRandomIn(0, myRect.length)].push(new createLetter());
}
// подсчет писем ,
function lettersInArr(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){	
        count+=arr[i].length;
    }
    return count;
}


