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
    var Human = function(settings) {};
    Human.prototype.build = function(buildingStrength) {
        this.health += buildingStrength;
    };
    return Human;
})();
