var Character = (function() {
    var Character = function(settings) {
        this.name = settings.name;
        this.health = settings.health || 100;
        this.exp = settings.exp || 0;
        this.strength = setting.strength || 1;
    };
    Character.prototype.walk = function(steps) {
        console.log(this.name + ' walked ' + steps + ' steps');
    };
    Character.prototype.run = function(steps) {
         console.log(this.name + ' ran ' + 2 * steps + ' steps');
    };

    return Character;
})();
//Теперь мы можем создавать базовую заготовку 
//для любого персонажа, используя модуль 
//Character и конструктор Character:

var character = new Character({
    name: 'John',
    strength: 15,
    exp: 10
});
console.log(character); // {"name":"John", "health":100, "exp":10, "strength":15}
character.walk(10);     // John walked 10 steps
character.run(40);      // John ran 80 steps
/*Заготовка для всех персонажей создана, и мы можем приступать к созданию отдельных классов. 
Начнём с людей и модуля Human. Мы знаем, что любой персонаж, принадлежащий 
к классу людей, умеет строить сооружения для защиты. Для этого отлично подойдёт метод build:*/ 

var Human = (function() {
    var Human = function(settings) {
        Character.apply(this, arguments);
    };

/*Метод Object.create создаёт новый объект с указанным объектом прототипа. 
Таким образом мы можем использовать методы конструктора Human, 
когда они доступны, а в случае, если их нет, то будем обращаться уже к методам конструктора Character*/ 
    Human.prototype = Object.create(Character.prototype);
    Human.prototype.constructor = Character;
    Human.prototype.build = function(buildingStrength) {
        this.health += buildingStrength;
    };
    return Human;
})();

var Orc = (function() {
    var Orc = function(settings) {
        Character.apply(this,arguments);
    };
    Orc.prototype = Object.create(Character.prototype);
    Orc.prototype.constructor = Character;
    Orc.prototype.getAngry = function(color, times) {
        if (color === 'red') {
            this.damage *= times;
        }}
    return Orc;
})();

var Elf = (function() {
  
  var Elf = function(settings) {
    Character.apply(this, arguments);
  };

  Elf.prototype = Object.create(Character.prototype);
  Elf.prototype.constructor = Character;

  Elf.prototype.shoot = function(distance) {
    console.log(this.name + ' shot an arrow to' + distance + ' meters');
  };

  return Elf;
})();

// Таким образом для реализации наследования достаточно всего двух строчек кода:

// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Parent;

//Используйте метод apply для вызова конструктора родителя внутри потомка для записи свойств.
//Для наследования всех методов из прототипа родителя используйте Object.create
//При наследовании не забывайте явно указывать свойство constructor


// var cadiParams = {make: "GM", model: "Cadillac", year: 1955, color: "tan", passengers: 5, convertible: false, mileage: 12892};
// var cadi = new Car(cadiParams);
// if (cadi instanceof Car) {
//  console.log("Congrats, it's a Car!");
// };


// function ShowDog(name, breed, weight, handler) {
//  Dog.call(this, name, breed, weight);
//  this.handler = handler;
// }
// ShowDog.prototype = new Dog();  showDog наследует от Dog
// ShowDog.prototype.constructor = ShowDog;

