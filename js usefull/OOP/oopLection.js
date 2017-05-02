/*
Наличие абстракции - когда большой проект, что нужно поделить на куски , модули(большое делим на маленькие части);
Есть разные реализации ООП, в js  прототипное наследование, можно реализовать в функциональном или прототипной стиле;

Парадигмы ООП:

1 - Инкапсуляция - помешение абстракции в об, выделение внутр и внешн интерфейса; 
Внешний - с ним взаимодействуем; Внутренний - к чему не имеем доступа;
Прячем реализацию чего то внутри(модуля) - инкапсулируем;

2 - Наследование - есть животное, котик наследует свойства животного + свои уникальные;

3 - Полиморфизм - одинаковый функционал (одно имя), но реализован по разному для разных типов; 

Прототипы
*/
function Dog(id, name, size) {
 this.id = id;
 this.name = name;
 this.size = size;
 this.storege = 0;
 (() =>{
  this.storege = (size < 20) ? 5 : size *  0.5;
  
 })();//!!!!!!!!


}
Dog.prototype.returnTheBall = function(ball) {
 return ball;
}
Dog.prototype.guff = function() {
 alert('Guff!!!');
}
Dog.prototype.eat = function() {
 return (!!this.storege) ? this.storege-- : this.guff();
}



function homeDog(id,name,size,flat) {
    this.flat = flat;
    var location = 'inside';
    Dog.call(this,id,name,size);
     (() =>{
  this.goWalk = (flat/4 < 3) ? function() {location = 'outside'} : null;
 })();//!!!!!!!!
}
//homedog наследует dog
HomeDog.prototype = Dog.prototype;
HomeDog.prototype.constructor = HomeDog



//!!!!!!!!!!!
function getClass(a) {
 return Object.prototype.toString.call(a).slice(8, -1);
}

