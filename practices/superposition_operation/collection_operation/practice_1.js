'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var result = collection.map(collection => (collection * 3 + 2));
  return eval(result.join("+"));
}

module.exports = hybrid_operation;

