'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var result = [];
  for (var i = 0 ; i<collection.length;i++) {
    if (collection[i] % 2 !== 0) {
      result.push(collection[i]);
    }
  }
  var max = eval(result.join("+"));
  return max / result.length;
}

module.exports = average_uneven;
