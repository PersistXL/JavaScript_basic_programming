'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result = [];
  for (var i =0 ;i<collection.length;i++) {
    if (collection[i] % 2 !== 0) {
      result.push(collection[i]);
    }
  }
  result = result.map(result => result * 3 + 5);
  return eval(result.join("+"));
}

module.exports = hybrid_operation_to_uneven;

