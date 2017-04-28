// const manager = function(name, sales) {
//     return {
//         name:name,
//         sales:sales,
//         sell:function(thing) {
//             this.sales += 1;
//             return 'Manager ' + this.name + ' sold ' + thing;
//         }
//     }
// };
// const john = manager('John', 10);
// const mary = manager('Mary', 120);
//_____________________________________________
/*оздавая объект с помощью функции-конструктора, вы автоматически 
присваиваете объекту свойство: constructor, которое содержит ссылку на функцию-конструктор, 
с помощью которой был создан объект:

const john = new Manager('John', 10);

console.log(john.constructor); // function Manager(name, sales) { ... };
console.log(john.constructor.name); // Manager
console.log(john instanceof Manager); // true*/ 

// const Manager = function(name, sales) {
//   this.name = name;
//   this.sales = sales;
//   this.sell = function(thing) {
//     this.sales += 1;
//     return 'Manager ' + this.name + ' sold ' + thing;
//   };
// };
// const john = new Manager('John', 10);
// const mary = new Manager('Mary', 120);
//В данном случае, все,потомки Manager, получат свою собственную копию функции sell(). 
//Под каждую подобную функцию выделяется место в памяти. Что не есть хорошо !!!
//Каждый объект в JavaScript обладает прототипом,любой объект получает возможность 
//использовать все методы, записанные в прототипе его функции-конструктора.
//Поэтому стоит перезаписать const Manager, чтоб теперь все методы находились в прототипе 
//и могли быть использованы каждым созданным объектом, но при этом объявлись всего один раз!!!!!

const Manager = function(name, sales) {
    this.name = name;
    this.sales = sales;
};
Manager.prototype = {
    sell : function(thing) {
        this.sales += 1;
        return 'Manager ' + this.name + ' sold ' + thing;
    },
//свойство prototype является не более 
//чем обычным объектом, поэтому, можно сразу же записать несколько методов в прототип
    speak: function(word) {
    return this.name + ' says ' + word;
  }
}
const john = new Manager('John', 10);
const mary = new Manager('Mary', 120);

john.sell('Apple'); // Manager John sold Apple
mary.speak('Hello!'); // Mary says Hello!
/*Когда вы используете метод speak с объектом, сначала происходит проверка того, 
есть ли у самого объекта этот метод. Если метода нет, то далее следует проверка на присутствие метода в прототипе. 
Если метода нет и в прототипе, то метод может быть найден в прототипе прототипа. 
И так далее, пока выполнение не дойдёт до последнего прототипа, 
который всегда содержит в себе все методы функции-конструктора Object.
аким образом, созданный нами объект унаследовал все методы не только от функции, но и от Object
мы можем сами переназначить тот же метод toString для отдельного объекта jojn
Или же можно записать данный метод в прототип Manager, 
чтобы все создаваемые с помощью этой функции-конструктора объекты использовали именно его
*/ 