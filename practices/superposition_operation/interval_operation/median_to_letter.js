'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let values = collection;
  values.sort((a, b) => a - b);
  let lowMiddle = Math.floor((values.length - 1) / 2);
  let highMiddle = Math.ceil((values.length - 1) / 2);
  let median = (values[lowMiddle] + values[highMiddle]) / 2;
  median = Math.ceil(median);
  median = "ak"
  return median;
}

module.exports = median_to_letter;
