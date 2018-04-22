'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection.sort((a, b) => a - b);
  let low = Math.floor((collection.length - 1) / 2);
  let higth = Math.ceil((collection.length - 1) / 2);
  return ((collection[low] + collection[higth]) / 2);
}

module.exports = compute_median;


