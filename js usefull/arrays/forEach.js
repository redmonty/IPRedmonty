//метод forEach своими руками, кроме массивов может принимать луюые коллекции

var each = function(arr, callback, thisArg) {
  var i,
      len = arr.length;
  for (i = 0; i < len; i += 1) {
    callback.call(thisArg, arr[i], i , arr);
  }
};

var Person = function(name) {
  this.name = name;
};
Person.prototype.say = function(phrase) {
  console.log(this.name + ' says ' + phrase);
}
Person.prototype.mumble = function(phrases) {
  each(phrases, function(phrase) {
    this.say(phrase);
  }, this);
}
var johnDoe = new Person('John Doe');
johnDoe.mumble(['Hello, World!', 'JS is great', 'I\'m designer and i don\'t have job']);

//выполним итерацию над всеми елементами DOM коллекциями своим методом
var links = document.links; // коллекция всех ссылок на странице
each(links, function(link) {
  // Добавление класса link-active для всех ссылок на странице
  link.classList.add('link-active');
});

//реализация на ES6
[...links].forEach(function(link) {
  link.classList.add('link-active'); 
});