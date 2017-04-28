function Person(name) {

	this.name = name,
	this.sayHi = function() {
		console.log('hi ' + this.name);
	}
	return false;
}
var a = new Person('Terminator');
Person.getAge = function (obj) {
    console.log(obj.age);
} // конструктору создали метод , статический 

a.sayHi()// сработает

a.getAge()// нет

Person.getAge(a)// так нужно добираться к статическим методам, 
//чтоб их использывать, можно напрямую через екземпляр конструктора


//Array.prototype.join('') === [].join('')

// ────────────────────────────────────────────────────────────────────────────────
a.sayHi.call(person2,arg1,arg2)//об,его метод, - в контексте какого вызвать,аргументы что передадуться sayHi , //изменили this, от a на person 2

var list = document.querySelectorAll('*'),
    arrlist = [];
arrlist = Array.prototype.map.call(list, function(e) {
    return e;
})
//
//––––––––––––––––––————————————–––––––––––––––––––––––––––––––––––––––––––––––––––
var person = {
  name: 'Ivan',
  busy: function() {
    alert('Sorry I`m busy right now!!!');
    setTimeout(() => {//this в стрелочных наслед от места в котором обьявлено, если вне блока , то получает window
      alert('Hi my name is ' + this.name);
    },5000);
  }
};
//person.busy();

function keyOrVal(obj,need) {
    //(object , need = keys || values)
    return need == keys ? keys = Object.keys(obj) : values = keys.map(e => obj[e]);
}
