'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum = collection.reduce((previous, current) => current += previous);
  return sum / collection.length;
}

module.exports = compute_average;

