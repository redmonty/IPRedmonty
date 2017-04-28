var Person = function(name) {
  this.name = name;
  this.phrases = null;
};
Person.prototype.say = function(phrase) {
  return this.name + ' says ' + phrase;
}

//1
Person.prototype.grabPhrases = function(phrases) {
  this.phrases = phrases.map(function(phrase) {
    return this.say(phrase);
  }, this)
}

//2 Выполнение функции this.say
//для каждого элемента массива
Person.prototype.grabPhrases = function(phrases) {
  this.phrases = phrases.map(this.say, this)
}
//=============___________________________________________________________________________________
var map = function(arr, callback, thisArgs) {
  var i,
      len = arr.length,
      result = [];
  for(i = 0; i < len; i+=1) {
    result.push(callback.call(thisArgs, arr[i], i , arr));
  }
  return result;
};
//pаботает точно так же, 
//как и метод массивов map, но, как и each, может принимать в качестве аргументов любый другие коллекции.

/*
не используйте метод map для манипуляций с коллекциями DOM элементов, например, чтобы добавить класс всем элементам коллекции.

[].map.call(document.links, function(link) {
  link.classList.add('link');
});
Данный код сработает и всем ссылкам будет добавлен класс link, 
но пимимо этого будет создан дополнительный пустой массив, 
что скажется на производительности при большом объеме итерируемой коллекции.
 В подобных случаях следует использовать исключительно forEach.

Тем не менее, map отлично подходит для получения данных из DOM коллекций. 
Например, получение всех href атрибутов будет выглядеть следующим образом:
 */
var hrefs = [].map.call(document.links, function(link) {
  return link.href;
});