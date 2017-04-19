//глубокое сравнение обьектов 
function onlyObj(obj1,obj2) {
//проверяем или не примитив 
  if(a === undefined || 
     a === null || 
     typeof a === 'number' || 
     typeof a === 'string'){
    
    return a == b;
  }
  if(b === undefined || 
     b === null || 
     typeof b === 'number' || 
     typeof b === 'string'){
    
    return a == b;
  }
//проверяем или количество елементов совпадает
  if(Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  //сравнение на одинаковое значение в ключах
  //1 способ 
  for(var i = 0, max = aK.length; i < max; i ++) {
    if(aK[i] !== bK[i]) {
      return false;
    } 
  }
  var aK = Object.keys(a),
      bK = Object.keys(b);
  
  //под одинаковыми ключами - одинаковые значения
  
//   for(var key in a) {
//     if(a[key] !== b[key]) {
//       return false;
//     } 
//   }
  
//4 
  for(var key in a) {
    if(typeof a[key] === 'object' || typeof b[key] === 'object') {
      onlyObj(a[key], b[key]);
    } else
      if(a[key !== b[key]]) {
        return false;
      }
  }
  
  return true;
}