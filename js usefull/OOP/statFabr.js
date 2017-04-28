//Можно, конечно, создать полиморфную функцию-конструктор User:

 function User(userData) {
  if (userData) { // если указаны данные -- одна ветка if
    this.name = userData.name;
    this.age = userData.age;
  } else { // если не указаны -- другая
    this.name = 'Аноним';
  }

  this.sayHi = function() {
    alert(this.name)
  };
  // ...
}

// Использование

var guest = new User();
guest.sayHi(); // Аноним

var knownUser = new User({
  name: 'Вася',
  age: 25
});
knownUser.sayHi(); // Вася
// Подход с использованием фабричных методов был бы другим. 
// Вместо разбора параметров в конструкторе – делаем два метода: User.createAnonymous и User.createFromData.

function User() {
  this.sayHi = function() {
    alert(this.name)
  };
}

User.createAnonymous = function() {
  var user = new User;
  user.name = 'Аноним';
  return user;
}

User.createFromData = function(userData) {
  var user = new User;
  user.name = userData.name;
  user.age = userData.age;
  return user;
}

// Использование

var guest = User.createAnonymous();
guest.sayHi(); // Аноним

var knownUser = User.createFromData({
  name: 'Вася',
  age: 25
});
knownUser.sayHi(); // Вася
// Преимущества использования фабричных методов:

// Лучшая читаемость кода. Как конструктора – вместо одной большой функции несколько маленьких, так и вызывающего кода – явно видно, что именно создаётся.
// Лучший контроль ошибок, т.к. если в createFromData ничего не передали, то будет ошибка, а полиморфный конструктор создал бы анонимного посетителя.
// Удобная расширяемость. Например, нужно добавить создание администратора, без аргументов. Фабричный метод сделать легко: User.createAdmin = function() { ... }. А для полиморфного конструктора вызов без аргумента создаст анонима, так что нужно добавить параметр – «тип посетителя» и усложнить этим код.
// Поэтому полиморфные конструкторы лучше использовать там, где нужен именно полиморфизм, т.е. когда непонятно, какого типа аргумент передадут, и хочется в одном конструкторе охватить все варианты.

// А в остальных случаях отличная альтернатива – фабричные методы.

// Итого

// Статические свойства и методы объекта удобно применять в следующих случаях:

// Общие действия и подсчёты, имеющие отношения ко всем объектам данного типа. В примерах выше это подсчёт количества.
// Методы, не привязанные к конкретному объекту, например сравнение.
// Вспомогательные методы, которые полезны вне объекта, например для форматирования даты.
// Фабричные методы.