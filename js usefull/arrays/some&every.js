var some = function(arr, callback, thisArg) {
  var i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
var every = function(arr, callback, thisArg) {
  var i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

/*
В написанных нами функциях таких итераций не будет — когда будет найдено
 искомое значение функция сразу же прекратит своё выполнение. 
 Подобный подход может дать достаточно ощутимый прирост производительности 
 при работе с большими объемами данных, например,
 с JSON файлами содержащими несколько тысяч объектов.
 */