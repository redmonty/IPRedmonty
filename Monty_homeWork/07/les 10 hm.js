/*
 1. Векторный тип
Напишите конструктор Vector, представляющий вектор в двумерном пространстве. 
Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
Дайте Vector два метода, plus и minus, которые принимают другой вектор в качестве параметра 
и возвращают новый вектор, который хранит в x и y сумму или разность двух векторов (один this, второй – аргумент).

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length); // Длина вектора
После, реализуйте модуль Vector. Вынесите интерфейс.
*/

// var Vector = (function() {
//     var Vector = function(x,y) {
//         this.x = x;
//         this.y = y;
//     };
//     Vector.prototype = {
//         plus : function(a,b) {
//             var v = new Vector(a, b);  
//             return new Vector(this.x + v.x,this.y + v.y);
//         },
//         minus : function(a,b) {
//             var v = new Vector(a, b);  
//             return new Vector(this.x - v.x,this.y - v.y);
//         }
//     };
//     return Vector;
// })();

var Vector = (function() {
    var Vector = function(x,y) {
        this.x = x;
        this.y = y;
    };
    Vector.prototype = {
        plus : function(a) {
            return new Vector(this.x + a.x,this.y + a.y);
        },
        minus : function(a) { 
            return new Vector(this.x - a.x,this.y - a.y);
        }
    };
    return Vector;
})();




/*
2. Названия месяцев
Напишите простой модуль month, преобразующий номера месяцев (начиная с нуля) в названия и обратно. 
Выделите ему собственное пространство имён, т.к. ему потребуется внутренний массив с названиями месяцев.

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10
*/

var Month = (function() {
    var Month = function(){
        this.month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    };
    Month.prototype = {
        name: function(n) {
            console.log(this.month[n]);
            if(n < 0 || n > 11) {
                console.warn('Принимаються значения от 0 до 11');
            }
        },
        number: function(name) {
            name += '';
            console.log(this.month.indexOf(name));
            if(this.month.indexOf(name) == -1) {
                console.warn('Не существует такого месяца, попробуйте снова');
            }
        }
    };

    return Month;
})();

/*
3. Counter
Реализуйте конструктор счет­чи­ка Counter(id), id уникальный идентификатор счетчика. 
Counter.prototype.count - поле счет­чи­ка. Counter.prototype.reset() - обнуляет счетчик. 
set Counter.prototype.count(value) - позволяет установить счетчик. 
get Counter.prototype.id - возвращает идентификатор счетчика. 
Counter.prototype.autoCounting(timeout) - позволяет установить автоматическое увеличение счетчика через timeout. 
Counter.prototype.startCounting(timeout) - запускает автоматическое увеличение счетчика. 
Counter.prototype.stopCounting(timeout) - отменяет автоматическое увеличение счетчика.
После, реализуйте модуль Counter. Вынесите интерфейс.
*/
var Counter = (function() {
    var Counter = function(id) {
        this.id = id;
        this._count = 0;
        
    };
    Counter.prototype = {
        get : function() {
            return this._count++;
        },
        set : function(val) {
            this._count = val;
        },
        getId: function() {
            return this.id;
        },
        autoCounting: function() {
            this.a = setInterval( function()  {
                console.log(this._count++);
            }, 1000);
        },
        stopCounting : () => {
            clearInterval(this.a);
        }
    };
    return Counter;
})();
//Counter.prototype.autoCounting(timeout) -  устанавливает только время интервала
//Counter.prototype.startCounting - запускает autoCounting
/*
4. allArguments
Напишите функцию allArguments, что выводит в консоль все аргементы переданые функции 
( количество аргументов зарание неизвесно).
*/

function allArguments() {
    arguments.forEach = [].forEach;
    arguments.forEach(i => {console.log(i);})
}
/*
5. allArgumentsAdd
Напишите функцию allArgumentsAdd, что возвращает суму всех аргументов переданных функции 
(количество аргументов зарание неизвесно).
*/

function allArgumentsAdd() {
    //arguments.reduce = [].reduce;
    var sum = Array.prototype.reduce.call(arguments,(total,el) => {
        return total + el;
    }) ;
    return sum;
}

/*
6. Car
Создайте конструктор Car, детально описывающиющий свойство автомобиля (минимум 15 полей).
var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
Создайте массив марок автомобилей и на основе создайте массив из экземпляров Car(brand) (минимум 10 елементов).
 */

var CarBuilder = (function(){
    var Car = function(marka,model,year,color,doors,bool,dest) {
        this.marka = marka;
        this.model = model;
        this.year = year;
        this.color = color;
        this.doors = doors;
        this.bool = bool;
        this.dest = dest;
    }
    return {Car: Car};
})();
var cars = ['Chevy','GM','Webville Motors','Fiat','BMW','Honda','Skoda','Meecedes','Chevrolet'];
var brand = [];
for(var i = 0;i < cars.length; i++) {
    brand.push(new CarBuilder.Car(cars[i],"Bel Air",1957,"red",2,false,1021));
}