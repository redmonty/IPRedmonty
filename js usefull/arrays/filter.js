var filter = function(arr,callback,thisArg) {
  var i,
      len = arr.length,
      results = [];
  for(i = 0;i < len; i+=1) {
    if(callback.call(thisArgs, arr[i], i , arr)) {
      /*Если результат содержит правдивое значение, 
      то данные будут добавлены в массив, 
      если же нет, то просто проигнорированы.*/
      results.push(arr[i]);
    }
  }
  return results;
}

var strs = ['Hello', ',', 'JavaScript', 'World', '!'];

var data = filter(strs, function(str) {
  return str.toLowerCase() !== str;
});

console.log(data); // ["Hello","JavaScript","World"];

//Небольшой хак: чтобы отфильтровать все ложные значения из массива можно воспользоваться конструктором Boolean:

var data = [32, '', null, 'JavaScript', undefined, 0];
var trueData = data.filter(Boolean);
console.log(trueData); // [32,"JavaScript"]