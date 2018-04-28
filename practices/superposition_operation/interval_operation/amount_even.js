'use strict';

function amount_even(collection) {

  //在这里写入代码
  var result = [];
  for (var i = 0; i<collection.length;i++) {
    if (collection[i] % 2 ===0) {
      result.push(collection[i]);
    }
  }
  return eval(result.join("+"));
}

module.exports = amount_even;
