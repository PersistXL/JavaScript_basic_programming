'use strict';
var single_element = function(collection){
  var result = [];
  var resu = [];
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result.push(collection[i]);
    }
  }

  for (var i = 0; i < distinct(result).length - 1; i++) {
    resu.push(distinct(result)[i]);
  }

  if (distinct(result).length !== 0) {
    return resu;
  }else {
    return [];
  }


};
function distinct(arr) {
  var ret = [],
    length = arr.length;
  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
        j = ++i;
      }
    }
    ret.push(arr[i + 1]);
  }
  return ret;
};
module.exports = single_element;
