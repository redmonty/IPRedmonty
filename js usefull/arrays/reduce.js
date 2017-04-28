var reduce = function(arr, callback, startValue) {
  var i,
      len = arr.length,
      result = startValue;
  for(i = 0;i < len; i += 1){
    result = callback.call(null, result, arr[i], i ,arr);
  }
  return result;
}