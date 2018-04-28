'use strict';
var calculate_average = function(collection){
  //在这里输入代码
  var sum = 0;
  var count = 0
  for (var index in collection) {
    if (collection[index] % 2  === 0) {
      sum += collection[index];
      count++;
    }
  }
  return sum / count;
};
module.exports = calculate_average;
