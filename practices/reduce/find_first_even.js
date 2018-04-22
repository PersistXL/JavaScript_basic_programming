'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for (var insex in collection) {
    if (collection[insex] % 2 === 0) {
      var result = collection[insex];
      break;
    }
  }
  return result;
}

module.exports = find_first_even;

