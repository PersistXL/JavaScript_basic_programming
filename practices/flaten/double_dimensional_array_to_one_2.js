'use strict';

function double_to_one(collection) {

  //在这里写入代码

  var result = [];
  for (var i =0;i<collection.length;i++) {
    for (var j = 0; j < collection[i].length; j++) {
      result.push(collection[i][j]);
    }
  }
  return Array.from(new Set(result));
}

module.exports = double_to_one;
