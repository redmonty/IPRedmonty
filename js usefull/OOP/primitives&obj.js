/*Когда вы хотите получить какое-либо свойство или метод для примитивов, 
вы обращаетесь не к самому примитиву, а к объекту, созданному функцией-конструктором данного примитива. 
Другими словами, примитивы не имеют свойств и методов и не являются объектами.

обращение к конструктору String происходит каждый раз, когда вы запрашиваете у строки свойство или метод.
Создаётся новый объект с помощью функции конструктора, 
выполняется определённое действие (получение свойства или выполнение метода), 
а затем созданный ранее объект уничтожается, оставляя после себя только результат
// Получение свойства length строки
let length = 'this is string'.length;
// За сценой
// После получения значения созданный объект уничтожится
let length = (new String('this is string')).length;

не всё в JavaScript является объектом. Для любого объекта можно задать значение свойства вручную.

Когда вы пытаетесь установить свойство у любого примитива, то происходит следующее:
Создаётся новый объект: new String('this is string')
У нового объекта устанавливается свойство length со значением 10
Созданный объект уничтожается
В результате подобной схемы становится очевидно, что данные, находящиеся в исходной переменной не изменяются, 
а все изменения происходят с новым объектом, который в будущем будет просто уничтожен.
То же самое произойдёт и в случае, если вы захотите присвоить новое свойство или метод примитиву

Oтфильтровать все ложные значения из массива, то можно воспользовать функцией Boolean:

const falsyArr = ['', 0, null, 10, 'string', undefined, true, {a: 1}, false];
const truthyArr = falsyArr.filter(Boolean);

// Аналогично
const truthyArr = falsyArr.filter(function (item) {
  return !!item; 
});

// С использование стрелочных функций из ES6
const truthyArr = falsyArr.filter(item => !!item);



Для того, чтобы получить массив ключей из объекта, нужно воспользоваться функцией Object.keys:

const employee = {
  name: 'John',
  phone: '+7 (765) 000-98-34',
  company: 'Opera Software',
  email: 'john@opera.com'
};

const keys = Object.keys(employee);
console.log(keys); // ["name","phone","company","email","key"]
После того, как желаемый массив был получен, его можно перебрать, например, с помощью метода forEach:

keys.forEach(function(key) {
  console.log(key + ': ' + employee[key]);
});

// Выведет
// name: John
// phone: +7 (765) 000-98-34
// company: Opera Software
// email: john@opera.com

функции Object.values() не существует. Но её легко можно заменить методом map в паре с Object.keys():

const values = keys.map(function(key) {
  return employee[key];
});

console.log(values); // ["John","+7 (765) 000-98-34","Opera Software","john@opera.com"]
*/

//для получения ключей или значений из обьекта
function keyOrVal(obj,need) {
    //(object , need = keys || values)
    return need == keys ? keys = Object.keys(obj) : values = keys.map(e => obj[e]);
}
