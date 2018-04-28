'use strict';
var is_exist_element = function(collection,element){
  var result = [];
  for (var index in collection) {
    if (collection[index] % 2 == 0) {
      result.push(collection[index]);
    }
  }
  if (result.length >= element) {
    return true;
  }else {
    return false
  }
};
module.exports = is_exist_element;
